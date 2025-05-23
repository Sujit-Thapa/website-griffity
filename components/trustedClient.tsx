"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TrustedClients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Text to animate
  const TEXT = "[TRUSTED CLIENTS]";
  const TEXT_BLOCKS = ["COMPANIES WE HAVE", "WORKED WITH"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.05,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col mt-[300px] ">
      {isVisible && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
          className="text-primary font-medium p-base text-center"
        >
          {TEXT}
        </motion.p>
      )}
      <div className="w-fit mx-auto text-center text-primary heading-h2 scale-75 leading-none">
        {TEXT_BLOCKS.map((line, lineIndex) => {
          const lineDelay = 0.5 + lineIndex * 0.7; // Delay each line more
          return (
            <div key={lineIndex} className="">
              {isVisible &&
                line.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: lineDelay + wordIndex * 0.2, // stagger inside each line
                      duration: 0.5,
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
