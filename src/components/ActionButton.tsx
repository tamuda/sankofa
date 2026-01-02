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
      className={`group flex min-w-[280px] items-center justify-between rounded-xl border-2 px-6 py-4 text-left transition-all duration-300 ${
        isActive
          ? "border-accent bg-accent shadow-lg shadow-accent/20"
          : "border-accent-soft bg-white hover:border-accent hover:bg-accent-soft/10 dark:bg-card-bg dark:border-border-color dark:hover:border-accent"
      }`}
    >
      <span
        className={`font-body text-lg font-medium pr-8 transition-colors ${
          isActive ? "text-white" : "text-accent"
        }`}
      >
        {text}
      </span>
      <div className="flex items-center gap-2">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={32}
          height={32}
          className={`transition-transform duration-500 group-hover:rotate-12 ${
            isActive ? "brightness-0 invert" : ""
          }`}
        />
        <svg
          className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
            isActive ? "text-white" : "text-gray-400"
          }`}
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
