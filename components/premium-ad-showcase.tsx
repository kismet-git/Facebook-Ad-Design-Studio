"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, Star, Clock } from "lucide-react"

export function PremiumAdShowcase() {
  const [selectedAd, setSelectedAd] = useState("branded-feed")

  // Premium Feed Ad with Full Branding
  const BrandedFeedAd = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Real Brand */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4" />
            <p className="text-sm text-gray-500">Sponsored</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white p-8">
        {/* Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white font-bold px-3 py-1">3-in-1 Bundle</Badge>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-3xl font-black text-gray-900 leading-tight mb-2">
            Start Using AI Today —
            <br />
            <span className="text-red-500">It's Easier Than You Think</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Get immediate access to AI tools for your marketing — no learning required
          </p>
        </div>

        {/* Enhanced Product Mockup with Brand Elements */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-48 h-32 bg-yellow-400 rounded-lg shadow-lg transform rotate-3 flex items-center justify-center">
              <div className="text-center">
                <p className="font-black text-gray-900 text-lg">1000+</p>
                <p className="font-bold text-gray-900 text-sm">ChatGPT</p>
                <p className="font-bold text-gray-900 text-sm">PROMPTS</p>
              </div>
            </div>

            {/* Brand Icon Overlay */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full p-1 shadow-lg">
              <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
            </div>

            <div className="absolute -right-8 -top-4 w-32 h-24 bg-white rounded shadow-lg transform -rotate-6 flex items-center justify-center border">
              <div className="text-center text-xs">
                <p className="font-semibold">SEO Tool</p>
                <div className="w-16 h-2 bg-green-400 rounded mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">1000+ ChatGPT prompts ready to use</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">7-Day AI Prompt Tracker for immediate results</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Online SEO Prompt Generator Tool for instant use</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">
              Bonus: Professional Communication Templates - no learning curve
            </span>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg">
          <Download className="w-5 h-5 mr-2" />
          Get Instant Access
        </Button>

        {/* Trust Elements */}
        <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Instant Download</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>Beginner-Friendly</span>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="absolute bottom-2 right-2">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
        </div>
      </div>
    </div>
  )

  // Premium Story with Brand Integration
  const BrandedStoryAd = () => (
    <div className="w-[375px] h-[667px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header with Brand */}
        <div className="flex items-center justify-between mb-8">
          <Badge className="bg-red-500 text-white font-bold px-3 py-1">3-in-1 Bundle</Badge>
          <img
            src="/images/ai-beginner-mode-text.png"
            alt="AI Beginner Mode"
            className="h-3 opacity-60 brightness-200"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-white leading-tight mb-4">
              Start Using AI Today —
              <br />
              <span className="text-red-400">It's Easier Than You Think</span>
              <br />
              in Your Marketing
            </h1>
            <p className="text-xl text-gray-300 font-medium">Get started immediately!</p>
          </div>

          {/* Visual Element with Brand */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-28 bg-yellow-400 rounded-xl shadow-2xl flex items-center justify-center transform rotate-6">
                <div className="text-center">
                  <p className="font-black text-gray-900 text-2xl">1000+</p>
                  <p className="font-bold text-gray-900">PROMPTS</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full p-1 shadow-lg">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white font-semibold">✅ No Technical Skills Required</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white font-semibold">✅ Instant Download & Access</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white font-semibold">✅ Beginner-Friendly Templates</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg">
            Start Using AI Today
          </Button>
          <p className="text-center text-sm text-gray-400">Swipe up to get instant access</p>
        </div>
      </div>
    </div>
  )

  // Premium Banner with Full Brand Integration
  const BrandedBannerAd = () => (
    <div className="w-[800px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="flex h-full">
        {/* Left Content */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <div className="mb-6">
            {/* Brand Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-5" />
            </div>

            <Badge className="bg-red-500 text-white font-bold px-4 py-2 mb-4">3-in-1 Bundle + Bonus</Badge>
            <h1 className="text-4xl font-black text-gray-900 leading-tight mb-3">
              Start Using AI Today —<br />
              <span className="text-red-500">It's Easier Than You Think</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium">Immediately usable ChatGPT prompts for marketers</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Ready-to-use ChatGPT Prompt Pack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">7-Day AI Tracker for immediate application</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">SEO Generator Tool for instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Bonus Templates - no learning required</span>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg w-fit">
            <Download className="w-5 h-5 mr-2" />
            Download the Bundle
          </Button>
        </div>

        {/* Right Visual */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
          <div className="relative">
            {/* Main Product */}
            <div className="w-56 h-36 bg-yellow-400 rounded-xl shadow-2xl transform rotate-3 flex items-center justify-center">
              <div className="text-center">
                <p className="font-black text-gray-900 text-3xl">1000+</p>
                <p className="font-bold text-gray-900 text-lg">ChatGPT</p>
                <p className="font-bold text-gray-900 text-lg">PROMPTS</p>
              </div>
            </div>

            {/* Brand Icon Overlay */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-full p-2 shadow-lg">
              <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-16 bg-white rounded-lg shadow-lg transform -rotate-12 flex items-center justify-center border">
              <div className="text-center text-xs">
                <p className="font-semibold">Tracker</p>
                <div className="w-12 h-1 bg-blue-400 rounded mt-1"></div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-28 h-18 bg-white rounded-lg shadow-lg transform rotate-12 flex items-center justify-center border">
              <div className="text-center text-xs">
                <p className="font-semibold">SEO Tool</p>
                <div className="w-14 h-1 bg-green-400 rounded mt-1"></div>
              </div>
            </div>

            {/* Bonus Badge */}
            <div className="absolute -top-4 -left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              BONUS
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ads = [
    { id: "branded-feed", name: "Branded Feed Ad", component: <BrandedFeedAd /> },
    { id: "branded-story", name: "Branded Story Ad", component: <BrandedStoryAd /> },
    { id: "branded-banner", name: "Branded Banner Ad", component: <BrandedBannerAd /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Branded Ad Designs</h2>
        <p className="text-lg text-gray-600 mb-6">Updated with your actual AI Beginner Mode brand assets</p>

        <div className="flex justify-center gap-3 mb-8">
          {ads.map((ad) => (
            <Button
              key={ad.id}
              variant={selectedAd === ad.id ? "default" : "outline"}
              onClick={() => setSelectedAd(ad.id)}
              className="text-sm"
            >
              {ad.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">{ads.find((ad) => ad.id === selectedAd)?.component}</div>

      {/* Brand Assets Showcase */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Your Brand Assets Integration</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-100 p-2">
              <img src="/images/icon-dark.png" alt="Profile Icon" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold mb-1">Profile Icon</h4>
            <p className="text-sm text-gray-600">Used in ad headers and overlays</p>
          </div>

          <div className="text-center">
            <div className="mb-3">
              <img src="/images/ai-beginner-mode-text.png" alt="Text Logo" className="h-8 mx-auto" />
            </div>
            <h4 className="font-semibold mb-1">Text Logo</h4>
            <p className="text-sm text-gray-600">Used for branding footers</p>
          </div>

          <div className="text-center">
            <div className="mb-3">
              <img src="/images/ai-beginner-mode-full-logo.png" alt="Full Logo" className="h-8 mx-auto" />
            </div>
            <h4 className="font-semibold mb-1">Full Logo</h4>
            <p className="text-sm text-gray-600">Available for headers and banners</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Brand Integration Benefits</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Professional Credibility:</strong> Real brand assets build trust and recognition
            </div>
            <div>
              <strong>Consistent Experience:</strong> Seamless transition from ad to landing page
            </div>
            <div>
              <strong>Brand Recognition:</strong> Repeated exposure builds familiarity and recall
            </div>
            <div>
              <strong>Higher CTR:</strong> Professional branding typically improves click-through rates
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
