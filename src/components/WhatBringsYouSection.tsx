"use client";

import ActionButton from "./ActionButton";
import { useSupport } from "@/contexts/SupportContext";

export default function WhatBringsYouSection() {
  const { selectedPath, setSelectedPath } = useSupport();

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="flex flex-col items-center">
        <h2 className="font-title text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
          What brings you here today?
        </h2>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <ActionButton
            text="I'm looking for support"
            iconSrc="/icons/moon.svg"
            iconAlt="Moon icon"
            isActive={selectedPath === "support"}
            onClick={() => setSelectedPath("support")}
          />
          <ActionButton
            text="I'm interested in partnering"
            iconSrc="/icons/partner.svg"
            iconAlt="Partner icon"
            isActive={selectedPath === "partner"}
            onClick={() => setSelectedPath("partner")}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
