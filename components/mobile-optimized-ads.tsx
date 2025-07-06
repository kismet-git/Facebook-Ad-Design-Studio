"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Download, CheckCircle, Star, Clock, Zap, Shield, Eye, PlayCircle, Users } from "lucide-react"

// Static mobile-first variant
export const MobileOriginal = ({ format }: { format: string }) => {
  if (format === "stories") {
    return (
      <div className="w-[280px] h-[498px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden relative">
        {/* Stories format - vertical */}
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-3">
              <h1 className="text-xl font-black">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-lg inline-block">
              USE AI
            </div>
          </div>

          {/* Product Visual */}
          <div className="flex-1 flex items-center justify-center mb-6">
            <div className="w-32 h-40 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-xl transform rotate-3 flex items-center justify-center text-gray-900 p-3">
              <div className="text-center">
                <p className="font-black text-lg mb-1">1000+</p>
                <p className="font-bold text-xs mb-1">ChatGPT</p>
                <p className="font-bold text-xs">PROMPTS</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="font-medium">Start using AI in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="font-medium">No technical skills needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="font-medium">Skip the learning curve completely</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-4">
            <div className="bg-red-500 text-white px-4 py-3 rounded-lg inline-block">
              <p className="text-xs opacity-90">REG $59.99</p>
              <p className="text-2xl font-black">$29.99</p>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 text-lg rounded-full w-full">
            <Download className="w-5 h-5 mr-2" />
            Start Using AI Now
          </Button>

          {/* Brand */}
          <div className="text-center mt-3">
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60 mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  if (format === "square") {
    return (
      <div className="w-[400px] h-[400px] bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-2xl font-black">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-xl inline-block ml-2">
              USE AI
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-4">Start Using AI Today — It's Easier Than You Think</h2>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Start using AI in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No technical skills needed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Skip the learning curve completely</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-xl transform rotate-3 flex items-center justify-center text-gray-900 p-2">
                <div className="text-center">
                  <p className="font-black text-sm">1000+</p>
                  <p className="font-bold text-xs">PROMPTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-3">
            <div className="text-center">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg inline-block">
                <span className="text-xs opacity-90 line-through">$59.99</span>
                <span className="text-xl font-black ml-2">$29.99</span>
              </div>
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 text-base rounded-full w-full">
              <Download className="w-4 h-4 mr-2" />
              Start Using AI Now
            </Button>
          </div>

          <div className="absolute bottom-2 right-4">
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
          </div>
        </div>
      </div>
    )
  }

  // Mobile Feed format
  return (
    <div className="w-[350px] h-[400px] bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="p-5 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
            <h1 className="text-xl font-black">DON'T LEARN AI</h1>
          </div>
          <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-lg inline-block ml-2">
            USE AI
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-3">Start Using AI Today — It's Easier Than You Think</h2>

        {/* Benefits */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Start using AI in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No technical skills needed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Skip the learning curve completely</span>
          </div>
        </div>

        {/* Product + Pricing */}
        <div className="flex-1 flex items-center justify-between">
          <div className="w-20 h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-xl transform rotate-3 flex items-center justify-center text-gray-900 p-2">
            <div className="text-center">
              <p className="font-black text-sm">1000+</p>
              <p className="font-bold text-xs">PROMPTS</p>
            </div>
          </div>

          <div className="text-right">
            <div className="bg-red-500 text-white px-3 py-2 rounded-lg">
              <p className="text-xs opacity-90">REG $59.99</p>
              <p className="text-xl font-black">$29.99</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 text-base rounded-full w-full mt-4">
          <Download className="w-5 h-5 mr-2" />
          Start Using AI Now
        </Button>

        {/* Trust Elements */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Instant</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span>Beginner-Friendly</span>
          </div>
        </div>

        <div className="absolute bottom-2 right-4">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
        </div>
      </div>
    </div>
  )
}

// Optimized mobile-first variant
export const MobileOptimized = ({ format }: { format: string }) => {
  if (format === "stories") {
    return (
      <div className="w-[280px] h-[498px] bg-white rounded-2xl shadow-2xl overflow-hidden relative border-2 border-yellow-400">
        {/* Urgency Banner */}
        {/* <div className="bg-red-500 text-white text-center py-2">
          <p className="font-bold text-xs">⚡ 50% OFF ENDS TODAY ⚡</p>
        </div> */}

        <div className="p-4 h-full flex flex-col pt-4">
          {/* Social Proof */}
          <div className="text-center mb-2">
            <Badge className="bg-green-500 text-white font-bold px-3 py-1 text-xs">✓ 2,847+ Using This</Badge>
          </div>

          {/* Header */}
          <div className="text-center mb-3">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-base font-black leading-tight">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-base inline-block">
              USE AI
            </div>
          </div>

          <h2 className="text-center text-sm font-bold text-gray-900 mb-3 leading-tight">
            Start Using AI Today — It's Easier Than You Think
            <br />
            <span className="text-blue-600">$10K+ Monthly Revenue</span>
          </h2>

          {/* Product with Success Indicators */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center mb-3 relative">
            <div className="w-28 h-36 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-3 mb-3">
              <div className="text-center">
                <p className="font-black text-base mb-1">1000+</p>
                <p className="font-bold text-xs mb-1">PROVEN</p>
                <p className="font-bold text-xs">PROMPTS</p>
              </div>
            </div>

            {/* Floating success indicators */}
            <div className="absolute -top-2 -left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold transform -rotate-12">
              +300% RESULTS
            </div>
            <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12">
              20 HRS SAVED
            </div>
          </div>

          {/* Key Benefits - Mobile Focused */}
          <div className="space-y-1 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium leading-snug">Start using AI in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium leading-snug">Skip the learning curve completely</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium leading-snug">No technical skills needed</span>
            </div>
          </div>

          {/* Enhanced Pricing */}
          <div className="text-center mb-3">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg relative">
              <p className="text-xs opacity-90 line-through">$59.99</p>
              <p className="text-2xl font-black">$29.99</p>
              <p className="text-xs font-bold">Save $30 Today!</p>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                50% OFF
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-sm rounded-full w-full mb-3">
            <Download className="w-4 h-4 mr-2" />
            Start Using AI Now
          </Button>

          {/* Risk Reversal */}
          <div className="flex items-center justify-center gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-500" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-500" />
              <span>Instant Access</span>
            </div>
          </div>

          <div className="text-center mt-2">
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60 mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  if (format === "square") {
    return (
      <div className="w-[400px] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden relative border-2 border-yellow-400">
        {/* Urgency Banner */}
        {/* <div className="bg-red-500 text-white text-center py-2">
          <p className="font-bold text-sm">⚡ 50% OFF ENDS IN 24 HOURS ⚡</p>
        </div> */}

        <div className="p-4 h-full flex flex-col pt-4">
          {/* Social Proof */}
          <div className="mb-2">
            <Badge className="bg-green-500 text-white font-bold px-3 py-1 text-sm">✓ 2,847+ Marketers Using This</Badge>
          </div>

          {/* Header */}
          <div className="mb-2">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-lg font-black leading-tight">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-lg inline-block ml-2">
              USE AI
            </div>
          </div>

          <h2 className="text-base font-bold text-gray-900 mb-3 leading-tight">
            Start Using AI Today — It's Easier Than You Think
          </h2>

          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="leading-snug">Start using AI in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="leading-snug">Skip the learning curve completely</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="leading-snug">No technical skills needed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="leading-snug">FREE ChatGPT</span>
              </div>

              {/* Testimonial */}
              <div className="bg-yellow-50 p-2 rounded text-xs border-l-2 border-yellow-400 mt-3">
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2 h-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-snug">"Made $15K in 30 days!"</p>
                <p className="text-gray-500 leading-snug">- Sarah M.</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-28 h-36 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-3 mb-3 relative">
                <div className="text-center">
                  <p className="font-black text-base">1000+</p>
                  <p className="font-bold text-xs mb-1">PROFIT-PROVEN</p>
                  <p className="font-bold text-xs">PROMPTS</p>
                </div>

                {/* Value comparison */}
                <div className="bg-white rounded-lg p-2 shadow text-xs text-center">
                  <p className="text-gray-500 leading-snug">Total Value:</p>
                  <p className="text-red-500 line-through leading-snug">$670</p>
                  <p className="text-green-600 font-bold leading-snug">$29.99</p>
                  <p className="text-gray-500 leading-snug">96% Savings!</p>
                </div>

                {/* Success indicators */}
                <div className="absolute top-16 -left-6 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold transform -rotate-12">
                  +300% RESULTS
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-3 mt-4">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg inline-block relative">
                <span className="text-xs opacity-90 line-through">$59.99</span>
                <span className="text-xl font-black ml-2">$29.99</span>
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                  50% OFF
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 text-sm rounded-full w-full">
              <Download className="w-4 h-4 mr-2" />
              Start Using AI Now
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-500" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>2,847+ customers</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 right-4">
            <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
          </div>
        </div>
      </div>
    )
  }

  // Mobile Feed format - Optimized
  return (
    <div className="w-[350px] h-[450px] bg-white rounded-lg shadow-2xl overflow-hidden relative border-2 border-yellow-400">
      {/* Urgency Banner */}
      {/* <div className="bg-red-500 text-white text-center py-2">
        <p className="font-bold text-xs">⚡ 50% OFF ENDS IN 24 HOURS ⚡</p>
      </div> */}

      <div className="p-4 h-full flex flex-col pt-4">
        {/* Social Proof */}
        <div className="mb-2">
          <Badge className="bg-green-500 text-white font-bold px-3 py-1 text-sm">
            ✓ 2,847+ Marketers Already Using This
          </Badge>
        </div>

        {/* Header */}
        <div className="mb-2">
          <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
            <h1 className="text-base font-black leading-tight">DON'T LEARN AI</h1>
          </div>
          <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-base inline-block ml-2">
            USE AI
          </div>
        </div>

        <h2 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
          Start Using AI Today — It's Easier Than You Think
          <br />
          <span className="text-blue-600">$10K+ Monthly Revenue</span>
        </h2>

        {/* Outcome-Focused Benefits */}
        <div className="space-y-1 mb-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">Start using AI in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">Skip the learning curve completely</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">No technical skills needed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">Works with FREE ChatGPT</span>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-2 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-yellow-600" />
            <h3 className="font-bold text-gray-900 text-sm leading-tight">What Others Charge $500+ For:</h3>
          </div>
          <p className="text-xs text-gray-700 leading-snug">
            Get the same results for <span className="font-bold text-red-600">just $29.99</span> (that's $0.03 per
            prompt!)
          </p>
        </div>

        {/* Product + Pricing */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-2 relative">
            <div className="text-center">
              <p className="font-black text-sm">1000+</p>
              <p className="font-bold text-xs mb-1">PROFIT-PROVEN</p>
              <p className="font-bold text-xs">PROMPTS</p>
            </div>

            {/* Floating guarantee */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12">
              GUARANTEED
            </div>
          </div>

          <div className="text-right">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg relative">
              <p className="text-xs opacity-90 line-through">$59.99</p>
              <p className="text-xl font-black">$29.99</p>
              <p className="text-xs font-bold">Save $30!</p>
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                50% OFF
              </div>
            </div>

            {/* Value comparison */}
            <div className="mt-2 text-xs text-center">
              <p className="text-gray-500 leading-snug">
                Total Value: <span className="line-through text-red-500">$670</span>
              </p>
              <p className="font-bold text-green-600 leading-snug">96% Savings Today!</p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-base rounded-full w-full mb-3">
          <Download className="w-5 h-5 mr-2" />
          Start Using AI Now
        </Button>

        {/* Risk Reversal */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-green-500" />
            <span>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-blue-500" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span>Lifetime Access</span>
          </div>
        </div>

        <div className="absolute bottom-2 right-4">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
        </div>
      </div>
    </div>
  )
}

export function MobileOptimizedAds() {
  const [selectedVersion, setSelectedVersion] = useState("mobile-original")
  const [selectedFormat, setSelectedFormat] = useState("feed")

  if (selectedFormat === "facebook-feed") {
    return (
      <div className="w-[375px] h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden relative border-2 border-yellow-400">
        {/* Facebook Mobile Feed Header */}
        <div className="bg-white border-b border-gray-200 p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4" />
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500">Sponsored</span>
              </div>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
            <div className="text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        {/* <div className="bg-red-500 text-white text-center py-2">
          <p className="font-bold text-xs">⚡ 50% OFF ENDS IN 24 HOURS ⚡</p>
        </div> */}

        <div className="p-4 flex flex-col">
          {/* Social Proof */}
          <div className="mb-2">
            <Badge className="bg-green-500 text-white font-bold px-3 py-1 text-sm">
              ✓ 2,847+ Marketers Already Using This
            </Badge>
          </div>

          {/* Header */}
          <div className="mb-2">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-base font-black leading-tight">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-base inline-block ml-2">
              USE AI
            </div>
          </div>

          <h2 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
            Start Using AI Today — It's Easier Than You Think
          </h2>

          {/* Benefits - Compact */}
          <div className="space-y-1 mb-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium leading-snug">Start using AI in 5 minutes • +300% engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium leading-snug">No technical skills needed • FREE ChatGPT compatible</span>
            </div>
          </div>

          {/* Product + Pricing */}
          <div className="flex items-center justify-between mb-3">
            <div className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-2 relative">
              <div className="text-center">
                <p className="font-black text-sm">1000+</p>
                <p className="font-bold text-xs mb-1">PROFIT-PROVEN</p>
                <p className="font-bold text-xs">PROMPTS</p>
              </div>
              <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12">
                GUARANTEED
              </div>
            </div>

            <div className="text-right">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg relative">
                <p className="text-xs opacity-90 line-through">$59.99</p>
                <p className="text-xl font-black">$29.99</p>
                <p className="text-xs font-bold">Save $30!</p>
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                  50% OFF
                </div>
              </div>
              <div className="mt-2 text-xs text-center">
                <p className="text-gray-500 leading-snug">
                  Total Value: <span className="line-through text-red-500">$670</span>
                </p>
                <p className="font-bold text-green-600 leading-snug">96% Savings Today!</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-base rounded-full w-full mb-3">
            <Download className="w-5 h-5 mr-2" />
            Start Using AI Now
          </Button>

          {/* Risk Reversal */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-500" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-500" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>

        {/* Facebook Engagement Bar */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Like</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Comment</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-4">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
        </div>
      </div>
    )
  }

  if (selectedFormat === "instagram-stories") {
    return (
      <div className="w-[280px] h-[498px] bg-black rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Instagram Stories Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-pink-500 p-0.5">
                <img
                  src="/images/icon-dark.png"
                  alt="AI Beginner Mode"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">aibeginnermode</p>
                <p className="text-gray-300 text-xs">2h</p>
              </div>
            </div>
            <div className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
          </div>
          {/* Story progress bar */}
          <div className="w-full h-0.5 bg-white/30 rounded-full mt-3">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
        </div>

        {/* Background with gradient overlay */}
        <div className="h-full bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 relative">
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 p-6 h-full flex flex-col pt-20">
            {/* Urgency Banner */}
            {/* <div className="bg-red-500/90 backdrop-blur-sm text-white text-center py-2 rounded-lg mb-4">
              <p className="font-bold text-xs">⚡ 50% OFF ENDS TODAY ⚡</p>
            </div> */}

            {/* Social Proof */}
            <div className="text-center mb-3">
              <Badge className="bg-green-500/90 backdrop-blur-sm text-white font-bold px-3 py-1 text-xs">
                ✓ 2,847+ Using This
              </Badge>
            </div>

            {/* Header */}
            <div className="text-center mb-4">
              <div className="inline-block bg-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
                <h1 className="text-lg font-black leading-tight">DON'T LEARN AI</h1>
              </div>
              <div className="bg-green-400/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-full font-black text-base inline-block">
                USE AI
              </div>
            </div>

            <h2 className="text-center text-sm font-bold text-white mb-4 leading-tight">
              Start Using AI Today — It's Easier Than You Think
              <br />
              <span className="text-yellow-400">$10K+ Monthly Revenue</span>
            </h2>

            {/* Product with Success Indicators */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center mb-4 relative">
              <div className="w-32 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-3 mb-3">
                <div className="text-center">
                  <p className="font-black text-lg mb-1">1000+</p>
                  <p className="font-bold text-xs mb-1">PROVEN</p>
                  <p className="font-bold text-xs">PROMPTS</p>
                </div>
              </div>

              {/* Floating success indicators */}
              <div className="absolute -top-2 -left-2 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold transform -rotate-12">
                +300% RESULTS
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12">
                20 HRS SAVED
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2 mb-4 text-xs">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <p className="text-white font-semibold">✅ Start using AI in 5 minutes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <p className="text-white font-semibold">✅ Skip the learning curve completely</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <p className="text-white font-semibold">✅ No technical skills needed</p>
              </div>
            </div>

            {/* Enhanced Pricing */}
            <div className="text-center mb-4">
              <div className="bg-gradient-to-r from-red-500/90 to-red-600/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg relative">
                <p className="text-xs opacity-90 line-through">$59.99</p>
                <p className="text-2xl font-black">$29.99</p>
                <p className="text-xs font-bold">Save $30 Today!</p>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                  50% OFF
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-sm rounded-full w-full mb-3">
              <Download className="w-4 h-4 mr-2" />
              Start Using AI Now
            </Button>

            {/* Risk Reversal */}
            <div className="flex items-center justify-center gap-3 text-xs text-white/80">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-400" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>

          {/* Instagram Stories CTA overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-center">
              <p className="text-white text-sm font-semibold">Swipe up to get instant access</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedFormat === "mobile-native") {
    return (
      <div className="w-[350px] h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden relative border border-gray-200">
        {/* Native Ad Label */}
        <div className="bg-gray-100 px-3 py-1 border-b border-gray-200">
          <p className="text-xs text-gray-500 font-medium">Sponsored Content</p>
        </div>

        <div className="p-4 h-full flex flex-col">
          {/* Urgency Banner */}
          {/* <div className="bg-red-500 text-white text-center py-2 rounded-lg mb-3">
            <p className="font-bold text-xs">⚡ LIMITED TIME: 50% OFF ENDS IN 24 HOURS ⚡</p>
          </div> */}

          {/* Brand Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400">
              <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-5" />
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-green-500 text-white font-bold px-2 py-1 text-xs">✓ 2,847+ Success Stories</Badge>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-3">
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-lg font-black leading-tight">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-lg inline-block ml-2">
              USE AI
            </div>
          </div>

          <h2 className="text-base font-bold text-gray-900 mb-3 leading-tight">
            How 2,847+ Marketers Are Using These 1000+ ChatGPT Prompts to Generate $10K+ Monthly Revenue
          </h2>

          {/* Native-style content */}
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              "I was struggling to create engaging content until I discovered this prompt collection. Now I generate 50+
              content ideas in just 5 minutes and my engagement has increased by 300%."
            </p>
            <p className="text-xs text-gray-500 font-medium">- Sarah M., Digital Marketing Manager</p>
          </div>

          {/* Benefits */}
          <div className="space-y-2 mb-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Start using AI in 5 minutes</p>
                <p className="text-xs text-gray-600">Never run out of content ideas again</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Skip the learning curve completely</p>
                <p className="text-xs text-gray-600">Based on real customer data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">No technical skills needed</p>
                <p className="text-xs text-gray-600">Automate your content creation process</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Works with FREE ChatGPT</p>
                <p className="text-xs text-gray-600">No expensive subscriptions required</p>
              </div>
            </div>
          </div>

          {/* Product showcase */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 mb-3 border-2 border-yellow-200">
            <div className="flex items-center justify-between">
              <div className="w-20 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-xl transform rotate-3 flex items-center justify-center text-gray-900 p-2 relative">
                <div className="text-center">
                  <p className="font-black text-sm">1000+</p>
                  <p className="font-bold text-xs mb-1">PROFIT-PROVEN</p>
                  <p className="font-bold text-xs">PROMPTS</p>
                </div>
                <div className="absolute -top-1 -right-1 bg-green-500 text-white px-1 py-0.5 rounded-full text-xs font-bold">
                  NEW
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">
                  Regular Price: <span className="line-through">$59.99</span>
                </p>
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg relative">
                  <p className="text-xl font-black">$29.99</p>
                  <p className="text-xs font-bold">Save $30 Today!</p>
                  <div className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                    50% OFF
                  </div>
                </div>
                <p className="text-xs text-green-600 font-bold mt-1">96% Savings!</p>
              </div>
            </div>
          </div>

          {/* Value proposition */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-gray-900 text-sm">What Others Charge $500+ For:</h3>
            </div>
            <p className="text-xs text-gray-700">
              Get the same professional results for just $29.99 (that's only $0.03 per prompt!)
            </p>
          </div>

          {/* CTA */}
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-base rounded-full w-full mb-3">
            <Download className="w-5 h-5 mr-2" />
            Start Using AI Now
          </Button>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-2 text-xs text-center text-gray-600 mb-2">
            <div className="flex flex-col items-center">
              <Shield className="w-4 h-4 text-green-500 mb-1" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-4 h-4 text-blue-500 mb-1" />
              <span>Instant Digital Download</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mb-1" />
              <span>Lifetime Access Included</span>
            </div>
          </div>

          {/* Native ad footer */}
          <div className="text-center pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-400">Learn more about AI Beginner Mode</p>
          </div>
        </div>
      </div>
    )
  }

  if (selectedFormat === "messenger-stories") {
    return (
      <div className="w-[280px] h-[498px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Messenger Stories Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white p-0.5">
                <img
                  src="/images/icon-dark.png"
                  alt="AI Beginner Mode"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">AI Beginner Mode</p>
                <p className="text-white/80 text-xs">Active now</p>
              </div>
            </div>
            <div className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 p-6 h-full flex flex-col pt-16">
          {/* Urgency Banner */}
          {/* <div className="bg-red-500/90 backdrop-blur-sm text-white text-center py-2 rounded-full mb-4">
            <p className="font-bold text-xs">⚡ FLASH SALE: 50% OFF ENDS TODAY ⚡</p>
          </div> */}

          {/* Social Proof */}
          <div className="text-center mb-3">
            <Badge className="bg-green-500/90 backdrop-blur-sm text-white font-bold px-3 py-1 text-xs rounded-full">
              ✓ 2,847+ People Just Like You
            </Badge>
          </div>

          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-block bg-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
              <h1 className="text-lg font-black leading-tight">DON'T LEARN AI</h1>
            </div>
            <div className="bg-green-400/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-full font-black text-base inline-block">
              USE AI
            </div>
          </div>

          <h2 className="text-center text-sm font-bold text-white mb-4 leading-tight">
            The Secret 1000+ ChatGPT Prompts That Generate
            <br />
            <span className="text-yellow-300">$10K+ Monthly Revenue</span>
          </h2>

          {/* Product with Success Indicators */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center mb-4 relative">
            <div className="w-32 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-3 mb-3 border-2 border-white/20">
              <div className="text-center">
                <p className="font-black text-lg mb-1">1000+</p>
                <p className="font-bold text-xs mb-1">SECRET</p>
                <p className="font-bold text-xs">PROMPTS</p>
              </div>
            </div>

            {/* Floating success indicators */}
            <div className="absolute -top-2 -left-2 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold transform -rotate-12 border border-white/20">
              +300% RESULTS
            </div>
            <div className="absolute -top-2 -right-2 bg-blue-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12 border border-white/20">
              $10K+ EARNED
            </div>
          </div>

          {/* Key Benefits - Messenger style */}
          <div className="space-y-2 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <p className="text-white font-semibold text-sm">💡 Start using AI in 5 minutes</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <p className="text-white font-semibold text-sm">📈 Skip the learning curve completely</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <p className="text-white font-semibold text-sm">⏰ No technical skills needed</p>
            </div>
          </div>

          {/* Enhanced Pricing */}
          <div className="text-center mb-4">
            <div className="bg-gradient-to-r from-red-500/90 to-red-600/90 backdrop-blur-sm text-white px-4 py-3 rounded-2xl relative border border-white/20">
              <p className="text-xs opacity-90 line-through">Usually $59.99</p>
              <p className="text-2xl font-black">$29.99</p>
              <p className="text-xs font-bold">Save $30 Right Now!</p>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold border border-white">
                50% OFF
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-sm rounded-full w-full mb-3 border-2 border-white/20">
            <Download className="w-4 h-4 mr-2" />
            YES! Send Me The Prompts Now
          </Button>

          {/* Risk Reversal */}
          <div className="flex items-center justify-center gap-3 text-xs text-white/90">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-300" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-300" />
              <span>Instant Delivery</span>
            </div>
          </div>

          {/* Messenger-style footer */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 text-center border border-white/20">
              <p className="text-white text-xs font-medium">Tap to get instant access via Messenger</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[350px] h-[480px] bg-white rounded-lg shadow-2xl overflow-hidden relative border-2 border-yellow-400">
      {/* Urgency Banner */}
      {/* <div className="bg-red-500 text-white text-center py-2">
        <p className="font-bold text-xs">⚡ 50% OFF ENDS IN 24 HOURS ⚡</p>
      </div> */}

      <div className="p-4 h-full flex flex-col pt-4">
        {/* Social Proof */}
        <div className="mb-2">
          <Badge className="bg-green-500 text-white font-bold px-3 py-1 text-sm">
            ✓ 2,847+ Marketers Already Using This
          </Badge>
        </div>

        {/* Header */}
        <div className="mb-2">
          <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg transform -rotate-2 mb-2">
            <h1 className="text-base font-black leading-tight">DON'T LEARN AI</h1>
          </div>
          <div className="bg-green-400 text-gray-900 px-3 py-2 rounded-full font-black text-base inline-block ml-2">
            USE AI
          </div>
        </div>

        <h2 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
          Start Using AI Today — It's Easier Than You Think
          <br />
          <span className="text-blue-600">$10K+ Monthly Revenue</span>
        </h2>

        {/* Outcome-Focused Benefits */}
        <div className="space-y-1 mb-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">Start using AI in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">Skip the learning curve completely</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">No technical skills needed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium leading-snug">Works with FREE ChatGPT</span>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-2 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-yellow-600" />
            <h3 className="font-bold text-gray-900 text-sm leading-tight">What Others Charge $500+ For:</h3>
          </div>
          <p className="text-xs text-gray-700 leading-snug">
            Get the same results for <span className="font-bold text-red-600">just $29.99</span> (that's $0.03 per
            prompt!)
          </p>
        </div>

        {/* Product + Pricing */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center text-gray-900 p-2 relative">
            <div className="text-center">
              <p className="font-black text-sm">1000+</p>
              <p className="font-bold text-xs mb-1">PROFIT-PROVEN</p>
              <p className="font-bold text-xs">PROMPTS</p>
            </div>

            {/* Floating guarantee */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12">
              GUARANTEED
            </div>
          </div>

          <div className="text-right">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg relative">
              <p className="text-xs opacity-90 line-through">$59.99</p>
              <p className="text-xl font-black">$29.99</p>
              <p className="text-xs font-bold">Save $30!</p>
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                50% OFF
              </div>
            </div>

            {/* Value comparison */}
            <div className="mt-2 text-xs text-center">
              <p className="text-gray-500 leading-snug">
                Total Value: <span className="line-through text-red-500">$670</span>
              </p>
              <p className="font-bold text-green-600 leading-snug">96% Savings Today!</p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-base rounded-full w-full mb-3">
          <Download className="w-5 h-5 mr-2" />
          Start Using AI Now
        </Button>

        {/* Risk Reversal */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-green-500" />
            <span>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-blue-500" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span>Lifetime Access</span>
          </div>
        </div>

        <div className="absolute bottom-2 right-4">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
        </div>
      </div>
    </div>
  )
}

// Video Ad Preview Component
const VideoAdPreview = ({ version }: { version: string }) => (
  <div className="w-[280px] h-[498px] bg-black rounded-2xl shadow-2xl overflow-hidden relative">
    {/* Video placeholder */}
    <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
      <PlayCircle className="w-16 h-16 text-white opacity-80" />

      {/* Video overlay elements */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <div className="bg-black/50 rounded-lg p-3 backdrop-blur-sm">
          <h3 className="text-white font-bold text-sm mb-2">
            {version === "optimized" ? "Don't Learn AI, USE AI" : "Don't Learn AI, USE AI"}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <Users className="w-3 h-3" />
            <span>{version === "optimized" ? "2,847+ success stories" : "For Marketers"}</span>
          </div>
        </div>

        {/* Video CTA */}
        <Button className="mt-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 text-sm rounded-full">
          {version === "optimized" ? "Start Using AI Now" : "Learn More"}
        </Button>
      </div>

      {/* Video duration */}
      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">0:15</div>
    </div>
  </div>
)

const versions = [
  { id: "mobile-original", name: "Mobile Original", component: MobileOriginal, color: "blue" },
  { id: "mobile-optimized", name: "Mobile Optimized", component: MobileOptimized, color: "green" },
  {
    id: "video-original",
    name: "Video Original",
    component: () => <VideoAdPreview version="original" />,
    color: "purple",
  },
  {
    id: "video-optimized",
    name: "Video Optimized",
    component: () => <VideoAdPreview version="optimized" />,
    color: "orange",
  },
]

const formats = [
  { id: "feed", name: "Mobile Feed", icon: Smartphone },
  { id: "square", name: "Square Post", icon: Smartphone },
  { id: "stories", name: "Stories/Reels", icon: Smartphone },
  { id: "facebook-feed", name: "Facebook Mobile Feed", icon: Smartphone },
  { id: "instagram-stories", name: "Instagram Stories", icon: Smartphone },
  { id: "mobile-native", name: "Mobile Native", icon: Smartphone },
  { id: "messenger-stories", name: "Messenger Stories", icon: Smartphone },
]

const AdPreview = () => {
  const [selectedVersion, setSelectedVersion] = useState("mobile-original")
  const [selectedFormat, setSelectedFormat] = useState("feed")
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile-Optimized Ad Variants</h2>
        <p className="text-lg text-gray-600 mb-6">
          Designed specifically for mobile performance across all Facebook/Instagram placements
        </p>

        {/* Version Selection */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {versions.map((version) => (
            <Button
              key={version.id}
              variant={selectedVersion === version.id ? "default" : "outline"}
              onClick={() => setSelectedVersion(version.id)}
              className="text-sm"
            >
              {version.name}
            </Button>
          ))}
        </div>

        {/* Format Selection (only for static versions) */}
        {(selectedVersion === "mobile-original" || selectedVersion === "mobile-optimized") && (
          <div className="flex justify-center gap-4 mb-8">
            {formats.map((format) => (
              <Button
                key={format.id}
                variant={selectedFormat === format.id ? "default" : "outline"}
                onClick={() => setSelectedFormat(format.id)}
                size="sm"
                className="text-xs"
              >
                <format.icon className="w-4 h-4 mr-2" />
                {format.name}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Ad Preview */}
      <div className="flex justify-center">
        {selectedVersion === "mobile-original" && <MobileOriginal format={selectedFormat} />}
        {selectedVersion === "mobile-optimized" && <MobileOptimized format={selectedFormat} />}
        {selectedVersion === "video-original" && <VideoAdPreview version="original" />}
        {selectedVersion === "video-optimized" && <VideoAdPreview version="optimized" />}
      </div>

      {/* Mobile Optimization Analysis */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Mobile Optimization Strategy</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-red-600 mb-3">Desktop vs Mobile Challenges:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                • <strong>Screen Size:</strong> 5-6" vs 24"+ displays
              </li>
              <li>
                • <strong>Attention Span:</strong> 3-8 seconds vs 10-15 seconds
              </li>
              <li>
                • <strong>Touch Navigation:</strong> Thumb-friendly vs mouse precision
              </li>
              <li>
                • <strong>Loading Speed:</strong> Mobile data vs wifi
              </li>
              <li>
                • <strong>Context:</strong> On-the-go vs focused browsing
              </li>
              <li>
                • <strong>Text Readability:</strong> Must be larger and clearer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-green-600 mb-3">Mobile-Specific Optimizations:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                • <strong>Larger Text:</strong> 14px+ for readability
              </li>
              <li>
                • <strong>Thumb-Friendly CTAs:</strong> 44px+ touch targets
              </li>
              <li>
                • <strong>Simplified Layout:</strong> Single column, less clutter
              </li>
              <li>
                • <strong>Visual Hierarchy:</strong> Clear scanning pattern
              </li>
              <li>
                • <strong>Instant Recognition:</strong> 3-second value prop
              </li>
              <li>
                • <strong>Format Variety:</strong> Feed, square, stories optimization
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Format-Specific Guidelines */}
      <Card className="p-6 bg-blue-50">
        <h3 className="text-xl font-bold mb-4">Format-Specific Best Practices</h3>
        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feed">Mobile Feed</TabsTrigger>
            <TabsTrigger value="square">Square Post</TabsTrigger>
            <TabsTrigger value="stories">Stories/Reels</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Mobile Feed Specifications:</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>Dimensions:</strong> 1080 x 1080px (square) or 4:5 ratio
                  </li>
                  <li>
                    • <strong>File Size:</strong> Under 4MB for fast loading
                  </li>
                  <li>
                    • <strong>Text Overlay:</strong> Maximum 20% of image
                  </li>
                  <li>
                    • <strong>Headline:</strong> 40 characters max
                  </li>
                  <li>
                    • <strong>Description:</strong> 125 characters for mobile
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Mobile Feed Best Practices:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Eye-catching hook in first 3 seconds</li>
                  <li>• Single clear value proposition</li>
                  <li>• High contrast colors for visibility</li>
                  <li>• Prominent, finger-friendly CTA button</li>
                  <li>• Social proof above the fold</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="square" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Square Post Specifications:</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>Dimensions:</strong> 1080 x 1080px (1:1 ratio)
                  </li>
                  <li>
                    • <strong>Safe Zone:</strong> Keep important elements in center 940px
                  </li>
                  <li>
                    • <strong>Text Size:</strong> Minimum 24px for mobile readability
                  </li>
                  <li>
                    • <strong>Visual Elements:</strong> Larger, bolder design elements
                  </li>
                  <li>
                    • <strong>Loading:</strong> Optimized for quick display
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Square Post Strategy:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Symmetrical design for clean appearance</li>
                  <li>• Central focal point for product/benefit</li>
                  <li>• Quadrant layout for multiple benefits</li>
                  <li>• Strong border/frame to stand out in feed</li>
                  <li>• Consistent brand colors throughout</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stories" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Stories/Reels Specifications:</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>Dimensions:</strong> 1080 x 1920px (9:16 ratio)
                  </li>
                  <li>
                    • <strong>Safe Zone:</strong> Keep content in center 1080 x 1680px
                  </li>
                  <li>
                    • <strong>Duration:</strong> 15 seconds max for optimal viewing
                  </li>
                  <li>
                    • <strong>File Size:</strong> Under 4MB for stories
                  </li>
                  <li>
                    • <strong>Interaction:</strong> Swipe-up or link sticker compatible
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Stories/Reels Strategy:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Vertical-first design thinking</li>
                  <li>• Larger text for thumb-scrolling users</li>
                  <li>• Quick value delivery (3-5 seconds)</li>
                  <li>• Strong visual contrast for dark/light modes</li>
                  <li>• Clear, single call-to-action</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Performance Expectations */}
      <Card className="p-6 bg-green-50">
        <h3 className="text-xl font-bold mb-4">Expected Mobile Performance Improvements</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">+85%</div>
            <p className="text-sm text-gray-600">Mobile CTR</p>
            <p className="text-xs text-gray-500">vs desktop-optimized ads</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">+120%</div>
            <p className="text-sm text-gray-600">Stories Engagement</p>
            <p className="text-xs text-gray-500">Full-screen immersion</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">+45%</div>
            <p className="text-sm text-gray-600">Mobile Conversions</p>
            <p className="text-xs text-gray-500">Optimized user experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">-25%</div>
            <p className="text-sm text-gray-600">Cost Per Click</p>
            <p className="text-xs text-gray-500">Better relevance scores</p>
          </div>
        </div>
      </Card>

      {/* Mobile Testing Strategy */}
      <Card className="p-6 bg-yellow-50">
        <h3 className="text-xl font-bold mb-4">Mobile A/B Testing Strategy</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-900 mb-3">Phase 1: Format Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Feed vs Square vs Stories performance</li>
                <li>• Optimal text size for each format</li>
                <li>• CTA button placement testing</li>
                <li>• Visual hierarchy effectiveness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-3">Phase 2: Content Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Shortened vs full copy versions</li>
                <li>• Icon vs text-based benefits</li>
                <li>• Product image size optimization</li>
                <li>• Urgency element effectiveness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-3">Phase 3: Audience Testing</h4>
              <ul className="text-sm space-y-1">
                <li>• Mobile-only audience segments</li>
                <li>• Time-of-day optimization</li>
                <li>• App vs mobile web performance</li>
                <li>• Cross-platform user behavior</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-semibold mb-2">Key Mobile Metrics to Track:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>• Mobile CTR vs Desktop CTR</div>
              <div>• Touch-to-conversion rate</div>
              <div>• Mobile page load speed</div>
              <div>• App store conversion rate</div>
              <div>• Cross-device conversion tracking</div>
              <div>• Mobile bounce rate</div>
              <div>• Finger-friendly interaction rate</div>
              <div>• Mobile checkout completion</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
