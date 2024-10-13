"use client";

import React, { useEffect, useState } from 'react';
import { Client, Account } from 'appwrite';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

interface User {
  name: string;
  email: string;
  phone?: string; // Optional field
  bio?: string; // Optional field
  avatar?: string; // Optional field for profile picture
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // State to hold user data
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages
  const client = new Client().setProject('6704fc7f000249d39658'); // Replace with your project ID
  const account = new Account(client);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await account.get(); // Get current user
        setUser(userData); // Set user data to state
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setErrorMessage('Failed to fetch user data. Please try again later.'); // Set error message
      }
    };

    fetchUserData();
  }, []);

  // Check if user data is available or if there is an error
  if (errorMessage) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600">{errorMessage}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Welcome Message */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, {user.name}!</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Just Landed at Your Dashboard!</p>
        </div>

        {/* Profile Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profile Information</h2>
          <div className="flex flex-col items-start mb-4 mt-4">
            <div className="flex items-center mt-2">
              <FaEnvelope className="mr-2 text-gray-600 dark:text-gray-300" />
              <span className='text-gray-600 dark:text-gray-300'>{user.email}</span>
            </div>
            <div className="flex items-center mt-2">
              <FaPhone className="mr-2 text-gray-600 dark:text-gray-300" />
              <span className='text-gray-600 dark:text-gray-300'>{user.phone || "N/A"}</span>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Dashboard;
