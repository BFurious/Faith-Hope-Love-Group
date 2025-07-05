import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Faith Hope Love Agency',
    description: 'Find answers to common questions about insurance coverage, claims, policies, and our services. Get expert guidance from Faith Hope Love Agency.',
    openGraph: {
        title: 'Frequently Asked Questions | Faith Hope Love Agency',
        description: 'Find answers to common questions about insurance coverage, claims, policies, and our services. Get expert guidance from Faith Hope Love Agency.',
        url: '/faq',
        type: 'article',
    },
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 