"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Private by default",
    description:
      "Your conversations are encrypted. We never sell your data. Delete everything with one tap, anytime.",
  },
  {
    title: "Honest boundaries",
    description:
      "Bluto helps you think and plan. For medical, nutritional, or mental health decisions, it always recommends a professional.",
  },
  {
    title: "No hidden fine print",
    description:
      "Our Privacy Policy and Terms are written in plain language. No surprises, no buried clauses.",
  },
  {
    title: "Pay what you want",
    description:
      "No subscriptions. No tiers. Just top up credits when you need them, starting at $1. 200 free credits to start.",
  },
];

export default function Trust() {
  return (
    <section id="safety" className="relative py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
              Trust & Safety
            </p>
            <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight">
              Your trust is{" "}
              <span className="serif-italic">non-negotiable.</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-4 leading-relaxed max-w-md">
              You share real things with Bluto. We protect every word like it
              matters. Because it does.
            </p>
          </motion.div>

          {/* Right — items with dividers */}
          <div className="flex flex-col justify-center">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-t border-card-border py-5 flex items-start gap-5"
              >
                <span className="text-muted text-xs font-medium tracking-wider mt-1 flex-shrink-0 w-8">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-card-border" />
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-muted mt-16 max-w-2xl leading-relaxed"
        >
          Bluto is an AI companion for productivity, wellness tracking, and
          everyday conversation. It is not a licensed professional and should not
          replace qualified medical, nutritional, therapeutic, financial, or
          legal advice.
        </motion.p>
      </div>
    </section>
  );
}
