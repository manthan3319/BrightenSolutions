"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ContactUs = () => {
  const awardsData = [
    {
      title: "Global",
      season: "Spring 2024",
      img: "/images/caertificateImage.jpg", // Add your images here
    },
    {
      title: "Champion",
      season: "Spring 2024",
      img: "/images/caertificateImage.jpg",
    },
    {
      title: "Top Company",
      season: "C# Developers 2024",
      img: "/images/caertificateImage.jpg",
    },
    {
      title: "Top Company",
      season: "C# Developers 2024",
      img: "/images/caertificateImage.jpg",
    },
    {
      title: "Top Company",
      season: "C# Developers 2024",
      img: "/images/caertificateImage.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Time interval for auto-slide (in ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 1.2))
            `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white", // Ensures text is visible over the gradient
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <h2 className="font-roboto lg:text-[43px]">
          Let’s Brew Ideas Together
        </h2>
      </div>

      {/* Form section */}
      <div
        className="bg-slate-100 pt-32"
        style={{
          backgroundImage: `url('/images/contact-form.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-gray-700 text-center font-medium lg:text-4xl mb-5 font-roboto">
          Smart Solutions for Bright Futures:{" "}
          <span className="text-bgorg font-semibold font-poppins inline-block min-w-[350px] text-left">
            <Typewriter
              words={["Brighten Solution"]}
              loop={-1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-center w-full m-auto max-w-[1300px] text-gray-700 lg:text-2xl">
          Explore tailored IT solutions for your business with{" "}
          <span className="font-semibold text-bgorg">Brighten Solution</span>.
          We specialize in{" "}
          <span className=" text-gray-950">web development</span>,{" "}
          <span className="text-gray-950 ">digital marketing</span>, and{" "}
          <span className="text-gray-950">IT consulting</span> to help your
          business grow. Let’s collaborate and turn your ideas into reality!
        </p>
        <div className="flex flex-col justify-between md:flex-row bg-gray-200 rounded-lg shadow-lg boreder-gray-200 max-w-[950px] mx-auto mt-16">
          {/* Contact Information Section */}
          <div className="border-r border-gray-200">
            <div
              className="w-[450px] h-[550px] rounded-lg"
              style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9)),
                  url('/images/formImage.jpg')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 p-5">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              How do we help?
            </h2>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Project Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                rows="4"
              ></textarea>
              {/* <div className="flex items-center space-x-3">
                <label className="block w-full border-dashed border-2 border-gray-300 text-gray-400 text-center py-4 rounded-lg">
                  Drag & Drop Files Here or{" "}
                  <span className="text-blue-500 underline cursor-pointer">
                    <input type="file" className="ml-24" />
                  </span>
                </label>
              </div> */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">I'm not a robot</span>
              </div>
       
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg "
              >
                Submit
              </button>
              
            </form>
          </div>
        </div>

       
      </div>

      {/* ===========================slider section======================= */}

      <div className="bg-gray-100 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mt-20 px-3">

        <h2 className="lg:text-4xl font-bold font-roboto text-center text-bgorg  border-b-[2px] w-40 m-auto border-gray-500 rounded-xl ">Awards</h2>
        <p className="text-gray-600 text-lg text-center mt-4">
          As the world's leading web & mobile app development company, we have
          been privileged to win <span className="font-bold">13+ awards</span> for
          our working process. We're honored to be a recipient of each of these
          awards for our hard work & customer loyalty.
        </p>
        </div>

        <div className="mt-6">
          <Slider {...settings}>
            {awardsData.map((award, index) => (
              <div key={index} className="p-3">
                <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center h-48 w-[220px]">
                  <Image
                    src={award.img}
                    alt={award.title}
                    width={290}
                    height={200}
                    className="h-28 mb-4 object-contain "
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600">{award.season}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>



    </>
  );
};

export default ContactUs;
