'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Heart,
    Shield,
    Users,
    Award,
    CheckCircle,
    TrendingUp,
    Clock
} from 'lucide-react'

const values = [
    {
        icon: Heart,
        title: 'Hope',
        description: 'We believe in a brighter future and help you prepare for it with confidence.',
        color: 'text-red-500'
    },
    {
        icon: Shield,
        title: 'Faith',
        description: 'Built on trust and reliability, we stand by our promises and commitments.',
        color: 'text-blue-500'
    },
    {
        icon: Users,
        title: 'Love',
        description: 'Every client is family. We care deeply about protecting what matters to you.',
        color: 'text-green-500'
    }
]

const achievements = [
    {
        icon: Award,
        stat: '25+',
        label: 'Years of Excellence'
    },
    {
        icon: Users,
        stat: '50,000+',
        label: 'Satisfied Customers'
    }
]

const features = [
    {
        icon: Clock,
        title: '24/7 Customer Support',
        description: 'Round-the-clock assistance when you need it most'
    },
    {
        icon: Clock,
        title: 'Personal Relationship',
        description: 'Dedicated agent who know you and your needs'
    },
    {
        icon: TrendingUp,
        title: 'Competitive Rates',
        description: 'Best value coverage without compromising quality'
    },
    {
        icon: Shield,
        title: 'Comprehensive Coverage',
        description: 'Complete protection for all aspects of your life'
    }
]

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
                        <Heart className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-sm font-medium">
                            Our Story & Values
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                        Built on{' '}
                        <span className="gradient-text">Hope, Faith & Love</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        we've been more than just an insurance company.
                        We're a family-owned business dedicated to protecting families like yours.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 md:space-y-8 px-4 lg:px-0"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                A Legacy of Trust and Protection
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Founded in 1998 by the Johnson family, Hope Faith and Love Group began with a simple mission:
                                to provide personalized insurance solutions that truly protect what matters most to our clients.
                            </p>

                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                What started as a small local agency has grown into a trusted regional provider,
                                but we've never lost sight of our core values. Every policy we write, every claim we handle,
                                and every relationship we build is guided by hope for the future, faith in our commitments,
                                and love for our community.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 md:space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start space-x-3 md:space-x-4 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                                        <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{feature.title}</h4>
                                        <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6 md:space-y-8 px-4 lg:px-0"
                    >
                        {/* Core Values */}
                        <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                                Our Core Values
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                {values.map((value, index) => (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                        className="flex items-start space-x-3 md:space-x-4"
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-soft`}>
                                            <value.icon className={`h-5 w-5 md:h-6 md:w-6 ${value.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{value.title}</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">{value.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-soft hover:shadow-medium transition-shadow duration-300"
                                >
                                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg mb-3 md:mb-4">
                                        <achievement.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{achievement.stat}</div>
                                    <div className="text-xs md:text-sm text-gray-600">{achievement.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center"
                >
                    <div className="text-center mt-4">
                    <a href="/about" className="btn-primary text-sm md:text-base">
                        Learn More About Us
                    </a>
                </div>
                </motion.div>
            </div>
        </section>
    )
} 