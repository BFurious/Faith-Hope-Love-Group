"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, Shield, Sparkles, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { STATS } from "./Hero";

const testimonials = [
  {
    id: "1",
    name: "Marcus Johnson",
    role: "Father of 2",
    company: "Family Protection Plan",
    content:
      "Faith Hope Love Group made getting insurance so easy! They guided me through every step and found me the perfect family plan that fits our budget. No more stress about protection.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
    verified: true,
    featured: true,
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Small Business Owner",
    company: "Chen's Restaurant Chain",
    content:
      "Faith Hope Love Group guided me through the entire insurance process. Their expertise helped me get comprehensive business coverage that gives me peace of mind.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=10",
    verified: true,
    featured: false,
  },
  {
    id: "3",
    name: "Kofi Mensah",
    role: "Healthcare Professional",
    company: "City Hospital Doctor",
    content:
      "Faith Hope Love Group helped me find the perfect health insurance plan. Their guidance was invaluable and they made the whole process stress-free.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
    verified: true,
    featured: true,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "Single Mother",
    company: "Education Professional",
    content:
      "As a single mom, I needed affordable insurance. Faith Hope Love Group helped me find a plan that covers everything my family needs without breaking the bank.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
    verified: true,
    featured: false,
  },
  {
    id: "5",
    name: "Zara Okechukwu",
    role: "Young Professional",
    company: "Tech Startup Employee",
    content:
      "I thought insurance was complicated until I met Faith Hope Love Group. They explained everything in simple terms and helped me get great coverage at an affordable price.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=13",
    verified: true,
    featured: true,
  },
  {
    id: "6",
    name: "Michael Thompson",
    role: "Construction Worker",
    company: "Thompson Construction",
    content:
      "Getting insurance through Faith Hope Love Group was the best decision I made. They found me great coverage that protects my family and my future.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=14",
    verified: true,
    featured: false,
  },
  {
    id: "7",
    name: "Amara Nwosu",
    role: "Retired Teacher",
    company: "Education Professional",
    content:
      "Faith Hope Love Group helped me understand my insurance options and find the perfect plan for my retirement years. Their guidance was invaluable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
    verified: true,
    featured: true,
  },
  {
    id: "8",
    name: "David Wilson",
    role: "Financial Advisor",
    company: "Wilson Financial Services",
    content:
      "I recommend Faith Hope Love Group to all my clients. Their personalized approach and expert guidance make getting insurance simple and stress-free.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=16",
    verified: true,
    featured: false,
  },
  {
    id: "9",
    name: "Jabari Washington",
    role: "Business Owner",
    company: "Washington Auto Repair",
    content:
      "Faith Hope Love Group guided me through the entire insurance process. Their expertise helped me get comprehensive business coverage that gives me peace of mind.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=17",
    verified: true,
    featured: true,
  },
  {
    id: "10",
    name: "Lisa Martinez",
    role: "Healthcare Professional",
    company: "City Hospital Nurse",
    content:
      "Faith Hope Love Group found me the perfect health insurance plan. Their expertise and guidance made the whole process simple and stress-free.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=18",
    verified: true,
    featured: false,
  },
  {
    id: "11",
    name: "DeAndre Jackson",
    role: "Entrepreneur",
    company: "Jackson Consulting",
    content:
      "Faith Hope Love Group helped me get comprehensive business insurance that protects my company and my family. Their guidance made all the difference.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=19",
    verified: true,
    featured: true,
  },
  {
    id: "12",
    name: "Jennifer Adams",
    role: "Young Professional",
    company: "Marketing Agency",
    content:
      "Faith Hope Love Group made getting insurance easy and affordable. They explained everything clearly and helped me find the perfect coverage for my needs.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=20",
    verified: true,
    featured: false,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
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
            <span className="text-gray-900">Lives</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Transformed
            </span>{" "}
            <span className="text-gray-900">Forever</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            <strong>Over 50,000 families</strong> trust us with their most
            precious assets. Here's why they chose us and never looked back.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20 px-4 lg:px-0"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl mb-4 shadow-lg">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-2xl md:text-4xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-bold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-Row Marquee Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-16"
        >
          {/* Blur Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent z-20 pointer-events-none" />

          {/* First Row - Moving Left */}
          <div
            className="relative mb-12 overflow-hidden pb-8"
            onMouseEnter={() => setIsPaused1(true)}
            onMouseLeave={() => setIsPaused1(false)}
          >
            <div
              ref={marqueeRef1}
              className="flex animate-marquee-left"
              style={{
                animationPlayState: isPaused1 ? "paused" : "running",
                animationDuration: "40s",
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${testimonial.id}`}
                  className="flex-shrink-0 w-64 md:w-72 mx-3"
                >
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/50 relative h-full flex flex-col justify-between">
                    {testimonial.verified && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Shield className="h-3 w-3 mr-1" />
                        VERIFIED
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="mb-3">
                        <Quote className="h-6 w-6 text-blue-200" />
                      </div>

                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 leading-relaxed text-sm">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-white shadow-md"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 font-medium text-xs">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-duplicate-${testimonial.id}`}
                  className="flex-shrink-0 w-64 md:w-72 mx-3"
                >
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/50 relative h-full flex flex-col justify-between">
                    {testimonial.verified && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Shield className="h-3 w-3 mr-1" />
                        VERIFIED
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="mb-3">
                        <Quote className="h-6 w-6 text-blue-200" />
                      </div>

                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 leading-relaxed text-sm">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-white shadow-md"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 font-medium text-xs">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div
            className="relative overflow-hidden pb-8"
            onMouseEnter={() => setIsPaused2(true)}
            onMouseLeave={() => setIsPaused2(false)}
          >
            <div
              ref={marqueeRef2}
              className="flex animate-marquee-right"
              style={{
                animationPlayState: isPaused2 ? "paused" : "running",
                animationDuration: "35s",
              }}
            >
              {/* First set of testimonials */}
              {testimonials
                .slice()
                .reverse()
                .map((testimonial, index) => (
                  <div
                    key={`second-${testimonial.id}`}
                    className="flex-shrink-0 w-64 md:w-72 mx-3"
                  >
                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/50 relative h-full flex flex-col justify-between">
                      {testimonial.verified && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                          <Shield className="h-3 w-3 mr-1" />
                          VERIFIED
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="mb-3">
                          <Quote className="h-6 w-6 text-blue-200" />
                        </div>

                        <div className="flex items-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>

                        <p className="text-gray-700 leading-relaxed text-sm">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center mt-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-white shadow-md"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 font-medium text-xs">
                            {testimonial.role}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Duplicate set for seamless loop */}
              {testimonials
                .slice()
                .reverse()
                .map((testimonial, index) => (
                  <div
                    key={`second-duplicate-${testimonial.id}`}
                    className="flex-shrink-0 w-64 md:w-72 mx-3"
                  >
                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/50 relative h-full flex flex-col justify-between">
                      {testimonial.verified && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                          <Shield className="h-3 w-3 mr-1" />
                          VERIFIED
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="mb-3">
                          <Quote className="h-6 w-6 text-blue-200" />
                        </div>

                        <div className="flex items-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>

                        <p className="text-gray-700 leading-relaxed text-sm">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center mt-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-white shadow-md"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 font-medium text-xs">
                            {testimonial.role}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl md:rounded-[2rem] p-8 md:p-16 text-white text-center mx-4 lg:mx-0 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col gap-4 justify-between items-center">
            <h3 className="text-3xl md:text-5xl font-black">
              Join 50,000+ Satisfied Customers
            </h3>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Don't wait to get the protection you deserve.{" "}
              <strong>
                Every day you delay is another day without proper coverage.
              </strong>
              Get your free quote now and join thousands of families who trust
              us to guide them to the perfect insurance plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-12 justify-center">
              <Link href="/#hero-quote-section" className="btn-primary group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/testimonials" className="btn-secondary group">
                Read More Stories
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="text-blue-100 text-lg">
              ⚡ <strong>Expert Guidance</strong> • 💰{" "}
              <strong>Affordable Plans</strong> • 🛡️{" "}
              <strong>Comprehensive Coverage</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
