"use client";
import Community from "@/components/Community";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import QualityFeatures from "@/components/QualityFeatures";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <Features />
      <Services />
      <QualityFeatures />
      <CoreFeatures />
      <Work />
      <Pricing />
      <Team />
      <Testimonials />
      <Subscribe />
      <Community />
    </div>
  );
}
