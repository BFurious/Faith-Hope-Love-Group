"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Shield,
  Heart,
  Building,
  Plane,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Languages,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const detailedServices = [
  {
    icon: Shield,
    title: "Accident & Sickness Insurance (Health Insurance)",
    description:
      "Faith Hope Love Group Agency offers comprehensive accident and sickness insurance plans designed to provide financial protection and peace of mind for individuals and families.",
    features: [
      "Individual and Family Accident Insurance Plans: Coverage that helps protect against unexpected expenses resulting from accidental injuries.",
      "Short-Term Disability and Supplemental Health Insurance: Plans that offer temporary income replacement if you are disabled due to illness or injury.",
      "Affordable Care Act (ACA) Compliant Plans: We offer options that meet the standards of the Affordable Care Act, ensuring essential health benefits.",
      "Medicare and Medicaid Assistance: We provide guidance and support in understanding, applying for, and maximizing benefits under Medicare and Medicaid programs.",
    ],
    key: "accident-sickness-insurance",
    color: "primary",
  },
  {
    icon: Building,
    title: "Property & Casualty Insurance (Car & Home Insurance)",
    description:
      "Faith Hope Love Group Agency provides tailored Property and Casualty (P&C) insurance solutions for both individuals and businesses to protect their assets and manage liability risks.",
    features: [
      "Homeowners Insurance: Coverage for your residence and personal property against risks like fire, theft, storms, and liability for injuries on your property.",
      "Renters Insurance: Protects your personal belongings and offers liability coverage while renting a home or apartment.",
      "Personal Auto Insurance: Liability and physical damage protection for your personal vehicles.",
      "Commercial Property Insurance: Covers buildings, equipment, inventory, and business contents from fire, theft, vandalism, and natural disasters.",
    ],
    key: "property-casualty-insurance",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description:
      "Faith Hope Love Group Agency offers comprehensive life insurance solutions designed to provide financial security and peace of mind for you and your loved ones.",
    features: [
      "Term Life Insurance: Provides coverage for a specific period with affordable premiums, ideal for protecting dependents during critical financial years.",
      "Whole Life Insurance: A permanent policy that offers lifetime coverage with fixed premiums and a cash value component that grows over time.",
      "Universal Life Insurance: Flexible permanent life insurance that allows you to adjust your premiums and death benefit, while building cash value.",
      "Final Expense Insurance: Designed to cover funeral costs, burial expenses, and other end-of-life expenses, helping ease the financial burden on your family.",
    ],
    key: "life-insurance",
    color: "accent",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description:
      "At Faith Hope Love Group Agency, we offer Travel Accident & Sickness Insurance to protect travelers from unexpected medical emergencies and travel-related risks.",
    features: [
      "Emergency Medical Coverage: Protection for unexpected illnesses or injuries that occur while traveling, including doctor visits and hospital stays.",
      "Accidental Death & Dismemberment (AD&D): Financial benefits provided to your designated beneficiaries in the event of accidental death or serious injury.",
      "Medical Evacuation & Repatriation: Coverage for emergency transport to the nearest adequate medical facility or return to your home country.",
      "Trip Interruption & Cancellation: Reimbursement for non-refundable travel costs if your trip is interrupted or canceled due to covered reasons.",
    ],
    key: "travel-insurance",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Medicare Plans",
    description:
      "We take the confusion out of Medicare with comprehensive guidance and plan selection for Medicare Advantage, Supplement, and Prescription Drug Plans.",
    features: [
      "Medicare Advantage (Part C): All-in-one plans that may include dental, vision, and prescription drugs with some plans offering $0 premiums.",
      "Medicare Supplement (Medigap): Helps cover costs Original Medicare doesn't, like copays and deductibles with standardized plans (A, B, G, N, etc.).",
      "Prescription Drug Plans (Part D): Standalone plans to cover your medications, helping you pick one based on your current prescriptions.",
      "Annual Plan Reviews: We check if your current plan is still your best fit and help you compare plans from top carriers.",
    ],
    key: "medicare-plans",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Obamacare Enrollment",
    description:
      "Your local ACA enrollment experts helping you find affordable health plans and maximize subsidies & tax credits.",
    features: [
      "Free ACA Marketplace Assistance: We help you apply through the ACA Marketplace with side-by-side comparison of Bronze, Silver, Gold & Platinum plans.",
      "Subsidy & Tax Credit Maximization: We help you understand what's covered and maximize available subsidies and tax credits.",
      "Special Enrollment Help: Assistance after qualifying life events like losing job coverage, moving, having a baby, or turning 26.",
      "Bilingual Support: Available for families, gig workers, and small business owners with special enrollment period help.",
    ],
    key: "obamacare-enrollment",
    color: "primary",
  },
  {
    icon: Building,
    title: "Business (Commercial) Insurance",
    description:
      "Faith Hope Love Group Agency provides comprehensive Business (Commercial) Insurance solutions to protect your company, employees, and assets from various risks and liabilities.",
    features: [
      "Commercial Property Insurance: Coverage for your business property, equipment, inventory, and buildings against fire, theft, vandalism, and natural disasters.",
      "General Liability Insurance: Protection against third-party claims for bodily injury, property damage, and personal injury that may occur on your business premises.",
      "Workers' Compensation Insurance: Required coverage that provides medical benefits and wage replacement for employees injured on the job.",
      "Business Auto Insurance: Commercial vehicle coverage for company cars, trucks, and other business vehicles used for work purposes.",
      "Professional Liability Insurance: Also known as Errors & Omissions (E&O) insurance, protecting against claims of professional negligence or failure to perform services.",
    ],
    key: "business-insurance",
    color: "accent",
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: "Immigration Services",
    description:
      "Professional assistance with immigration forms, correspondence, and notary services for official document authentication.",
    features: [
      "Immigration Form Assistance: Support with completing and organizing immigration-related forms and correspondence.",
      "Professional Notary Services: Licensed notaries verify identity, ensure voluntary signing, and affix official seals to certify authenticity.",
      "Document Authentication: We notarize a wide range of documents including Powers of Attorney, Affidavits, Contracts, and Real Estate Documents.",
      "Translation Services: Reliable translation and interpretation services between French and English for clear communication.",
    ],
    key: "immigration-services",
    color: "secondary",
  },
  {
    icon: FileText,
    title: "Notary Services",
    description:
      "Faith Hope Love Group Agency provides professional notary services to help you with the official witnessing and authentication of important documents. Our licensed notaries verify the identity of signers, ensure documents are signed voluntarily, and affix the official notary seal to certify authenticity.",
    features: [
      "Powers of Attorney: Official notarization of legal documents granting authority to act on your behalf.",
      "Affidavits: Authentication of sworn statements and declarations for legal proceedings.",
      "Contracts and Agreements: Notarization of business contracts, real estate agreements, and legal documents.",
      "Real Estate Documents: Official authentication of property-related documents and transactions.",
      "Medical Directives: Notarization of advance healthcare directives and medical power of attorney.",
      "Immigration Forms: Authentication of immigration-related documents and applications.",
      "Loan Documents: Official notarization of financial agreements and loan paperwork.",
    ],
    key: "notary-services",
    color: "secondary",
  },
  {
    icon: Languages,
    title: "Translation & Interpretation Service (French & English)",
    description:
      "Faith Hope Love Group Agency offers reliable translation and interpretation services between French and English to ensure clear and accurate communication for our clients.",
    features: [
      "Translation Services: We provide precise written translations of documents, forms, correspondence, and other materials from French to English and vice versa. Our translations preserve the original meaning, tone, and context to ensure your documents remain legally and culturally appropriate.",
      "Interpretation Services: We offer basic interpretation assistance to support urgent communication needs between French and English speakers. Our team assists as time permits, aiming to help alleviate financial burdens that may arise from hiring professional interpreters.",
      "Document and Form Translations: Professional translation of official documents, forms, and correspondence while maintaining legal validity and cultural sensitivity.",
      "Community Language Support: Through our community involvement, we strive to provide accessible language support while recognizing the importance of professional interpretation in critical settings.",
    ],
    key: "translation-interpretation-service",
    color: "primary",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description:
      "Complete coverage solutions for all aspects of your life and business",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description: "Licensed professionals with great experience in insurance",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Custom solutions tailored to your unique needs and budget",
  },
  {
    icon: Award,
    title: "Trusted Partners",
    description: "Working with top-rated carriers to provide the best coverage",
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+1-770-882-4899",
    description: "Speak with a licensed specialist",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "care@faholog.com",
    description: "Get a quick response",
  },
  {
    icon: MapPin,
    title: "Georgia Licensed",
    value: "Serving Georgia Residents",
    description: "Local expertise and support",
  },
];

export default function ServicesPage() {
  const [highlightedService, setHighlightedService] = useState<string | null>(
    null
  );

  useEffect(() => {
    // Check for hash in URL on component mount
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setHighlightedService(hash);

        // Scroll to the service section
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }

        // Remove highlight after 3 seconds
        setTimeout(() => {
          setHighlightedService(null);
        }, 3000);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive{" "}
              <span className="text-accent-300">Insurance Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Faith Hope Love Group Agency offers a complete range of insurance
              products and services designed to protect what matters most to you
              and your family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#hero-quote-section"
                className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+1-770-882-4899"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                Call +1-770-882-4899
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              const serviceId =
                service.key || service.title.toLowerCase().replace(/\s+/g, "-");
              const isHighlighted = highlightedService === serviceId;

              return (
                <motion.div
                  id={serviceId}
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  className={`bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 ${
                    isHighlighted
                      ? "ring-4 ring-primary-400 ring-opacity-50 animate-pulse"
                      : ""
                  }`}
                  animate={
                    isHighlighted
                      ? {
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          ],
                        }
                      : {}
                  }
                  transition={
                    isHighlighted
                      ? {
                          duration: 2,
                          repeat: 3,
                          ease: "easeInOut",
                        }
                      : { duration: 0.7, delay: index * 0.1 }
                  }
                >
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      service.color === "primary"
                        ? "bg-primary-100"
                        : service.color === "secondary"
                        ? "bg-secondary-100"
                        : "bg-accent-100"
                    }`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${
                        service.color === "primary"
                          ? "text-primary-600"
                          : service.color === "secondary"
                          ? "text-secondary-600"
                          : "text-accent-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core insurance offerings, we also provide specialized
              services to support your health coverage needs and legal
              documentation requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              const serviceId =
                service.key || service.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.div
                  id={serviceId}
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      service.color === "primary"
                        ? "bg-primary-100"
                        : service.color === "secondary"
                        ? "bg-secondary-100"
                        : "bg-accent-100"
                    }`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${
                        service.color === "primary"
                          ? "text-primary-600"
                          : service.color === "secondary"
                          ? "text-secondary-600"
                          : "text-accent-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Faith Hope Love Group?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're committed to providing exceptional service and comprehensive
              protection that fits your unique needs and budget.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-100">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our Georgia-based insurance specialists are here to help you find
              the perfect coverage that fits your unique needs and budget.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-soft text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {info.title}
                  </h3>
                  <p className="text-xl font-bold text-primary-600 mb-2">
                    {info.value}
                  </p>
                  <p className="text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#hero-quote-section" className="btn-primary group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+1-770-882-4899" className="btn-secondary group">
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
