"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
} from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Today",
    details: "+1-770-882-4899",
    subtitle: "Speak with a licensed insurance specialist",
    action: "Call Now",
    type: "phone",
    target: "+1-770-882-4899",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "care@faholog.com",
    subtitle: "care@faholog.com",
    action: "Send Email",
    type: "email",
    target: "care@faholog.com",
  },
  {
    icon: MapPin,
    title: "Georgia-Based",
    details: "Licensed Insurance agent",
    subtitle: "Serving Georgia residents",
    action: "Learn More",
    type: "map",
    target: "https://www.google.com/maps/place/Georgia",
  },
];

export default function HomeContact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
            <MessageCircle className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-primary-700 text-sm font-medium">
              Let's Find Your Coverage
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get <span className="gradient-text">Protected?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey with Faith Hope Love Group. Our Georgia-based
            agent are here to help you find the right protection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm
              title="Get Your Free Quote"
              subtitle="Fill out the form below and we'll get back to you within 24 hours."
              submitButtonText="Start My Free Quote"
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Hero CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-8" />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">Quick & Easy</h3>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Get Your Free Quote in Minutes
                </h4>
                <p className="text-blue-100 mb-6">
                  No commitment required. Our licensed agent will help you find
                  the perfect coverage for your needs and budget.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <span className="text-sm">No obligation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <span className="text-sm">Licensed agent</span>
                    </div>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
                    Start Now →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <ContactInfo
              items={contactInfo.map((item) => ({
                ...item,
                type: item.type as "phone" | "email" | "map" | "form",
              }))}
              delay={0.6}
            />

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h4 className="font-bold text-gray-900 mb-4">
                Why Choose Faith Hope Love Group?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "No-obligation quotes",
                  "Licensed Georgia agent",
                  "ASAP emergency support",
                  "Personalized coverage",
                  "Competitive rates",
                ].map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
