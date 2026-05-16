"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Your midnight sounding board",
    description:
      "3 AM thoughts? Big life decisions? Just need to vent? Bluto listens without judgment and actually remembers what you said last time.",
    detail: "Voice or text. Anytime. Bluto adapts to your communication style, remembers context from past conversations, and responds like someone who genuinely knows your story.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Never forget what matters",
    description:
      "Tasks, habits, reminders, daily streaks. Tell Bluto what you need to do and it holds you accountable.",
    detail: "Voice-powered task creation, smart categorization, daily ritual tracking, and gentle nudges when things slip through the cracks. Your second brain, minus the forgetting.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    title: "A gym partner who shows up",
    description:
      "AI workout plans, exercise tracking, PR celebrations, and progressive overload hints. Bluto spots your gains before you do.",
    detail: "Log workouts by voice. Get AI-generated training plans. Track personal records automatically. Weekly recaps that actually tell you something useful about your progress.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    title: "Just talk. Out loud.",
    description:
      "On your commute, during a walk, while you cook. Voice mode turns any moment into a real conversation.",
    detail: "8 companion voices across 5 languages. Natural speech recognition that handles accents, filler words, and interruptions. Hands free, judgment free.",
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
            Benefits
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
                  {/* Active dot */}
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
                      <p className="text-sm text-muted leading-relaxed mb-5">
                        {feature.detail}
                      </p>

                      {/* Image placeholder card */}
                      <div className="rounded-xl bg-cream border border-card-border overflow-hidden">
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-card-border">
                          <div className="w-2 h-2 rounded-full bg-card-border" />
                          <div className="w-2 h-2 rounded-full bg-card-border" />
                          <div className="w-2 h-2 rounded-full bg-card-border" />
                        </div>
                        <div className="flex items-center justify-center py-12 px-6">
                          <div className="text-center">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-background flex items-center justify-center mb-3">
                              <span className="text-foreground scale-125">
                                {feature.icon}
                              </span>
                            </div>
                            <p className="text-xs text-muted">Feature image coming soon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-card-border" />
        </div>

        {/* ─── Desktop: Tab columns ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-0 mt-14"
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
                {/* Active dot */}
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
                  <p className="text-muted text-sm lg:text-base leading-relaxed">
                    {features[active].detail}
                  </p>
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
