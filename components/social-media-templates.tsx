"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react"

export function SocialMediaTemplates() {
  const [selectedPlatform, setSelectedPlatform] = useState("instagram")
  const [selectedTemplate, setSelectedTemplate] = useState("educational")

  // Instagram Post Templates
  const InstagramTemplates = () => {
    const templates = {
      educational: (
        <div className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">aibeginnermode</p>
                <p className="text-xs text-gray-500">Sponsored</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-white p-8 flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">?</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">AI Myth Busted</h2>
              <p className="text-lg text-gray-600 font-medium">"You need to be tech-savvy to use AI"</p>
            </div>

            <div className="bg-yellow-400 rounded-lg p-4 text-center mb-4">
              <p className="font-black text-gray-900 text-lg">REALITY CHECK</p>
              <p className="text-gray-900 font-medium">You just need the right prompts!</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">1000+ ready-to-use prompts</p>
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 mx-auto opacity-60" />
            </div>
          </div>

          {/* Engagement Bar */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6" />
                <MessageCircle className="w-6 h-6" />
                <Share2 className="w-6 h-6" />
              </div>
              <Bookmark className="w-6 h-6" />
            </div>
            <p className="font-semibold text-sm mb-1">2,847 likes</p>
            <p className="text-sm">
              <span className="font-semibold">aibeginnermode</span> Stop overthinking AI! 🤖 You don't need a computer
              science degree to use AI effectively. You just need the right prompts.
              <span className="text-blue-500"> #AIForBeginners #ChatGPT #MarketingTips</span>
            </p>
          </div>
        </div>
      ),

      testimonial: (
        <div className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">aibeginnermode</p>
                <p className="text-xs text-gray-500">2h</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-center">
            <div className="text-center mb-6">
              <Quote className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <blockquote className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                "I went from 4 hours to 15 minutes per social media post!"
              </blockquote>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-medium">- Sarah M., Marketing Director</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-gray-200 text-center">
              <p className="font-bold text-gray-900 mb-1">Ready for the same results?</p>
              <p className="text-sm text-gray-600">1000+ ChatGPT prompts waiting for you</p>
            </div>

            <div className="text-center mt-4">
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 mx-auto opacity-60" />
            </div>
          </div>

          {/* Engagement Bar */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 text-red-500 fill-current" />
                <MessageCircle className="w-6 h-6" />
                <Share2 className="w-6 h-6" />
              </div>
              <Bookmark className="w-6 h-6" />
            </div>
            <p className="font-semibold text-sm mb-1">1,923 likes</p>
            <p className="text-sm">
              <span className="font-semibold">aibeginnermode</span> Real results from real users! 🎉 This is what
              happens when you stop struggling and start using the right AI prompts.
              <span className="text-blue-500"> #TestimonialTuesday #AISuccess #Results</span>
            </p>
          </div>
        </div>
      ),

      promotional: (
        <div className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">aibeginnermode</p>
                <p className="text-xs text-gray-500">Sponsored</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="aspect-square bg-gradient-to-br from-red-50 to-yellow-50 p-8 flex flex-col justify-center relative">
            <Badge className="absolute top-4 right-4 bg-red-500 text-white font-bold">3-in-1 Bundle</Badge>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
                Don't Learn AI.
                <br />
                <span className="text-red-500">Use AI.</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium">Start today. It's easier than you think.</p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-20 bg-yellow-400 rounded-lg shadow-lg transform rotate-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-black text-gray-900 text-lg">1000+</p>
                    <p className="font-bold text-gray-900 text-xs">PROMPTS</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full p-1 shadow-lg">
                  <img src="/images/icon-dark.png" alt="Brand" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>ChatGPT Prompt Pack</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>7-Day AI Tracker</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>SEO Generator Tool</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm font-bold text-red-600 mb-1">Link in bio 👆</p>
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 mx-auto opacity-60" />
            </div>
          </div>

          {/* Engagement Bar */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6" />
                <MessageCircle className="w-6 h-6" />
                <Share2 className="w-6 h-6" />
              </div>
              <Bookmark className="w-6 h-6" />
            </div>
            <p className="font-semibold text-sm mb-1">3,456 likes</p>
            <p className="text-sm">
              <span className="font-semibold">aibeginnermode</span> Stop struggling with AI! 🚀 Get everything you need
              to start using AI effectively in your marketing today. Link in bio for instant access!
              <span className="text-blue-500"> #AIMarketing #ChatGPT #DigitalMarketing</span>
            </p>
          </div>
        </div>
      ),

      carousel: (
        <div className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">aibeginnermode</p>
                <p className="text-xs text-gray-500">1h</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Carousel Content */}
          <div className="aspect-square bg-gradient-to-br from-purple-50 to-white p-8 flex flex-col justify-center relative">
            <div className="absolute top-4 right-4 bg-black/20 text-white text-xs px-2 py-1 rounded-full">1/5</div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">5 AI Prompts That Changed Everything</h2>
              <p className="text-lg text-gray-600 font-medium">Content Creation Prompt</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200 mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">
                "Create a week's worth of social media posts for [topic] that are engaging and informative..."
              </p>
              <p className="text-xs text-gray-600">Swipe to see the full prompt →</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Get all 1000+ prompts</p>
              <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 mx-auto opacity-60" />
            </div>
          </div>

          {/* Engagement Bar */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6" />
                <MessageCircle className="w-6 h-6" />
                <Share2 className="w-6 h-6" />
              </div>
              <Bookmark className="w-6 h-6 text-yellow-500 fill-current" />
            </div>
            <p className="font-semibold text-sm mb-1">4,127 likes</p>
            <p className="text-sm">
              <span className="font-semibold">aibeginnermode</span> These 5 prompts will transform your content creation
              process! 🔥 Swipe through to see each one. Save this post for later!
              <span className="text-blue-500"> #AIPrompts #ContentCreation #SavedPost</span>
            </p>
          </div>
        </div>
      ),
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(templates).map((template) => (
            <Button
              key={template}
              variant={selectedTemplate === template ? "default" : "outline"}
              onClick={() => setSelectedTemplate(template)}
              className="text-sm capitalize"
            >
              {template}
            </Button>
          ))}
        </div>

        <div className="flex justify-center">{templates[selectedTemplate as keyof typeof templates]}</div>
      </div>
    )
  }

  // Instagram Stories Templates
  const InstagramStories = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Story Template 1 - Quick Tip */}
      <div className="w-[250px] h-[444px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl overflow-hidden relative mx-auto">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-red-500/30 to-transparent"></div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <img src="/images/icon-dark.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="text-white text-sm font-medium">aibeginnermode</span>
            </div>
            <div className="text-white text-xs">2h</div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center text-center">
            <Badge className="bg-yellow-400 text-gray-900 font-bold px-3 py-1 mb-6 mx-auto">Quick Tip</Badge>

            <h1 className="text-2xl font-black text-white leading-tight mb-4">AI Prompt Hack #1</h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <p className="text-white font-semibold text-lg">Always be specific!</p>
              <p className="text-gray-300 text-sm mt-2">
                Instead of "write a post"
                <br />
                Try "write a 150-word LinkedIn post about AI benefits for small businesses"
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">Get 1000+ specific prompts</p>
              <img
                src="/images/ai-beginner-mode-text.png"
                alt="Brand"
                className="h-3 mx-auto opacity-60 brightness-200"
              />
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Story Template 2 - Behind the Scenes */}
      <div className="w-[250px] h-[444px] bg-gradient-to-b from-blue-900 to-blue-800 rounded-3xl overflow-hidden relative mx-auto">
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <img src="/images/icon-dark.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="text-white text-sm font-medium">aibeginnermode</span>
            </div>
            <div className="text-white text-xs">5m</div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center text-center">
            <Badge className="bg-green-400 text-gray-900 font-bold px-3 py-1 mb-6 mx-auto">Behind the Scenes</Badge>

            <h1 className="text-2xl font-black text-white leading-tight mb-6">How I Created This Post in 2 Minutes</h1>

            <div className="space-y-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white font-semibold text-sm">Step 1: Used our content prompt</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white font-semibold text-sm">Step 2: Added brand voice</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white font-semibold text-sm">Step 3: Posted & engaged!</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">Want the same results?</p>
              <img
                src="/images/ai-beginner-mode-text.png"
                alt="Brand"
                className="h-3 mx-auto opacity-60 brightness-200"
              />
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // LinkedIn Post Templates
  const LinkedInTemplates = () => {
    const templates = {
      professional: (
        <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">AI Beginner Mode</p>
                <p className="text-sm text-gray-500">Marketing AI Tools • 2nd</p>
                <p className="text-xs text-gray-400">2h • 🌍</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-900 leading-relaxed">
                Most marketers are approaching AI completely wrong.
                <br />
                <br />
                They're trying to "learn AI" instead of simply using it.
                <br />
                <br />
                Here's what I've learned after helping 5,000+ marketers implement AI:
                <br />
                <br />❌ Don't spend months learning AI theory
                <br />✅ Start with proven prompts that work
                <br />
                <br />❌ Don't try to become an AI expert
                <br />✅ Focus on getting results in your specific niche
                <br />
                <br />❌ Don't reinvent the wheel
                <br />✅ Use templates that are already tested
                <br />
                <br />
                The fastest path to AI success? Stop learning. Start using.
                <br />
                <br />
                What's your biggest AI challenge right now?
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>👍 127</span>
              <span>💬 23 comments</span>
              <span>🔄 15 reposts</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <span>👍</span> Like
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="w-4 h-4" /> Comment
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <Share2 className="w-4 h-4" /> Repost
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <span>📤</span> Send
              </Button>
            </div>
          </div>
        </div>
      ),

      thoughtLeadership: (
        <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">AI Beginner Mode</p>
                <p className="text-sm text-gray-500">Marketing AI Tools • 2nd</p>
                <p className="text-xs text-gray-400">4h • 🌍</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-900 leading-relaxed">
                Unpopular opinion: AI won't replace marketers.
                <br />
                <br />
                But marketers who use AI will replace those who don't.
                <br />
                <br />
                I've been tracking this shift for the past year, and here's what I'm seeing:
                <br />
                <br />📈 Marketers using AI are 3x more productive
                <br />⚡ They're creating content 5x faster
                <br />🎯 Their campaigns are more targeted and effective
                <br />💰 They're delivering better ROI for their companies
                <br />
                <br />
                The gap is widening every day.
                <br />
                <br />
                The question isn't whether AI will change marketing.
                <br />
                It's whether you'll be on the right side of that change.
                <br />
                <br />
                What's your take? Are you seeing this shift in your industry?
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>👍 89</span>
              <span>💬 31 comments</span>
              <span>🔄 12 reposts</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <span>👍</span> Like
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="w-4 h-4" /> Comment
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <Share2 className="w-4 h-4" /> Repost
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                <span>📤</span> Send
              </Button>
            </div>
          </div>
        </div>
      ),
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(templates).map((template) => (
            <Button
              key={template}
              variant={selectedTemplate === template ? "default" : "outline"}
              onClick={() => setSelectedTemplate(template)}
              className="text-sm capitalize"
            >
              {template.replace(/([A-Z])/g, " $1").trim()}
            </Button>
          ))}
        </div>

        <div className="flex justify-center">{templates[selectedTemplate as keyof typeof templates]}</div>
      </div>
    )
  }

  // Facebook Post Templates
  const FacebookTemplates = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="font-semibold">AI Beginner Mode</p>
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>3h</span>
              <span>•</span>
              <span>🌍</span>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <div className="mb-4">
          <p className="text-gray-900 leading-relaxed mb-4">
            🤖 AI Confession: I used to spend HOURS writing social media posts.
            <br />
            <br />
            Now? 15 minutes. Max.
            <br />
            <br />
            The secret? I stopped trying to be an AI expert and started using proven prompts.
            <br />
            <br />
            Here's my exact process:
            <br />
            1️⃣ Pick a prompt from our collection
            <br />
            2️⃣ Add my topic and brand voice
            <br />
            3️⃣ Hit enter and get amazing content
            <br />
            4️⃣ Make minor tweaks and post
            <br />
            <br />
            That's it. No AI courses. No complex training.
            <br />
            <br />
            Just simple, effective prompts that work every time.
            <br />
            <br />
            Want to try it yourself? Comment "PROMPTS" and I'll send you 5 of my favorites! 👇
          </p>
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full border border-white"></div>
              <div className="w-5 h-5 bg-red-500 rounded-full border border-white"></div>
              <div className="w-5 h-5 bg-yellow-500 rounded-full border border-white"></div>
            </div>
            <span>You and 247 others</span>
          </div>
          <span>52 comments</span>
          <span>18 shares</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 flex-1">
            <span>👍</span> Like
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 flex-1">
            <MessageCircle className="w-4 h-4" /> Comment
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 flex-1">
            <Share2 className="w-4 h-4" /> Share
          </Button>
        </div>
      </div>
    </div>
  )

  // Twitter/X Templates
  const TwitterTemplates = () => {
    const templates = {
      thread: (
        <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold">AI Beginner Mode</p>
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-500 text-sm">@aibeginnermode</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">2h</span>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-900">
                    🧵 THREAD: 5 AI prompts that will change your marketing game
                    <br />
                    <br />
                    Most people are using AI wrong. Here's how to do it right:
                    <br />
                    <br />
                    1/6 👇
                  </p>

                  <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700">
                      <strong>Prompt #1: Content Ideas</strong>
                      <br />
                      "Generate 10 content ideas for [industry] that address common pain points and provide actionable
                      solutions. Include trending topics and seasonal relevance."
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm">2/6 in replies 👇</p>
                </div>

                <div className="flex items-center justify-between mt-4 text-gray-500">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">23</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">45</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">127</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-4 h-4" />
                    <Share2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),

      single: (
        <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold">AI Beginner Mode</p>
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-500 text-sm">@aibeginnermode</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">4h</span>
                </div>
                <div>
                  <p className="text-gray-900 mb-3">
                    Hot take: You don't need to "learn AI" 🤖
                    <br />
                    <br />
                    You just need the right prompts.
                    <br />
                    <br />
                    Stop overthinking. Start using.
                    <br />
                    <br />
                    #AIForBeginners #MarketingTips #ChatGPT
                  </p>
                </div>

                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">12</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">28</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">89</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-4 h-4" />
                    <Share2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(templates).map((template) => (
            <Button
              key={template}
              variant={selectedTemplate === template ? "default" : "outline"}
              onClick={() => setSelectedTemplate(template)}
              className="text-sm capitalize"
            >
              {template}
            </Button>
          ))}
        </div>

        <div className="flex justify-center">{templates[selectedTemplate as keyof typeof templates]}</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Media Post Templates</h2>
        <p className="text-lg text-gray-600 mb-6">Consistent, on-brand templates for all your social media platforms</p>

        <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full mb-8">
          <Download className="w-4 h-4 mr-2" />
          Download All Templates
        </Button>
      </div>

      <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="instagram" className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
            Instagram Posts
          </TabsTrigger>
          <TabsTrigger value="stories" className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
            Stories
          </TabsTrigger>
          <TabsTrigger value="linkedin" className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            LinkedIn
          </TabsTrigger>
          <TabsTrigger value="facebook" className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            Facebook
          </TabsTrigger>
          <TabsTrigger value="twitter" className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black rounded"></div>
            Twitter/X
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="instagram">
            <InstagramTemplates />
          </TabsContent>

          <TabsContent value="stories">
            <InstagramStories />
          </TabsContent>

          <TabsContent value="linkedin">
            <LinkedInTemplates />
          </TabsContent>

          <TabsContent value="facebook">
            <FacebookTemplates />
          </TabsContent>

          <TabsContent value="twitter">
            <TwitterTemplates />
          </TabsContent>
        </div>
      </Tabs>

      {/* Template Guidelines */}
      <Card className="p-6 mt-12">
        <h3 className="text-xl font-bold mb-4">Template Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-red-600">Brand Consistency</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Always use brand colors (Black, Red, Yellow)</li>
              <li>• Include logo/icon in every post</li>
              <li>• Maintain consistent voice and tone</li>
              <li>• Use approved fonts and sizing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Content Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 40% Educational content</li>
              <li>• 30% Promotional content</li>
              <li>• 20% Behind-the-scenes</li>
              <li>• 10% User-generated content</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-green-600">Engagement Tips</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Always include a call-to-action</li>
              <li>• Ask questions to drive comments</li>
              <li>• Use relevant hashtags (#AIForBeginners)</li>
              <li>• Post consistently using templates</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-purple-600">Platform Optimization</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Instagram: Visual-first, stories for tips</li>
              <li>• LinkedIn: Professional, thought leadership</li>
              <li>• Facebook: Community-focused, longer form</li>
              <li>• Twitter: Quick tips, threads for depth</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-orange-600">Visual Elements</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Use high contrast for readability</li>
              <li>• Include brand icon as visual anchor</li>
              <li>• Maintain 8px border radius</li>
              <li>• Use subtle shadows for depth</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-600">Content Pillars</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI Education & Tips</li>
              <li>• Success Stories & Results</li>
              <li>• Behind-the-Scenes Content</li>
              <li>• Product Features & Benefits</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Hashtag Strategy */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Hashtag Strategy by Platform</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Primary Hashtags (Always Use)</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">#AIForBeginners</Badge>
              <Badge variant="outline">#ChatGPT</Badge>
              <Badge variant="outline">#AIMarketing</Badge>
              <Badge variant="outline">#MarketingTips</Badge>
              <Badge variant="outline">#DigitalMarketing</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Platform-Specific Tags</h4>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Instagram:</strong> #ContentCreation #SocialMediaTips #MarketingHacks
              </div>
              <div>
                <strong>LinkedIn:</strong> #ProfessionalDevelopment #BusinessGrowth #MarketingStrategy
              </div>
              <div>
                <strong>Twitter:</strong> #AITools #TechTips #StartupLife
              </div>
              <div>
                <strong>Facebook:</strong> #SmallBusiness #Entrepreneurship #MarketingAdvice
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
