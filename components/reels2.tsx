"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Replace with your actual image and video paths
const cardContents = [
  { type: "image", src: "/reelsmedia/11.jpg" },
  { type: "video", src: "/reelsmedia/3d.mp4" },
  { type: "image", src: "/reelsmedia/2.jpg" },
  { type: "video", src: "/reelsmedia/2.mp4" },
  { type: "image", src: "/reelsmedia/13.jpg" },
  { type: "video", src: "/reelsmedia/2.mp4" },
  { type: "image", src: "/reelsmedia/10.jpg" },
  { type: "image", src: "/reelsmedia/9.jpg" },
];

const Reels2 = () => {
  const [holesCount, setHolesCount] = useState(0);
  const [cardRepeatCount, setCardRepeatCount] = useState(1);

  // Scroll tracking
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [1500, -1500]); // Opposite scroll

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;

      const holeSize = 16 + 8; // w-4 (16px) + gap (~8px)
      const cardSize = 288 + 20; // w-72 (288px) + gap (~20px)

      setHolesCount(Math.ceil(screenWidth / holeSize));
      setCardRepeatCount(Math.ceil(screenWidth / (8 * cardSize)));
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const renderHoles = () =>
    Array.from({ length: 4 * holesCount }, (_, i) => (
      <span key={i} className="bg-body h-4 w-4 rounded-sm shrink-0"></span>
    ));

  const renderCards = () => {
    const cards = [];
    for (let r = 0; r < 4 * cardRepeatCount; r++) {
      for (let i = 0; i < cardContents.length; i++) {
        const content = cardContents[i];
        cards.push(
          <div
            key={`${r}-${i}`}
            className="bg-white h-36 w-72 shrink-0 rounded shadow overflow-hidden flex items-center justify-center"
          >
            {content.type === "image" ? (
              <img
                src={content.src}
                alt="Media"
                className="object-cover w-full h-full"
              />
            ) : content.type === "video" ? (
              <video
                src={content.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : null}
          </div>
        );
      }
    }
    return cards;
  };

  return (
    <motion.div
      className="h-56 bg-primary flex flex-col justify-evenly px-5 rotate-3"
      style={{ x, rotate: 3.7, scale: 0.9 }}
    >
      <div className="flex gap-5 justify-center">{renderHoles()}</div>
      <div className="flex gap-5">{renderCards()}</div>
      <div className="flex gap-5 justify-center">{renderHoles()}</div>
    </motion.div>
  );
};

export default Reels2;
