"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

export default function TeamModal({
  isOpen,
  onClose,
  name,
  title,
  bio,
  imageSrc,
}: TeamModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/90 backdrop-blur-sm p-2 transition-all hover:bg-white shadow-lg"
                aria-label="Close modal"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="flex flex-col md:flex-row overflow-y-auto">
                {/* Image Section */}
                <div className="relative w-full md:w-1/3 h-64 md:h-auto flex-shrink-0">
                  <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 p-8 md:p-10">
                  <h2 className="font-title text-3xl font-semibold tracking-tight text-[#2d2c2b] mb-2">
                    {name}
                  </h2>
                  {title && (
                    <p className="font-body text-lg text-[#8881c2] mb-6">
                      {title}
                    </p>
                  )}
                  <div className="prose max-w-none">
                    <p className="font-body text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

