"use client";

import { useState, useEffect } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BACKEND_URL = "https://ai-companion-app-production.up.railway.app";
const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=co.bluto.app";

interface ListPreview {
  name: string;
  owner_name: string;
  item_count: number;
}

interface PageProps {
  params: Promise<{ token: string }>;
}

export default function GroceryInvitePage({ params }: PageProps) {
  const { token } = use(params);

  const [list, setList] = useState<ListPreview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const deepLink = `bluto://share/grocery/${token}`;

  // Fetch the list preview from the public share endpoint.
  useEffect(() => {
    if (!token) return;
    fetch(`${BACKEND_URL}/v1/share/grocery/${token}`)
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error || "This invite link is no longer valid");
        }
        return res.json();
      })
      .then((data) => {
        setList(data.list);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e.message);
        setLoading(false);
      });
  }, [token]);

  // No auto-redirect — iOS Safari blocks programmatic launches of
  // custom URL schemes (only user gestures qualify), and throws the
  // alarming "Safari cannot open the page because the address is
  // invalid" dialog. The Open in Bluto button below IS a user gesture
  // and works correctly. Universal links via the .well-known files take
  // care of installed-app interception transparently.

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        <section className="py-16 md:py-24 px-6 bg-background">
          <div className="max-w-xl mx-auto text-center">
            {loading ? (
              <div className="py-24">
                <div className="inline-block w-10 h-10 border-4 border-teal-900/20 border-t-teal-900 rounded-full animate-spin" />
              </div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="instrument-serif text-4xl md:text-5xl mb-4">
                  Invite not available
                </h1>
                <p className="text-base text-foreground/70 mb-8">{error}</p>
                <a
                  href="/"
                  className="inline-block px-6 py-3 rounded-full bg-teal-900 text-white font-medium hover:bg-teal-800 transition"
                >
                  Back to Bluto
                </a>
              </motion.div>
            ) : list ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm uppercase tracking-widest text-foreground/50 mb-3">
                  You’ve been invited
                </p>
                <h1 className="instrument-serif text-4xl md:text-5xl leading-tight mb-3">
                  Join “{list.name}”
                </h1>
                <p className="text-base text-foreground/70 mb-10">
                  {list.owner_name} shared a shopping list with you on Bluto
                  {list.item_count > 0 ? ` — ${list.item_count} item${list.item_count === 1 ? "" : "s"} so far` : ""}.
                </p>

                <div className="space-y-3 mb-8">
                  <a
                    href={deepLink}
                    className="block w-full px-6 py-4 rounded-full bg-teal-900 text-white font-medium hover:bg-teal-800 transition"
                  >
                    Open in Bluto
                  </a>
                  <p className="text-xs text-foreground/50">
                    Don’t have Bluto yet? Install it, sign up, and the list
                    will be waiting for you.
                  </p>
                </div>

                <div className="flex gap-3 justify-center">
                  <a
                    href={APP_STORE_URL}
                    className="px-5 py-3 rounded-full border border-foreground/15 text-sm font-medium hover:bg-foreground/5 transition"
                  >
                    App Store
                  </a>
                  <a
                    href={PLAY_STORE_URL}
                    className="px-5 py-3 rounded-full border border-foreground/15 text-sm font-medium hover:bg-foreground/5 transition"
                  >
                    Google Play
                  </a>
                </div>
              </motion.div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
