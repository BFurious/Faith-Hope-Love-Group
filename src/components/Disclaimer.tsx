'use client'

import { Shield, FileText, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const insuranceCategories = [
    'Accident & Sickness Insurance',
    'Casualty Insurance',
    'Life Insurance',
    'Property Insurance',
    'Title Insurance',
    'Travel Accident & Sickness Insurance',
    'Travel Ticket Insurance'
]

const disclaimers = [
    {
        icon: AlertTriangle,
        title: 'Professional Advice Disclaimer',
        content: 'Content on this site is general and does not constitute legal, tax, financial, or medical advice. Please consult a qualified professional before making insurance or financial decisions.'
    },
    {
        icon: Shield,
        title: 'No Coverage Guarantee',
        content: 'Coverage is not guaranteed and is subject to approval by the issuing insurance carrier.'
    },
    {
        icon: FileText,
        title: 'Policy Comparison Disclaimer',
        content: 'Any product comparisons or summaries are intended for general overview only. Refer to the official carrier documents for complete details.'
    },
    {
        icon: ExternalLink,
        title: 'Third-Party Links',
        content: 'This website may include links to third-party websites. Faith Hope Love Agency is not responsible for their content, accuracy, or privacy practices and does not endorse them.'
    },
    {
        icon: CheckCircle,
        title: 'Email & Contact Disclaimer',
        content: 'Contacting us via this site, email, or online form does not establish an agent-client relationship. Do not submit sensitive information unless specifically requested.'
    },
    {
        icon: Shield,
        title: 'Carrier Representation',
        content: 'We may represent multiple insurance carriers. Availability varies by product and state. All logos and trademarks are the property of their respective owners.'
    },
    {
        icon: CheckCircle,
        title: 'State Licensure',
        content: 'Insurance services are only offered in jurisdictions where Faith Hope Love Agency and its agent are licensed. We do not solicit or sell insurance outside of those states.'
    },
    {
        icon: FileText,
        title: 'Digital Content Accuracy',
        content: 'We strive to keep all information up to date, but errors may occur. We reserve the right to make updates at any time without prior notice.'
    }
]

export default function Disclaimer() {
    return (
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full border border-red-200 mb-6">
                        <Shield className="h-4 w-4 text-red-600 mr-2" />
                        <span className="text-red-700 text-sm font-medium">
                            Legal & Compliance
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                        Legal & Compliance <span className="text-red-600">Disclaimer</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        This website is a solicitation for insurance and is operated by Faith Hope Love Agency, a licensed insurance agency.
                        Insurance products and services are provided through licensed agent authorized in the states where they conduct business.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Insurance Products Offered */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-soft"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                                <FileText className="h-5 w-5 text-blue-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Insurance Products Offered
                            </h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We offer insurance services in the following categories:
                        </p>
                        <ul className="space-y-2">
                            {insuranceCategories.map((category, index) => (
                                <motion.li
                                    key={category}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-2 text-gray-700"
                                >
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                    {category}
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">
                            Availability of products and eligibility for coverage may vary by state and insurance carrier.
                        </p>
                    </motion.div>

                    {/* General Disclosures */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-soft"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                General Disclosures
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Coverage Descriptions</h4>
                                <p className="text-sm text-gray-600">
                                    All descriptions on this site are brief summaries for informational purposes only. They do not constitute an offer or contract of insurance.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Policy Issuance</h4>
                                <p className="text-sm text-gray-600">
                                    All applications are subject to underwriting approval and policy-specific terms, conditions, limitations, and exclusions.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Quotes & Inquiries</h4>
                                <p className="text-sm text-gray-600">
                                    Submission of a request for information, quote, or application does not guarantee coverage or establish a binding insurance contract.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Disclaimers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-12 md:mt-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
                        Important Disclaimers
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {disclaimers.map((disclaimer, index) => {
                            const IconComponent = disclaimer.icon;
                            return (
                                <motion.div
                                    key={disclaimer.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg">
                                            <IconComponent className="h-5 w-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">{disclaimer.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{disclaimer.content}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Final Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-12 md:mt-16 text-center bg-red-50 rounded-2xl p-6 md:p-8 border border-red-200"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        <h3 className="text-xl md:text-2xl font-bold text-red-800">
                            Important Notice
                        </h3>
                    </div>
                    <p className="text-red-700 text-base md:text-lg max-w-2xl mx-auto">
                        By using this website, you acknowledge that you have read, understood, and agree to these disclaimers.
                        For specific questions about coverage or to discuss your insurance needs, please contact us directly.
                    </p>
                </motion.div>
            </div>
        </section>
    )
} 