import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentHeader } from "@/components/sections/shared";
import { ACCOUNT_SECURITY_LINKS } from "@/lib/account-security";

export const metadata: Metadata = {
  title: "Set up two-factor authentication | MYCURE",
  description: "A step-by-step MYCURE security guide with screenshots: install Google Authenticator, save backup codes, scan your setup code, and confirm two-factor authentication.",
  alternates: { canonical: "https://mycure.md/guides/two-factor-authentication" },
};

const sections = [
  { id: "before-you-start", title: "Before you start" },
  { id: "open-security-settings", title: "1. Open security settings" },
  { id: "confirm-password", title: "2. Confirm your password" },
  { id: "save-backup-codes", title: "3. Save your backup codes" },
  { id: "scan-and-verify", title: "4. Scan and verify" },
  { id: "check-enabled", title: "5. Check that it is enabled" },
  { id: "next-sign-in", title: "Your next sign-in" },
  { id: "troubleshooting", title: "Need help?" },
  { id: "why-two-factor", title: "Why two-factor authentication?" },
];

function Screenshot({ file, width, height, alt, caption }: {
  file: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mt-6">
      <Image
        src={`/guides/two-factor-authentication/${file}.webp`}
        width={width}
        height={height}
        alt={alt}
        sizes="(max-width: 768px) calc(100vw - 32px), 768px"
        className="h-auto max-w-full rounded-lg border bg-white"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-foreground/75">{caption}</figcaption>
    </figure>
  );
}

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
      {children}<ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function TwoFactorAuthenticationGuide() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <DocumentHeader />
      <main id="main-content" className="flex-1">
        <header className="border-b bg-muted/30">
          <div className="container px-4 py-12 sm:px-6 md:px-8 md:py-16">
            <Link href="/" className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm underline-offset-4 hover:underline">
              <ArrowLeft className="size-4" aria-hidden="true" />Back to MYCURE
            </Link>
            <div className="max-w-3xl">
              <ShieldCheck className="mb-5 size-9 text-foreground" aria-hidden="true" />
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Set up two-factor authentication</h1>
              <p className="mt-5 max-w-prose text-base leading-relaxed sm:text-lg">
                Add a code from your phone to your MYCURE password. Follow these steps to set up
                two-factor authentication (2FA) and help protect your account and patient records.
              </p>
            </div>
          </div>
        </header>

        <div className="container grid gap-12 px-4 py-10 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:py-14">
          <article className="min-w-0 max-w-3xl space-y-12 text-base leading-relaxed">
            <section id="before-you-start" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Before you start</h2>
              <p className="mt-3">Have your MYCURE password and phone ready. Install <strong>Google Authenticator</strong> from the official store listing for your device. Check that the publisher is <strong>Google LLC</strong>.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="min-h-11">
                  <a href={ACCOUNT_SECURITY_LINKS.appStore} target="_blank" rel="noopener noreferrer">App Store · iPhone / iPad<ExternalLink className="ml-2 size-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                </Button>
                <Button asChild variant="outline" className="min-h-11">
                  <a href={ACCOUNT_SECURITY_LINKS.googlePlay} target="_blank" rel="noopener noreferrer">Google Play · Android<ExternalLink className="ml-2 size-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-foreground/75">Other time-based one-time password (TOTP) authenticator apps work too. You are adding your MYCURE account to the app; you do not need to turn on Google Account two-step verification to follow this guide.</p>
              <p className="mt-5 border-t pt-5 text-sm text-foreground/75">The screenshots below show the actual MYCURE setup screens using a demo account. Private enrollment and backup-code regions are obscured. Never scan a code from a tutorial—use the code displayed in your own MYCURE session.</p>
            </section>

            <section id="open-security-settings" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">1. Open Login and Security</h2>
              <p className="mt-3">Sign in to MYCURE, then go to <strong>Settings → Account → Login and Security</strong>. Find the <strong>Two-Factor</strong> card and select <strong>Enable Two-Factor</strong>.</p>
              <p className="mt-3">If a required security setup dialog appears, its <strong>Set up two-factor</strong> button takes you to the same settings page.</p>
              <Screenshot file="01-security-settings" width={768} height={169} alt="MYCURE Two-Factor settings card with the Enable Two-Factor button." caption="Start with Enable Two-Factor in your own account settings." />
            </section>

            <section id="confirm-password" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">2. Confirm your MYCURE password</h2>
              <p className="mt-3">Enter your current MYCURE password in the dialog, then select <strong>Enable Two-Factor</strong>. This confirms that you are the person changing your account security.</p>
              <Screenshot file="02-confirm-password" width={512} height={222} alt="Two-Factor confirmation dialog with an empty Password field and Enable Two-Factor button." caption="Use your MYCURE password—not your phone passcode or Google Account password." />
            </section>

            <section id="save-backup-codes" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">3. Save your backup codes first</h2>
              <p className="mt-3">MYCURE shows your <strong>Backup Codes</strong> before the scanning screen. Select <strong>Copy all codes</strong> and save them privately in a password manager or another secure place you can access if you lose your phone. Then select <strong>Continue</strong>.</p>
              <p className="mt-3"><strong>Each backup code works only once.</strong> Do not share them, send them in chat, or leave them on a shared clinic computer.</p>
              <Screenshot file="03-save-backup-codes" width={512} height={406} alt="Backup Codes dialog with all code values obscured, plus Copy all codes and Continue buttons." caption="All backup codes are hidden in this screenshot. Save the real codes from your own account before continuing." />
            </section>

            <section id="scan-and-verify" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">4. Scan your setup code and verify</h2>
              <ol className="mt-3 list-decimal space-y-3 pl-6">
                <li>On your phone, open Google Authenticator. Tap <strong>+</strong> and choose the option to <strong>scan a quick response (QR) code</strong>.</li>
                <li>Point your phone at the QR code in your own MYCURE browser window. Use another screen for MYCURE if you are setting up on the same phone.</li>
                <li>Find the new MYCURE entry in Google Authenticator and enter its current <strong>6-digit code</strong> in the <strong>One-Time Password</strong> field.</li>
                <li>MYCURE may verify automatically after the sixth digit. If needed, select <strong>Verify code</strong> to finish.</li>
              </ol>
              <p className="mt-3">Leave <strong>Trust this device</strong> unchecked on shared or public devices.</p>
              <Screenshot file="04-scan-and-verify" width={398} height={471} alt="MYCURE authenticator setup form: obscured QR code, six-digit One-Time Password input, Trust this device checkbox, and Verify code button." caption="The private QR code is hidden here. Scan the code displayed in your own session, then enter the code from your authenticator app." />
            </section>

            <section id="check-enabled" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">5. Check that setup is complete</h2>
              <p className="mt-3">Return to <strong>Settings → Account → Login and Security</strong>. The Two-Factor card should now offer <strong>Disable Two-Factor</strong> instead of Enable Two-Factor. You do not need to select Disable—its presence confirms that the setting is on.</p>
              <p className="mt-3">After setup is confirmed, the required setup dialog will no longer appear when you return to the dashboard.</p>
              <Screenshot file="05-two-factor-enabled" width={768} height={169} alt="MYCURE Two-Factor card showing Disable Two-Factor, indicating that two-factor authentication is enabled." caption="Disable Two-Factor means the feature is already enabled. Leave it on." />
            </section>

            <section id="next-sign-in" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Your next sign-in</h2>
              <p className="mt-3">Sign in with your MYCURE email and password. When asked for a verification code, open Google Authenticator and enter the current code for your MYCURE account. Codes change regularly, so use the code currently shown—not an earlier one.</p>
              <p className="mt-3">Never share verification codes, setup codes, or backup codes with anyone, including someone claiming to provide support.</p>
            </section>

            <section id="troubleshooting" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Need help?</h2>
              <dl className="mt-4 space-y-6">
                <div><dt className="font-semibold">My code is not accepted.</dt><dd className="mt-1">Check that you selected the MYCURE entry in your authenticator. Wait for a fresh code and try again. Set your phone’s date and time to automatic.</dd></div>
                <div><dt className="font-semibold">I lost access to my phone.</dt><dd className="mt-1">Choose <strong>Forgot authenticator?</strong> on the verification screen and use an unused backup code. If you cannot recover access, contact your clinic administrator or MYCURE support. Do not send your password or codes.</dd></div>
                <div><dt className="font-semibold">I am setting up on the same phone.</dt><dd className="mt-1">Open MYCURE on a second device so you can scan its code with your phone. Do not send your private QR code to someone else to scan for you.</dd></div>
              </dl>
              <p className="mt-5"><SourceLink href="https://help.mycure.md/">MYCURE Help Center</SourceLink></p>
              <p><SourceLink href={ACCOUNT_SECURITY_LINKS.googleHelp}>Google Authenticator help</SourceLink></p>
            </section>

            <section id="why-two-factor" className="scroll-mt-24 border-t pt-8">
              <h2 className="text-2xl font-semibold tracking-tight">Why two-factor authentication?</h2>
              <p className="mt-3">National Privacy Commission (NPC) Circular No. 2023-06, Section 16 requires secure authentication for online access to sensitive personal information. It lists multi-factor authentication (MFA) as an example—not a specific one-time password (OTP) method. MYCURE uses two-factor authentication to help protect account access.</p>
              <p className="mt-4 text-sm"><SourceLink href={ACCOUNT_SECURITY_LINKS.npcCircular}>Read the circular (§16)</SourceLink></p>
              <p className="text-sm"><SourceLink href={ACCOUNT_SECURITY_LINKS.npcAnnouncement}>Official NPC announcement</SourceLink></p>
              <p className="mt-4 text-sm"><Link href="/security-overview" className="underline underline-offset-4">MYCURE Security Overview</Link></p>
            </section>
          </article>
          <aside className="hidden lg:block">
            <nav aria-label="Guide sections" className="sticky top-24 space-y-3 border-l pl-6">
              <h2 className="text-sm font-semibold">In this guide</h2>
              <ul className="text-sm">
                {sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="flex min-h-11 items-center py-2 leading-snug text-foreground/75 hover:text-foreground hover:underline">{section.title}</a></li>)}
              </ul>
            </nav>
          </aside>
        </div>
      </main>
    </div>
  );
}
