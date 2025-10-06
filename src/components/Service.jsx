import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaPenFancy,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Designing visually captivating and user-centric websites.",
    icon: <FaPaintBrush />,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Crafting responsive and interactive user interfaces.",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Building secure and efficient server-side solutions.",
    icon: <FaServer />,
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Delivering end-to-end web applications with expertise.",
    icon: <FaLaptopCode />,
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Creating compelling content to elevate your brand.",
    icon: <FaPenFancy />,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Driving growth with strategic online marketing.",
    icon: <FaBullhorn />,
  },
];

const Service = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-indigo-900 to-gray-900 text-white py-24"
      id="services"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500"
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={serviceVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-gray-800 backdrop-blur-lg p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-coral-500 rounded-full opacity-30 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="flex justify-center mb-6">
                <span className="text-5xl text-cyan-400">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-coral-500 mb-4">
                {service.title}
              </h3>
              <p className="text-center text-gray-200 mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-cyan-400 hover:text-coral-500 font-semibold transition-colors duration-300"
                >
                  Explore More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
