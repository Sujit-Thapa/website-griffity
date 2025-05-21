'use client';


import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
<div className="relative  bg-[url('/images/heroimage.jpg')] bg-[center_top_-155px] bg-cover z-10 h-screen w-full text-white overflow-hidden">

     
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

     
      <img
        src="/logos/griffity.png"
        alt="Logo"
        className="absolute top-10 left-10 w-8 h-auto z-10"
      />

    
      <p className="absolute top-12 right-12 text-2xl z-10 font-light">evolving mystery!</p>

      
      <div className="absolute top-1/2 right-40 transform -translate-y-[28%] flex flex-col gap-4 z-50 text-3xl font-thin">
        {['about us', 'services', 'clients', 'our team', 'contact us'].map((item, index) => (
          <motion.p
            key={index}
            whileHover={{
              scale: 1.1,
              x: 10,
              color: '#dba039',
            }}
            transition={{ type: 'spring' }}
            className="cursor-pointer"
          >
            {item}
          </motion.p>
        ))}
      </div>

      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-start translate-x-[-5%]">
          <p className="text-9xl">
            welcome to <span className="font-bold">griffity</span>
          </p>

         
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="p-5 text-5xl pl-[45%] mt-4 font-thin"
          >
            your brand's loudest whisper!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
