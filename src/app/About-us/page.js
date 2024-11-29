"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ightyear, ishaHr, ourTeam } from "../../../public/images/Images/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Aboutus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Isha Mam",
      role: "HR",
      image: ishaHr,
    },
    {
      id: 2,
      name: "John Doe",
      role: "Developer",
      image: ishaHr,
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Designer",
      image: ishaHr,
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Marketing Manager",
      image: ishaHr,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
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
          <h1 className="text-white text-[50px] font-bold font-roboto">
            ABOUT US
          </h1>
          <Link href="/" className="text-white flex flex-row gap-[5px]">
            <span>ABOUT US</span>/<span className="text-bgorg">HOME</span>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-[1745px] px-[20px] m-auto my-[70px]">
        <div className="flex flex-col lg:flex-row gap-[15px] py-[30px] px-[20px]">
          <div
            className="bg-cover bg-center bg-no-repeat h-[350px] w-full lg:w-[50%]"
            style={{ backgroundImage: "url('images/brighten-solutions.jpg')" }}
          >
            <Image
              src={ightyear}
              alt="ightyear"
              width={500}
              className="m-auto"
            />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <h1 className="text-[40px] font-semibold font-roboto text-primary mb-[15px]">
              About BrightenSolutions
            </h1>
            <p className="text-[18px] text-gray-700 leading-relaxed font-roboto">
              Transforming Ideas into Innovative Solutions
            </p>
            <p className="text-[16px] text-gray-600 mt-[10px] leading-relaxed font-roboto">
              At{" "}
              <span className="text-primary font-semibold">
                BrightenSolutions
              </span>
              , we specialize in delivering cutting-edge solutions tailored to
              meet the unique challenges of modern businesses. From creative
              design to technical excellence, we strive to empower your digital
              journey.
            </p>
            <ul className=" pl-[20px] mt-[15px] text-[16px] text-gray-600 leading-relaxed grid grid-cols-2 gap-[15px]">
              <li className="bg-white innovatibox-shadow p-[15px] font-roboto">
                <span className="font-semibold">Innovative Solutions:</span>{" "}
                <br />
                Leveraging state-of-the-art technologies to craft tailored,
                user-friendly digital experiences.
              </li>
              <li className="bg-white innovatibox-shadow p-[15px] font-roboto">
                <span className="font-semibold">Expert Team:</span> <br />A
                highly skilled and experienced team dedicated to delivering
                excellence at every step.
              </li>
              <li className="bg-white innovatibox-shadow p-[15px] font-roboto">
                <span className="font-semibold">Client-Centric Approach:</span>{" "}
                <br />
                Putting your goals at the forefront to create solutions that
                resonate with your vision.
              </li>
              <li className="bg-white innovatibox-shadow p-[15px] font-roboto">
                <span className="font-semibold">Sustainability:</span>
                <br /> Ensuring that every project we deliver meets the highest
                standards of quality and sustainability.
              </li>
              <li className="bg-white innovatibox-shadow p-[15px] font-roboto">
                <span className="font-semibold">24/7 Support:</span>
                <br /> Committed to providing ongoing assistance to help your
                business adapt and evolve.
              </li>
            </ul>
            <p className="text-[16px] text-gray-600 mt-[10px] leading-relaxed font-roboto">
              Whether you're a startup or a well-established organization,{" "}
              <span className="text-primary font-semibold">
                BrightenSolutions
              </span>{" "}
              is your partner in crafting unique and powerful solutions to drive
              your success.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-[15px] py-[30px] px-[20px]">
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <h1 className="text-[40px] font-bold text-primary mb-[15px]">
              Our Commitment
            </h1>
            <p className="text-[18px] text-gray-700 leading-relaxed">
              Excellence in Every Endeavor
            </p>
            <p className="text-[16px] text-gray-600 mt-[10px] leading-relaxed">
              BrightenSolutions is committed to delivering unparalleled quality
              and ongoing support. Our goal is to ensure your long-term success.
            </p>
            <ul className="list-disc pl-[20px] mt-[15px] text-[16px] text-gray-600 leading-relaxed">
              <li>
                <span className="font-semibold">Transparent Process:</span>{" "}
                Clear communication at every step.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement:</span>{" "}
                Striving to exceed expectations through refinement.
              </li>
            </ul>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat h-[350px] w-full lg:w-[50%]"
            style={{ backgroundImage: "url('images/brighten-commitment.jpg')" }}
           
          >
            
          </div>
        </div> */}

        <div className="flex flex-col lg:flex-row gap-[15px] justify-center items-center py-[30px] px-[20px] group">
          <div className="w-full lg:w-[50%] flex flex-col justify-center  p-[15px] ">
            <h1 className="text-[40px] font-semibold text-primary mb-[15px] group-hover:text-secondary font-roboto">
              Meet Our Team
            </h1>
            <p className="text-[18px] text-gray-700 leading-relaxed font-roboto">
              Passionate Experts Driving Innovation
            </p>
            <p className="text-[16px] text-gray-600 mt-[10px] leading-relaxed font-roboto">
              Our talented professionals bring their wealth of knowledge and
              dedication to every project. Together, we build meaningful
              connections and deliver exceptional outcomes. We believe in
              fostering a culture of innovation and excellence that empowers our
              clients to achieve more.
            </p>
            <ul className="list-disc pl-[20px] mt-[15px] text-[16px] text-gray-600 leading-relaxed">
              <li>
                <span className="font-semibold font-roboto">
                  Skilled Professionals:
                </span>{" "}
                With years of experience in diverse industries, our team is
                equipped to handle any challenge.
              </li>
              <li>
                <span className="font-semibold font-roboto">
                  Collaborative Culture:
                </span>{" "}
                Partnering with you to ensure success at every stage of your
                journey.
              </li>
              <li>
                <span className="font-semibold font-roboto">
                  Innovative Mindset:
                </span>{" "}
                Always exploring new ways to drive progress and achieve
                exceptional results.
              </li>
              <li>
                <span className="font-semibold font-roboto">
                  Empathy & Inclusion:
                </span>{" "}
                Celebrating diversity and building strong connections with our
                clients and team members.
              </li>
            </ul>
          </div>
          <div className="bg-cover bg-center bg-no-repeat  w-full lg:w-[50%] rounded-md shadow-lg relative overflow-hidden">
            <Image src={ourTeam} className="w-full" alt="our team" />
          </div>
        </div>

        <div className="team_section px-[20px] bg-gray-50 overflow-hidden mt-[35px] ">
          {/* Section Header */}
          <div className="text-center mb-[25px]">
            <h1 className="text-[20px] font-bold text-primary text-center ">
              Our Team
            </h1>
            <p className="text-center text-bgorg font-roboto font-semibold border-b inline-block  text-[35px]">
              Meet With Our Expert Team
            </p>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card px-[10px]">
                <div className="relative group bg-bgwhite rounded-lg">
                  {/* Team Member Image */}
                  <div className="overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="transition-transform duration-300 group-hover:scale-105 w-full h-[300px] object-cover"
                    />
                  </div>
                  {/* Team Member Info */}
                  <div className="text-center mt-[10px] p-[10px]">
                    <h1 className="text-[20px] font-semibold font-roboto text-primary">
                      {member.name}
                    </h1>
                    <p className="text-[16px] font-inter">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
