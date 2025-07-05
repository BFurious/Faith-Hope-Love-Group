import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Client Testimonials | Faith Hope Love Agency',
    description: 'Read real stories from families and businesses who trust Faith Hope Love Agency for their insurance needs. Discover why we are the trusted choice for insurance solutions.',
    openGraph: {
        title: 'Client Testimonials | Faith Hope Love Agency',
        description: 'Read real stories from families and businesses who trust Faith Hope Love Agency for their insurance needs. Discover why we are the trusted choice for insurance solutions.',
        url: '/testimonials',
        type: 'article',
    },
}

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 