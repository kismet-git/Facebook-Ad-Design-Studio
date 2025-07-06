"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, Star, Clock, Zap, TrendingUp, Users, ArrowRight } from "lucide-react"

export function NewAdCampaign() {
  const [selectedAd, setSelectedAd] = useState("value-focused")

  // Ad Variation 1: Value-Focused Feed Ad
  const ValueFocusedFeed = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
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
      <div className="relative bg-gradient-to-br from-green-50 to-white p-8">
        {/* Value Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-500 text-white font-bold px-3 py-1">50% OFF</Badge>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-gray-900 leading-tight mb-2">
            1000+ AI Prompts for
            <br />
            <span className="text-green-600">Less Than 3¢ Each</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">The complete ChatGPT toolkit every marketer needs</p>
        </div>

        {/* Value Proposition Visual */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-48 h-32 bg-yellow-400 rounded-lg shadow-lg transform -rotate-3 flex items-center justify-center">
              <div className="text-center">
                <p className="font-black text-gray-900 text-2xl">$0.03</p>
                <p className="font-bold text-gray-900 text-sm">PER PROMPT</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-full">
              INSANE VALUE!
            </div>
          </div>
        </div>

        {/* Product Breakdown */}
        <div className="bg-white rounded-lg p-4 mb-6 border-2 border-green-200">
          <h3 className="font-bold text-gray-900 mb-3 text-center">What You Get:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                500
              </div>
              <span>Social Media Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                240
              </div>
              <span>Automation Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                200
              </div>
              <span>Marketing Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                100
              </div>
              <span>Content Prompts</span>
            </div>
          </div>
        </div>

        {/* Bonus Items */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">Online SEO Prompt Generator Tool</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">7-Day AI Prompt Tracker</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">10 Communication Templates (Bonus)</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl text-gray-400 line-through">$59.99</span>
            <span className="text-4xl font-black text-green-600">$29.99</span>
          </div>
          <p className="text-sm text-gray-600">Limited Time Introductory Offer</p>
        </div>

        {/* CTA */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg rounded-full shadow-lg">
          <Download className="w-5 h-5 mr-2" />
          Get This Incredible Deal
        </Button>

        {/* Trust Elements */}
        <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Lifetime Access</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Ad Variation 2: Problem-Solution Story
  const ProblemSolutionStory = () => (
    <div className="w-[375px] h-[667px] bg-gradient-to-b from-red-900 to-red-800 rounded-3xl overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-yellow-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Badge className="bg-red-500 text-white font-bold px-3 py-1">Problem Solved</Badge>
          <img
            src="/images/ai-beginner-mode-text.png"
            alt="AI Beginner Mode"
            className="h-3 opacity-60 brightness-200"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white leading-tight mb-6">
              Tired of Staring at
              <br />
              <span className="text-red-300">Blank Pages?</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">The Struggle is Real:</h2>
              <div className="space-y-2 text-left">
                <p className="text-red-200">😰 "What should I post today?"</p>
                <p className="text-red-200">😰 "How do I write better emails?"</p>
                <p className="text-red-200">😰 "I need content ideas NOW!"</p>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <ArrowRight className="w-12 h-12 text-yellow-400 animate-bounce" />
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6 text-gray-900">
              <h2 className="text-xl font-black mb-4">We Fixed This!</h2>
              <div className="space-y-1 text-left font-medium">
                <p>✅ 1000+ Ready-to-Use Prompts</p>
                <p>✅ Every Marketing Scenario Covered</p>
                <p>✅ Just Copy, Paste & Customize</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-gray-300 line-through">$59.99</span>
              <span className="text-3xl font-bold text-yellow-400">$29.99</span>
            </div>
            <p className="text-white text-sm">That's less than 3¢ per prompt!</p>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 text-lg rounded-full shadow-lg">
            End the Struggle Today
          </Button>
          <p className="text-center text-sm text-gray-300">Swipe up for instant relief</p>
        </div>
      </div>
    </div>
  )

  // Ad Variation 3: Social Proof Banner
  const SocialProofBanner = () => (
    <div className="w-[800px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="flex h-full">
        {/* Left Content */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  +2K
                </div>
              </div>
              <span className="text-sm text-gray-600">2,000+ Happy Customers</span>
            </div>

            <h1 className="text-4xl font-black text-gray-900 leading-tight mb-3">
              Join Thousands Who've
              <br />
              <span className="text-blue-600">Transformed Their Marketing</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium">With our complete ChatGPT prompts collection</p>
          </div>

          {/* Testimonials */}
          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">Sarah M.</span>
              </div>
              <p className="text-sm text-gray-700">"Cut my content creation time by 80%!"</p>
            </div>

            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">Mike R.</span>
              </div>
              <p className="text-sm text-gray-700">"Best $30 I've ever spent on marketing!"</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center gap-2">
                <span className="text-xl text-gray-400 line-through">$59.99</span>
                <span className="text-3xl font-black text-blue-600">$29.99</span>
              </div>
              <p className="text-xs text-gray-500">Limited Time Offer</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">What you get:</p>
              <p>• 1000+ ChatGPT Prompts</p>
              <p>• SEO Generator Tool</p>
              <p>• 7-Day Tracker + Bonuses</p>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg w-fit">
            <Users className="w-5 h-5 mr-2" />
            Join 2,000+ Success Stories
          </Button>
        </div>

        {/* Right Visual */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
          <div className="relative">
            {/* Main Product Visual */}
            <div className="w-56 h-36 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-2xl transform rotate-6 flex items-center justify-center text-white">
              <div className="text-center">
                <p className="font-black text-3xl">1000+</p>
                <p className="font-bold text-lg">PROMPTS</p>
                <p className="text-sm opacity-90">Ready to Use</p>
              </div>
            </div>

            {/* Floating Success Indicators */}
            <div className="absolute -top-6 -left-6 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full">
              ✓ PROVEN
            </div>

            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-2 rounded-full">
              2K+ USERS
            </div>

            {/* Value Callout */}
            <div className="absolute -top-8 -right-8 w-24 h-16 bg-white rounded-lg shadow-lg transform -rotate-12 flex items-center justify-center border-2 border-green-400">
              <div className="text-center text-xs">
                <p className="font-bold text-green-600">$0.03</p>
                <p className="text-gray-600">per prompt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Footer */}
      <div className="absolute bottom-4 left-8">
        <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 opacity-60" />
      </div>
    </div>
  )

  // Ad Variation 4: Urgency-Driven Feed
  const UrgencyFeed = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-200">
      {/* Header */}
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
      <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8">
        {/* Urgency Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white font-bold px-3 py-1 animate-pulse">⚡ ENDING SOON</Badge>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-gray-900 leading-tight mb-2">
            50% OFF Ends at
            <br />
            <span className="text-red-500">Midnight Tonight</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">Don't miss out on this incredible deal</p>
        </div>

        {/* Countdown Visual */}
        <div className="bg-white rounded-lg p-4 mb-6 border-2 border-red-200">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Offer expires in:</p>
            <div className="flex justify-center gap-2">
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">08</div>
              <span className="text-red-500 font-bold">:</span>
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">47</div>
              <span className="text-red-500 font-bold">:</span>
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">23</div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Hours : Minutes : Seconds</p>
          </div>
        </div>

        {/* What You're Missing */}
        <div className="bg-white rounded-lg p-4 mb-6 border-l-4 border-orange-400">
          <h3 className="font-bold text-gray-900 mb-3">What You're Missing Out On:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>500 Social Media Power Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>240 Automation & Tool Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>200 Marketing Strategy Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>100 Content Creation Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>BONUS: SEO Tool + Tracker + Templates</span>
            </div>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="text-center mb-6">
          <div className="bg-gray-100 rounded-lg p-4 mb-3">
            <p className="text-sm text-gray-600 mb-1">Regular Price:</p>
            <span className="text-2xl text-gray-400 line-through">$59.99</span>
          </div>
          <div className="bg-red-500 rounded-lg p-4 text-white">
            <p className="text-sm mb-1">Tonight Only:</p>
            <span className="text-4xl font-black">$29.99</span>
            <p className="text-sm mt-1">Save $30.00</p>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg animate-pulse">
          <Zap className="w-5 h-5 mr-2" />
          Claim This Deal Now
        </Button>

        {/* Urgency Footer */}
        <div className="text-center mt-4">
          <p className="text-sm text-red-600 font-bold">⏰ Price returns to $59.99 tomorrow</p>
          <p className="text-xs text-gray-500 mt-1">No extensions. No exceptions.</p>
        </div>
      </div>
    </div>
  )

  // Ad Variation 5: Feature-Heavy Square
  const FeatureHeavySquare = () => (
    <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg shadow-lg overflow-hidden relative text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90"></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Badge className="bg-yellow-400 text-gray-900 font-bold px-3 py-1">Complete Package</Badge>
          <img src="/images/ai-beginner-mode-text.png" alt="Brand" className="h-4 opacity-60 brightness-200" />
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          {/* <h1 className="text-3xl font-black mb-2">
            Everything You Need to
            <span className="text-yellow-400"> Master AI Marketing</span>
          </h1> */}
          <h1 className="text-3xl font-black mb-2">
            Everything You Need to
            <span className="text-yellow-400"> Start Using AI Today</span>
          </h1>
          <p className="text-lg text-purple-100">All in one comprehensive bundle</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                500
              </div>
              <h3 className="font-bold text-sm">Social Media</h3>
            </div>
            {/* <p className="text-xs text-purple-100">Power prompts for all platforms</p> */}
            <p className="text-xs text-purple-100">Ready-to-use prompts for all platforms</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                240
              </div>
              <h3 className="font-bold text-sm">Automation</h3>
            </div>
            {/* <p className="text-xs text-purple-100">Tools & workflow prompts</p> */}
            <p className="text-xs text-purple-100">Ready-to-use tools & workflow prompts</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                200
              </div>
              <h3 className="font-bold text-sm">Marketing</h3>
            </div>
            {/* <p className="text-xs text-purple-100">Strategy & campaign prompts</p> */}
            <p className="text-xs text-purple-100">Ready-to-use strategy & campaign prompts</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                100
              </div>
              <h3 className="font-bold text-sm">Content</h3>
            </div>
            {/* <p className="text-xs text-purple-100">Creation & ideation prompts</p> */}
            <p className="text-xs text-purple-100">Ready-to-use creation & ideation prompts</p>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="bg-yellow-400 rounded-lg p-4 text-gray-900 mb-6">
          <h3 className="font-bold text-center mb-2">🎁 BONUS INCLUDED:</h3>
          <div className="text-sm space-y-1">
            <p>✓ Online SEO Prompt Generator Tool</p>
            <p>✓ 7-Day AI Prompt Progress Tracker</p>
            <p>✓ 10 Communication Templates</p>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-auto">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xl text-gray-300 line-through">$59.99</span>
              <span className="text-3xl font-black text-yellow-400">$29.99</span>
            </div>
            <p className="text-sm text-purple-100">Less than 3¢ per prompt!</p>
          </div>

          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 text-lg rounded-full shadow-lg">
            <Download className="w-5 h-5 mr-2" />
            Get Complete Access
          </Button>
        </div>
      </div>
    </div>
  )

  // Ad Variation 6: Action-Oriented (Stop Wondering, Start Asking)
  const ActionOriented = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
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
      <div className="relative bg-gradient-to-br from-blue-50 to-white p-8">
        {/* Special Offer Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white font-bold px-3 py-1">SPECIAL OFFER</Badge>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6">
          <div className="mb-4">
            {/* <div className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-2xl font-black">STOP WONDERING</h1>
            </div>
            <div className="relative inline-block ml-4">
              <div className="bg-green-400 text-gray-900 px-4 py-2 rounded-full font-black text-xl">Start ASKING</div>
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[15px] border-t-transparent border-b-transparent border-r-green-400"></div>
            </div> */}
            <div className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-2xl font-black">DON'T LEARN AI</h1>
            </div>
            <div className="relative inline-block ml-4">
              <div className="bg-green-400 text-gray-900 px-4 py-2 rounded-full font-black text-xl">Use AI Today</div>
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[15px] border-t-transparent border-b-transparent border-r-green-400"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            1000+ Customizable ChatGPT
            <br />
            <span className="text-blue-600">Prompts for Marketers</span>
          </h2>
        </div>

        {/* Product Visual */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-48 h-64 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-4">
              <div className="text-center">
                <p className="font-black text-lg mb-2">1000+</p>
                <p className="font-bold text-sm mb-1">ChatGPT</p>
                <p className="font-bold text-sm">PROMPTS</p>
                <p className="text-xs mt-2 opacity-80">Customizable Templates for Marketers</p>
              </div>
            </div>

            {/* Floating pages */}
            <div className="absolute -right-4 top-8 w-32 h-40 bg-white rounded shadow-lg transform rotate-12 opacity-80"></div>
            <div className="absolute -right-2 top-12 w-32 h-40 bg-white rounded shadow-lg transform rotate-6 opacity-60"></div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="font-medium text-gray-900">Start getting results in 5 minutes</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="font-medium text-gray-900">No learning required</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="font-medium text-gray-900">Start using AI instantly</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="font-medium text-gray-900">Skip months of training</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="font-medium text-gray-900">Use AI without technical knowledge</span>
          </div>
        </div>

        {/* Product Breakdown */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-3 text-center">Complete Package Breakdown:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium">Social Media Power Prompts</span>
              <span className="font-bold text-blue-600">500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Automation + Tool Prompts</span>
              <span className="font-bold text-purple-600">240</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Marketing + Strategy Prompts</span>
              <span className="font-bold text-orange-600">200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Content Creation Prompts</span>
              <span className="font-bold text-green-600">100</span>
            </div>
            <div className="col-span-2 flex items-center justify-between border-t pt-2 mt-2">
              <span className="font-bold">Total Pages of Prompts + Tips</span>
              <span className="font-bold text-gray-900">70</span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div className="bg-red-500 text-white px-6 py-4 rounded-lg transform rotate-2">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs opacity-90">REG $59.99</p>
                  <p className="text-3xl font-black">$29.99</p>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold">SPECIAL</p>
                  <p className="text-xs font-bold">INTRODUCTORY OFFER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 text-lg rounded-full shadow-lg mb-4">
          <Download className="w-5 h-5 mr-2" />
          Get Instant Access
        </Button>

        {/* Trust Elements */}
        <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Instant Download</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>Beginner-Friendly</span>
          </div>
        </div>
      </div>
    </div>
  )

  const adVariations = [
    { id: "value-focused", name: "Value-Focused Feed", component: <ValueFocusedFeed /> },
    { id: "problem-solution", name: "Problem-Solution Story", component: <ProblemSolutionStory /> },
    { id: "social-proof", name: "Social Proof Banner", component: <SocialProofBanner /> },
    { id: "urgency", name: "Urgency-Driven Feed", component: <UrgencyFeed /> },
    { id: "feature-heavy", name: "Feature-Heavy Square", component: <FeatureHeavySquare /> },
    { id: "action-oriented", name: "Action-Oriented", component: <ActionOriented /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">New Facebook Ad Campaign Creatives</h2>
        <p className="text-lg text-gray-600 mb-6">
          Fresh variations using your exact product details and pricing structure
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {adVariations.map((variation) => (
            <Button
              key={variation.id}
              variant={selectedAd === variation.id ? "default" : "outline"}
              onClick={() => setSelectedAd(variation.id)}
              className="text-sm"
            >
              {variation.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">{adVariations.find((v) => v.id === selectedAd)?.component}</div>

      {/* Current Ads Reference */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Your Current Ad Creatives (Reference)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <img src="/images/current-ad-1.png" alt="Current Ad 1" className="w-full rounded-lg shadow-md mb-2" />
            <p className="text-sm text-gray-600">Stop Wondering, Start Asking</p>
          </div>
          <div className="text-center">
            <img src="/images/current-ad-2.jpg" alt="Current Ad 2" className="w-full rounded-lg shadow-md mb-2" />
            <p className="text-sm text-gray-600">Don't Learn AI, Use AI (Square)</p>
          </div>
          <div className="text-center">
            <img src="/images/current-ad-3.jpg" alt="Current Ad 3" className="w-full rounded-lg shadow-md mb-2" />
            <p className="text-sm text-gray-600">Don't Learn AI, Use AI (Banner)</p>
          </div>
          <div className="text-center">
            <img src="/images/current-ad-4.jpg" alt="Current Ad 4" className="w-full rounded-lg shadow-md mb-2" />
            <p className="text-sm text-gray-600">Don't Learn AI, Use AI (Vertical)</p>
          </div>
        </div>
      </Card>

      {/* New Campaign Strategy */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">New Campaign Strategy Breakdown</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-green-600">Value-Focused Approach</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Emphasizes incredible value (3¢ per prompt)</li>
              <li>• Clear product breakdown with quantities</li>
              <li>• Visual price comparison</li>
              <li>• "Incredible Deal" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-red-600">Problem-Solution Story</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Addresses content creation struggles</li>
              <li>• Emotional before/after narrative</li>
              <li>• Visual transformation story</li>
              <li>• "End the Struggle" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-blue-600">Social Proof Banner</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Features 2,000+ customer count</li>
              <li>• Real testimonials with ratings</li>
              <li>• Community-focused messaging</li>
              <li>• "Join Success Stories" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-orange-600">Urgency-Driven</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Countdown timer visual</li>
              <li>• "Ending Tonight" messaging</li>
              <li>• Clear savings amount ($30 off)</li>
              <li>• "Claim This Deal" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-purple-600">Feature-Heavy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Complete product breakdown</li>
              <li>• Visual feature grid layout</li>
              <li>• Bonus items highlighted</li>
              <li>• "Complete Access" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-600">Key Differentiators</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Uses exact product quantities from your ads</li>
              <li>• Maintains $29.99 pricing structure</li>
              <li>• Includes all bonus items</li>
              <li>• Fresh angles on proven concepts</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Product Details Extracted */}
      <Card className="p-6 bg-gray-50">
        <h3 className="text-xl font-bold mb-4">Extracted Product Details (From Your Ads)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Main Product Components:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  500
                </div>
                <span>Social Media Power Prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  240
                </div>
                <span>Automation + Tool Prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  200
                </div>
                <span>Marketing + Strategy Prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  100
                </div>
                <span>Content Creation Prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  70
                </div>
                <span>Total Pages of Prompts + Tips</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Bonus Items Included:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Online SEO Prompt Generator Tool</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>7-Day AI Prompt Progress Tracker</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>10 Communication Prompt Templates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Lifetime Access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Instant Download</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>PDF Format</span>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-white rounded-lg border">
              <h5 className="font-semibold text-red-600 mb-1">Pricing Structure:</h5>
              <p className="text-sm">
                <span className="line-through text-gray-500">$59.99</span>{" "}
                <span className="text-2xl font-bold text-red-600">$29.99</span>
              </p>
              <p className="text-xs text-gray-600">That's less than $0.03 per prompt!</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
