import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const GriffityBg = () => {
  return (
    <motion.div className="absolute right-28  h-screen top-32">
      <Image
        width={680}
        height={680}
        src="/logos/bg-logo.svg"
        alt="Griffity Studios"
        className=" object-cover"
      />
    </motion.div>
  );
};

export default GriffityBg;
