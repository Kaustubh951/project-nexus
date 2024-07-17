import React from 'react';

const Careers = () => {
  const jobVacancies = [
    {
      position: "Software Engineer",
      location: "San Francisco, CA",
      description: "We are looking for a talented Software Engineer to join our team in San Francisco. You will be responsible for developing high-quality software solutions, collaborating with cross-functional teams, and contributing to our product innovation.",
      applyLink: "#"
    },
    {
      position: "Product Designer",
      location: "New York, NY",
      description: "Join our design team in New York and help create intuitive and visually appealing user experiences. You will work closely with product managers and engineers to deliver designs that meet user needs and business goals.",
      applyLink: "#"
    },
    {
      position: "Marketing Specialist",
      location: "London, UK",
      description: "We are seeking a Marketing Specialist to drive our global marketing initiatives from our London office. You will develop and execute marketing campaigns, analyze market trends, and collaborate with internal teams to enhance brand awareness.",
      applyLink: "#"
    },
    {
      position: "Customer Support Representative",
      location: "Remote",
      description: "Join our remote customer support team and help resolve customer inquiries and issues. You will provide exceptional service, troubleshoot problems, and ensure customer satisfaction through effective communication and problem-solving skills.",
      applyLink: "#"
    },
    {
      position: "Data Analyst",
      location: "Chicago, IL",
      description: "We are hiring a Data Analyst to analyze large datasets, generate insights, and support data-driven decision-making processes in our Chicago office. You will collaborate with stakeholders to understand business requirements and deliver actionable insights.",
      applyLink: "#"
    }
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobVacancies.map((job, index) => (
            <div key={index} className="mb-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-3xl leading-9 font-bold text-gray-900">{job.position}</h2>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">Position</dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">{job.position}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">Location</dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">{job.location}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">Description</dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">{job.description}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">Apply</dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
                        <a href={job.applyLink} className="text-indigo-600 hover:text-indigo-900">Apply Now</a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;
