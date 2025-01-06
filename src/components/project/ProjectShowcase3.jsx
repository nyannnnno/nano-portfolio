import React from 'react';

const projects = [
  {
    title: "BU X KAIT 2024",
    description: "Internship collaboration with Kanagawa Institute Of Technology.",
  },
  {
    title: "BU X KAIT Talk&Internship",
    description: "Master of ceremonies for BU X KAIT Talk&Internship",
  },
  {
    title: "BAM X BU Unicorn Battle 2024",
    description: "Master of ceremonies for BAM X BU Unicorn Battle",
  },
  {
    title: "BU X KAIT Final Presentation",
    description: "Master of ceremonies for BU X KAIT Final Presentation",
  },
  {
    title: "BU x The Able by King Power : Collaborative Pathway",
    description: "a representative to provide a summary and express gratitude",
  },
];

const ProjectCard = ({ title, description}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

const ProjectShowcase3 = () => {
  return (
    <section className="py-8">
      <h2 className='mb-8 text-center italic text-2xl'>activities</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase3;
