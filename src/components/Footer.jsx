import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-indigo-900 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500 mb-4">
              Rashima Rasangi
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Full-Stack Developer.
            </p>
          </motion.div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-200 text-center md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              {
                icon: <FaLinkedin size={28} />,
                color: "#0a66c2",
                href: "http://www.linkedin.com/in/rashima-rasangi-6a82a5328",
              },
              {
                icon: <FaGithub size={28} />,
                color: "#0a66c2",
                href: "https://github.com/rashimarasangi",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, color: social.color }}
                href={social.href}
                className="text-gray-200 transition-colors duration-300"
              >
                {social.icon}
                {console.log(social.href)}
              </motion.a>
            ))}
          </div>
          <div className="flex space-x-6 text-center md:text-right">
            <a
              href="#"
              className="text-gray-200 hover:text-coral-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-coral-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
