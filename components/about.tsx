
import { indigo } from "@/fonts";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="sticky flex flex-col max-h-[900px]  max-w-screen-2xl w-full mx-auto text-white"
    >
      <div className="flex justify-between items-center px-5 mt-2">
        <motion.h1 className="text-primary p-base font-semibold z-10">
          [ABOUT GRIFFITY ]
        </motion.h1>
        <motion.p className="heading-h4 z-10 font-extralight">
          evolving mystery!
        </motion.p>
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        <div
          ref={ref}
          className="flex justify-center lg:mt-24 w-[80%] mx-auto gap-6"
        >
          <motion.p className="heading-h4 w-1/2 font-extralight text-right z-10">
            driven by
          </motion.p>
          <div className="-translate-y-10">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 30, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${indigo.className} text-primary heading-h1`}
            >
              innovation,
            </motion.p>

            <motion.p
              initial={{ x: -130, opacity: 0 }}
              animate={
                inView ? { x: -80, opacity: 1 } : { x: -130, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className={`${indigo.className} text-primary custom-c2 `}
            >
              creativity, &nbsp; &nbsp;<span className="text-white"> &</span>
            </motion.p>

            <motion.p
              initial={{ x: 130, opacity: 0 }}
              style={{ y: -20 }}
              animate={inView ? { x: 60, opacity: 1 } : { x: 130, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className={`${indigo.className} text-primary custom-c1  `}
            >
              excellence
            </motion.p>
          </div>
        </div>
        <motion.p className="p-base font-semibold w-[87%] text-center mx-auto z-10 mt-10">
          <span className="text-primary/80">GRIFFITY</span> TURNS{" "}
          <span className="text-primary/80"> IDEAS</span> INTO{" "}
          <span className="text-primary/80">VISUAL STORIES</span> AND{" "}
          <span className="text-primary/80"> MEANINGFUL EXPERIENCES.</span> WE
          BLEND <span className="text-primary/80">DESIGN STRATEGY</span> AND{" "}
          <span className="text-primary/90"> COLLABORATION </span>TO BUILD
          BRANDS THAT ARE <span className="text-primary/80">SEEN HEARD </span>
          AND
          <span className="text-primary/80"> REMEMBERED.</span>
        </motion.p>
      </div>

      <motion.div className="flex  w-full mt-14 justify-center gap-72 mx-auto font-extralight heading-h5">
        <motion.span>inspire</motion.span>
        <motion.span>endure</motion.span>
        <motion.span>create</motion.span>
        <motion.span>engage</motion.span>
      </motion.div>
    </div>
  );
};

export default About;
