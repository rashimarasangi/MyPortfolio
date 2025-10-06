import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaRocket } from "react-icons/fa";

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-24"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-8 bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl"
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-coral-500 mb-6">
              Let's Collaborate
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              Ready to bring your ideas to life? Reach out to discuss projects
              or opportunities.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope />,
                  text: "rashimarasangi200@gmail.com",
                  href: "mailto:rashimarasangi200@gmail.com",
                },
                { icon: <FaPhone />, text: "+94 704619288" },
                {
                  icon: <FaMapMarkedAlt />,
                  text: "Walasmulla, Matara, Sri Lanka.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center text-lg"
                >
                  <span className="text-cyan-400 mr-4 text-2xl">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-coral-500 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-coral-500 rounded-full opacity-30 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Enter Your Name",
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter Your Email",
                },
                {
                  id: "message",
                  label: "Message",
                  type: "textarea",
                  placeholder: "Enter Your Message",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-2 text-lg font-semibold text-cyan-400"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:border-coral-500 transition-all duration-300"
                      rows="5"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:border-coral-500 transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-400 to-coral-500 text-white py-4 rounded-xl flex items-center justify-center text-lg font-semibold shadow-lg transition-all duration-300"
                type="submit"
              >
                <FaRocket className="mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
