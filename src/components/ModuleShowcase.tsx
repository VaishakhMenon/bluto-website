"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── AI Personalities ───────────────────────────────────────────────

const personalities = [
  {
    id: "talk",
    title: "Casual Talk",
    description:
      "Your everyday AI companion. Share what's on your mind, think out loud, or just have a conversation that actually listens.",
    image: "/images/modules/Casual-talk-screenshot.png",
    gradient: "from-amber-100 via-orange-50 to-yellow-100",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "rant",
    title: "Rant",
    description:
      "Bad day? Let it out. Bluto won't judge, won't interrupt, and won't tell you to calm down.",
    image: "/images/modules/Rant-screenshot.png",
    gradient: "from-red-100 via-rose-50 to-orange-100",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "hype-buddy",
    title: "Hype Buddy",
    description:
      "Need a push? Your personal motivator that celebrates your wins and keeps you going when things get tough.",
    image: "/images/modules/Hype-Buddy-screenshot.png",
    gradient: "from-yellow-100 via-amber-50 to-orange-50",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "gym-buddy",
    title: "Gym Buddy",
    description:
      "Get workout tips, form checks, and exercise suggestions. Like having a gym partner in your pocket.",
    image: "/images/modules/Gym-Buddy-screenshot.png",
    gradient: "from-green-100 via-emerald-50 to-teal-100",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3" />
        <path d="M17.5 6.5h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3" />
        <rect x="6.5" y="4" width="4" height="16" rx="1" />
        <rect x="13.5" y="4" width="4" height="16" rx="1" />
        <path d="M10.5 12h3" />
      </svg>
    ),
  },
  {
    id: "nutritionist",
    title: "Nutritionist",
    description:
      "Ask about meals, ingredients, or what you're eating. Get simple breakdowns without the jargon.",
    image: "/images/modules/Nutritionist-screenshot.png",
    gradient: "from-lime-100 via-green-50 to-emerald-100",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1 6.5-4 11.5" />
        <path d="M11.2 13.1C16.5 8 17 3.5 17 3.5" />
      </svg>
    ),
  },
  {
    id: "astrologer",
    title: "Astrologer",
    description:
      "Check what your stars say. Daily horoscopes, birth chart insights, and cosmic curiosity — no promises, just fun.",
    image: "/images/modules/Astro-Universe-screenshot.png",
    gradient: "from-violet-100 via-purple-50 to-indigo-100",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
];

// ─── Utility Modules ────────────────────────────────────────────────

const utilities = [
  {
    id: "workouts",
    title: "Workouts",
    description:
      "Plan your workouts, log your sets, and track your PRs. Browse 500+ exercises and get AI-generated weekly recaps that show what's working.",
    image: "/images/modules/Workouts Screenshot.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3" />
        <path d="M17.5 6.5h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3" />
        <rect x="6.5" y="4" width="4" height="16" rx="1" />
        <rect x="13.5" y="4" width="4" height="16" rx="1" />
        <path d="M10.5 12h3" />
      </svg>
    ),
  },
  {
    id: "task-list",
    title: "Tasks",
    description:
      "Organize your day with priorities, categories, and voice input. Get gentle nudges to stay on track and weekly recaps of what you got done.",
    image: "/images/modules/Task List screenshot.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    description:
      "See every recurring charge in one place. Know exactly where your money goes before the next billing cycle hits.",
    image: "/images/modules/Subscription Screenshot.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: "shopping-lists",
    title: "Shopping Lists",
    description:
      "Build your shopping list, share it with family, and check off items together in real time.",
    image: "/images/modules/Shopping List Screenshot.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    id: "bookmarks",
    title: "Bookmarks",
    description:
      "We all save links we never read. Bluto sends you daily reminders so you actually get back to them.",
    image: "/images/modules/Bookmarks screenshot.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "notes",
    title: "Notes",
    description:
      "Rich text, folders, and voice notes. Capture ideas on the go and find them when you need them.",
    image: "/images/modules/Notes-screenshot.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
];

// ─── Carousel Card ──────────────────────────────────────────────────

function PersonalityCard({
  item,
  index,
}: {
  item: (typeof personalities)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      data-card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex-shrink-0 w-[340px] md:w-[400px] lg:w-[440px] snap-start rounded-2xl border border-card-border bg-white overflow-hidden group flex flex-col"
    >
      <div className="flex-shrink-0">
        <div
          className="h-[320px] md:h-[380px] relative overflow-hidden flex items-center justify-center"
        >
        {!imgError ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 340px, 440px"
          />
        ) : (
          <div className="text-foreground/20 group-hover:text-foreground/30 transition-all duration-500 group-hover:scale-110">
            {item.icon}
          </div>
        )}
        </div>
      </div>

      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-1 flex-1">
        <h3 className="instrument-serif text-xl md:text-2xl text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Grid Card ──────────────────────────────────────────────────────

function UtilityCard({
  item,
  index,
}: {
  item: (typeof utilities)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      className="rounded-2xl border border-card-border bg-white overflow-hidden transition-shadow w-full min-h-[420px] md:min-h-[480px] flex flex-col"
    >
      <div className="p-3 md:p-4 flex-shrink-0">
        <div className="relative aspect-[3/2] flex items-center justify-center overflow-hidden rounded-xl">
          {!imgError ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              onError={() => setImgError(true)}
              sizes="(max-width: 768px) 340px, 420px"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-white/50 flex items-center justify-center text-foreground/30">
              {item.icon}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-1 flex-1">
        <h3 className="instrument-serif text-xl md:text-2xl text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Arrow Button ───────────────────────────────────────────────────

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-0 -translate-x-4" : "right-0 translate-x-4"
      } w-10 h-10 rounded-full bg-white border border-card-border items-center justify-center shadow-sm hover:shadow-md transition-shadow z-10 cursor-pointer`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </motion.button>
  );
}

// ─── Main Component ─────────────────────────────────────────────────

function useCarouselScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    checkScroll();
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement;
    if (!firstChild) return;
    const amount = firstChild.offsetWidth + 20;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return { scrollRef, canScrollLeft, canScrollRight, scroll };
}

export default function ModuleShowcase() {
  const ai = useCarouselScroll();
  const tools = useCarouselScroll();

  return (
    <section id="modules" className="relative py-24 bg-background">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
            Modules
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight max-w-2xl">
            Everything you need,{" "}
            <span className="serif-italic">nothing you don&apos;t.</span>
          </h2>
        </motion.div>
      </div>

      {/* ── AI Personalities: Horizontal carousel ── */}
      <div className="mb-24">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-foreground">
              Your AI crew
            </h3>
            <p className="text-sm text-muted mt-1">
              Six personalities. Zero judgment. Pick whoever fits the moment.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Scrollable track */}
          <div
            ref={ai.scrollRef}
            className="no-scrollbar flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
          >
            {personalities.map((p, i) => (
              <PersonalityCard key={p.id} item={p} index={i} />
            ))}
          </div>

          {/* Navigation arrows */}
          <AnimatePresence>
            {ai.canScrollLeft && (
              <ArrowButton key="left" direction="left" onClick={() => ai.scroll("left")} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {ai.canScrollRight && (
              <ArrowButton key="right" direction="right" onClick={() => ai.scroll("right")} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Utility Modules: Static grid ── */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl md:text-2xl font-medium text-foreground">
            Built-in tools
          </h3>
          <p className="text-sm text-muted mt-1">
            Everything else you need, already baked in.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={tools.scrollRef}
            className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
          >
            {utilities.map((mod, i) => (
              <div key={mod.id} className="flex-shrink-0 w-[300px] md:w-[380px] lg:w-[420px] snap-start">
                <UtilityCard item={mod} index={i} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <AnimatePresence>
            {tools.canScrollLeft && (
              <ArrowButton key="left" direction="left" onClick={() => tools.scroll("left")} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {tools.canScrollRight && (
              <ArrowButton key="right" direction="right" onClick={() => tools.scroll("right")} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
