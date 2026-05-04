import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bluto — Your AI Companion",
  description:
    "Bluto is your personal AI companion that listens, remembers, and helps you navigate life — from daily motivation to nutrition, fitness, and beyond.",
  openGraph: {
    title: "Bluto — Your AI Companion",
    description:
      "An AI that actually knows you. Chat, get advice, track goals — all with a companion that remembers.",
    url: "https://bluto.co",
    siteName: "Bluto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluto — Your AI Companion",
    description:
      "An AI that actually knows you. Chat, get advice, track goals — all with a companion that remembers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
