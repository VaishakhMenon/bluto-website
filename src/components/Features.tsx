"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "💬",
    title: "Untangle",
    titleAccent: "your thoughts",
    description:
      "Process what's on your mind with a patient, non-judgmental companion who actually remembers your story.",
    image: "/images/features/thoughts.png",
  },
  {
    emoji: "📋",
    title: "Get things",
    titleAccent: "done",
    description:
      "Set reminders, track habits, and manage your daily tasks. Bluto keeps track so you don't have to.",
    image: "/images/features/productivity.png",
  },
  {
    emoji: "🔮",
    title: "Astro",
    titleAccent: "universe",
    description:
      "Daily horoscopes, zodiac compatibility, and cosmic insights — your stars, your way. Just for fun.",
    image: "/images/features/astrology.png",
  },
  {
    emoji: "🎙️",
    title: "Talk it out",
    titleAccent: "live",
    description:
      "Commute, walk, or prep out loud — Bluto's voice mode goes wherever you go.",
    image: "/images/features/voice.png",
  },
  {
    emoji: "🥗",
    title: "Eat",
    titleAccent: "smarter",
    description:
      "Get personalized meal ideas, nutrition tips, and dietary guidance tailored to your goals.",
    image: "/images/features/nutrition.png",
  },
  {
    emoji: "💪",
    title: "Stay",
    titleAccent: "active",
    description:
      "Workout plans, exercise tracking, and a full exercise library — your personal fitness companion.",
    image: "/images/features/fitness.png",
  },
  {
    emoji: "🔖",
    title: "Bookmark",
    titleAccent: "links",
    description:
      "Save links and Bluto will remind you later. Never lose track of that article or recipe again.",
    image: "/images/features/bookmarks.png",
  },
  {
    emoji: "💳",
    title: "Subscription",
    titleAccent: "tracker",
    description:
      "Keep tabs on all your subscriptions in one place. Know exactly where your money goes each month.",
    image: "/images/features/subscriptions.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative pt-16 pb-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header — Pi style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight">
            Ask Bluto anything.{" "}
            <span className="serif-italic">Talk about everything.</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-lg mx-auto mt-4 leading-relaxed">
            Bluto is always curious, kind, and ready to help you think,
            plan, and grow.
          </p>
        </motion.div>

        {/* Feature grid — Pi card style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title + feature.titleAccent}
              variants={cardVariants}
              className="group rounded-2xl bg-card border border-card-border overflow-hidden hover:shadow-md transition-all"
            >
              {/* Text */}
              <div className="p-7 pb-4">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2 leading-snug">
                  {feature.title}{" "}
                  <span className="serif-italic">{feature.titleAccent}</span>
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 bg-cream">
                <Image
                  src={feature.image}
                  alt={`${feature.title} ${feature.titleAccent}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Hide broken image, show emoji fallback
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
                {/* Emoji fallback — shows if image not yet added */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-30">{feature.emoji}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
