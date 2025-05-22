"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const navItems = ["about us", "services", "clients", "contact us"];
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  useEffect(() => {
    navItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, 3800 + index * 200); // delay in ms
    });
  }, []);

  return (
    <div className="relative bg-[url('/images/heroimage.png')] bg-cover bg-center h-screen  w-full z-20 text-white overflow-hidden">
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div> */}

      <div className=" px-14  flex flex-col py-10 mx-auto h-full relative z-10">
        <div className="flex justify-between w-full">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3.8 }}
            src="/logos/griffity.png"
            alt="Logo"
            className="  w-8 h-auto z-10"
          />
        </div>
        <div className="flex items-center gap-10 h-full max-w-[1440px] mx-auto">
          <div className=" z-10 ">
            <div className="flex flex-col items-start translate-x-[-5%]">
              <p className="heading-h2 font-medium">
                welcome to <span className="font-bold">griffity</span>
              </p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 4, ease: "easeOut" }}
                className="heading-h4 text-right self-end mt-4 font-extralight"
              >
                your brand's loudest whisper!
              </motion.p>
            </div>
          </div>
          {/* Navigation Items */}
          <div className="translate-y-8 flex flex-col gap-8 z-50">
            {navItems.map((item, index) => (
              <p
                key={index}
                className={`transition-all duration-300 ease-out transform cursor-pointer p-base hover:text-[#dba039] hover:translate-x-2 hover:scale-110 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
