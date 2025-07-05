import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Faith Hope Love Agency',
    description: 'Learn about Faith Hope Love Agency, a Georgia-based insurance agency founded on compassion, service, and integrity. Discover our mission, values, and the wide range of insurance services we offer.',
    openGraph: {
        title: 'About Us | Faith Hope Love Agency',
        description: 'Learn about Faith Hope Love Agency, a Georgia-based insurance agency founded on compassion, service, and integrity. Discover our mission, values, and the wide range of insurance services we offer.',
        url: '/about',
        type: 'article',
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 