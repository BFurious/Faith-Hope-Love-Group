import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata, Viewport } from "next";
import FloatingSocialShareWrapper from "@/components/FloatingSocialShareWrapper";
import FloatingContactButton from "@/components/FloatingContactButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://faholog.com"),
  title: {
    default: "Faith Hope Love Group - Get Insurance Quote Now | Save 40% Today",
    template: "%s | Faith Hope Love Group Insurance",
  },
  description:
    "Don't let disaster destroy your life! Get complete insurance protection in 30 seconds.",
  keywords: [
    "insurance",
    "life insurance",
    "auto insurance",
    "home insurance",
    "health insurance",
    "cheap insurance",
    "best insurance rates",
    "insurance quotes",
    "Faith Hope Love group",
    "family protection",
    "insurance coverage",
  ],
  authors: [{ name: "Faith Hope Love Group" }],
  creator: "Faith Hope Love Group",
  publisher: "Faith Hope Love Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Insurance",
  classification: "Insurance Services",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faholog.com",
    siteName: "Faith Hope Love Group",
    title: "Faith Hope Love Group - #1 Rated Insurance Protection",
    description:
      "Don't let disaster destroy your life! Get complete insurance protection in 30 seconds.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faith Hope Love Group - Complete Insurance Protection",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@faholog", // Update with your actual Twitter handle
    creator: "@faholog", // Update with your actual Twitter handle
    title: "Faith Hope Love Group - #1 Rated Insurance Protection",
    description:
      "Don't let disaster destroy your life! Get complete insurance protection in 30 seconds.",
    images: ["/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code", // Get from Google Search Console
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code", // Get from Facebook Business Manager
    },
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#ffffff",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Faith Hope Love Group",
  url: "https://faholog.com",
  logo: "https://faholog.com/faith_logo.png", // Update with your actual logo path
  description:
    "Complete insurance protection for auto, home, life, health, and business.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "Georgia", // Add your state
    addressLocality: "Georgia", // Add your city
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-770-882-4899", // Your real phone number
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "US",
    email: "care@faholog.com", // Your real email
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50000",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    description: "Complete insurance coverage with instant quotes",
    priceValidUntil: "2024-12-31",
    availability: "https://schema.org/InStock",
  },
  // Only include social media profiles that actually exist
  sameAs: [
    // "https://facebook.com/faholog", // Uncomment when you have Facebook
    // "https://twitter.com/faholog", // Uncomment when you have Twitter
    // "https://linkedin.com/company/faholog", // Uncomment when you have LinkedIn
    // "https://instagram.com/faholog", // Uncomment when you have Instagram
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <div className="min-h-screen bg-white relative">
          {children}
          <FloatingSocialShareWrapper />
          <FloatingContactButton />
        </div>
      </body>
    </html>
  );
}
