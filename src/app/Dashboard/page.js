import React, { Suspense, lazy } from "react";

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
  return (
    <div>
      <Suspense fallback={<div>Loading Slider...</div>}>
        <SliderSection />
      </Suspense>

      <Suspense fallback={<div>Loading Experience...</div>}>
        <Experience />
      </Suspense>

      <Suspense fallback={<div>Loading Review...</div>}>
        <Review />
      </Suspense>

      <Suspense fallback={<div>Loading Our Services...</div>}>
        <OurServices />
      </Suspense>

      <Suspense fallback={<div>Loading Strategies...</div>}>
        <InnovativeStrategies />
      </Suspense>

      <Suspense fallback={<div>Loading Crafting Websites...</div>}>
        <CraftingWebsites />
      </Suspense>

      <Suspense fallback={<div>Loading Our Work...</div>}>
        <OurWorkHome />
      </Suspense>

      <Suspense fallback={<div>Loading Clients...</div>}>
        <OurClint />
      </Suspense>

      <Suspense fallback={<div>Loading Blogs...</div>}>
        <OurLatestBlog />
      </Suspense>

      <Suspense fallback={<div>Loading Know About...</div>}>
        <KnowAbout />
      </Suspense>
    </div>
  );
};

export default Dashboard;
