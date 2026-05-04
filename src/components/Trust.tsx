"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "🔒",
    title: "Your data is yours",
    description: "We never sell your personal data. Conversations are encrypted and you can delete everything anytime.",
  },
  {
    icon: "⚕️",
    title: "AI with clear boundaries",
    description: "Bluto is for entertainment and productivity — not a substitute for medical, nutritional, or mental health professionals.",
  },
  {
    icon: "👁️",
    title: "Transparent practices",
    description: "Read our full Privacy Policy and Terms of Service anytime. We believe in clear, honest communication.",
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
            Built on <span className="serif-italic">trust</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            We take your privacy and safety seriously.
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
              <h4 className="font-semibold text-foreground mb-1 text-sm">Important Disclaimer</h4>
              <p className="text-sm text-muted leading-relaxed">
                Bluto provides AI-generated responses for informational and entertainment purposes only.
                It is not a licensed professional and should never be used as a substitute for qualified
                medical, nutritional, therapeutic, financial, or legal advice. Always consult appropriate
                professionals for health, dietary, and mental wellness decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
