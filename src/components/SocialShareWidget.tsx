'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Mail,
    Copy,
    Check,
    X,
    MessageCircle,
    MessageSquare,
    ChevronRight,
    ChevronLeft
} from 'lucide-react'

interface SocialShareWidgetProps {
    url?: string
    title?: string
    description?: string
    hashtags?: string[]
    className?: string
}

export default function SocialShareWidget({
    url,
    title = "Hope Faith Love Group - Insurance Solutions",
    description = "Get comprehensive insurance coverage for your family and business. Expert guidance and personalized solutions.",
    hashtags = ["insurance", "family", "business", "protection"],
    className = ""
}: SocialShareWidgetProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [copied, setCopied] = useState(false)
    const [activePlatform, setActivePlatform] = useState<string | null>(null)

    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
    const encodedUrl = encodeURIComponent(currentUrl)
    const encodedTitle = encodeURIComponent(title)
    const encodedDescription = encodeURIComponent(description)
    const encodedHashtags = encodeURIComponent(hashtags.join(' '))

    const socialPlatforms = [
        {
            name: 'Facebook',
            icon: Facebook,
            color: 'bg-blue-600 hover:bg-blue-700',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            description: 'Share on Facebook'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            color: 'bg-sky-500 hover:bg-sky-600',
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`,
            description: 'Share on Twitter'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            color: 'bg-blue-700 hover:bg-blue-800',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            description: 'Share on LinkedIn'
        },
        {
            name: 'WhatsApp',
            icon: MessageSquare,
            color: 'bg-green-500 hover:bg-green-600',
            url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            description: 'Share on WhatsApp'
        },
        {
            name: 'Email',
            icon: Mail,
            color: 'bg-gray-600 hover:bg-gray-700',
            url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`,
            description: 'Share via Email'
        },
        {
            name: 'Copy Link',
            icon: copied ? Check : Copy,
            color: 'bg-purple-600 hover:bg-purple-700',
            action: 'copy',
            description: copied ? 'Link Copied!' : 'Copy Link'
        }
    ]

    const handleShare = async (platform: any) => {
        if (platform.action === 'copy') {
            try {
                await navigator.clipboard.writeText(currentUrl)
                setCopied(true)
                setActivePlatform(platform.name)
                setTimeout(() => {
                    setCopied(false)
                    setActivePlatform(null)
                }, 2000)
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea')
                textArea.value = currentUrl
                document.body.appendChild(textArea)
                textArea.select()
                document.execCommand('copy')
                document.body.removeChild(textArea)
                setCopied(true)
                setActivePlatform(platform.name)
                setTimeout(() => {
                    setCopied(false)
                    setActivePlatform(null)
                }, 2000)
            }
        } else {
            setActivePlatform(platform.name)
            window.open(platform.url, '_blank', 'width=600,height=400')
            setTimeout(() => setActivePlatform(null), 1000)
        }
    }

    const toggleWidget = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => !isOpen && setIsHovered(false)}
        >
            {/* Sticky Drawer */}
            <motion.div
                initial={{ x: 60 }}
                animate={{
                    x: isOpen ? 0 : isHovered ? 20 : 60
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
            >
                {/* Main Share Button */}
                <motion.button
                    onClick={toggleWidget}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-l-xl shadow-lg hover:bg-primary-700 transition-colors duration-300"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Share2 className="h-6 w-6" />
                    )}
                </motion.button>

                {/* Drawer Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute right-16 top-0 bg-white rounded-l-xl shadow-2xl border border-gray-200 p-6 min-w-[280px]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Share this page</h3>
                                <button
                                    onClick={toggleWidget}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Platform Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {socialPlatforms.map((platform) => {
                                    const IconComponent = platform.icon
                                    return (
                                        <motion.button
                                            key={platform.name}
                                            onClick={() => handleShare(platform)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`relative flex flex-col items-center gap-2 p-3 rounded-lg text-white transition-all duration-300 ${platform.color} ${activePlatform === platform.name ? 'ring-2 ring-white ring-offset-2' : ''
                                                }`}
                                            title={platform.description}
                                        >
                                            <IconComponent className="h-5 w-5" />
                                            <span className="text-xs font-medium">{platform.name}</span>

                                            {/* Success Animation */}
                                            {activePlatform === platform.name && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1"
                                                >
                                                    <Check className="h-3 w-3" />
                                                </motion.div>
                                            )}
                                        </motion.button>
                                    )
                                })}
                            </div>

                            {/* URL Display */}
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <p className="text-xs text-gray-600 mb-1">Share this URL:</p>
                                <p className="text-xs text-gray-800 font-mono break-all">
                                    {currentUrl}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hover Drawer - Vertical Social Icons */}
                <AnimatePresence>
                    {isHovered && !isOpen && (
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-16 top-0 bg-white rounded-l-xl shadow-lg border border-gray-200 p-4"
                        >
                            <div className="flex flex-col gap-3">
                                {socialPlatforms.slice(0, 4).map((platform) => {
                                    const IconComponent = platform.icon
                                    return (
                                        <motion.button
                                            key={platform.name}
                                            onClick={() => handleShare(platform)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`flex items-center justify-center w-12 h-12 rounded-lg text-white transition-all duration-300 ${platform.color}`}
                                            title={platform.description}
                                        >
                                            <IconComponent className="h-5 w-5" />
                                        </motion.button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

// Sticky Right Side Social Share Widget
export function StickySocialShare() {
    return <SocialShareWidget />
}

// Floating Social Share Widget (keeping for backward compatibility)
export function FloatingSocialShare() {
    const [isVisible, setIsVisible] = useState(false)

    // Show widget when user scrolls down
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <SocialShareWidget />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Social Media Links Component
export function SocialMediaLinks() {
    const socialLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com',
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: 'https://twitter.com',
            color: 'bg-sky-500 hover:bg-sky-600'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com',
            color: 'bg-blue-700 hover:bg-blue-800'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com',
            color: 'bg-pink-600 hover:bg-pink-700'
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://youtube.com',
            color: 'bg-red-600 hover:bg-red-700'
        }
    ]

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Follow us:</span>
            {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors duration-300 ${social.color}`}
                        title={`Follow us on ${social.name}`}
                    >
                        <IconComponent className="h-5 w-5" />
                    </motion.a>
                )
            })}
        </div>
    )
} 