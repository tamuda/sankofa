"use client";

import { useState, useRef } from "react";
import BlogCard from "./BlogCard";

interface BlogArticle {
  title: string;
  description: string;
  bgColor: string;
  textColor?: "white" | "black";
  label?: string;
  labelColor?: string;
}

const BLOG_ARTICLES: BlogArticle[] = [
  {
    title: "Understanding Anxiety: A Comprehensive Guide",
    description: "Learn about anxiety disorders, their symptoms, and effective coping strategies",
    bgColor: "#FF6B6B",
    textColor: "white",
    label: "Trending",
  },
  {
    title: "Mindfulness Techniques for Daily Life",
    description: "Simple practices to bring mindfulness into your everyday routine",
    bgColor: "#4ECDC4",
    textColor: "white",
    label: "New",
  },
  {
    title: "Building Resilience in Challenging Times",
    description: "Discover how to develop mental strength and bounce back from adversity",
    bgColor: "#FFE66D",
    textColor: "black",
  },
  {
    title: "The Science of Sleep and Mental Health",
    description: "Explore the connection between quality sleep and emotional well-being",
    bgColor: "#A8E6CF",
    textColor: "black",
  },
  {
    title: "Navigating Relationship Challenges",
    description: "Practical advice for improving communication and connection",
    bgColor: "#FF8B94",
    textColor: "white",
    label: "Trending",
  },
  {
    title: "Self-Care Strategies That Actually Work",
    description: "Evidence-based approaches to taking care of your mental health",
    bgColor: "#95E1D3",
    textColor: "black",
  },
];

const CATEGORIES = [
  {
    id: "featured",
    label: "Featured",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    id: "popular",
    label: "Popular",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: "wellness",
    label: "Sleep",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: "stress",
    label: "Stress",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
      </svg>
    ),
  },
  {
    id: "mindfulness",
    label: "Meditation and Mindfulness",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("featured");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-16 w-full pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-title text-4xl font-semibold tracking-tight text-[#2d2c2b] md:text-5xl">
            Explore our library
          </h2>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium transition-all border ${
                selectedCategory === category.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#2d2c2b] border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scrollable Cards - Full Width */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pl-6 md:pl-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {BLOG_ARTICLES.map((article, index) => (
            <div key={index} className="flex-shrink-0">
              <BlogCard
                title={article.title}
                description={article.description}
                bgColor={article.bgColor}
                textColor={article.textColor}
                label={article.label}
                labelColor={article.labelColor}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 mt-8 flex items-center justify-end gap-4">
          <a
            href="#"
            className="font-body text-base font-medium text-[#2d2c2b] underline hover:text-gray-600"
          >
            View all
          </a>
          <button
            onClick={scrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-[#2d2c2b] transition-all hover:bg-gray-300"
            aria-label="Previous articles"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-[#2d2c2b] transition-all hover:bg-gray-300"
            aria-label="Next articles"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

