import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReturnToApp from "./ReturnToApp";

export const metadata: Metadata = {
  title: "Credits Added | Bluto",
  description: "Your Bluto credits have been added successfully.",
};

export default function PricingSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        <section className="py-24 md:py-32 px-6 bg-background">
          <div className="max-w-md mx-auto text-center">
            {/* Green checkmark */}
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h1 className="instrument-serif text-3xl md:text-4xl mb-3">
              Credits added
            </h1>
            <p className="text-muted text-base mb-8">
              Your credits are ready to use. Open Bluto and they will be waiting
              for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-full border border-card-border text-sm font-medium text-foreground hover:bg-cream transition-colors"
              >
                Top up more
              </Link>
              <ReturnToApp />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
