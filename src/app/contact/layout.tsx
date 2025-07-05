import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Faith Hope Love Agency',
    description: 'Get in touch with Faith Hope Love Agency for personalized insurance solutions. Contact us for a free consultation and expert guidance on your insurance needs.',
    openGraph: {
        title: 'Contact Us | Faith Hope Love Agency',
        description: 'Get in touch with Faith Hope Love Agency for personalized insurance solutions. Contact us for a free consultation and expert guidance on your insurance needs.',
        url: '/contact',
        type: 'article',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 