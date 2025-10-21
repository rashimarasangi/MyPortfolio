import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-extrabold text-cyan-500"
        >
          Rashima
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-6 mt-4 pb-4 bg-gradient-to-b from-indigo-900 to-gray-900 shadow-lg rounded-b-2xl"
        >
          {["Home", "About", "Services", "Projects"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#ff6b6b" }}
              className="text-lg font-medium hover:text-coral-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)} // close on click
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
            onClick={() => setIsOpen(false)}
          >
            <a href="#contact">Connect Now</a>
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
