import React from 'react';
import Testimonials from '../components/Testimonials';
import JobPositions from './JobPositions';
import CoursesToDisplay from './CoursesToDisplay';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 flex justify-center items-center h-full">Welcome to Our Website</h1>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Job Positions Section */}
      <JobPositions/>

      {/* Courses Section */}
      <CoursesToDisplay/>
      {/* Feedback Form */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <form className="w-full max-w-md bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Feedback:
            </label>
            <textarea
              id="feedback"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">
              Need help? Ask our{' '}
              <a href="#" className="text-blue-400">
                Virtual Assistant
              </a>
              .
            </h2>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  Find an Academy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-400">
                  Teach with us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  Hire with us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full text-center mt-6">
            <h2 className="text-lg font-bold mb-4">Follow us</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=102916&format=png&color=000000"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <div className="w-full text-center mt-6 text-sm">
            <p>
              Networking Academy is a global IT and cybersecurity education
              program that partners with learning institutions around the world
              to empower all people with career opportunities. It is our
              largest and longest-running{' '}
              <a href="#" className="text-blue-400">
                Corporate Social Responsibility
              </a>{' '}
              program.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-blue-400">
                Terms and Conditions
              </a>
              <a href="#" className="text-blue-400">
                Privacy Statement
              </a>
              <a href="#" className="text-blue-400">
                Cookie Policy
              </a>
              <a href="#" className="text-blue-400">
                Data Protection
              </a>
              <a href="#" className="text-blue-400">
                Accessibility
              </a>
              <a href="#" className="text-blue-400">
                Trademarks
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
