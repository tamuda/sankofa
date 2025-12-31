"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#8881c2]/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between py-6 text-left transition-colors hover:text-[#8881c2]"
      >
        <span className="font-title text-lg font-semibold tracking-tight text-[#2d2c2b] md:text-xl">
          {question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-[#8881c2] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="font-body text-base text-gray-600 md:text-lg">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

