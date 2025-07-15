// Social Media Profile Links for Faith Hope Love Group
// Add your actual profile URLs here. If a profile doesn't exist, set it to null or empty string

export interface SocialMediaProfile {
  name: string;
  icon: any; // Will be imported from lucide-react
  color: string;
  profileUrl?: string; // Profile URL - if not provided, the icon won't show
  shareUrl?: string; // URL for sharing content
  description: string;
  action: "profile" | "share" | "copy";
}

// Import icons here - we'll need to import them in the component files
export const SOCIAL_MEDIA_PROFILES: SocialMediaProfile[] = [
  {
    name: "Facebook",
    icon: "Facebook", // Will be imported dynamically
    color: "bg-blue-600 hover:bg-blue-700",
    profileUrl: "https://www.facebook.com/hopefaithlovegroup", // Add your Facebook profile URL
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
    description: "Follow us on Facebook",
    action: "profile",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    color: "bg-sky-500 hover:bg-sky-600",
    profileUrl: "https://twitter.com/hopefaithlove", // Add your Twitter profile URL
    shareUrl:
      "https://twitter.com/intent/tweet?url={url}&text={title}&hashtags={hashtags}",
    description: "Follow us on Twitter",
    action: "profile",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    color:
      "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
    profileUrl: "https://www.instagram.com/hopefaithlovegroup", // Add your Instagram profile URL
    shareUrl: "https://www.instagram.com/",
    description: "Follow us on Instagram",
    action: "profile",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    color: "bg-blue-700 hover:bg-blue-800",
    profileUrl: "https://www.linkedin.com/company/hopefaithlovegroup", // Add your LinkedIn profile URL
    shareUrl: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
    description: "Follow us on LinkedIn",
    action: "profile",
  },
  {
    name: "YouTube",
    icon: "Youtube",
    color: "bg-red-600 hover:bg-red-700",
    profileUrl: "https://www.youtube.com/@hopefaithlovegroup", // Add your YouTube channel URL
    shareUrl: "https://www.youtube.com/",
    description: "Subscribe to our YouTube channel",
    action: "profile",
  },
  {
    name: "TikTok",
    icon: "MessageCircle", // Using MessageCircle as placeholder for TikTok
    color: "bg-black hover:bg-gray-800",
    profileUrl: "https://www.tiktok.com/@hopefaithlovegroup", // Add your TikTok profile URL
    shareUrl: "https://www.tiktok.com/",
    description: "Follow us on TikTok",
    action: "profile",
  },
];

// Helper function to filter profiles that have URLs
export const getActiveProfiles = (
  profiles: SocialMediaProfile[]
): SocialMediaProfile[] => {
  return profiles.filter(
    (profile) => profile.profileUrl && profile.profileUrl.trim() !== ""
  );
};

// Helper function to get sharing platforms (for the share widget)
export const getSharingPlatforms = () => {
  return [
    {
      name: "Facebook",
      icon: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
      url: "https://www.facebook.com/sharer/sharer.php?u={url}",
      action: "share" as const,
      description: "Share on Facebook",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      color: "bg-sky-500 hover:bg-sky-600",
      url: "https://twitter.com/intent/tweet?url={url}&text={title}&hashtags={hashtags}",
      action: "share" as const,
      description: "Share on Twitter",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      color: "bg-blue-700 hover:bg-blue-800",
      url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
      action: "share" as const,
      description: "Share on LinkedIn",
    },
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      color: "bg-green-500 hover:bg-green-600",
      url: "https://wa.me/?text={title}%20{url}",
      action: "share" as const,
      description: "Share on WhatsApp",
    },
    {
      name: "Copy Link",
      icon: "Copy",
      color: "bg-purple-600 hover:bg-purple-700",
      action: "copy" as const,
      description: "Copy Link",
    },
    {
      name: "Email",
      icon: "Mail",
      color: "bg-gray-600 hover:bg-gray-700",
      url: "mailto:?subject={title}&body={description}%20{url}",
      action: "share" as const,
      description: "Share via Email",
    },
  ];
};
