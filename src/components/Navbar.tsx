"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 py-4 md:px-12 md:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo/Wordmark */}
        <Link href="/">
          <Logo width={48} height={48} showText textClassName="text-2xl" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/about"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] dark:text-white transition-colors hover:opacity-80 md:text-base"
          >
            About us
          </Link>
          <Link
            href="/partner"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] dark:text-white transition-colors hover:opacity-80 md:text-base"
          >
            Partner
          </Link>
          <Link
            href="/support"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] dark:text-white transition-colors hover:opacity-80 md:text-base"
          >
            Get Support
          </Link>
          <Link
            href="/donate"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] dark:text-white transition-colors hover:opacity-80 md:text-base"
          >
            Donate
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-text-secondary" />
            ) : (
              <Moon className="h-5 w-5 text-text-secondary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
