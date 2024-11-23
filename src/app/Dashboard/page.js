import React from "react";
import SliderSection from "../SliderSection/page";
import Experience from "../Experience/page";
import OurServices from "../OurServices/page";
import InnovativeStrategies from "../InnovativeStrategies/page";
import CraftingWebsites from "../CraftingWebsites/page";
import OurWorkHome from "../OurWorkHome/page";
import OurClint from "../OurClint/page";
import Review from "../Review/page";

const Dashboard = () => {
  return (
    <div>
      <div>
        <SliderSection />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Review/>
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <InnovativeStrategies />
      </div>
      <div>
        <CraftingWebsites />
      </div>
      <div>
        <OurWorkHome />
      </div>
      <div>
        <OurClint />
      </div>
    </div>
  );
};

export default Dashboard;
