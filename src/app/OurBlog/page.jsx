"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { blogData } from "../../app/OurBlog/blogData/blogData"; 

const OurBlog = () => {
  const { banner, title, featured, trends, customer, callToAction } = blogData;

  return (
    <>
      {/* Banner Section */}
      <div
        className="text-white flex justify-center items-center lg:text-[43px] sm:text-[35px] text-[23px] font-bold w-full md:h-[424px] h-64"
        style={{
          backgroundImage: `linear-gradient(to bottom ,rgba(0,0,0,0.7), rgba(0,0,0,1.12)),
          url('${banner.backgroundImage}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Typewriter words={[banner.title]} loop={1} typeSpeed={100} />
      </div>

      <div className="max-w-[1700px] m-auto p-4 mt-14 space-y-16">
        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-center tracking-wide">
          {title}
        </h1>

        {/* Featured Blog Section */}
        <div className="w-full grid lg:grid-cols-2 gap-12">
          <div className="relative rounded-lg shadow-lg overflow-hidden lg:h-[420px] sm:h-96">
            <Image
              src={featured.image}
              alt={featured.alt}
              className="object-cover"
              width={1150}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-400 via-transparent to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {featured.heading}
            </h2>
            <p className="text-gray-600 text-lg">{featured.description}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {featured.points.map((point, index) => (
                <li key={index}>
                  <strong className="text-grey-600">{point.title}</strong>{" "}
                  {point.content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trends Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {trends.title}
          </h2>
          <p className="text-gray-600 text-lg">{trends.description}</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {trends.points.map((trend, index) => (
              <li key={index}>
                <strong className="text-grey-600">{trend.title}</strong>{" "}
                {trend.content}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer-Centric Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {customer.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {customer.description}
          </p>
        </div>

      </div>
        {/* Call to Action */}
        <div className="bg-gray-100  rounded-lg shadow-lg ">
          <div className="max-w-[1685px]  m-auto mt-11 py-10 px-4  space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {callToAction.title}
          </h2>
          <p className="text-gray-600 text-lg text-start ">{callToAction.description}</p>
          <button className="px-8 py-3 text-black border border-gray-300 font-semibold rounded-lg transition duration-300 shadow-xl hover:bg-slate-200">
            {callToAction.buttonText}
          </button>
          </div>
        </div>
    </>
  );
};

export default OurBlog;
