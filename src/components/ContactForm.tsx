"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Shield,
  CheckCircle2,
  AlertCircle,
  Send,
  Clock,
  Star,
} from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
}

export default function ContactForm({
  title = "Get Your Free Quote",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  submitButtonText = "Start My Free Quote",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bestTime: "",
    message: "",
    insuranceType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const bestTimeOptions = ["Morning", "Afternoon", "Evening", "Anytime"];

  const insuranceTypes = [
    "Auto Insurance",
    "Home Insurance",
    "Life Insurance",
    "Health Insurance",
    "Business (Commercial) Insurance",
    "Obamacare",
    "Medicare",
    "Travel Insurance",
    "Notary Services",
    "Translation & Interpretation",
    "Other",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.bestTime.trim()) {
      newErrors.bestTime = "Please select the best time to contact";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your insurance needs";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          bestTime: formData.bestTime,
          insuranceType: formData.insuranceType,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          bestTime: "",
          message: "",
          insuranceType: "",
        });
      }, 3000);
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMsg(
        err.message || "Failed to send message. Please try again later."
      );
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your message has been sent successfully. One of our licensed insurance
          specialists will contact you within 24 hours.
        </p>
        <div className="flex items-center justify-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>Response within 24 hours</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
      id="hero-quote-section"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-8" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full translate-y-12 -translate-x-8" />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 shadow-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8 p-4 bg-gray-50 rounded-2xl">
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="h-4 w-4 mr-2 text-green-600" />
            <span>Licensed agent</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            <span>Free Quotes</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-blue-600" />
            <span>24h Response</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                placeholder="Enter your email address"
              />
            </div>
            {errors.email && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.phone
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                placeholder="Enter your phone number"
              />
            </div>
            {errors.phone && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.phone}
              </div>
            )}
          </div>

          {/* Best Time to Contact Field */}
          <div>
            <label
              htmlFor="bestTime"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Best Time to Contact *
            </label>
            <div className="relative">
              <select
                id="bestTime"
                value={formData.bestTime}
                onChange={(e) => handleInputChange("bestTime", e.target.value)}
                className={`w-full pr-4 py-4 pl-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.bestTime
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              >
                <option value="">Select best time</option>
                {bestTimeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {errors.bestTime && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <span className="mr-1">&#9888;</span>
                {errors.bestTime}
              </div>
            )}
          </div>

          {/* Insurance Type Field */}
          <div>
            <label
              htmlFor="insuranceType"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Insurance Type
            </label>
            <div className="relative">
              <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                id="insuranceType"
                value={formData.insuranceType}
                onChange={(e) =>
                  handleInputChange("insuranceType", e.target.value)
                }
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-100 transition-all duration-300 appearance-none bg-white"
              >
                <option value="">Select insurance type</option>
                {insuranceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Tell Us About Your Needs *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
                placeholder="Describe your insurance needs, current coverage, or any questions you have..."
              />
            </div>
            {errors.message && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message}
              </div>
            )}
          </div>

          {errorMsg && (
            <div className="text-red-600 text-center text-sm mb-2">
              {errorMsg}
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                {submitButtonText}
              </>
            )}
          </motion.button>

          {/* Privacy notice */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By submitting this form, you agree to our privacy policy and consent
            to being contacted by our team. We respect your privacy and will
            never share your information with third parties.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
