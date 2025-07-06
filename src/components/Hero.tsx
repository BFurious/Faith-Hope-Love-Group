'use client'

import { motion, LazyMotion, domAnimation, m, inView } from 'framer-motion'
import { Shield, Star, Users, Award, ChevronRight, Play, Check, Zap, Heart, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState, useEffect, Suspense, lazy, useCallback, useMemo } from 'react'
import Image from 'next/image'
import LazyAnimations from './LazyAnimations'

// Constants - Moved to top for better organization
const STATS = [
    { icon: Users, value: '50K+', label: 'Families Protected', description: 'Sleep peacefully' },
    { icon: Shield, value: '99.9%', label: 'Claims Approved', description: 'We say YES' },
    { icon: Star, value: '4.9★', label: 'Customer Rating', description: 'Highest rated' },
    { icon: Award, value: '72hrs', label: 'Claim Processing', description: 'Lightning fast' },
]

const TRUST_INDICATORS = [
    '💰 Instant Quotes in 30 Seconds',
    '🛡️ A+ Rated by Better Business Bureau',
    '⚡ No Medical Exams Required',
    '🎯 Save Up to 40% vs Competitors',
    '📞 24/7 Emergency Claim Hotline',
    '✅ 30-Day Money-Back Guarantee'
]

const URGENCY_MESSAGES = [
    'Limited Time: Double Coverage at Same Price!',
    'Only 47 Spots Left This Month!',
    'Rates Increasing 15% Next Month!',
    'Special Offer Expires Tonight!'
]

// Performance-optimized animations with reduced motion support
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
}

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 }
}

// Reusable components for better maintainability
const TrustBadge = () => (
    <m.div
        {...fadeInUp}
        className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-300 sm:border-2 shadow-lg mx-auto lg:mx-0"
        role="banner"
        aria-label="Trust indicators"
    >
        <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-green-600 mr-1 sm:mr-2 animate-pulse flex-shrink-0" />
        <span className="text-green-800 text-xs sm:text-sm md:text-base font-bold sm:font-black leading-tight">
            <span className="hidden sm:inline">🏆 #1 RATED INSURANCE • TRUSTED SINCE 1998 • A+ BBB RATING</span>
            <span className="sm:hidden">🏆 #1 RATED • TRUSTED • A+ BBB</span>
        </span>
    </m.div>
)

const MainHeadline = () => (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] sm:leading-tight tracking-tight">
        <span className="text-gray-900 block">Don't Let</span>
        <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse block mt-1 sm:mt-2">
            DISASTER
        </span>
        <span className="text-gray-900 block mt-1 sm:mt-2">Destroy Your</span>
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
            LIFE
        </span>
    </h1>
)

const CompellingSubheadline = ({ customerCount }: { customerCount: number }) => (
    <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative group"
    >
        {/* Background with enhanced visual appeal */}
        <div className="bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 animate-pulse" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl" />

            {/* Main content with enhanced typography and visual hierarchy */}
            <div className="relative z-10">
                {/* Urgency indicator */}
                <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 bg-red-100 border-2 border-red-300 rounded-full px-3 py-1 animate-pulse">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        <span className="text-red-700 text-xs font-bold">URGENT</span>
                    </div>
                </div>

                {/* Main headline with emotional impact */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-900 leading-tight font-bold sm:font-black mb-3 sm:mb-4 text-center lg:text-left">
                    <span className="text-red-600 relative">
                        Every 7 seconds
                        <m.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
                        />
                    </span>
                    <span className="block sm:inline">, a family loses</span>
                    <span className="text-red-700 font-black"> everything </span>
                    <span className="block sm:inline">due to lack of proper insurance.</span>
                </h2>

                {/* Solution with visual emphasis */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-5 mb-4 sm:mb-5 border-l-4 border-green-500">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-semibold text-center lg:text-left">
                        <span className="text-green-600 font-bold">Don't be next!</span>
                        <span className="block sm:inline"> Get protected in just </span>
                        <span className="text-blue-600 font-black underline decoration-2 decoration-blue-400 hover:decoration-blue-600 transition-all duration-300 cursor-pointer">
                            30 seconds
                        </span>
                        <span className="block sm:inline"> and join </span>
                        <span className="text-purple-600 font-black bg-purple-100 px-2 py-1 rounded-lg">
                            {customerCount.toLocaleString()}+ families
                        </span>
                        <span className="block sm:inline"> who sleep peacefully every night.</span>
                    </p>
                </div>

                {/* Trust indicators with icons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm sm:text-base">
                    <div className="flex items-center space-x-1 bg-white/80 rounded-full px-3 py-2 shadow-sm">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-semibold">Instant Protection</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/80 rounded-full px-3 py-2 shadow-sm">
                        <Check className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 font-semibold">No Medical Exam</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/80 rounded-full px-3 py-2 shadow-sm">
                        <Star className="h-4 w-4 text-yellow-600" />
                        <span className="text-yellow-700 font-semibold">A+ Rated</span>
                    </div>
                </div>

                {/* Call to action with enhanced visual appeal */}
                <div className="mt-4 sm:mt-5 text-center lg:text-left" onClick={scrollToContact}>
                    <m.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span className="flex items-center justify-center space-x-2">
                            <span>Get Protected Now</span>
                            <ArrowRight className="h-4 w-4 animate-pulse" />
                        </span>
                    </m.button>
                    <p className="text-xs text-gray-500 mt-2">⚡ Takes only 30 seconds • 💰 Save up to 40%</p>
                </div>
            </div>
        </div>

        {/* Floating elements for visual interest */}
        <m.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold shadow-lg"
        >
            ⚡ LIVE
        </m.div>

        <m.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -left-2 bg-green-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
        >
            🛡️ SECURE
        </m.div>
    </m.div>
)

const TrustIndicators = () => (
    <div className="overflow-hidden bg-white/80 rounded-lg sm:rounded-xl py-3 sm:py-4 shadow-md sm:shadow-lg" role="region" aria-label="Trust indicators">
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 whitespace-nowrap animate-scroll">
            {[...TRUST_INDICATORS, ...TRUST_INDICATORS].map((indicator, index) => (
                <span key={index} className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 flex items-center flex-shrink-0">
                    {indicator}
                </span>
            ))}
        </div>
    </div>
)

const StatsGrid = ({ stats }: { stats: typeof STATS }) => (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-green-200 shadow-lg max-w-2xl mx-auto lg:max-w-none">
        <div className="text-center sm:text-left mb-3 sm:mb-4">
            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-3">
                <div className="flex -space-x-1 sm:-space-x-2" role="group" aria-label="Recent customers">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Image
                            key={i}
                            src={`https://images.unsplash.com/photo-149479010875${i}-2616b612b786?w=32&h=32&fit=crop&crop=face`}
                            alt={`Customer ${i}`}
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                            loading="lazy"
                            quality={75}
                        />
                    ))}
                </div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" aria-hidden="true"></div>
                <span className="text-xs sm:text-sm md:text-base font-bold text-green-700">
                    <span className="text-green-600">{Math.floor(Math.random() * 20) + 5}</span> people got protected in the last hour
                </span>
            </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" role="list" aria-label="Company statistics">
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className="text-center group cursor-pointer bg-white/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    role="listitem"
                    tabIndex={0}
                    aria-label={`${stat.label}: ${stat.value}`}
                >
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl mb-1 sm:mb-2 shadow-md">
                        <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" aria-hidden="true" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-none">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-700 leading-tight">{stat.label}</div>
                    <div className="text-xs text-gray-500 hidden sm:block">{stat.description}</div>
                </div>
            ))}
        </div>
    </div>
)

const MoneyBackGuarantee = () => (
    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg max-w-lg mx-auto lg:max-w-none">
        <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
            <div className="bg-yellow-500 text-white p-1.5 sm:p-2 rounded-full flex-shrink-0" aria-hidden="true">
                <Check className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="text-center lg:text-left">
                <div className="font-black text-yellow-800 text-sm sm:text-base md:text-lg">30-Day Money-Back Guarantee</div>
                <div className="text-yellow-700 text-xs sm:text-sm">Not satisfied? Get 100% refund, no questions asked!</div>
            </div>
        </div>
    </div>
)

const UrgencyBanner = ({ currentMessage }: { currentMessage: string }) => (
    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 sm:py-3 z-20" role="banner" aria-label="Urgency message">
        <div className="container mx-auto px-3 sm:px-4">
            <div className="text-center text-xs sm:text-sm md:text-base font-bold flex items-center justify-center">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="truncate">{currentMessage}</span>
            </div>
        </div>
    </div>
)

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

export const HeroCTASection = ({ inView, enableAnimations }: { inView: boolean; enableAnimations: boolean }) => {
    

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative"
            role="complementary"
            aria-label="Quick quote CTA card"
        >
            {/* Floating decorative elements with enhanced animations */}
            <m.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: enableAnimations ? [0, -12, 0] : 0,
                    rotate: enableAnimations ? [0, 3, 0] : 0
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 1.4 },
                    scale: { duration: 0.6, delay: 1.4 },
                    x: { duration: 0.6, delay: 1.4 },
                    y: enableAnimations ? {
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 2.5
                    } : { duration: 0 },
                    rotate: enableAnimations ? {
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 2.5
                    } : { duration: 0 }
                }}
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 lg:-top-12 lg:-right-12 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl sm:shadow-3xl max-w-[160px] sm:max-w-[180px] md:max-w-[220px] z-30 border-2 border-white/20 backdrop-blur-sm"
            >
                <div className="text-center">
                    <div className="text-sm sm:text-base font-bold mb-1">⚡ Instant Quote</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black">30 Seconds</div>
                    <div className="text-xs text-emerald-100 mt-1">Lightning Fast</div>
                </div>
            </m.div>

            <m.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: enableAnimations ? [0, 12, 0] : 0,
                    rotate: enableAnimations ? [0, -3, 0] : 0
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 1.6 },
                    scale: { duration: 0.6, delay: 1.6 },
                    x: { duration: 0.6, delay: 1.6 },
                    y: enableAnimations ? {
                        duration: 7,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 3
                    } : { duration: 0 },
                    rotate: enableAnimations ? {
                        duration: 7,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 3
                    } : { duration: 0 }
                }}
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 md:-bottom-10 md:-left-10 lg:-bottom-12 lg:-left-12 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl sm:shadow-3xl max-w-[160px] sm:max-w-[180px] md:max-w-[220px] z-30 border-2 border-white/20 backdrop-blur-sm"
            >
                <div className="text-center">
                    <div className="text-sm sm:text-base font-bold mb-1">🛡️ No Obligation</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black">100% Free</div>
                    <div className="text-xs text-violet-100 mt-1">Zero Risk</div>
                </div>
            </m.div>

            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
                {/* Enhanced Icon with pulsing effect */}
                <m.div
                    animate={enableAnimations ? {
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                    } : {}}
                    transition={enableAnimations ? {
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 2
                    } : {}}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl sm:shadow-3xl border-2 border-white/30"
                >
                    <Star className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-white" aria-hidden="true" />
                </m.div>

                {/* Enhanced Headline with gradient text */}
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        🚀 QUICK & EASY PROCESS
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold">
                        Get Your Free Quote in Minutes
                    </p>
                </div>

                {/* Enhanced Benefits with staggered animation */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="group" aria-label="Process benefits">
                    {['No obligation', 'Licensed agents', 'Instant quotes'].map((text, index) => (
                        <m.div
                            key={text}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.8 + (index * 0.2),
                                ease: "easeOut"
                            }}
                            className="flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-2 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" aria-hidden="true" />
                            <span className="text-xs sm:text-sm text-green-700 font-semibold">{text}</span>
                        </m.div>
                    ))}
                </div>

                {/* Enhanced CTA Button with hypnotizing effects */}
                <m.div
                    animate={enableAnimations ? {
                        boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 10px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0)"
                        ]
                    } : {}}
                    transition={enableAnimations ? {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 3
                    } : {}}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20 shadow-2xl"
                >
                    <div className="text-center">
                        <p className="text-white font-bold text-sm sm:text-base mb-3">Ready to Get Protected?</p>
                        <m.button
                            onClick={scrollToContact}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center group mx-auto shadow-lg hover:shadow-xl"
                            aria-label="Start free quote process"
                        >
                            Start Now
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" aria-hidden="true" />
                        </m.button>
                        <p className="text-blue-100 text-xs mt-2">No credit card required</p>
                    </div>
                </m.div>
            </div>
        </motion.div>
    )
}

export default function Hero() {
    const [currentUrgencyIndex, setCurrentUrgencyIndex] = useState(0)
    const [customerCount, setCustomerCount] = useState(49847)
    const [enableAnimations, setEnableAnimations] = useState(false)

    // Memoized values for better performance
    const currentUrgencyMessage = useMemo(() => URGENCY_MESSAGES[currentUrgencyIndex], [currentUrgencyIndex])
    const formattedCustomerCount = useMemo(() => customerCount.toLocaleString(), [customerCount])

    // Optimized callbacks to prevent unnecessary re-renders
    const updateUrgencyIndex = useCallback(() => {
        setCurrentUrgencyIndex((prev) => (prev + 1) % URGENCY_MESSAGES.length)
    }, [])

    const updateCustomerCount = useCallback(() => {
        setCustomerCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, [])

    // Enable animations after initial load for better performance
    useEffect(() => {
        const timer = setTimeout(() => {
            setEnableAnimations(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    // Optimized intervals with cleanup
    useEffect(() => {
        const interval = setInterval(updateUrgencyIndex, 4000)
        return () => clearInterval(interval)
    }, [updateUrgencyIndex])

    useEffect(() => {
        const interval = setInterval(updateCustomerCount, 5000)
        return () => clearInterval(interval)
    }, [updateCustomerCount])

    return (
        <LazyMotion features={domAnimation}>
            <section
                id="home"
                className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50"
                role="banner"
                aria-label="Insurance protection hero section"
            >
                {/* Simplified Background Elements - Only load after initial paint */}
                {enableAnimations && (
                    <Suspense fallback={null}>
                        <LazyAnimations />
                    </Suspense>
                )}

                {/* Critical Urgency Banner - Load immediately */}
                <UrgencyBanner currentMessage={currentUrgencyMessage} />

                {/* Main Content Container - Critical above-the-fold content */}
                <div className="w-full relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-16 pb-8 sm:pb-12 md:pb-16">
                    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">

                            {/* First Column - Content */}
                            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                                <TrustBadge />
                                <MainHeadline />
                                <CompellingSubheadline customerCount={customerCount} />
                                <TrustIndicators />
                                <StatsGrid stats={STATS} />
                                <MoneyBackGuarantee />
                            </div>

                            {/* Second Column - Visual Card and CTA */}
                            <div className="flex flex-col justify-around items-center  min-h-full">
                                {/* Visual Card */}
                                <div className="relative px-2 sm:px-4 lg:px-0">
                                    <m.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="relative max-w-md mx-auto lg:max-w-none"
                                    >
                                        {/* Main Protection Card */}
                                        <m.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                y: enableAnimations ? [0, -10, 0] : 0,
                                            }}
                                            transition={{
                                                opacity: { duration: 0.4 },
                                                scale: { duration: 0.4 },
                                                y: enableAnimations ? {
                                                    duration: 4,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 1
                                                } : { duration: 0 }
                                            }}
                                            className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/50 backdrop-blur-lg relative overflow-hidden"
                                            role="complementary"
                                            aria-label="Protection card"
                                        >
                                            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 relative z-10">
                                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl">
                                                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" aria-hidden="true" />
                                                </div>

                                                <div>
                                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1 sm:mb-2 leading-tight">
                                                        🛡️ TOTAL LIFE PROTECTION
                                                    </h3>
                                                    <p className="text-gray-600 text-sm sm:text-base md:text-lg font-semibold">
                                                        Auto • Home • Life • Health • Business
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-center space-x-0.5 sm:space-x-1" role="group" aria-label="Customer rating">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-yellow-500 fill-current" aria-hidden="true" />
                                                    ))}
                                                    <span className="ml-2 sm:ml-3 text-gray-700 font-black text-sm sm:text-base md:text-lg lg:text-xl">4.9/5</span>
                                                </div>

                                                {/* Live Claims Counter */}
                                                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                                    <div className="text-center">
                                                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-green-600 mb-1">
                                                            ${(customerCount * 47).toLocaleString()}
                                                        </div>
                                                        <div className="text-green-700 font-bold text-xs sm:text-sm">Paid Out This Month</div>
                                                        <div className="flex items-center justify-center mt-1 sm:mt-2">
                                                            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse mr-1" aria-hidden="true" />
                                                            <span className="text-xs text-green-600">Lives Changed Forever</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </m.div>

                                        {/* Floating Cards with Motion */}
                                        <m.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                y: enableAnimations ? [0, -8, 0] : 0,
                                                rotate: enableAnimations ? [0, 2, 0] : 0
                                            }}
                                            transition={{
                                                opacity: { duration: 0.5, delay: 0.2 },
                                                scale: { duration: 0.5, delay: 0.2 },
                                                y: enableAnimations ? {
                                                    duration: 5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 1.5
                                                } : { duration: 0 },
                                                rotate: enableAnimations ? {
                                                    duration: 5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 1.5
                                                } : { duration: 0 }
                                            }}
                                            className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl max-w-[140px] sm:max-w-[160px] md:max-w-[200px]"
                                            role="complementary"
                                            aria-label="Instant approval offer"
                                        >
                                            <div className="text-xs sm:text-sm font-bold">✅ Instant Approval</div>
                                            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black">Save $2,400/year</div>
                                        </m.div>

                                        <m.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                y: enableAnimations ? [0, 8, 0] : 0,
                                                rotate: enableAnimations ? [0, -2, 0] : 0
                                            }}
                                            transition={{
                                                opacity: { duration: 0.5, delay: 0.4 },
                                                scale: { duration: 0.5, delay: 0.4 },
                                                y: enableAnimations ? {
                                                    duration: 6,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 2
                                                } : { duration: 0 },
                                                rotate: enableAnimations ? {
                                                    duration: 6,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 2
                                                } : { duration: 0 }
                                            }}
                                            className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl max-w-[140px] sm:max-w-[160px] md:max-w-[200px]"
                                            role="complementary"
                                            aria-label="Emergency claims hotline"
                                        >
                                            <div className="text-xs sm:text-sm font-bold">🚨 Emergency Claims</div>
                                            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black">24/7 Hotline</div>
                                        </m.div>

                                        <m.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                scale: enableAnimations ? [1, 1.05, 1] : 1,
                                                x: enableAnimations ? [0, 5, 0] : 0
                                            }}
                                            transition={{
                                                opacity: { duration: 0.5, delay: 0.6 },
                                                scale: enableAnimations ? {
                                                    duration: 4.5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 1.2
                                                } : { duration: 0.5, delay: 0.6 },
                                                x: enableAnimations ? {
                                                    duration: 4.5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 1.2
                                                } : { duration: 0 }
                                            }}
                                            className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 lg:-right-12 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl"
                                            role="complementary"
                                            aria-label="Claims increase indicator"
                                        >
                                            <div className="text-center">
                                                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 mx-auto mb-1" aria-hidden="true" />
                                                <div className="text-xs sm:text-sm font-black whitespace-nowrap">Claims Up 300%</div>
                                            </div>
                                        </m.div>
                                    </m.div>
                                </div>

                                {/* Hero CTA Section - Floating card with animations */}
                                <m.div
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{
                                        opacity: 1,
                                        y: enableAnimations ? [0, -5, 0] : 0,
                                        scale: 1
                                    }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.8 },
                                        y: {
                                            duration: 0.6,
                                            delay: 0.8,
                                            ...(enableAnimations && {
                                                duration: 4,
                                                ease: "easeInOut",
                                                repeat: Infinity,
                                                delay: 2
                                            })
                                        },
                                        scale: { duration: 0.6, delay: 0.8 }
                                    }}
                                    className="relative z-20 max-w-md mx-auto lg:max-w-none -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24"
                                >
                                    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/50 backdrop-blur-lg relative">
                                        <HeroCTASection inView={true} enableAnimations={enableAnimations} />
                                    </div>
                                </m.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Bottom Wave - No animation for performance */}
                <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-8 sm:h-12 md:h-16 lg:h-20 fill-white"
                        role="img"
                        aria-label="Decorative wave"
                    >
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                    </svg>
                </div>
            </section>
        </LazyMotion>
    )
} 
