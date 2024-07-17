import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const testimonialsData = [
  {
    id: 1,
    quote: "Networking Academy has been instrumental in training our staff in cybersecurity. Their courses are comprehensive and up-to-date, and our employees appreciate the interactive learning experience.",
    author: "John Doe",
    position: "CEO, CyberTech Solutions",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    quote: "We partnered with Networking Academy to develop a customized networking curriculum for our students. The program's hands-on labs and industry certifications have significantly enhanced our graduates' employability.",
    author: "Jane Smith",
    position: "Director of Education, TechEd Institute",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "I have been a part of Networking Academy's community for several years, and their resources have helped me advance my career in IT. The learning modules are engaging and practical.",
    author: "Michael Johnson",
    position: "IT Specialist",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 4,
    quote: "Networking Academy's courses are designed to be accessible and effective. As a working professional, I appreciate the flexibility of their online learning platform.",
    author: "Sarah Williams",
    position: "Network Administrator",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full text-center transform transition duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonialsData[currentTestimonial]?.image}
                alt={testimonialsData[currentTestimonial]?.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold">{testimonialsData[currentTestimonial]?.author}</h4>
                <p className="text-gray-600">{testimonialsData[currentTestimonial]?.position}</p>
                <div className="mt-2">
                  {[...Array(testimonialsData[currentTestimonial]?.rating)].map((star, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-lg mb-4">{testimonialsData[currentTestimonial]?.quote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
