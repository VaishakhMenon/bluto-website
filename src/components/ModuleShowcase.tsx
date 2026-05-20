"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const modules = [
  {
    id: "ai-chat",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "AI Chat",
    description: "Five personalities. One app. Talk, vent, get coached.",
    gradient: "from-indigo-200 to-blue-200",
  },
  {
    id: "workout-log",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3" />
        <path d="M17.5 6.5h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3" />
        <rect x="6.5" y="4" width="4" height="16" rx="1" />
        <rect x="13.5" y="4" width="4" height="16" rx="1" />
        <path d="M10.5 12h3" />
      </svg>
    ),
    title: "Workout Log",
    description: "Log sets, track PRs, watch AI spot your progress.",
    gradient: "from-green-200 to-emerald-200",
  },
  {
    id: "shopping-lists",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    title: "Shopping Lists",
    description: "Share lists, check off items, shop together.",
    gradient: "from-amber-200 to-orange-200",
  },
  {
    id: "notes",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    title: "Notes",
    description: "Rich text, folders, voice notes. Your second brain.",
    gradient: "from-purple-200 to-violet-200",
  },
  {
    id: "task-list",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Task List",
    description: "Daily tasks with priorities, categories, and voice input.",
    gradient: "from-sky-200 to-cyan-200",
  },
  {
    id: "bookmarks",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Bookmarks",
    description: "Save links, AI summarizes, never lose a tab again.",
    gradient: "from-rose-200 to-pink-200",
  },
  {
    id: "subscriptions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Subscriptions",
    description: "Track every recurring charge before it drains you.",
    gradient: "from-teal-200 to-emerald-200",
  },
  {
    id: "exercise-library",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Exercise Library",
    description: "Browse 500+ exercises by muscle group and level.",
    gradient: "from-slate-200 to-gray-200",
  },
];

function ModuleCard({ mod, index }: { mod: (typeof modules)[number]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      className="rounded-2xl border border-card-border bg-cream overflow-hidden transition-shadow"
    >
      {/* Image area */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${mod.gradient} flex items-center justify-center`}>
        {!imgError ? (
          <Image
            src={`/images/features/${mod.id}.png`}
            alt={mod.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-foreground/40">
            {mod.icon}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-foreground/60">{mod.icon}</span>
          <h3 className="text-sm font-semibold text-foreground">{mod.title}</h3>
        </div>
        <p className="text-xs text-muted leading-relaxed">{mod.description}</p>
      </div>
    </motion.div>
  );
}

export default function ModuleShowcase() {
  return (
    <section id="modules" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Modules
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight max-w-2xl">
            Everything you need,{" "}
            <span className="serif-italic">nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.id} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
