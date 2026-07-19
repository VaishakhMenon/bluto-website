"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TALLY_SRC =
  "https://tally.so/embed/PdW17x?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1";

export default function SupportPage() {
  useEffect(() => {
    // Load Tally's embed helper so iframes with `data-tally-src` auto-size
    // to their content and forward events. Guard against re-injecting on
    // client-side nav; the script is idempotent.
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://tally.so/widgets/embed.js"]'
    );
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://tally.so/widgets/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else if ((window as unknown as { Tally?: { loadEmbeds?: () => void } }).Tally?.loadEmbeds) {
      (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        <section className="py-16 md:py-24 px-6 bg-background">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h1 className="instrument-serif text-4xl md:text-5xl tracking-tight">
                Support
              </h1>
              <p className="text-muted text-base md:text-lg mt-4 max-w-xl mx-auto">
                Something not working, or an idea you want us to build?
                Send a note. We usually reply within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-card-border bg-white p-6 md:p-8"
            >
              <iframe
                data-tally-src={TALLY_SRC}
                loading="lazy"
                width="100%"
                height={600}
                title="Bluto support form"
                style={{ border: 0 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs text-muted text-center mt-6"
            >
              Prefer email? Reach us at{" "}
              <a href="mailto:support@bluto.co" className="underline">
                support@bluto.co
              </a>
              .
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
