'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ChevronLeft, ChevronRight, Shield, Award, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'Mother of 3',
        company: 'Family Protection Plan',
        content: 'Hope Faith and Love Group saved our family from financial ruin when my husband was diagnosed with cancer. They paid out $150,000 instantly - no questions asked. I can\'t imagine going through that nightmare without them.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        savings: '$45,000 saved',
        verified: true,
        featured: true
    },
    {
        id: '2',
        name: 'Michael Chen',
        role: 'Business Owner',
        company: 'Chen\'s Restaurant Chain',
        content: 'A kitchen fire could have ended my 20-year business. Hope Faith and Love Group not only covered the $200,000 in damages but also our lost income during reconstruction. They turned our worst nightmare into just a minor bump in the road.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        savings: '$280,000 claim paid',
        verified: true,
        featured: false
    },
    {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'Young Professional',
        company: 'Tech Startup Employee',
        content: 'At 25, I thought I was too young for life insurance. When I was in a severe car accident, the $500,000 policy I got for just $35/month became the safety net that saved my future. Best decision I ever made.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        savings: 'Only $35/month',
        verified: true,
        featured: true
    }
]

const impactStats = [
    {
        icon: Shield,
        value: '$2.3B+',
        label: 'Claims Paid Out',
        description: 'Life-changing support delivered'
    },
    {
        icon: Award,
        value: '99.8%',
        label: 'Claims Approved',
        description: 'We say YES when others say no'
    },
    {
        icon: Star,
        value: '4.9★',
        label: 'Customer Rating',
        description: 'Consistently rated #1'
    },
    {
        icon: Sparkles,
        value: '72hrs',
        label: 'Average Claim Time',
        description: 'Lightning-fast support'
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextTestimonial = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const featuredTestimonials = testimonials.filter(t => t.featured)

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center px-4 md:px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-600 mr-2 animate-pulse" />
                        <span className="text-purple-700 text-sm md:text-base font-bold">
                            Real Stories • Real Results • Real Protection
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 px-4 leading-tight">
                        <span className="text-gray-900">Lives</span>{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                            Transformed
                        </span>{' '}
                        <span className="text-gray-900">Forever</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
                        <strong>Over 50,000 families</strong> trust us with their most precious assets.
                        Here's why they chose us and never looked back.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20 px-4 lg:px-0"
                >
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50"
                        >
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl mb-4 shadow-lg">
                                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <div className="text-2xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base font-bold text-gray-700 mb-1">{stat.label}</div>
                                <div className="text-xs md:text-sm text-gray-500">{stat.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hidden lg:grid lg:grid-cols-2 gap-8 mb-16"
                >
                    {featuredTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                            className="group"
                        >
                            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 relative overflow-hidden">
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                    <Shield className="h-3 w-3 mr-1" />
                                    VERIFIED
                                </div>

                                <div className="mb-6">
                                    <Quote className="h-12 w-12 text-blue-200 transform group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <div className="flex items-center mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-6 w-6 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                    ))}
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                                    "{testimonial.content}"
                                </p>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6 border border-green-200">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-green-600">{testimonial.savings}</div>
                                        <div className="text-sm text-green-700 font-semibold">Financial Impact</div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                                    />
                                    <div>
                                        <h4 className="font-black text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-blue-600 font-semibold">{testimonial.role}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="lg:hidden relative mb-16 px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/50 relative"
                        >
                            {testimonials[currentIndex].verified && (
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                                    <Shield className="h-3 w-3 mr-1" />
                                    VERIFIED
                                </div>
                            )}

                            <div className="mb-4">
                                <Quote className="h-8 w-8 text-blue-200" />
                            </div>

                            <div className="flex items-center mb-4">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 text-base">
                                "{testimonials[currentIndex].content}"
                            </p>

                            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 mb-4 border border-green-200">
                                <div className="text-center">
                                    <div className="text-xl font-black text-green-600">{testimonials[currentIndex].savings}</div>
                                    <div className="text-xs text-green-700 font-semibold">Financial Impact</div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img
                                    src={testimonials[currentIndex].avatar}
                                    alt={testimonials[currentIndex].name}
                                    className="w-12 h-12 rounded-full object-cover mr-3 ring-4 ring-white shadow-lg"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                                    <p className="text-blue-600 font-semibold text-sm">{testimonials[currentIndex].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center space-x-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-gray-600 hover:text-blue-600 border border-gray-200"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index)
                                        setIsAutoPlaying(false)
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-blue-600 w-8'
                                            : 'bg-gray-300 hover:bg-blue-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-gray-600 hover:text-blue-600 border border-gray-200"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl md:rounded-[2rem] p-8 md:p-16 text-white text-center mx-4 lg:mx-0 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black mb-6">
                            Join 50,000+ Protected Families
                        </h3>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Don't wait for disaster to strike. <strong>Every day you delay costs you peace of mind.</strong>
                            Get your free quote now and join the family of customers who sleep soundly at night.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <a
                                href="#contact"
                                className="bg-white text-blue-600 hover:bg-gray-100 font-black py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                            >
                                🚀 Get FREE Quote (30 seconds)
                            </a>
                            <a
                                href="tel:555-123-HOPE"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-black py-4 px-8 rounded-2xl transition-all duration-300 text-lg"
                            >
                                📞 Call: (555) 123-HOPE
                            </a>
                        </div>

                        <div className="text-blue-100 text-lg">
                            ⚡ <strong>Quick Approval</strong> • 💰 <strong>Instant Savings</strong> • 🛡️ <strong>Lifetime Protection</strong>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 