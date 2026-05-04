"use client";

import { motion } from "framer-motion";

export default function Download() {
  return (
    <section id="download" className="relative py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="rounded-3xl bg-cream border border-card-border p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          {/* Text side */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight mb-2">
              Talk it out{" "}
              <span className="serif-italic">with voice</span>
              <br />
              on your favorite device
            </h2>
            <p className="text-muted text-sm leading-relaxed mt-4 mb-8">
              Download Bluto for free and start your first conversation today.
              200 credits on us to get you started.
            </p>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background hover:bg-accent-hover transition-all"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background hover:bg-accent-hover transition-all"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Get it on</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="w-[220px] h-[440px] rounded-[2.5rem] border-2 border-card-border bg-white overflow-hidden shadow-lg relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-cream rounded-b-2xl" />

              {/* Screen content */}
              <div className="mt-10 px-4 space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                    <span className="text-foreground text-xs font-bold">B</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">Bluto</div>
                    <div className="text-[10px] text-muted">Online</div>
                  </div>
                </div>

                <div className="bg-cream rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[11px] text-foreground leading-relaxed">
                    Hey! How was your morning workout? Did you try that new routine? 💪
                  </p>
                </div>
                <div className="bg-foreground rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%] ml-auto">
                  <p className="text-[11px] text-background leading-relaxed">
                    Yes! It was tough but felt great
                  </p>
                </div>
                <div className="bg-cream rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-[11px] text-foreground leading-relaxed">
                    That&apos;s awesome! You&apos;re on a 5-day streak now 🔥
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
