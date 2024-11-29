"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { hazirarefractoryworks } from "../../../public/images/Images/page";

// Example client logos
const clientLogos = [
  { id: 1, src: hazirarefractoryworks, alt: "Client 1" },
  { id: 2, src: hazirarefractoryworks, alt: "Client 2" },
  { id: 3, src: hazirarefractoryworks, alt: "Client 3" },
  { id: 4, src: hazirarefractoryworks, alt: "Client 4" },
  { id: 5, src: hazirarefractoryworks, alt: "Client 5" },
];

const SliderNoSSR = dynamic(() => import('react-slick'), { ssr: false });

const OurClint = () => {
  const leftToRightSettings = {
    infinite: true,
    speed: 10000, 
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
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

  const rightToLeftSettings = {
    ...leftToRightSettings,
    rtl: true,
  };

  return (
    <div className=" sm:py-10 overflow-hidden">
      {/* Heading */}
      <h1 className="xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[25px] font-inter font-semibold text-white text-center mb-10">
        <span className="text-bgorg border-b px-[20px] border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
          Our Clients
        </span>
      </h1>

      {/* Left-to-Right Slider */}
      <div className="mb-5 ">
        <SliderNoSSR {...leftToRightSettings}>
          {clientLogos.map((logo) => (
            <div key={logo.id} className="p-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                className="m-auto sm:w-[100%] md:w-[200px]"
              />
            </div>
          ))}
        </SliderNoSSR>
      </div>

      {/* Right-to-Left Slider */}
      <div className=''>
        <SliderNoSSR {...rightToLeftSettings}>
          {clientLogos.map((logo) => (
            <div key={logo.id} className="p-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                 className="m-auto sm:w-[100%] md:w-[200px]"
              />
            </div>
          ))}
        </SliderNoSSR>
      </div>
    </div>
  );
};

export default OurClint;
