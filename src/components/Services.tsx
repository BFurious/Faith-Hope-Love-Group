'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Car,
    Home,
    Heart,
    Shield,
    Building,
    Plane,
    ArrowRight,
    Check
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
    {
        id: 'auto',
        title: 'Auto Insurance',
        description: 'Comprehensive coverage for your vehicle with competitive rates and 24/7 roadside assistance.',
        icon: Car,
        color: 'bg-blue-500',
        features: [
            'Collision & Comprehensive Coverage',
            '24/7 Roadside Assistance',
            'Glass Repair & Replacement',
            'Rental Car Coverage'
        ],
        popular: true
    },
    {
        id: 'home',
        title: 'Home Insurance',
        description: 'Protect your home and belongings with customizable coverage options and fast claim processing.',
        icon: Home,
        color: 'bg-green-500',
        features: [
            'Dwelling & Personal Property',
            'Liability Protection',
            'Additional Living Expenses',
            'Natural Disaster Coverage'
        ],
        popular: false
    },
    {
        id: 'life',
        title: 'Life Insurance',
        description: 'Secure your family\'s financial future with term and whole life insurance options.',
        icon: Heart,
        color: 'bg-red-500',
        features: [
            'Term & Whole Life Options',
            'Accelerated Death Benefits',
            'Cash Value Accumulation',
            'Flexible Premium Payments'
        ],
        popular: false
    },
    {
        id: 'health',
        title: 'Health Insurance',
        description: 'Comprehensive health coverage with access to top medical providers and specialists.',
        icon: Shield,
        color: 'bg-purple-500',
        features: [
            'Preventive Care Coverage',
            'Prescription Drug Benefits',
            'Mental Health Services',
            'Telehealth Options'
        ],
        popular: false
    },
    {
        id: 'business',
        title: 'Business Insurance',
        description: 'Protect your business with liability, property, and workers\' compensation coverage.',
        icon: Building,
        color: 'bg-orange-500',
        features: [
            'General Liability',
            'Property Coverage',
            'Workers\' Compensation',
            'Business Interruption'
        ],
        popular: false
    },
    {
        id: 'travel',
        title: 'Travel Insurance',
        description: 'Travel with confidence knowing you\'re protected against unexpected events worldwide.',
        icon: Plane,
        color: 'bg-teal-500',
        features: [
            'Trip Cancellation',
            'Medical Emergency Coverage',
            'Baggage Protection',
            'Emergency Evacuation'
        ],
        popular: false
    }
]

export default function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center px-3 md:px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-4 md:mb-6">
                        <Shield className="h-3 w-3 md:h-4 md:w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-xs md:text-sm font-medium">
                            Complete Protection Solutions
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                        Insurance Services Tailored{' '}
                        <span className="gradient-text">For You</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        From auto to business insurance, we offer comprehensive coverage options
                        designed to protect what matters most to you and your family.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {service.popular && (
                                <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-secondary-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium z-10">
                                    Most Popular
                                </div>
                            )}

                            <div className={cn(
                                "bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-large transition-all duration-300 h-full",
                                "border border-gray-100 hover:border-primary-200",
                                "transform hover:scale-105"
                            )}>
                                {/* Icon */}
                                <div className="relative mb-4 md:mb-6">
                                    <div className={cn(
                                        "inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl text-white",
                                        service.color
                                    )}>
                                        <service.icon className="h-6 w-6 md:h-8 md:w-8" />
                                    </div>
                                    <div className={cn(
                                        "absolute inset-0 rounded-xl md:rounded-2xl blur-lg opacity-30",
                                        service.color
                                    )} />
                                </div>

                                {/* Content */}
                                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                                            <Check className="h-3 w-3 md:h-4 md:w-4 text-accent-500 mr-2 md:mr-3 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="group w-full flex items-center justify-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 text-sm md:text-base">
                                    Learn More
                                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12 md:mt-16 mx-4 lg:mx-0"
                >
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                            Need a Custom Insurance Solution?
                        </h3>
                        <p className="text-lg md:text-xl text-primary-100 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Our expert agents will work with you to create a personalized insurance package
                            that fits your unique needs and budget.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <a
                                href="#contact"
                                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                            >
                                Get Custom Quote
                            </a>
                            <a
                                href="tel:555-123-HOPE"
                                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 text-sm md:text-base"
                            >
                                Call Now: (555) 123-HOPE
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 