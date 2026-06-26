import React from "react";
import Hero from "../components/Home/Hero";
import HowItWorksSection from "../components/Home/HowItWorksSection";
import LearningFromLifeSection from "../components/Home/LearningFromLifeSection";
import Featured from "../components/Home/Featured";
import TopContributors from "../components/Home/TopContributors";
import MostSaved from "../components/Home/MostSaved";
import StatsSection from "../components/Home/StatsSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import NewsletterSection from "../components/Home/NewsletterSection";
import FAQSection from "../components/Home/FAQSection";
import CTASection from "../components/Home/CTASection";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <HowItWorksSection />
      <StatsSection />
      <div className="relative">
        <div className="relative z-10">
          <Featured />
          <LearningFromLifeSection />
          <CategoriesSection />
        </div>
      </div>
      <TopContributors />
      <MostSaved />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </div>
  );
};

export default Home;
