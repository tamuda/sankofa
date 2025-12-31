"use client";

import { useSupport } from "@/contexts/SupportContext";
import SupportCarousel from "./SupportCarousel";

const SUPPORT_CARDS = [
  {
    title: "Talk things through",
    description: "One-on-one therapy for what's on your mind",
    ctaText: "Learn more",
    bgColor: "#3B197F", // Solid dark purple
    textColor: "white",
  },
  {
    title: "Strengthen relationships",
    description: "Support for couples and families",
    ctaText: "Explore options",
    bgColor: "#FFB3D9", // Bright pink
    textColor: "black",
  },
  {
    title: "Work through anxiety or stress",
    description: "Support for feeling overwhelmed, anxious, or stuck",
    ctaText: "See how we help",
    bgColor: "#1E3A5F", // Solid dark blue
    textColor: "white",
  },
  {
    title: "Find a place to start",
    description: "Not sure what you need yet? We can figure it out together.",
    ctaText: "Start here",
    bgColor: "#FFD4A3", // Bright peach
    textColor: "black",
  },
  {
    title: "Get support for your family",
    description: "Care that supports the whole system, not just one person",
    ctaText: "Family support",
    bgColor: "#1A4D6B", // Solid dark teal/blue
    textColor: "white",
  },
  {
    title: "Start therapy",
    description: "A simple first step toward ongoing support",
    ctaText: "Begin intake",
    bgColor: "#87CEEB", // Bright sky blue
    textColor: "black",
  },
];

const PARTNER_CARDS = [
  {
    title: "Bring mental health support to your organization",
    description: "Workshops and trainings tailored to your team or community",
    ctaText: "Learn more",
    bgColor: "#3B197F", // Solid dark purple
    textColor: "white",
  },
  {
    title: "Partner with us",
    description: "Collaborate on programs that support mental well-being",
    ctaText: "Start a conversation",
    bgColor: "#C8A8FF", // Bright purple
    textColor: "black",
  },
  {
    title: "Support community care",
    description: "Help expand access to mental health services",
    ctaText: "Ways to support",
    bgColor: "#0F5132", // Solid dark green
    textColor: "white",
  },
  {
    title: "Fund or sponsor programs",
    description: "Support initiatives that reach underserved communities",
    ctaText: "Explore impact",
    bgColor: "#FFD4A3", // Bright peach
    textColor: "black",
  },
  {
    title: "Refer clients or communities",
    description: "Connect people to care they can trust",
    ctaText: "Referral info",
    bgColor: "#6B2C91", // Solid dark purple-violet
    textColor: "white",
  },
  {
    title: "Learn about our mission",
    description: "Why Sankofa exists and how we work",
    ctaText: "About us",
    bgColor: "#A8E6CF", // Bright mint green
    textColor: "black",
  },
];

export default function WaysToSupportSection() {
  const { selectedPath } = useSupport();

  if (!selectedPath) {
    return null;
  }

  const cards = selectedPath === "support" ? SUPPORT_CARDS : PARTNER_CARDS;

  return (
    <section className="mt-16 w-full pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-title text-4xl font-semibold tracking-tight text-[#2d2c2b] md:text-5xl">
            Ways we can support you
          </h2>
          <p className="mt-6 font-body text-lg text-gray-600">
            Start with what feels most helpful right now.
          </p>
        </div>
      </div>
      <SupportCarousel cards={cards} />
    </section>
  );
}

