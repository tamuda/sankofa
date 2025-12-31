"use client";

import Image from "next/image";
import { useSupport } from "@/contexts/SupportContext";

const TOPICS = [
  "Feeling anxious or overwhelmed",
  "Stress and burnout",
  "Relationship challenges",
  "Depression and low mood",
  "Trauma and past experiences",
  "Life transitions",
  "Feeling stuck or unsure",
];

export default function SupportTopicsSection() {
  const { selectedPath } = useSupport();

  // Only show for support path
  if (selectedPath !== "support") {
    return null;
  }

  return (
    <section className="mt-16 w-full pb-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Topics Section */}
        <div className="mb-8 text-center">
          <h2 className="font-title text-4xl font-semibold tracking-tight text-[#2d2c2b] md:text-5xl">
            We help you through issues like:
          </h2>

          <div className="mt-14 md:-mb-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {TOPICS.map((topic, index) => (
              <span
                key={index}
                className="rounded-full bg-[#8881c2]/10 px-6 py-3 font-body text-base font-medium text-[#8881c2] md:text-lg"
              >
                {topic}
              </span>
            ))}
            <span className="rounded-full bg-[#8881c2]/10 px-6 py-3 font-body text-base font-medium text-[#8881c2] md:text-lg">
              And more
            </span>
          </div>
        </div>

        {/* Feature Cards - Horizontal Layout */}
        <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:items-end">
          {/* Card 1 - Format (Left, Tallest) */}
          <div className="relative w-[280px] rounded-3xl overflow-hidden h-[360px] flex flex-col text-left">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/inperson2.png"
                alt="In-person sessions"
                fill
                className="object-cover scale-120"
              />
            </div>
            {/* Content */}
            <div className="relative z-10 p-10 text-white">
              <h3 className="font-title text-2xl font-semibold tracking-tight">
                In-person and virtual sessions
              </h3>
            </div>
          </div>

          {/* Card 2 - Insurance/Payment (Second from left, Medium-tall) */}
          <div className="w-[280px] rounded-3xl bg-[#483e62] p-10 text-white h-[320px] flex flex-col justify-between text-left">
            <h3 className="font-title text-2xl font-semibold tracking-tight">
              Insurance and payment options
            </h3>
            <p className="mt-4 font-body text-base text-white/90">
              We accept various insurance plans and offer flexible payment
              options.
            </p>
          </div>

          {/* Card 3 - Timing (Center, Shortest) */}
          <div className="w-[280px] rounded-3xl bg-stone-100 p-10 h-[280px] flex flex-col justify-between text-left">
            <div>
              <svg
                className="h-8 w-8 mb-4 text-[#483e62]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-title text-2xl font-semibold tracking-tight text-[#483e62]">
                The session can be held at a convenient time for you.
              </h3>
            </div>
          </div>

          {/* Card 4 - Therapist Matching (Second from right, Medium-tall) */}
          <div className="relative w-[280px] rounded-3xl overflow-hidden h-[320px] flex flex-col text-left">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image src="/hug.png" alt="Hug" fill className="object-cover" />
            </div>
            {/* Content */}
            <div className="relative z-10 p-10 text-white">
              <h3 className="font-title text-2xl font-semibold tracking-tight">
                We'll help you find the right therapist
              </h3>
            </div>
          </div>

          {/* Card 5 - Additional Feature (Right, Tallest) */}
          <div className="relative w-[280px] rounded-3xl overflow-hidden h-[360px] flex flex-col justify-between text-left">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/guy-therapy.png"
                alt="Therapy session"
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="relative z-10 p-10 text-white flex flex-col justify-between h-full">
              <h3 className="font-title text-2xl font-semibold tracking-tight">
                Confidential and secure
              </h3>
              <p className="mt-4 font-body text-base text-white/90">
                Your privacy and confidentiality are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
