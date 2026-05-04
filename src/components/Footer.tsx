import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Image src="/images/logo-icon.png" alt="Bluto" width={28} height={28} className="w-7 h-7" />
              <Image src="/images/logo-text-name.png" alt="Bluto" width={72} height={20} className="h-4 w-auto" />
            </Link>
            <p className="text-sm text-muted max-w-xs leading-relaxed mt-3">
              Your personal AI companion that listens, remembers, and helps you navigate life.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">How it works</a>
              </li>
              <li>
                <a href="#download" className="text-sm text-muted hover:text-foreground transition-colors">Download</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted hover:text-foreground transition-colors">Terms of Service</Link>
              </li>
              <li>
                <a href="mailto:support@bluto.co" className="text-sm text-muted hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Bluto. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            AI-generated content is for informational and entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
