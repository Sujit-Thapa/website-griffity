"use client";

import { indigo } from "@/fonts";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AnimatedText = ({
  text,
  className,
  inView,
  baseDelay = 0,
}: {
  text: string;
  className: string;
  inView: boolean;
  baseDelay?: number;
}) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 400 }}
          animate={inView ? { y: 0 } : { y: 400 }}
          transition={{
            duration: 0.57,
            ease: [0.6, 0.01, -0.05, 0.95],
            delay: baseDelay + index * 0.1,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-40% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      ref={containerRef}
      id="about-us"
      className="sticky flex flex-col  max-w-screen-3xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-2 w-full 2xl:mx-auto text-white about"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="flex justify-center sm:justify-between items-center">
        <motion.h1 className="text-primary p-base font-semibold z-10">
          [ABOUT GRIFFITY ]
        </motion.h1>
        <motion.p
          className="heading-h4 z-10 font-extralight hidden sm:block"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          evolving mystery!
        </motion.p>
      </motion.div>

      <div className="flex flex-col items-center justify-evenly flex-1">
        <motion.div
          ref={ref}
          className="flex justify-center sm:mt-24 flex-col items-center sm:items-start sm:flex-row mx-auto gap-1 sm:gap-6"
          initial={{ opacity: 0, scale: 0.95, y: 60 }}
          animate={
            inView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.95, y: 60 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="text-[0.6rem] xs:text-[1.3rem] sm:text-[1.75rem] md:text-[2.4rem] lg:text-h4; font-extralight  z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            driven by
          </motion.p>
          <motion.div
            className="-translate-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              className={`${indigo.className} text-primary heading-h1 overflow-hidden`}
            >
              <AnimatedText
                text="innovation,"
                className=""
                inView={inView}
                baseDelay={0.1}
              />
            </motion.p>

            <motion.p
              className={`${indigo.className} text-primary overflow-hidden custom-c2 2xl:-translate-x-24 sm:-translate-x-20  -translate-x-6`}
            >
              <AnimatedText
                text="creativity,"
                className=""
                inView={inView}
                baseDelay={0.1}
              />
              &nbsp; &nbsp;
              <AnimatedText
                text="&"
                inView={inView}
                baseDelay={1.1}
                className="text-white"
              />
            </motion.p>

            <motion.p
              className={`${indigo.className} text-primary overflow-hidden custom-c1 2xl:translate-x-2 lg:-translate-x-3 translate-x-8 `}
            >
              <AnimatedText
                text="excellence"
                className=""
                inView={inView}
                baseDelay={0.1}
              />
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.p
          className="sm:p-base xs:text-sm text-[0.5rem] xl:text-[1.3rem] font-semibold md:w-[87%] text-center mx-auto z-10 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.span
            className="text-primary/80 "
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            GRIFFITY
          </motion.span>{" "}
          TURNS{" "}
          <motion.span
            className="text-primary/80 "
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {" "}
            IDEAS
          </motion.span>{" "}
          INTO{" "}
          <motion.span
            className="text-primary/80 "
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            VISUAL STORIES
          </motion.span>{" "}
          AND{" "}
          <motion.span
            className="text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {" "}
            MEANINGFUL EXPERIENCES.
          </motion.span>{" "}
          WE BLEND{" "}
          <motion.span
            className="text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            DESIGN STRATEGY
          </motion.span>{" "}
          AND{" "}
          <motion.span
            className="text-primary/90"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            {" "}
            COLLABORATION{" "}
          </motion.span>
          TO BUILD BRANDS THAT ARE{" "}
          <motion.span
            className="text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            SEEN HEARD{" "}
          </motion.span>
          AND
          <motion.span
            className="text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            {" "}
            REMEMBERED.
          </motion.span>
        </motion.p>
      </div>

      <motion.div className="flex w-full mt-14  justify-evenly mx-auto font-extralight xl:heading-h5 text-[0.7rem] xs:text-lg md:text-3xl ">
        <motion.span
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={
            inView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.9, y: 30 }
          }
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          inspire
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={
            inView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.9, y: 30 }
          }
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          endure
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={
            inView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.9, y: 30 }
          }
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          create
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={
            inView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.9, y: 30 }
          }
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          engage
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default About;
