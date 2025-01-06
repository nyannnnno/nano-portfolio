import React from 'react';

const projects = [
  {
    title: "Hotel ERP",
    description: "Design Hotel ERP website case study 'Anatara Hotel'",
    image: "../images/devproject3.png",
    link: "https://github.com/peamz4/Hotel-ERP.git",
    category: "front-end evelopment (tsx, react, tailwind)",
  },
  {
    title: "Adopt Me Please",
    description: " Website for the adop of stray dogs has been created for the 'Adopt Me Please' facebook page.",
    image: "../images/devproject2.png",
    link: "https://adoptmeplease-th.fun/",
    category: "Full stack developer (HTML, CSS, tailwind, PHP, SQL)",
  },
  {
    title: "Art toys Website",
    description: "A responsive gashapon website includes gashapon animation, custom character, and fun quiz.",
    image: "../images/devproject1.png",
    link: "http://site001.ap.tu.ac.th/Master2025/Pin/final/final/ArtToys.html#gachapon",
    category: "Full stack developer (HTML, CSS, tailwind)",
  },
  {
    title: "Open house Website",
    description: "Bangkok University's open house website",
    image: "../images/devproject4.png",
    link: "https://github.com/PALONGPONG/OPH-BU-CS319.git",
    category: "Full stack developer (HTML, CSS, tailwind)",
  },
  {
    title: "Inspecta",
    description: "UX/UI design for house inspector mobile application",
    image: "../images/devproject5.png",
    link: "https://www.figma.com/proto/iU2FfHz0O4MvyyYsSFZJAU/Untitled?node-id=2-18&p=f&t=RCugnM0wYSlqcBXn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A18",
    category: "UX/UI design",
  },
  {
    title: "DakDe",
    description: "UX/UI design for food delivery mobile application",
    image: "../images/devproject6.png",
    link: "https://www.figma.com/proto/xilLtm8COuvRdvLsiySPk9/application-food-delivery?node-id=28-9&p=f&t=FQovWYnqvVzYo4T8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=830%3A6374&show-proto-sidebar=1",
    category: "UX/UI design",
  },
  {
    title: "Clinic ERP",
    description: "UX/UI design for clinic ERP website",
    image: "../images/devproject7.png",
    link: "https://www.figma.com/proto/aUcGJYrxpDf5sJW2Jdpd8j/Clinic?node-id=43-24&starting-point-node-id=23%3A33&scaling=scale-down-width&content-scaling=fixed&t=WDR5tiu9GOKSKMxS-1",
    category: "UX/UI design",
  },
];

const ProjectCard = ({ title, description, image, link, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline text-sm"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <section className="py-10">
      <h2 className='mb-8 text-center italic text-2xl'>development</h2>
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              category={project.category} // Pass category as prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
