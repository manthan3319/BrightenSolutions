"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  aboutusimg1,
  DedicatedTeam,
  GlobalExpertise,
  InnovativeSolutions,
  StrategicPlanning,
} from "../../../public/images/Images/page";

const InnovativeStrategies = () => {
  const strengths = [
    { id: 1, title: "Innovative Solutions", image: InnovativeSolutions },
    { id: 2, title: "Strategic Planning", image: StrategicPlanning },
    { id: 3, title: "Global Expertise", image: GlobalExpertise },
    { id: 4, title: "Dedicated Team", image: DedicatedTeam },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2, // Adds delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="lg:max-w-[1745px] px-[20px] m-auto sm:my-[70px]"
    >
      <div className="flex flex-col lg:flex-row gap-[25px] items-center overflow-hidden">
        {/* Text Section */}
        <motion.div
          variants={itemVariants}
          className="lg:w-[50%] w-full"
        >
          <p className="text-bgorg font-semibold text-[20px]">Our Strengths</p>
          <h1 className="sm:text-[35px] text-[25px] font-semibold font-roboto text-gray-800 leading-snug">
            Fuel Your Growth with BrightenSolutionss <br /> Unmatched Expertise
          </h1>
          <p className="text-gray-500 mt-[15px] lg:w-[80%]">
            At BrightenSolutionss, we redefine success through innovative
            strategies and a commitment to excellence. Our strengths lie in
            combining creativity, technical expertise, and a client-focused
            approach to deliver outstanding results.
          </p>

          {/* Animated Strength Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[30px]"
          >
            {strengths.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex flex-row gap-[25px] items-center innovatibox-shadow p-[10px] border-[1px] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="bg-white p-[5px] rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    loading="lazy" // Lazy load for images
                  />
                </div>
                <div>
                  <p className="font-roboto font-medium text-[20px] text-gray-700">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Right Section */}
        <motion.div
          variants={itemVariants}
          className="xl:w-[40%] lg:w-[50%] w-full mt-[20px] lg:mt-0"
        >
          <Image
            src={aboutusimg1}
            alt="aboutusimg1"
            className="rounded-lg  transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InnovativeStrategies;
