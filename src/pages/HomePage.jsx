import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import DiscoverSection from "../components/Discover";
import ServicesSection from "../components/Services";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="px-8">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};
