import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-12">
  <div className="container mx-auto px-4 flex flex-col items-center justify-center">
    <h1 className="text-5xl font-light text-center">About Us</h1>
    <p className="text-center text-xl mt-2">Discover the story behind our journey</p>
  </div>
</div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Mission Section */}
        <section className="py-12">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <img
                src="https://lh3.googleusercontent.com/sarNvJGsElTyskguj3eBs8jWOiO3GZzu0FTOotLbaVX4D9Wt17OLO7MRdFiedqYyzjL44Hl8y3WzgOmMOCarw9poy4C1m1f8Sb9jgtULLDgpyeM9dnY=w2880-l90-sg-rj-c0xffffff"
                alt="Mission"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To organize the world’s information and make it universally
                accessible and useful.
              </p>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-12 bg-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <ul className="text-lg leading-relaxed">
                <li className="mb-2">
                  <span className="font-semibold">Focus on the user:</span> Our
                  work begins and ends with the user.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Empowerment:</span> Every
                  person should have access to the opportunities the web
                  offers.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Responsibility:</span> How we
                  approach our work is as important as what we produce.
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img
                src="https://lh3.googleusercontent.com/O_VZ1PvbFeS9-c9P0CoHWYt5oaJr8lZ4Pm20aNI6Bjx4YAUTyb9sclHdyMmzwiH2hdy5iDOsGzyEqnw-yyWbJjEwc23f_cffCBPHXw=w2880-l90-sg-rj-c0xffffff"
                alt="Values"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        {/* History Section */}
        <section className="py-12">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <img
                src="https://lh3.googleusercontent.com/1JvhW704_8lBg1F74xwU-YNC6x71cvz_MtPXV5axOd7BDkqW8_U7yIQgb2yykQZ03u3UTbaAIZpOGMW4NhvUk7-UU2bzm8v_qRZLUA=w2880-l90-sg-rj-c0xffffff"
                alt="History"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <h2 className="text-3xl font-semibold mb-4">Our History</h2>
              <p className="text-lg leading-relaxed">
                Google was founded in September 1998 by Larry Page and Sergey
                Brin while they were Ph.D. students at Stanford University in
                California.
              </p>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="py-12 bg-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
              <p className="text-lg leading-relaxed">
                Our team is committed to helping you unleash the power of
                technology and build a better web.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img
                src="https://lh3.googleusercontent.com/fl-GT6w3Ls6RT4vYnbkuYUyLY3lZJH8VtZ7xzxiym9YYaoVRCnZehdz6Icd0oAf6i3H9-O5cCNs6eunlxWr_Csstgsb98DdzNdLFBOlhw9NUfHdyuQjI=w1536-h2048-n-l50-sg-rj"
                alt="Team"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6l4 2V8l-4-2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6l4 2V8l-4-2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6l4 2V8l-4-2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
