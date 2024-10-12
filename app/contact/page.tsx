"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send('service_syujl1n', 'YOUR_TEMPLATE_ID', formData, 'tech.refereran@gmail.com')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="text-gray-600 body-font relative bg-white dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-300">
            If facing any issue, you are welcomed to share with us.
            Write your query/issue properly.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full md:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button type="submit" 
                      aria-label="Send Message" 
                      className="flex mx-auto text-white bg-indigo-500 border border-transparent py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300">
                Send Message
              </button>
            </div>
            {isSent && (
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-green-500">Message sent successfully!</p>
              </div>
            )}
            {error && (
              <div className="p2 w-full pt8 mt8 border-t border-gray200 text-center">
                <p className="text-red500">{error}</p>
              </div>
            )}
            <div className="p2 w-full pt8 mt8 border-t border-gray200 text-center">
              <a href={`mailto:tech.referearn@gmail.com`} 
                 className="text-indigo500">tech.referearn@gmail.com</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
