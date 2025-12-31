import Image from "next/image";
import { ComponentProps } from "react";

interface LogoProps {
  /**
   * Width of the logo image
   * @default 56
   */
  width?: number;
  /**
   * Height of the logo image
   * @default 56
   */
  height?: number;
  /**
   * Whether to show the "Sankofa" text next to the logo
   * @default false
   */
  showText?: boolean;
  /**
   * Custom className for the container
   */
  className?: string;
  /**
   * Custom className for the text
   */
  textClassName?: string;
  /**
   * Props to pass to the Image component
   */
  imageProps?: Omit<
    ComponentProps<typeof Image>,
    "src" | "width" | "height" | "alt"
  >;
}

export default function Logo({
  width = 56,
  height = 56,
  showText = false,
  className = "",
  textClassName = "",
  imageProps = {},
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.avif"
        alt="Sankofa Logo"
        width={width}
        height={height}
        priority
        {...imageProps}
      />
      {showText && (
        <span
          className={`font-body text-xl font-bold tracking-tight text-[#8881c2] ${textClassName}`}
        >
          Sankofa
        </span>
      )}
    </div>
  );
}
