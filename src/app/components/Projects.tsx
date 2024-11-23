import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A beautiful Portflio website built using HTML, CSS and Javascript.",
    imageUrl: "/images/pro.jpg",
    link: "https://673cedfe1d9cb14166c9fd41--aquamarine-quokka-463e1d.netlify.app/"
  },
  {
    title: "Simple Calculator",
    description: "A beautifull calculator is build using Next js, Reat and Tailwind CSS.",
    imageUrl: "/images/download.jpeg",
    link: "https://github.com/sabasamad262/calculator.git"
  },
  {
    title: "Animated Gellary",
    description: "Beautifull Image gellary build using using HTML, CSS and Javascript.",
    imageUrl: "/images/img.jpeg", 
    link: "https://6739ea074d832fbc9d8c523e--graceful-pony-9f50e7.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative p-16 md:p-24 text-center bg-gray-90">
      
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-indigo-500 to-red-800 animate-gradientMove opacity-50"></div>

      {/* Heading with Gradient and Animation */}
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900 mb-10 z-10 animate-pulse">
        My Projects
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
          >
            <div className="relative w-full h-56 mb-6">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
