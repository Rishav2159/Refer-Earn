import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
const Hero: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/r.png"
          height={400}
          width={720}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Refer Earn : Let&apos;s Grow
          </h1>
          <p className="mb-8 leading-relaxed">
            In a world where opportunities are abundant yet elusive, &quot;Refer Earn&quot; stands as a beacon of growth and collaboration. Imagine a platform where your connections not only enrich your life but also reward you for sharing them. With every referral, you’re not just introducing someone to a service; you’re opening doors to new possibilities for both yourself and those around you.

          </p>


          <div className="flex justify-center">
            <a href="/profile">
              <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-200 ease-in-out transform hover:scale-105">
                Let&apos;s Go <FaArrowRight className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
