import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      {/* Top row — links */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#download" className="hover:text-foreground transition-colors">Download</a>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <a href="mailto:support@bluto.co" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Bluto. All rights reserved.</p>
          <p>AI companion for informational and entertainment purposes only.</p>
        </div>
      </div>

    </footer>
  );
}
