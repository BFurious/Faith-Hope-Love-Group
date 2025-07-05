import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Legal Disclaimer | Faith Hope Love Agency',
    description: 'Important legal disclaimers and compliance information for Faith Hope Love Agency. Read about our insurance products, coverage limitations, and legal requirements.',
    openGraph: {
        title: 'Legal Disclaimer | Faith Hope Love Agency',
        description: 'Important legal disclaimers and compliance information for Faith Hope Love Agency. Read about our insurance products, coverage limitations, and legal requirements.',
        url: '/disclaimer',
        type: 'article',
    },
}

export default function DisclaimerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 