"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AdVariations } from "@/components/ad-variations"
import { BrandStyleGuide } from "@/components/brand-style-guide"
import { SocialMediaTemplates } from "@/components/social-media-templates"
import { NewAdCampaign } from "@/components/new-ad-campaign"
import { VideoAdScripts } from "@/components/video-ad-scripts"
import { VideoAdCopyVariations } from "@/components/video-ad-copy-variations"
import { OptimizedConversionAd } from "@/components/optimized-conversion-ad"
import { ABTestingFramework } from "@/components/ab-testing-framework"
import { MobileOptimizedAds } from "@/components/mobile-optimized-ads"
import { MobileVideoAds } from "@/components/mobile-video-ads"
import { Palette, FileText, Megaphone, Video, Copy, Target, TestTube, Smartphone, Play } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("style-guide")

  const tabs = [
    { id: "style-guide", label: "Style Guide", icon: Palette, component: <BrandStyleGuide /> },
    { id: "social-templates", label: "Social Templates", icon: FileText, component: <SocialMediaTemplates /> },
    { id: "ad-variations", label: "Ad Variations", icon: Megaphone, component: <AdVariations /> },
    { id: "new-campaign", label: "New Campaign", icon: Target, component: <NewAdCampaign /> },
    { id: "video-scripts", label: "Video Scripts", icon: Video, component: <VideoAdScripts /> },
    { id: "video-copy", label: "Video Copy", icon: Copy, component: <VideoAdCopyVariations /> },
    { id: "conversion-ads", label: "Conversion Ads", icon: Target, component: <OptimizedConversionAd /> },
    { id: "mobile-ads", label: "Mobile Ads", icon: Smartphone, component: <MobileOptimizedAds /> },
    { id: "mobile-videos", label: "Mobile Videos", icon: Play, component: <MobileVideoAds /> },
    { id: "ab-testing", label: "A/B Testing", icon: TestTube, component: <ABTestingFramework /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Facebook Ad Design Studio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete Facebook advertising toolkit with brand guidelines, ad variations, video content, and A/B testing
            frameworks
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 text-sm"
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">{tabs.find((tab) => tab.id === activeTab)?.component}</div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">Facebook Ad Design Studio - Complete toolkit for high-converting ad campaigns</p>
        </div>
      </div>
    </div>
  )
}
