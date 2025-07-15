"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import {
  SOCIAL_MEDIA_PROFILES,
  getActiveProfiles,
  SocialMediaProfile,
} from "@/data/socialMediaProfiles";

// Icon mapping
const ICON_MAP = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
};

interface SocialMediaProfilesProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  variant?: "default" | "minimal" | "cards";
  title?: string;
  description?: string;
}

export default function SocialMediaProfiles({
  className = "",
  size = "md",
  showLabels = false,
  variant = "default",
  title = "Follow Us",
  description = "Stay connected with us on social media",
}: SocialMediaProfilesProps) {
  const activeProfiles = getActiveProfiles(SOCIAL_MEDIA_PROFILES);

  // Don't render if no active profiles
  if (activeProfiles.length === 0) {
    return null;
  }

  const sizeClasses = {
    sm: {
      container: "gap-2",
      icon: "w-8 h-8",
      iconSize: "w-4 h-4",
      text: "text-sm",
    },
    md: {
      container: "gap-3",
      icon: "w-10 h-10",
      iconSize: "w-5 h-5",
      text: "text-base",
    },
    lg: {
      container: "gap-4",
      icon: "w-12 h-12",
      iconSize: "w-6 h-6",
      text: "text-lg",
    },
  };

  const variantClasses = {
    default: "flex items-center",
    minimal: "flex items-center",
    cards: "grid grid-cols-2 sm:grid-cols-3 gap-3",
  };

  const handleProfileClick = (profile: SocialMediaProfile) => {
    if (profile.profileUrl) {
      window.open(profile.profileUrl, "_blank", "noopener,noreferrer");
    }
  };

  const renderIcon = (profile: SocialMediaProfile) => {
    const IconComponent = ICON_MAP[profile.icon as keyof typeof ICON_MAP];
    if (!IconComponent) return null;

    return (
      <motion.button
        onClick={() => handleProfileClick(profile)}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizeClasses[size].icon} flex items-center justify-center rounded-xl
                    text-white shadow-lg transition-all duration-300
                    hover:shadow-xl relative overflow-hidden group ${profile.color}`}
        title={profile.description}
      >
        {/* Shimmer effect on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                             transition-transform duration-700"
        />
        <IconComponent
          className={`${sizeClasses[size].iconSize} relative z-10`}
        />
      </motion.button>
    );
  };

  const renderCard = (profile: SocialMediaProfile) => {
    const IconComponent = ICON_MAP[profile.icon as keyof typeof ICON_MAP];
    if (!IconComponent) return null;

    return (
      <motion.div
        key={profile.name}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleProfileClick(profile)}
        className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
      >
        <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${profile.color}`}
          >
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{profile.name}</h4>
            <p className="text-sm text-gray-600">{profile.description}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>
    );
  };

  if (variant === "cards") {
    return (
      <div className={`${className}`}>
        {(title || description) && (
          <div className="text-center mb-6">
            {title && (
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            )}
            {description && <p className="text-gray-600">{description}</p>}
          </div>
        )}
        <div className={variantClasses[variant]}>
          {activeProfiles.map(renderCard)}
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {(title || description) && (
        <div className="text-center mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}
      <div
        className={`${variantClasses[variant]} ${sizeClasses[size].container} justify-center`}
      >
        {activeProfiles.map((profile) => (
          <div
            key={profile.name}
            className="flex flex-col items-center space-y-1"
          >
            {renderIcon(profile)}
            {showLabels && (
              <span
                className={`text-xs text-gray-600 ${sizeClasses[size].text}`}
              >
                {profile.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Convenience components for different use cases
export function FooterSocialProfiles(
  props?: Partial<SocialMediaProfilesProps>
) {
  return (
    <SocialMediaProfiles
      {...props}
      variant="default"
      size="md"
      showLabels={false}
      title="Follow Us"
      description="Stay connected with us"
    />
  );
}

export function HeroSocialProfiles(props?: Partial<SocialMediaProfilesProps>) {
  return (
    <SocialMediaProfiles
      {...props}
      variant="minimal"
      size="lg"
      showLabels={true}
      title="Connect With Us"
      description="Join our community"
    />
  );
}

export function CardSocialProfiles(props?: Partial<SocialMediaProfilesProps>) {
  return (
    <SocialMediaProfiles
      {...props}
      variant="cards"
      title="Our Social Media"
      description="Follow us for updates and tips"
    />
  );
}
