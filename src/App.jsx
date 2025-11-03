import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-10">
        <div id="hero">
          <HeroSection />
        </div>

        <div id="features" className="scroll-mt-24">
          <FeatureSection />
        </div>

        <div id="workflow" className="scroll-mt-24">
          <WorkFlow />
        </div>

        <div id="pricing" className="scroll-mt-24">
          <PricingSection />
        </div>

        <div id="testimonials" className="scroll-mt-24">
          <TestimonialSection />
        </div>

        <div id="footer">
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default App;
