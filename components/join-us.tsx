import React from "react";
import { brush } from "@/fonts";

const JoinUs = () => {
  return (
    <section className="relative max-w-screen-3xl mx-auto bg-[#081C26] bg-[url('/images/img-join-us.jpg')] bg-cover bg-center bg-no-repeat join-us">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#081C26]/80" />

      {/* Content */}
      <div className="relative max-w-screen-3xl p-base mx-auto px-4 sm:px-6 md:px-8 py-16 text-white z-10">
        <h2
          className={`text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-[5rem] xl:text-[10rem] 2xl:text-[12.5rem] 2xl:leading-[12.5rem] font-bold mb-4 text-center ${brush.className}`}
        >
          Join Us Today!
        </h2>

        {/* Full Name */}
        <label htmlFor="fullName" className=" font-medium mt-4 block">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white"
          placeholder="Enter your full name"
        />

        {/* Email and Contact */}
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex-1">
            <label htmlFor="email" className=" font-medium block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="contact" className=" font-medium block">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white"
              placeholder="Enter your contact number"
            />
          </div>
        </div>

        {/* Cover Letter */}
        <label htmlFor="coverLetter" className=" font-medium block">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          rows={4}
          className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white resize-none"
          placeholder="Write your cover letter..."
        />

        {/* Upload CV */}
        <div className="flex flex-col">
          <label htmlFor="cvUpload" className=" font-medium mb-2">
            Upload CV
          </label>
          <input
            type="file"
            id="cvUpload"
            className="text-white file:bg-white file:text-black file:font-medium file:rounded-md file:px-4 file:py-2 file:border-0"
          />
          <p className="sm:text-sm text-xs text-white mt-2">
            Accepted Formats:{" "}
            <span className="text-primary">.pdf, .doc, .docx</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
