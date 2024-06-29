import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data.status === "Success") {
          navigate("/home", { state: { name: result.data.name } });
        } else {
          navigate("/register");
          alert("You are not registered to this service");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/video/2024/02/25/201947-916877801_tiny.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="text" placeholder="Enter Email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" placeholder="Enter Password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
