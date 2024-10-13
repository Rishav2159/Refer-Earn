"use client";

import React, { useState } from 'react';
import { Client, Account } from 'appwrite';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const client = new Client().setProject('6704fc7f000249d39658'); // Replace with your project ID
  const account = new Account(client);

  // Function to handle login
  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      console.log('Login successful'); // Handle successful login
      
      // Redirect to contact page after successful login
      window.location.href = '/profile'; // Change this to your desired route

    } catch (error) {
      console.error('Login failed:', error);
      if (error instanceof Error) {
        setErrorMessage(error.message); // Set error message for display
      } else {
        setErrorMessage('An unknown error occurred.'); // Fallback for unknown errors
      }
    }
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Call the login function with email and password
    login(email, password);
    
    // Clear the form fields after submission (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Login
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Don&apos;t have an account? 
              <a href="/signup" className="text-indigo-500 ml-1">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
