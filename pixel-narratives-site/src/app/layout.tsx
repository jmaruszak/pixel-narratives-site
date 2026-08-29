import { Inter, Bebas_Neue } from "next/font/google";
import VibePixel from "../components/VibePixel";
import WebMcpTools from "../components/WebMcpTools";
import { rootMetadata } from "../lib/siteMetadata";
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

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`site-texture ${inter.variable} ${bebas.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-white/10 focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>
        <VibePixel />
        <WebMcpTools />
        {children}
      </body>
    </html>
  );
}
