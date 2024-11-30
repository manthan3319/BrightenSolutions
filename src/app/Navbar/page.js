"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";
import { rightarrow } from "../../../public/images/Images/page";

const Navbar = () => {
  const SaidbarMenu = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About Us", href: "/About-us" },
    { id: 3, title: "Our Services", href: "/Our-services" },
    { id: 4, title: "Portfolio", href: "/Portfolio" },
    { id: 5, title: "Certificates", href: "/Certificate" },
    { id: 6, title: "Gallery", href: "/Gallery" },
    { id: 7, title: "Contact", href: "/Contact-us" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-black py-[25px] w-[100%] top-0 z-[99999] transition-all duration-500 ${
        isSticky ? "sticky top-0 shadow-lg" : ""
      }`}
    >
      <div className="lg:max-w-[1745px] px-[20px] m-auto">
        <div className=" md:block  hidden">
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-[20px] items-center">
              {/* Menu Button */}
              <div>
                <button onClick={toggleDrawer}>
                  <p className="font-inter text-white border-t-[1px] border-b-[1px] border-gray-500 py-[5px]">
                    MENU
                  </p>
                </button>

                {/* Drawer */}
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction="right"
                  className="text-white overflow-hidden transition-all duration-500 ease-in-out border-l border-gray-600 relative"
                  style={{
                    width: "20%",
                    backgroundImage: `url('/images/salidbarmenubg.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    height: "100vh",
                  }}
                >
                  {/* Black Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      zIndex: 1,
                    }}
                  ></div>

                  {/* Menu Content */}
                  <div className="relative z-10 p-6">
                    <div className="pb-[20px] mb-[20px] border-b border-gray-500">
                      <Image
                        src="/images/Brighten SolutionLogo White.svg"
                        alt="logo"
                        className="m-auto"
                        width={200}
                        height={200}
                      />
                    </div>
                    <ul className="space-y-4">
                      {SaidbarMenu.map((item, index) => (
                        <li
                          key={item.id}
                          className="transition-transform duration-300 hover:scale-105 hover:text-gray-300  animate-fadeIn"
                          style={{
                            animationDelay: `${index * 0.1}s`, // Stagger animation
                          }}
                        >
                          <Link
                            href={item.href}
                            className="text-white text-lg font-inter flex flex-row gap-[5px] items-center"
                          >
                            <span>
                              <Image
                                src={rightarrow}
                                alt="arrow"
                                width={10}
                                height={10}
                                className="img_filter"
                              />
                            </span>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Drawer>
              </div>

              {/* Contact Info */}
              <div>
                <p className="flex flex-row gap-[10px] text-white">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  <span className="text-[16px] font-inter">+91 7265993989</span>
                </p>
              </div>
            </div>

            {/* Logo */}
            <div>
              <Link
                href="/"
                className="text-white font-bold font-poppins text-[25px]"
              >
                <Image
                  src="/images/Brighten SolutionLogo White.svg"
                  width={200}
                  height={100}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-[20px]">
              <div>
                <Link
                  href="/Portfolio"
                  className="text-black bg-white px-[25px] text-[17px] py-[10px] font-inter rounded-lg"
                >
                  OUR WORK
                </Link>
              </div>
              <div>
                <Link
                  href="/Contact-us"
                  className="text-black bg-white px-[25px] text-[17px] py-[10px] font-inter rounded-lg"
                >
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <div className="mb-[15px]">
            <div className="flex flex-row gap-[20px] justify-end">
              <div>
                <Link
                  href="/Portfolio"
                  className="text-black inline-block bg-white px-[25px] text-[12px] sm:text-[17px] py-[10px] font-inter rounded-lg"
                >
                  OUR WORK
                </Link>
              </div>
              <div>
                <Link
                  href="/Contact-us"
                  className="text-black inline-block bg-white px-[25px] sm:text-[17px] text-[12px] py-[10px] font-inter rounded-lg"
                >
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between px-[20px] items-center">
            <div>
              <Link
                href="/"
                className="text-white font-bold font-poppins text-[25px]"
              >
                <Image
                  src="/images/Brighten SolutionLogo White.svg"
                  width={200}
                  height={100}
                  alt="logo"
                />
              </Link>
            </div>

            <div>
              <button onClick={toggleDrawer}>
                <p className="font-inter text-white border-t-[1px] border-b-[1px] border-gray-500 py-[5px]">
                  MENU
                </p>
              </button>

              {/* Drawer */}
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="text-white overflow-hidden transition-all duration-500 ease-in-out border-l border-gray-600 relative"
                style={{
                  backgroundImage: `url('/images/salidbarmenubg.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  height: "100vh",
                }}
              >
                {/* Black Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                  }}
                ></div>

                {/* Menu Content */}
                <div className="relative z-10 p-6">
                  {/* <div className="pb-[20px] mb-[20px] border-b border-gray-500">
                    <Image
                      src="/images/Brighten SolutionLogo White.svg"
                      alt="logo"
                      className="m-auto"
                      width={200}
                      height={200}
                    />
                  </div> */}
                  <ul className="space-y-4">
                    {SaidbarMenu.map((item, index) => (
                      <li
                        key={item.id}
                        className="transition-transform duration-300 hover:scale-105 hover:text-gray-300  animate-fadeIn"
                        style={{
                          animationDelay: `${index * 0.1}s`, // Stagger animation
                        }}
                      >
                        <Link
                          href={item.href}
                          className="text-white text-lg font-inter flex flex-row gap-[5px] items-center"
                        >
                          <span>
                            <Image
                              src={rightarrow}
                              alt="arrow"
                              width={10}
                              height={10}
                              className="img_filter"
                            />
                          </span>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
