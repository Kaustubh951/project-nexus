// src/components/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-400" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-400" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-400" />
          </div>
          <button type="submit" className="block w-full p-3 text-center text-white bg-indigo-500 rounded-sm hover:bg-indigo-600">Sign Up</button>
        </form>
        <p className="text-xs text-center sm:px-6">Already have an account? 
          <Link to="/" className="underline">Login</Link> {/* Ensure correct path to login */}
        </p>
      </div>
    </div>
  );
};

export default Signup;
