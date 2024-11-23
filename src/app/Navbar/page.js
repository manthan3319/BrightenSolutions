"use client";
import React, { useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Drawerbg from '../../../public/images/drawerbg.jpg';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black py-[25px]  sticky w-[100%] top-0 z-50">
      <div className="lg:max-w-[1745px] px-[20px] m-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-[20px] items-center">
            <div>
              <button onClick={toggleDrawer}>
                <p className="font-inter text-white border-t-[1px] border-b-[1px]  border-gray-500 py-[5px]">
                  MENU
                </p>
              </button>

              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="text-white overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  width: '30%',
                  backgroundImage: `url(${Drawerbg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-2xl text-black">Hello World</h2>
                  <img src={Drawerbg} height={25} width={25} alt="Drawer Image" />
                </div>
              </Drawer>
            </div>

            <div>
              <p className="flex flex-row gap-[10px] text-white">
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span className="text-[16px] font-inter">+91 7265993989</span>
              </p>
            </div>
          </div>

          <div>
            <Link href="/" className="text-white font-bold font-poppins text-[25px]">
              <Image src="/images/Brighten SolutionLogo White.svg" width={200} height={100} alt="logo"/>
            </Link>
          </div>

          <div className="flex flex-row gap-[20px]">
            <div>
              <Link
                href="/Gallery"
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
    </div>
  );
};

export default Navbar;
