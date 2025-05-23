"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TrustedClients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<
    "hidden" | "visible" | "exitingBottom"
  >("hidden");

  // Text to animate
  const TEXT = "[TRUSTED CLIENTS]";
  const TEXT_BLOCKS = ["COMPANIES WE HAVE", "WORKED WITH"];

  // Handle scroll to control animation states
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Check if near the bottom (within 100px)
      if (scrollTop + windowHeight >= fullHeight - 100) {
        setAnimationState("exitingBottom");
        return;
      }

      // Check if section is in view
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        setAnimationState(isInView ? "visible" : "hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for clearer state management
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exitingBottom: { opacity: 0, y: -20 }, // Reverse direction for bottom exit
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(20px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    exitingBottom: { opacity: 0, y: -10, filter: "blur(20px)" }, // Reverse direction
  };

  return (
    <div
      ref={sectionRef}
      className="flex sticky top-[200px] flex-col mt-[100px] z-30"
    >
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={animationState}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
        className="text-primary font-medium p-base text-center"
      >
        {TEXT}
      </motion.p>

      <div className="w-fit mx-auto text-center text-primary heading-h2 scale-75 leading-none">
        {TEXT_BLOCKS.map((line, lineIndex) => {
          const lineDelay = 0.5 + lineIndex * 0.7;
          return (
            <div key={lineIndex}>
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={wordVariants}
                  initial="hidden"
                  animate={animationState}
                  transition={{
                    delay:
                      animationState === "visible"
                        ? lineDelay + wordIndex * 0.2
                        : 0,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className={`inline-block mx-1 ${
                    lineIndex === 0
                      ? "font-semibold tracking-widest"
                      : "font-semibold"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedClients;
