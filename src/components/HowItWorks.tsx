"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Pick your voice. Set your vibe.",
    description: "Sign up in seconds. Choose from 8 companion voices across 5 languages. Tell Bluto what you care about and how you like to communicate.",
  },
  {
    number: "02",
    title: "Start a conversation that actually goes somewhere",
    description: "Chat by text or call by voice. Ask for workout plans, meal ideas, life advice, or just talk about your day. Bluto adapts to you, not the other way around.",
  },
  {
    number: "03",
    title: "It gets better every single day",
    description: "Bluto remembers your preferences, your goals, and your history. The more you use it, the more personal and useful it becomes. Like a best friend with perfect memory.",
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
            Up and running{" "}
            <span className="serif-italic">in 60 seconds.</span>
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
