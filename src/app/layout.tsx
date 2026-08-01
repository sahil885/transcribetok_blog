import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

const SITE_URL = "https://blog.transcribetok.com";
// Set NEXT_PUBLIC_GA_ID in Vercel → Settings → Environment Variables
// once you've created the GA4 property for blog.transcribetok.com.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const DEFAULT_OG = "/og-default.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TranscribeTok Blog — TikTok Transcript Guides & Tips",
    template: "%s | TranscribeTok Blog",
  },
  description:
    "Free guides on how to get TikTok transcripts, transcribe videos in bulk, use them with ChatGPT, and download them as TXT, DOCX or SRT. Powered by TranscribeTok.",
  keywords: [
    "tiktok transcript",
    "tiktok to text",
    "get tiktok transcript",
    "tiktok transcript generator",
    "transcribe tiktok video",
  ],
  authors: [{ name: "TranscribeTok Team" }],
  openGraph: {
    type: "website",
    siteName: "TranscribeTok Blog",
    locale: "en_US",
    images: [{ url: DEFAULT_OG, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@transcribetok",
    images: [DEFAULT_OG],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {/* Header */}
        <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg tracking-tight"
              style={{ color: "var(--brand)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .53.04.77.12v-3.2a5.76 5.76 0 0 0-.77-.05A5.72 5.72 0 0 0 4.14 15.3 5.72 5.72 0 0 0 9.86 21a5.72 5.72 0 0 0 5.72-5.72V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.26-1.48z" />
              </svg>
              TranscribeTok Blog
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Articles
              </Link>
              <a
                href="https://transcribetok.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="https://transcribetok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-1.5 rounded-full text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Get Transcript Free →
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 mt-20 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} TranscribeTok. Free TikTok transcript
              tool — 2 transcripts a day, no signup.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://transcribetok.com" className="hover:text-gray-900 transition-colors">
                Tool
              </a>
              <a href="https://transcribetok.com/pricing" className="hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="https://transcribetok.com/privacy" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="https://transcribetok.com/terms" className="hover:text-gray-900 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
