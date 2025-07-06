'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Mail, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'
import { emailService, EmailData } from '@/lib/emailService'

interface CTAOption {
    icon: any
    title: string
    description: string
    action: string
    color: string
    bgColor: string
    iconColor: string
    type: 'email' | 'phone' | 'form' | 'link'
    target?: string
    emailData?: Partial<EmailData>
}

interface EnhancedCTAProps {
    options: CTAOption[]
    delay?: number
}

export default function EnhancedCTA({ options, delay = 0 }: EnhancedCTAProps) {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
    const [successStates, setSuccessStates] = useState<Record<string, boolean>>({})
    const [errorStates, setErrorStates] = useState<Record<string, string>>({})

    const handleAction = async (option: CTAOption) => {
        if (option.type === 'email' && option.emailData) {
            setLoadingStates(prev => ({ ...prev, [option.title]: true }))
            setErrorStates(prev => ({ ...prev, [option.title]: '' }))

            try {
                const response = await emailService.sendContactEmail(option.emailData as EmailData)

                if (response.success) {
                    setSuccessStates(prev => ({ ...prev, [option.title]: true }))
                    setTimeout(() => {
                        setSuccessStates(prev => ({ ...prev, [option.title]: false }))
                    }, 3000)
                } else {
                    setErrorStates(prev => ({ ...prev, [option.title]: response.error || 'Failed to send email' }))
                }
            } catch (error: any) {
                setErrorStates(prev => ({ ...prev, [option.title]: error.message }))
            } finally {
                setLoadingStates(prev => ({ ...prev, [option.title]: false }))
            }
        } else if (option.type === 'phone' && option.target) {
            window.location.href = emailService.getPhoneCallLink(option.target)
        } else if (option.type === 'link' && option.target) {
            window.open(option.target, '_blank')
        }
    }

    return (
        <div className="space-y-4">
            {options.map((option, index) => (
                <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: delay + index * 0.1 }}
                    className={`${option.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                    onClick={() => handleAction(option)}
                >
                    {/* Success overlay */}
                    {successStates[option.title] && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-green-500/90 flex items-center justify-center z-10"
                        >
                            <div className="text-center text-white">
                                <CheckCircle2 className="h-8 w-8 mx-auto mb-2" />
                                <p className="font-semibold">Success!</p>
                                <p className="text-sm">We'll get back to you soon</p>
                            </div>
                        </motion.div>
                    )}

                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-4">
                                <div className={`inline-flex items-center justify-center w-12 h-12 ${option.color} rounded-xl shadow-lg mr-4`}>
                                    {loadingStates[option.title] ? (
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <option.icon className={`h-6 w-6 ${option.iconColor}`} />
                                    )}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900">{option.title}</h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {option.description}
                            </p>

                            {/* Error message */}
                            {errorStates[option.title] && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center text-red-600 text-sm mb-3"
                                >
                                    <AlertCircle className="h-4 w-4 mr-2" />
                                    {errorStates[option.title]}
                                </motion.div>
                            )}

                            <button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-1"
                                disabled={loadingStates[option.title]}
                            >
                                {loadingStates[option.title] ? 'Processing...' : option.action}
                                {!loadingStates[option.title] && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                            </button>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                            <div className={`w-8 h-8 ${option.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                {option.type === 'email' ? (
                                    <Mail className="h-4 w-4 text-white" />
                                ) : option.type === 'phone' ? (
                                    <Phone className="h-4 w-4 text-white" />
                                ) : (
                                    <ExternalLink className="h-4 w-4 text-white" />
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
} 