'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        id: '1',
        question: 'How do I get a quote for insurance coverage?',
        answer: 'Getting a quote is easy! You can either fill out our online form, call us at (555) 123-HOPE, or visit our office. We\'ll ask you a few questions about your needs and provide you with a personalized quote within 24 hours.'
    },
    {
        id: '2',
        question: 'What types of insurance do you offer?',
        answer: 'We offer comprehensive insurance solutions including Auto, Home, Life, Health, Business, and Travel insurance. Each policy is customizable to meet your specific needs and budget.'
    },
    {
        id: '3',
        question: 'How quickly are claims processed?',
        answer: 'We pride ourselves on fast claim processing. Most claims are reviewed within 24-48 hours of submission. Simple claims can often be resolved within a week.'
    },
    {
        id: '4',
        question: 'Can I manage my policy online?',
        answer: 'Yes! Our online portal allows you to view your policies, make payments, file claims, update your information, and download important documents 24/7.'
    }
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState<string[]>([])
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
                        <HelpCircle className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-sm font-medium">FAQ</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Common Questions{' '}
                        <span className="gradient-text">& Answers</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(faq.id)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openItems.includes(faq.id) ? (
                                        <Minus className="h-5 w-5 text-primary-600" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-primary-600" />
                                    )}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openItems.includes(faq.id) ? 'auto' : 0,
                                    opacity: openItems.includes(faq.id) ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 