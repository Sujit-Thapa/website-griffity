import React from 'react';

const About = () => {
  return (
<div className="relative h-screen w-full bg-[#06141b] text-white ">
  
      <h1 className="absolute text-primary top-10 left-10 text-l font-light z-10">
      [ABOUT GRIFFITY ]
      </h1>

      <div className="flex justify-center items-center h-full">
        <p className="text-xl text-center z-10 px-4">
          Driven by innovation, creativity and excellence
        </p>
      </div>

    
      <img
        src="/images/gradient.svg"
        alt="gradient"
        className="absolute top-2/3 right-[16%] scale-150 w-auto h-auto z-0"
      />
    </div>
  );
};

export default About;
