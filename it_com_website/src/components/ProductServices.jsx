import React, { useState } from 'react';

const ProductServices = () => {
  // Define product data (replace with actual data)
  const products = [
    {
      id: 1,
      title: "Project Management Software",
      description: "Simplify collaboration and keep projects on track. Our software offers intuitive task management, resource allocation, and progress tracking, ensuring your team works efficiently towards shared goals.",
      image: "https://picsum.photos/seed/1/400/300"
    },
    {
      id: 2,
      title: "Customer Relationship Management",
      description: "Build stronger relationships with your customers. Our CRM software facilitates lead management, sales tracking, and personalized communication, ultimately boosting customer satisfaction and revenue growth.",
      image: "https://picsum.photos/seed/2/400/300"
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "Optimize inventory control with real-time tracking, automated alerts, and integrated analytics for informed decision-making.",
      image: "https://picsum.photos/seed/3/400/300"
    },
    {
      id: 4,
      title: "Human Resource Management Software",
      description: "Streamline HR processes with features like payroll management, employee scheduling, performance evaluation, and compliance tracking.",
      image: "https://picsum.photos/seed/4/400/300"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Launch and scale your online store effortlessly. Our e-commerce solutions offer customizable storefronts, secure payment gateways, and inventory management tools.",
      image: "https://picsum.photos/seed/5/400/300"
    },
    {
      id: 6,
      title: "Data Analytics Solutions",
      description: "Harness the power of data with advanced analytics tools. Gain insights, visualize trends, and make data-driven decisions to drive business growth.",
      image: "https://picsum.photos/seed/6/400/300"
    },
    {
      id: 7,
      title: "Cloud Computing Services",
      description: "Drive innovation and agility with scalable cloud solutions. Benefit from secure storage, flexible computing power, and seamless integration.",
      image: "https://picsum.photos/seed/7/400/300"
    },
    {
      id: 8,
      title: "Cybersecurity Solutions",
      description: "Protect your business from cyber threats with robust security measures. Safeguard data, ensure compliance, and mitigate risks effectively.",
      image: "https://picsum.photos/seed/8/400/300"
    },
    {
      id: 9,
      title: "Marketing Automation Software",
      description: "Automate marketing campaigns, lead nurturing, and customer engagement. Enhance efficiency and drive ROI with personalized marketing strategies.",
      image: "https://picsum.photos/seed/9/400/300"
    },
    {
      id: 10,
      title: "Mobile App Development",
      description: "Create powerful mobile applications tailored to your business needs. From ideation to deployment, we offer end-to-end mobile app development services.",
      image: "https://picsum.photos/seed/10/400/300"
    },
    {
      id: 11,
      title: "ERP Solutions",
      description: "Integrate business processes across departments with enterprise resource planning solutions. Improve efficiency, reduce costs, and optimize workflows.",
      image: "https://picsum.photos/seed/11/400/300"
    },
    {
      id: 12,
      title: "AI and Machine Learning",
      description: "Harness AI and machine learning to automate tasks, gain predictive insights, and enhance decision-making capabilities.",
      image: "https://picsum.photos/seed/12/400/300"
    },
    {
      id: 13,
      title: "Blockchain Technology",
      description: "Implement secure and transparent transactions with blockchain technology. Explore decentralized applications and transform industries.",
      image: "https://picsum.photos/seed/13/400/300"
    },
    {
      id: 14,
      title: "Virtual Reality Solutions",
      description: "Immerse users in virtual environments with VR solutions. From training simulations to interactive experiences, redefine engagement and innovation.",
      image: "https://picsum.photos/seed/14/400/300"
    },
    {
      id: 15,
      title: "Payment Processing Solutions",
      description: "Secure and streamline payment transactions with integrated payment gateways, fraud prevention, and recurring billing options.",
      image: "https://picsum.photos/seed/15/400/300"
    }
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Logic to slice products based on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="product-services bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">Our Products & Services</h2>
        <p className="text-gray-600 text-center mt-4 md:text-left md:max-w-2xl mx-auto">
          Empowering businesses with innovative software solutions. We offer a comprehensive range of products and services designed to help you streamline operations, enhance efficiency, and achieve your growth goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-8">
          {/* Render products for current page */}
          {currentProducts.map(product => (
            <div key={product.id} className="product-card shadow-md rounded-lg overflow-hidden bg-white hover:shadow-xl transition duration-300">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="px-4 py-4">
                <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(pageNumber => (
            <button
              key={pageNumber + 1}
              onClick={() => paginate(pageNumber + 1)}
              className={`px-4 py-2 mx-1 bg-gray-200 text-gray-800 rounded-md focus:outline-none hover:bg-gray-300 ${currentPage === pageNumber + 1 ? 'bg-indigo-600 text-white' : ''}`}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductServices;
