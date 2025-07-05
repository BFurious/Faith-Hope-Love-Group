'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    Shield,
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowUp,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Heart
} from 'lucide-react'
import Image from 'next/image'

const footerSections = [
    {
        title: 'Services',
        links: [
            { name: 'Auto Insurance', href: '/services' },
            { name: 'Home Insurance', href: '/services' },
            { name: 'Life Insurance', href: '/services' },
            { name: 'Health Insurance', href: '/services' },
            { name: 'Business Insurance', href: '/services' },
            { name: 'Travel Insurance', href: '/services' },
        ]
    },
    {
        title: 'Company',
        links: [
            { name: 'About Us', href: '/about' },
            { name: 'Our Story', href: '/about' },
            { name: 'Careers', href: '/contact' },
            { name: 'News & Updates', href: '/contact' },
            { name: 'Community', href: '/testimonials' },
            { name: 'Partnership', href: '/contact' },
        ]
    },
    {
        title: 'Support',
        links: [
            { name: 'Help Center', href: '/faq' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'Insurance Glossary', href: '/glossary' },
            { name: 'File a Claim', href: '/contact' },
            { name: 'Policy Documents', href: '/contact' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Emergency Claims', href: '/contact' },
        ]
    }
]

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-12">
                        {/* Brand Section */}
                        <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
                            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
                                <div className="relative h-16 md:h-20 w-28 md:w-32 rounded-2xl bg-white/10 flex items-center justify-center px-1 py-2 md:px-2 shadow-lg">
                                    <Image src="/faith_logo.png" alt="Faith Hope Love Group Logo" fill priority className="rounded-2xl object-fill" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold gradient-text">
                                        Faith Hope & Love Group
                                    </h3>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        Insurance & Protection
                                    </p>
                                </div>
                            </Link>

                            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-md">
                                For over 25 years, we've been protecting families and businesses with comprehensive
                                insurance solutions built on hope, faith, and love. Your trusted partner in life's journey.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-2 md:space-y-3">
                                <div className="flex items-center space-x-2 md:space-x-3 text-gray-300">
                                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-400 flex-shrink-0" />
                                    <span className="text-sm md:text-base">770-882-4899</span>
                                </div>
                                <div className="flex items-center space-x-2 md:space-x-3 text-gray-300">
                                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-400 flex-shrink-0" />
                                    <span className="text-sm md:text-base">faithopelovegroup@gmail.com</span>
                                </div>
                                <div className="flex items-start space-x-2 md:space-x-3 text-gray-300">
                                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm md:text-base">
                                        Georgia, United States<br />
                                        Licensed to serve Georgia residents
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
                            {footerSections.map((section) => (
                                <div key={section.title}>
                                    <h4 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-xs md:text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 mx-4 lg:mx-0">
                        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
                            <div className="mb-4 md:mb-0">
                                <h4 className="font-bold text-white mb-2 text-lg md:text-xl">
                                    Stay Protected & Informed
                                </h4>
                                <p className="text-gray-400 text-sm md:text-base max-w-md">
                                    Get insurance tips, safety advice, and exclusive offers delivered to your inbox.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 md:max-w-md md:w-full md:ml-8">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 md:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors duration-300 text-sm md:text-base"
                                />
                                <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2 md:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 lg:px-0">
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-xs md:text-sm">
                            <div className="flex items-center space-x-1">
                                <span>&copy; 2024 Faith Hope & Love Group.</span>
                                <span className="hidden sm:inline">All rights reserved.</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link href="/disclaimer" className="hover:text-primary-400 transition-colors duration-300">
                                    Legal Disclaimer
                                </Link>
                                <Link href="/terms" className="hover:text-primary-400 transition-colors duration-300">
                                    Terms of Use
                                </Link>
                                <Link href="#" className="hover:text-primary-400 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="hover:text-primary-400 transition-colors duration-300">
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-400 text-xs md:text-sm">
                            <span>Made with</span>
                            <Heart className="h-3 w-3 md:h-4 md:w-4 text-red-400 fill-current" />
                            <span>for our community</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 