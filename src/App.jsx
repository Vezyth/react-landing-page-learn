import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import PricingSection from "./components/PricingSection";


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-10">
        <HeroSection />
        <FeatureSection />
        <WorkFlow/>
        <PricingSection/>
      </div>
    </>
  );
}

export default App;
