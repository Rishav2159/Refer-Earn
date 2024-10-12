"use client";

import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <FaInfoCircle /> },
  { href: "/contact", label: "Contact Us", icon: <FaEnvelope /> },
  { href: "#", label: "Profile", icon: <FaUser /> }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-3 md:p-5 items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 mr-3"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
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
          <span className="text-3xl font-serif">Refer Earn</span>
        </div>

        {/* Title Section (visible on small screens) */}
        <span className="text-xl font-serif flex-grow text-left md:hidden">Refer Earn</span>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:ml-auto items-start justify-start text-lg">
          {NAV_ITEMS.map(({ href, label, icon }) => (
            <a 
              key={label} 
              href={href} 
              className="flex items-center mr-5 mb-4 md:mb-0 text-gray-700 transition duration-200 hover:text-blue-500 rounded p-2"
            >
              {icon}
              <span className="ml-1">{label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Links */}
      <nav className={`md:hidden flex flex-col items-start justify-start text-lg ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        {NAV_ITEMS.map(({ href, label, icon }) => (
          <a 
            key={label} 
            href={href} 
            className="flex items-center p-4 text-gray-700 transition duration-200 hover:text-blue-500"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {icon}
            <span className="ml-1">{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
