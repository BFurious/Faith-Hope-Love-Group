'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary-900 text-white py-2 hidden md:block">
                <div className="container-custom">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>770-882-4899</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>faithopelovegroup@gmail.com</span>
                            </div>
                        </div>
                        <div className="text-sm">
                            Available 24/7 for Emergency Claims
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    'sticky top-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-medium'
                        : 'bg-white'
                )}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center space-x-3"
                        >
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="relative">
                                    <Shield className="h-10 w-10 text-primary-600" />
                                    <div className="absolute inset-0 bg-primary-600/20 rounded-lg blur-lg" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold gradient-text">
                                        Hope Faith & Love Group
                                    </h1>
                                    <p className="text-xs text-gray-600 font-medium">
                                        Insurance & Protection
                                    </p>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hidden lg:flex items-center space-x-8"
                        >
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative font-medium transition-colors duration-300 group",
                                            pathname === item.href
                                                ? "text-primary-600"
                                                : "text-gray-700 hover:text-primary-600"
                                        )}
                                    >
                                        {item.name}
                                        <span className={cn(
                                            "absolute left-0 bottom-0 h-0.5 bg-primary-600 transition-all duration-300",
                                            pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                                        )} />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="hidden lg:flex items-center space-x-4"
                        >
                            <Link
                                href="/contact"
                                className="btn-primary"
                            >
                                Get Free Quote
                            </Link>
                        </motion.div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden bg-white border-t"
                >
                    <div className="container-custom py-4">
                        <div className="space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block font-medium transition-colors duration-300",
                                        pathname === item.href
                                            ? "text-primary-600"
                                            : "text-gray-700 hover:text-primary-600"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-primary block text-center"
                                >
                                    Get Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.header>
        </>
    )
} 