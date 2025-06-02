"use client";

import type React from "react";

import { Poppins } from "next/font/google";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Animated counter component for statistics
const AnimatedCounter = ({
  end,
  label,
  accent,
}: {
  end: number;
  label: string;
  accent: string;
}) => {
  const counterRef = useRef(null);
  const isVisible = useInView(counterRef, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const duration = 1000;
      const increment = Math.ceil(end / 60);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, duration / (end / increment));
    }
  }, [isVisible, end, count]);

  return (
    <div className="text-center" ref={counterRef}>
      <motion.div
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-1 sm:mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {end >= 1000 ? `+${count}k` : `+${count}`}
      </motion.div>
      <motion.div
        className="text-sm sm:text-xl lg:text-2xl text-center font-extralight"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {label.split(" ").map((word, i, arr) => (
          <span key={i}>
            {i > 0 && " "}
            {word === accent ? (
              <span className="text-primary">{word}</span>
            ) : (
              word
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animated text with highlight transition
  const HighlightedWord = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.span
        className="font-light"
        initial={{ color: "#6b7280" }} // text-gray-500
        animate={inView ? { color: "#ffffff" } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.span>
    );
  };

  return (
    <div
      className={`min-h-screen  text-white ${poppins.className}`}
      ref={containerRef}
      id="about-us"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 max-w-screen-3xl"
        ref={ref}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.p
            className="text-primary text-sm sm:text-base font-semibold tracking-wider uppercase mb-2 sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            [ ABOUT US ]
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            about <span className="text-primary">griffity!</span>
          </motion.h1>
          <motion.p
            className="sm:text-xl lg:text-2xl text-muted font-extralight mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every{" "}
            <motion.span
              initial={{ color: "#6b7280" }}
              animate={inView ? { color: "#ffffff" } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-light"
            >
              dream
            </motion.span>{" "}
            needs a{" "}
            <motion.span
              initial={{ color: "#6b7280" }}
              animate={inView ? { color: "#ffffff" } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-light"
            >
              team!
            </motion.span>
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div
          className="text-justify mb-12 sm:mb-16 lg:mb-20 leading-relaxed lg:max-w-7xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="mb-3 sm:mb-16 sm:text-xl lg:text-3xl font-extralight">
            At Griffity, we carry the <HighlightedWord>warmth</HighlightedWord>{" "}
            in everything we create. With the{" "}
            <HighlightedWord>strength</HighlightedWord> of the mountains and the
            soul of the valleys, we believe design is not just about
            visuals—it's about <HighlightedWord>people</HighlightedWord>,{" "}
            <HighlightedWord>feelings</HighlightedWord>, and{" "}
            <HighlightedWord>stories</HighlightedWord> that live in every heart.
          </p>
          <p className="mb-3 sm:mb-4 font-extralight sm:text-xl lg:text-3xl">
            We craft with <HighlightedWord>bold</HighlightedWord> intention and{" "}
            <HighlightedWord>precise</HighlightedWord> care, honoring the{" "}
            <HighlightedWord>trust</HighlightedWord> you place in us. Every
            brand we touch becomes a part of our{" "}
            <HighlightedWord>journey</HighlightedWord>—your story becomes ours.
            Together, we create designs that reflect{" "}
            <HighlightedWord>hope</HighlightedWord>,{" "}
            <HighlightedWord>resilience</HighlightedWord>, and{" "}
            <HighlightedWord>uncompromising</HighlightedWord> beauty rooted in{" "}
            <HighlightedWord>visionary</HighlightedWord> storytelling.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-12 sm:mb-16 lg:mb-20">
          <AnimatedCounter
            end={4}
            label="years of experience"
            accent="experience"
          />
          <AnimatedCounter
            end={21}
            label="brands collaborated"
            accent="collaborated"
          />
          <AnimatedCounter
            end={31}
            label="projects completed"
            accent="completed"
          />
          <AnimatedCounter end={5} label="industry awards" accent="awards" />
          <AnimatedCounter end={11} label="events managed" accent="managed" />
          <AnimatedCounter
            end={20}
            label="regulated hours of operation"
            accent="operation"
          />
        </div>

        {/* Bottom Action Words */}
        <motion.div className="flex w-full mt-14 justify-evenly mx-auto font-extralight xl:heading-h5 text-[0.7rem] xs:text-lg md:text-3xl">
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
      </div>
    </div>
  );
}
