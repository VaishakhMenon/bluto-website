import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReturnToApp from "./ReturnToApp";

export const metadata: Metadata = {
  title: "Payment Cancelled | Bluto",
  description: "Your payment was not completed.",
};

export default function PricingCancelPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        <section className="py-24 md:py-32 px-6 bg-background">
          <div className="max-w-md mx-auto text-center">
            {/* Circle with X */}
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <h1 className="instrument-serif text-3xl md:text-4xl mb-3">
              Payment not completed
            </h1>
            <p className="text-muted text-base mb-8">
              No worries. No charges were made. You can try again whenever you
              are ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Try again
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
