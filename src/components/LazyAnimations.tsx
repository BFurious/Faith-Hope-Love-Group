'use client'

import { motion } from 'framer-motion'

export default function LazyAnimations() {
    return (
        <div className="absolute inset-0">
            {/* Background Gradient Blobs */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-5 right-5 sm:top-10 sm:right-10 md:right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-48 md:h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 md:opacity-30 blur-xl md:blur-2xl"
            />

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, 15, 0],
                    scale: [1, 0.9, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 left-5 sm:bottom-15 sm:left-10 md:left-20 w-12 h-12 sm:w-20 sm:h-20 md:w-40 md:h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 md:opacity-25 blur-xl md:blur-2xl"
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -60, 0],
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: 3 + i * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                        className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>
        </div>
    )
} 