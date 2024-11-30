"use client"
import React, { Suspense, lazy, useState, useEffect } from "react";
import FullScreenLoader from "../FullScreenLoader/page";

const SliderSection = lazy(() => import("../SliderSection/page"));
const Experience = lazy(() => import("../Experience/page"));
const OurServices = lazy(() => import("../OurServices/page"));
const InnovativeStrategies = lazy(() => import("../InnovativeStrategies/page"));
const CraftingWebsites = lazy(() => import("../CraftingWebsites/page"));
const OurWorkHome = lazy(() => import("../OurWorkHome/page"));
const OurClint = lazy(() => import("../OurClint/page"));
const Review = lazy(() => import("../Review/page"));
const OurLatestBlog = lazy(() => import("../OurLatestBlog/page"));
const KnowAbout = lazy(() => import("../KnowAbout/page"));

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <div>
        <SliderSection />
        <Experience />
        <Review />
        <OurServices />
        <InnovativeStrategies />
        <CraftingWebsites />
        <OurWorkHome />
        <OurClint />
        <OurLatestBlog />
        <KnowAbout />
      </div>
    </Suspense>
  );
};

export default Dashboard;
