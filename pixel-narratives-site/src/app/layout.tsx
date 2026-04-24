import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelnarratives.studio"),
  title: {
    default: "Pixel Narratives | AI Ads + Business AI Systems",
    template: "%s",
  },
  description:
    "Pixel Narratives builds AI-powered commercial ads and practical AI systems for brands that need attention, workflows, and measurable value.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`site-texture ${inter.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}