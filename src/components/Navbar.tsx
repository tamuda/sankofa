import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
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
