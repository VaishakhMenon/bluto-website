"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign up and pick your avatar",
    description:
      "Create your account in seconds. Choose an AI avatar that matches your vibe — casual friend, gym coach, nutrition guide, astro reader, or office confidant.",
  },
  {
    number: "02",
    title: "Talk, type, or just log",
    description:
      "Chat by text or voice. Log workouts, save bookmarks, create tasks, track subscriptions — use as much or as little as you want. Bluto adapts to you.",
  },
  {
    number: "03",
    title: "Get smarter nudges every day",
    description:
      "Wake up to a personalized morning brief. Get streak alerts, task reminders, and AI-powered insights via email and push notifications.",
  },
  {
    number: "04",
    title: "It remembers, so you don't have to",
    description:
      "Bluto learns your preferences, tracks your progress, and connects the dots across conversations. The more you use it, the more useful it becomes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight text-center">
            From download to{" "}
            <br className="hidden md:block" />
            <span className="serif-italic">&ldquo;how did I live without this&rdquo;</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left side — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-cream border border-card-border overflow-hidden flex items-center justify-center">
              <div className="w-[200px] rounded-[2rem] border-2 border-card-border bg-white overflow-hidden shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-cream rounded-b-xl z-10" />
                <div className="pt-8 pb-4 px-3 space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-cream flex items-center justify-center">
                      <span className="text-foreground text-[8px] font-bold">B</span>
                    </div>
                    <div className="text-[9px] font-semibold text-foreground">Bluto</div>
                  </div>
                  <div className="bg-cream rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[85%]">
                    <p className="text-[9px] text-foreground leading-relaxed">
                      Good morning! You hit 3 PRs this week. Your bench is up 5kg since last month.
                    </p>
                  </div>
                  <div className="bg-cream rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[90%]">
                    <p className="text-[9px] text-foreground leading-relaxed">
                      Today&apos;s tasks: finish report, call dentist, prep meals for tomorrow.
                    </p>
                  </div>
                  <div className="bg-foreground rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[70%] ml-auto">
                    <p className="text-[9px] text-background leading-relaxed">
                      What should I eat tonight?
                    </p>
                  </div>
                  <div className="bg-cream rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[90%]">
                    <p className="text-[9px] text-foreground leading-relaxed">
                      Based on your macros, grilled chicken with quinoa and roasted veggies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side — numbered steps */}
          <div className="flex flex-col justify-center">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-t border-card-border py-6 flex items-start gap-6"
              >
                <span className="text-muted text-xs font-medium tracking-wider mt-1 flex-shrink-0 w-6">
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-card-border" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#download"
                className="inline-flex px-7 py-3 rounded-full bg-foreground text-background hover:bg-accent-hover transition-colors font-medium text-sm"
              >
                Get started free
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
