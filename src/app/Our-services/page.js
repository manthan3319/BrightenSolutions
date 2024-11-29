"use client";
import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ServicesData } from "../data";
import Image from "next/image";
import { rightarrow } from "../../../public/images/Images/page";

const OurServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section with background image change on scroll */}
      <div
        ref={ref}
        style={{
          width: "100%",
          backgroundImage: inView
            ? `url('images/aboutus-gif.gif')`
            : `url('images/aboutus-placeholder.jpg')`, // Placeholder image
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
          <h1 className="text-white text-[50px] font-bold font-roboto">
            OUR SERVICES
          </h1>
          <Link href="/" className="text-white flex flex-row gap-[5px]">
            <span>OUR SERVICES</span>/<span className="text-bgorg">HOME</span>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="lg:max-w-[1745px] px-[20px] m-auto my-[70px] grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
        {ServicesData.map((service) => (
          <div key={service.id} className="service-card flex flex-col justify-between image-anime relative service-item bg-bgwhite p-[10px] shadow-lg rounded-lg overflow-hidden">
            <div className="relative z-[1]">
              <Image 
                src={service.icon} 
                alt={service.title} 
                className=""
                width={100}
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-[22px] font-semibold font-roboto text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2 font-inter text-[18px]">{service.description}</p>
            </div>

            <div className="px-4 pb-4 relative z-[99]">
              <Link 
                href={`/Our-services/${service.id}`} 
                className="bg-black text-white px-[15px] font-roboto text-[15px] py-[10px] flex flex-row items-center gap-[10px] w-[133px] rounded-[10px] service-card_link"
              >
               <span>Learn More</span>  <span><Image src={rightarrow} alt="right icon" className="img_filter" width={15} /></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
