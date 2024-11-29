"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";

const Experience = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView) {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }

  const stats = [
    { id: 1, count: 9, label: "Years of Expertise", desc: "Delivering excellence through innovation." },
    { id: 2, count: 350, label: "Skilled IT Professionals", desc: "Building impactful digital solutions." },
    { id: 3, count: 3000, label: "Projects Delivered", desc: "Transforming ideas into success stories." },
    { id: 4, count: 50, label: "Global Reach", desc: "Empowering businesses worldwide." },
  ];

  return (
    <div>
      <div className="lg:max-w-[1745px] px-[20px] m-auto my-[70px] overflow-hidden">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] "
          ref={ref}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-[#dddddd]  p-[20px] text-center rounded-lg exp_shadow transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <motion.h1
                className="text-[40px] font-bold text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * stat.id, duration: 0.8 }}
              >
                <CountUp start={1} end={stat.count} duration={3} />+
              </motion.h1>
              <p className="font-semibold text-[18px] text-bgorg">{stat.label}</p>
              <p className="text-gray-500 text-[14px]">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
