"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DEEPLINK = "bluto://payment/result?status=success";

export default function ReturnToApp() {
  const [fromApp, setFromApp] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") !== "app") return;

    setFromApp(true);
    const t = window.setTimeout(() => {
      window.location.href = DEEPLINK;
    }, 600);
    return () => window.clearTimeout(t);
  }, []);

  if (fromApp) {
    return (
      <a
        href={DEEPLINK}
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
