"use client";

import React, { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { Client, Account } from 'appwrite';

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <FaInfoCircle /> },
  { href: "/contact", label: "Contact Us", icon: <FaEnvelope /> }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Track login status

  const client = new Client().setProject('6704fc7f000249d39658'); // Replace with your project ID
  const account = new Account(client);

  // Check if the user is logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.get(); // Get current user
        setIsLoggedIn(true); // User is logged in
      } catch (error) {
        console.error('No active session:', error);
        setIsLoggedIn(false); // No active session
      }
    };

    checkSession();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await account.deleteSession('current'); // Delete current session
      setIsLoggedIn(false); // Update state
      alert('Logged out successfully!');
      window.location.href = '/'; // Redirect to home or login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-3 md:p-5 items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 mr-3"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen} // Accessibility improvement
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo Section (visible on large screens) */}
        <div className="hidden md:flex items-center">
          <Image 
            src="/img.jpeg" // Replace with your logo path
            alt="Refer Earn Logo" 
            height={40}
            width={40}
            className="mr-6" // Adjust height as needed
          />
          <span className="text-3xl font-serif text-gray-900 dark:text-white">Refer Earn</span>
        </div>

        {/* Title Section (visible on small screens) */}
        <span className="text-xl font-serif flex-grow text-left md:hidden text-gray-900 dark:text-white">Refer Earn</span>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:ml-auto items-start justify-start text-lg">
          {NAV_ITEMS.map(({ href, label, icon }) => (
            <a 
              key={label} 
              href={href} 
              className="flex items-center mr-5 mb-4 md:mb-0 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-blue-500"
            >
              {icon}
              <span className="ml-1">{label}</span>
            </a>
          ))}
          {isLoggedIn && (
            <a 
              href="/profile" 
              className="flex items-center text-gray-700 dark:text-gray-300 transition duration-200 hover:text-blue-500 mr-5 mb-4 md:mb-0"
            >
              <FaUser />
              <span className="ml-1">Profile</span>
            </a>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 mr-5 mb-4 text-lg md:mb-0"
            >
              Logout
            </button>
          ) : (
            <a 
              href="/login" 
              className="text-blue-500 rounded hover:text-blue-600 mr-5 mb-4 md:mb-0 text-lg"
            >
              Login
            </a>
          )}
        </nav>
      </div>

      {/* Mobile Navigation Links */}
      <nav className={`md:hidden flex flex-col items-start justify-start text-lg bg-white dark:bg-gray-800 ${isOpen ? 'block' : 'hidden'} shadow-md`}>
        {NAV_ITEMS.map(({ href, label, icon }) => (
          <a 
            key={label} 
            href={href} 
            className="flex items-center p-4 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-blue-500"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {icon}
            <span className="ml-1">{label}</span>
          </a>
        ))}
        {isLoggedIn && (
          <a 
            href="/profile" 
            className="flex items-center p-4 text-gray-700 dark:text-gray-300 transition duration-200 hover:text-blue-500"
          >
            Profile
          </a>
        )}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center p-4 text-red-500 transition duration-200 hover:text-red-600"
          >
            Logout
          </button>
        ) : (
          <a 
            href="/login" 
            className="flex items-center p-4 text-blue-500 transition duration-200 hover:text-blue-600"
          >
            Login
          </a>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
