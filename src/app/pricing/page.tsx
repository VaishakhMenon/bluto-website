"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BACKEND_URL = "https://ai-companion-app-production.up.railway.app";
const CREDITS_PER_DOLLAR = 100;
const MIN_DOLLARS = 2;
const MAX_DOLLARS = 100;

const creditCosts = [
  { feature: "Chat message", cost: "3-5", icon: "\u{1F4AC}" },
  { feature: "Voice input", cost: "2-3", icon: "\u{1F399}" },
  { feature: "Voice reply (TTS)", cost: "3", icon: "\u{1F50A}" },
  { feature: "AI workout features", cost: "3-5", icon: "\u{1F4AA}" },
  { feature: "Daily intelligence", cost: "FREE", icon: "\u2728", free: true },
  { feature: "Signup bonus", cost: "200 free", icon: "\u{1F381}", free: true },
];

interface UserInfo {
  email: string;
  credits: number;
}

export default function PricingPage() {
  const [amount, setAmount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const credits = amount * CREDITS_PER_DOLLAR;

  // Read token from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const t = params.get("token");
      if (t) {
        setToken(t);
        // Clean token from URL bar (security)
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
    setAuthLoading(false);
  }, []);

  // Fetch user profile + balance when token is available
  useEffect(() => {
    if (!token) return;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    Promise.all([
      fetch(`${BACKEND_URL}/v1/user/profile`, { headers }),
      fetch(`${BACKEND_URL}/v1/payments/plans`, { headers }),
    ])
      .then(async ([profileRes, plansRes]) => {
        if (!profileRes.ok || !plansRes.ok) {
          setToken(null);
          return;
        }
        const profileData = await profileRes.json();
        const plansData = await plansRes.json();
        setUser({
          email: profileData.profile?.email || "",
          credits: plansData.balance?.credits || 0,
        });
      })
      .catch(() => {
        setToken(null);
      });
  }, [token]);

  const handleTopUp = async () => {
    if (!token) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/v1/payments/checkout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount_cents: amount * 100,
          // ?from=app tells the success page to deeplink back into the Bluto app
          // instead of leaving the user stranded on bluto.co.
          return_url: "https://bluto.co/pricing/success?from=app",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      }
    } catch {
      setError("Could not connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = token && user;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        {/* Hero */}
        <section className="py-16 md:py-24 px-6 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="instrument-serif text-4xl md:text-5xl tracking-tight"
            >
              Pay what you want
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted text-base md:text-lg mt-4 max-w-xl mx-auto"
            >
              No subscriptions. No tiers. Just credits you use when you want.
              Top up any amount from $2 to $100.
            </motion.p>
          </div>
        </section>

        {/* Credit Calculator */}
        <section className="py-16 md:py-20 px-6 bg-cream">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-card-border bg-white p-8 md:p-10"
            >
              <h2 className="instrument-serif text-2xl md:text-3xl text-center mb-8">
                Top up your credits
              </h2>

              {/* Authenticated user info */}
              {isAuthenticated && (
                <div className="mb-6 px-4 py-3 rounded-xl bg-cream border border-card-border text-center">
                  <p className="text-sm text-muted">
                    Signed in as{" "}
                    <span className="font-medium text-foreground">
                      {user.email}
                    </span>
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Current balance:{" "}
                    <span className="font-semibold text-foreground">
                      {user.credits.toLocaleString()} credits
                    </span>
                  </p>
                </div>
              )}

              {/* Not authenticated */}
              {!authLoading && !isAuthenticated && (
                <div className="mb-6 px-4 py-4 rounded-xl bg-cream border border-card-border text-center">
                  <p className="text-sm text-foreground font-medium mb-1">
                    Sign in to top up
                  </p>
                  <p className="text-xs text-muted">
                    Open the Bluto app, go to Settings &gt; Plans &amp; Credits,
                    and tap &quot;Visit bluto.co&quot; to get started.
                  </p>
                </div>
              )}

              {/* Amount display */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted text-lg">$</span>
                  <input
                    type="number"
                    min={MIN_DOLLARS}
                    max={MAX_DOLLARS}
                    value={amount}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || MIN_DOLLARS;
                      setAmount(
                        Math.min(MAX_DOLLARS, Math.max(MIN_DOLLARS, val))
                      );
                    }}
                    className="text-5xl font-semibold text-foreground w-24 text-center bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <p className="text-muted text-sm mt-2">
                  ={" "}
                  <span className="font-semibold text-foreground">
                    {credits.toLocaleString()}
                  </span>{" "}
                  credits
                </p>
              </div>

              {/* Range slider */}
              <div className="mb-8 px-2">
                <input
                  type="range"
                  min={MIN_DOLLARS}
                  max={MAX_DOLLARS}
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="pricing-slider w-full"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>${MIN_DOLLARS}</span>
                  <span>${MAX_DOLLARS}</span>
                </div>
              </div>

              {/* Quick amounts */}
              <div className="flex gap-2 justify-center mb-8">
                {[2, 5, 10, 25, 50].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      amount === val
                        ? "bg-foreground text-background border-foreground"
                        : "bg-white text-foreground border-card-border hover:border-foreground/30"
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>

              {/* Error */}
              {error && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* CTA */}
              <button
                onClick={handleTopUp}
                disabled={loading || !isAuthenticated}
                className="w-full py-3.5 rounded-full bg-foreground text-background font-semibold text-base hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Redirecting..." : `Top up $${amount}`}
              </button>

              <p className="text-xs text-muted text-center mt-4">
                100 credits = $1. Secure payment via DodoPayments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Credit Costs */}
        <section className="py-16 md:py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="instrument-serif text-2xl md:text-3xl">
                What credits get you
              </h2>
              <p className="text-muted text-sm mt-2">
                Only AI-powered features use credits. Everything else is free.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {creditCosts.map((item, i) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-card-border bg-white p-5 text-center"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-foreground">
                    {item.feature}
                  </p>
                  <p
                    className={`text-lg font-semibold mt-1 ${
                      item.free ? "text-green-600" : "text-foreground"
                    }`}
                  >
                    {item.free ? item.cost : `${item.cost} cr`}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs text-muted text-center mt-8 max-w-md mx-auto"
            >
              Credit costs vary by feature complexity. Chat with short messages
              uses fewer credits than long conversations.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
