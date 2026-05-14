import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluto | The AI That Actually Knows You",
  description:
    "Bluto remembers your story, tracks your goals, and helps you think clearly. Chat, call, work out, eat better, and stay organized with one AI companion that gets smarter every day.",
  openGraph: {
    title: "Bluto | The AI That Actually Knows You",
    description:
      "One companion for your whole life. Bluto remembers your story, tracks your workouts, plans your meals, and helps you think clearly. Try it free.",
    url: "https://bluto.co",
    siteName: "Bluto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluto | The AI That Actually Knows You",
    description:
      "One companion for your whole life. Bluto remembers your story, tracks your workouts, plans your meals, and helps you think clearly. Try it free.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
