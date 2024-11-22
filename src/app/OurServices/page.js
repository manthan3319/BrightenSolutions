import React from "react";
import { APIIntegration, AppDevelopment, blackShadow, DigitalMarketing, GraphicDesign, Hosting, SeoMarketing, shadowimg, SocialMarketing, uiuxicon, webdesignicon, webDevelopment } from "../../../public/images/Images/page";
import Image from "next/image";

const services = [
  { id: 1, icon: uiuxicon, title: "UI/UX Design" },
  { id: 2, icon: webdesignicon, title: "Web Design" },
  { id: 3, icon: webDevelopment, title: "Web Development" },
  { id: 4, icon: AppDevelopment, title: "App Development" },
  { id: 5, icon: SeoMarketing, title: "SEO Marketing" },
  { id: 6, icon: DigitalMarketing, title: "Digital Marketing" },
  { id: 7, icon: SocialMarketing, title: "Social Marketing" },
  { id: 8, icon: GraphicDesign, title: "Graphic Design" },
  { id: 9, icon: APIIntegration, title: "API Integration" },
  { id: 10, icon: Hosting, title: "Hosting" },
];

const OurServices = () => {
  return (
    <div className="relative bg-[#222222] ">
      {/* <div>
        <Image
          src={blackShadow}
          width={800}
          height={100}
          alt="shadow"
          className="absolute right-0 bottom-0 opcity z-[-1px]"
        />
      </div>

      <div>
        <Image
          src={blackShadow}
          width={800}
          height={100}
          alt="shadow"
          className="absolute top-0 left-0 opcity tranformation z-1"
        />
      </div> */}

      <div className="lg:max-w-[1745px] px-[20px] m-auto py-[30px] ">
        <div className="text-center">
          <h1 className="xl:text-[40px] font-inter font-semibold text-white ">
            <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
              BrightenSolution
            </span>
            <br />
            <span>
            Innovating Your Digital Presence</span>
          </h1>
          <p className="text-gray-400 font-thin xl:text-[20px]">
            Dedicated to Elevating Brands in the Digital Space
          </p>
        </div>

        <div className="w-[75%] m-auto mt-[50px] ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px]">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#333333] rounded-[10px]  transition-all duration-300 p-[20px] flex items-center justify-center flex-col transform hover:scale-105"
              >
                <div className="rounded-full bg-[#4444448c] p-5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="mt-3 text-[18px] text-center text-white font-roboto font-semibold">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
