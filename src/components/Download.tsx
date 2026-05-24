"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Download() {
  return (
    <section id="download" className="relative py-28 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <Image
            src="/images/Footer-bottom-block.png"
            alt=""
            fill
            className="object-cover"
            quality={90}
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 py-20 md:py-28 px-8 text-center">
            <h2 className="text-[24px] md:text-[30px] font-medium text-white leading-tight">
              Ready to meet your new{" "}
              <span className="serif-italic">favorite conversation?</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base mt-4 leading-relaxed max-w-lg mx-auto">
              200 free credits. No credit card. No commitment.
            </p>

            {/* Coming soon */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-white/50 text-lg leading-none pb-px">/</span>
                <svg className="w-4.5 h-4.5 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
              </div>
            </div>
            <p className="text-white/50 text-xs mt-4">
              Coming soon on App Store and Play Store
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
