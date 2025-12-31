interface BlogCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor?: "white" | "black";
  label?: string;
  labelColor?: string;
}

export default function BlogCard({
  title,
  description,
  bgColor,
  textColor = "black",
  label,
  labelColor,
}: BlogCardProps) {
  const isDark = textColor === "white";

  // Determine label background color based on label type
  const getLabelBgColor = () => {
    if (labelColor) return labelColor;
    if (label?.toLowerCase() === "trending") {
      return isDark ? "rgba(255, 235, 59, 0.3)" : "#FFEB3B";
    }
    if (label?.toLowerCase() === "new") {
      return isDark ? "rgba(33, 150, 243, 0.3)" : "#2196F3";
    }
    return isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
  };

  return (
    <div
      className="group relative flex h-[450px] w-full min-w-[350px] flex-col justify-between overflow-hidden rounded-3xl p-8"
      style={{ backgroundColor: bgColor }}
    >
      {/* Label */}
      {label && (
        <div
          className="absolute left-6 top-6 z-10 rounded-full px-4 py-1.5 text-xs font-medium"
          style={{
            backgroundColor: getLabelBgColor(),
            color: isDark ? "white" : "#2d2c2b",
          }}
        >
          {label}
        </div>
      )}

      {/* Illustration Placeholder - Top */}
      <div className="flex flex-1 items-center justify-center pt-12">
        <div className="flex h-40 w-40 items-center justify-center">
          <div
            className={`h-32 w-32 rounded-full backdrop-blur-sm ${
              isDark ? "bg-white/20" : "bg-white/30"
            }`}
          />
        </div>
      </div>

      {/* Text Content - Bottom */}
      <div className="flex flex-col gap-3">
        <h3
          className={`font-title text-2xl font-semibold tracking-tight ${
            isDark ? "text-white" : "text-[#2d2c2b]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-body text-base leading-relaxed ${
            isDark ? "text-white/80" : "text-[#2d2c2b]/70"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

