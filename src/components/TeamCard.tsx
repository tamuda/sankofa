"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      className="group relative w-[280px] h-[450px] overflow-hidden rounded-2xl cursor-pointer"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Image - covers entire card */}
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* Simple white overlay - flows from bottom on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white"
        variants={{
          rest: { height: 0 },
          hover: { height: 112 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Text Content - positioned at bottom with padding */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3 className="font-title text-xl font-semibold tracking-tight mb-1 relative z-20 transition-colors duration-300 group-hover:text-accent-deep">
          {name}
        </h3>
        <p className="font-body text-sm text-white/90 relative z-20 transition-colors duration-300 group-hover:text-accent-deep">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

