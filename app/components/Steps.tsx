import React from 'react';

const Steps: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800">
      <div className="container px-5 py-10 mx-auto">
        <Feature
          title="Analyze First!"
          description="Before making decisions, take time to analyze our services and offerings. Understanding our strengths ensures you make informed choices."
          iconPath="M22 12h-4l-3 9L9 3l-3 9H2"
          reverseOrder={false}
        />
        <Feature
          title="Let it Go!"
          description="Once you've analyzed our offerings and feel confident in your decision, take the next step! Engage with us, explore our services, and experience the benefits firsthand."
          iconPath="M5 12h14M12 5l7 7-7 7"
          reverseOrder={true}
        />
        <Feature
          title="Refer Your Buddies Too!"
          description="Refer a friend and unlock rewards! Share the benefits of our service with someone you care about and enjoy together."
          iconPath="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
          reverseOrder={false}
        />
        <Button />
      </div>
    </section>
  );
};

const Feature: React.FC<{
  title: string;
  description: string;
  iconPath: string;
  reverseOrder: boolean;
}> = ({ title, description, iconPath, reverseOrder }) => {
  return (
    <div className={`flex items-center lg:w-3/5 mx-auto border-b pb-10 pt-10 border-gray-200 dark:border-gray-700 sm:flex-row flex-col ${reverseOrder ? 'sm:flex-row-reverse' : ''}`}>
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-500 dark:text-indigo-200 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d={iconPath}></path>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-10 sm:mt-0">
        <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">{title}</h2>
        <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Button: React.FC = () => {
  return (
    <a href='/price'>
      <button className="flex mx-auto text-white bg-indigo-500 border mt-10 border-transparent py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105">
        Go & Boom!
      </button>
    </a>
  );
};

export default Steps;
