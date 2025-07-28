'use client'

import { Shield, Phone, Mail, MessageSquare, Calculator, FileText, Headphones } from 'lucide-react'
import EnhancedCTA from './EnhancedCTA'

// Example usage of EnhancedCTA with email functionality
export default function EmailCTAExample() {
    const quoteRequestOptions = [
        {
            icon: Calculator,
            title: "Get Free Quote",
            description: "Get a personalized insurance quote in minutes. No obligation, just savings.",
            action: "Start Quote",
            color: "bg-gradient-to-br from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-white",
            type: "email" as const,
            emailData: {
                name: "Quote Request",
                email: "customer@example.com",
                phone: "",
                message: "I would like to get a free insurance quote. Please contact me with available options.",
                insuranceType: "Auto Insurance",
                bestTime: "Anytime"
            }
        },
        {
            icon: Phone,
            title: "Call Now",
            description: "Speak directly with our licensed insurance specialists.",
            action: "Call +1-770-882-4899",
            color: "bg-gradient-to-br from-green-500 to-green-600",
            bgColor: "bg-green-50",
            iconColor: "text-white",
            type: "phone" as const,
            target: "+1-770-882-4899"
        },
        {
            icon: MessageSquare,
            title: "Contact Form",
            description: "Fill out our detailed contact form for personalized assistance.",
            action: "Open Form",
            color: "bg-gradient-to-br from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-white",
            type: "form" as const
        }
    ]

    const supportOptions = [
        {
            icon: Headphones,
            title: "ASAP Emergency Support",
            description: "Get immediate assistance with your insurance questions.",
            action: "Contact Support",
            color: "bg-gradient-to-br from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-white",
            type: "email" as const,
            emailData: {
                name: "Support Request",
                email: "customer@example.com",
                phone: "",
                message: "I need support with my insurance policy. Please help me.",
                insuranceType: "",
                bestTime: "Anytime"
            }
        },
        {
            icon: FileText,
            title: "File a Claim",
            description: "Report a claim and get started on your recovery process.",
            action: "Start Claim",
            color: "bg-gradient-to-br from-red-500 to-red-600",
            bgColor: "bg-red-50",
            iconColor: "text-white",
            type: "email" as const,
            emailData: {
                name: "Claim Request",
                email: "customer@example.com",
                phone: "",
                message: "I need to file an insurance claim. Please guide me through the process.",
                insuranceType: "",
                bestTime: "Anytime"
            }
        }
    ]

    return (
        <div className="space-y-12">
            {/* Quote Request Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
                <EnhancedCTA options={quoteRequestOptions} delay={0.2} />
            </div>

            {/* Support Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
                <EnhancedCTA options={supportOptions} delay={0.4} />
            </div>
        </div>
    )
} 