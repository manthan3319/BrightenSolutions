"use client"
import React from "react";
import Slider from "react-slick";
import {
  ecowebsiteblog,
  ScaleBusinessblog,
  seoblog,
} from "../../../public/images/Images/page";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "E-commerce Websites Development",
    date: "12-Nov-2024",
    image: ecowebsiteblog,
  },
  {
    id: 2,
    title: "Tips for Better SEO",
    date: "10-Nov-2024",
    image: seoblog,
  },
  {
    id: 3,
    title: "How to Scale Your Business Online",
    date: "08-Nov-2024",
    image: ScaleBusinessblog,
  },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Small Tablets and Larger Phones
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // Small Phones
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const OurLatestBlog = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url('/images/blog-bg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="lg:max-w-7xl px-6 mx-auto z-[9] relative">
        <div className="text-center mb-[40px]">
          <h1 className="xl:text-[40px] lg:text-[35px] sm:text-[30px] text-[25px] font-inter font-semibold text-white">
            <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
              Our Latest Blog
            </span>
          </h1>
          <div className="flex justify-end z-[99] relative mt-[25px]">
            <Link
              href="/"
              className="bg-[#dddddd] text-black p-[10px] rounded-lg px-[25px] flex gap-[10px]"
            >
              Discover Blog{" "}
              <span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </Link>
          </div>
        </div>

        {/* Blog Slider */}
        <Slider {...sliderSettings} className="gap-6">
          {blogData.map((blog) => (
            <div key={blog.id} className="p-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300">
                <div className="relative group">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-t-lg"
                  />
                </div>

                <div className="p-4 bg-[#dddddd]">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <p>{blog.date}</p>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurLatestBlog;
