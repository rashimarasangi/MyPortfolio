import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-indigo-900 to-gray-900 text-white px-6 md:px-12 lg:px-20 py-4 fixed top-0 w-full z-50 shadow-xl"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-extrabold text-cyan-500"
        >
          Rashima
        </motion.div>
        <div className="flex items-center gap-8">
          {["Home", "About", "Services", "Projects"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#ff6b6b" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-lg font-medium hover:text-coral-500 transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
            }}
            className="bg-gradient-to-r from-cyan-400 to-coral-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md"
          >
            <a href="#contact">Connect Now</a>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
