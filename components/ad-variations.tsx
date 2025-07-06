"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Clock, Users, TrendingUp, CheckCircle, Star, ArrowRight } from "lucide-react"

export function AdVariations() {
  const [selectedVariation, setSelectedVariation] = useState("problem-solution")

  // Variation 1: Problem/Solution Focus
  const ProblemSolutionFeed = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">AI Beginner Mode</p>
            <p className="text-sm text-gray-500">Sponsored</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-white p-8">
        {/* Problem Statement */}
        <div className="text-center mb-6">
          <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-bold text-red-800 mb-2">Tired of Complex AI Tools?</h2>
            <p className="text-red-700 text-sm">"I just want to use AI, not learn it..."</p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-red-200 rounded"></div>
            <ArrowRight className="w-6 h-6 text-red-500" />
            <div className="w-8 h-1 bg-green-400 rounded"></div>
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-2">We Made AI Simple</h1>
          <p className="text-lg text-gray-600 font-medium">1000+ ready-to-use prompts that work instantly</p>
        </div>

        {/* Visual Proof */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-44 h-28 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-black text-gray-900 text-xl">COPY</p>
                <p className="font-black text-gray-900 text-xl">PASTE</p>
                <p className="font-bold text-gray-900 text-sm">& USE</p>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              WORKS!
            </div>
          </div>
        </div>

        {/* Quick Benefits */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 bg-white rounded-lg p-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">No learning curve required</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg p-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">Start getting results in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg p-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">3-in-1 bundle + bonus templates</span>
          </div>
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg">
          <Download className="w-5 h-5 mr-2" />
          Use AI Now
        </Button>

        <div className="text-center mt-3 text-sm text-gray-500">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 opacity-60" />
        </div>
      </div>
    </div>
  )

  // Variation 2: Social Proof Focus
  const SocialProofFeed = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">AI Beginner Mode</p>
            <p className="text-sm text-gray-500">Sponsored</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-white p-8">
        {/* Social Proof Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +5K
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-2">Join 5,000+ Marketers Using AI the Easy Way</h1>
          <p className="text-lg text-gray-600 font-medium">"Finally, AI that's simple to use for marketing!"</p>
        </div>

        {/* Testimonial Cards */}
        <div className="space-y-3 mb-6">
          <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500">Sarah M., Marketing Director</span>
            </div>
            <p className="text-sm text-gray-700">"So easy to use, I got results instantly!"</p>
          </div>

          <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500">Mike R., Entrepreneur</span>
            </div>
            <p className="text-sm text-gray-700">"I can finally use AI without a PhD!"</p>
          </div>
        </div>

        {/* Product Visual */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-40 h-24 bg-yellow-400 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-black text-gray-900 text-lg">1000+</p>
                <p className="font-bold text-gray-900 text-sm">PROVEN</p>
                <p className="font-bold text-gray-900 text-sm">PROMPTS</p>
              </div>
            </div>
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">Bestseller</Badge>
          </div>
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg">
          <Users className="w-5 h-5 mr-2" />
          Use AI the Easy Way
        </Button>

        <div className="text-center mt-3 text-sm text-gray-500">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 opacity-60" />
        </div>
      </div>
    </div>
  )

  // Variation 3: Urgency/Scarcity Focus
  const UrgencyFeed = () => (
    <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-red-200">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">AI Beginner Mode</p>
            <p className="text-sm text-gray-500">Sponsored</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8">
        {/* Urgency Header */}
        <div className="text-center mb-6">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block mb-3 animate-pulse">
            <span className="font-bold text-sm">⚡ LIMITED TIME OFFER</span>
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-2">Don't Miss Out on Easy AI</h1>
          <p className="text-lg text-red-600 font-bold">Your competitors are already using AI effortlessly...</p>
        </div>

        {/* Countdown Visual */}
        <div className="bg-white rounded-lg p-4 mb-6 border-2 border-red-200">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Special Launch Price Ends Soon:</p>
            <div className="flex justify-center gap-2">
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">2</div>
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">3</div>
              <span className="text-red-500 font-bold">:</span>
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">4</div>
              <div className="bg-red-500 text-white px-3 py-2 rounded font-bold">7</div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Hours : Minutes</p>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-3 text-center">Use AI Easily Today:</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">1000+ AI prompts that work instantly</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Skip months of learning</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Start competing with AI today</span>
            </div>
          </div>
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg animate-pulse">
          <Clock className="w-5 h-5 mr-2" />
          Use AI Before It's Too Late
        </Button>

        <div className="text-center mt-3 text-sm text-red-600 font-medium">⏰ Price increases in 24 hours</div>
        <div className="text-center mt-3 text-sm text-gray-500">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 opacity-60" />
        </div>
      </div>
    </div>
  )

  // Variation 4: Results-Focused Story
  const ResultsStory = () => (
    <div className="w-[375px] h-[667px] bg-gradient-to-b from-green-900 to-green-800 rounded-3xl overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-yellow-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <Badge className="bg-green-500 text-white font-bold px-3 py-1">Results Guaranteed</Badge>
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-3 opacity-60" />
        </div>

        <div className="flex-1 flex flex-col justify-center text-center">
          <div className="mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h2 className="text-3xl font-black text-white mb-2">Before AI:</h2>
              <p className="text-red-300 text-lg">😰 Complex AI tools</p>
              <p className="text-red-300 text-lg">😰 Confusing interfaces</p>
              <p className="text-red-300 text-lg">😰 Zero results</p>
            </div>

            <div className="flex justify-center mb-6">
              <ArrowRight className="w-12 h-12 text-yellow-400 animate-bounce" />
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6 text-gray-900">
              <h2 className="text-3xl font-black mb-2">After AI:</h2>
              <p className="text-lg font-bold">✅ Simple AI tools</p>
              <p className="text-lg font-bold">✅ Easy-to-use interface</p>
              <p className="text-lg font-bold">✅ Immediate results</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
            <p className="text-white font-bold text-lg">"I went from confused to confident in minutes!"</p>
            <p className="text-gray-300 text-sm mt-1">- Real customer result</p>
          </div>
        </div>

        <div className="space-y-4">
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 text-lg rounded-full shadow-lg">
            Use AI and Get Results
          </Button>
          <p className="text-center text-sm text-gray-300">Swipe up for instant transformation</p>
        </div>
      </div>
    </div>
  )

  // Variation 5: Feature-Heavy Banner
  const FeatureBanner = () => (
    <div className="w-[800px] h-[450px] bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg shadow-lg overflow-hidden relative text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>

      <div className="relative z-10 p-8 h-full">
        <div className="grid grid-cols-3 gap-8 h-full">
          {/* Left Column - Main Message */}
          <div className="flex flex-col justify-center">
            <Badge className="bg-yellow-400 text-gray-900 font-bold px-3 py-1 mb-4 w-fit">Complete AI Toolkit</Badge>
            <h1 className="text-3xl font-black mb-3">
              Everything You Need to
              <span className="text-yellow-400"> Use AI Effortlessly</span>
            </h1>
            <p className="text-lg text-blue-100 mb-6">No more learning. No more struggling. Just results.</p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full w-fit">
              Use AI Now
            </Button>
          </div>

          {/* Middle Column - Features */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">1</span>
                </div>
                <h3 className="font-bold">1000+ ChatGPT Prompts</h3>
              </div>
              <p className="text-sm text-blue-100">Ready-to-use prompts for every marketing need</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">2</span>
                </div>
                <h3 className="font-bold">7-Day Progress Tracker</h3>
              </div>
              <p className="text-sm text-blue-100">Track your AI usage journey</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">3</span>
                </div>
                <h3 className="font-bold">SEO Generator Tool</h3>
              </div>
              <p className="text-sm text-blue-100">Automated SEO content creation</p>
            </div>
          </div>

          {/* Right Column - Visual + Bonus */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative mb-6">
              <div className="w-48 h-32 bg-yellow-400 rounded-xl shadow-2xl flex items-center justify-center transform rotate-6">
                <div className="text-center text-gray-900">
                  <p className="font-black text-2xl">ALL-IN-ONE</p>
                  <p className="font-bold">AI TOOLKIT</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm font-bold px-3 py-2 rounded-full">
                + BONUS
              </div>
            </div>

            <div className="bg-red-500 rounded-lg p-4 text-center">
              <p className="font-bold text-lg">FREE BONUS:</p>
              <p className="text-sm">Professional Communication Templates</p>
              <p className="text-xs mt-1 opacity-90">Worth $97 - Yours FREE</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-8">
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-4 opacity-60" />
        </div>
      </div>
    </div>
  )

  const variations = [
    { id: "problem-solution", name: "Problem/Solution", component: <ProblemSolutionFeed /> },
    { id: "social-proof", name: "Social Proof", component: <SocialProofFeed /> },
    { id: "urgency", name: "Urgency/Scarcity", component: <UrgencyFeed /> },
    { id: "results-story", name: "Results Story", component: <ResultsStory /> },
    { id: "feature-banner", name: "Feature-Heavy Banner", component: <FeatureBanner /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Ad Creative Variations</h2>
        <p className="text-lg text-gray-600 mb-6">
          Different psychological triggers and layouts to maximize conversion rates
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {variations.map((variation) => (
            <Button
              key={variation.id}
              variant={selectedVariation === variation.id ? "default" : "outline"}
              onClick={() => setSelectedVariation(variation.id)}
              className="text-sm"
            >
              {variation.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">{variations.find((v) => v.id === selectedVariation)?.component}</div>

      {/* Variation Strategy Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Variation Strategy Breakdown</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-red-600">Problem/Solution</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Identifies frustration with complex AI</li>
              <li>• Shows clear path to simplicity</li>
              <li>• Emphasizes ease of use</li>
              <li>• "Use AI Now" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-blue-600">Social Proof</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Shows user testimonials</li>
              <li>• Displays user count (5,000+)</li>
              <li>• Star ratings for credibility</li>
              <li>• "Use AI the Easy Way" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-orange-600">Urgency/Scarcity</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Limited time messaging</li>
              <li>• Countdown timer visual</li>
              <li>• Fear of missing out on easy AI</li>
              <li>• "Use AI Before It's Too Late" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-green-600">Results Story</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Before/after transformation</li>
              <li>• From complex to simple</li>
              <li>• Customer success quote</li>
              <li>• "Use AI and Get Results" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-purple-600">Feature-Heavy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Comprehensive value display</li>
              <li>• Numbered feature list</li>
              <li>• Bonus value emphasis</li>
              <li>• "Use AI Now" CTA</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-600">A/B Testing Tips</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Test one element at a time</li>
              <li>• Run for statistical significance</li>
              <li>• Monitor cost per conversion</li>
              <li>• Scale winning variations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
