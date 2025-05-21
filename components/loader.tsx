"use client";

import { useState, useEffect } from "react";
import { montserrat } from "@/fonts";
import { motion } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const TEXT = "GRIFFITYSTUDIOS".split("");
  useEffect(() => {
    // Simulate loading time and then hide the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350000);

    return () => clearTimeout(timer);
  }, []);

  // If loading is complete, don't render the loader
  if (!isLoading) return null;

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center ${montserrat.className} h-full w-full bg-body z-50
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 120 }}`}
    >
      <div className="relative ">
        {/* Clear text that will be revealed as blur overlay moves */}
        <div className="relative z-10 flex text-h4 md:text-h4 lg:text-h5 font-bold text-primary">
          {TEXT.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 0.2 + (TEXT.length - 1 - i) * 0.08, // Stagger each letter as blur passes
                duration: 0.05,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Blur overlay that moves from right to left */}
        <motion.div
          className="absolute inset-0 z-20 h-[100%] w-[30%]  bg-body/80"
          initial={{ x: "100%", backdropFilter: "blur(15px)" }}
          animate={{
            x: "-100%",
            opacity: 0,
            transition: {
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute inset-0 z-20 h-[100%] w-[10%]  bg-body/80"
          initial={{ x: "430%", backdropFilter: "blur(15px)" }}
          animate={{
            x: "-100%",
            opacity: 0,
            transition: {
              duration: 1,
              delay: 1,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </motion.div>
  );
}
