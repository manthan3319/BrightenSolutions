"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ServicesData } from "@/app/data";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Page = () => {
  const { ServiceDetail } = useParams(); // Get the service ID from the URL
  const [service, setService] = useState(null); // State to hold the selected service
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (ServiceDetail) {
      // Find the service with the matching ID
      const serviceData = ServicesData.find(
        (service) => service.id === parseInt(ServiceDetail)
      );
      setService(serviceData); // Set the service data
    }
  }, [ServiceDetail]);

  if (!service) {
    // If service data is not available, show loading or fallback UI
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: "100%",
          backgroundImage: `url('/images/aboutus-gif.gif')`, // Ensure the path is correct
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          willChange: "transform",
          height: "400px", // Ensure height is set for visibility
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Overlay for text readability
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
            {service.title}
          </h1>
          <Link href="/" className="text-white flex flex-row gap-[5px]">
            <span>{service.title}</span> /{" "}
            <span className="text-bgorg">HOME</span>
          </Link>
        </div>
      </div>

      <div className="lg:max-w-[1400px] px-[20px] m-auto py-[30px]">
        <div className="flex flex-row justify-between">
          <div
            className="w-[30%]  z-10"
            style={{
              position: "sticky",
              top: "30px",
              height: "calc(100vh - 30px)", 
              overflowY: "auto", 
            }}
          >
            <ul className="bg-bgwhite p-[10px] rounded-lg">
              <h1 className="font-roboto font-semibold text-[25px] mb-[25px]">
                What Service We Provide
              </h1>
              {ServicesData.map((serviceItem) => (
                <li
                  key={serviceItem.id}
                  className="text-lg py-2 border-b pb-[10px] mb-[10px] font-roboto font-semibold"
                >
                  <Link href={`/Our-services/${serviceItem.id}`}>
                    {serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[65%] overflow-y-auto">
            <div>
              <Image src={service.mainImage} width={800} alt={service.title} />
              <h2 className="text-xl font-bold mt-4">{service.title}</h2>
              <div className="text-lg mt-4">
                <div className="flex flex-col gap-[25px]">
                  <p className="font-roboto text-[18px]">{service.pare1}</p>
                  <p className="font-roboto text-[18px]">{service.pare2}</p>
                  <p className="font-roboto text-[18px]">{service.pare3}</p>
                </div>

                <ul className="mt-4 ">
                  {service.KeyFeatures.map((feature, index) => (
                    <li key={index} className="list-disc pl-5">
                      <p className="flex font-roboto flex-row gap-[10px]">
                        <span>-</span>
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-roboto text-[18px]">{service.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
