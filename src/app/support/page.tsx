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

            {/* Account deletion instructions — referenced by App Store and
                Play Store data-safety forms. Google requires a public URL
                that describes the deletion process, so this section serves
                that purpose. */}
            <motion.div
              id="delete-account"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 rounded-2xl border border-card-border bg-white p-6 md:p-8"
            >
              <h2 className="instrument-serif text-2xl md:text-3xl mb-4">
                Delete your Bluto account
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
                You can delete your Bluto account and all associated data at
                any time. Two ways to do it:
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">
                  From inside the Bluto app
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted">
                  <li>Open the Bluto app and sign in</li>
                  <li>Go to <strong className="text-foreground">Settings</strong></li>
                  <li>Scroll to <strong className="text-foreground">Account</strong></li>
                  <li>Tap <strong className="text-foreground">Delete Account</strong> and confirm</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">
                  By email
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  If you cannot access the app, email us at{" "}
                  <a href="mailto:support@bluto.co" className="underline text-foreground">
                    support@bluto.co
                  </a>{" "}
                  from your account&apos;s registered email address with the
                  subject line <em>&quot;Delete my account&quot;</em>. We&apos;ll
                  process the deletion within 7 days.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What gets deleted
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-2">
                  Deletion is permanent and removes:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-4">
                  <li>Your account, profile, and login credentials</li>
                  <li>All conversations with AI personas</li>
                  <li>Notes, tasks, workouts, reminders, shopping lists, bookmarks, subscription records</li>
                  <li>Voice recordings and transcripts</li>
                  <li>Your credit balance and purchase history</li>
                  <li>Analytics and crash logs tied to your account</li>
                </ul>
                <p className="text-sm text-muted leading-relaxed">
                  Deleted data is removed from our active systems immediately
                  and purged from encrypted backups within 30 days. Some
                  anonymized records required by law (payment audit logs) may
                  be retained without any personally identifiable information.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
