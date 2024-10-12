import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg animate-pulse">About Us</h1>
      <p className="mt-4 text-lg max-w-3xl text-center px-4">
        Welcome to our world! 🌍 We are not just a team; we are a family of innovators, dreamers, and doers.
        Our mission is to craft unforgettable experiences through our products and services.
      </p>

      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-4xl font-semibold mb-4 animate-bounce">Our Values</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>🌟 <strong>Integrity:</strong> We believe in transparency and honesty.</li>
          <li>🚀 <strong>Innovation:</strong> Creativity is at the heart of everything we do.</li>
          <li>😊 <strong>Customer Satisfaction:</strong> Your happiness fuels our passion.</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Journey!</h2>
        <p className="text-lg max-w-xl mb-6">
          We invite you to be part of our story. Together, let&apos;s create something extraordinary!
        </p>
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
          aria-label="Get Involved"
        >
          Get Involved
        </button>
      </div>

      <footer className="mt-12 text-sm">
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
