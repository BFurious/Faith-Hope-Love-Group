import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: false,
    variable: '--font-inter',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' }
    ],
}

export const metadata: Metadata = {
    metadataBase: new URL('https://hopefaithlovegroup.com'),
    title: {
        default: 'Hope Faith Love Group - #1 Rated Insurance Protection | Save 40% Today',
        template: '%s | Hope Faith Love Group Insurance'
    },
    description: 'Don\'t let disaster destroy your life! Get complete insurance protection in 30 seconds. 50K+ families protected. 99.9% claims approved. A+ BBB rated. Save up to 40% vs competitors.',
    keywords: [
        'insurance', 'life insurance', 'auto insurance', 'home insurance',
        'health insurance', 'business insurance', 'cheap insurance',
        'best insurance rates', 'insurance quotes', 'fast claims',
        'hope faith love group', 'family protection', 'insurance coverage'
    ],
    authors: [{ name: 'Hope Faith Love Group' }],
    creator: 'Hope Faith Love Group',
    publisher: 'Hope Faith Love Group',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    category: 'Insurance',
    classification: 'Insurance Services',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://hopefaithlovegroup.com',
        siteName: 'Hope Faith Love Group',
        title: 'Hope Faith Love Group - #1 Rated Insurance Protection',
        description: 'Don\'t let disaster destroy your life! Get complete insurance protection in 30 seconds. 99.9% claims approved.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Hope Faith Love Group - Complete Insurance Protection',
                type: 'image/jpeg',
            }
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@hopefaithlovegroup',
        creator: '@hopefaithlovegroup',
        title: 'Hope Faith Love Group - #1 Rated Insurance Protection',
        description: 'Don\'t let disaster destroy your life! Get complete insurance protection in 30 seconds.',
        images: ['/twitter-image.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
        other: {
            'facebook-domain-verification': 'your-facebook-verification-code',
        },
    },

    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'mobile-web-app-capable': 'yes',
        'msapplication-TileColor': '#2563eb',
        'theme-color': '#ffffff',
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Hope Faith Love Group",
    "url": "https://hopefaithlovegroup.com",
    "logo": "https://hopefaithlovegroup.com/logo.png",
    "description": "Complete insurance protection for auto, home, life, health, and business. A+ BBB rated with 99.9% claims approval rate.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-HOPE-FAITH",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "US"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50000",
        "bestRating": "5",
        "worstRating": "1"
    },
    "offers": {
        "@type": "Offer",
        "description": "Complete insurance coverage with instant quotes",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock"
    },
    "sameAs": [
        "https://facebook.com/hopefaithlovegroup",
        "https://twitter.com/hopefaithlovegroup",
        "https://linkedin.com/company/hopefaithlovegroup"
    ]
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//images.unsplash.com" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
            <body className={`${inter.className} antialiased`}>
                <div className="min-h-screen bg-white">
                    {children}
                </div>
            </body>
        </html>
    )
} 