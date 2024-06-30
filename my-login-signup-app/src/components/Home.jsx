// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Professional Website</h1>
      <p className="text-lg">
        Welcome to our professional website dedicated to providing high-quality services in web development and digital solutions. We specialize in creating robust, scalable web applications tailored to meet our clients' unique needs. Explore our services, learn about our team, and contact us to discuss your next project.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Our Services</h2>
        <ul className="list-disc ml-8">
          <li className="mb-2">Custom Web Development</li>
          <li className="mb-2">Responsive Design</li>
          <li className="mb-2">E-commerce Solutions</li>
          <li className="mb-2">SEO Optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
