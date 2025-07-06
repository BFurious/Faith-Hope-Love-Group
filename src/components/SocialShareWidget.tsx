'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
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
    ChevronLeft,
    MessageCircle as WhatsApp,
    ArrowUp,
    MoreHorizontal
} from 'lucide-react'

// Types
interface SocialPlatform {
    name: string
    icon: any
    color: string
    url?: string
    action?: 'copy' | 'share' | 'scroll'
    description: string
}

interface DrawerProps {
    children: React.ReactNode
    position?: 'left' | 'right'
    verticalPosition?: 'top' | 'center' | 'bottom'
    showHandle?: boolean
    handleSize?: 'sm' | 'md' | 'lg'
    drawerSize?: 'sm' | 'md' | 'lg'
    theme?: 'light' | 'dark' | 'glass'
    className?: string
    handleIcon?: React.ReactNode
    onToggle?: (isOpen: boolean) => void
    isOpen?: boolean
    setIsOpen?: (isOpen: boolean) => void
    peekOnHover?: boolean
    isExpanded?: boolean
}

interface SocialShareWidgetProps {
    url?: string
    title?: string
    description?: string
    hashtags?: string[]
    className?: string
    platforms?: SocialPlatform[]
    position?: 'left' | 'right'
    verticalPosition?: 'top' | 'center' | 'bottom'
    showHandle?: boolean
    handleSize?: 'sm' | 'md' | 'lg'
    drawerSize?: 'sm' | 'md' | 'lg'
    theme?: 'light' | 'dark' | 'glass'
}

// Size configurations
const SIZE_CONFIG = {
    handle: {
        sm: { width: 'w-10', height: 'h-10', icon: 'w-5 h-5' },
        md: { width: 'w-10', height: 'h-10', icon: 'w-6 h-6' },
        lg: { width: 'w-16', height: 'h-16', icon: 'w-8 h-8' }
    },
    drawer: {
        sm: { width: 'w-16', height: 'min-h-[160px]', gap: 'gap-3', padding: 'py-3 px-0' },
        md: { width: 'w-16', height: 'min-h-[160px]', gap: 'gap-2', padding: 'py-3 px-2' },
        lg: { width: 'w-24', height: 'min-h-[280px]', gap: 'gap-5', padding: 'py-8 px-5' }
    },
    icons: {
        sm: { width: 'w-10', height: 'h-10', icon: 'w-5 h-5' },
        md: { width: 'w-12', height: 'h-12', icon: 'w-7 h-7' },
        lg: { width: 'w-14', height: 'h-14', icon: 'w-8 h-8' }
    }
}

// Theme configurations
const THEME_CONFIG = {
    light: {
        handle: 'bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800',
        drawer: 'bg-white/95 backdrop-blur-md border-gray-200/50',
        shadow: 'shadow-xl'
    },
    dark: {
        handle: 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800',
        drawer: 'bg-gray-900/95 backdrop-blur-md border-gray-700/50',
        shadow: 'shadow-2xl'
    },
    glass: {
        handle: 'bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 backdrop-blur-md',
        drawer: 'bg-white/10 backdrop-blur-xl border-white/20',
        shadow: 'shadow-2xl'
    }
}

// Reusable Handle Component
const DrawerHandle = ({
    isOpen,
    onClick,
    size = 'md',
    theme = 'light',
    position = 'right',
    handleIcon
}: {
    isOpen: boolean
    onClick: () => void
    size?: 'sm' | 'md' | 'lg'
    theme?: 'light' | 'dark' | 'glass'
    position?: 'left' | 'right'
    handleIcon?: React.ReactNode
}) => {
    const sizeConfig = SIZE_CONFIG.handle[size]
    const themeConfig = THEME_CONFIG[theme]
    const DefaultIcon = position === 'right' ? ChevronLeft : ChevronRight

    return (
        <button
            onClick={onClick}
            aria-label={isOpen ? "Close drawer" : "Open drawer"}
            aria-expanded={isOpen}
            className={`${sizeConfig.width} ${sizeConfig.height} -ml-1 flex items-center justify-center
                ${themeConfig.handle} text-white rounded-l-full
                border-4 border-white transition-all duration-300
                hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50
                active:scale-95 ${themeConfig.shadow}`}
            style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)",
                backdropFilter: "blur(10px)"
            }}
        >
            {handleIcon || (
                <DefaultIcon className={`${sizeConfig.icon} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            )}
        </button>
    )
}

// Reusable Drawer Component
export function Drawer({
    children,
    position = 'right',
    verticalPosition = 'center',
    showHandle = true,
    handleSize = 'md',
    drawerSize = 'md',
    theme = 'light',
    className = "",
    handleIcon,
    onToggle,
    isOpen: externalIsOpen,
    setIsOpen: externalSetIsOpen,
    peekOnHover = true,
    isExpanded = false
}: DrawerProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const isControlled = externalIsOpen !== undefined && externalSetIsOpen !== undefined
    const isOpen = isControlled ? externalIsOpen : internalIsOpen
    const setIsOpen = isControlled ? externalSetIsOpen : setInternalIsOpen

    const drawerSizeConfig = SIZE_CONFIG.drawer[drawerSize]
    const themeConfig = THEME_CONFIG[theme]
    const baseWidth = drawerSize === 'sm' ? 64 : drawerSize === 'md' ? 80 : 96
    const expandedWidth = isExpanded ? baseWidth + 80 : baseWidth // Add 80px for second column
    const ICONS_W = expandedWidth
    const PEEK = 12

    const prefersReducedMotion = useReducedMotion()
    const current = isOpen ? "open" : (isHovering && peekOnHover) ? "peek" : "closed"

    const variants = {
        closed: { x: expandedWidth, opacity: 1 },
        peek: { x: expandedWidth - PEEK },
        open: { x: 0 }
    }

    const handleToggle = () => {
        const newState = !isOpen
        setIsOpen(newState)
        onToggle?.(newState)
    }

    const getVerticalPosition = () => {
        switch (verticalPosition) {
            case 'top': return 'top-4'
            case 'bottom': return 'bottom-4'
            default: return 'top-[30vh] -translate-y-1/2'
        }
    }

    const getHorizontalPosition = () => {
        return position === 'left' ? 'left-0' : 'right-0'
    }

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !event.target) return

            const target = event.target as Element
            const drawer = target.closest('[data-drawer]')

            if (isOpen && !drawer) {
                setIsOpen(false)
                onToggle?.(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, setIsOpen, onToggle])

    return (
        <motion.aside
            data-drawer
            variants={variants}
            animate={current}
            initial="closed"
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: expandedWidth }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
                const newState = info.point.x < expandedWidth / 2
                setIsOpen(newState)
                onToggle?.(newState)
            }}
            className={`fixed ${getHorizontalPosition()} ${getVerticalPosition()} z-50 flex items-center ${className}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {showHandle && (
                <DrawerHandle
                    isOpen={isOpen}
                    onClick={handleToggle}
                    size={handleSize}
                    theme={theme}
                    position={position}
                    handleIcon={handleIcon}
                />
            )}

            <div
                className={`${themeConfig.drawer} rounded-l-2xl border shadow-2xl
                     flex flex-col items-center ${drawerSizeConfig.padding} 
                     ${drawerSizeConfig.height} relative overflow-hidden`}
                style={{
                    width: `${expandedWidth}px`,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
                    backdropFilter: "blur(16px)"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent opacity-30" />
                <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center ${drawerSizeConfig.gap}`}>
                    {children}
                </div>
            </div>
        </motion.aside>
    )
}

// Reusable Social Icon Component
const SocialIcon = ({
    platform,
    onClick,
    size = 'md',
    isCopied = false
}: {
    platform: SocialPlatform
    onClick: () => void
    size?: 'sm' | 'md' | 'lg'
    isCopied?: boolean
}) => {
    const sizeConfig = SIZE_CONFIG.icons[size]
    const IconComponent = isCopied ? Check : platform.icon

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`${sizeConfig.width} ${sizeConfig.height} flex items-center justify-center rounded-2xl
                text-white shadow-lg transition-all duration-300
                hover:shadow-xl relative overflow-hidden group ${platform.color}`}
            title={platform.description}
        >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                         transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                         transition-transform duration-700" />
            <IconComponent className={`${sizeConfig.icon} relative z-10`} />
        </motion.button>
    )
}

// Default configurations
const DEFAULT_PLATFORMS: SocialPlatform[] = [
    {
        name: 'Facebook',
        icon: Facebook,
        color: 'bg-blue-600 hover:bg-blue-700',
        url: 'https://www.facebook.com/sharer/sharer.php?u={url}',
        action: 'share',
        description: 'Share on Facebook'
    },
    {
        name: 'Twitter',
        icon: Twitter,
        color: 'bg-sky-500 hover:bg-sky-600',
        url: 'https://twitter.com/intent/tweet?url={url}&text={title}&hashtags={hashtags}',
        action: 'share',
        description: 'Share on Twitter'
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        color: 'bg-blue-700 hover:bg-blue-800',
        url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
        action: 'share',
        description: 'Share on LinkedIn'
    },
    {
        name: 'WhatsApp',
        icon: WhatsApp,
        color: 'bg-green-500 hover:bg-green-600',
        url: 'https://wa.me/?text={title}%20{url}',
        action: 'share',
        description: 'Share on WhatsApp'
    },
    {
        name: 'Copy Link',
        icon: Copy,
        color: 'bg-purple-600 hover:bg-purple-700',
        action: 'copy',
        description: 'Copy Link'
    },
    {
        name: 'Email',
        icon: Mail,
        color: 'bg-gray-600 hover:bg-gray-700',
        url: 'mailto:?subject={title}&body={description}%20{url}',
        action: 'share',
        description: 'Share via Email'
    },
    {
        name: 'Instagram',
        icon: Instagram,
        color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600',
        url: 'https://www.instagram.com/',
        action: 'share',
        description: 'Follow on Instagram'
    },
    {
        name: 'YouTube',
        icon: Youtube,
        color: 'bg-red-600 hover:bg-red-700',
        url: 'https://www.youtube.com/',
        action: 'share',
        description: 'Subscribe on YouTube'
    }
]

// Main Component
export default function SocialShareWidget({
    url,
    title = "Hope Faith Love Group - Insurance Solutions",
    description = "Get comprehensive insurance coverage for your family and business. Expert guidance and personalized solutions.",
    hashtags = ["insurance", "family", "business", "protection"],
    className = "",
    platforms = DEFAULT_PLATFORMS,
    position = 'right',
    verticalPosition = 'center',
    showHandle = true,
    handleSize = 'md',
    drawerSize = 'md',
    theme = 'light'
}: SocialShareWidgetProps) {
    const [copied, setCopied] = useState(false)
    const [activePlatform, setActivePlatform] = useState<string | null>(null)
    const [showMore, setShowMore] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
    const encodedUrl = encodeURIComponent(currentUrl)
    const encodedTitle = encodeURIComponent(title)
    const encodedDescription = encodeURIComponent(description)
    const encodedHashtags = encodeURIComponent(hashtags.join(' '))

    // Process platforms with dynamic URL replacement
    const processedPlatforms = platforms.map(platform => ({
        ...platform,
        url: platform.url?.replace(/{url}/g, encodedUrl)
            .replace(/{title}/g, encodedTitle)
            .replace(/{description}/g, encodedDescription)
            .replace(/{hashtags}/g, encodedHashtags)
    }))

    const handleShare = async (platform: SocialPlatform) => {
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
        } else if (platform.url) {
            setActivePlatform(platform.name)
            window.open(platform.url, '_blank', 'width=600,height=400')
            setTimeout(() => setActivePlatform(null), 1000)
        }
    }

    // Reset showMore when drawer closes
    useEffect(() => {
        if (!isOpen) {
            setShowMore(false)
        }
    }, [isOpen])

    // Show first 4 platforms + more button
    const visiblePlatforms = processedPlatforms.slice(0, 4)
    const hiddenPlatforms = processedPlatforms.slice(4)

    return (
        <Drawer
            position={position}
            verticalPosition={verticalPosition}
            showHandle={showHandle}
            handleSize={handleSize}
            drawerSize={drawerSize}
            theme={theme}
            className={className}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isExpanded={showMore}
        >
            <div className="relative flex">
                {/* First column - visible platforms */}
                <div className="flex flex-col gap-2">
                    {visiblePlatforms.map((platform) => (
                        <SocialIcon
                            key={platform.name}
                            platform={platform}
                            onClick={() => handleShare(platform)}
                            size={drawerSize}
                            isCopied={copied && activePlatform === platform.name}
                        />
                    ))}

                    {/* More button */}
                    {hiddenPlatforms.length > 0 && !showMore && (
                        <motion.button
                            onClick={() => setShowMore(true)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 flex items-center justify-center rounded-2xl
                                bg-gray-600 hover:bg-gray-700 text-white shadow-lg transition-all duration-300
                                hover:shadow-xl relative overflow-hidden group"
                            title="More options"
                        >
                            <MoreHorizontal className="w-7 h-7" />
                        </motion.button>
                    )}
                </div>

                {/* Second column - hidden platforms */}
                <AnimatePresence>
                    {showMore && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-2 ml-2"
                        >
                            {hiddenPlatforms.map((platform) => (
                                <SocialIcon
                                    key={platform.name}
                                    platform={platform}
                                    onClick={() => handleShare(platform)}
                                    size={drawerSize}
                                    isCopied={copied && activePlatform === platform.name}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Drawer>
    )
}

// Go to Top Component
export function GoToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 100vh (full viewport height)
            const scrollPosition = window.scrollY
            const viewportHeight = window.innerHeight
            setIsVisible(scrollPosition > viewportHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 
                             hover:from-indigo-700 hover:to-indigo-800 text-white rounded-full shadow-lg 
                             transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-4 
                             focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center"
                    title="Go to top"
                    aria-label="Go to top of page"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

// Convenience exports for different use cases
export function StickySocialShare(props?: Partial<SocialShareWidgetProps>) {
    return <SocialShareWidget {...props} />
}

export function FloatingSocialShare(props?: Partial<SocialShareWidgetProps>) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <SocialShareWidget {...props} />
                </motion.div>
            )}
        </AnimatePresence>
    )
} 