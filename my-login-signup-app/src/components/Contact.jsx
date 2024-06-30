// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Have a project in mind or need more information? Reach out to us and let's discuss how we can help you achieve your goals.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <ul className="list-disc ml-8">
          <li className="mb-2">Phone: +1 (123) 456-7890</li>
          <li className="mb-2">Email: info@example.com</li>
          <li className="mb-2">Address: 123 Main St, City, Country</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
