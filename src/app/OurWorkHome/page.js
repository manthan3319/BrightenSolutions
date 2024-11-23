import React from "react";
import Image from "next/image";
import { creativealcoatsProject, hazirarefractoryworks, rajagrifoods, royaltonholidayhomes } from "../../../public/images/Images/page";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Creative Alcoats",
    description:
      "A next-gen technology-driven website designed for innovation in the industrial sector.",
    image: creativealcoatsProject,
    link: "https://www.creativealcoats.com",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "Rajagrifoods",
    description:
      "A cutting-edge platform enabling businesses to scale seamlessly in the digital era.",
    image: rajagrifoods,
    link: "https://www.rajagrifoods.com/",
    technologies: ["React", "Tailwindcss", "UI/UX"],
  },
  {
    id: 3,
    name: "Hazira refractory works",
    description:
      "A cutting-edge platform enabling businesses to scale seamlessly in the digital era.",
    image: hazirarefractoryworks,
    link: "https://hazirarefractoryworks.com/",
    technologies: ["React", "Tailwindcss", "UI/UX"],
  },
  {
    id: 4,
    name: "Royal Tonholiday Homes",
    description:
      "A cutting-edge platform enabling businesses to scale seamlessly in the digital era.",
    image: royaltonholidayhomes,
    link: "https://royaltonholidayhomes.com/",
    technologies: ["React", "Tailwindcss", "UI/UX"],
  },
];

const OurWorkHome = () => {
  return (
    <div className="lg:max-w-[1745px] px-[20px] m-auto my-[50px]">
      {/* Heading Section */}
      <div className="text-center mb-[50px]">
        <h1 className="xl:text-[35px] font-inter font-semibold text-white">
          <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
            Our Latest Projects
          </span>
          <br />
          <span className="text-[25px] font-inter font-normal text-black">
            Transforming digital possibilities with innovative technology.
          </span>
        </h1>
        <div className="flex justify-end">
          <Link href="/" className="bg-black text-white p-[10px] rounded-lg px-[25px] flex gap-[10px]">Discover Projects <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></Link>
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-[#dddddd] rounded-lg overflow-hidden group"
          >
            <Link href={project.link}
                    target="_blank">
              <Image
                src={project.image}
                alt={project.name}
                className="m-auto transition-transform duration-300 group-hover:scale-110"
                width={400}
                height={400}
              />

              <div className="absolute inset-0 flex items-end transition-all duration-500 ease-in-out h-0 group-hover:h-full bg-black bg-opacity-60 overflow-hidden">
                <div className="w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000000c4]">
                  <div className=" p-[20px]">
                  <h2 className="text-[20px] font-bold mb-[10px]">
                    {project.name}
                  </h2>
                  <p className="text-gray-300 text-[14px]">
                    {project.description}
                  </p>
                  <ul className="text-gray-400 text-[12px] mt-[10px]">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>• {tech}</li>
                    ))}
                  </ul>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-[10px]  bg-[#ffffff1a] text-center w-[100%] inline-block hover:border-white transition-colors duration-300"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkHome;
