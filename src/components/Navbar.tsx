import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 md:px-12 md:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo/Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8881c2]">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="font-title text-xl font-semibold tracking-tight text-[#8881c2]">
            Sankofa
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/about"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] transition-colors hover:opacity-80 md:text-base"
          >
            About us
          </Link>
          <Link
            href="/partner"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] transition-colors hover:opacity-80 md:text-base"
          >
            Partner
          </Link>
          <Link
            href="/support"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] transition-colors hover:opacity-80 md:text-base"
          >
            Get Support
          </Link>
          <Link
            href="/donate"
            className="font-title text-sm font-medium tracking-tight text-[#8881c2] transition-colors hover:opacity-80 md:text-base"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
