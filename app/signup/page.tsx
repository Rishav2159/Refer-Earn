"use client";

import React, { useState } from 'react';
import { Client, Account } from 'appwrite';

const SignUpSection: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // State for phone number
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize Appwrite client
  const client = new Client().setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
                             .setProject('6704fc7f000249d39658'); // Your project ID
  const account = new Account(client); // Create an Account instance

  // Function to handle sign up
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset error message
    setErrorMessage(null);

    // Basic validation
    if (!userId || !fullName || !email || !password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      // Create a new user account
      await account.create(userId, email, password); // Create a new user
      alert('Account created successfully!'); // Simulate successful account creation
      window.location.href = '/login'; // Redirect after successful account creation
    } catch (error) {
      console.error('Error creating account:', error);
      setErrorMessage('An error occurred while creating your account. Please try again.'); // Set error message on failure
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-lg">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Display error message */}
          <form onSubmit={handleSignUp}>
            <div className="relative mb-4">
              <label htmlFor="user-id" className="leading-7 text-sm text-gray-600">User ID</label>
              <input
                type="text"
                id="user-id"
                name="user-id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration=200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone-number" className="leading-7 text-sm text-gray600">Phone Number (optional)</label>
              <input
                type="text"
                id="phone-number"
                name="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account link */}
          <p className="text-md text-gray-500 mt-3">
            Already have an account? 
            <a href="/login" className="text-indigo-500 ml-1">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
