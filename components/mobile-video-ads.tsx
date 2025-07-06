"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Clock,
  TrendingUp,
  Smartphone,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
} from "lucide-react"

export function MobileVideoAds() {
  const [selectedFormat, setSelectedFormat] = useState("instagram-stories")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  // Instagram Stories Video Ad (9:16)
  const InstagramStoriesVideo = () => (
    <div className="w-[280px] h-[498px] bg-black rounded-3xl overflow-hidden relative mx-auto shadow-2xl">
      {/* Stories Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4">
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
          <MoreHorizontal className="w-6 h-6 text-white" />
        </div>
        {/* Progress bar */}
        <div className="w-full h-0.5 bg-white/30 rounded-full mt-3">
          <div className="w-1/3 h-full bg-white rounded-full"></div>
        </div>
      </div>

      {/* Video Content */}
      <div className="h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-8 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center text-white">
          {/* Hook Text */}
          <div className="mb-8">
            <div className="bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-pulse">
              <p className="font-bold text-sm">STOP SCROLLING!</p>
            </div>
            <h1 className="text-2xl font-bold leading-tight mb-3">
              Don't Learn AI.
              <br />
              <span className="text-yellow-400">Use AI.</span>
            </h1>
            <p className="text-base text-gray-200">Start using AI in your marketing today</p>
          </div>

          {/* Product Showcase */}
          <div className="mb-8 relative">
            <div className="w-40 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-2xl flex items-center justify-center transform rotate-3">
              <div className="text-center text-gray-900">
                <p className="font-black text-xl mb-1">1000+</p>
                <p className="font-bold text-sm">AI PROMPTS</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
              NEW!
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              $29.99
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="font-semibold text-sm">✨ Use AI instantly - no learning required</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="font-semibold text-sm">📈 Boost engagement by 300%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="font-semibold text-sm">⏰ Save 20+ hours weekly</p>
            </div>
          </div>

          {/* CTA */}
          <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-base shadow-lg transform hover:scale-105 transition-all">
            Get Instant Access
          </Button>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-20 left-4 flex items-center gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full p-2"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full p-2"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>

        {/* Swipe Up Indicator */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
            <p className="text-white text-sm font-medium">Swipe up for instant access</p>
          </div>
        </div>
      </div>
    </div>
  )

  // TikTok Style Vertical Video (9:16)
  const TikTokStyleVideo = () => (
    <div className="w-[280px] h-[498px] bg-black rounded-3xl overflow-hidden relative mx-auto shadow-2xl">
      {/* Video Content */}
      <div className="h-full bg-gradient-to-b from-gray-900 to-black relative">
        {/* Main Content */}
        <div className="h-full flex flex-col justify-center items-center p-6 text-white relative">
          {/* Hook Animation */}
          <div className="absolute top-20 left-0 right-0 text-center">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block animate-pulse">
              <p className="font-bold text-sm">POV: You skip learning AI and just start using it...</p>
            </div>
          </div>

          {/* Main Visual */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-48 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-6">
                <div className="text-center">
                  <p className="font-black text-2xl mb-2 text-white">1000+</p>
                  <p className="font-bold text-sm text-white">CHATGPT</p>
                  <p className="font-bold text-sm text-white">PROMPTS</p>
                </div>
              </div>

              {/* Floating text bubbles */}
              <div className="absolute -top-8 -left-4 bg-yellow-400 text-black px-3 py-2 rounded-full text-xs font-bold animate-bounce">
                Mind = Blown 🤯
              </div>
              <div className="absolute -bottom-6 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-xs font-bold animate-pulse">
                Only $29.99!
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold mb-3 leading-tight">
              This made AI simple to use
              <br />
              <span className="text-yellow-400">marketing game</span>
            </h1>
            <p className="text-sm text-gray-300">2,847+ others agree</p>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-3 bottom-32 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <Heart className="w-6 h-6 text-red-500 fill-current" />
            </div>
            <span className="text-white text-xs font-semibold">2.8K</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">847</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <Share className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">Share</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <Bookmark className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-6 left-4 right-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-semibold text-sm">@aibeginnermode</span>
          </div>
          <p className="text-white text-sm leading-tight">
            1000+ ChatGPT prompts that actually work 🔥 Link in bio for instant access #AIMarketing #ChatGPT
            #MarketingTips
          </p>
        </div>
      </div>
    </div>
  )

  // Facebook Feed Video (16:9 mobile optimized)
  const FacebookFeedVideo = () => (
    <div className="w-full max-w-[375px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      {/* Facebook Header */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4" />
              <span className="text-sm text-gray-500">• Sponsored</span>
            </div>
            <p className="text-xs text-gray-400">2 hours ago</p>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Video Container */}
      <div className="relative bg-black aspect-video">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          {/* Animated Background Elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 right-6 w-12 h-12 bg-purple-400/30 rounded-full blur-lg animate-bounce"></div>
        </div>

        {/* Video Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 text-white text-center">
          {/* Hook */}
          <div className="mb-6">
            <div className="bg-red-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3">
              <p className="font-bold text-sm">MARKETING SECRET REVEALED</p>
            </div>
            <h1 className="text-lg font-bold leading-tight">
              How I Started Using AI in Marketing Without Learning Anything Technical
              <br />
              <span className="text-yellow-400">In Just 5 Minutes</span>
            </h1>
          </div>

          {/* Product Demo */}
          <div className="mb-6 relative">
            <div className="w-32 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-xl flex items-center justify-center">
              <div className="text-center text-gray-900">
                <p className="font-black text-base mb-1">1000+</p>
                <p className="font-bold text-xs">AI PROMPTS</p>
              </div>
            </div>
            {/* Step indicators */}
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>

          {/* Results */}
          <div className="text-center">
            <p className="text-sm font-semibold mb-1">Used by 2,847+ marketers</p>
            <p className="text-xs text-gray-300">Average time saved: 20+ hours/week</p>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full p-1.5"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full p-1.5"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>

        {/* Captions */}
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <div className="bg-black/70 backdrop-blur-sm rounded px-3 py-1 inline-block">
            <p className="text-white text-sm font-medium">[No audio needed - visual demo]</p>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-3">
        <p className="text-sm text-gray-900 mb-3 leading-relaxed">
          🚀 Want to 10x your content creation speed? This complete ChatGPT prompts library has everything you need to
          generate professional content in minutes, not hours.
          <br />
          <br />✅ 500 Social Media Prompts
          <br />✅ 240 Automation Prompts
          <br />✅ 200 Marketing Prompts
          <br />✅ 100 Content Creation Prompts
          <br />
          <br />
          Limited time: $29.99 (normally $59.99)
        </p>

        {/* CTA Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mb-3">
          <Download className="w-4 h-4 mr-2" />
          Get Instant Access - $29.99
        </Button>

        {/* Engagement Bar */}
        <div className="flex items-center justify-between text-gray-500 text-sm border-t border-gray-200 pt-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>Comment</span>
            </div>
            <div className="flex items-center gap-1">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Square Video for Feed (1:1)
  const SquareFeedVideo = () => (
    <div className="w-full max-w-[400px] aspect-square bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      {/* Video Container */}
      <div className="relative bg-black h-full">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
          {/* Animated Elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-green-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-12 left-8 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-bounce"></div>
        </div>

        {/* Video Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-white text-center">
          {/* Top Hook */}
          <div className="absolute top-6 left-0 right-0 text-center">
            <div className="bg-yellow-500 text-black px-4 py-2 rounded-full inline-block font-bold text-sm">
              Learning AI vs Using AI
            </div>
          </div>

          {/* Split Screen Effect */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {/* Before */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500/80 rounded-lg flex items-center justify-center mb-2">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-semibold text-red-300">BEFORE</p>
                <p className="text-xs">4 hours per post</p>
              </div>

              {/* After */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500/80 rounded-lg flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-semibold text-green-300">AFTER</p>
                <p className="text-xs">5 minutes per post</p>
              </div>
            </div>
          </div>

          {/* Product Reveal */}
          <div className="mb-6">
            <div className="w-32 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-2xl flex items-center justify-center mb-3">
              <div className="text-center text-gray-900">
                <p className="font-black text-lg">1000+</p>
                <p className="font-bold text-xs">PROMPTS</p>
              </div>
            </div>
            <p className="text-sm font-semibold">The secret? AI Prompts</p>
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-6 left-0 right-0 text-center px-6">
            <p className="text-lg font-bold mb-2">
              <span className="line-through text-gray-400">$59.99</span> <span className="text-yellow-400">$29.99</span>
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full text-sm">
              Get Yours Now
            </Button>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full p-1.5"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 rounded-full p-1.5"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div className="h-full bg-white w-1/3"></div>
        </div>
      </div>
    </div>
  )

  // YouTube Shorts Style (9:16)
  const YouTubeShortsVideo = () => (
    <div className="w-[280px] h-[498px] bg-black rounded-3xl overflow-hidden relative mx-auto shadow-2xl">
      {/* Video Content */}
      <div className="h-full bg-gradient-to-b from-red-900 via-orange-900 to-yellow-900 relative">
        {/* YouTube Shorts UI Elements */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
            <p className="text-white text-xs font-semibold">Shorts</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full flex flex-col justify-center items-center p-6 text-white relative">
          {/* Hook */}
          <div className="absolute top-16 left-0 right-0 text-center">
            <div className="bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-2">
              <p className="font-bold text-sm">VIRAL MARKETING HACK</p>
            </div>
            <h1 className="text-xl font-bold leading-tight">
              SKIP THE AI LEARNING CURVE
              <br />
              <span className="text-yellow-400">1M+ views monthly</span>
            </h1>
          </div>

          {/* Demo Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              {/* Step by step reveal */}
              <div className="mb-6">
                <div className="w-40 h-24 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl shadow-2xl flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <p className="font-black text-xl">STEP 1</p>
                    <p className="font-bold text-sm">Open ChatGPT</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold mb-2">Use these 1000+ prompts</p>
                  <p className="text-xs text-gray-300">Instead of starting from scratch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="absolute bottom-20 left-0 right-0 text-center px-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 mb-4">
              <p className="text-lg font-bold mb-2">Results in 30 days:</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold text-green-400">+300%</p>
                  <p className="text-xs">Engagement</p>
                </div>
                <div>
                  <p className="font-bold text-blue-400">20+ hrs</p>
                  <p className="text-xs">Time Saved</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full">
              Get These Prompts
            </Button>
          </div>
        </div>

        {/* Right Side Actions (YouTube Shorts style) */}
        <div className="absolute right-3 bottom-32 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <Heart className="w-6 h-6 text-red-500 fill-current" />
            </div>
            <span className="text-white text-xs font-semibold">12K</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">2.1K</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-1">
              <Share className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">Share</span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-16">
          <p className="text-white text-sm font-semibold mb-1">AI Marketing Secrets Revealed</p>
          <p className="text-gray-300 text-xs">1000+ ChatGPT prompts for marketers - Link in description</p>
        </div>
      </div>
    </div>
  )

  const formats = [
    { id: "instagram-stories", name: "Instagram Stories", component: <InstagramStoriesVideo /> },
    { id: "tiktok-style", name: "TikTok Style", component: <TikTokStyleVideo /> },
    { id: "facebook-feed", name: "Facebook Feed", component: <FacebookFeedVideo /> },
    { id: "square-feed", name: "Square Feed", component: <SquareFeedVideo /> },
    { id: "youtube-shorts", name: "YouTube Shorts", component: <YouTubeShortsVideo /> },
  ]

  return (
    <div className="space-y-6 sm:space-y-8 p-4 sm:p-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Mobile-Optimized Video Ads</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
          Designed for maximum engagement on mobile devices across all platforms
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {formats.map((format) => (
            <Button
              key={format.id}
              variant={selectedFormat === format.id ? "default" : "outline"}
              onClick={() => setSelectedFormat(format.id)}
              className="text-xs sm:text-sm px-3 py-2"
            >
              {format.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">{formats.find((f) => f.id === selectedFormat)?.component}</div>

      {/* Mobile Video Optimization Features */}
      <Card className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold">Mobile Video Optimization Features</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-blue-600 text-sm sm:text-base">Visual Design</h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Large, readable text (16px+ minimum)</li>
              <li>• High contrast colors for visibility</li>
              <li>• Vertical-first design approach</li>
              <li>• Touch-friendly interactive elements</li>
              <li>• Animated elements for attention</li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-green-600 text-sm sm:text-base">Sound-Off Optimization</h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Visual storytelling without audio</li>
              <li>• Text overlays for key messages</li>
              <li>• Captions and subtitles ready</li>
              <li>• Emoji and icons for emotion</li>
              <li>• Clear visual progression</li>
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-purple-600 text-sm sm:text-base">Platform-Specific</h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
              <li>• Native UI elements for each platform</li>
              <li>• Proper aspect ratios (9:16, 1:1, 16:9)</li>
              <li>• Platform-appropriate interactions</li>
              <li>• Optimized for thumb scrolling</li>
              <li>• Quick loading and smooth playback</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Video Content Strategy */}
      <Card className="p-4 sm:p-6 bg-blue-50">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Mobile Video Content Strategy</h3>
        <div className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2 sm:mb-3 text-sm sm:text-base">
                Hook Strategy (0-3 seconds)
              </h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• "STOP SCROLLING!" attention grabbers</li>
                <li>• "POV: You discover this..." scenarios</li>
                <li>• "BEFORE vs AFTER" comparisons</li>
                <li>• "This ONE trick..." curiosity gaps</li>
                <li>• Visual pattern interrupts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-600 mb-2 sm:mb-3 text-sm sm:text-base">
                Content Structure (3-15 seconds)
              </h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• Problem identification</li>
                <li>• Solution demonstration</li>
                <li>• Social proof integration</li>
                <li>• Results visualization</li>
                <li>• Clear value proposition</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-purple-600 mb-2 sm:mb-3 text-sm sm:text-base">
                Call-to-Action (Last 3 seconds)
              </h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• "Swipe up" for Stories</li>
                <li>• "Link in bio" for organic posts</li>
                <li>• "Get instant access" for urgency</li>
                <li>• "Tap to learn more" for discovery</li>
                <li>• Visual CTA buttons</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 mb-2 sm:mb-3 text-sm sm:text-base">Engagement Elements</h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• Interactive polls and questions</li>
                <li>• Countdown timers</li>
                <li>• Progress indicators</li>
                <li>• Animated transitions</li>
                <li>• Platform-native reactions</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Platform Specifications */}
      <Card className="p-4 sm:p-6 bg-gray-50">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Platform Video Specifications</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 font-semibold">Platform</th>
                <th className="text-center py-2 font-semibold">Aspect Ratio</th>
                <th className="text-center py-2 font-semibold">Duration</th>
                <th className="text-center py-2 font-semibold">File Size</th>
                <th className="text-center py-2 font-semibold">Resolution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 font-medium">Instagram Stories</td>
                <td className="text-center py-2">9:16</td>
                <td className="text-center py-2">15s max</td>
                <td className="text-center py-2">4GB max</td>
                <td className="text-center py-2">1080x1920</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">TikTok</td>
                <td className="text-center py-2">9:16</td>
                <td className="text-center py-2">15-60s</td>
                <td className="text-center py-2">500MB max</td>
                <td className="text-center py-2">1080x1920</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Facebook Feed</td>
                <td className="text-center py-2">16:9 or 1:1</td>
                <td className="text-center py-2">1-240s</td>
                <td className="text-center py-2">4GB max</td>
                <td className="text-center py-2">1920x1080</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">YouTube Shorts</td>
                <td className="text-center py-2">9:16</td>
                <td className="text-center py-2">60s max</td>
                <td className="text-center py-2">256GB max</td>
                <td className="text-center py-2">1080x1920</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Instagram Reels</td>
                <td className="text-center py-2">9:16</td>
                <td className="text-center py-2">90s max</td>
                <td className="text-center py-2">4GB max</td>
                <td className="text-center py-2">1080x1920</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Performance Metrics */}
      <Card className="p-4 sm:p-6 bg-green-50">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Expected Mobile Video Performance</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">+250%</div>
            <p className="text-xs sm:text-sm text-gray-600">Engagement Rate</p>
            <p className="text-xs text-gray-500">vs static ads</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">+180%</div>
            <p className="text-xs sm:text-sm text-gray-600">Click-Through Rate</p>
            <p className="text-xs text-gray-500">Mobile optimized</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">85%</div>
            <p className="text-xs sm:text-sm text-gray-600">Watch Time</p>
            <p className="text-xs text-gray-500">Average completion</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">+320%</div>
            <p className="text-xs sm:text-sm text-gray-600">Share Rate</p>
            <p className="text-xs text-gray-500">Viral potential</p>
          </div>
        </div>
      </Card>

      {/* Production Guidelines */}
      <Card className="p-4 sm:p-6 bg-yellow-50">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Mobile Video Production Guidelines</h3>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Pre-Production</h4>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• Plan for vertical viewing first</li>
                <li>• Design for sound-off consumption</li>
                <li>• Create thumb-stopping hooks</li>
                <li>• Plan clear visual progression</li>
                <li>• Design platform-specific versions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Production</h4>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• Use high contrast visuals</li>
                <li>• Keep text large and readable</li>
                <li>• Add motion and animation</li>
                <li>• Include visual cues and arrows</li>
                <li>• Test on actual mobile devices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Post-Production</h4>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• Add captions and subtitles</li>
                <li>• Optimize file sizes for mobile</li>
                <li>• Create multiple aspect ratios</li>
                <li>• Test loading speeds</li>
                <li>• A/B test different hooks</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
