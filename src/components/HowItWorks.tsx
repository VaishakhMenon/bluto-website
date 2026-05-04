"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download & sign up",
    description: "Create your account in seconds. Tell Bluto your name, your interests, and pick your companion voice.",
  },
  {
    number: "02",
    title: "Start talking",
    description: "Chat or call — Bluto adapts to your style. Ask anything, share anything, get help with everything.",
  },
  {
    number: "03",
    title: "Watch it grow",
    description: "The more you interact, the more Bluto understands you. It remembers, learns, and gets better over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight">
            Simple to start.{" "}
            <span className="serif-italic">Impossible to put down.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-8 pb-12 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[27px] top-14 bottom-0 w-px bg-card-border" />
              )}
              {/* Number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center bg-background relative z-10">
                <span className="text-foreground font-semibold text-sm">{step.number}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
