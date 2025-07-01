'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Shield,
    MessageCircle,
    CheckCircle
} from 'lucide-react'
import { useState } from 'react'
import type { ContactForm } from '@/types'

const contactInfo = [
    {
        icon: Phone,
        title: '24/7 Support Line',
        details: '(555) 123-HOPE (4673)',
        subtitle: 'Available for emergency claims'
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: 'info@hopefaithlovegroup.com',
        subtitle: 'Response within 2 hours'
    },
    {
        icon: MapPin,
        title: 'Visit Our Office',
        details: '123 Insurance Way, Suite 100',
        subtitle: 'Downtown Financial District'
    },
    {
        icon: Clock,
        title: 'Business Hours',
        details: 'Mon-Fri: 8AM-7PM',
        subtitle: 'Sat: 9AM-4PM, Sun: Closed'
    }
]

const services = [
    'Auto Insurance',
    'Home Insurance',
    'Life Insurance',
    'Health Insurance',
    'Business Insurance',
    'Travel Insurance',
    'General Inquiry'
]

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactForm>()

    const onSubmit = async (data: ContactForm) => {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Form submitted:', data)
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <section id="contact" className="section-padding bg-gray-50">
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
                        <MessageCircle className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Get{' '}
                        <span className="gradient-text">Protected?</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Contact us today for a free, no-obligation quote. Our experienced agents
                        are ready to help you find the perfect insurance solution.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 shadow-soft"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                            <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle className="h-16 w-16 text-accent-500 mx-auto mb-4" />
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                                <p className="text-gray-600">
                                    Your message has been sent successfully. We'll contact you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register('name', { required: 'Name is required' })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            {...register('phone', { required: 'Phone number is required' })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="(555) 123-4567"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Insurance Type
                                    </label>
                                    <select
                                        id="service"
                                        {...register('service', { required: 'Please select a service' })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">Select insurance type</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && (
                                        <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        {...register('message')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your insurance needs..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="grid gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <info.icon className="h-6 w-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                                            <p className="text-primary-600 font-medium">{info.details}</p>
                                            <p className="text-sm text-gray-500">{info.subtitle}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center"
                        >
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600">Interactive Map</p>
                                <p className="text-sm text-gray-500">123 Insurance Way, Suite 100</p>
                            </div>
                        </motion.div>

                        {/* Emergency Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 text-white"
                        >
                            <div className="flex items-center mb-4">
                                <Shield className="h-6 w-6 mr-3" />
                                <h4 className="font-bold">24/7 Emergency Claims</h4>
                            </div>
                            <p className="text-accent-100 mb-4">
                                Accidents happen anytime. Our emergency claims line is available 24/7
                                to help you when you need it most.
                            </p>
                            <a
                                href="tel:555-123-HELP"
                                className="inline-flex items-center bg-white text-accent-600 font-semibold px-4 py-2 rounded-lg hover:bg-accent-50 transition-colors duration-300"
                            >
                                <Phone className="h-4 w-4 mr-2" />
                                (555) 123-HELP
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 