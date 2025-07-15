import React, { useState } from "react";
import { myproject, projects } from "../../constants";


const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
<section
  id="work"
  className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
>
  {/* Section Title */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
    <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
    <p className="text-gray-400 mt-4 text-lg font-semibold">
      A showcase of the projects I have worked on, highlighting my skills
      and experience in various technologies
    </p>
  </div>

  {/* Dynamic Apple Window Style Grid */}
  <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
    {myproject.map((project) => (
      <div
        key={project.id}
        className="bg-gray-900 border border-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
      >
        {/* Apple Window Top Bar */}
        <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Image */}
        <div className="p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-500 mb-4 pt-4">{project.description}</p>

          <div className="mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-center">
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm font-semibold transition"
            >
              Show Project
            </a>
             <a
              href={project.codegit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm font-semibold transition  ml-4"
            >
              CODE
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


  );
};

export default Work;
