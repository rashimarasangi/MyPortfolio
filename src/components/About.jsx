import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaNodeJs } from "react-icons/fa";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (i) => ({
      width: "100%",
      transition: { delay: i * 0.2, duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-indigo-900 to-gray-900 text-white py-24"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500"
        >
          Who I Am
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-12 lg:mb-0"
          >
            <img
              src={AboutImage}
              alt="About Me"
              className="w-80 h-96 rounded-3xl object-cover shadow-2xl transform hover:scale-110 transition-transform duration-500"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-coral-500 rounded-full opacity-50 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed mb-10 text-gray-200"
            >
              I'm a dynamic full-stack developer with a passion for creating
              cutting-edge web applications. My expertise spans modern frontend
              and backend technologies, delivering intuitive and
              high-performance user experiences.
            </motion.p>
            <div className="space-y-8">
              {[
                { name: "HTML & CSS", icon: <FaCode />, width: "95%" },
                { name: "React JS", icon: <FaReact />, width: "98%" },
                { name: "Node JS", icon: <FaNodeJs />, width: "90%" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <label className="w-1/3 flex items-center text-lg font-semibold text-cyan-400">
                    {skill.icon}
                    <span className="ml-3">{skill.name}</span>
                  </label>
                  <div className="flex-1 bg-gray-800 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-coral-500 h-4 rounded-full"
                      style={{ width: skill.width }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                {
                  value: "BSc (Hons)",
                  label: "Computing & Information Systems",
                },
                {
                  value: "SUSL",
                  label: "Sabaragamuwa University of Sri Lanka",
                },
                { value: "10+", label: "Projects Completed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl text-center"
                >
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
