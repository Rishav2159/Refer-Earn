"use client";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-8">
        {/* Animated Gradient Text with Reduced Margin */}
        <motion.h1 
          className="absolute top-5 text-center text-[60px] sm:text-[80px] md:text-[100px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-10 sm:mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          Refer Earn
        </motion.h1>

        <div className="text-center lg:w-2/3 w-full mt-32">
          <motion.h1
            className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s Grow
          </motion.h1>

          <motion.p
            className="mb-8 leading-relaxed text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            In a world where opportunities are abundant yet elusive, &quot;Refer Earn&quot; stands as a beacon of growth and collaboration. Imagine a platform where your connections not only enrich your life but also reward you for sharing them. With every referral, you’re not just introducing someone to a service; you’re opening doors to new possibilities for both yourself and those around you.
          </motion.p>

          <div className="flex justify-center">
            <a href="/profile">
              <motion.button
                className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Go <FaArrowRight className="ml-2" />
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      {/* CSS for Animated Gradient */}
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-image: linear-gradient(270deg, #4f46e5, #a855f7, #4f46e5);
          background-size: 400% 400%;
          animation: gradient-animation 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
