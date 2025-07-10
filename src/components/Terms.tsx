"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Users,
  Heart,
} from "lucide-react";

const sections = [
  {
    title: "1. Eligibility and Authorized Use",
    icon: Users,
    content: [
      "You must be at least 18 years old and located within the United States to use our Site and Services. By using the Site, you represent and warrant that you meet these requirements.",
      "You agree to use the Site and Services only for lawful purposes and not to:",
      "• Engage in fraudulent, illegal, or unauthorized activities",
      "• Impersonate any person or entity",
      "• Submit false, misleading, or incomplete information",
      "• Attempt unauthorized access to any part of the Site or its systems",
      "• Upload or transmit viruses, malware, bots, or any harmful code",
      "We reserve the right to suspend or terminate access to the Site for violations of these Terms.",
    ],
  },
  {
    title: "2. Informational Use Only",
    icon: AlertTriangle,
    content: [
      "All materials on the Site are for general informational purposes only and do not constitute legal, financial, or insurance advice. Descriptions of insurance coverage, product availability, underwriting guidelines, and pricing may vary by state and are subject to change without notice. Nothing on this Site constitutes a binding offer, guarantee of coverage, or final quote.",
    ],
  },
  {
    title: "3. Insurance Services",
    icon: Shield,
    content: [
      "We offer the following insurance products through licensed carriers, subject to availability and underwriting approval:",
      "• Accident & Sickness Insurance – Covers eligible medical expenses and income replacement due to illness or injury.",
      "• Property & Casualty Insurance – Protects physical property from losses due to perils like fire or theft, and provides various types of liability policies, such as the general liability, etc.",
      "• Life Insurance – Provides financial protection to your beneficiaries upon death.",
      "• Property Insurance – Comprehensive coverage for physical assets.",
      "• Title Insurance – Protects buyers/lenders from financial loss due to defects in property titles such as undiscovered liens, ownership disputes, or filing errors.",
      "• Travel Accident & Sickness Insurance – Offers emergency medical coverage while traveling internationally or domestically, including hospitalization, evacuation, or accidental injury benefits.",
      "• Travel Ticket Insurance – Reimburses prepaid travel expenses in cases of trip cancellations, interruptions, delays, or other covered disruptions.",
      "",
      "Quotes and Applications:",
      "Submitting a request or application via the Site does not guarantee coverage. All applications are subject to carrier underwriting and approval. We may decline or cancel requests at our sole discretion in accordance with the law.",
    ],
  },
  {
    title: "4. Account Security and User Responsibilities",
    icon: Lock,
    content: [
      "If you create an account or submit forms:",
      "• You are responsible for maintaining the confidentiality of your login credentials",
      "• You agree to provide accurate and current information",
      "• You must not share your account or use another's login",
      "• We are not liable for losses from unauthorized use due to your failure to safeguard your account",
    ],
  },
  {
    title: "5. Intellectual Property",
    icon: FileText,
    content: [
      "All content on this Site—including text, graphics, logos, software, documents, layout, design, and media—is the property of Faith Hope Love Group or its licensors and is protected by intellectual property laws.",
      "You may download or print materials for personal, non-commercial use only. Any reproduction, distribution, modification, or public display without our written consent is strictly prohibited.",
    ],
  },
  {
    title: "6. Third-Party Links",
    icon: ExternalLink,
    content: [
      "Our Site may contain links to third-party websites or services. These are provided for your convenience only.",
      "We do not control or endorse any third-party content and are not responsible for their availability, accuracy, or privacy practices. Your use of third-party sites is at your own risk and subject to their terms.",
    ],
  },
  {
    title: "7. Privacy and Data Usage",
    icon: Heart,
    content: [
      "At Faith Hope Love Group, we respect your privacy and are committed to protecting your personal information. This section explains how we collect, use, disclose, and safeguard your data when you visit our Site or use our Services.",
      "",
      "Information We Collect:",
      "• Personal Information: Name, address, phone number, email, date of birth, Social Security number, driver's license, health details, and other information necessary for insurance applications.",
      "• Non-Personal Information: IP address, browser type, pages visited, and other anonymous website usage data.",
      "• Third-Party Information: Information from carriers, quoting engines, or referral partners, if applicable.",
      "",
      "How We Use Your Information:",
      "• Provide insurance quotes and policy recommendations",
      "• Process applications and manage insurance policies",
      "• Respond to inquiries or service requests",
      "• Meet legal, regulatory, or compliance requirements",
      "• Improve our website and marketing efforts",
      "",
      "How We Share Your Information:",
      "• Licensed insurance carriers for quoting and underwriting",
      "• Regulatory or legal authorities as required by law",
      "• With your consent, for any other purpose you approve",
      "",
      "Very Important Note: We do not sell your personal information to third parties.",
      "",
      "Data Security:",
      "We implement industry-standard safeguards to protect your data, including encryption, firewalls, and secure servers. However, no data transmission over the internet can be guaranteed 100% secure.",
      "",
      "Cookies and Tracking:",
      "We may use cookies and similar technologies to enhance user experience, gather analytics, and remember preferences. You can disable cookies through your browser settings, though this may impact site functionality.",
      "",
      "Your Rights:",
      "Depending on your location, you may have the right to:",
      "• Access, correct, or delete your personal data",
      "• Opt out of marketing communications",
      "• Withdraw consent for data processing",
      "• File a complaint with a data protection authority",
      "",
      "To exercise your rights, contact us at: info@hopefaithlovegroup.com",
    ],
  },
  {
    title: "8. Disclaimer of Warranties",
    icon: AlertTriangle,
    content: [
      'The Site and all Services are provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that:',
      "• The Site will be uninterrupted, secure, or error-free",
      "• The content will always be current, accurate, or reliable",
      "• The Site is free from viruses or harmful components",
      "",
      "To the maximum extent allowed by law, we disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    icon: Shield,
    content: [
      "To the fullest extent permitted by law, Faith Hope Love Group is not liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Site, Services, or reliance on its content. This limitation applies regardless of the legal theory and even if we were advised of the possibility of such damages.",
    ],
  },
  {
    title: "10. Termination of Access",
    icon: Lock,
    content: [
      "We may suspend, restrict, or terminate your access to the Site or Services at our discretion, with or without notice, for any reason, including violations of these Terms.",
    ],
  },
  {
    title: "11. Changes to This Agreement",
    icon: FileText,
    content: [
      'We may update this Agreement at any time. When we do, we will revise the "Effective Date" at the top of this page. Continued use of the Site after changes have been made constitutes your acceptance of the updated Terms. We encourage you to review this Agreement regularly.',
    ],
  },
  {
    title: "12. Governing Law and Jurisdiction",
    icon: CheckCircle,
    content: [
      "These Terms are governed by the laws of the State of Georgia, without regard to its conflict of law rules. Any disputes shall be exclusively resolved in the courts located in Georgia.",
    ],
  },
  {
    title: "13. Entire Agreement",
    icon: FileText,
    content: [
      "These Terms and our Privacy Policy constitute the entire agreement between you and Faith Hope Love Group regarding your use of this Site and supersede all prior or contemporaneous communications, whether oral or written.",
    ],
  },
];

export default function Terms() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
            <FileText className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-primary-700 text-sm font-medium">
              Legal Terms
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Terms of Use and{" "}
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            Welcome to the website of Faith Hope Love Group ("Company," "we,"
            "us," or "our"). These Terms of Use and Privacy Policy
            (collectively, "Agreement") form a legally binding agreement between
            you and Faith Hope Love Group, regarding your access to and use of
            our website and all related services.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p>
              Effective Date:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-red-800 mb-2">
                  Important Notice
                </h3>
                <p className="text-red-700 text-sm md:text-base">
                  By accessing or using the Site or Services, you confirm that
                  you have read, understood, and agree to these Terms and our
                  Privacy Policy. If you do not agree, you must not access or
                  use the Site.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-soft"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={paragraph.startsWith("•") ? "ml-4" : ""}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 md:mt-16 text-center bg-primary-50 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Use or our Privacy
              Policy, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="/#hero-quote-section"
                className="btn-primary text-sm md:text-base"
              >
                Contact Us
              </a>
              <a
                href="/disclaimer"
                className="btn-secondary text-sm md:text-base"
              >
                View Legal Disclaimer
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
