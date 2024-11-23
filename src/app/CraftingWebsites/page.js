import React from "react";

const CraftingWebsites = () => {
  const timelineSteps = [
    {
      title: "Simplify Your Design",
      desc: "Streamline elements to create a clean and user-friendly interface.",
    },
    {
      title: "Catchy & Clear CTAs",
      desc: "Use action-driven buttons to guide users effectively.",
    },
    {
      title: "Use Quality Images",
      desc: "High-resolution visuals to create a lasting impact.",
    },
    {
      title: "Run A/B Tests",
      desc: "Optimize your site's performance through experimentation.",
    },
    {
      title: "Implement the 'Chat Now' Button",
      desc: "Enhance user support with instant communication.",
    },
    {
      title: "Have a Security Seal on Your Site",
      desc: "Boost trust and credibility with security assurances.",
    },
    {
      title: "Focus on Loading Speed",
      desc: "Ensure fast load times for better user engagement.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url('images/CraftingWebsites-bg.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }}
    >
      <div className="lg:max-w-[1745px] px-[20px] m-auto py-[30px]">
        <div className="text-center mb-[50px]">
          <h1 className="xl:text-[35px] font-inter font-semibold text-white">
            <span className="text-bgorg border-b border-gray-400 pb-[5px] mb-[15px] rounded-b-xl">
              BrightenSolutions
            </span>
            <br />
            <span>
              Crafting Websites That Drive Engagement and <br /> Deliver
              Results.
            </span>
          </h1>
        </div>

        <div className="relative w-[50%] m-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 h-full"></div>

          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="relative z-10 w-[30px] h-[30px] bg-bgorg rounded-full border-2 flex items-center justify-center text-white font-roboto font-bold border-white shadow-md">
                {index + 1}
              </div>

              <div
                className={`w-[45%] ${
                  index % 2 === 0
                    ? "text-right pr-[20px] rightcard-crafting"
                    : "text-left pl-[20px] leftcard-crafting"
                }`}
              >
                <h2 className="text-[20px] font-bold text-black">
                  {step.title}
                </h2>
                <p className="text-gray-500 text-[16px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftingWebsites;
