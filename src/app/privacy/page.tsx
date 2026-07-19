import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Bluto",
  description: "How Bluto collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-card-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo-icon.png" alt="Bluto" className="w-7 h-7" />
            <img src="/images/logo-text-name.png" alt="Bluto" className="h-4 w-auto" />
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: July 20, 2026</p>

        <div className="prose-custom space-y-8">
          <p className="text-muted leading-relaxed">
            Bluto (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted leading-relaxed mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong className="text-foreground">Account Information:</strong> Your name, email address, and profile details you provide during signup and onboarding.</li>
              <li><strong className="text-foreground">Conversations:</strong> Messages you send and receive within the app, which are used to provide personalized AI responses.</li>
              <li><strong className="text-foreground">Memory &amp; Preferences:</strong> Information the AI learns about you over time (interests, preferences, facts you share) to improve your experience.</li>
              <li><strong className="text-foreground">Usage Data:</strong> App interaction data such as features used, session duration, and crash reports to help us improve the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Provide and personalize AI-powered conversations and recommendations.</li>
              <li>Maintain the memory system so your companion remembers context across conversations.</li>
              <li>Send notifications and reminders you have opted into.</li>
              <li>Process payments and manage your account.</li>
              <li>Improve and maintain the quality and reliability of the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Storage &amp; Security</h2>
            <p className="text-muted leading-relaxed">
              Your data is stored securely using Supabase with encryption at rest and in transit. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p className="text-muted leading-relaxed mb-3">We use the following third-party services (data processors) to deliver core functionality. These providers process user data on our behalf strictly for the purposes described.</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong className="text-foreground">Supabase:</strong> Stores your account, conversations, notes, tasks, workouts, reminders, shopping lists, and other user content. Encryption at rest and in transit.</li>
              <li><strong className="text-foreground">Anthropic (Claude):</strong> Powers AI chat conversations, daily intelligence briefings, and workout AI features. Your chat messages and prompt context are sent to Anthropic&apos;s API for inference.</li>
              <li><strong className="text-foreground">OpenAI:</strong> Used for text embeddings (memory search), voice transcript parsing via GPT-4o-mini (e.g., turning a spoken workout into structured sets), and Whisper as a speech-to-text fallback.</li>
              <li><strong className="text-foreground">Sarvam AI:</strong> Primary speech-to-text provider (Saarika and Batch APIs) and text-to-speech for select Indic voices. India-hosted infrastructure.</li>
              <li><strong className="text-foreground">ElevenLabs:</strong> Primary text-to-speech provider for voice replies. Voice audio is generated per request and not persisted by us.</li>
              <li><strong className="text-foreground">DodoPayments:</strong> Payment processor and merchant of record for credit top-ups on bluto.co. We do not store payment card details.</li>
              <li><strong className="text-foreground">Autosend:</strong> Transactional email delivery (account verification, password reset, notifications you opt into).</li>
              <li><strong className="text-foreground">PostHog:</strong> Product analytics for feature usage and improvement. On iOS, PostHog only activates if you grant App Tracking Transparency permission. You can decline or opt out anytime from Settings.</li>
              <li><strong className="text-foreground">Sentry:</strong> Crash and performance error reporting so we can diagnose bugs.</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              <strong className="text-foreground">Voice data handling:</strong> Voice recordings are streamed to speech-to-text providers in-flight and are not persisted long-term on our servers. Transcripts (the text output) are retained as part of your chat history or module content.
            </p>
            <p className="text-muted leading-relaxed mt-3">
              Each provider has its own privacy policy. We do not sell, license, or share your data with any of them for their own purposes. We recommend reviewing their respective policies for details on their handling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Retention &amp; Deletion</h2>
            <p className="text-muted leading-relaxed">
              We retain your data for as long as your account is active. You can delete your account and all associated data at any time through Settings &rarr; Account &rarr; Delete Account. Upon deletion, all your personal data, conversations, and memories are permanently removed from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Data Sharing</h2>
            <p className="text-muted leading-relaxed">
              We do not sell, rent, or trade your personal data. We share data with the third-party services listed in Section 4 solely as necessary to provide the app&apos;s functionality (e.g., sending your messages to Anthropic for AI responses). These third-party services process your data under their own privacy policies, which we encourage you to review. We do not control and are not responsible for the privacy practices of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Children&apos;s Privacy</h2>
            <p className="text-muted leading-relaxed">
              Bluto is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child under 13, we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p className="text-muted leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy within the app. Your continued use of the app after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p className="text-muted leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@bluto.co" className="text-accent hover:text-accent-light transition-colors">
                support@bluto.co
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-card-border">
          <Link href="/" className="text-sm text-accent hover:text-accent-light transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </article>
    </div>
  );
}
