"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, TrendingUp, Users, Clock, Zap, Download, Star, Target } from "lucide-react"

export function VideoAdCopyVariations() {
  const [selectedScript, setSelectedScript] = useState("value-focused")
  const [selectedLength, setSelectedLength] = useState("30s")

  // Value-Focused Copy Variations
  const ValueFocusedCopy = () => {
    const copyVariations = {
      "15s": {
        headlines: [
          "1000+ AI Prompts for Less Than 3¢ Each",
          "The Most Affordable AI Marketing Solution Ever",
          "Why Pay $100s When You Can Get Everything for $30?",
          "1000+ ChatGPT Prompts = $0.03 Each (Insane Value!)",
          "Stop Overpaying for AI Tools - Get Everything for $29.99",
          "The $30 Investment That Saves You $1000s",
          "1000+ Proven Prompts at Unbeatable Price",
          "Best Value AI Bundle - Limited Time Only",
        ],
        descriptions: [
          "Get 1000+ ChatGPT prompts for just $29.99 - that's less than 3 cents per prompt! Includes social media, marketing, automation & content prompts plus bonus tools. Limited time 50% off!",
          "Why spend hundreds on separate AI tools? Our complete bundle gives you everything: 500 social media prompts, 240 automation prompts, 200 marketing prompts, 100 content prompts + bonuses for just $29.99!",
          "🔥 INCREDIBLE VALUE: 1000+ professional ChatGPT prompts normally $59.99, today only $29.99! Plus FREE SEO tool, tracker & templates. That's less than a coffee per prompt!",
          "Smart marketers are saving BIG! Get our complete AI prompts collection (1000+ prompts) for 50% off. Includes every category you need + exclusive bonus tools. Ends soon!",
          "💰 BEST DEAL EVER: Complete ChatGPT marketing toolkit for $29.99 (reg $59.99). 1000+ prompts covering social media, automation, marketing & content creation. Limited time!",
          "Stop wasting money on expensive AI courses! Get 1000+ ready-to-use prompts for just $29.99. Everything you need to master AI marketing in one affordable bundle.",
          "⚡ FLASH SALE: 1000+ ChatGPT prompts + bonus tools for $29.99 (50% off). Perfect for marketers, entrepreneurs & content creators. Instant download, lifetime access!",
          "The math is simple: $29.99 ÷ 1000+ prompts = $0.03 each! Plus you get our SEO generator, progress tracker & bonus templates FREE. This deal won't last!",
        ],
        ctas: [
          "Get This Incredible Deal Now",
          "Save 50% - Limited Time Only",
          "Claim Your $30 Savings Today",
          "Download Everything for $29.99",
          "Get Instant Access - Best Value",
          "Don't Miss This Amazing Price",
          "Secure Your Bundle Now",
          "Get 1000+ Prompts for $30",
        ],
      },
      "30s": {
        headlines: [
          "1000+ ChatGPT Prompts for the Price of Lunch",
          "Why Smart Marketers Pay $30 Instead of $300",
          "The Complete AI Marketing Toolkit for $29.99",
          "Everything You Need to Master AI Marketing",
          "1000+ Proven Prompts + Bonus Tools = $29.99",
          "Stop Overpaying for AI Solutions",
          "The Ultimate ChatGPT Bundle at Unbeatable Price",
          "Transform Your Marketing for Less Than $30",
        ],
        descriptions: [
          "Get the complete ChatGPT marketing toolkit: 500 social media prompts, 240 automation prompts, 200 marketing prompts, 100 content prompts + SEO tool, tracker & bonus templates. Normally $59.99, today just $29.99!",
          "Why buy expensive AI courses when you can get everything you need for $29.99? Our bundle includes 1000+ proven prompts across all marketing categories plus exclusive bonus tools. 50% off ends soon!",
          "🚀 COMPLETE PACKAGE: Everything you need to dominate AI marketing! 1000+ ChatGPT prompts covering social media, automation, marketing & content + bonus tools. Limited time: $29.99 (reg $59.99)",
          "Smart marketers choose value! Get our comprehensive ChatGPT prompts collection (1000+ prompts) plus SEO generator, progress tracker & communication templates. All for just $29.99 - that's 50% off!",
          "💡 GENIUS DEAL: Instead of paying $50-100 for individual prompt packs, get ALL categories (1000+ prompts) plus bonus tools for just $29.99. Perfect for marketers, entrepreneurs & agencies!",
          "The most cost-effective way to master AI marketing! 1000+ professional prompts organized by category + exclusive tools. Normally $59.99, grab it for $29.99 before price goes back up!",
          "⭐ BEST VALUE: Complete ChatGPT marketing system with 1000+ prompts, SEO generator, progress tracker & bonus templates. Everything you need for successful AI marketing - just $29.99!",
          "Stop paying premium prices for basic AI tools! Our complete bundle gives you 1000+ prompts + bonus tools for less than most single courses. Limited time: 50% off = $29.99!",
        ],
        ctas: [
          "Get Complete Package - 50% Off",
          "Download Everything Now - $29.99",
          "Claim Your Marketing Toolkit",
          "Get All 1000+ Prompts Today",
          "Secure This Deal Before It Ends",
          "Transform Your Marketing for $30",
          "Get Instant Access - Best Price",
          "Don't Pay Full Price - Save Now",
        ],
      },
      "60s": {
        headlines: [
          "The $29.99 Investment That Transforms Your Marketing",
          "Why Pay $300+ When You Can Get Everything for $30?",
          "1000+ ChatGPT Prompts: The Ultimate Value Proposition",
          "The Complete AI Marketing Solution for Less Than Dinner",
          "Stop Overpaying: Get Every AI Tool You Need for $29.99",
          "The Smart Marketer's Choice: Maximum Value, Minimum Cost",
          "Everything You Need to Master AI Marketing - One Low Price",
          "The Most Comprehensive AI Bundle at the Best Price Ever",
        ],
        descriptions: [
          "Tired of expensive AI courses and tools? Get everything you need for just $29.99! Our complete bundle includes 500 social media prompts, 240 automation prompts, 200 marketing prompts, 100 content prompts + SEO generator, progress tracker & bonus templates. That's 1000+ prompts for less than 3¢ each! Normally $59.99, limited time 50% off. Perfect for marketers, entrepreneurs, agencies & content creators. Instant download, lifetime access, beginner-friendly format.",
          "🔥 INCREDIBLE VALUE ALERT: Why spend $50-300 on individual AI tools when you can get EVERYTHING for $29.99? Our comprehensive ChatGPT marketing toolkit includes every prompt category you need (1000+ total) plus exclusive bonus tools. Compare: Other prompt packs charge $50-100 for just ONE category. We give you ALL categories + tools for just $29.99! This 50% off deal ends soon - don't miss out on the best AI marketing investment you'll ever make!",
          "💰 SMART MARKETERS SAVE BIG: Get our complete ChatGPT prompts collection for 50% off! Includes 500 social media power prompts, 240 automation & tool prompts, 200 marketing strategy prompts, 100 content creation prompts + our exclusive SEO prompt generator, 7-day progress tracker & 10 bonus communication templates. Normally $59.99, today just $29.99. That's less than most people spend on coffee! Perfect for busy marketers who want results without the learning curve. Instant access, lifetime updates, satisfaction guaranteed.",
          "⚡ LIMITED TIME: The most comprehensive AI marketing toolkit ever created - now 50% off! While others charge $100+ for basic prompt collections, we're giving you EVERYTHING: 1000+ professional prompts across all marketing categories, exclusive SEO generator tool, progress tracking system & bonus templates. All for just $29.99 (reg $59.99). Join 2000+ marketers who've already transformed their content creation process. This deal won't last - secure your complete toolkit now!",
          "🎯 BEST INVESTMENT FOR MARKETERS: Get 1000+ ChatGPT prompts + bonus tools for just $29.99! Our complete bundle covers every marketing scenario: social media content, email automation, marketing campaigns, blog posts & more. Plus exclusive tools you won't find anywhere else. Compare our value: Individual prompt packs cost $50-100 each. AI courses cost $200-500. We give you everything for just $29.99! That's less than 3¢ per prompt. Limited time 50% off - don't pay full price tomorrow!",
          "🚀 GAME-CHANGING DEAL: Transform your marketing for less than $30! Our complete ChatGPT toolkit includes everything you need: 500 social media prompts for every platform, 240 automation prompts for workflows, 200 marketing prompts for campaigns, 100 content prompts for blogs/emails + SEO generator, progress tracker & bonus templates. Normally $59.99, grab it for $29.99 before this deal expires. Perfect for entrepreneurs, agencies, marketers & content creators. Instant download, beginner-friendly, lifetime access.",
          "💡 INCREDIBLE VALUE: The complete AI marketing solution for just $29.99! Stop paying premium prices for basic tools. Our comprehensive bundle gives you 1000+ professional ChatGPT prompts organized by category + exclusive bonus tools. Everything you need to create amazing content, automate workflows & grow your business. Normally $59.99, limited time 50% off. Join thousands of successful marketers who chose value over expensive alternatives. This price won't last!",
          "⭐ UNBEATABLE OFFER: Get the most comprehensive ChatGPT marketing toolkit for 50% off! Includes 1000+ proven prompts covering social media, automation, marketing & content creation + our exclusive SEO generator, progress tracker & bonus templates. While competitors charge $100+ for single categories, we give you EVERYTHING for just $29.99. That's incredible value - less than 3¢ per prompt! Perfect for marketers who want results without breaking the bank. Limited time offer - secure yours now!",
        ],
        ctas: [
          "Get Complete Toolkit - 50% Off Today",
          "Transform Your Marketing for $29.99",
          "Claim This Incredible Value Now",
          "Don't Miss This Limited Time Deal",
          "Get Everything for Less Than $30",
          "Secure Your AI Marketing Toolkit",
          "Download Complete Bundle - Best Price",
          "Get 1000+ Prompts + Bonuses Now",
        ],
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(copyVariations).map((length) => (
            <Button
              key={length}
              variant={selectedLength === length ? "default" : "outline"}
              onClick={() => setSelectedLength(length)}
              className="text-sm"
            >
              {length}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Headlines */}
          <Card className="p-6">
            <h4 className="font-bold text-green-600 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Headlines ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].headlines.map((headline, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm font-medium">{headline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Descriptions */}
          <Card className="p-6">
            <h4 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Descriptions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].descriptions.map((description, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm">{description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTAs */}
          <Card className="p-6">
            <h4 className="font-bold text-purple-600 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Call-to-Actions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].ctas.map((cta, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <p className="text-sm font-medium">{cta}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Problem-Solution Copy Variations
  const ProblemSolutionCopy = () => {
    const copyVariations = {
      "15s": {
        headlines: [
          "Tired of Staring at Blank Pages?",
          "End Your Content Creation Struggles Today",
          "From Writer's Block to Content Machine",
          "Stop Struggling with Content Ideas",
          "The Solution to Your Content Problems",
          "Never Face a Blank Page Again",
          "Content Creation Made Simple",
          "Solve Your Biggest Marketing Problem",
        ],
        descriptions: [
          "Struggling with content creation? You're not alone! Get 1000+ ChatGPT prompts that eliminate writer's block forever. From 4 hours to 15 minutes per post. Just $29.99 - end the struggle today!",
          "😰 Sound familiar? Staring at blank pages, struggling with ideas, falling behind competitors? We solved this! 1000+ ready-to-use ChatGPT prompts for every marketing need. $29.99 ends your content struggles!",
          "Stop wasting hours on content creation! Our 1000+ ChatGPT prompts turn your biggest marketing challenge into your biggest advantage. Copy, paste, customize - done! 50% off today: $29.99",
          "🚨 CONTENT CREATORS: End the struggle! Get 1000+ proven ChatGPT prompts that eliminate writer's block. No more blank pages, no more stress. Just amazing content in minutes. Limited time: $29.99!",
          "From struggle to success in minutes! Our complete ChatGPT prompts collection solves every content challenge. 500 social media + 240 automation + 200 marketing + 100 content prompts. Just $29.99!",
          "The blank page nightmare ends here! Get 1000+ ChatGPT prompts that transform content creation from hours to minutes. Join thousands who've solved their content struggles. 50% off: $29.99!",
          "⚡ BREAKTHROUGH: Never struggle with content again! Our 1000+ ChatGPT prompts collection gives you endless ideas for every platform. From problem to solution in one purchase. Just $29.99!",
          "Content creation keeping you up at night? We have the cure! 1000+ ready-to-use ChatGPT prompts that eliminate every content challenge. Transform your process today - only $29.99!",
        ],
        ctas: [
          "End the Struggle Today",
          "Solve This Problem Now",
          "Get Instant Relief",
          "Stop Struggling - Start Creating",
          "Transform Your Content Process",
          "Never Struggle Again",
          "Get Your Solution Now",
          "End Content Nightmares",
        ],
      },
      "30s": {
        headlines: [
          "The Content Creation Struggle is Real - Here's the Solution",
          "From 4 Hours to 15 Minutes: The Content Transformation",
          "Stop Struggling with Content - Start Succeeding",
          "The End of Writer's Block: 1000+ Ready Solutions",
          "Content Creation Solved: Never Struggle Again",
          "Transform Your Biggest Challenge into Your Biggest Win",
          "The Solution Every Content Creator Needs",
          "End Your Content Struggles Forever",
        ],
        descriptions: [
          "Every marketer knows the struggle: blank pages, missing deadlines, competitor envy. Sound familiar? We solved this exact problem! Our 1000+ ChatGPT prompts eliminate writer's block forever. Sarah went from 4 hours to 15 minutes per post. Mike doubled his engagement. Join thousands who've transformed their content creation. Complete bundle: social media, automation, marketing & content prompts + bonus tools. 50% off today: $29.99!",
          "🎯 THE STRUGGLE ENDS HERE: Tired of content creation stress? Our complete ChatGPT prompts solution transforms your biggest challenge into your biggest advantage! Get 500 social media prompts, 240 automation prompts, 200 marketing prompts, 100 content prompts + bonus tools. No more blank pages, no more stress - just amazing content in minutes. Join 2000+ marketers who've solved this problem. Limited time: $29.99 (reg $59.99)!",
          "From nightmare to dream come true! Stop struggling with content creation and start dominating your niche. Our 1000+ ChatGPT prompts collection covers every scenario: social posts, emails, blogs, campaigns & more. Real results: 80% time savings, 3x better engagement, zero writer's block. Everything you need in one bundle + exclusive bonus tools. Transform your content process today - just $29.99!",
          "⚡ CONTENT BREAKTHROUGH: End the struggle that's holding you back! Our comprehensive ChatGPT prompts collection solves every content challenge. No more staring at blank pages, missing deadlines, or watching competitors succeed. Get 1000+ proven prompts that work instantly + SEO tool, tracker & bonus templates. Join the content creation revolution - 50% off: $29.99!",
          "The solution you've been searching for! Transform content creation from your biggest stress into your biggest strength. Our complete bundle includes 1000+ ChatGPT prompts for every marketing need + exclusive tools. Real customer results: 'Cut my content time by 80%' - Sarah M. 'Best $30 I've spent!' - Mike R. Don't struggle another day - get your solution now for just $29.99!",
          "🚀 GAME CHANGER: Stop letting content creation control your life! Our 1000+ ChatGPT prompts bundle eliminates every content challenge. From social media to email marketing, we've got you covered. No more writer's block, no more stress, no more falling behind. Join thousands who've transformed their marketing with our proven solution. Complete package + bonus tools - limited time: $29.99!",
          "Content creation doesn't have to be hard! Our comprehensive ChatGPT prompts collection turns your biggest challenge into your secret weapon. Get 1000+ ready-to-use prompts covering every marketing scenario + exclusive bonus tools. Real transformation: from hours to minutes, from stress to success. Don't let content struggles hold you back another day. Get your complete solution - 50% off: $29.99!",
          "💡 THE ULTIMATE SOLUTION: End content creation struggles forever! Our complete ChatGPT prompts bundle gives you 1000+ proven solutions for every marketing challenge. No more blank pages, no more deadline stress, no more competitor envy. Just amazing content in minutes. Includes social media, automation, marketing & content prompts + bonus tools. Transform your process today - just $29.99!",
        ],
        ctas: [
          "End Your Content Struggles Now",
          "Get Your Complete Solution",
          "Transform Your Process Today",
          "Stop Struggling - Start Winning",
          "Solve This Problem Forever",
          "Get Instant Content Relief",
          "Never Struggle with Content Again",
          "Transform Your Marketing Today",
        ],
      },
      "60s": {
        headlines: [
          "The Content Creation Nightmare Ends Here",
          "From Content Struggles to Content Success: The Complete Solution",
          "Stop Letting Content Creation Control Your Life",
          "The Ultimate Solution to Every Content Challenge",
          "Transform Your Biggest Marketing Problem into Your Biggest Win",
          "End Content Creation Stress Forever",
          "The Complete Guide to Never Struggling with Content Again",
          "From Blank Pages to Brilliant Content: Your Transformation Starts Now",
        ],
        descriptions: [
          "It's 11 PM. Tomorrow's content deadline looms. You're staring at a blank page, creativity blocked, stress mounting. Sound familiar? You're not alone - thousands of marketers face this nightmare daily. But what if I told you this struggle could end tonight? Our complete ChatGPT prompts collection eliminates content creation stress forever. Get 500 social media prompts for every platform, 240 automation prompts for workflows, 200 marketing prompts for campaigns, 100 content prompts for blogs/emails + exclusive SEO generator, progress tracker & bonus templates. Real results: Sarah cut her content time by 80%. Mike doubled his engagement. Lisa went from struggling with ideas to having a month of content ready. Join 2000+ marketers who've transformed their content creation process. Stop struggling, start succeeding. Complete solution: $29.99 (reg $59.99). Your content nightmare ends today.",
          "Every successful marketer has faced the same enemy: the blank page. Hours wasted, deadlines missed, competitors pulling ahead while you struggle with writer's block. We've been exactly where you are - that's why we created the ultimate solution. Our comprehensive ChatGPT prompts collection eliminates every content challenge you'll ever face. No more staring at blank screens. No more missing deadlines. No more watching competitors succeed while you struggle. Get 1000+ proven prompts covering every marketing scenario + exclusive tools that streamline your entire process. This isn't just another prompt collection - it's your complete transformation from content struggle to content success. Real customer transformations: 'From 4 hours to 15 minutes per post' - Sarah M. 'Doubled my engagement in 2 weeks' - Lisa K. 'Best marketing investment ever' - Mike R. Don't let content creation control your life another day. Get your complete solution now - limited time 50% off: $29.99. Your transformation starts today.",
          "The content creation struggle is killing your marketing success. While you're stuck staring at blank pages, your competitors are posting amazing content daily. While you're missing deadlines, they're building engaged audiences. While you're stressed about what to post next, they're scaling their businesses. This ends now. Our complete ChatGPT prompts solution transforms your biggest marketing challenge into your biggest competitive advantage. Get 1000+ ready-to-use prompts that eliminate writer's block forever + exclusive tools that automate your entire content process. No more struggle, no more stress, no more falling behind. Just amazing content in minutes, not hours. Join thousands who've made this transformation: 95% report saving 3+ hours weekly, 87% say their content quality improved dramatically, 92% never want to go back to the old way. Complete bundle includes social media, automation, marketing & content prompts + SEO generator, progress tracker & bonus templates. Stop struggling, start dominating. Your complete solution: $29.99 (reg $59.99). Transform your content creation today.",
          "Content creation was supposed to be the fun part of marketing. Instead, it's become your biggest source of stress. The blank page mocks you. Ideas won't come. Deadlines approach like storm clouds. You watch competitors post amazing content while you struggle with basic posts. This nightmare ends today. We've created the most comprehensive content creation solution ever: 1000+ ChatGPT prompts that eliminate every content challenge + exclusive tools that transform your entire process. No more writer's block. No more deadline stress. No more competitor envy. Just brilliant content, created effortlessly, every single time. Our customers' transformations speak for themselves: 'I went from dreading content creation to loving it' - Sarah M. 'My engagement tripled in one month' - Mike R. 'I have three months of content ready to go' - Lisa K. This complete solution includes every prompt category you need + bonus tools you won't find anywhere else. Stop letting content creation control your life. Start controlling your content creation. Your transformation begins with one decision. Get your complete solution now - 50% off today: $29.99. Never struggle with content again.",
        ],
        ctas: [
          "End Your Content Nightmare Today",
          "Transform Your Content Creation Forever",
          "Get Your Complete Solution Now",
          "Stop Struggling - Start Dominating",
          "Never Face Content Stress Again",
          "Transform Your Marketing Today",
          "Get Instant Content Relief Now",
          "End the Struggle - Start Succeeding",
        ],
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(copyVariations).map((length) => (
            <Button
              key={length}
              variant={selectedLength === length ? "default" : "outline"}
              onClick={() => setSelectedLength(length)}
              className="text-sm"
            >
              {length}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Headlines */}
          <Card className="p-6">
            <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Headlines ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].headlines.map((headline, index) => (
                <div key={index} className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm font-medium">{headline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Descriptions */}
          <Card className="p-6">
            <h4 className="font-bold text-orange-600 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Descriptions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].descriptions.map((description, index) => (
                <div key={index} className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm">{description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTAs */}
          <Card className="p-6">
            <h4 className="font-bold text-yellow-600 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Call-to-Actions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].ctas.map((cta, index) => (
                <div key={index} className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm font-medium">{cta}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Social Proof Copy Variations
  const SocialProofCopy = () => {
    const copyVariations = {
      "15s": {
        headlines: [
          "Join 2,000+ Success Stories",
          "What 2,000+ Marketers Know That You Don't",
          "The Secret Behind 2,000+ Marketing Transformations",
          "Why 2,000+ Marketers Choose Our Prompts",
          "2,000+ Can't Be Wrong - Here's Why",
          "The Community That's Transforming Marketing",
          "Join the 2,000+ Who've Cracked the Code",
          "2,000+ Marketers. 1 Simple Solution.",
        ],
        descriptions: [
          "Over 2,000 marketers have transformed their content creation with our ChatGPT prompts! ⭐⭐⭐⭐⭐ 'Cut my content time by 80%' - Sarah M. 'Best $30 investment!' - Mike R. Join the community that's winning with AI. 1000+ prompts for $29.99!",
          "🌟 PROVEN RESULTS: 2,000+ marketers can't be wrong! Our ChatGPT prompts collection is transforming businesses daily. Real reviews: 'Doubled my engagement!' 'Saved 10 hours per week!' 'Game-changing!' Get 1000+ prompts + bonuses for just $29.99!",
          "Join the winning team! 2,000+ successful marketers use our ChatGPT prompts to dominate their competition. ⭐⭐⭐⭐⭐ rated with incredible results. Don't get left behind - get your 1000+ prompts bundle for $29.99 today!",
          "🚀 COMMUNITY FAVORITE: 2,000+ marketers trust our ChatGPT prompts for their success! Real testimonials: 'Tripled my content output!' 'Never struggled again!' 'Incredible value!' Join the community - 1000+ prompts for $29.99!",
          "The numbers don't lie: 2,000+ happy customers, 5-star reviews, incredible results! Our ChatGPT prompts collection is the #1 choice for smart marketers. Get 1000+ prompts + bonus tools for just $29.99. Join the success stories!",
          "⭐ CUSTOMER FAVORITE: 2,000+ marketers have chosen our ChatGPT prompts - here's why! 'Best marketing tool ever!' 'Saved my business!' 'Incredible results!' Don't miss out on what's working for thousands. Get yours for $29.99!",
          "Become our next success story! Join 2,000+ marketers who've transformed their content creation with our ChatGPT prompts. Real results, real reviews, real transformation. Get 1000+ prompts + bonuses for just $29.99!",
          "🎯 PROVEN BY THOUSANDS: 2,000+ marketers trust our ChatGPT prompts for their success. Join the community that's winning with AI marketing. Amazing reviews, incredible results, unbeatable value. Get yours today - $29.99!",
        ],
        ctas: [
          "Join 2,000+ Success Stories",
          "Become Our Next Success Story",
          "Join the Winning Community",
          "Get What 2,000+ Trust",
          "Join the Success Revolution",
          "Be Part of the Success",
          "Join Thousands of Winners",
          "Get Your Success Story Started",
        ],
      },
      "30s": {
        headlines: [
          "2,000+ Marketers Have Spoken - This is the Solution",
          "The ChatGPT Bundle That's Transforming 2,000+ Businesses",
          "Join the Community That's Winning with AI Marketing",
          "What Makes 2,000+ Marketers Choose Us Over Everyone Else",
          "The Success Stories Keep Coming - Join 2,000+ Winners",
          "From Struggling to Succeeding: 2,000+ Transformation Stories",
          "The Proven Solution That 2,000+ Marketers Swear By",
          "Why Smart Marketers Join Our 2,000+ Success Community",
        ],
        descriptions: [
          "The results speak for themselves: 2,000+ marketers have transformed their content creation with our ChatGPT prompts! ⭐⭐⭐⭐⭐ Sarah M: 'Cut my content time by 80%!' Mike R: 'Best $30 I've spent on marketing!' Lisa K: 'Doubled my engagement in 2 weeks!' Join the community that's winning with AI. Get 500 social media + 240 automation + 200 marketing + 100 content prompts + bonus tools. Complete package: $29.99 (reg $59.99). Don't get left behind!",
          "🌟 INCREDIBLE TESTIMONIALS: 2,000+ marketers can't be wrong! Our ChatGPT prompts collection is the #1 choice for content creation success. Real customer results: 95% save 3+ hours weekly, 87% improved content quality, 92% never want to go back! Get everything you need: 1000+ prompts covering every marketing scenario + SEO generator, progress tracker & bonus templates. Join the success community - limited time: $29.99!",
          "Join the marketing revolution! 2,000+ successful marketers trust our ChatGPT prompts for their content creation. Real reviews: 'Game-changing for my business!' 'Tripled my content output!' 'Incredible value and results!' Don't struggle alone - join the community that's dominating with AI. Complete bundle includes social media, automation, marketing & content prompts + exclusive tools. Get your success story started: $29.99!",
          "🚀 PROVEN SUCCESS: 2,000+ marketers have chosen our ChatGPT prompts - here's why they're winning! Customer transformations: 'From 4 hours to 15 minutes per post' - Sarah. 'My engagement exploded!' - Mike. 'Best investment ever!' - Lisa. Join the community that's succeeding with AI marketing. Get 1000+ prompts + bonus tools for just $29.99. Your transformation starts today!",
          "The community speaks: 2,000+ marketers trust our ChatGPT prompts for their success! ⭐⭐⭐⭐⭐ rated with incredible results across all industries. Real testimonials: 'Saved my business!' 'Content creation is now my superpower!' 'Wish I found this sooner!' Don't miss what's working for thousands. Complete package: 1000+ prompts + exclusive tools. Join the success revolution: $29.99!",
          "⭐ CUSTOMER CHOICE AWARD: 2,000+ marketers have voted with their wallets - our ChatGPT prompts win! Real success stories: 'Transformed my entire marketing strategy!' 'Never struggled with content again!' 'ROI was immediate!' Join the community that's thriving with AI. Get everything: social media, automation, marketing & content prompts + bonus tools. Limited time: $29.99!",
          "From zero to hero: 2,000+ marketers have transformed their content creation with our ChatGPT prompts! Real customer journey: Struggling → Discovering our prompts → Implementing → Succeeding → Thriving! Join the success stories. Get 1000+ proven prompts + exclusive tools that guarantee your transformation. Don't struggle another day - join the winning community: $29.99!",
          "🎯 THE PEOPLE'S CHOICE: 2,000+ marketers can't be wrong about our ChatGPT prompts! Incredible reviews: 'Life-changing for my business!' 'Content creation is now effortless!' 'Best value in marketing!' Join the community that's winning with AI. Complete solution: 1000+ prompts covering every scenario + bonus tools. Your success story starts here: $29.99!",
        ],
        ctas: [
          "Join 2,000+ Success Stories Today",
          "Become Part of the Success Community",
          "Get What Thousands Trust",
          "Join the Winning Revolution",
          "Start Your Success Story Now",
          "Join the Proven Community",
          "Get Your Transformation Started",
          "Join Thousands of Winners Today",
        ],
      },
      "60s": {
        headlines: [
          "The 2,000+ Success Stories That Prove This Works",
          "From Skeptic to Success: How 2,000+ Marketers Transformed Their Business",
          "The Community That's Redefining Marketing Success",
          "Why 2,000+ Smart Marketers Choose Us Over Expensive Alternatives",
          "The Proven Solution That's Created 2,000+ Success Stories",
          "Join the Movement: 2,000+ Marketers Can't Be Wrong",
          "The ChatGPT Bundle That's Transformed 2,000+ Businesses",
          "From Struggling to Thriving: The 2,000+ Transformation Stories",
        ],
        descriptions: [
          "Meet the 2,000+ marketers who've cracked the code to effortless content creation. Sarah, a marketing director from Austin, used to spend 4 hours on a single social media post. 'I was drowning in deadlines,' she says. Then she discovered our ChatGPT prompts collection. 'Now I create better content in 15 minutes. My engagement has tripled!' Mike, a startup founder, was skeptical: 'Another marketing tool? Really?' But after using our prompts: 'This is the best $30 I've ever spent. My social following grew 300% in two months!' Lisa, a content creator, struggled with ideas daily. 'I went from staring at blank pages to having three months of content ready.' These aren't isolated cases - they're part of a 2,000+ strong community that's transformed their marketing with our comprehensive ChatGPT prompts bundle. Get 500 social media prompts, 240 automation prompts, 200 marketing prompts, 100 content prompts + exclusive SEO generator, progress tracker & bonus templates. Join the success revolution - limited time: $29.99 (reg $59.99). Your transformation starts today.",
          "The numbers don't lie: 2,000+ marketers have chosen our ChatGPT prompts over expensive courses, complicated tools, and time-consuming alternatives. Why? Because it works. Real results from real people: 95% report saving 3+ hours weekly on content creation. 87% say their content quality improved dramatically. 92% never want to go back to the old way of creating content. But it's not just about statistics - it's about transformation. Take Jennifer, who went from struggling freelancer to six-figure agency owner: 'Your prompts didn't just save me time, they saved my business.' Or David, who doubled his email open rates: 'I finally understand how to write copy that converts.' These success stories happen because our bundle isn't just prompts - it's a complete system. 1000+ proven prompts covering every marketing scenario + exclusive tools that streamline your entire process. While others charge $100+ for basic prompt collections, we give you everything for just $29.99. Join the community that's winning with AI marketing. Your success story starts now.",
          "What started as a solution for our own content struggles has become a movement. 2,000+ marketers have joined our community, and their transformations are incredible. Sarah cut her content creation time by 80%. Mike tripled his social media engagement. Lisa went from content block to content machine. But here's what makes our community special - it's not just about the tools, it's about the transformation. Members don't just get prompts; they get their confidence back. They stop dreading content creation and start loving it. They go from followers to leaders in their industries. Our comprehensive bundle includes everything you need: 500 social media prompts for every platform, 240 automation prompts for workflows, 200 marketing prompts for campaigns, 100 content prompts for blogs and emails, plus our exclusive SEO generator, progress tracker, and bonus templates. While competitors charge hundreds for incomplete solutions, we give you everything for $29.99. Join the 2,000+ who've already transformed their marketing. Your journey from struggle to success starts with one decision. Get your complete transformation package today.",
          "The marketing world is divided into two groups: those who struggle with content creation, and those who've discovered our ChatGPT prompts collection. 2,000+ marketers have made the switch, and their results speak volumes. 'I was spending $500/month on content creators,' says Mark, a small business owner. 'Now I create better content myself in half the time.' Rachel, a marketing manager, was facing burnout: 'I was working 60-hour weeks just to keep up with content demands. Your prompts gave me my life back.' These transformations happen because our solution addresses the real problem: not lack of creativity, but lack of direction. Our 1000+ prompts provide the framework that turns blank pages into brilliant content. Every prompt is tested, proven, and optimized for results. We've organized them into four essential categories: social media (500 prompts), automation (240 prompts), marketing (200 prompts), and content creation (100 prompts). Plus, you get exclusive bonus tools that no other collection includes. The investment? Just $29.99 - less than most people spend on lunch. The return? Unlimited. Join the 2,000+ who've already made this transformation. Your success story is waiting.",
        ],
        ctas: [
          "Join 2,000+ Success Stories Today",
          "Start Your Transformation Journey",
          "Become Our Next Success Story",
          "Join the Success Revolution Now",
          "Get Your Success Story Started",
          "Transform Your Marketing Today",
          "Join the Winning Community",
          "Start Your Success Journey Now",
        ],
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(copyVariations).map((length) => (
            <Button
              key={length}
              variant={selectedLength === length ? "default" : "outline"}
              onClick={() => setSelectedLength(length)}
              className="text-sm"
            >
              {length}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Headlines */}
          <Card className="p-6">
            <h4 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Headlines ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].headlines.map((headline, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm font-medium">{headline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Descriptions */}
          <Card className="p-6">
            <h4 className="font-bold text-indigo-600 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Descriptions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].descriptions.map((description, index) => (
                <div key={index} className="p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                  <p className="text-sm">{description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTAs */}
          <Card className="p-6">
            <h4 className="font-bold text-cyan-600 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Call-to-Actions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].ctas.map((cta, index) => (
                <div key={index} className="p-3 bg-cyan-50 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-sm font-medium">{cta}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Urgency-Driven Copy Variations
  const UrgencyCopy = () => {
    const copyVariations = {
      "15s": {
        headlines: [
          "50% OFF Ends at Midnight Tonight",
          "Final Hours: Don't Pay Double Tomorrow",
          "URGENT: Price Increases in 8 Hours",
          "Last Chance: 50% OFF Expires Tonight",
          "WARNING: Deal Ends at Midnight",
          "FINAL CALL: Save $30 Before It's Gone",
          "Time's Running Out: 50% OFF Ends Soon",
          "DEADLINE ALERT: Midnight = Full Price",
        ],
        descriptions: [
          "🚨 URGENT: 50% OFF ends at MIDNIGHT! Get 1000+ ChatGPT prompts for $29.99 (reg $59.99) - that's $30 savings! After tonight, you'll pay full price. Don't miss out on this incredible deal. Get yours NOW!",
          "⏰ FINAL HOURS: Price goes back to $59.99 at midnight! Get our complete ChatGPT prompts bundle (1000+ prompts + bonus tools) for just $29.99. This deal won't last - secure yours before it's too late!",
          "🔥 DEADLINE APPROACHING: 50% OFF expires in hours! Don't pay $59.99 tomorrow when you can get everything for $29.99 today. 1000+ ChatGPT prompts + bonuses. Time is running out - act now!",
          "⚡ LAST CHANCE: Save $30 before midnight! Our complete ChatGPT prompts collection (normally $59.99) is just $29.99 for a few more hours. After tonight, this deal is GONE forever. Get yours now!",
          "🚨 TIME SENSITIVE: 50% OFF ends tonight! Get 1000+ ChatGPT prompts + bonus tools for $29.99 instead of $59.99. This incredible deal expires at midnight - don't wait, don't regret. Claim yours now!",
          "⏰ FINAL WARNING: Price doubles at midnight! Get our complete ChatGPT marketing toolkit for $29.99 (50% off) while you still can. After tonight, you'll pay $59.99. Don't miss this limited-time offer!",
          "🔥 HOURS LEFT: 50% OFF disappears at midnight! Get 1000+ ChatGPT prompts + exclusive tools for just $29.99. Tomorrow you'll pay double. Smart marketers are claiming theirs now - join them!",
          "⚡ URGENT DEADLINE: Save $30 before it's too late! Our ChatGPT prompts bundle is 50% OFF until midnight only. After tonight, back to $59.99. Don't pay more tomorrow - get yours now for $29.99!",
        ],
        ctas: [
          "Claim Deal Before Midnight",
          "Don't Pay Double - Get It Now",
          "Save $30 - Limited Time",
          "Get Yours Before It's Gone",
          "Claim 50% OFF Now",
          "Don't Miss This Deal",
          "Get It Now - Price Increases Soon",
          "Secure Your Savings Now",
        ],
      },
      "30s": {
        headlines: [
          "FINAL WARNING: 50% OFF Ends at Midnight Tonight",
          "Don't Pay $59.99 Tomorrow When You Can Get It for $29.99 Today",
          "URGENT: Your Last Chance to Save $30",
          "Midnight Deadline: 50% OFF Disappears Forever",
          "FINAL HOURS: Don't Let This Deal Slip Away",
          "TIME'S UP: Save $30 Before It's Too Late",
          "LAST CALL: 50% OFF Expires in Hours",
          "DEADLINE ALERT: Price Doubles at Midnight",
        ],
        descriptions: [
          "🚨 FINAL WARNING: 50% OFF ends at MIDNIGHT tonight! While you're reading this, smart marketers are securing our complete ChatGPT prompts bundle for just $29.99. Tomorrow? You'll pay $59.99. Get 1000+ prompts covering social media, automation, marketing & content creation + exclusive SEO tool, progress tracker & bonus templates. This deal has already helped 2000+ marketers transform their content creation. Don't be the one who pays double tomorrow. Time is running out - claim your 50% savings now!",
          "⏰ URGENT DEADLINE: In just a few hours, our 50% OFF deal expires forever! Right now, you can get our complete ChatGPT marketing toolkit for $29.99. At midnight, it goes back to $59.99 - no exceptions, no extensions. While your competitors hesitate, you could be downloading 1000+ proven prompts + bonus tools that transform content creation from hours to minutes. Don't let this opportunity slip away. Don't pay double tomorrow. Get your complete solution now - before it's too late!",
          "🔥 FINAL HOURS: This is your last chance to save $30! Our ChatGPT prompts bundle (1000+ prompts + exclusive tools) is 50% OFF until midnight only. After tonight, you'll join the people who say 'I wish I had bought it when it was on sale.' Don't be that person. Get everything you need to master AI marketing: social media prompts, automation prompts, marketing prompts, content prompts + bonus tools. Smart marketers are claiming theirs now. Join them before the deadline!",
          "⚡ TIME SENSITIVE ALERT: 50% OFF expires at midnight - no extensions! While others wait and pay full price tomorrow, you can get our complete ChatGPT solution for half price RIGHT NOW. Get 1000+ prompts that eliminate content creation struggles + exclusive tools that streamline your entire process. This deal has transformed 2000+ businesses already. Don't miss your chance to join them at this incredible price. After midnight, you'll pay $59.99. Secure your $29.99 deal now!",
          "🚨 LAST CHANCE WARNING: Midnight = full price! Our complete ChatGPT prompts collection is 50% OFF for just a few more hours. After tonight, you'll pay $59.99 for what you can get RIGHT NOW for $29.99. This isn't just about saving money - it's about not missing the solution that's already transformed thousands of marketers. Get 1000+ prompts + bonus tools before the deadline. Don't regret missing this deal tomorrow!",
          "⏰ FINAL CALL: Save $30 before time runs out! Our ChatGPT marketing toolkit is 50% OFF until midnight only. Tomorrow, you'll pay full price ($59.99) for what smart marketers are getting today for $29.99. Complete package: 1000+ prompts covering every marketing scenario + exclusive tools. This deal ends in hours, not days. Don't wait, don't hesitate, don't pay more tomorrow. Get yours now!",
          "🔥 DEADLINE APPROACHING: 50% OFF vanishes at midnight! Right now, you have a choice: Get our complete ChatGPT prompts bundle for $29.99, or pay $59.99 tomorrow. Smart choice? Get it now. Our 1000+ prompts + bonus tools have already helped thousands transform their marketing. Don't be the one who missed out on this incredible deal. Time is running out - claim your savings before it's too late!",
          "⚡ URGENT: Hours left to save $30! Our ChatGPT prompts collection is 50% OFF until midnight - then back to full price forever. While you're deciding, others are downloading 1000+ prompts that will transform their content creation. Don't let this opportunity pass. Don't pay double tomorrow. Get your complete marketing solution now for just $29.99. This deal ends tonight!",
        ],
        ctas: [
          "Don't Pay Double - Get It Now",
          "Claim 50% OFF Before Midnight",
          "Save $30 - Time Running Out",
          "Get Yours Before Price Doubles",
          "Don't Miss This Final Chance",
          "Secure Your Deal Now",
          "Get It Now - Deadline Tonight",
          "Don't Wait - Save Now",
        ],
      },
      "60s": {
        headlines: [
          "FINAL WARNING: In 8 Hours, This Deal Disappears Forever",
          "The Choice is Yours: Save $30 Today or Pay Full Price Tomorrow",
          "URGENT: Don't Be the One Who Missed This Deal",
          "Midnight Deadline: Your Last Chance to Transform Your Marketing",
          "FINAL HOURS: Join the Smart Marketers or Pay Double Tomorrow",
          "TIME'S RUNNING OUT: The Deal That Won't Come Back",
          "LAST CALL: 50% OFF Ends at Midnight - No Extensions",
          "DEADLINE ALERT: Save $30 Now or Regret It Tomorrow",
        ],
        descriptions: [
          "In exactly 8 hours and 47 minutes, this deal disappears forever. And you'll be left with two choices: pay full price like everyone else, or join the smart marketers who acted today. When we launched this 50% OFF deal, we knew it wouldn't last long. The response has been overwhelming - hundreds have already secured their complete ChatGPT marketing toolkit for just $29.99. Tomorrow, they'll watch others pay $59.99 for the same thing. Which group will you be in? Right now, you can get our complete solution: 1000+ ChatGPT prompts covering social media, automation, marketing & content creation + our exclusive SEO generator, progress tracker & bonus templates. This isn't just about saving $30 - it's about not missing the solution that's already transformed 2000+ businesses. While you're deciding, your competitors are already using these prompts to create better content faster. Every minute you wait, you fall further behind. In 8 hours, this opportunity vanishes. You can join the winners who acted today, or regret missing out when you pay double tomorrow. The choice is yours. But choose now, before it's too late. Get your complete marketing transformation for $29.99 - before midnight strikes.",
          "This is your final warning. In just a few hours, our 50% OFF deal expires forever - no extensions, no exceptions, no second chances. Right now, you're at a crossroads. Path one: Get our complete ChatGPT marketing toolkit for $29.99 and join the 2000+ marketers who've already transformed their content creation. Path two: Wait, hesitate, and pay $59.99 tomorrow while regretting you didn't act when you had the chance. We've seen this story play out thousands of times. The smart marketers act decisively. They recognize value when they see it. They don't let incredible opportunities slip away. Our complete bundle includes everything you need to master AI marketing: 500 social media prompts for every platform, 240 automation prompts for workflows, 200 marketing prompts for campaigns, 100 content prompts for blogs and emails, plus exclusive tools you won't find anywhere else. This solution has already helped thousands go from struggling with content to creating amazing posts in minutes. The transformation is real, the results are proven, and the deadline is tonight. Don't be the person who says 'I wish I had bought it when it was on sale.' Be the person who says 'Best decision I ever made.' Get your complete solution now - before time runs out.",
          "The clock is ticking. The deadline is approaching. And soon, you'll either be celebrating a smart decision or regretting a missed opportunity. Our 50% OFF deal on the complete ChatGPT marketing toolkit ends at midnight tonight. After that, the price goes back to $59.99 - permanently. No more discounts, no more deals, no more chances to save $30. While you're reading this, smart marketers are downloading our complete solution: 1000+ proven prompts that eliminate content creation struggles forever. They're getting the SEO generator that creates custom prompts for any keyword. They're accessing the progress tracker that measures their transformation. They're securing the bonus templates that streamline their entire process. Tomorrow, when the deal is gone, they'll be creating amazing content while others are still struggling with blank pages. They'll be dominating their competition while others are still figuring out AI. They'll be scaling their businesses while others are still paying premium prices for basic solutions. The difference? They acted when they had the chance. Don't let this opportunity define you as someone who hesitates when success is within reach. Get your complete marketing transformation now - before the deadline passes and the opportunity is gone forever.",
          "Time is running out, and the choice is becoming clear: join the winners or watch from the sidelines. Our complete ChatGPT marketing toolkit is 50% OFF for just a few more hours. At midnight, this deal vanishes forever, and you'll face the reality of paying $59.99 for what you could have gotten today for $29.99. This isn't just about money - it's about momentum. While you're deciding, your competitors are already implementing our 1000+ prompts to create better content faster. They're using our automation prompts to streamline their workflows. They're leveraging our marketing prompts to build campaigns that convert. They're dominating their markets while you're still on the fence. The transformation stories are incredible: Sarah cut her content creation time by 80%. Mike tripled his social media engagement. Lisa went from struggling with ideas to having months of content ready. These aren't lucky breaks - they're the predictable result of having the right tools. Our complete bundle gives you everything they have and more: every prompt category you need, exclusive tools you won't find elsewhere, and the proven system that's already transformed 2000+ businesses. The deadline is tonight. The choice is yours. But remember: opportunity doesn't wait for anyone. Get your complete solution now, before it's too late to join the winners.",
        ],
        ctas: [
          "Don't Pay Double Tomorrow - Act Now",
          "Get Your Deal Before Midnight",
          "Join the Winners - Don't Wait",
          "Save $30 - Final Hours Only",
          "Don't Miss Out - Get It Now",
          "Secure Your Transformation Today",
          "Get It Now - Deadline Tonight",
          "Don't Regret Missing This Deal",
        ],
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(copyVariations).map((length) => (
            <Button
              key={length}
              variant={selectedLength === length ? "default" : "outline"}
              onClick={() => setSelectedLength(length)}
              className="text-sm"
            >
              {length}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Headlines */}
          <Card className="p-6">
            <h4 className="font-bold text-orange-600 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Headlines ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].headlines.map((headline, index) => (
                <div key={index} className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm font-medium">{headline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Descriptions */}
          <Card className="p-6">
            <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Descriptions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].descriptions.map((description, index) => (
                <div key={index} className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm">{description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTAs */}
          <Card className="p-6">
            <h4 className="font-bold text-yellow-600 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Call-to-Actions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].ctas.map((cta, index) => (
                <div key={index} className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm font-medium">{cta}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Feature-Heavy Copy Variations
  const FeatureHeavyCopy = () => {
    const copyVariations = {
      "15s": {
        headlines: [
          "Everything You Need in One Bundle",
          "The Complete AI Marketing Toolkit",
          "1000+ Prompts + Exclusive Tools = $29.99",
          "All-in-One AI Marketing Solution",
          "Complete Package: Every Tool You Need",
          "The Ultimate ChatGPT Marketing Bundle",
          "Everything Included: No Hidden Costs",
          "Complete AI Toolkit for Marketers",
        ],
        descriptions: [
          "🔥 COMPLETE PACKAGE: Get EVERYTHING you need for AI marketing! 500 social media prompts + 240 automation prompts + 200 marketing prompts + 100 content prompts + SEO generator + progress tracker + bonus templates. All for just $29.99!",
          "⚡ ALL-IN-ONE SOLUTION: Stop buying separate tools! Our complete bundle includes 1000+ ChatGPT prompts covering every marketing scenario + exclusive bonus tools. Everything you need for successful AI marketing - just $29.99!",
          "🎯 ULTIMATE TOOLKIT: Get the most comprehensive AI marketing solution ever! 1000+ prompts organized by category + exclusive tools + bonus templates. Complete package for serious marketers - limited time: $29.99!",
          "💡 EVERYTHING INCLUDED: Why buy individual tools when you can get EVERYTHING? Complete ChatGPT marketing toolkit with 1000+ prompts + bonus tools. No hidden costs, no upsells - just $29.99 for everything!",
          "🚀 COMPLETE SOLUTION: Get every AI marketing tool you'll ever need! 500 social media + 240 automation + 200 marketing + 100 content prompts + exclusive bonuses. Complete package: $29.99!",
          "⭐ FULL PACKAGE: The most comprehensive ChatGPT bundle available! 1000+ prompts covering all marketing categories + exclusive tools + bonus templates. Everything you need in one purchase - $29.99!",
          "🔥 TOTAL PACKAGE: Get our complete AI marketing arsenal! Every prompt category + exclusive tools + bonus content. No need to buy anything else - complete solution for just $29.99!",
          "💰 COMPLETE BUNDLE: Everything you need for AI marketing success! 1000+ prompts + SEO tool + tracker + templates. Most comprehensive package available - limited time: $29.99!",
        ],
        ctas: [
          "Get Complete Package Now",
          "Get Everything for $29.99",
          "Download Complete Toolkit",
          "Get All Tools & Prompts",
          "Get Complete Solution",
          "Download Everything Now",
          "Get Full Package Today",
          "Get Complete Access Now",
        ],
      },
      "30s": {
        headlines: [
          "The Most Comprehensive AI Marketing Toolkit Ever Created",
          "Everything You Need to Master AI Marketing - One Bundle",
          "Complete Solution: 1000+ Prompts + Exclusive Tools",
          "Why Buy Separately When You Can Get Everything?",
          "The Ultimate All-in-One AI Marketing Package",
          "Complete Toolkit: Every Category, Every Tool, One Price",
          "Everything Included: The Most Complete AI Bundle Available",
          "Total Solution: Every AI Marketing Tool You'll Ever Need",
        ],
        descriptions: [
          "🔥 MOST COMPREHENSIVE PACKAGE: Get the complete AI marketing solution! 500 social media power prompts for every platform, 240 automation & tool prompts for workflows, 200 marketing strategy prompts for campaigns, 100 content creation prompts for blogs/emails + our exclusive SEO prompt generator, 7-day progress tracker & 10 bonus communication templates. Everything you need to dominate AI marketing in one complete package. No hidden costs, no upsells, no missing pieces - just $29.99 for everything!",
          "⚡ ULTIMATE ALL-IN-ONE SOLUTION: Why buy expensive individual tools when you can get EVERYTHING? Our complete ChatGPT marketing toolkit includes every prompt category you need + exclusive bonus tools you won't find anywhere else. Compare: Other collections charge $50-100 for single categories. We give you ALL categories + tools for just $29.99! Complete package includes social media, automation, marketing & content prompts + SEO generator, progress tracker & bonus templates. Everything you need for AI marketing success!",
          "🎯 COMPLETE MARKETING ARSENAL: Get every AI tool you'll ever need! Our comprehensive bundle covers every marketing scenario: social media content, email automation, marketing campaigns, blog posts & more. Includes 1000+ proven prompts organized by category + exclusive tools that streamline your entire process. No need to buy anything else - this is your complete solution. Perfect for marketers, entrepreneurs, agencies & content creators. Everything included for just $29.99!",
          "💡 TOTAL PACKAGE DEAL: The most complete AI marketing solution available! Get 500 social media prompts (Instagram, Facebook, LinkedIn, Twitter), 240 automation prompts (email sequences, chatbots, workflows), 200 marketing prompts (campaigns, strategies, copy), 100 content prompts (blogs, newsletters, scripts) + our exclusive SEO generator tool, 7-day progress tracker & bonus communication templates. This is everything you need to succeed with AI marketing - all in one comprehensive package for $29.99!",
          "🚀 EVERYTHING YOU NEED: Stop buying scattered tools and get the complete solution! Our ChatGPT marketing toolkit includes every prompt category + exclusive bonus tools. Social media prompts for engagement, automation prompts for efficiency, marketing prompts for conversions, content prompts for creation + tools that enhance everything. Most comprehensive package available - perfect for serious marketers who want everything in one place. Complete solution: $29.99!",
          "⭐ ULTIMATE BUNDLE: Get the most comprehensive AI marketing package ever created! Includes every prompt category you need (1000+ total), exclusive tools you won't find elsewhere, and bonus content that enhances everything. No missing pieces, no hidden costs, no need to buy anything else. This is your complete transformation package. Perfect for marketers who want the best value and most complete solution. Everything included for just $29.99!",
          "🔥 COMPLETE TRANSFORMATION PACKAGE: Get every AI marketing tool in one bundle! Our comprehensive solution includes 1000+ prompts covering all marketing scenarios + exclusive bonus tools that streamline your entire process. Social media, automation, marketing, content creation - everything covered. Plus SEO generator, progress tracker & bonus templates. Most complete package available for serious marketers. Everything you need for just $29.99!",
          "💰 TOTAL SOLUTION: The most complete AI marketing toolkit available! Get every prompt category (social media, automation, marketing, content), every bonus tool (SEO generator, progress tracker, templates), and everything you need to succeed with AI marketing. No need to buy anything else - this is your complete solution. Perfect for marketers who want maximum value and comprehensive coverage. Complete package: $29.99!",
        ],
        ctas: [
          "Get Complete Toolkit - Everything Included",
          "Download Complete Solution Now",
          "Get Everything for One Price",
          "Get Complete Package Today",
          "Download All Tools & Prompts",
          "Get Total Solution Now",
          "Get Everything You Need",
          "Download Complete Bundle",
        ],
      },
      "60s": {
        headlines: [
          "The Most Complete AI Marketing Solution Ever Assembled",
          "Everything You Need to Dominate AI Marketing - One Complete Package",
          "Why Buy 10 Different Tools When You Can Get Everything Here?",
          "The Ultimate All-in-One AI Marketing Transformation Package",
          "Complete Solution: Every Tool, Every Prompt, Every Bonus - One Price",
          "The Comprehensive AI Marketing Toolkit That Replaces Everything Else",
          "Total Package: Everything You Need for AI Marketing Success",
          "The Complete AI Marketing Arsenal - Nothing Left Out",
        ],
        descriptions: [
          "Most marketers make the same expensive mistake: they buy AI tools piecemeal, spending hundreds on scattered solutions that don't work together. What if you could get everything you need in one comprehensive package? Our complete ChatGPT marketing toolkit is the most comprehensive solution ever created. Get 500 social media power prompts covering every platform and scenario - Instagram posts, Facebook ads, LinkedIn articles, Twitter threads, TikTok content, and more. Get 240 automation and tool prompts that streamline your entire workflow - email sequences, chatbot responses, customer service, lead generation, and workflow optimization. Get 200 marketing strategy prompts for campaigns that actually convert - product launches, seasonal campaigns, audience research, competitor analysis, and conversion optimization. Get 100 content creation prompts for blogs, newsletters, video scripts, podcast outlines, and more. Plus exclusive bonus tools: our online SEO prompt generator creates custom prompts for any keyword, our 7-day progress tracker measures your transformation, and 10 professional communication templates for client work. This isn't just a prompt collection - it's your complete AI marketing transformation. Everything you need, nothing you don't, all in one package for just $29.99. Stop buying expensive individual tools and get everything you need today.",
          "The AI marketing world is cluttered with expensive, incomplete solutions. Prompt packs that cost $50-100 for just one category. Courses that cost $200-500 but leave you without practical tools. Software subscriptions that drain your budget monthly. What if there was a better way? Our complete ChatGPT marketing toolkit gives you everything these expensive alternatives provide - and more - for just $29.99. This comprehensive solution includes every prompt category you'll ever need: 500 social media prompts for explosive growth, 240 automation prompts for efficiency, 200 marketing prompts for conversions, 100 content prompts for creation. But we didn't stop there. You also get exclusive tools that enhance everything: our SEO prompt generator creates unlimited custom prompts, our progress tracker measures your success, and bonus templates streamline your workflow. Compare our value: Individual prompt packs cost $50-100 each. AI courses cost $200-500. Marketing software costs $50-200 monthly. We give you everything for a one-time payment of $29.99. This is the most comprehensive, most valuable, most complete AI marketing solution available. Perfect for marketers, entrepreneurs, agencies, and content creators who want maximum results without maximum costs. Get your complete transformation package today.",
          "What started as a solution for our own marketing challenges has become the most comprehensive AI toolkit ever created. We were tired of buying expensive tools that only solved part of the problem. Tired of courses that taught theory but provided no practical tools. Tired of subscriptions that drained our budget without delivering results. So we built the solution we wished existed: everything you need for AI marketing success in one complete package. Our comprehensive bundle includes 1000+ proven prompts organized into four essential categories. Social media prompts (500) cover every platform, post type, and engagement strategy. Automation prompts (240) streamline workflows, email sequences, and customer interactions. Marketing prompts (200) create campaigns that convert, strategies that work, and copy that sells. Content prompts (100) generate blogs, newsletters, scripts, and more. Plus exclusive bonus tools that multiply your results: our SEO generator creates custom prompts for any keyword or niche, our progress tracker measures your transformation over 7 days, and professional templates handle client communication and team collaboration. This complete solution replaces dozens of expensive tools, eliminates the need for costly courses, and gives you everything successful marketers use to dominate their markets. No hidden costs, no monthly fees, no missing pieces. Just one complete package that transforms your marketing forever. Get everything you need for just $29.99.",
          "The marketing world has a problem: too many incomplete solutions at premium prices. Marketers spend hundreds on scattered tools that don't work together, courses that teach but don't provide, and subscriptions that drain budgets without delivering results. We solved this problem by creating the most comprehensive AI marketing solution ever assembled. Our complete toolkit includes everything you need and nothing you don't. Start with 500 social media power prompts that cover every platform, post type, and engagement strategy. Add 240 automation prompts that handle email sequences, chatbot responses, workflow optimization, and customer service. Include 200 marketing strategy prompts for product launches, seasonal campaigns, audience research, and conversion optimization. Complete with 100 content creation prompts for blogs, newsletters, video scripts, and podcast outlines. But we didn't stop at prompts. You also get exclusive tools that enhance everything: our online SEO prompt generator creates unlimited custom prompts for any keyword or niche, our 7-day progress tracker measures your transformation and keeps you motivated, and 10 professional communication templates handle client work and team collaboration. This comprehensive solution replaces expensive alternatives: no more $50-100 prompt packs for single categories, no more $200-500 courses without practical tools, no more $50-200 monthly software subscriptions. Get everything for one low price: $29.99. This is your complete AI marketing transformation package - everything you need to succeed, nothing you don't, all in one place.",
        ],
        ctas: [
          "Get Complete Transformation Package",
          "Download Everything You Need",
          "Get Total Solution - One Price",
          "Get Complete Toolkit Today",
          "Download Complete Package Now",
          "Get Everything for $29.99",
          "Get Your Complete Solution",
          "Download Complete Bundle",
        ],
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(copyVariations).map((length) => (
            <Button
              key={length}
              variant={selectedLength === length ? "default" : "outline"}
              onClick={() => setSelectedLength(length)}
              className="text-sm"
            >
              {length}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Headlines */}
          <Card className="p-6">
            <h4 className="font-bold text-purple-600 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Headlines ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].headlines.map((headline, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <p className="text-sm font-medium">{headline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Descriptions */}
          <Card className="p-6">
            <h4 className="font-bold text-indigo-600 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Descriptions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].descriptions.map((description, index) => (
                <div key={index} className="p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                  <p className="text-sm">{description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTAs */}
          <Card className="p-6">
            <h4 className="font-bold text-pink-600 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Call-to-Actions ({selectedLength})
            </h4>
            <div className="space-y-3">
              {copyVariations[selectedLength as keyof typeof copyVariations].ctas.map((cta, index) => (
                <div key={index} className="p-3 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                  <p className="text-sm font-medium">{cta}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Option {index + 1}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const scriptTypes = [
    { id: "value-focused", name: "Value-Focused", icon: TrendingUp, component: <ValueFocusedCopy /> },
    { id: "problem-solution", name: "Problem-Solution", icon: Zap, component: <ProblemSolutionCopy /> },
    { id: "social-proof", name: "Social Proof", icon: Users, component: <SocialProofCopy /> },
    { id: "urgency", name: "Urgency-Driven", icon: Clock, component: <UrgencyCopy /> },
    { id: "feature-heavy", name: "Feature-Heavy", icon: Download, component: <FeatureHeavyCopy /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Ad Copy Variations</h2>
        <p className="text-lg text-gray-600 mb-6">
          Multiple headline and description options for each video script type and length
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scriptTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <Button
                key={type.id}
                variant={selectedScript === type.id ? "default" : "outline"}
                onClick={() => setSelectedScript(type.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="w-4 h-4" />
                {type.name}
              </Button>
            )
          })}
        </div>
      </div>

      <div>{scriptTypes.find((type) => type.id === selectedScript)?.component}</div>

      {/* Copy Strategy Guidelines */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Copy Strategy Guidelines</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-green-600">Value-Focused Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Emphasize incredible value (3¢ per prompt)</li>
              <li>• Compare to expensive alternatives</li>
              <li>• Highlight savings and ROI</li>
              <li>• Use specific numbers and calculations</li>
              <li>• Focus on "smart choice" messaging</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-red-600">Problem-Solution Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Start with relatable pain points</li>
              <li>• Use emotional language</li>
              <li>• Show clear before/after transformation</li>
              <li>• Include specific time savings</li>
              <li>• End struggle narrative</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Social Proof Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Lead with customer count (2,000+)</li>
              <li>• Include specific testimonials</li>
              <li>• Use star ratings and reviews</li>
              <li>• Create community feeling</li>
              <li>• Show transformation stories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-orange-600">Urgency Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Create clear deadline pressure</li>
              <li>• Show consequences of waiting</li>
              <li>• Use countdown language</li>
              <li>• Emphasize limited time nature</li>
              <li>• Create FOMO (fear of missing out)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-purple-600">Feature-Heavy Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• List comprehensive features</li>
              <li>• Emphasize completeness</li>
              <li>• Show value of bundling</li>
              <li>• Highlight exclusive tools</li>
              <li>• Position as total solution</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-600">A/B Testing Tips</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Test different headline approaches</li>
              <li>• Vary description length and style</li>
              <li>• Try different CTA urgency levels</li>
              <li>• Test emotional vs. logical appeals</li>
              <li>• Monitor engagement and conversion rates</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Platform-Specific Recommendations */}
      <Card className="p-6 bg-gray-50">
        <h3 className="text-xl font-bold mb-4">Platform-Specific Copy Recommendations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Platform</th>
                <th className="text-left p-2">Best Strategy</th>
                <th className="text-left p-2">Headline Length</th>
                <th className="text-left p-2">Description Length</th>
                <th className="text-left p-2">CTA Style</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b">
                <td className="p-2 font-medium">Facebook Feed</td>
                <td className="p-2">Value-Focused, Social Proof</td>
                <td className="p-2">40-60 characters</td>
                <td className="p-2">125-150 words</td>
                <td className="p-2">Action-oriented</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Instagram Stories</td>
                <td className="p-2">Problem-Solution, Urgency</td>
                <td className="p-2">30-40 characters</td>
                <td className="p-2">50-75 words</td>
                <td className="p-2">Swipe up/Link in bio</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">YouTube Pre-roll</td>
                <td className="p-2">Feature-Heavy, Value</td>
                <td className="p-2">60-80 characters</td>
                <td className="p-2">200-300 words</td>
                <td className="p-2">Click below/Learn more</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">TikTok</td>
                <td className="p-2">Problem-Solution, Urgency</td>
                <td className="p-2">30-50 characters</td>
                <td className="p-2">75-100 words</td>
                <td className="p-2">Link in bio</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">LinkedIn</td>
                <td className="p-2">Social Proof, Feature-Heavy</td>
                <td className="p-2">50-70 characters</td>
                <td className="p-2">150-200 words</td>
                <td className="p-2">Professional tone</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
