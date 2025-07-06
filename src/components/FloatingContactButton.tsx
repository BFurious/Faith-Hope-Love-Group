'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Phone, Mail, X, ChevronUp } from 'lucide-react'
import { emailService } from '@/lib/emailService'

export default function FloatingContactButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeAction, setActiveAction] = useState<string | null>(null)

    const contactOptions = [
        {
            id: 'phone',
            icon: Phone,
            label: 'Call Us',
            action: () => {
                window.location.href = emailService.getPhoneCallLink('770-882-4899')
            },
            color: 'bg-green-500',
            hoverColor: 'hover:bg-green-600'
        },
        {
            id: 'email',
            icon: Mail,
            label: 'Email Us',
            action: () => {
                window.location.href = emailService.getDirectEmailLink(
                    'faithopelovegroup@gmail.com',
                    'Inquiry from Faith Hope Love Group Website',
                    'Hello, I would like to learn more about your insurance services.'
                )
            },
            color: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            id: 'form',
            icon: MessageSquare,
            label: 'Contact Form',
            action: () => {
                const contactForm = document.getElementById('contact-form')
                if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' })
                } else {
                    // Fallback to contact page
                    window.location.href = '/contact'
                }
                setIsOpen(false)
            },
            color: 'bg-purple-500',
            hoverColor: 'hover:bg-purple-600'
        }
    ]

    const handleOptionClick = (option: typeof contactOptions[0]) => {
        setActiveAction(option.id)
        option.action()

        // Reset active action after animation
        setTimeout(() => setActiveAction(null), 1000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Contact Options */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 right-0 space-y-3"
                    >
                        {contactOptions.map((option, index) => (
                            <motion.button
                                key={option.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleOptionClick(option)}
                                className={`${option.color} ${option.hoverColor} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2 min-w-[140px]`}
                            >
                                <option.icon className="h-5 w-5" />
                                <span className="text-sm font-medium">{option.label}</span>
                                {activeAction === option.id && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="ml-auto"
                                    >
                                        <ChevronUp className="h-4 w-4" />
                                    </motion.div>
                                )}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare className="h-6 w-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Tooltip */}
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
                >
                    Need help? Contact us!
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </motion.div>
            )}
        </div>
    )
} 