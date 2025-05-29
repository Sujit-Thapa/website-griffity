import React, { useRef, useState } from "react";
import { brush } from "@/fonts";

const JoinUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(formRef.current!);

    const res = await fetch("/api/join-us", {
      method: "POST",
      body: formData,
    });

    if (res.ok) setStatus("sent");
    else setStatus("error");
  };

  return (
    <section
      id="career"
      className="relative max-w-screen-3xl mx-auto bg-[#081C26] bg-[url('/images/img-join-us.jpg')] bg-cover bg-center bg-no-repeat join-us"
    >
      <div className="absolute inset-0 bg-[#081C26]/80" />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative max-w-screen-3xl p-base mx-auto px-4 sm:px-6 md:px-8 py-16 text-white z-10"
        encType="multipart/form-data"
      >
        <h2
          className={`text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-[5rem] xl:text-[10rem] 2xl:text-[12.5rem] 2xl:leading-[12.5rem] font-bold mb-4 text-center ${brush.className}`}
        >
          Join Us Today!
        </h2>
        {/* ...inputs as before... */}
        <label htmlFor="fullName" className=" font-medium mt-4 block">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white"
          placeholder="Enter your full name"
        />
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex-1">
            <label htmlFor="email" className=" font-medium block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
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
              name="contact"
              required
              className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white"
              placeholder="Enter your contact number"
            />
          </div>
        </div>
        <label htmlFor="coverLetter" className=" font-medium block">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={4}
          className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white placeholder-white resize-none"
          placeholder="Write your cover letter..."
        />
        <div className="flex flex-col">
          <label htmlFor="cvUpload" className=" font-medium mb-2">
            Upload CV
          </label>
          <input
            type="file"
            id="cvUpload"
            name="cvUpload"
            className="text-white file:bg-white file:text-black file:font-medium file:rounded-md file:px-4 file:py-2 file:border-0"
          />
          <p className="sm:text-sm text-xs text-white mt-2">
            Accepted Formats:{" "}
            <span className="text-primary">.pdf, .doc, .docx</span>
          </p>
        </div>
        <button
          type="submit"
          className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "Sent!"
            : "Submit"}
        </button>
        {status === "error" && (
          <p className="text-red-500 mt-2">Failed to send. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default JoinUs;
