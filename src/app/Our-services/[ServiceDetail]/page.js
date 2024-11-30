"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ServicesData } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import FullScreenLoader from "@/app/FullScreenLoader/page";

const Page = () => {
  const { ServiceDetail } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch service details based on ServiceDetail param
    if (ServiceDetail) {
      const serviceData = ServicesData.find(
        (service) => service.id === parseInt(ServiceDetail)
      );
      setService(serviceData);
    }
  }, [ServiceDetail]);

  useEffect(() => {
    // Simulate loading state for 500ms
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Show loader while loading
  if (isLoading) {
    return <FullScreenLoader />;
  }

  // Show loader if service is not found
  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/images/aboutus-gif.gif')`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
        <div className="lg:max-w-[1745px] px-[20px] m-auto py-[30px] flex items-center justify-center min-h-[300px] relative z-20 flex-col">
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
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="w-full z-10 sm:w-[30%] sm:sticky sm:top-[30px] sm:h-[calc(100vh-30px)] sm:overflow-y-auto">
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

          <div className="sm:w-[65%] w-full overflow-y-auto">
            <Image
              src={service.mainImage}
              width={800}
              height={400} // Add height for proper Image rendering
              alt={service.title}
            />
            <h2 className="text-xl font-bold mt-4">{service.title}</h2>
            <div className="text-lg mt-4 flex flex-col gap-[25px]">
              <p className="font-roboto text-[18px]">{service.pare1}</p>
              <p className="font-roboto text-[18px]">{service.pare2}</p>
              <p className="font-roboto text-[18px]">{service.pare3}</p>
              <ul className="mt-4">
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
  );
};

export default Page;
