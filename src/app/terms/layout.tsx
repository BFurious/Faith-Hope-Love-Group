import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Use and Privacy Policy | Faith Hope Love Agency',
    description: 'Read our comprehensive Terms of Use and Privacy Policy. Learn about your rights, our data practices, insurance services, and legal obligations when using our website.',
    openGraph: {
        title: 'Terms of Use and Privacy Policy | Faith Hope Love Agency',
        description: 'Read our comprehensive Terms of Use and Privacy Policy. Learn about your rights, our data practices, insurance services, and legal obligations when using our website.',
        url: '/terms',
        type: 'article',
    },
}

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 