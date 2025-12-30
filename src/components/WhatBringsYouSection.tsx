"use client";

import ActionButton from "./ActionButton";
import { useSupport } from "@/contexts/SupportContext";

export default function WhatBringsYouSection() {
  const { setSelectedPath } = useSupport();

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6 pb-32 md:px-12">
      <div className="flex flex-col items-center">
        <h2 className="font-title text-4xl font-semibold tracking-tight text-[#8881c2] md:text-5xl">
          What brings you here today?
        </h2>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <ActionButton
            text="I'm looking for support"
            iconSrc="/icons/moon.svg"
            iconAlt="Moon icon"
            onClick={() => setSelectedPath("support")}
          />
          <ActionButton
            text="I'm interested in partnering"
            iconSrc="/icons/partner.svg"
            iconAlt="Partner icon"
            onClick={() => setSelectedPath("partner")}
          />
        </div>
      </div>
    </section>
  );
}
