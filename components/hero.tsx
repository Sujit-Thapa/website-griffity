"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-[url('/images/heroimage.jpg')] bg-cover bg-center h-screen w-full text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <div className=" px-14 flex flex-col py-10 mx-auto h-full relative z-10">
        <div className="flex justify-between w-full">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3.8 }}
            src="/logos/griffity.png"
            alt="Logo"
            className="  w-8 h-auto z-10"
          />
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 3.8, ease: "easeOut" }}
            className=" text-h5 z-10 font-extralight"
          >
            evolving mystery!
          </motion.p>
        </div>
        <div className="flex items-center h-full max-w-[1440px] mx-auto">
          <div className=" z-10 ">
            <div className="flex flex-col items-start translate-x-[-5%]">
              <p className="text-h2 font-medium">
                welcome to <span className="font-bold">griffity</span>
              </p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-h4 text-right self-end mt-4 font-extralight"
              >
                your brand's loudest whisper!
              </motion.p>
            </div>
          </div>
          <div className=" transform translate-y-5 flex flex-col gap-4 z-50  ">
            {["about us", "services", "clients", "our team", "contact us"].map(
              (item, index) => (
                <motion.p
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    x: 10,
                    color: "#dba039",
                  }}
                  transition={{ type: "spring" }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
