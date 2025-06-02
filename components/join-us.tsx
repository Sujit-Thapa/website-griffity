import React, { useRef, useState } from "react";
import { brush } from "@/fonts";
import { motion } from "framer-motion";

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
      className="relative max-w-screen-3xl mx-auto   bg-cover  mt-24  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-10  bg-center bg-no-repeat join-us"
    >
      {/* <section
      id="career"
      className="relative max-w-screen-3xl mx-auto bg-[#081C26] bg-[url('/images/img-join-us.jpg')] bg-cover bg-center bg-no-repeat join-us"
    > */}
      <motion.h1 className="p-base w-fit font-semibold text-primary z-10 flex-shrink-0">
        [CONTACT US ]
      </motion.h1>
      <div className="absolute inset-0 " />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative max-w-screen-3xl p-base mx-auto px-4 sm:px-6 md:px-8 py-16 text-white z-10 font-light   /60"
        encType="multipart/form-data"
      >
        <p
          className={`text-3xl xs:text-4xl xsm:text-5xl  md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-[8.4rem] 3xl:text-[8.7rem]   font-extrabold  leading-tight `}
        >
          book a free
        </p>
        <p
          className={`text-3xl xs:text-4xl xsm:text-5xl  md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-[8.4rem] 3xl:text-[8.7rem]  font-extrabold leading-tight text-primary  `}
        >
          consultation,
        </p>

        {/* ...inputs as before... */}
        <label htmlFor="fullName" className=" mt-4 block">
          I'M
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white   "
          placeholder="JOHN DOE"
        />
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex-1">
            <label htmlFor="email" className=" block">
              HERE IS MY EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white  "
              placeholder="JOHN@EMAIL.COM"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="contact" className=" block">
              HERE IS MY PHONE NUMBER
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              required
              className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white   "
              placeholder="+977 (980) 123 4567"
            />
          </div>
        </div>
        <label htmlFor="coverLetter" className=" block">
          MESSAGE
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={2}
          className="mt-1 mb-4 p-2 border-b border-white w-full bg-transparent text-white    resize-none"
          placeholder="HERE IS MY MESSAGE."
        />
        <div className="flex flex-col">
          <label htmlFor="attachment" className=" mb-2">
            UPLOAD ATTACHMENTS
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            accept=".pdf,.doc,.docx" // Only allow these formats
            className="text-white file:bg-white file:text-black file:font-normal file:rounded-md file:px-2 file:py-1 text-sm file:border-0"
          />
          <p className="sm:text-sm text-xs text-white mt-2">
            Accepted Formats:{" "}
            <span className="text-primary">.pdf, .doc, .docx</span>
          </p>
        </div>
        <button
          type="submit"
          className="mt-8 sm:px-6 px-3 py-2 bg-primary text-white font-normal rounded-lg"
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
