"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
    title: "AI Crew",
    description:
      "Not one AI — six. A friend for late-night thoughts. A workout accountability buddy. A companion who chats about your meals. Different personalities for different moments.",
    detail:
      "Every persona has a personality. Your gym buddy keeps you accountable. Your rant companion listens without judgment. Your astro guide reads the stars. Your nutrition companion knows what you actually eat. Your hype buddy pumps you up. And your casual companion? Just vibes. Each one remembers everything — switch between them and pick up right where you left off.",
    tags: ["Casual Talk", "Rant", "Hype Buddy", "Gym Buddy", "Nutrition", "Astro"],
    image: "/images/features/AI-Avatars.png",
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
    title: "Your life, organized",
    description:
      "Workouts, tasks, bookmarks, subscriptions, notes, shopping lists — everything you juggle, in one place. With AI that actually reads the room.",
    detail:
      "You don't need seven apps and a spreadsheet. Log your workouts and watch Bluto spot your PRs. Save links and get reminded to actually read them. Track subscriptions before they silently drain your wallet. Share a shopping list that updates in real time. Every tool has an AI layer baked in — not bolted on — so your data actually works for you.",
    tags: ["Bookmarks", "Workout Log", "Task List", "Exercise Library", "Subscriptions", "Notes", "Shopping List"],
    image: "/images/features/Your-Life-Organised.png",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: "Voice & Smart Nudges",
    description:
      "A morning brief that sets up your day. Streak alerts that keep you honest. Gentle reminders that land at exactly the right time.",
    detail:
      "Open your inbox to a personalized rundown — your tasks, your streak, your schedule, all in one glance. Bluto nudges you when something slips, celebrates when you're consistent, and stays quiet when you don't need it. Push, email, your call. Productivity without the guilt trip.",
    tags: ["Morning Briefs", "Streak Alerts", "Task Reminders", "Push Notifications", "Email Digests", "Voice"],
    image: "/images/features/Voice-Smart-Nudges.png",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

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
            What you get
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight max-w-2xl">
            One app that replaces{" "}
            <span className="serif-italic">the ten you forgot to open.</span>
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
                            className="text-xs font-medium px-3 py-1 rounded-full tag-pill"
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

        {/* Desktop detail card */}
        <div className="hidden md:block mt-0 rounded-2xl overflow-hidden border border-card-border bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
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
                    <h3 className="instrument-serif text-3xl lg:text-4xl text-foreground leading-snug">
                      {features[active].title}
                    </h3>
                  </div>
                  <p className="text-muted text-sm lg:text-base leading-relaxed mb-6">
                    {features[active].detail}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {features[active].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full tag-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature image */}
            <div className="relative flex items-center justify-center p-4 lg:p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full min-h-[350px] lg:min-h-[420px] flex items-center justify-center"
                >
                  {!imgError[active] ? (
                    <Image
                      src={features[active].image}
                      alt={features[active].title}
                      width={600}
                      height={450}
                      className="object-contain max-w-full max-h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={() => setImgError((prev) => ({ ...prev, [active]: true }))}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-background flex items-center justify-center mb-4">
                          <span className="text-foreground scale-150">
                            {features[active].icon}
                          </span>
                        </div>
                        <p className="text-xs text-muted">Image coming soon</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
