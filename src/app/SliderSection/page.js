"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SliderSection = () => {
  const textOptions = [
    "BrightenSolutions - Pioneers in Innovation",
    "Website Design & Development",
    "UI/UX Strategy & Design",
    "Digital Marketing Experts",
    "Custom Mobile App Development",
    "Search Engine Optimization (SEO)",
    "Creative Graphic & Printing Solutions",
    "Next-Gen E-Visiting Cards",
  ];

  const [currentText, setCurrentText] = useState(textOptions[0]);
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animation triggers only once when visible
    threshold: 0.2,     // Trigger animation once 20% of element is in view
    rootMargin: "0px 0px 100px 0px",  // Start animation slightly before the element is fully in view
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textOptions.length;
        return textOptions[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        delay: 0.8,
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        backgroundImage: `url('images/sliderbg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="py-[100px] flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <motion.div
        className="w-[100%] lg:max-w-[1745px] m-auto px-[20px] flex md:flex-row lg:flex-row gap-y-[50px] flex-col-reverse items-center z-20"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div className="md:w-[50%] w-full" variants={containerVariants}>
          <motion.h2
            className="text-white font-roboto text-[25px] font-normal mb-[25px]"
            variants={textVariants}
          >
            Empowering Businesses with Future-Ready Solutions
          </motion.h2>
          <motion.div className="" variants={textVariants}>
            <h1 className="md:text-[45px] sm:text-[40px] text-[30px] font-roboto font-semibold text-white textshadow leading-[1.3]">
              Your Trusted{" "}
              <span className="text-bgorg">Technology Partner</span> for <br />
              Innovation, Growth, and Excellence in{" "}
              <motion.span
                className="text-bgorg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {currentText}
              </motion.span>
            </h1>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link href="#">
              <button className="mt-[20px] py-[10px] px-[20px] bg-black border-[1px] border-gray-400 consulybox text-white font-bold rounded-lg shadow-lg hover:opacity-90">
                CONSULT BrightenSolutionsS
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Lazy Loading */}
        <motion.div
          className="w-[50%]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Image
            src="/images/Brighten Solution Monogram.svg"
            className="m-auto "
            width={400}
            height={400}
            alt="logo"
            loading="lazy"  // Lazy load the image for better performance
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SliderSection;
