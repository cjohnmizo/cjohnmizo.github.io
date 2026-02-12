import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "C. John Remthang | Full-Stack Developer",
    template: "%s | C. John Remthang",
  },
  description: "Portfolio of C. John Remthang, a Full-Stack Developer and IT Educator based in Mizoram. Specializing in Flutter, React, and Modern Web Technologies.",
  keywords: ["Mobile App Developer", "Flutter Developer", "Web Developer", "Mizoram", "IT Educator", "C. John Remthang"],
  authors: [{ name: "C. John Remthang", url: "https://cjohnmizo.vercel.app" }],
  creator: "C. John Remthang",
  metadataBase: new URL("https://cjohnmizo.vercel.app"),
  openGraph: {
    title: "C. John Remthang | Full-Stack Developer",
    description: "Portfolio of C. John Remthang, a Full-Stack Developer and IT Educator based in Mizoram.",
    url: "https://cjohnmizo.vercel.app",
    siteName: "C. John Remthang Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "C. John Remthang Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C. John Remthang | Full-Stack Developer",
    description: "Portfolio of C. John Remthang, a Full-Stack Developer and IT Educator based in Mizoram.",
    creator: "@cjohnmizo",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
