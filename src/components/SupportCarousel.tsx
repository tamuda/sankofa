"use client";

import { useState } from "react";
import SupportCard from "./SupportCard";

interface CardData {
  title: string;
  description: string;
  ctaText: string;
  bgColor: string;
  textColor?: "white" | "black";
  graphicSrc?: string;
  graphicAlt?: string;
}

interface SupportCarouselProps {
  cards: CardData[];
}

export default function SupportCarousel({ cards }: SupportCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc((100% - 65%) / 2 - ${currentIndex * 65}% - ${currentIndex * 2}rem))`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[65%] flex-shrink-0 pr-8"
            >
              <SupportCard
                title={card.title}
                description={card.description}
                ctaText={card.ctaText}
                bgColor={card.bgColor}
                textColor={card.textColor}
                graphicSrc={card.graphicSrc}
                graphicAlt={card.graphicAlt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm p-3 transition-all hover:bg-white"
        aria-label="Previous card"
      >
        <svg
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm p-3 transition-all hover:bg-white"
        aria-label="Next card"
      >
        <svg
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="mt-12 flex justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-black"
                : "w-2 bg-black/20 hover:bg-black/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
