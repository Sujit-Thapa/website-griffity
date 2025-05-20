import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[url('/images/heroimage.jpg')] bg-cover bg-center h-screen w-full text-white overflow-hidden">

      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <img
        src="/logos/griffity.png"
        alt="Logo"
        className="absolute top-10 left-10 w-8 h-auto z-10"
      />

      <p className="absolute top-12 right-12 text-2xl z-10 font-light">evolving mystery!</p>

      <div className="absolute top-1/2 right-40 transform -translate-y-[28%] flex flex-col gap-4 z-50 text-3xl font-thin ">
        <p>about us</p>
        <p>services</p>
        <p>clients</p>
        <p>our team</p>
        <p>contact us</p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-start translate-x-[-5%]">
          <p className="text-9xl">
            welcome to <span className="font-bold">griffity</span>
          </p>
          <p className="p-5 text-5xl pl-[45%] mt-4 font-thin">your brand's loudest whisper!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
