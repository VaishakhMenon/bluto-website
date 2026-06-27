import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // AASA must be served as application/json with no extension.
        // Next.js treats files in public/.well-known/ as static; we just
        // need to override the inferred content-type for the file.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        // Share-link landing pages must never be cached — they're
        // routinely tapped from messenger in-app browsers (WhatsApp,
        // Telegram, etc.) which ignore must-revalidate. no-store forces
        // a fresh fetch every time, so a deploy that rotates the JS
        // chunks is immediately visible to recipients.
        source: "/share/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
