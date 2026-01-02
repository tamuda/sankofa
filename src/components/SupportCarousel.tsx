"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useAnimation, PanInfo } from "framer-motion";
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
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  }, [cards.length]);

  // Handle auto-scroll timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext, isPaused]);

  // Drag handler
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative px-[17.5%]"> {/* Offset to keep active card centered */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{
            x: `calc(-${currentIndex * 100}% - ${currentIndex * 2}rem)`,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
            mass: 1
          }}
          className="flex cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-full flex-shrink-0 pr-8"
              animate={{
                scale: index === currentIndex ? 1 : 0.98,
                opacity: index === currentIndex ? 1 : 0.6,
              }}
              transition={{ duration: 0.25 }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm p-4 shadow-lg transition-all hover:bg-white hover:scale-110 active:scale-95 md:left-12 dark:bg-card-bg/90 dark:text-white"
        aria-label="Previous card"
      >
        <svg className="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm p-4 shadow-lg transition-all hover:bg-white hover:scale-110 active:scale-95 md:right-12 dark:bg-card-bg/90 dark:text-white"
        aria-label="Next card"
      >
        <svg className="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="mt-12 flex justify-center items-center gap-0.5">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative p-1 outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              layout
              initial={false}
              animate={{
                width: index === currentIndex ? 48 : 8,
                opacity: index === currentIndex ? 1 : 0.3,
                backgroundColor: index === currentIndex ? "var(--text-primary)" : "var(--text-secondary)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="h-2 rounded-full bg-current"
              style={{ 
                backgroundColor: index === currentIndex ? "var(--text-primary)" : "var(--text-secondary)" 
              }}
            />
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
