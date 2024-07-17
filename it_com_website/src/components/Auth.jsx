import React, { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    setIsLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white p-8 rounded shadow">
          {isLogin ? (
            <form onSubmit={handleLogin}>
              <h1 className="text-2xl font-bold mb-6">Log In</h1>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Log In
              </button>
              <p className="mt-4 text-gray-600">
                Don't have an account? <button type="button" className="text-blue-500 hover:text-blue-700" onClick={toggleAuthMode}>Sign Up</button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
              <p className="mt-4 text-gray-600">
                Already have an account? <button type="button" className="text-blue-500 hover:text-blue-700" onClick={toggleAuthMode}>Log In</button>
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
