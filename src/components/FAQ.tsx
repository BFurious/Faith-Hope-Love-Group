'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Shield, Heart, Users, FileText, Plane, UserCheck, Briefcase } from 'lucide-react'

const faqCategories = [
    {
        title: 'General Agency FAQs',
        icon: HelpCircle,
        questions: [
            {
                question: 'What is an insurance agency?',
                answer: 'An insurance agency represents one or more insurers and offers policies to clients, helping them choose coverage that fits their needs.'
            },
            {
                question: 'Do I need a license to operate an insurance agency?',
                answer: 'Yes, each state requires agent and agencies to be licensed for specific lines of insurance.'
            },
            {
                question: 'Can one agency sell multiple types of insurance?',
                answer: 'Yes, with proper licensing, an agency can offer various lines such as life, property, casualty, and travel insurance.'
            }
        ]
    },
    {
        title: 'Accident & Sickness Insurance',
        icon: Heart,
        questions: [
            {
                question: 'What does Accident & Sickness insurance cover?',
                answer: 'It typically covers medical expenses, hospital stays, and sometimes loss of income due to accidents or illnesses.'
            },
            {
                question: 'Is Accident & Sickness insurance different from Health insurance?',
                answer: 'Yes, it\'s usually a more limited, short-term policy focused on specific incidents.'
            },
            {
                question: 'Can businesses offer this to employees?',
                answer: 'Yes, many agencies provide group accident & sickness policies for employers.'
            }
        ]
    },
    {
        title: 'Casualty Insurance',
        icon: Shield,
        questions: [
            {
                question: 'What does Casualty insurance include?',
                answer: 'Casualty insurance generally covers liability for damages to other people or property, including auto, workers\' comp, and general liability.'
            },
            {
                question: 'Is casualty insurance required by law?',
                answer: 'In many cases, yes—especially auto liability and workers\' compensation.'
            },
            {
                question: 'What businesses benefit most from casualty insurance?',
                answer: 'Construction, transportation, and service-based businesses often require strong casualty coverage.'
            }
        ]
    },
    {
        title: 'Life Insurance',
        icon: Users,
        questions: [
            {
                question: 'What types of life insurance are offered?',
                answer: 'Agencies offer term life, whole life, universal life, and variable life policies.'
            },
            {
                question: 'Can life insurance be bundled with other types of insurance?',
                answer: 'It depends on the insurer, but some offer packages or discounts when bundling with health or property insurance.'
            },
            {
                question: 'Do life insurance policies require medical exams?',
                answer: 'Some do, while others offer no-exam policies with limited coverage amounts.'
            }
        ]
    },
    {
        title: 'Property Insurance',
        icon: Briefcase,
        questions: [
            {
                question: 'What is typically covered under property insurance?',
                answer: 'It includes damage to buildings, contents, and sometimes loss of income due to covered events like fire or theft.'
            },
            {
                question: 'Can property insurance cover natural disasters?',
                answer: 'Standard policies may exclude events like floods or earthquakes, which require add-ons.'
            },
            {
                question: 'Is commercial property insurance different from homeowners insurance?',
                answer: 'Yes, commercial policies are tailored to business operations and risks.'
            }
        ]
    },
    {
        title: 'Title Insurance',
        icon: FileText,
        questions: [
            {
                question: 'What is title insurance used for?',
                answer: 'It protects property buyers and lenders against losses due to disputes over property ownership or title defects.'
            },
            {
                question: 'Is title insurance required for real estate transactions?',
                answer: 'While not legally required, it\'s typically mandatory for mortgage financing.'
            }
        ]
    },
    {
        title: 'Travel Accident & Sickness Insurance',
        icon: Plane,
        questions: [
            {
                question: 'What does travel accident & sickness insurance cover?',
                answer: 'It covers emergency medical expenses, accidental death, and trip interruption due to health issues during travel.'
            },
            {
                question: 'Is this insurance valid internationally?',
                answer: 'Yes, most policies are designed for international travel, but coverage can vary by region.'
            }
        ]
    },
    {
        title: 'Travel Ticket Insurance',
        icon: UserCheck,
        questions: [
            {
                question: 'What is travel ticket insurance?',
                answer: 'It reimburses non-refundable travel costs if a trip is canceled or interrupted due to covered reasons like illness, emergencies, or severe weather.'
            }
        ]
    }
]

export default function FAQ() {
    const [openCategory, setOpenCategory] = useState<string | null>('General Agency FAQs')
    const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set())

    const toggleCategory = (categoryTitle: string) => {
        setOpenCategory(openCategory === categoryTitle ? null : categoryTitle)
    }

    const toggleQuestion = (questionText: string) => {
        const newOpenQuestions = new Set(openQuestions)
        if (newOpenQuestions.has(questionText)) {
            newOpenQuestions.delete(questionText)
        } else {
            newOpenQuestions.add(questionText)
        }
        setOpenQuestions(newOpenQuestions)
    }

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
                        <HelpCircle className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-sm font-medium">
                            Frequently Asked Questions
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                        Got <span className="gradient-text">Questions?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Find answers to common questions about our insurance services, coverage options, and how we can help protect what matters most to you.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 md:space-y-6">
                        {faqCategories.map((category, categoryIndex) => {
                            const IconComponent = category.icon
                            return (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                    className="bg-white rounded-2xl border border-gray-200 shadow-soft overflow-hidden"
                                >
                                    {/* Category Header */}
                                    <button
                                        onClick={() => toggleCategory(category.title)}
                                        className="w-full px-6 md:px-8 py-4 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg">
                                                <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <ChevronDown
                                            className={`h-5 w-5 md:h-6 md:w-6 text-gray-500 transition-transform duration-300 ${openCategory === category.title ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Category Questions */}
                                    <AnimatePresence>
                                        {openCategory === category.title && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-gray-100"
                                            >
                                                <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                                                    {category.questions.map((item, questionIndex) => (
                                                        <motion.div
                                                            key={item.question}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.5, delay: questionIndex * 0.1 }}
                                                            className="border border-gray-100 rounded-xl overflow-hidden"
                                                        >
                                                            <button
                                                                onClick={() => toggleQuestion(item.question)}
                                                                className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                                                            >
                                                                <h4 className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                                                                    {item.question}
                                                                </h4>
                                                                <ChevronDown
                                                                    className={`h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openQuestions.has(item.question) ? 'rotate-180' : ''
                                                                        }`}
                                                                />
                                                            </button>
                                                            <AnimatePresence>
                                                                {openQuestions.has(item.question) && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="border-t border-gray-100"
                                                                    >
                                                                        <div className="px-4 md:px-6 py-4 md:py-5">
                                                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                                                {item.answer}
                                                                            </p>
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-center mt-12 md:mt-16"
                    >
                        <div className="bg-primary-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mx-4 lg:mx-0">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                                Still Have Questions?
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                                Our insurance experts are here to help you find the perfect coverage for your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                <a href="/contact" className="btn-primary text-sm md:text-base">
                                    Contact Our Experts
                                </a>
                                <a href="/services" className="btn-secondary text-sm md:text-base">
                                    Explore Our Services
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 