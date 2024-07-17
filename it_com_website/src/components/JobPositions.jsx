import React from 'react';
import { Link } from 'react-router-dom';

const jobPositions = [
  {
    title: "Software Engineer",
    description: "Develop and maintain web applications.",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EtqOpuewOP5rSURN8E4W8rUPhuGoPK2LKw&s"
  },
  {
    title: "Product Manager",
    description: "Oversee the development and delivery of products.",
    skills: ["Product Strategy", "Project Management", "Market Analysis"],
    image: "https://st2.depositphotos.com/1092019/5761/i/450/depositphotos_57617473-stock-photo-product-manager-vacancy-in-newspaper.jpg"
  },
  {
    title: "UI/UX Designer",
    description: "Design user interfaces and experiences.",
    skills: ["UI Design", "UX Research", "Adobe XD", "Figma"],
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
  },
  {
    title: "Data Scientist",
    description: "Analyze data and build predictive models.",
    skills: ["Data Analysis", "Machine Learning", "Python", "Statistics"],
    image: "https://png.pngtree.com/thumb_back/fh260/background/20191105/pngtree-big-data-science-and-technology-background-image_321141.jpg"
  },
  {
    title: "DevOps Engineer",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
    skills: ["CI/CD", "AWS", "Docker", "Kubernetes"],
    image: "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370941.jpg"
  },
  {
    title: "Frontend Developer",
    description: "Build responsive web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg"
  },
  {
    title: "Backend Developer",
    description: "Develop server-side logic and APIs.",
    skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
    image: "https://img.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg"
  }
];

const JobPositions = () => {
  return (
    <section className="p-6 bg-gray-100 rounded shadow-md my-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Job Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobPositions.map((job, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <h4 className="text-lg font-semibold mb-2">Skills Required:</h4>
              <ul className="mb-4">
                {job.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-700">{skill}</li>
                ))}
              </ul>
              <Link to="/careers" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobPositions;
