"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useSupport } from "@/contexts/SupportContext";

export default function VideoSection() {
  const { selectedPath } = useSupport();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only show when a path is selected
  if (!selectedPath) {
    return null;
  }

  // Different videos for different paths
  const videoSrc =
    selectedPath === "partner"
      ? "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="mx-auto mt-32 w-full max-w-7xl px-6 pb-32 md:px-12">
      {/* Video Container */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-3xl bg-gray-900 group">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={isPlaying}
          onClick={handleVideoClick}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Play Button Overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/10 via-black/20 to-black/30 cursor-pointer transition-all group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/40 z-10"
            onClick={handlePlayClick}
          >
            {/* Large Play Button */}
            <button
              className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 hover:bg-white active:scale-95"
              aria-label="Play video"
            >
              {/* Play Icon from Lucide */}
              <Play
                className="w-10 h-10 md:w-12 md:h-12 text-gray-900 ml-1"
                fill="currentColor"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
