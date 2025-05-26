"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardContents = [
  { type: "image", src: "/reelsmedia/1.jpg" },
  { type: "image", src: "/reelsmedia/8.jpg" },
  { type: "image", src: "/reelsmedia/3.jpg" },
  { type: "image", src: "/reelsmedia/4.jpg" },
  { type: "image", src: "/reelsmedia/5.jpg" },
  { type: "image", src: "/reelsmedia/6.jpg" },
  { type: "image", src: "/reelsmedia/7.jpg" },
  { type: "video", src: "/reelsmedia/3d.mp4" },
];

const Reels = () => {
  const [holesCount, setHolesCount] = useState(0);
  const [cardRepeatCount, setCardRepeatCount] = useState(1);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-2500, 2500]);

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;

      const holeSize = 16 + 8; // w-4 (16px) + gap (~8px)
      const cardSize = 320 + 20; // w-80 (320px) + gap (~20px)

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
            className="bg-white h-44 w-80 shrink-0 rounded shadow overflow-hidden flex items-center justify-center"
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

  // ✅ You were missing this return block
  return (
    <motion.div
      className="h-64 bg-primary flex flex-col justify-evenly px-5 shadow-[-16px_-19px_9px_-8px_rgba(0,0,0,0.1)] z-40"
      style={{ x, rotate: -6, y: 60 }}
    >
      <div className="flex gap-5 justify-center">{renderHoles()}</div>
      <div className="flex gap-5">{renderCards()}</div>
      <div className="flex gap-5 justify-center">{renderHoles()}</div>
    </motion.div>
  );
};

export default Reels;
