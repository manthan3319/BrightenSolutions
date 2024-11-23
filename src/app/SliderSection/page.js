"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SliderSection = () => {
  const textOptions = [
    "BrightenSolutionss - Pioneers in Innovation",
    "Website Design & Development",
    "UI/UX Strategy & Design",
    "Digital Marketing Experts",
    "Custom Mobile App Development",
    "Search Engine Optimization (SEO)",
    "Creative Graphic & Printing Solutions",
    "Next-Gen E-Visiting Cards",
  ];

  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = textOptions.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % textOptions.length;
          return textOptions[nextIndex];
        });
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url('images/sliderbg.jpg')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "800px",
      }}
      className="py-[100px] flex items-center relative"
    >
       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="w-[100%] lg:max-w-[1745px] m-auto px-[20px] flex md:flex-row items-center z-20">
        <div className="w-[50%]">
          <h2 className="text-white font-roboto text-[25px] font-normal mb-[25px]">
            Empowering Businesses with Future-Ready Solutions
          </h2>

          <div className="h-[250px]">
            <h1 className="text-[45px] font-roboto font-semibold text-white textshadow leading-[1.3]">
              Your Trusted{" "}
              <span className="text-bgorg">Technology Partner</span> for <br />
              Innovation, Growth, and Excellence in{" "}
              <span
                className={`text-bgorg transition-opacity duration-500 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {currentText}
              </span>
            </h1>
          </div>

          <Link href="#">
            <button className="mt-[20px] py-[10px] px-[20px] bg-black border-[1px] border-gray-400 consulybox text-white font-bold rounded-lg shadow-lg hover:opacity-90">
              CONSULT BrightenSolutionsS
            </button>
          </Link>
        </div>
        <div className="w-[50%]">
          <Image src="/images/Brighten Solution Monogram.svg" className="m-auto" width={400} height={400} alt="logo"/>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
