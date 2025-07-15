import React from "react";
import {
  CardSocialProfiles,
  HeroSocialProfiles,
  FooterSocialProfiles,
} from "@/components/SocialMediaProfiles";

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Social Media Profiles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page demonstrates the social media profile functionality. Icons
            will only appear for platforms that have profile URLs configured.
          </p>
        </div>

        <div className="space-y-16">
          {/* Hero Style */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Hero Style Social Profiles
            </h2>
            <HeroSocialProfiles />
          </section>

          {/* Card Style */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Card Style Social Profiles
            </h2>
            <CardSocialProfiles />
          </section>

          {/* Footer Style */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Footer Style Social Profiles
            </h2>
            <FooterSocialProfiles />
          </section>

          {/* Instructions */}
          <section className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to Configure Social Media Profiles
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">
                  1. Edit Profile URLs
                </h3>
                <p className="text-gray-600 mb-3">
                  Open{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    src/data/socialMediaProfiles.ts
                  </code>{" "}
                  and update the profile URLs:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Example configuration
{
  name: 'Facebook',
  icon: 'Facebook',
  color: 'bg-blue-600 hover:bg-blue-700',
  profileUrl: 'https://www.facebook.com/yourpage', // Add your actual URL
  description: 'Follow us on Facebook',
  action: 'profile'
}`}
                </pre>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">
                  2. Conditional Display
                </h3>
                <p className="text-gray-600">
                  Icons will only appear for platforms that have a valid{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    profileUrl
                  </code>
                  . If you don't have a profile for a platform, simply leave the{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    profileUrl
                  </code>{" "}
                  empty or remove the entry.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">
                  3. Available Components
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      FooterSocialProfiles
                    </code>{" "}
                    - For footer sections
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      HeroSocialProfiles
                    </code>{" "}
                    - For hero sections with labels
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      CardSocialProfiles
                    </code>{" "}
                    - Card-style layout
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      SocialMediaProfiles
                    </code>{" "}
                    - Base component with full customization
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
