"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
    title: "AI Avatars",
    description:
      "Five personality modes for every mood. Chill casual talk, office venting, gym coaching, astrology, and healthy eating — each one tuned to how you actually want to be spoken to.",
    detail: "Switch between AI avatars that feel like different friends. Need workout motivation? Gym buddy mode. Want to decompress after work? Office vent mode. Curious about the stars? Astro universe. Each avatar remembers your history and adapts its tone to match the moment.",
    tags: ["Casual talk", "Office vent", "Gym coach", "Astro universe", "Nutrition guide"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Personal tools",
    description:
      "Bookmarks, workout logs, task lists, exercise library, subscription manager, notes, and a shared grocery list — all with an AI layer that actually understands your data.",
    detail: "Stop switching between 10 apps. Bluto keeps everything in one place — bookmark important links, log your workouts, manage tasks, track subscriptions, take notes, and share a grocery list with your household. Every tool comes with built-in AI analysis that spots patterns and gives you insights you'd never catch on your own.",
    tags: ["Bookmarks", "Workout log", "Task list", "Exercise library", "Subscriptions", "Notes", "Grocery list"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: "Nudges for productivity",
    description:
      "Morning briefs, streak alerts, task reminders, and smart nudges via email and push notifications. Bluto keeps you moving without being annoying.",
    detail: "Wake up to a personalized morning email with your tasks, workout streak, and the day ahead. Get push notifications for reminders you set. Receive streak alerts when you're on a roll — or gentle nudges when things slip. All configurable, never spammy.",
    tags: ["Morning briefs", "Streak alerts", "Task reminders", "Push notifications", "Email digests"],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <section id="features" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight max-w-2xl">
            One companion.{" "}
            <span className="serif-italic">Every part of your day.</span>
          </h2>
        </motion.div>

        {/* ─── Mobile: Accordion ─── */}
        <div className="md:hidden mt-14">
          {features.map((feature, i) => (
            <div key={feature.title} className="border-t border-card-border">
              <button
                onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
                className="w-full text-left py-5 px-1 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                      mobileOpen === i ? "bg-foreground scale-100" : "bg-transparent scale-0"
                    }`}
                  />
                  <h3
                    className={`text-base font-semibold leading-snug transition-colors ${
                      mobileOpen === i ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-muted transition-transform duration-300 flex-shrink-0 ${
                    mobileOpen === i ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileOpen === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 pr-1 pb-6 pt-1">
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {feature.detail}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-cream text-muted border border-card-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-card-border" />
        </div>

        {/* ─── Desktop: Tab columns (3 cols) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:grid grid-cols-3 gap-0 mt-14"
        >
          {features.map((feature, i) => (
            <button
              key={feature.title}
              onClick={() => setActive(i)}
              className={`text-left p-6 border-t-2 transition-all duration-300 cursor-pointer ${
                active === i
                  ? "border-foreground"
                  : "border-card-border hover:border-muted"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    active === i ? "bg-foreground" : "bg-transparent"
                  }`}
                />
                <h3
                  className={`text-sm font-semibold leading-snug transition-colors ${
                    active === i ? "text-foreground" : "text-muted"
                  }`}
                >
                  {feature.title}
                </h3>
              </div>
              <p
                className={`text-xs leading-relaxed transition-colors ${
                  active === i ? "text-muted" : "text-muted/60"
                }`}
              >
                {feature.description}
              </p>
            </button>
          ))}
        </motion.div>

        {/* Desktop detail area */}
        <div className="hidden md:block mt-0 rounded-2xl overflow-hidden border border-card-border bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Detail text */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-foreground">{features[active].icon}</span>
                    <p className="text-xs font-medium tracking-widest uppercase text-muted">
                      {features[active].title}
                    </p>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-4 leading-snug">
                    {features[active].title}
                  </h3>
                  <p className="text-muted text-sm lg:text-base leading-relaxed mb-6">
                    {features[active].detail}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {features[active].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-background text-muted border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image placeholder with browser chrome */}
            <div className="relative flex items-center justify-center p-6 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="w-full rounded-xl bg-background border border-card-border overflow-hidden shadow-sm"
                >
                  {/* Browser dots */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-card-border">
                    <div className="w-2.5 h-2.5 rounded-full bg-card-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-card-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-card-border" />
                  </div>
                  <div className="flex items-center justify-center py-20 px-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-cream flex items-center justify-center mb-4">
                        <span className="text-foreground scale-150">
                          {features[active].icon}
                        </span>
                      </div>
                      <p className="text-xs text-muted">Feature image coming soon</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
