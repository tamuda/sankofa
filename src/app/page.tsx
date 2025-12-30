import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatBringsYouSection from "@/components/WhatBringsYouSection";
import WaysToSupportSection from "@/components/WaysToSupportSection";
import SupportTopicsSection from "@/components/SupportTopicsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { SupportProvider } from "@/contexts/SupportContext";

export default function Home() {
  return (
    <SupportProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <WhatBringsYouSection />
        <WaysToSupportSection />
        <SupportTopicsSection />
        <FAQSection />
        <div className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
          <CTASection />
        </div>
      </div>
    </SupportProvider>
  );
}
