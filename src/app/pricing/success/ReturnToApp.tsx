"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Default for standalone iOS/Android builds. Pricing page can override via
// ?deeplink=<encoded URL> when the app passes an Expo Go (exp://) target.
const DEFAULT_DEEPLINK = "bluto://payment/result?status=success";

// Re-validate any caller-supplied deeplink against our known schemes so
// the page cannot be turned into an arbitrary-protocol redirect.
function safeDeeplink(raw: string | null): string {
  if (!raw) return DEFAULT_DEEPLINK;
  if (!/^(bluto:|exp:|exp\+bluto:)/i.test(raw)) return DEFAULT_DEEPLINK;

  // Append the success status if the caller hasn't already encoded one.
  if (raw.includes("status=")) return raw;
  const sep = raw.includes("?") ? "&" : "?";
  return `${raw}${sep}status=success`;
}

export default function ReturnToApp() {
  const [fromApp, setFromApp] = useState(false);
  const [deeplink, setDeeplink] = useState<string>(DEFAULT_DEEPLINK);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") !== "app") return;

    const target = safeDeeplink(params.get("deeplink"));
    setDeeplink(target);
    setFromApp(true);

    const t = window.setTimeout(() => {
      window.location.href = target;
    }, 600);
    return () => window.clearTimeout(t);
  }, []);

  if (fromApp) {
    return (
      <a
        href={deeplink}
        className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent-hover transition-colors"
      >
        Open Bluto
      </a>
    );
  }

  return (
    <Link
      href="/"
      className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent-hover transition-colors"
    >
      Back to Bluto
    </Link>
  );
}
