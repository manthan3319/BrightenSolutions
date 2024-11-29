"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ServicesData } from "../data";



const OurServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    debounce: 200, // Adjust debounce to prevent multiple re-renders
  });

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  }), []);

  return (
    <div ref={ref} className="relative bg-[#222222] sm:my-[100px] my-[25px] Innovating-bg overflow-hidden">
      <div className="lg:max-w-[1745px] px-[20px] m-auto py-[30px]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="xl:text-[40px] lg:text-[35px] md:text-[35px] sm:text-[30px] text-[25px] font-inter font-semibold text-white">
            <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
              BrightenSolutions
            </span>
            <br />
            <span>Innovating Your Digital Presence</span>
          </h1>
          <p className="text-gray-400 font-thin xl:text-[20px]">
            Dedicated to Elevating Brands in the Digital Space
          </p>
        </div>

        {/* Service Cards */}
        <div className="xl:w-[75%] w-[100%] m-auto mt-[50px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[25px]">
            {ServicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-[#333333] rounded-[10px] transition-all duration-300 p-[20px] flex items-center justify-center flex-col transform hover:scale-105"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                custom={index}
              >
                <motion.div
                  className="rounded-full bg-[#4444448c] p-5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw" // Ensure proper responsive images
                    quality={75} // Optionally reduce image quality for performance
                  />
                </motion.div>
                <p className="mt-3 text-[18px] text-center text-white font-roboto font-semibold">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
