"use client";

import Image from "next/image";
import { useSupport } from "@/contexts/SupportContext";

const TESTIMONIALS = [
  {
    quote:
      "I appreciate the consistent reminders to be kind and patient with myself as I learn and practice daily habits that are helping me find a calmer daily space.",
    attribution: "Member on forming more helpful habits",
  },
  {
    quote:
      "Sankofa helped me begin the process of stepping back from toxic thinking and being a part of something bigger than my own personal grievances.",
    attribution: "Member on learning to think in more helpful ways",
  },
  {
    quote:
      "The strategies in the sessions allow me to work on a part of myself that I am struggling with. Sankofa changed the relationship I have with myself.",
    attribution: "Member on working through their feelings",
  },
];

export default function TestimonialsSection() {
  const { selectedPath } = useSupport();

  // Only show for support path
  if (selectedPath !== "support") {
    return null;
  }

  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-6 pb-16 md:px-12">
      <div className="text-center">
        {/* Header */}
        <div className="mb-16 relative">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Left image */}
            <div className="flex-shrink-0 hidden md:block">
              <Image
                src="/sankofa-06.png"
                alt="Decorative element"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <h2 className="font-title md:max-w-3xl text-4xl font-semibold tracking-tight leading-tight text-[#2d2c2b] md:text-5xl lg:text-6xl relative">
              {/* Star 1 */}
              <div className="absolute -top-6 left-1/4">
                <svg
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4L13.5 9L19 10.5L13.5 12L12 17L10.5 12L5 10.5L10.5 9L12 4Z" />
                </svg>
              </div>
              {/* Star 2 */}
              <div className="absolute -top-6 right-1/4">
                <svg
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4L13.5 9L19 10.5L13.5 12L12 17L10.5 12L5 10.5L10.5 9L12 4Z" />
                </svg>
              </div>
              Members are enjoying happier and healthier lives
            </h2>

            {/* Right image */}
            <div className="flex-shrink-0 hidden md:block">
              <Image
                src="/sankofa-07.png"
                alt="Decorative element"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-stone-200 p-8 text-left">
              <p className="font-body text-lg font-medium text-gray-700 mb-32">
                "{testimonial.quote}"
              </p>
              <p className="font-body text-sm text-gray-500">
                {testimonial.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
