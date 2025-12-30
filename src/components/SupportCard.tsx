import Image from "next/image";

interface SupportCardProps {
  title: string;
  description: string;
  ctaText: string;
  graphicSrc?: string;
  graphicAlt?: string;
  bgColor: string;
  textColor?: "white" | "black";
  onClick?: () => void;
}

export default function SupportCard({
  title,
  description,
  ctaText,
  graphicSrc,
  graphicAlt = "Support graphic",
  bgColor,
  textColor = "black",
  onClick,
}: SupportCardProps) {
  const isDark = textColor === "white";
  return (
    <div
      className="group relative flex h-[480px] w-full flex-col justify-between overflow-hidden rounded-3xl p-10"
      style={{ backgroundColor: bgColor }}
    >
      {/* Graphic Area - Top */}
      <div className="flex flex-1 items-center justify-center">
        {graphicSrc ? (
          <Image
            src={graphicSrc}
            alt={graphicAlt}
            width={180}
            height={180}
            className=""
          />
        ) : (
          <div className="flex h-40 w-40 items-center justify-center">
            <div className={`h-32 w-32 rounded-full backdrop-blur-sm ${isDark ? "bg-white/20" : "bg-white/30"}`} />
          </div>
        )}
      </div>

      {/* Text Content - Bottom */}
      <div className="flex flex-col gap-4">
        <h3 className={`font-title text-3xl font-semibold tracking-tight ${isDark ? "text-white" : "text-black"}`}>
          {title}
        </h3>
        <p className={`font-body text-lg ${isDark ? "text-white/80" : "text-black/70"}`}>{description}</p>
        <button
          onClick={onClick}
          className={`cursor-pointer w-fit rounded-full px-6 py-3 font-body text-sm font-medium transition-all ${
            isDark
              ? "bg-white text-black hover:bg-white/90"
              : "bg-black text-white hover:bg-black/90"
          }`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
