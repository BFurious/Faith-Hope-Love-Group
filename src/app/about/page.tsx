'use client'

import { Shield, Heart, Users, Award, CheckCircle, Globe, Briefcase, MapPin, FileText, Plane, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const insuranceTypes = [
    { icon: Shield, label: 'Life Insurance' },
    { icon: Heart, label: 'Accident & Sickness' },
    { icon: Briefcase, label: 'Property & Casualty' },
    { icon: FileText, label: 'Title Insurance' },
    { icon: Plane, label: 'Travel Insurance' },
    { icon: UserCheck, label: 'Travel Ticket Insurance' },
]

const values = [
    {
        icon: Heart,
        title: 'Compassion',
        description: 'We treat every client like family, with empathy and genuine care.'
    },
    {
        icon: CheckCircle,
        title: 'Integrity',
        description: 'We operate with honesty, transparency, and your best interests at heart.'
    },
    {
        icon: Users,
        title: 'Service',
        description: 'We go above and beyond to support you at every step.'
    }
]

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <section id="about" className="section-padding bg-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-12 md:mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
                                <Shield className="h-4 w-4 text-primary-600 mr-2" />
                                <span className="text-primary-700 text-sm font-medium">
                                    About Our Company
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                                About <span className="gradient-text">Faith Hope Love Agency</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                                Welcome to Faith Hope Love Agency, and thank you for visiting our homepage! We are a proudly Georgia-based insurance agency, fully admitted and authorized to operate in the State of Georgia. Our agency is licensed across a wide range of insurance categories, including:
                            </p>
                        </motion.div>

                        {/* Insurance Types Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4 mb-10"
                        >
                            {insuranceTypes.map((type) => {
                                const IconComponent = type.icon;
                                return (
                                    <div key={type.label} className="flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 shadow-soft">
                                        <IconComponent className="h-5 w-5 text-primary-600" />
                                        <span className="text-primary-800 text-sm font-semibold">{type.label}</span>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Agency Mission & Values */}
                        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="space-y-6 md:space-y-8 px-4 lg:px-0"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Our Mission & Principles
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    Faith Hope Love Agency was founded on the principles of <span className="font-semibold text-primary-700">compassion, service, and integrity</span>. We believe that everyone—whether an individual, family, or small business owner—deserves access to quality insurance options that are both affordable and easy to understand.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    Our team is passionate about helping people find protection from life's uncertainties, such as illness, injury, property loss, or unexpected travel disruptions. We take pride in being a trusted partner for our clients as they navigate some of life's most important decisions.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="space-y-6 md:space-y-8 px-4 lg:px-0"
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                    Why Choose Us?
                                </h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                        <span className="text-gray-700 text-base">Licensed & authorized in Georgia</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                        <span className="text-gray-700 text-base">All major insurance lines covered</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                        <span className="text-gray-700 text-base">Personalized, educational approach</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                        <span className="text-gray-700 text-base">Long-term relationships & claims support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                        <span className="text-gray-700 text-base">Backed by established insurance carriers</span>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-2 mt-6">
                                    <MapPin className="h-5 w-5 text-primary-600" />
                                    <span className="text-primary-800 font-semibold">Proudly Georgia-based</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Our Core Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mx-4 lg:mx-0 text-center mb-16"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                                Our Core Values
                            </h2>
                            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
                                {values.map((value) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <div key={value.title} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                                                <IconComponent className="h-8 w-8 text-primary-600" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                            <p className="text-gray-700 text-base">{value.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Approach & Relationship Focus */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-primary-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mx-4 lg:mx-0 text-center"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                                Our Approach: Education & Empowerment
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
                                We strive to remove the confusion and stress that often comes with choosing coverage by clearly explaining your options and tailoring recommendations to your needs and budget. Whether you're self-employed, between jobs, securing your family's future, or planning a big trip, our goal is to provide you with practical, reliable coverage that gives you confidence and peace of mind.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                <a href="/contact" className="btn-primary text-sm md:text-base">
                                    Get a Free Consultation
                                </a>
                                <a href="/services" className="btn-secondary text-sm md:text-base">
                                    Explore Our Services
                                </a>
                            </div>
                            <div className="mt-8 text-base text-primary-800 font-semibold flex items-center justify-center gap-2">
                                <Users className="h-5 w-5 text-primary-600" />
                                Relationships come first. We're here for you from your first consultation to any claims support you may need in the future.
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
} 