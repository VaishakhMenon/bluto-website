"use client";

import { useEffect, useState } from "react";

const DEFAULT_DEEPLINK = "bluto://payment/result?status=cancelled";

function safeDeeplink(raw: string | null): string {
  if (!raw) return DEFAULT_DEEPLINK;
  if (!/^(bluto:|exp:|exp\+bluto:)/i.test(raw)) return DEFAULT_DEEPLINK;

  if (raw.includes("status=")) return raw;
  const sep = raw.includes("?") ? "&" : "?";
  return `${raw}${sep}status=cancelled`;
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
    }, 800);
    return () => window.clearTimeout(t);
  }, []);

  if (!fromApp) return null;

  return (
    <a
      href={deeplink}
      className="px-6 py-3 rounded-full border border-card-border text-sm font-medium text-foreground hover:bg-cream transition-colors"
    >
      Back to Bluto
    </a>
  );
}
