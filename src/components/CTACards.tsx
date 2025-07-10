"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

interface CTAOption {
  icon: any;
  title: string;
  description: string;
  action: string;
  color: string;
  bgColor: string;
  iconColor: string;
}

interface CTACardsProps {
  options: CTAOption[];
  delay?: number;
}

export default function CTACards({ options, delay = 0 }: CTACardsProps) {
  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <motion.div
          key={option.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + index * 0.1 }}
          className={`${option.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          onClick={() => {
            window.location.href = "/#hero-quote-section";
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${option.color} rounded-xl shadow-lg mr-4`}
                >
                  <option.icon className={`h-6 w-6 ${option.iconColor}`} />
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  {option.title}
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {option.description}
              </p>
              <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-1">
                {option.action}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div
                className={`w-8 h-8 ${option.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
