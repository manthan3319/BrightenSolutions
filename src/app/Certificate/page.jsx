"use client"
import React from "react";
import Image from "next/image";
import { creativecertificate } from "../../../public/images/Images/page";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const Certificate = () => {
  const certificates = [
    { id: 1, image: creativecertificate, title: "Award of Excellence" },
    { id: 2, image: creativecertificate, title: "Outstanding Service" },
    { id: 3, image: creativecertificate, title: "Professional Certification" },
    { id: 4, image: creativecertificate, title: "Achievement Award" },
    { id: 5, image: creativecertificate, title: "Skill Recognition" },
  ];

  return (
    <div>
      <div
        className="text-white flex justify-center items-center lg:text-[45px] sm:text-[35px] text-[23px] font-bold w-full md:h-[424px] h-64"
        style={{
          
            backgroundImage: `linear-gradient(to bottom ,rgba(0,0,0,0.81), rgba(0,0,0,1.12)),
        url('/images/galleryBg.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Link href='/OurBlog'>
        <Typewriter
        words={['Our Badge of Honor']}
        loop={1}
        typeSpeed={100}
        
        />
        </Link>
        
      </div>

      <div className="py-10 ">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold font-roboto text-center text-bgorg  border-b-[2px]  w-[250px] sm:w-[290px] lg:w-[370px]   sm:mt-20 mt-1 m-auto border-gray-500 rounded-xl mb-10 sm:mb-16">
          Gallery of Excellence
        </h2>

        <div className="py-4 sm:py-10 bg-gray-100">
          <h2 className="text-center text-3xl font-bold mb-8 text-gray-800"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg"
              >
                {/* Image */}
                <Image
              
                  src={cert.image}
                  alt={cert.title}
                  className=" object-cover transition-transform duration-500 "
                />

                {/* Sliding Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 duration-500">
                  <p className="text-white text-lg font-bold translate-y-48 group-hover:translate-y-32 transition-transform duration-500">
                    {cert.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
