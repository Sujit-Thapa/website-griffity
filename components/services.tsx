"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Services = () => {
  const containerRef = useRef(null);
  const brandingRef = useRef(null);
  const marketingRef = useRef(null);
  const productionRef = useRef(null);
  const webappRef = useRef(null);
  const modelingRef = useRef(null);
  const eventsRef = useRef(null);
  const moreRef = useRef(null);

  // Scroll-based animations
  // Add 30% buffer to the scroll range by adjusting the offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.92", "end 0.5"],
  });

  // Create a staggered animation effect for each service section
  const brandingScale = useTransform(scrollYProgress, [0, 0.15], [1.2, 1]);
  const marketingScale = useTransform(scrollYProgress, [0.15, 0.3], [1.2, 1]);
  const productionScale = useTransform(scrollYProgress, [0.3, 0.45], [1.2, 1]);
  const webappScale = useTransform(scrollYProgress, [0.45, 0.6], [1.2, 1]);
  const modelingScale = useTransform(scrollYProgress, [0.6, 0.75], [1.2, 1]);
  const eventsScale = useTransform(scrollYProgress, [0.75, 0.9], [1.2, 1]);
  const moreScale = useTransform(scrollYProgress, [0.9, 1], [1.2, 1]);

  const brandingInView = useInView(brandingRef, {
    once: false,
    margin: " -20% 0px",
  });
  const marketingInView = useInView(marketingRef, {
    once: false,
    margin: " -20% 0px",
  });
  const productionInView = useInView(productionRef, {
    once: false,
    margin: " -20% 0px",
  });
  const webappInView = useInView(webappRef, {
    once: false,
    margin: " -20% 0px",
  });
  const modelingInView = useInView(modelingRef, {
    once: false,
    margin: " -20% 0px",
  });
  const eventsInView = useInView(eventsRef, {
    once: false,
    margin: " -20% 0px",
  });
  const moreInView = useInView(moreRef, { once: false, margin: " -20% 0px" });

  return (
    <div className=" text-white max-w-screen-2xl py-5 mx-auto w-full justify-center items-center z-">
      <div className="flex justify-between items-start px-5 mt-2">
        <div className="flex flex-col mt-5 gap-2">
          <motion.p className="text-h4 z-10 font-semibold ">
            WE BRING YOUR VISION{" "}
          </motion.p>
          <motion.p className="text-h4 z-10 font-semibold ">
            TO LIFE WITH DYNAMIC DESIGN SOLUTIONS
          </motion.p>
        </div>
        <motion.h1 className="text-white text-base font-semibold z-10">
          [OUR SERVICES ]
        </motion.h1>
      </div>
      <div
        ref={containerRef}
        className="flex flex-col text-primary text-h2/none  gap-10 mt-32 px-5"
      >
        <motion.div
          ref={brandingRef}
          style={{ scale: brandingScale }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-b  border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3  branding ">BRANDING</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={
              brandingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6 "
          >
            <li className="font-medium">&#8594;VISUAL IDENTITY</li>
            <li>LOGO DESIGN</li>
            <li>BRAND GUIDELINES</li>
            <li>BRANDING CONSULTATIONS</li>
            <li>REBRANDING STRATEGY </li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={marketingRef}
          style={{ scale: marketingScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3">MARKETING</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={
              marketingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6"
          >
            <li className="font-medium">&#8594;CONTENT STRATEGY</li>
            <li>MARKETING CAMPAIGNS</li>
            <li>SOCIAL MEDIA MANAGEMENT</li>
            <li>INFLUENCER MARKETING</li>
            <li>CONTENT CREATION</li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={productionRef}
          style={{ scale: productionScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3">PRODUCTION</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={
              productionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6"
          >
            <li className="font-medium">&#8594;STORYTELLING & MEDIA</li>
            <li>PHOTOGRAPHY</li>
            <li>VIDEO PRODUCTION & EDITING</li>
            <li>SCRIPTWRITING & STORYBOARDING</li>
            <li>POST PRODUCTION SERVICES</li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={webappRef}
          style={{ scale: webappScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3">WEB & APP</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={
              webappInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6"
          >
            <li className="font-medium">&#8594;DIGITAL EXPERIENCE</li>
            <li>UI/UX DESIGN</li>
            <li>ECOMMERCE PLATFORMS & CMS SOLUTIONS</li>
            <li>SEO & Performance Optimization</li>
            <li>Maintenance & Updates</li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={modelingRef}
          style={{ scale: modelingScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3">3D MODELING</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={
              modelingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6"
          >
            <li className="font-medium">&#8594;VISUALIZATION & ARCHITECTURE</li>
            <li>Product Prototyping</li>
            <li>AR/VR Ready Models</li>
            <li>Brand Guidelines</li>
            <li>Architectural Visualization</li>
            <li>Conceptual Design Models </li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={eventsRef}
          style={{ scale: eventsScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3">EVENTS</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={
              eventsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6"
          >
            <li className="font-medium">&#8594;IMMERSIVE BRAND EXPERIENCES</li>
            <li>Event Planning & Execution</li>
            <li>SPONSERSHIP MANAGEMENT</li>
            <li>BRANDING & MARKETING</li>
            <li>LOGISTICS & MORE</li>
          </motion.ul>
        </motion.div>
        <motion.div
          ref={moreRef}
          style={{ scale: moreScale }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b border-primary w-full flex items-center "
        >
          <p className=" z-10 font-semibold w-2/3">MORE</p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={moreInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className="text-base/normal text-white font-extralight mb-6"
          >
            <li className="font-medium">&#8594;SPECIALIZED SERVICES</li>
            <li>TAILORED SERVICE</li>
            <li>WORKSHOP & TRAINING</li>
            <li>TREND FORECASTING R&D FOR NEW MEDIA</li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
