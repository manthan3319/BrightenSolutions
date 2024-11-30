"use client";
import React, { Suspense, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data";
import FullScreenLoader from "../FullScreenLoader/page";

const PortfolioPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ["all", "react", "nextjs", "tailwind"];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <div className="overflow-hidden">
        {/* Header Section */}
        <div
          ref={ref}
          style={{
            width: "100%",
            backgroundImage: inView
              ? `url('images/aboutus-gif.gif')`
              : `url('images/aboutus-placeholder.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            willChange: "transform",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1,
            }}
          ></div>

          <div
            className="lg:max-w-[1745px] px-[20px] m-auto py-[30px] flex items-center justify-center min-h-[300px]"
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-white sm:text-[50px] text-[35px] font-bold font-roboto">
              OUR PORTFOLIO
            </h1>
            <Link href="/" className="text-white flex flex-row gap-[5px]">
              <span> OUR PORTFOLIO</span>/ 
              <span className="text-bgorg">HOME</span>
            </Link>
          </div>
        </div>

        {/* Category Section */}
        <div className="my-[30px] text-center">
          <ul className="flex flex-wrap items-center justify-center gap-[20px]">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-[15px] py-[10px] rounded-lg font-roboto font-medium ${
                  selectedCategory === category
                    ? "bg-bgorg text-white"
                    : "bg-[#f3f3f3] text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-[30px] mb-[30px] px-[20px]">
          {filteredProjects.map((project, index) => (
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
                delay: index * 0.2, // Stagger delay for each project card
                ease: "easeOut",
              }}
            >
              <Link href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="m-auto transition-transform duration-300 group-hover:scale-110"
                  width={400}
                  height={400}
                />
                <div className="px-[20px]">
                  <h2 className="text-[20px] font-bold mb-[10px] mt-[-60px] project-title group-hover:hidden">
                    {project.name}
                  </h2>
                </div>

                <div className="absolute inset-0 flex items-end transition-all duration-500 ease-in-out h-0 group-hover:h-full bg-black bg-opacity-60 overflow-hidden">
                  <div className="w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000000c4]">
                    <div className="p-[20px]">
                      <h2 className="text-[20px] font-bold mb-[10px]">
                        {project.name}
                      </h2>
                      <p className="text-gray-300 text-[14px]">
                        {project.description}
                      </p>
                      <ul className="text-gray-400 text-[12px] mt-[10px]">
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
      </div>
    </Suspense>
  );
};

export default PortfolioPage;
