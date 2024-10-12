import React from 'react';

const Steps: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Feature
          title="Shooting Stars"
          description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
          iconPath="M22 12h-4l-3 9L9 3l-3 9H2"
          reverseOrder={false}
        />
        <Feature
          title="The Catalyzer"
          description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
          iconPath="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
          reverseOrder={true}
        />
        <Feature
          title="The 400 Blows"
          description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
          iconPath="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
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
    <div className={`flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ${reverseOrder ? 'sm:flex-row-reverse' : ''}`}>
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d={iconPath}></path>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const Button: React.FC = () => {
  return (
    <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button>
  );
};

export default Steps;
