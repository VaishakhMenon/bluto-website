"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "💬",
    title: "Your midnight",
    titleAccent: "sounding board",
    description:
      "3 AM thoughts? Big life decisions? Just need to vent? Bluto listens without judgment and actually remembers what you said last time.",
    image: "/images/features/thoughts.png",
  },
  {
    emoji: "📋",
    title: "Never forget",
    titleAccent: "what matters",
    description:
      "Tasks, habits, reminders, daily streaks. Tell Bluto what you need to do and it holds you accountable. No more things slipping through the cracks.",
    image: "/images/features/productivity.png",
  },
  {
    emoji: "🔮",
    title: "Your daily",
    titleAccent: "cosmic check-in",
    description:
      "Horoscopes, zodiac compatibility, birth chart insights. Whether you live by the stars or just think it's fun, Bluto has your sign covered.",
    image: "/images/features/astrology.png",
  },
  {
    emoji: "🎙️",
    title: "Just talk.",
    titleAccent: "Out loud.",
    description:
      "On your commute, during a walk, while you cook. Bluto's voice mode turns any moment into a real conversation. Hands free, judgment free.",
    image: "/images/features/voice.png",
  },
  {
    emoji: "🥗",
    title: "Meals that fit",
    titleAccent: "your life",
    description:
      "Not generic diet plans. Bluto learns what you actually eat, respects your culture and preferences, and suggests meals you'll want to make.",
    image: "/images/features/nutrition.png",
  },
  {
    emoji: "💪",
    title: "A gym partner",
    titleAccent: "who shows up",
    description:
      "AI-powered workout plans, exercise tracking, PR celebrations, and progressive overload hints. Bluto spots your gains before you do.",
    image: "/images/features/fitness.png",
  },
  {
    emoji: "🔖",
    title: "Save it now.",
    titleAccent: "Read it later.",
    description:
      "Found a great article at the wrong time? Save the link with your voice and Bluto keeps it organized until you're ready.",
    image: "/images/features/bookmarks.png",
  },
  {
    emoji: "💳",
    title: "Know where",
    titleAccent: "your money goes",
    description:
      "Track every subscription in one place. See your monthly spend at a glance. No more surprise charges from apps you forgot about.",
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
            One companion.{" "}
            <span className="serif-italic">Every part of your day.</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Most AI apps do one thing. Bluto handles your fitness, nutrition,
            productivity, mental wellness, and more. All in one place,
            all personalized to you.
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
