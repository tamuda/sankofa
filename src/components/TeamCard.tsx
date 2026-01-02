"use client";

import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  imageSrc: string;
  onClick?: () => void;
  isOwner?: boolean;
}

export default function TeamCard({
  name,
  title,
  imageSrc,
  onClick,
  isOwner = false,
}: TeamCardProps) {
  return (
    <div
      className="group relative w-[280px] h-[450px] overflow-hidden rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      {/* Image - covers entire card */}
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
      />

      {/* Gradient overlay - fades from transparent to dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Owner Badge */}
      {isOwner && (
        <div className="absolute top-4 right-4 z-30 bg-accent rounded-full px-4 py-1.5 shadow-lg">
          <span className="font-body text-xs font-semibold text-white uppercase tracking-wide">
            Owner
          </span>
        </div>
      )}

      {/* Organic fill overlay - flows from bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0 bg-stone-50 transition-all duration-700 ease-out overflow-hidden group-hover:h-28">
        {/* Organic wave shape using SVG with pronounced curves */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 280 112"
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          <path
            d="M0,112 
               C30,75 60,55 90,60
               C120,65 150,50 180,55
               C210,60 240,45 280,50
               L280,112 L0,112 Z"
            fill="var(--surface)"
            className="opacity-95"
          />
        </svg>
      </div>

      {/* Text Content - positioned at bottom with padding */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3 className="font-title text-xl font-semibold tracking-tight mb-1 relative z-20 transition-colors duration-500 group-hover:text-accent-deep">
          {name}
        </h3>
        <p className="font-body text-sm text-white/90 relative z-20 transition-colors duration-500 group-hover:text-accent-deep">
          {title}
        </p>
      </div>
    </div>
  );
}

