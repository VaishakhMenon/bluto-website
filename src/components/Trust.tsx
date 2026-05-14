"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "🔒",
    title: "Your conversations stay private",
    description: "We never sell your data. Period. Every conversation is encrypted and you can wipe everything with one tap whenever you want.",
  },
  {
    icon: "⚕️",
    title: "Smart AI, honest boundaries",
    description: "Bluto helps you think, plan, and stay on track. For medical, nutritional, or mental health decisions, it always recommends consulting a professional.",
  },
  {
    icon: "👁️",
    title: "No hidden fine print",
    description: "Our Privacy Policy and Terms of Service are written in plain language. No surprises, no buried clauses. You deserve to know exactly how things work.",
  },
];

export default function Trust() {
  return (
    <section id="safety" className="relative py-28 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight">
            Your trust is{" "}
            <span className="serif-italic">non-negotiable.</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            You share real things with Bluto. We protect every word like it matters. Because it does.
          </p>
        </motion.div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-card-border p-7 text-center"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-amber-300/40 bg-amber-50 p-6"
        >
          <div className="flex items-start gap-3">
            <span className="text-amber-600 text-lg flex-shrink-0">⚠️</span>
            <div>
              <h4 className="font-semibold text-foreground mb-1 text-sm">A quick note</h4>
              <p className="text-sm text-muted leading-relaxed">
                Bluto is an AI companion built for productivity, wellness tracking, and everyday conversation.
                It is not a licensed professional and should not replace qualified medical, nutritional,
                therapeutic, financial, or legal advice. For important health and wellness decisions,
                always consult the right professionals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
