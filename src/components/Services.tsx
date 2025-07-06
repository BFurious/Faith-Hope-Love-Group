'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Shield,
    Heart,
    Home,
    Car,
    Plane,
    FileText,
    Users,
    Building,
    CheckCircle,
    ArrowRight,
    Star,
    Award,
    Clock,
    Phone,
    Mail,
    MapPin
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const services = [
    {
        icon: Shield,
        title: 'Accident & Sickness Insurance',
        description: 'Comprehensive accident and sickness insurance plans designed to provide financial protection and peace of mind for individuals and families.',
        features: [
            'Individual and Family Accident Insurance Plans',
            'Short-Term Disability and Supplemental Health Insurance',
            'Affordable Care Act (ACA) Compliant Plans',
            'Medicare and Medicaid Assistance'
        ],
        color: 'primary'
    },
    {
        icon: Building,
        title: 'Property and Casualty Insurance',
        description: 'Tailored Property and Casualty (P&C) insurance solutions for both individuals and businesses to protect their assets and manage liability risks.',
        features: [
            'Homeowners, Renters & Condo Insurance',
            'Personal Auto Insurance',
            'Commercial Property Insurance',
            'General Liability & Commercial Auto'
        ],
        color: 'secondary'
    },
    {
        icon: Heart,
        title: 'Life Insurance',
        description: 'Comprehensive life insurance solutions designed to provide financial security and peace of mind for you and your loved ones.',
        features: [
            'Term Life Insurance',
            'Whole Life Insurance',
            'Universal Life Insurance',
            'Final Expense Insurance'
        ],
        color: 'accent'
    },
    {
        icon: FileText,
        title: 'Title Insurance',
        description: 'Comprehensive Title Insurance services to protect our clients during real estate transactions—whether buying, selling, or refinancing.',
        features: [
            'Title Search & Examination',
            'Owner\'s Title Insurance',
            'Lender\'s Title Insurance',
            'Closing Support & Problem Resolution'
        ],
        color: 'primary'
    },
    {
        icon: Plane,
        title: 'Travel Insurance',
        description: 'Travel Accident & Sickness Insurance and Travel Ticket Insurance to protect travelers from unexpected medical emergencies and travel-related risks.',
        features: [
            'Emergency Medical Coverage',
            'Trip Cancellation & Interruption',
            'Medical Evacuation & Repatriation',
            '24/7 Emergency Assistance'
        ],
        color: 'secondary'
    },
    {
        icon: Users,
        title: 'Medicare Plans',
        description: 'We take the confusion out of Medicare with comprehensive guidance and plan selection for Medicare Advantage, Supplement, and Prescription Drug Plans.',
        features: [
            'Medicare Advantage (Part C)',
            'Medicare Supplement (Medigap)',
            'Prescription Drug Plans (Part D)',
            'Annual Plan Reviews & Comparisons'
        ],
        color: 'accent'
    }
]

const benefits = [
    {
        icon: Shield,
        title: 'Comprehensive Protection',
        description: 'Complete coverage solutions for all aspects of your life and business'
    },
    {
        icon: Star,
        title: 'Expert Guidance',
        description: 'Licensed professionals with years of experience in insurance'
    },
    {
        icon: Heart,
        title: 'Personalized Service',
        description: 'Custom solutions tailored to your unique needs and budget'
    },
    {
        icon: Award,
        title: 'Trusted Partners',
        description: 'Working with top-rated carriers to provide the best coverage'
    }
]

const contactInfo = [
    {
        icon: Phone,
        title: 'Call Us',
        value: '770-882-4899',
        description: 'Speak with a licensed specialist'
    },
    {
        icon: Mail,
        title: 'Email Us',
        value: 'faithopelovegroup@gmail.com',
        description: 'Get a quick response'
    },
    {
        icon: MapPin,
        title: 'Georgia Licensed',
        value: 'Serving Georgia Residents',
        description: 'Local expertise and support'
    }
]

interface ServicesProps {
    showLimited?: boolean
}

export default function Services({ showLimited = false }: ServicesProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
                        <Shield className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-sm font-medium">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Comprehensive{' '}
                        <span className="gradient-text">Insurance Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Faith Hope Love Group Agency offers a complete range of insurance products and services
                        designed to protect what matters most to you and your family.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {(showLimited ? services.slice(0, 5) : services).map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-gray-100 flex flex-col">
                                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${service.color === 'primary' ? 'bg-primary-100' :
                                        service.color === 'secondary' ? 'bg-secondary-100' : 'bg-accent-100'
                                        }`}>
                                        <IconComponent className={`h-8 w-8 ${service.color === 'primary' ? 'text-primary-600' :
                                            service.color === 'secondary' ? 'text-secondary-600' : 'text-accent-600'
                                            }`} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className={`inline-flex items-center gap-2 font-semibold transition-colors duration-300 mt-auto ${service.color === 'primary' ? 'text-primary-600 hover:text-primary-700' :
                                            service.color === 'secondary' ? 'text-secondary-600 hover:text-secondary-700' :
                                                'text-accent-600 hover:text-accent-700'
                                            }`}
                                    >
                                        Learn More
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}

                    {/* Explore More Card - only show when limited */}
                    {showLimited && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="group"
                        >
                            <Link href="/services">
                                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-primary-200 flex flex-col items-center justify-center text-white text-center group-hover:scale-105">
                                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                                        <ArrowRight className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                                        Explore More Services
                                    </h3>
                                    <p className="text-primary-100 mb-6 leading-relaxed">
                                        Discover our complete range of insurance solutions and specialized services designed to protect what matters most.
                                    </p>
                                    <div className="inline-flex items-center gap-2 font-semibold transition-colors duration-300 mt-auto">
                                        View All Services
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 text-white mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Faith Hope Love Group?
                        </h3>
                        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                            We're committed to providing exceptional service and comprehensive protection
                            that fits your unique needs and budget.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                                    <p className="text-primary-100 text-sm">{benefit.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 