'use client'

import InsuranceGlossary from '@/components/InsuranceGlossary'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GlossaryPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <InsuranceGlossary />
            </main>
            <Footer />
        </div>
    )
} 