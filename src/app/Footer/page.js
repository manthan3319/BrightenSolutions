import Link from "next/link";
import React from "react";
import Image from "next/image";
import { fbicon, instaicon, jsicon, linkdinicon, whatshppicon, youtubeicon } from "../../../public/images/Images/page";

// Dynamic Data for Links
const companyLinks = [
  "Home",
  "Work",
  "Service",
  "Blog",
  "Gallery",
  "Certificates",
  "About Us",
  "Contact Us",
];

const servicesLinks = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "UI/UX Design",
  "SEO Services",
  "Digital Marketing",
  "Cloud Hosting",
  "Maintenance",
];

const marketingLinks = [
  "Social Media Marketing",
  "Search Engine Optimization",
  "Content Creation",
  "Email Marketing",
  "Affiliate Marketing",
  "PPC Campaigns",
  "Brand Strategy",
  "Market Analysis",
];

// Dynamic Footer Component
const Footer = () => {
  const FooterLink = ({ icon, text }) => (
    <Link
      href="/"
      className="flex flex-row gap-[5px] text-white font-inter text-[16px] hover:text-bgorg transition-all duration-300"
    >
      <div>
        <span>
          <i className={`fa ${icon}`} aria-hidden="true"></i>
        </span>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </Link>
  );
  
  const FooterList = ({ title, links }) => (
    <div className="md:w-[20%] sm:w-[25%]  w-[100%]  sm:mt-[20px] md:mt-0 m-auto text-white">
      <h1 className="my-[20px] pb-[10px] border-b-[1px] inline-block text-bgorg font-semibold border-gray-500">
        {title}
      </h1>
      <div>
        <ul className="flex flex-col gap-[10px]">
          {links.map((link, index) => (
            <li 
              key={index} 
              className="hover:scale-110 hover:text-bgorg transition-all duration-300"
            >
              <Link href="/" className="block">{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  

  
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url('images/footer-bg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="bg-black"
    >
      <div className="lg:max-w-[1745px] px-[20px] m-auto pt-[20px]">
        <div className="text-center pb-[30px] border-b border-gray-700">
          <h2 className="text-white font-roboto text-[16px] font-normal">
            READY TO DISCUSS YOUR PROJECT?
          </h2>
          <h1 className="text-bgorg font-roboto text-[50px] font-semibold">
            LET S TALK
          </h1>
          <p className="text-[20px] font-inter text-white font-normal">
            Your One-Stop Solution for Online Excellence: Website Design Surat,
            India
          </p>
          <div className="mt-[30px]">
            <Link
              href="/"
              className="font-roboto text-[17px] bg-bgwhite px-[15px] py-[10px] rounded-md inline-block text-black hover:bg-bgorg hover:text-white transition-all duration-300"
            >
              Work with Us
              <span className="text-[17px]">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </Link>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="flex lg:flex-row flex-wrap mt-[25px]">
          <div className="md:w-[35%] sm:w-[100%]">
            <p className="text-bgwhite font-medium font-inter text-[16px] my-[20px]">
              Say hello
            </p>
            <h2 className=" font-roboto font-semibold text-bgorg text-[26px] my-[20px]">
              Brighten Solutions
            </h2>
            <div className="flex flex-col gap-[15px] ">
              <FooterLink
                icon="fa-map-marker"
                text="424, 4th Floor, The Grand Plaza, VIP Road, Vesu, Surat – 395007, Gujarat, India"
              />
              <FooterLink icon="fa-phone" text="+91 7265993989" />
              <FooterLink
                icon="fa-envelope"
                text="brightensolutions@gmail.com"
              />
              <FooterLink
                icon="fa-clock-o"
                text="Mon – Sat: 9 am – 6 pm, Sunday: CLOSED"
              />
            </div>
          </div>

          <FooterList title="Company" links={companyLinks} />
          <FooterList title="Our Development Services" links={servicesLinks} />
          <FooterList title="Our Marketing Services" links={marketingLinks} />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap md:justify-between justify-center gap-[25px] pb-[10px] items-center mt-[30px] pt-[30px] border-t border-gray-600">
          <div className="text-center text-bgwhite">
            <p>
              Copyright © 2016-24{" "}
              <Link href="https://brightensolutions.com">
                brighten solutions
              </Link>{" "}
              | All Right Reserved
            </p>
          </div>

          <div className="flex flex-row gap-[10px] justify-center">
            {[
              { icon: instaicon, alt: "Instagram" },
              { icon: fbicon, alt: "Facebook" },
              { icon: linkdinicon, alt: "LinkedIn" },
              { icon: youtubeicon, alt: "YouTube" },
              { icon: whatshppicon, alt: "WhatsApp" },
              { icon: jsicon, alt: "JavaScript" },
            ].map((social, index) => (
              <Link href="" key={index}>
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={35}
                  height={35}
                  className="hover:scale-125 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;

