"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const navItems = ["about us", "services", "clients", "career", "contact us"];
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    navItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, 3800 + index * 200); // delay in ms
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<div className="relative h-screen w-full overflow-hidden">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-10"
    src="/reelsmedia/bg.mp4"
    autoPlay
    loop
    muted
    playsInline
  />      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-10 flex flex-col  mx-auto h-full relative z-10">
        <div className="flex justify-between items-center w-full">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3.8 }}
            src="/logos/griffity.png"
            alt="Logo"
            className="w-6 sm:w-7 md:w-8 h-auto ml-5 z-10"
          />

          {/* Burger Menu Button - Only visible on mobile/tablet */}
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3.8 }}
            onClick={toggleMobileMenu}
            className="lg:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -6,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white block absolute"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white block absolute"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? 0 : 6,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white block absolute"
            />
          </motion.button>
        </div>

        <div className="flex items-center gap-10 h-full max-w-screen-3xl mx-auto">
          <div className="z-10 flex-1">
            <div className="flex flex-col items-start lg:translate-x-[-5%]">
              <p className="text-2xl xs:text-3xl sm:text-6xl  md:text-[4.2rem] xl:text-8xl 2xl:text-h2 font-medium leading-tight">
                welcome to <span className="font-bold">griffity</span>
              </p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 4, ease: "easeOut" }}
                className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left sm:text-right self-start sm:self-end mt-2 sm:mt-4 font-extralight"
              >
                your brand's loudest whisper!
              </motion.p>
            </div>
          </div>

          {/* Desktop Navigation Items - Hidden on mobile/tablet */}
          <div className="hidden lg:flex lg:translate-y-8 flex-col gap-8 z-50">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                className={`transition-all duration-300 ease-out transform cursor-pointer text-base hover:text-[#dba039] hover:translate-x-2 hover:scale-110 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full sm:w-80 h-full bg-black bg-opacity-95 backdrop-blur-sm z-40 lg:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center z-50"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 absolute" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 absolute" />
            </button>
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                  aria-label={item}
                  className="text-2xl sm:text-3xl font-light cursor-pointer hover:text-[#dba039] transition-colors duration-300 text-center"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
