import React from 'react';

export default function ContactUs() {
  return (
    <section className="contact-us bg-gradient-to-r from-gray-100 to-white rounded-lg shadow-md py-20 px-8 md:flex md:flex-row md:justify-center md:items-center md:space-x-16">
      <div className="contact-info text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Connect with Us</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Have a question or need assistance? We'd love to hear from you! Our dedicated support team is available to answer your inquiries and help you get the most out of our products and services.
        </p>
        <ul className="contact-list mt-6 list-none space-y-2">
          <li className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l8 8 8-8" />
            </svg>
            <span className="text-gray-600">info@company.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2 2-2 2-4-4 2-2zM3 14v8a4 4 0 0 0 4 4h10v-8l-2-2-7-7z" />
            </svg>
            <span className="text-gray-600">+1 (555) 555-5555</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 5v15a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2v-15a1 1 0 0 0-1-1H9a1 1 0 0 0-1.134.373l-3 3a0.5.5 0 0 1-.746-.746l3-3A1 1 0 0 0 8 5z" />
            </svg>
            <span className="text-gray-600">company.com</span>
          </li>
        </ul>
      </div>
      <div className="contact-form mt-8 md:mt-0 md:w-1/2">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input type="text" id="name" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input type="email" id="email" required defaultValue="sample@email.com" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 mt-2" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea id="message" required rows="5" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 mt-2 resize-none"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
