"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Private by default",
    description: "Encrypted conversations. No data sold. Delete everything with one tap.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Honest boundaries",
    description: "For real health or financial decisions, Bluto always says talk to a professional.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Plain-language terms",
    description: "Our Privacy Policy and Terms are written like a human wrote them. No buried clauses.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
    title: "Pay what you want",
    description: "No subscriptions. Top up credits from $2. 200 free credits when you sign up.",
  },
];

export default function Trust() {
  return (
    <section id="safety" className="relative py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
        >
          {/* Background image */}
          <Image
            src="/images/modules/built on trust bg.jpg"
            alt=""
            fill
            className="object-cover"
            quality={90}
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="instrument-serif text-2xl md:text-3xl text-white">
                Built on trust
              </h2>
              <p className="text-sm text-white/70 mt-2 max-w-md mx-auto">
                You share real things with Bluto. Here is how we handle that.
              </p>
            </div>

            {/* 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3 text-[#6FCF97]">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-white/40 text-center mt-10 max-w-xl mx-auto leading-relaxed">
              Bluto is an AI companion for productivity, lifestyle tracking, and everyday conversation.
              It is not a licensed professional and should not replace qualified medical, nutritional,
              financial, or legal advice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
