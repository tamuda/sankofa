import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatBringsYouSection from "@/components/WhatBringsYouSection";
import VideoSection from "@/components/VideoSection";
import WaysToSupportSection from "@/components/WaysToSupportSection";
import SupportTopicsSection from "@/components/SupportTopicsSection";
import BlogSection from "@/components/BlogSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SupportProvider } from "@/contexts/SupportContext";

export default function Home() {
  return (
    <SupportProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <WhatBringsYouSection />
        <VideoSection />
        <WaysToSupportSection />
        <SupportTopicsSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <div className="mx-auto max-w-7xl px-6 pb-16 md:px-12">
          <CTASection />
        </div>
        <Footer />
      </div>
    </SupportProvider>
  );
}
