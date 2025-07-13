"use client";

import React from "react";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import {
  Shield,
  Star,
  Users,
  Award,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState, useEffect, Suspense, useCallback, useMemo } from "react";
import LazyAnimations from "./LazyAnimations";
import ContactForm from "./ContactForm";

// Constants - Moved to top for better organization
export const STATS = [
  {
    icon: Users,
    value: "90%",
    label: "Protection Guaranteed",
    description: "Sleep peacefully",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Customer Rating",
    description: "Highest rated",
  },
  {
    icon: Award,
    value: "24hrs",
    label: "Turn Around",
    description: "Lightning fast",
  },
  {
    icon: Zap,
    value: "15min",
    label: "Average Response",
    description: "Fast and Reliable",
  },
];

const TRUST_INDICATORS = [
  "💰 Instant Quotes in 30 Seconds",
  "🎯 Save Up to 40% vs Competitors",
  "📞 ASAP Emergency Claim Hotline",
];

const URGENCY_MESSAGES = [
  "Limited Time: Double Coverage at Same Price!",
  "Only 47 Spots Left This Month!",
  "Rates Increasing 15% Next Month!",
  "Special Offer Expires Tonight!",
];

// Performance-optimized animations with reduced motion support
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
};

const MainHeadline = () => (
  <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight sm:leading-[0.9] tracking-tight">
    <span className="text-gray-900 block">Don&apos;t Let</span>
    <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse block mt-0.5 sm:mt-1">
      DISASTER
    </span>
    <span className="text-gray-900 block mt-0.5 sm:mt-1">Destroy Your</span>
    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block mt-0.5 sm:mt-1">
      LIFE
    </span>
  </h1>
);

const CompellingSubheadline = ({
  customerCount,
  scrollToContact,
}: {
  customerCount: number;
  scrollToContact: () => void;
}) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="relative group"
  >
    {/* Background with enhanced visual appeal */}
    <div className="bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg sm:shadow-xl md:shadow-2xl border border-white/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 animate-pulse" />
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl" />

      {/* Main content with enhanced typography and visual hierarchy */}
      <div className="relative z-10">
        {/* Urgency indicator */}
        <div className="flex items-center justify-start mb-2 sm:mb-3">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-red-100 border-2 border-red-300 rounded-full px-2 py-1 sm:px-3 animate-pulse">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-ping" />
            <span className="text-red-700 text-xs font-bold">URGENT</span>
          </div>
        </div>

        {/* Main headline with emotional impact */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900 leading-tight font-bold sm:font-black mb-2 sm:mb-3 text-left">
          <span className="text-red-600 relative">
            Every 7 seconds
            <m.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"
            />
          </span>
          <span className="sm:inline">, a family loses</span>
          <span className="text-red-700 font-black"> everything </span>
          <span className="block sm:inline">
            due to lack of proper insurance.
          </span>
        </h2>

        {/* Solution with visual emphasis */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-md sm:rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4 mb-3 sm:mb-4 border-l-4 border-green-500">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-semibold text-left">
            <span className="text-green-600 font-bold">Don't be next!</span>
            <span className="block sm:inline"> Get protected in just </span>
            <span className="text-blue-600 font-black underline decoration-2 decoration-blue-400 hover:decoration-blue-600 transition-all duration-300 cursor-pointer">
              30 seconds
            </span>
            <span className="sm:inline">
              {" "}
              and join those who choose peace of mind over{" "}
            </span>
            <span className="text-purple-600 font-black bg-purple-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg text-lg sm:text-lg">
              Lack Of Preparedness.
            </span>
          </p>
        </div>

        {/* Call to action with enhanced visual appeal */}
        <div className="mt-3 sm:mt-4 text-left">
          <m.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-4 py-3 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Get Protected Now</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
            </span>
          </m.button>
          <p className="text-xs text-gray-500 mt-2">
            ⚡ Takes only 30 seconds • 💰 Put Cash Back in Your Pocket
          </p>
        </div>
      </div>
    </div>

    {/* Floating elements for visual interest - smaller on mobile */}
    <m.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-yellow-400 text-yellow-900 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold shadow-lg"
    >
      ⚡ LIVE
    </m.div>

    <m.div
      animate={{ rotate: [0, 5, 0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 bg-green-400 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold shadow-lg"
    >
      🛡️ SECURE
    </m.div>
  </m.div>
);

const TrustIndicators = () => (
  <div
    className="overflow-hidden bg-white/80 rounded-lg sm:rounded-xl py-2 sm:py-3 shadow-md sm:shadow-lg"
    role="region"
    aria-label="Trust indicators"
  >
    <div className="flex space-x-3 sm:space-x-4 md:space-x-6 whitespace-nowrap animate-scroll">
      {[...TRUST_INDICATORS, ...TRUST_INDICATORS].map((indicator, index) => (
        <span
          key={index}
          className="text-xs sm:text-sm font-medium sm:font-semibold text-gray-700 flex items-center flex-shrink-0"
        >
          {indicator}
        </span>
      ))}
    </div>
  </div>
);

const StatsGrid = ({ stats }: { stats: typeof STATS }) => (
  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-6 border border-green-200 shadow-lg max-w-2xl mx-auto lg:max-w-none">
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4"
      role="list"
      aria-label="Company statistics"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center group cursor-pointer bg-white/50 rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          role="listitem"
          tabIndex={0}
          aria-label={`${stat.label}: ${stat.value}`}
        >
          <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md sm:rounded-lg md:rounded-xl mb-1 sm:mb-2 shadow-md">
            <stat.icon
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black text-gray-900 leading-none">
            {stat.value}
          </div>
          <div className="text-xs font-bold text-gray-700 leading-tight">
            {stat.label}
          </div>
          <div className="text-xs text-gray-500 hidden md:block">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const UrgencyBanner = ({ currentMessage }: { currentMessage: string }) => (
  <div
    className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white py-1.5 sm:py-2 md:py-3 z-20"
    role="banner"
    aria-label="Urgency message"
  >
    <div className="container mx-auto px-3 sm:px-4">
      <div className="text-center text-xs sm:text-sm font-bold flex items-center justify-center">
        <Zap
          className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-pulse flex-shrink-0"
          aria-hidden="true"
        />
        <span className="truncate">{currentMessage}</span>
      </div>
    </div>
  </div>
);

export const HeroCTASection = ({
  inView,
  enableAnimations,
  scrollToContact,
}: {
  inView: boolean;
  enableAnimations: boolean;
  scrollToContact: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="relative"
      role="complementary"
      aria-label="Quick quote CTA card"
    >
      <m.div
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: enableAnimations ? [0, -8, 0] : 0,
          rotate: enableAnimations ? [0, 2, 0] : 0,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1.4 },
          scale: { duration: 0.6, delay: 1.4 },
          x: { duration: 0.6, delay: 1.4 },
          y: enableAnimations
            ? {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 2.5,
              }
            : { duration: 0 },
          rotate: enableAnimations
            ? {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 2.5,
              }
            : { duration: 0 },
        }}
        className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] z-30 border-2 border-white/20 backdrop-blur-sm"
      >
        <div className="text-center">
          <div className="text-xs sm:text-sm font-bold mb-0.5 sm:mb-1">
            ⚡ High Chances
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black">
            of Approval
          </div>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, x: -30 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: enableAnimations ? [0, 8, 0] : 0,
          rotate: enableAnimations ? [0, -2, 0] : 0,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1.6 },
          scale: { duration: 0.6, delay: 1.6 },
          x: { duration: 0.6, delay: 1.6 },
          y: enableAnimations
            ? {
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 3,
              }
            : { duration: 0 },
          rotate: enableAnimations
            ? {
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 3,
              }
            : { duration: 0 },
        }}
        className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 lg:-bottom-8 lg:-left-8 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 text-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] z-30 border-2 border-white/20 backdrop-blur-sm"
      >
        <div className="text-center">
          <div className="text-xs sm:text-sm font-bold mb-0.5 sm:mb-1">
            🛡️ No Obligation
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black">
            100% Free
          </div>
        </div>
      </m.div>

      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 relative z-10">
        {/* Enhanced Icon with pulsing effect */}
        <m.div
          animate={
            enableAnimations
              ? {
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }
              : {}
          }
          transition={
            enableAnimations
              ? {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 2,
                }
              : {}
          }
          className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl border-2 border-white/30"
        >
          <Star
            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white"
            aria-hidden="true"
          />
        </m.div>

        {/* Enhanced Headline with gradient text */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-1 sm:mb-2 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            🚀 QUICK & EASY PROCESS
          </h3>
          <p className="text-gray-700 text-sm sm:text-base font-semibold">
            Get Your Free Quote in Minutes
          </p>
        </div>

        {/* Enhanced Benefits with staggered animation */}
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3"
          role="group"
          aria-label="Process benefits"
        >
          {["No obligation", "Licensed agent", "Instant quotes"].map(
            (text, index) => (
              <m.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.8 + index * 0.2,
                  ease: "easeOut",
                }}
                className="flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2
                  className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-1 sm:mr-2"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm text-green-700 font-semibold">
                  {text}
                </span>
              </m.div>
            )
          )}
        </div>

        {/* Enhanced CTA Button with hypnotizing effects */}
        <m.div
          animate={
            enableAnimations
              ? {
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }
              : {}
          }
          transition={
            enableAnimations
              ? {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 3,
                }
              : {}
          }
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-white/20 shadow-xl sm:shadow-2xl"
        >
          <div className="text-center">
            <p className="text-white font-bold text-sm sm:text-base mb-2 sm:mb-3">
              Ready to Get Protected?
            </p>
            <m.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 flex items-center group mx-auto shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              aria-label="Start free quote process"
            >
              Start Now
              <ArrowRight
                className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-2"
                aria-hidden="true"
              />
            </m.button>
          </div>
        </m.div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const [currentUrgencyIndex, setCurrentUrgencyIndex] = useState(0);
  const [customerCount, setCustomerCount] = useState(49847);
  const [enableAnimations, setEnableAnimations] = useState(false);

  // Memoized values for better performance
  const currentUrgencyMessage = useMemo(
    () => URGENCY_MESSAGES[currentUrgencyIndex],
    [currentUrgencyIndex]
  );
  const formattedCustomerCount = useMemo(
    () => customerCount.toLocaleString(),
    [customerCount]
  );

  // Optimized callbacks to prevent unnecessary re-renders
  const updateUrgencyIndex = useCallback(() => {
    setCurrentUrgencyIndex((prev) => (prev + 1) % URGENCY_MESSAGES.length);
  }, []);

  const updateCustomerCount = useCallback(() => {
    setCustomerCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
  }, []);

  // Scroll to quote section function
  const scrollToQuoteSection = useCallback(() => {
    const quoteSection = document.getElementById("hero-quote-section");
    if (quoteSection) {
      const rect = quoteSection.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = scrollTop + rect.top - 100; // 100px offset from top

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        const nameInput = document.getElementById("name");
        if (nameInput) {
          nameInput.focus();
        }
      }, 1000); // Wait for scroll animation to complete
    }
  }, []);

  // Enable animations after initial load for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableAnimations(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Optimized intervals with cleanup
  useEffect(() => {
    const interval = setInterval(updateUrgencyIndex, 4000);
    return () => clearInterval(interval);
  }, [updateUrgencyIndex]);

  useEffect(() => {
    const interval = setInterval(updateCustomerCount, 5000);
    return () => clearInterval(interval);
  }, [updateCustomerCount]);

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
        <div className="w-full relative z-10 pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-4 sm:pb-6 md:pb-8">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
              {/* First Column - Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left order-1">
                <MainHeadline />
                <CompellingSubheadline
                  customerCount={customerCount}
                  scrollToContact={scrollToQuoteSection}
                />
                <div className="hidden sm:block">
                  <TrustIndicators />
                </div>
                <StatsGrid stats={STATS} />
              </div>

              {/* Second Column - Visual Card and CTA */}
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 order-2">
                {/* Visual Card */}
                <div className="relative w-full">
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none"
                  >
                    {/* Main Protection Card */}
                    <m.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: enableAnimations ? [0, -6, 0] : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.4 },
                        y: enableAnimations
                          ? {
                              duration: 4,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: 1,
                            }
                          : { duration: 0 },
                      }}
                      className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-5 lg:p-6 border border-white/50 backdrop-blur-lg relative overflow-hidden"
                      role="complementary"
                      aria-label="Protection card"
                    >
                      <div className="text-center space-y-2.5 sm:space-y-3 md:space-y-4 relative z-10">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 rounded-lg sm:rounded-xl shadow-lg">
                          <Shield
                            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white"
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 mb-1 leading-tight">
                            🛡️ TOTAL PROTECTION
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold">
                            Auto • Home • Life • Health • Business
                          </p>
                        </div>

                        <div
                          className="flex items-center justify-center space-x-0.5"
                          role="group"
                          aria-label="Customer rating"
                        >
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current"
                              aria-hidden="true"
                            />
                          ))}
                          <span className="ml-2 text-gray-700 font-black text-sm sm:text-base">
                            4.9/5
                          </span>
                        </div>

                        {/* Live Claims Counter */}
                        <div className="bg-green-100 border-2 border-green-300 rounded-md sm:rounded-lg p-2.5 sm:p-3">
                          <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-green-600 mb-1">
                              Full Protection
                            </div>
                            <div className="text-green-700 font-bold text-xs sm:text-sm">
                              For All That Matters To You
                            </div>
                            <div className="flex items-center justify-center mt-1">
                              <Heart
                                className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse mr-1"
                                aria-hidden="true"
                              />
                              <span className="text-xs text-green-600">
                                Lives Changed Forever
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </m.div>

                    {/* Floating Cards with Motion - better positioned for mobile */}
                    <m.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: enableAnimations ? [0, -4, 0] : 0,
                        rotate: enableAnimations ? [0, 1, 0] : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.5, delay: 0.2 },
                        scale: { duration: 0.5, delay: 0.2 },
                        y: enableAnimations
                          ? {
                              duration: 5,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: 1.5,
                            }
                          : { duration: 0 },
                        rotate: enableAnimations
                          ? {
                              duration: 5,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: 1.5,
                            }
                          : { duration: 0 },
                      }}
                      className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg shadow-lg max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[130px]"
                      role="complementary"
                      aria-label="Full Protection"
                    >
                      <div className="text-xs font-bold">
                        🛡️ Full Protection
                      </div>
                      <div className="text-xs font-black">
                        For All That Matters
                      </div>
                    </m.div>

                    <m.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: enableAnimations ? [0, 4, 0] : 0,
                        rotate: enableAnimations ? [0, -1, 0] : 0,
                      }}
                      transition={{
                        opacity: { duration: 0.5, delay: 0.4 },
                        scale: { duration: 0.5, delay: 0.4 },
                        y: enableAnimations
                          ? {
                              duration: 6,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: 2,
                            }
                          : { duration: 0 },
                        rotate: enableAnimations
                          ? {
                              duration: 6,
                              ease: "easeInOut",
                              repeat: Infinity,
                              delay: 2,
                            }
                          : { duration: 0 },
                      }}
                      className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg shadow-lg max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[130px]"
                      role="complementary"
                      aria-label="Emergency claims support"
                    >
                      <div className="text-xs font-bold">🚨 Emergency</div>
                      <div className="text-xs font-black">ASAP Hotline</div>
                    </m.div>
                  </m.div>
                </div>

                {/* Hero CTA Section - Better mobile layout */}
                <m.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: enableAnimations ? [0, -2, 0] : 0,
                    scale: 1,
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
                        delay: 2,
                      }),
                    },
                    scale: { duration: 0.6, delay: 0.8 },
                  }}
                  className="relative z-20 max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none w-full"
                >
                  <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-5 lg:p-6 border border-white/50 backdrop-blur-lg relative">
                    <HeroCTASection
                      inView={true}
                      enableAnimations={enableAnimations}
                      scrollToContact={scrollToQuoteSection}
                    />
                  </div>
                </m.div>
              </div>
            </div>

            {/* Mobile Trust Indicators - Show on mobile only */}
            <div className="block sm:hidden mt-6">
              <TrustIndicators />
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
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>
    </LazyMotion>
  );
}
