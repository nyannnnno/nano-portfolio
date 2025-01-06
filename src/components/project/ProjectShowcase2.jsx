import React from 'react';

const projects = [
  {
    title: "SHOWTIME",
    description: "Startup project aims to solve the problem of needing to use the restroom or outside during a movie.The slogan is 'Movie to go : Where everywhere is a cinema.' Allowing users to watch missed scenes when stepping out of the theater.Part of the project BAM x BU Unicorn Battle 2024, which has received an honorable mention award",
    image: "../images/pm1.png",
  },
];

const ProjectCard = ({ title, description, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

const ProjectShowcase2 = () => {
  return (
    <section className="">
      <h2 className='mb-8 text-center italic text-2xl'>project manager</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase2;
