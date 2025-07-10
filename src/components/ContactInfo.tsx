"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink, MessageSquare } from "lucide-react";
import { emailService } from "@/lib/emailService";

interface ContactItem {
  icon: any;
  title: string;
  details: string;
  subtitle: string;
  action: string;
  type: "email" | "phone" | "map" | "form";
  target?: string;
}

interface ContactInfoProps {
  items: ContactItem[];
  delay?: number;
}

// Constants for better maintainability
const ICON_MAP = {
  email: Mail,
  phone: Phone,
  map: MapPin,
  form: MessageSquare,
} as const;

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
} as const;

const CARD_CLASSES = {
  container:
    "flex flex-col items-center bg-white rounded-3xl p-8 shadow-xl justify-between border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer",
  iconContainer:
    "w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg mb-4",
  icon: "h-8 w-8 text-white",
  title: "text-xl font-bold text-gray-900 mb-1 text-center",
  subtitle: "text-gray-500 text-base mb-2 text-center",
  button:
    "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all duration-300 group-hover:scale-105",
  buttonIcon: "h-4 w-4",
} as const;

// Action handlers mapping with proper error handling
type ActionHandler = ((target: string) => void) | (() => void);

const ACTION_HANDLERS: Record<string, ActionHandler> = {
  email: (target: string) => {
    try {
      const emailLink = emailService.getDirectEmailLink(
        target,
        "Inquiry from Faith Hope Love Group Website",
        "Hello, I would like to learn more about your insurance services."
      );
      window.location.href = emailLink;
    } catch (error) {
      console.error("Error creating email link:", error);
      // Fallback to simple mailto
      window.location.href = `mailto:${target}`;
    }
  },
  phone: (target: string) => {
    try {
      const phoneLink = emailService.getPhoneCallLink(target);
      window.location.href = phoneLink;
    } catch (error) {
      console.error("Error creating phone link:", error);
      // Fallback to simple tel
      window.location.href = `tel:${target.replace(/\s/g, "")}`;
    }
  },
  map: (target: string) => {
    try {
      // Default to Google Maps for Georgia if no specific target
      const mapUrl = target || "https://www.google.com/maps/place/Georgia";
      window.open(mapUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening map:", error);
      // Fallback to Google Maps
      window.open(
        "https://www.google.com/maps/place/Georgia",
        "_blank",
        "noopener,noreferrer"
      );
    }
  },
  form: () => {
    try {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback to quote section
        const quoteSection = document.getElementById("hero-quote-section");
        if (quoteSection) {
          quoteSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } catch (error) {
      console.error("Error scrolling to form:", error);
    }
  },
};

// Extracted contact card component
const ContactCard = ({
  item,
  index,
  delay,
  onAction,
}: {
  item: ContactItem;
  index: number;
  delay: number;
  onAction: (item: ContactItem) => void;
}) => {
  const IconComponent = ICON_MAP[item.type] || ExternalLink;

  return (
    <motion.div
      {...ANIMATION_CONFIG}
      transition={{
        ...ANIMATION_CONFIG.transition,
        delay: delay + index * 0.1,
      }}
      className={CARD_CLASSES.container}
      onClick={() => onAction(item)}
    >
      {/* Icon and Title Section */}
      <div className="flex flex-col items-center mb-6">
        <div className={CARD_CLASSES.iconContainer}>
          <item.icon className={CARD_CLASSES.icon} />
        </div>
        <h4 className={CARD_CLASSES.title}>{item.title}</h4>
        <p className={CARD_CLASSES.subtitle}>{item.subtitle}</p>
      </div>

      {/* Action Button */}
      <button className={CARD_CLASSES.button}>
        {item.action}
        <IconComponent className={CARD_CLASSES.buttonIcon} />
      </button>
    </motion.div>
  );
};

export default function ContactInfo({ items, delay = 0 }: ContactInfoProps) {
  const handleContactAction = (item: ContactItem) => {
    try {
      const handler = ACTION_HANDLERS[item.type];
      if (handler) {
        if (item.type === "form") {
          (handler as () => void)();
        } else if (item.target) {
          handler(item.target);
        } else {
          // Use details as fallback target
          const fallbackTarget = item.details || item.subtitle;
          if (fallbackTarget) {
            handler(fallbackTarget);
          } else {
            console.error("No target provided for action:", item.type);
          }
        }
      } else {
        console.error("No handler found for action type:", item.type);
      }
    } catch (error) {
      console.error("Error handling contact action:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <ContactCard
          key={`${item.title}-${index}`}
          item={item}
          index={index}
          delay={delay}
          onAction={handleContactAction}
        />
      ))}
    </div>
  );
}
