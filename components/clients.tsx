"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Client = () => {
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
    <div className="relative w-full" ref={sectionRef}>
      {/* Fixed text with character animation */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full pointer-events-none transition-all duration-500 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col ">
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
          <div className="w-fit mx-auto text-center text-primary heading-h2 leading-snug">
            {TEXT_BLOCKS.map((line, lineIndex) => {
              const lineDelay = 0.5 + lineIndex * 0.7; // Delay each line more
              return (
                <div key={lineIndex} className="mb-1">
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
                            ? "font-bold tracking-widest"
                            : "font-medium"
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
      </div>

      {/* Client boxes that scroll with the page */}
      <div className="max-w-screen-2xl  mt-96 w-full mx-auto">
        <div className="flex justify-between mb-32">
          <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32  "></div>
          <div className="flex items-center justify-center w-[336px] h-[382px]  "></div>
        </div>

        <div className="flex justify-between mb-32">
          <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32 border border-primary bg-white">
            <p className="text-gray-400">Client 1</p>
          </div>
          <div className="flex items-center justify-center w-[336px] h-[382px] border border-primary bg-white">
            <p className="text-gray-400">Client 2</p>
          </div>
        </div>
        <div className="flex justify-between mb-32">
          <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32 border border-primary bg-white">
            <p className="text-gray-400">Client 3</p>
          </div>
          <div className="flex items-center justify-center w-[336px] h-[382px] border border-primary bg-white">
            <p className="text-gray-400">Client 4</p>
          </div>
        </div>
        <div className="flex justify-between mb-32">
          <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32 border border-primary bg-white">
            <p className="text-gray-400">Client 5</p>
          </div>
          <div className="flex items-center justify-center w-[336px] h-[382px] border border-primary bg-white">
            <p className="text-gray-400">Client 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
