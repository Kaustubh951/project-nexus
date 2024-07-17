import React from 'react';

const CoursesToDisplay = () => {
  const courses = [
    {
      title: 'Full Stack Development',
      description: 'Learn to build web applications from scratch.',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg',
      link: '/apply/full-stack-development', 
    },
    {
      title: 'Data Science',
      description: 'Master data analysis and machine learning techniques.',
      image: 'https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg',
      link: '/apply/data-science', 
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive and visually appealing user interfaces.',
      image: 'https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg', // Example online image URL
      link: '/apply/ui-ux-design',
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={course.image}
                alt={`${course.title} course`}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <a
                  href={course.link}
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md text-center transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesToDisplay;
