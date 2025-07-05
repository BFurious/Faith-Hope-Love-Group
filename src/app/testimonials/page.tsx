'use client'

import Testimonials from '@/components/Testimonials'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
} 