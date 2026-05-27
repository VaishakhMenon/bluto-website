"use client";

import { useEffect, useState } from "react";

const DEEPLINK = "bluto://payment/result?status=cancelled";

export default function ReturnToApp() {
  const [fromApp, setFromApp] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") !== "app") return;

    setFromApp(true);
    const t = window.setTimeout(() => {
      window.location.href = DEEPLINK;
    }, 800);
    return () => window.clearTimeout(t);
  }, []);

  if (!fromApp) return null;

  return (
    <a
      href={DEEPLINK}
      className="px-6 py-3 rounded-full border border-card-border text-sm font-medium text-foreground hover:bg-cream transition-colors"
    >
      Back to Bluto
    </a>
  );
}
