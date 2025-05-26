import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GriffityBg from "./bg-logo";
import { indigo } from "@/fonts";

// Format large numbers like 20000 to 20k
const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toString();
};

const useInView = (
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null!);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

type DescType =
  | "of experience"
  | "collaborated"
  | "completed"
  | "recognition"
  | "managed"
  | "hours"
  | "years"
  | "brands"
  | "events"
  | "work";

const CountUp = ({
  end,
  label,
  desc,
}: {
  end: number;
  label: string;
  desc: DescType;
}) => {
  const [ref, isVisible] = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  // Override formatNumber to avoid decimals
  const formatNumberNoDecimal = (num: number): string => {
    if (num >= 1000000) return Math.floor(num / 1000000) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "k";
    return num.toString();
  };

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

  const fontSizeMap = {
    "of experience": "text-[1.0001rem]",
    collaborated: "text-[1.39rem]",
    completed: "text-[1.8rem]",
    recognition: "text-[1.79rem]",
    managed: "text-[1.67rem]",
    hours: "text-[1.99rem]",
    years: "text-[2.84375rem]",
    brands: "text-[2.84375rem]",
    events: "text-[2.3125rem]",
    work: "text-[2.5rem]",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-1 w-full "
    >
      <div className="flex  leading-none items-end ">
        <p className="heading- text-[115px] font-semibold text-white">
          +{formatNumberNoDecimal(count)}
        </p>
        <div className="flex flex-col ml-2 pb-3 font-light">
          <span className="text-[2.5rem] mb-1 ">{label}</span>
          <p
            className={`p-base  text-primary text-right ${fontSizeMap[desc]}   whitespace-nowrap`}
          >
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Clientnumber = () => {
  const sectionRef = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.5"], // triggers animation as section enters/leaves viewport
  });

  // Animate from bottom-right to top-left (adjust values as needed)
  const y = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const x = useTransform(scrollYProgress, [0, 1], [-250, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0]);

  const statsLeft = [
    { end: 4, label: "years", desc: "of experience" as const },
    { end: 31, label: "projects", desc: "completed" as const },
    { end: 11, label: "events", desc: "managed" as const },
  ];

  const statsRight = [
    { end: 21, label: "brands", desc: "collaborated" as const },
    { end: 5, label: "industry", desc: "recognition" as const },
    { end: 20000, label: "work", desc: "hours" as const },
  ];

  return (
    <div
      ref={sectionRef}
      className=" w-full mb-32 py-20 max-h-[900px] z-20  h-screen max-w-screen-2xl mx-auto  text-white relative flex flex-col"
    >
      {/* Heading */}
      <div className="mb-16 pl-16">
        <h1
          className={`text-7xl ${indigo.className} text-primary font-bold mb-2`}
        >
          TIRED OF OUTDATED
        </h1>
        <h2 className="text-7xl text-primary font-bold">SOLUTIONS?</h2>
      </div>

      {/* Stats Section */}
      <div className="flex px-44 flex-row  z-20">
        {/* Left Column */}
        <div className="flex flex-col space-y-20 w-full">
          {statsLeft.map(({ end, label, desc }, idx) => (
            <CountUp key={idx} end={end} label={label} desc={desc} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-20 w-full">
          {statsRight.map(({ end, label, desc }, idx) => (
            <CountUp key={idx} end={end} label={label} desc={desc} />
          ))}
        </div>
      </div>
      <motion.div
        style={{ x, y, opacity }}
        className="absolute bottom-0 right-0 w-full h-full"
      >
        <GriffityBg />
      </motion.div>
      {/* 
      <div className="absolute bottom-6 left-6 ml-32 text-primary text-xl space-y-1">
        {["your growth is our", "mission and we", "will make it happen"].map(
          (line, i) => (
            <p key={i}>{line}</p>
          )
        )}
      </div>

     
      <div className="absolute bottom-6 right-6 mr-32 text-primary text-xl space-y-1 text-left">
        {["we use next-gen", "technology", "to drive results"].map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      */}
    </div>
  );
};

export default Clientnumber;
