"use client";

import type React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaEnvelope,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsContactOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative w-full max-w-screen-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-10">
      {/* Floating Contact Button */}
      <motion.button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaEnvelope className="text-xl" />
      </motion.button>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsContactOpen(false)}
            />

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 w-full max-w-md z-50 shadow-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <FaXmark className="text-xl" />
              </button>

              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Get In Touch
                </h3>
                <p className="text-gray-500">
                  Let's create something amazing together
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-body transition"
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-body transition"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-body transition resize-none"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-body text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-16">
        {/* Left: Contact Info */}
        <div className="text-center md:text-left text-white">
          <p className="text-2xl font-semibold">
            GRIFFITY<span className="font-light">STUDIOS</span>
          </p>
          <p className="text-sm">Bhaisepati, Kathmandu</p>
          <p className="text-sm">+977 9861292675</p>
          <p className="text-sm">info@griffitystudios.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl text-white">
          {[
            FaFacebookF,
            FaInstagram,
            FaTiktok,
            FaYoutube,
            FaXTwitter,
            FaLinkedinIn,
          ].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="cursor-pointer hover:text-primary transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Center: Copyright */}
      <div className="mt-10 text-center text-white text-l">
        © 2025 Griffity Studio Pvt. Ltd.
      </div>
    </div>
  );
};

export default Footer;
