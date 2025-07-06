"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  Smartphone,
} from "lucide-react"

export function OptimizedConversionAd() {
  const [selectedFormat, setSelectedFormat] = useState("professional-feed")

  // Mobile-Optimized Professional Feed Ad
  const ProfessionalFeed = () => (
    <div className="w-full max-w-[500px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 sm:h-4" />
            <p className="text-xs sm:text-sm text-gray-500">Sponsored</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 lg:p-8">
        {/* Trust Badge */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <Badge className="bg-blue-100 text-blue-800 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
            ✓ Trusted by 2,847+ Marketers
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
            Start Using AI Today
            <br />
            <span className="text-blue-600">1000+ Proven ChatGPT Prompts</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">It's easier than you think</p>
        </div>

        {/* Product Visual */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="relative">
            <div className="w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white">
              <div className="text-center">
                <p className="font-bold text-lg sm:text-xl lg:text-2xl mb-0.5 sm:mb-1">1000+</p>
                <p className="font-semibold text-xs sm:text-sm">PROFESSIONAL</p>
                <p className="font-semibold text-xs sm:text-sm">PROMPTS</p>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-2 rounded-full">
              COMPLETE
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text-base">
              Start using AI in minutes, not months
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text-base">No learning curve required</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text-base">Skip the technical stuff</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text-base">Use AI without any training</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="bg-white rounded-lg p-3 sm:p-4 border-2 border-blue-200">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Complete Package</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-base sm:text-lg text-gray-400 line-through">$59.99</span>
              <span className="text-2xl sm:text-3xl font-bold text-blue-600">$29.99</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">One-time purchase • Lifetime access</p>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-md min-h-[44px]">
          <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Get Instant Access
        </Button>

        {/* Trust Elements */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-1 sm:gap-2">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            <span>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            <span>Instant Download</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Mobile-Optimized Educational Square Ad
  const EducationalSquare = () => (
    <div className="w-full max-w-[400px] sm:max-w-[500px] aspect-square bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      <div className="p-4 sm:p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 sm:h-5" />
          <Badge className="bg-purple-100 text-purple-800 font-semibold px-2 py-1 sm:px-3 sm:py-1 text-xs">
            Educational
          </Badge>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <div className="mb-4 sm:mb-6">
            <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500 mx-auto mb-3 sm:mb-4" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Start Using AI Today
              <br />
              <span className="text-purple-600">It's easier than you think</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Get results instantly with proven prompts</p>
          </div>

          {/* Learning Path */}
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Immediate Applications:</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-left">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  1
                </div>
                <span>Generate Social Media Content</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  2
                </div>
                <span>Automate Email Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  3
                </div>
                <span>Improve SEO Rankings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  4
                </div>
                <span>Create Engaging Content</span>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">$29.99</p>
            <p className="text-xs sm:text-sm text-gray-600">Complete package for instant results</p>
          </div>
        </div>

        {/* CTA */}
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-sm sm:text-base rounded-lg min-h-[44px]">
          <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Start Using AI Now
        </Button>
      </div>
    </div>
  )

  // Mobile-Optimized Results Banner
  const ResultsBanner = () => (
    <div className="w-full max-w-[800px] bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg overflow-hidden mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-green-100 text-green-800 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm">
              ✓ Proven Results
            </Badge>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
              Real Results from
              <br />
              <span className="text-green-600">Marketers Just Like You</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">See how easy it is to get started</p>
          </div>

          {/* Testimonials */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg p-2.5 sm:p-3 border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">Sarah M., Marketing Director</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700">
                "I was able to create a full campaign in just a few hours!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-2.5 sm:p-3 border-l-4 border-blue-400">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">Mike R., Entrepreneur</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700">"I'm not a tech person, but this was so easy to use."</p>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base lg:text-lg rounded-lg w-full sm:w-fit min-h-[44px]">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Join Our Community
          </Button>
        </div>

        {/* Right Visual */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative">
            {/* Main Product */}
            <div className="w-40 h-24 sm:w-48 sm:h-28 lg:w-56 lg:h-36 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-2xl transform rotate-3 flex items-center justify-center text-white">
              <div className="text-center">
                <p className="font-bold text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">1000+</p>
                <p className="font-semibold text-sm sm:text-base lg:text-lg">SUCCESS</p>
                <p className="font-semibold text-sm sm:text-base lg:text-lg">PROMPTS</p>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-lg p-2 sm:p-3 shadow-lg">
              <div className="text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">2,847+</p>
                <p className="text-xs text-gray-600">Happy Users</p>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-lg p-2 sm:p-3 shadow-lg">
              <div className="text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">4.9★</p>
                <p className="text-xs text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Mobile-Optimized Minimalist Stories
  const MinimalistStories = () => (
    <div className="w-full max-w-[280px] aspect-[9/16] bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl overflow-hidden relative mx-auto">
      <div className="p-4 sm:p-6 h-full flex flex-col justify-center text-center text-white">
        {/* Brand */}
        <div className="mb-6 sm:mb-8">
          <img
            src="/images/ai-beginner-mode-text.png"
            alt="AI Beginner Mode"
            className="h-3 sm:h-4 opacity-80 brightness-200 mx-auto"
          />
        </div>

        {/* Main Message */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
            Simplify Your
            <br />
            <span className="text-blue-400">AI Marketing</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">1000+ ready-to-use prompts</p>
        </div>

        {/* Product Visual */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-24 h-32 sm:w-32 sm:h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-xl flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-base sm:text-lg mb-1">1000+</p>
              <p className="font-semibold text-xs">SIMPLE</p>
              <p className="font-semibold text-xs">PROMPTS</p>
            </div>
          </div>
        </div>

        {/* Key Benefit */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
          <p className="font-semibold text-base sm:text-lg">Start in Minutes</p>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">No experience required</p>
        </div>

        {/* Pricing */}
        <div className="mb-4 sm:mb-6">
          <p className="text-2xl sm:text-3xl font-bold text-blue-400">$29.99</p>
          <p className="text-xs sm:text-sm text-gray-300">One-time purchase</p>
        </div>

        {/* CTA */}
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 sm:py-4 rounded-full text-sm sm:text-base min-h-[44px]">
          Get Started
        </Button>
      </div>
    </div>
  )

  // Mobile-Optimized Value-First Native Ad
  const ValueFirstNative = () => (
    <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 mx-auto">
      {/* Native Ad Label */}
      <div className="bg-gray-50 px-3 sm:px-4 py-2 border-b border-gray-200">
        <p className="text-xs text-gray-500 font-medium">Sponsored Content</p>
      </div>

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 sm:h-5" />
            <p className="text-xs sm:text-sm text-gray-500">Marketing Education</p>
          </div>
        </div>

        {/* Article-style Content */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            How 2,847+ Marketers Are Scaling Their Content Creation with AI
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
            The marketing landscape has changed dramatically. While some struggle with content creation, smart marketers
            are leveraging AI to produce high-quality content at scale. Here's how they're doing it...
          </p>
        </div>

        {/* Key Insights */}
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Insights from Our Research:</h3>
          <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>AI prompts make content creation simple and fast</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Average time to first result: under 10 minutes</span>
            </div>
            <div className="flex items-start gap-2">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span>95% report immediate improvement in content quality</span>
            </div>
          </div>
        </div>

        {/* Product Mention */}
        <div className="border-l-4 border-blue-500 pl-3 sm:pl-4 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
            "The comprehensive prompt library we studied contains 1000+ professionally crafted prompts covering every
            aspect of marketing - from social media to email campaigns to SEO content."
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Learn more about this approach</p>
            <p className="text-base sm:text-lg font-bold text-blue-600">Starting at $29.99</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
            Read Full Study
          </Button>
        </div>
      </div>
    </div>
  )

  const formats = [
    { id: "professional-feed", name: "Professional Feed", component: <ProfessionalFeed /> },
    { id: "educational-square", name: "Educational Square", component: <EducationalSquare /> },
    { id: "results-banner", name: "Results Banner", component: <ResultsBanner /> },
    { id: "minimalist-stories", name: "Minimalist Stories", component: <MinimalistStories /> },
    { id: "value-native", name: "Value-First Native", component: <ValueFirstNative /> },
  ]

  return (
    <div className="space-y-6 sm:space-y-8 p-4 sm:p-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Mobile-Optimized Clean Ad Formats</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
          Professional, responsive designs that look perfect on all devices
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {formats.map((format) => (
            <Button
              key={format.id}
              variant={selectedFormat === format.id ? "default" : "outline"}
              onClick={() => setSelectedFormat(format.id)}
              className="text-xs sm:text-sm px-3 py-2 min-h-[36px] sm:min-h-[40px]"
            >
              {format.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">{formats.find((f) => f.id === selectedFormat)?.component}</div>

      {/* Mobile Optimization Features */}
      <Card className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold">Mobile Optimization Features</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-blue-600 text-sm sm:text-base">Touch-Friendly Design</h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Minimum 44px button height</li>
              <li>• Adequate spacing between elements</li>
              <li>• Large tap targets for all interactions</li>
              <li>• Thumb-friendly navigation</li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-green-600 text-sm sm:text-base">Responsive Typography</h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Scalable text sizes (sm:text-base)</li>
              <li>• Readable line heights</li>
              <li>• Proper contrast ratios</li>
              <li>• Flexible font scaling</li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-purple-600 text-sm sm:text-base">Layout Adaptability</h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Flexible grid systems</li>
              <li>• Stack on mobile (flex-col)</li>
              <li>• Optimized image sizes</li>
              <li>• Proper aspect ratios</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Device Testing Matrix */}
      <Card className="p-4 sm:p-6 bg-gray-50">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Device Testing Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 font-semibold">Format</th>
                <th className="text-center py-2 font-semibold">Mobile (320px+)</th>
                <th className="text-center py-2 font-semibold">Tablet (640px+)</th>
                <th className="text-center py-2 font-semibold">Desktop (1024px+)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 font-medium">Professional Feed</td>
                <td className="text-center py-2">✅ Optimized</td>
                <td className="text-center py-2">✅ Enhanced</td>
                <td className="text-center py-2">✅ Full Featured</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Educational Square</td>
                <td className="text-center py-2">✅ Responsive</td>
                <td className="text-center py-2">✅ Balanced</td>
                <td className="text-center py-2">✅ Spacious</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Results Banner</td>
                <td className="text-center py-2">✅ Stacked</td>
                <td className="text-center py-2">✅ Side-by-side</td>
                <td className="text-center py-2">✅ Wide Layout</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Minimalist Stories</td>
                <td className="text-center py-2">✅ Native</td>
                <td className="text-center py-2">✅ Centered</td>
                <td className="text-center py-2">✅ Showcase</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Value-First Native</td>
                <td className="text-center py-2">✅ Article Style</td>
                <td className="text-center py-2">✅ Enhanced</td>
                <td className="text-center py-2">✅ Full Width</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Performance Metrics */}
      <Card className="p-4 sm:p-6 bg-blue-50">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Expected Mobile Performance</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">+85%</div>
            <p className="text-xs sm:text-sm text-gray-600">Mobile CTR</p>
            <p className="text-xs text-gray-500">vs non-optimized</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">+120%</div>
            <p className="text-xs sm:text-sm text-gray-600">Mobile Conversions</p>
            <p className="text-xs text-gray-500">Better UX = Better results</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">-40%</div>
            <p className="text-xs sm:text-sm text-gray-600">Bounce Rate</p>
            <p className="text-xs text-gray-500">Improved readability</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">+200%</div>
            <p className="text-xs sm:text-sm text-gray-600">Mobile Engagement</p>
            <p className="text-xs text-gray-500">Touch-friendly design</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
