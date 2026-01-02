"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
  bgColor: string;
  bio?: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate members for seamless infinite loop
  const duplicatedMembers = [...members, ...members, ...members];

  // Card width + gap (280px card + 24px gap = 304px per card)
  const cardWidthWithGap = 304;
  const totalWidth = cardWidthWithGap * members.length;

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Infinite scrolling carousel with Framer Motion */}
      <motion.div 
        className="flex"
        animate={{
          x: [0, -totalWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: members.length * 5,
            ease: "linear",
          },
        }}
        style={{
          width: `${cardWidthWithGap * duplicatedMembers.length}px`,
        }}
      >
        {duplicatedMembers.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="flex-shrink-0 pr-6 flex justify-center"
            style={{ width: `${cardWidthWithGap}px` }}
          >
            <TeamCard
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              onClick={() => setSelectedMember(member)}
              isOwner={member.title.toLowerCase().includes("owner")}
            />
          </div>
        ))}
      </motion.div>

      {/* Team Modal */}
      {selectedMember && (
        <TeamModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          name={selectedMember.name}
          title={selectedMember.title}
          bio={selectedMember.bio || `${selectedMember.name} is a valued member of the Sankofa Family Counseling Services team.`}
          imageSrc={selectedMember.imageSrc}
        />
      )}
    </div>
  );
}
