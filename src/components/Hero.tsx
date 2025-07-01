'use client'

import { motion, LazyMotion, domAnimation, m } from 'framer-motion'
import { Shield, Star, Users, Award, ChevronRight, Play, Check, Zap, Heart, TrendingUp } from 'lucide-react'
import { useState, useEffect, Suspense, lazy } from 'react'
import Image from 'next/image'
import LazyAnimations from './LazyAnimations'
const stats = [
    { icon: Users, value: '50K+', label: 'Families Protected', description: 'Sleep peacefully' },
    { icon: Shield, value: '99.9%', label: 'Claims Approved', description: 'We say YES' },
    { icon: Star, value: '4.9★', label: 'Customer Rating', description: 'Highest rated' },
    { icon: Award, value: '72hrs', label: 'Claim Processing', description: 'Lightning fast' },
]

const trustIndicators = [
    '💰 Instant Quotes in 30 Seconds',
    '🛡️ A+ Rated by Better Business Bureau',
    '⚡ No Medical Exams Required',
    '🎯 Save Up to 40% vs Competitors',
    '📞 24/7 Emergency Claim Hotline',
    '✅ 30-Day Money-Back Guarantee'
]

const urgencyMessages = [
    'Limited Time: Double Coverage at Same Price!',
    'Only 47 Spots Left This Month!',
    'Rates Increasing 15% Next Month!',
    'Special Offer Expires Tonight!'
]

// Performance-optimized simple animations
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

export default function Hero() {
    const [currentUrgencyIndex, setCurrentUrgencyIndex] = useState(0)
    const [customerCount, setCustomerCount] = useState(49847)
    const [enableAnimations, setEnableAnimations] = useState(false)

    // Enable animations after initial load
    useEffect(() => {
        const timer = setTimeout(() => {
            setEnableAnimations(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentUrgencyIndex((prev) => (prev + 1) % urgencyMessages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCustomerCount(prev => prev + Math.floor(Math.random() * 3) + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <LazyMotion features={domAnimation}>
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">

                {/* Simplified Background Elements - Only load after initial paint */}
                {enableAnimations && (
                    <Suspense fallback={null}>
                        <LazyAnimations />
                    </Suspense>
                )}

                {/* Critical Urgency Banner - Load immediately */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 sm:py-3 z-20">
                    <div className="container mx-auto px-3 sm:px-4">
                        <div className="text-center text-xs sm:text-sm md:text-base font-bold flex items-center justify-center">
                            <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 animate-pulse flex-shrink-0" />
                            <span className="truncate">{urgencyMessages[currentUrgencyIndex]}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Container - Critical above-the-fold content */}
                <div className="w-full relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-16 pb-8 sm:pb-12 md:pb-16">
                    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">

                            {/* Content Column - Critical content first */}
                            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">

                                {/* Trust Badge - Critical, load immediately */}
                                <m.div
                                    {...fadeInUp}
                                    className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-300 sm:border-2 shadow-lg mx-auto lg:mx-0"
                                >
                                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-green-600 mr-1 sm:mr-2 animate-pulse flex-shrink-0" />
                                    <span className="text-green-800 text-xs sm:text-sm md:text-base font-bold sm:font-black leading-tight">
                                        <span className="hidden sm:inline">🏆 #1 RATED INSURANCE • TRUSTED SINCE 1998 • A+ BBB RATING</span>
                                        <span className="sm:hidden">🏆 #1 RATED • TRUSTED • A+ BBB</span>
                                    </span>
                                </m.div>

                                {/* Main Headline - Critical LCP element */}
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

                                {/* Compelling Subheadline - Critical content */}
                                <div className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg sm:shadow-xl border border-blue-200 mx-auto lg:mx-0 max-w-2xl">
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-relaxed font-semibold sm:font-bold">
                                        <span className="text-red-600">Every 7 seconds</span>, a family loses everything due to lack of proper insurance.
                                        <span className="text-green-600"> Don't be next!</span> Get protected in just <span className="text-blue-600 underline">30 seconds</span>
                                        and join <span className="text-purple-600 font-black">{customerCount.toLocaleString()}+ families</span> who sleep peacefully every night.
                                    </p>
                                </div>

                                {/* Trust Indicators - Load after critical content */}
                                <div className="overflow-hidden bg-white/80 rounded-lg sm:rounded-xl py-3 sm:py-4 shadow-md sm:shadow-lg">
                                    <div className="flex space-x-4 sm:space-x-6 md:space-x-8 whitespace-nowrap animate-scroll">
                                        {[...trustIndicators, ...trustIndicators].map((indicator, index) => (
                                            <span key={index} className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-gray-700 flex items-center flex-shrink-0">
                                                {indicator}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons - Critical conversion elements */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start max-w-lg mx-auto lg:max-w-none">
                                    <a
                                        href="#contact"
                                        className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl sm:shadow-2xl text-base sm:text-lg md:text-xl relative overflow-hidden touch-manipulation transform hover:scale-105"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            <span className="mr-2">🚨</span>
                                            <span className="hidden sm:inline">GET PROTECTED NOW (FREE)</span>
                                            <span className="sm:hidden">GET PROTECTED (FREE)</span>
                                            <ChevronRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                                        </div>
                                        <div className="text-xs sm:text-sm mt-1 opacity-90 text-center">⚡ Instant Quote • No Credit Check</div>
                                    </a>

                                    <button className="group bg-white border-2 sm:border-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-black py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg sm:shadow-xl text-base sm:text-lg md:text-xl touch-manipulation transform hover:scale-105">
                                        <div className="flex items-center justify-center">
                                            <Play className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                                            <span className="hidden sm:inline">See Real Claims Paid</span>
                                            <span className="sm:hidden">Real Claims</span>
                                        </div>
                                        <div className="text-xs sm:text-sm mt-1 opacity-70 text-center">🎥 2-min success stories</div>
                                    </button>
                                </div>

                                {/* Stats Grid - Important but not critical */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-green-200 shadow-lg max-w-2xl mx-auto lg:max-w-none">
                                    <div className="text-center sm:text-left mb-3 sm:mb-4">
                                        <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-3">
                                            <div className="flex -space-x-1 sm:-space-x-2">
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
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                                            <span className="text-xs sm:text-sm md:text-base font-bold text-green-700">
                                                <span className="text-green-600">{Math.floor(Math.random() * 20) + 5}</span> people got protected in the last hour
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                        {stats.map((stat, index) => (
                                            <div
                                                key={stat.label}
                                                className="text-center group cursor-pointer bg-white/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                                            >
                                                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl mb-1 sm:mb-2 shadow-md">
                                                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" />
                                                </div>
                                                <div className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-none">{stat.value}</div>
                                                <div className="text-xs sm:text-sm font-bold text-gray-700 leading-tight">{stat.label}</div>
                                                <div className="text-xs text-gray-500 hidden sm:block">{stat.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Money-Back Guarantee */}
                                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg max-w-lg mx-auto lg:max-w-none">
                                    <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                                        <div className="bg-yellow-500 text-white p-1.5 sm:p-2 rounded-full flex-shrink-0">
                                            <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <div className="font-black text-yellow-800 text-sm sm:text-base md:text-lg">30-Day Money-Back Guarantee</div>
                                            <div className="text-yellow-700 text-xs sm:text-sm">Not satisfied? Get 100% refund, no questions asked!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Column - Load after critical content */}
                            <div className="order-1 lg:order-2 relative px-2 sm:px-4 lg:px-0 mt-4 lg:mt-0">
                                <div className="relative max-w-md mx-auto lg:max-w-none">
                                    {/* Main Protection Card */}
                                    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/50 backdrop-blur-lg relative overflow-hidden">

                                        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 relative z-10">
                                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl">
                                                <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
                                            </div>

                                            <div>
                                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1 sm:mb-2 leading-tight">
                                                    🛡️ TOTAL LIFE PROTECTION
                                                </h3>
                                                <p className="text-gray-600 text-sm sm:text-base md:text-lg font-semibold">
                                                    Auto • Home • Life • Health • Business
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-center space-x-0.5 sm:space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-yellow-500 fill-current" />
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
                                                        <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse mr-1" />
                                                        <span className="text-xs text-green-600">Lives Changed Forever</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Static Floating Cards - No animation for performance */}
                                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl max-w-[140px] sm:max-w-[160px] md:max-w-[200px]">
                                        <div className="text-xs sm:text-sm font-bold">✅ Instant Approval</div>
                                        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black">Save $2,400/year</div>
                                    </div>

                                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl max-w-[140px] sm:max-w-[160px] md:max-w-[200px]">
                                        <div className="text-xs sm:text-sm font-bold">🚨 Emergency Claims</div>
                                        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black">24/7 Hotline</div>
                                    </div>

                                    <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 lg:-right-12 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl">
                                        <div className="text-center">
                                            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 mx-auto mb-1" />
                                            <div className="text-xs sm:text-sm font-black whitespace-nowrap">Claims Up 300%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Bottom Wave - No animation for performance */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-8 sm:h-12 md:h-16 lg:h-20 fill-white"
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