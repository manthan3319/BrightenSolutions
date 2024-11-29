"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data";

const OurWorkHome = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Lower threshold for better mobile triggering
  });

  return (
    <div className="lg:max-w-[1745px] px-[20px] m-auto my-[50px] overflow-hidden">
      <div className="text-center mb-[50px]">
        <h1 className="text-[25px] lg:text-[35px] font-inter font-semibold text-white">
          <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
            Our Latest Projects
          </span>
          <br />
          <span className="text-[20px] lg:text-[25px] font-inter font-normal text-black">
            Transforming digital possibilities with innovative technology.
          </span>
        </h1>
        <div className="flex justify-end">
          <Link
            href="/"
            className="bg-black text-white p-[10px] rounded-lg px-[25px] flex gap-[10px]"
          >
            Discover Projects{" "}
            <span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative bg-[#dddddd] image-anime rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // Reduced delay for better performance on mobile
                ease: "easeOut",
              }}
            >
              <Link href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="m-auto transition-transform duration-300 group-hover:scale-105 object-cover"
                  width={400}
                  height={300} // Adjust height for better fit
                />

                <div className="absolute inset-0 flex items-end transition-all duration-500 ease-in-out h-0 group-hover:h-full bg-black bg-opacity-60 overflow-hidden">
                  <div className="w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000000c4]">
                    <div className="p-[10px] lg:p-[20px]">
                      <h2 className="text-[16px] lg:text-[20px] font-bold mb-[5px] lg:mb-[10px]">
                        {project.name}
                      </h2>
                      <p className="text-gray-300 text-[12px] lg:text-[14px]">
                        {project.description}
                      </p>
                      <ul className="text-gray-400 text-[10px] lg:text-[12px] mt-[5px] lg:mt-[10px]">
                        {project.technologies.map((tech, index) => (
                          <li key={index}>• {tech}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-[10px] bg-[#ffffff1a] text-center w-[100%] inline-block hover:border-white transition-colors duration-300"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurWorkHome;
