import Image from "next/image";

interface ActionButtonProps {
  text: string;
  iconSrc: string;
  iconAlt: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function ActionButton({
  text,
  iconSrc,
  iconAlt,
  onClick,
  isActive = false,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex min-w-[280px] items-center justify-between rounded-xl border-2 px-6 py-4 text-left transition-all ${
        isActive
          ? "border-[#8881c2] bg-[#8881c2]/10"
          : "border-[#8881c2]/20 bg-white hover:border-[#8881c2]/40"
      }`}
    >
      <span className="font-body text-lg font-medium text-[#8881c2] pr-8">
        {text}
      </span>
      <div className="flex items-center gap-2">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={32}
          height={32}
          className="transition-transform group-hover:translate-x-1 group-hover:rotate-15 duration-600"
        />
        <svg
          className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
}
