import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-indigo-900 to-gray-900 text-white text-center py-32 md:py-48 relative overflow-hidden"
      id="home"
    >
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-400 to-coral-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={HeroImage}
        alt="Hero"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mb-12 w-72 h-72 rounded-full object-cover shadow-2xl transform hover:scale-110 transition-transform duration-500"
      />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-extrabold mb-8"
      >
        Hey, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-coral-500">
          Rashima Rasangi
        </span>
        <br />
        <Typewriter
          words={[
            "Full-Stack Developer",
            "Web Architect",
            "Tech Innovator",
            "Problem Solver",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
          className="text-3xl md:text-4xl"
        />
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
      >
        Building modern, responsive, and scalable web applications with a
        passion for innovation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center gap-6"
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-400 to-coral-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          <a href="#contact">Let's Connect</a>
        </motion.button>

        <motion.a
          href="/Rashima_Rasangi_Resume.pdf"
          download="Rashima_Rasangi_Resume.pdf"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255, 107, 107, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
