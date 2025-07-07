'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Shield,
    Star,
    CheckCircle2,
    Quote,
    Calendar,
    UserCheck,
    Clock,
    Award,
    Heart,
    Zap,
    ArrowRight,
    ExternalLink
} from 'lucide-react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import CTACards from './CTACards'
import { STATS } from './Hero'

// Constants
const CONTACT_INFO = [
    {
        icon: Phone,
        title: 'Call Today',
        details: '+1-770-882-4899',
        subtitle: 'Speak with a licensed insurance specialist',
        action: 'Call Now',
        type: 'phone' as const
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: 'faithopelovegroup@gmail.com',
        subtitle: 'kossilife@gmail.com',
        action: 'Send Email',
        type: 'email' as const
    },
    {
        icon: MapPin,
        title: 'Georgia-Based',
        details: 'Licensed Insurance Agent',
        subtitle: 'Serving Georgia residents',
        action: 'Learn More',
        type: 'map' as const
    }
]

const CTA_OPTIONS = [
    {
        icon: Quote,
        title: 'Get a Free Insurance Quote Today',
        description: 'Protect what matters most. Use our secure form to request a no-obligation quote in minutes. Our licensed agent will help you compare your options and find the coverage that fits your needs and budget.',
        action: 'Start My Free Quote',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600'
    },
    {
        icon: Calendar,
        title: 'Schedule a Personalized Consultation',
        description: 'Have questions about your insurance options? Book a free, one-on-one consultation with one of our trusted advisors. We\'re here to help you navigate your coverage choices and make informed decisions.',
        action: 'Book My Consultation',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600'
    },
    {
        icon: UserCheck,
        title: 'Speak with a Licensed Insurance Specialist',
        description: 'Our Georgia-based agent are standing by to help you find the right protection. Call us today or click below to get started with expert advice tailored to your situation.',
        action: 'Protect My Family Today',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600'
    }
]

const BENEFITS = [
    'No-obligation quotes',
    'Licensed Georgia agent',
    'Personalized coverage',
    'Competitive rates'
]

const INSURANCE_TYPES = [
    { name: 'Auto Insurance', icon: '🚗', description: 'Comprehensive coverage for your vehicle' },
    { name: 'Home Insurance', icon: '🏠', description: 'Protect your home and belongings' },
    { name: 'Life Insurance', icon: '💝', description: 'Secure your family\'s future' },
    { name: 'Health Insurance', icon: '🏥', description: 'Comprehensive health coverage' },
    { name: 'Business Insurance', icon: '🏢', description: 'Protect your business assets' },
    { name: 'Travel Insurance', icon: '✈️', description: 'Safe travels with peace of mind' }
]



// Reusable Components
const BackgroundElements = () => (
    <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-5 blur-3xl" />
    </div>
)

const AnimatedStatCard = ({ stat, index, inView }: { stat: typeof STATS[0], index: number, inView: boolean }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 text-center"
    >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 shadow-lg">
            <stat.icon className="h-6 w-6 text-white" />
        </div>
        <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
        <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
    </motion.div>
)

const AnimatedInsuranceTypeCard = ({ type, index, inView }: { type: typeof INSURANCE_TYPES[0], index: number, inView: boolean }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
    >
        <div className="text-3xl mb-3">{type.icon}</div>
        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {type.name}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">
            {type.description}
        </p>
    </motion.div>
)

const AnimatedBenefitItem = ({ benefit, index, inView }: { benefit: string, index: number, inView: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
        className="flex items-start space-x-4"
    >
        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-1">{benefit}</h4>
            <p className="text-sm text-gray-600">
                Experience the difference with our dedicated team and comprehensive coverage options.
            </p>
        </div>
    </motion.div>
)

export default function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <BackgroundElements />

            <div className="container-custom relative z-10">
                {/* Enhanced Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-8 shadow-lg"
                    >
                        <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-700 text-base font-semibold">
                            Let's Find Your Coverage
                        </span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                        Ready to Get{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Protected?
                        </span>
                    </h1>

                    <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Start your journey with Faith Hope Love Group. Our Georgia-based agent are here to help you find the right protection.
                    </p>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {STATS.map((stat, index) => (
                            <AnimatedStatCard key={stat.label} stat={stat} index={index} inView={inView} />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form - Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="lg:col-span-1 w-full"
                    >
                        <ContactForm
                            title="Get Your Free Quote"
                            subtitle="Fill out the form below and we'll get back to you within 24 hours."
                            submitButtonText="Start My Free Quote"
                        />
                    </motion.div>

                    {/* Right Column - Two Sections */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="lg:col-span-1 w-full space-y-8"
                    >
                        {/* Contact Cards */}
                        <ContactInfo
                            items={CONTACT_INFO}
                            delay={1.6}
                        />

                        {/* CTA Options */}
                        <CTACards
                            options={CTA_OPTIONS}
                            delay={1.4}
                        />
                    </motion.div>
                </div>

                {/* Additional Sections */}
                <div className="mt-20 space-y-16">
                    {/* Insurance Types Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Insurance Types We Cover</h3>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                            Comprehensive coverage options tailored to your specific needs and lifestyle.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {INSURANCE_TYPES.map((type, index) => (
                                <AnimatedInsuranceTypeCard key={type.name} type={type} index={index} inView={inView} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 2.4 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Faith Hope Love Group?</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We're committed to providing exceptional service and comprehensive coverage that gives you peace of mind.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {BENEFITS.map((benefit, index) => (
                                <AnimatedBenefitItem key={benefit} benefit={benefit} index={index} inView={inView} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
} 