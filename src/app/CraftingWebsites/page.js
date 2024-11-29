"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CraftingWebsites = () => {
  const timelineSteps = [
    {
      title: "Meet",
      desc: "We begin by understanding your needs, goals, and vision for the website. This phase ensures alignment and sets the foundation for success.",
    },
    {
      title: "Plan",
      desc: "Our team crafts a detailed plan, outlining the structure, functionality, and user journey of your website to ensure a seamless experience.",
    },
    {
      title: "Design & Development",
      desc: "We bring your vision to life by designing an aesthetically pleasing interface and coding a responsive, high-performance website.",
    },
    {
      title: "Testing",
      desc: "We rigorously test your website across devices and browsers to identify and fix any bugs, ensuring a flawless user experience.",
    },
    {
      title: "Launch",
      desc: "Your website goes live! We deploy the final product and ensure smooth functionality while providing ongoing support post-launch.",
    },
    {
      title: "Feedback",
      desc: "We gather insights from users and stakeholders to continuously improve the website, boosting trust and driving better engagement.",
    },
  ];

  // InView hook for optimized visibility tracking
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% is visible
    rootMargin: "0px 0px 100px 0px", // Trigger earlier before full visibility
  });

  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url('images/CraftingWebsites-bg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="overflow-hidden"
    >
      <div className="lg:max-w-[1745px] px-[20px] m-auto py-[30px]">
        <div className="text-center mb-[50px]">
          <h1 className="xl:text-[35px] sm:text-[30px] text-[25px] font-inter font-semibold text-white">
            <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
              BrightenSolutions
            </span>
            <br />
            <span>
              Crafting Websites That Drive Engagement and <br /> Deliver
              Results.
            </span>
          </h1>
        </div>

        <div ref={ref} className="relative lg:w-[100%] xl:w-[77%] 2xl:w-[70%] m-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 h-full md:block hidden"></div>

          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : index % 2 === 0 ? -100 : 100,
              }}
              transition={{
                delay: 0.2 * index,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <div className="relative z-10 w-[30px] h-[30px] bg-bgorg rounded-full border-2 flex items-center justify-center text-white font-roboto font-bold border-white shadow-md">
                {index + 1}
              </div>

              <div
                className={`md:w-[45%] w-[100%] mb-[25px] md:mb-0 ${
                  index % 2 === 0
                    ? "text-right pr-[20px] rightcard-crafting"
                    : "text-left pl-[20px] leftcard-crafting"
                }`}
              >
                <h2 className="text-[20px] font-bold text-black">{step.title}</h2>
                <p className="text-gray-500 text-[16px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftingWebsites;
