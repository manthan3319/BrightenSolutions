import React from "react";
import SliderSection from "../SliderSection/page";
import Experience from "../Experience/page";
import OurServices from "../OurServices/page";
import InnovativeStrategies from "../InnovativeStrategies/page";

const Dashboard = () => {
  return (
    <div>
      <div>
        <SliderSection />
      </div>
      <div>
        <Experience/>
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <InnovativeStrategies/>
      </div>
    </div>
  );
};

export default Dashboard;
