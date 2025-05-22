import { indigo } from "@/fonts";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 120vh", "end -120vh"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  // Particle styles
  const particleStyles = Array.from({ length: 15 }, (_, i) => ({
    width: Math.random() * 10 + 5,
    height: Math.random() * 10 + 5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    y: useTransform(scrollYProgress, [0, 1], [0, -100 - Math.random() * 200]),
    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]),
  }));

  return (
    <div
      ref={containerRef}
      className="relative h-screen max-w-screen-2xl w-full mx-auto text-white overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 z-0 opacity-20" style={{ y: y1 }}>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
      </motion.div>

      <div className="flex justify-between items-center px-5 mt-2">
        <motion.h1
          style={{ y: y1 }}
          className="text-primary text-base font-semibold z-10"
        >
          [ABOUT GRIFFITY ]
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          style={{ y: y2 }}
          className="text-h4 z-10 font-extralight"
        >
          evolving mystery!
        </motion.p>
      </div>

<<<<<<< HEAD
    
      <img
        src="/images/gradient.svg"
        alt="gradient"
        className="absolute top-2/3 right-[16%] scale-150 w-auto h-auto z-0"
      />
=======
      <div
        ref={ref}
        className="flex pt-24 justify-center w-[80%] mx-auto gap-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ y: y1 }}
          className="text-h4 w-1/2 font-extralight text-right z-10"
        >
          driven by
        </motion.p>
        <div className="-translate-y-10">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ y: y2 }}
            className={`${indigo.className} text-primary text-h1/none`}
          >
            innovation,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ y: y3 }}
            className={`${indigo.className} text-primary text-[6.25rem]/none -translate-x-20`}
          >
            creativity, &nbsp; &nbsp;<span className="text-white"> &</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ y: y1 }}
            className={`${indigo.className} text-primary text-[11.374rem]/none translate-x-14 -translate-y-7`}
          >
            excellence
          </motion.p>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{ y: y2, opacity }}
        className="text-base font-semibold w-[87%] text-center mx-auto z-10 mt-10"
      >
        <span className="text-primary/80">GRIFFITY</span> TURNS{" "}
        <span className="text-primary/80"> IDEAS</span> INTO{" "}
        <span className="text-primary/80">VISUAL STORIES</span> AND{" "}
        <span className="text-primary/80"> MEANINGFUL EXPERIENCES.</span> WE
        BLEND <span className="text-primary/80">DESIGN STRATEGY</span> AND{" "}
        <span className="text-primary/90"> COLLABORATION </span>TO BUILD BRANDS
        THAT ARE <span className="text-primary/80">SEEN HEARD </span>AND
        <span className="text-primary/80"> REMEMBERED.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
        style={{ y: y3 }}
        className="flex bottom-10 absolute w-full justify-center gap-72 mx-auto font-extralight text-h5"
      >
        <motion.span
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        >
          inspire
        </motion.span>
        <motion.span
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        >
          endure
        </motion.span>
        <motion.span
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        >
          create
        </motion.span>
        <motion.span
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        >
          engage
        </motion.span>
      </motion.div>

      {/* Floating particles with parallax */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none">
        {particleStyles.map((style, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={style}
          />
        ))}
      </motion.div>
>>>>>>> c267d9effaa74532780afaf6393e27bc843c860e
    </div>
  );
};

export default About;
