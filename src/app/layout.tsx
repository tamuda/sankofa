import type { Metadata } from "next";
import { Capriola, Inter } from "next/font/google";
import "./globals.css";

const capriola = Capriola({
  variable: "--font-capriola",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sankofa - Mental Health Institution",
  description: "Sankofa - Fueling growth through mental well-being",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${capriola.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
