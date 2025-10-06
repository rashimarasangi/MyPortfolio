import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";

const projects = [
  {
    id: 1,
    name: "GreenCart",
    technologies: "MERN Stack",
    image: Image1,
    github: "https://github.com/rashimarasangi/GreenCart.git",
    description: "Full Stack Grocery Delivery Ecommerce website",
  },
  {
    id: 2,
    name: "Prescripto",
    technologies: "MERN Stack",
    image: Image2,
    github: "https://github.com/rashimarasangi/Prescripto.git",
    description: "Doctor Appointment Booking App",
  },
  {
    id: 3,
    name: "CtrlRoom",
    technologies: "React.js, Tailwind CSS, Laravel",
    image: Image3,
    github: "https://github.com/Thushan2002/CtrlRoom.git",
    description:
      "Engineered a system for efficient allocation, monitoring, and maintenance of computer resources.",
  },
  {
    id: 4,
    name: "QuickShow",
    technologies: "React.js,Tailwind CSS",
    image: Image4,
    github: "https://github.com/rashimarasangi/QuickShow.git",
    description: "Ticket booking website",
  },
  {
    id: 5,
    name: "CarRental",
    technologies: "React.js,Tailwind CSS",
    image: Image5,
    github: "https://github.com/rashimarasangi/CarRental.git",
    description: "Car Rental Website",
  },
  {
    id: 6,
    name: "SpotifyClone",
    technologies: "React.js,Tailwind CSS",
    image: Image6,
    github: "https://github.com/rashimarasangi/SpotifyClone.git",
    description: "Complete Music Website.",
  },
];

const Project = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-24"
      id="projects"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-cyan-400 to-coral-500 rounded-full opacity-30 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500">
                  {project.name}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <p className="text-gray-400 mb-6">{project.technologies}</p>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-coral-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
