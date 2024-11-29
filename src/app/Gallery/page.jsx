"use client";
import React from "react";
import Image from "next/image";
import { galleryImage1, formImage } from "../../../public/images/Images/page";
import { Typewriter } from "react-simple-typewriter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
  const galleryImage = [
    {
      id: 1,
      image: galleryImage1,
      headers: ["Fresh Air Fun", "Weekend Vibes"],
    },
    {
      id: 2,
      image: galleryImage1,
      headers: ["Chill Moments", "Play and Pause"],
    },
  ];

  const galleryImages = [
    { src: formImage, title: "Chill Vibes" },
    { src: galleryImage1, title: "Picnic Fun" },
    { src: formImage, title: "Pure Joy" },
    { src: formImage, title: "Relax & Unwind" },
    { src: galleryImage1, title: "Picnic Fun" },
    { src: formImage, title: "Relax & Unwind" },
    { src: galleryImage1, title: "Picnic Fun" },
    { src: galleryImage1, title: "Picnic Fun" },
    { src: formImage, title: "Pure Joy" },
    { src: formImage, title: "Relax & Unwind" },
    { src: galleryImage1, title: "Picnic Fun" },
    { src: formImage, title: "Carefree Moments" },
    { src: formImage, title: "Carefree Moments" },
  ];

  return (
    <div>
      <div
        className="text-white flex justify-center items-center lg:text-[45px] md:text-[38px] text-2xl font-bold w-full md:h-[424px] h-72"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 1.2)),
      url('/images/galleryBg.png')
    `,
          backgroundSize: "100% 100%", // Ensures the image fills the container exactly
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Typewriter
          words={["Meet the People Who Power Us."]}
          loop={1}
          typeSpeed={100}
          deleteSpeed={0}
          delaySpeed={9000}
        />
      </div>

      <div className="">
        <h2 className="lg:text-4xl md:text-3xl text-2xl  font-bold font-roboto text-center text-bgorg  border-b-[2px] md:w-80 w-60 sm:mt-20 mt-10 m-auto border-gray-500 rounded-xl ">
          Captured Frames
        </h2>
        <p className="text-gray-600  text-xl text-center mt-12 max-w-[1250px] mx-auto px-4 lg:px-0">
          Step into a world of vibrant memories and cherished moments with our
          gallery. From joyful picnics to carefree chill vibes, each frame tells
          a story of celebration and togetherness. Dive into the essence of fun,
          relaxation, and unforgettable experiences captured.
        </p>

        <div className="flex justify-center flex-wrap gap-16 pt-7 m-auto px-3">
          {galleryImage.map((item, index) => (
            <div key={index} className="wrapper ">
              <div className="image-wrapper">
                <Image src={item.image} alt="hello" width={500} height={300} />
              </div>
              <div className="header-wrapper">
                {item.headers.map((header, idx) => (
                  <h1 className="h1Class" key={idx}>
                    {header}
                  </h1>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Moments to Cherish
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto px-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group break-inside-avoid"
            >
              <Image
                width={300}
                height={300}
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 will-change-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-bgorg text-lg font-semibold">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
