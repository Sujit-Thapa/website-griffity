import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const GriffityBg = () => {
  return (
    <motion.div className="absolute z-10 right-0 bottom-0">
      <Image
        width={459}
        height={562}
        src="/images/griffity-bg.png"
        alt="Griffity Studios"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default GriffityBg;
