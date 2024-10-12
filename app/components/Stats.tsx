import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: "2.7K", label: "Downloads", iconPath: "M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" },
    { value: "1.3K", label: "Users", iconPath: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" },
    { value: "74", label: "Lectures", iconPath: "M3 18v-6a9 9 0 0118 0v6 M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" },
    { value: "46", label: "Security Checks", iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

return (
    <section className="text-gray-600 body-font w-full bg-gray-50 dark:bg-gray-800">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            What We Changed?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-300">
            At Refer Earn, we believe in continuous improvement and adapting to meet the needs of our customers. Recently, we revamped our services to enhance your experience significantly. We introduced a user-friendly online platform that streamlines ordering and customer support, making it easier than ever to connect with us. Additionally, we expanded our product range based on your feedback, ensuring that we offer the latest and most relevant solutions tailored to your needs. Our team has undergone extensive training to provide you with exceptional service, and we’ve implemented sustainable practices to minimize our environmental impact. These changes reflect our commitment to excellence and our dedication to serving you better every day.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border border-gray-200 bg-white dark:bg-gray-800 px-4 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d={stat.iconPath}></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-white">{stat.value}</h2>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};

export default StatsSection;
