"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardContents = [
  { title: "Card 1", description: "This is the first card" },
  { title: "Card 2", description: "This is the second card" },
  { title: "Card 3", description: "This is the third card" },
  { title: "Card 4", description: "This is the fourth card" },
  { title: "Card 5", description: "This is the fifth card" },
  { title: "Card 6", description: "This is the sixth card" },
  { title: "Card 7", description: "This is the seventh card" },
  { title: "Card 8", description: "This is the eighth card" },
];

const Reels = () => {
  const [holesCount, setHolesCount] = useState(0);
  const [cardRepeatCount, setCardRepeatCount] = useState(1);

  // Scroll tracking
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-1500, 1500]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.7]);

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
            className="bg-white h-44 w-80 shrink-0 rounded shadow p-4 flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold">{content.title}</h3>
            <p className="text-sm text-gray-600">{content.description}</p>
          </div>
        );
      }
    }
    return cards;
  };

  return (
    <motion.div
      className="h-64 bg-primary flex flex-col justify-evenly px-5 shadow-[-16px_-19px_9px_-8px_rgba(0,0,0,0.1)]  z-40"
      style={{ x, rotate: -6, y: 60, scale }} // Apply x-translation based on scroll
    >
      <div className="flex gap-5 justify-center">{renderHoles()}</div>
      <div className="flex gap-5">{renderCards()}</div>
      <div className="flex gap-5 justify-center">{renderHoles()}</div>
    </motion.div>
  );
};

export default Reels;
