"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Zap, TrendingUp, Download } from "lucide-react"

export function VideoAdScripts() {
  const [selectedScript, setSelectedScript] = useState("value-focused")
  const [selectedLength, setSelectedLength] = useState("30s")

  // Value-Focused Video Scripts
  const ValueFocusedScripts = () => {
    const scripts = {
      "15s": {
        title: "Value-Focused - 15 Second Version",
        hook: "Quick value proposition for short attention spans",
        script: `
**VISUAL**: Close-up of calculator showing "1000 ÷ $29.99 = $0.03"
**VOICEOVER**: "What if I told you..."

**VISUAL**: Quick montage of social media posts, emails, blog content
**VOICEOVER**: "...you could get 1000 proven ChatGPT prompts..."

**VISUAL**: Large "$0.03" text overlay with sparkle effects
**VOICEOVER**: "...for less than 3 cents each?"

**VISUAL**: Product bundle visual with "500 Social Media + 240 Automation + 200 Marketing + 100 Content" text overlay
**VOICEOVER**: "Everything you need to master AI marketing."

**VISUAL**: Price comparison: $59.99 crossed out, $29.99 highlighted
**VOICEOVER**: "Normally $60, today just $30."

**VISUAL**: "Get Instant Access" button with finger tap animation
**VOICEOVER**: "Get yours now!"

**TEXT OVERLAY**: "Link in bio 👆"
        `,
        cta: "Get Instant Access - Link in Bio",
        notes: "Perfect for Stories and Reels. Fast-paced with clear value prop.",
      },
      "30s": {
        title: "Value-Focused - 30 Second Version",
        hook: "Detailed value breakdown with social proof",
        script: `
**VISUAL**: Person staring at blank document, looking frustrated
**VOICEOVER**: "Tired of staring at blank pages, wondering what to write?"

**VISUAL**: Split screen showing struggle vs. success
**VOICEOVER**: "What if you could create amazing content in minutes instead of hours?"

**VISUAL**: Product showcase with animated numbers
**VOICEOVER**: "Introducing our complete ChatGPT prompts bundle..."

**VISUAL**: Breakdown animation:
- 500 Social Media Prompts
- 240 Automation Prompts  
- 200 Marketing Prompts
- 100 Content Creation Prompts
**VOICEOVER**: "500 social media prompts, 240 automation prompts, 200 marketing prompts, and 100 content creation prompts."

**VISUAL**: Calculator animation showing value
**VOICEOVER**: "That's over 1000 prompts for just $29.99 - less than 3 cents each!"

**VISUAL**: Bonus items appearing with "FREE" badges
**VOICEOVER**: "Plus you get our SEO generator tool, 7-day tracker, and bonus templates absolutely free."

**VISUAL**: Before/after testimonial with 5 stars
**VOICEOVER**: "Join thousands who've transformed their marketing."

**VISUAL**: Countdown timer showing limited time
**VOICEOVER**: "But this 50% off deal won't last forever."

**VISUAL**: "Download Now" button with urgency elements
**VOICEOVER**: "Get instant access now!"

**TEXT OVERLAY**: "Limited Time: $29.99 (Reg $59.99)"
        `,
        cta: "Download Now - 50% Off Today Only",
        notes: "Ideal for Facebook/Instagram feed ads. Comprehensive value story.",
      },
      "60s": {
        title: "Value-Focused - 60 Second Version",
        hook: "Complete value story with detailed breakdown",
        script: `
**VISUAL**: Montage of frustrated marketers at computers
**VOICEOVER**: "Every day, thousands of marketers waste hours trying to create content..."

**VISUAL**: Clock ticking, showing time passing
**VOICEOVER**: "Staring at blank pages, struggling with writer's block, falling behind competitors."

**VISUAL**: Transition to success story
**VOICEOVER**: "But what if there was a better way?"

**VISUAL**: AI Beginner Mode logo animation
**VOICEOVER**: "Hi, I'm from AI Beginner Mode, and we've solved this problem."

**VISUAL**: Product unboxing animation
**VOICEOVER**: "We've created the most comprehensive ChatGPT prompts collection for marketers."

**VISUAL**: Detailed breakdown with animations:
**VOICEOVER**: "You get 500 social media power prompts for every platform..."

**VISUAL**: Automation tools visualization
**VOICEOVER**: "240 automation and tool prompts to streamline your workflow..."

**VISUAL**: Marketing strategy graphics
**VOICEOVER**: "200 marketing and strategy prompts for campaigns that convert..."

**VISUAL**: Content creation examples
**VOICEOVER**: "And 100 content creation prompts for blogs, emails, and more."

**VISUAL**: Calculator showing math
**VOICEOVER**: "That's over 1000 proven prompts. Normally, this would cost $59.99."

**VISUAL**: Price slash animation
**VOICEOVER**: "But today, you can get everything for just $29.99."

**VISUAL**: Value comparison with other solutions
**VOICEOVER**: "That's less than 3 cents per prompt - cheaper than a single coffee!"

**VISUAL**: Bonus items reveal
**VOICEOVER**: "Plus, you'll get our online SEO prompt generator, 7-day progress tracker, and 10 bonus communication templates."

**VISUAL**: Customer testimonials montage
**VOICEOVER**: "Over 2000 marketers have already transformed their content creation process."

**VISUAL**: Before/after results
**VOICEOVER**: "They're creating content 5x faster and getting better results."

**VISUAL**: Urgency countdown
**VOICEOVER**: "This special introductory price won't last long."

**VISUAL**: Multiple download options and guarantees
**VOICEOVER**: "Get instant access, lifetime updates, and our beginner-friendly guarantee."

**VISUAL**: Strong CTA with button animation
**VOICEOVER**: "Click the link below and transform your marketing today!"

**TEXT OVERLAY**: "👇 Get Instant Access - $29.99 (Save $30)"
        `,
        cta: "Transform Your Marketing Today - Get Instant Access",
        notes: "Perfect for detailed Facebook video ads and YouTube pre-roll.",
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(scripts).map((length) => (
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

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{scripts[selectedLength as keyof typeof scripts].title}</h3>
            <Badge className="bg-green-500 text-white">{selectedLength}</Badge>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-green-600 mb-2">Hook Strategy:</h4>
            <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].hook}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Script:</h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-line">
              {scripts[selectedLength as keyof typeof scripts].script}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Call-to-Action:</h4>
              <p className="text-sm bg-blue-50 p-3 rounded-lg">{scripts[selectedLength as keyof typeof scripts].cta}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Notes:</h4>
              <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].notes}</p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Problem-Solution Story Scripts
  const ProblemSolutionScripts = () => {
    const scripts = {
      "15s": {
        title: "Problem-Solution Story - 15 Second Version",
        hook: "Quick emotional transformation story",
        script: `
**VISUAL**: Split screen - frustrated person vs. confident person
**VOICEOVER**: "From this... to this."

**VISUAL**: Close-up of blank document cursor blinking
**VOICEOVER**: "Tired of staring at blank pages?"

**VISUAL**: Quick flash of 1000+ prompts
**VOICEOVER**: "We have 1000+ ready-to-use prompts."

**VISUAL**: Copy-paste animation
**VOICEOVER**: "Just copy, paste, and customize."

**VISUAL**: Happy person posting content
**VOICEOVER**: "Content creation solved."

**VISUAL**: Price reveal: $29.99
**VOICEOVER**: "Just $29.99."

**VISUAL**: "End the Struggle" button
**VOICEOVER**: "End the struggle today!"

**TEXT OVERLAY**: "Link in bio 👆"
        `,
        cta: "End the Struggle Today",
        notes: "Emotional hook perfect for Stories and short-form content.",
      },
      "30s": {
        title: "Problem-Solution Story - 30 Second Version",
        hook: "Detailed before/after transformation narrative",
        script: `
**VISUAL**: Montage of common content struggles
**VOICEOVER**: "Sound familiar?"

**VISUAL**: Person looking at blank social media post
**TEXT OVERLAY**: "What should I post today?"

**VISUAL**: Person struggling with email draft
**TEXT OVERLAY**: "How do I write this email?"

**VISUAL**: Person overwhelmed with content calendar
**TEXT OVERLAY**: "I need ideas NOW!"

**VISUAL**: Transition effect - screen wipe
**VOICEOVER**: "What if I told you we fixed this?"

**VISUAL**: Product reveal with magical effect
**VOICEOVER**: "Introducing 1000+ ChatGPT prompts that actually work."

**VISUAL**: Quick demo of prompt in action
**VOICEOVER**: "Pick a prompt, add your topic, get amazing content."

**VISUAL**: Before/after comparison
**VOICEOVER**: "From 4 hours to 15 minutes."

**VISUAL**: Product breakdown with numbers
**VOICEOVER**: "500 social media, 240 automation, 200 marketing, 100 content prompts."

**VISUAL**: Bonus items appearing
**VOICEOVER**: "Plus SEO tool, tracker, and bonus templates."

**VISUAL**: Price comparison
**VOICEOVER**: "Normally $60, today just $30."

**VISUAL**: Success story testimonial
**VOICEOVER**: "Join thousands who've ended their content struggles."

**VISUAL**: Strong CTA button
**VOICEOVER**: "Get instant relief now!"

**TEXT OVERLAY**: "Stop Struggling - Start Creating"
        `,
        cta: "Stop Struggling - Start Creating",
        notes: "Perfect for feed ads targeting content creators and marketers.",
      },
      "60s": {
        title: "Problem-Solution Story - 60 Second Version",
        hook: "Complete transformation journey with emotional payoff",
        script: `
**VISUAL**: Slow zoom on frustrated marketer late at night
**VOICEOVER**: "It's 11 PM. You're still at your computer."

**VISUAL**: Multiple browser tabs open, blank documents
**VOICEOVER**: "Tomorrow's content deadline is looming, and you've got nothing."

**VISUAL**: Montage of common struggles
**VOICEOVER**: "The blank page mocks you. The ideas just won't come."

**VISUAL**: Clock ticking, stress building
**VOICEOVER**: "You've been here before. Hours wasted, creativity blocked."

**VISUAL**: Competitor content scrolling by
**VOICEOVER**: "Meanwhile, your competitors are posting amazing content daily."

**VISUAL**: Person putting head in hands
**VOICEOVER**: "You think, 'There has to be a better way.'"

**VISUAL**: Light bulb moment, screen brightens
**VOICEOVER**: "And there is."

**VISUAL**: AI Beginner Mode logo with warm lighting
**VOICEOVER**: "We've been exactly where you are."

**VISUAL**: Team working on solution
**VOICEOVER**: "That's why we created the ultimate solution."

**VISUAL**: Product showcase with cinematic reveal
**VOICEOVER**: "1000+ proven ChatGPT prompts that eliminate writer's block forever."

**VISUAL**: Detailed walkthrough of each category
**VOICEOVER**: "500 social media prompts for every platform and situation..."

**VISUAL**: Automation examples
**VOICEOVER**: "240 automation prompts to streamline your entire workflow..."

**VISUAL**: Marketing campaign examples
**VOICEOVER**: "200 marketing prompts for campaigns that actually convert..."

**VISUAL**: Content creation montage
**VOICEOVER**: "And 100 content creation prompts for blogs, emails, and more."

**VISUAL**: Simple 3-step process animation
**VOICEOVER**: "The process is simple: Pick a prompt, add your details, get amazing content."

**VISUAL**: Time-lapse of content creation
**VOICEOVER**: "What used to take hours now takes minutes."

**VISUAL**: Happy customer testimonials
**VOICEOVER**: "Sarah went from 4 hours to 15 minutes per post."

**VISUAL**: More success stories
**VOICEOVER**: "Mike says it's the best $30 he's ever spent on marketing."

**VISUAL**: Community of happy users
**VOICEOVER**: "Over 2000 marketers have already ended their content struggles."

**VISUAL**: Bonus items reveal
**VOICEOVER**: "You also get our SEO generator tool, progress tracker, and bonus templates."

**VISUAL**: Value comparison
**VOICEOVER**: "This complete system normally costs $59.99."

**VISUAL**: Price slash with savings highlight
**VOICEOVER**: "But today, you can get everything for just $29.99."

**VISUAL**: Calculator showing per-prompt cost
**VOICEOVER**: "That's less than 3 cents per prompt."

**VISUAL**: Urgency elements
**VOICEOVER**: "This introductory price won't last long."

**VISUAL**: Final transformation - confident marketer
**VOICEOVER**: "Imagine never staring at a blank page again."

**VISUAL**: Strong CTA with guarantee badges
**VOICEOVER**: "Get instant access now and transform your content creation forever."

**TEXT OVERLAY**: "👇 End Your Content Struggles Today - $29.99"
        `,
        cta: "End Your Content Struggles Forever",
        notes: "Emotional long-form ad perfect for detailed Facebook video campaigns.",
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(scripts).map((length) => (
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

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{scripts[selectedLength as keyof typeof scripts].title}</h3>
            <Badge className="bg-red-500 text-white">{selectedLength}</Badge>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-red-600 mb-2">Hook Strategy:</h4>
            <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].hook}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Script:</h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-line">
              {scripts[selectedLength as keyof typeof scripts].script}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Call-to-Action:</h4>
              <p className="text-sm bg-red-50 p-3 rounded-lg">{scripts[selectedLength as keyof typeof scripts].cta}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Notes:</h4>
              <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].notes}</p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Social Proof Scripts
  const SocialProofScripts = () => {
    const scripts = {
      "15s": {
        title: "Social Proof - 15 Second Version",
        hook: "Quick community validation",
        script: `
**VISUAL**: Counter animation: 0 → 2,000+ customers
**VOICEOVER**: "Over 2000 marketers can't be wrong."

**VISUAL**: 5-star reviews flying across screen
**VOICEOVER**: "They're all raving about our ChatGPT prompts."

**VISUAL**: Quick testimonial quotes
**TEXT OVERLAY**: "Cut my content time by 80%" - Sarah M.

**VISUAL**: Product bundle with "2000+ Users" badge
**VOICEOVER**: "1000+ prompts that actually work."

**VISUAL**: Price with social proof
**VOICEOVER**: "Just $29.99."

**VISUAL**: "Join 2000+ Success Stories" button
**VOICEOVER**: "Join them today!"

**TEXT OVERLAY**: "Link in bio 👆"
        `,
        cta: "Join 2000+ Success Stories",
        notes: "Great for building trust with new audiences.",
      },
      "30s": {
        title: "Social Proof - 30 Second Version",
        hook: "Community success stories with detailed testimonials",
        script: `
**VISUAL**: Diverse group of happy marketers
**VOICEOVER**: "What do 2000+ successful marketers have in common?"

**VISUAL**: Testimonial carousel with photos
**VOICEOVER**: "They all use our ChatGPT prompts collection."

**VISUAL**: Sarah's testimonial with 5 stars
**TEXT OVERLAY**: "Cut my content creation time by 80%" - Sarah M.
**VOICEOVER**: "Sarah cut her content time by 80%."

**VISUAL**: Mike's testimonial with results
**TEXT OVERLAY**: "Best $30 I've spent on marketing!" - Mike R.
**VOICEOVER**: "Mike calls it his best marketing investment."

**VISUAL**: Lisa's testimonial with growth metrics
**TEXT OVERLAY**: "Doubled my engagement in 2 weeks!" - Lisa K.
**VOICEOVER**: "Lisa doubled her engagement in just 2 weeks."

**VISUAL**: Product showcase with community badges
**VOICEOVER**: "What's their secret? Our complete prompts bundle."

**VISUAL**: Feature breakdown with user counts
**VOICEOVER**: "500 social media prompts, 240 automation prompts, 200 marketing prompts, 100 content prompts."

**VISUAL**: Bonus items with "Most Popular" badges
**VOICEOVER**: "Plus SEO tool, tracker, and bonus templates."

**VISUAL**: Community growth animation
**VOICEOVER**: "Join thousands who've transformed their marketing."

**VISUAL**: Price with "Join Community" emphasis
**VOICEOVER**: "Get everything for just $29.99."

**VISUAL**: "Join the Community" button with user avatars
**VOICEOVER**: "Become our next success story!"

**TEXT OVERLAY**: "Join 2000+ Happy Customers"
        `,
        cta: "Join the Community - $29.99",
        notes: "Perfect for audiences who need social validation before purchasing.",
      },
      "60s": {
        title: "Social Proof - 60 Second Version",
        hook: "Comprehensive community showcase with detailed success stories",
        script: `
**VISUAL**: Wide shot of diverse professionals at computers
**VOICEOVER**: "Meet the 2000+ marketers who've cracked the code."

**VISUAL**: Success montage - people celebrating, posting content
**VOICEOVER**: "They're creating better content, faster than ever before."

**VISUAL**: Sarah's full story with before/after
**VOICEOVER**: "Take Sarah, a marketing director from Austin."

**VISUAL**: Sarah's struggle - late nights, stress
**VOICEOVER**: "She used to spend 4 hours on a single social media post."

**VISUAL**: Sarah discovering the prompts
**VOICEOVER**: "Then she found our ChatGPT prompts collection."

**VISUAL**: Sarah's transformation - quick content creation
**VOICEOVER**: "Now? 15 minutes max, and her engagement has tripled."

**VISUAL**: Mike's testimonial with business growth
**VOICEOVER**: "Or Mike, who grew his startup's social following by 300%."

**VISUAL**: Mike using the automation prompts
**VOICEOVER**: "He uses our automation prompts to streamline his entire workflow."

**VISUAL**: Lisa's success with content calendar
**VOICEOVER**: "Lisa went from struggling with ideas to having a month of content ready."

**VISUAL**: More testimonials scrolling
**VOICEOVER**: "Story after story, the results are the same."

**VISUAL**: Statistics and metrics
**VOICEOVER**: "95% report saving at least 3 hours per week."

**VISUAL**: More impressive stats
**VOICEOVER**: "87% say their content quality improved dramatically."

**VISUAL**: Community interaction - comments, shares
**VOICEOVER**: "They're not just customers, they're a community."

**VISUAL**: Product deep dive
**VOICEOVER**: "What's their secret weapon? Our comprehensive prompts bundle."

**VISUAL**: Detailed breakdown of each component
**VOICEOVER**: "500 social media prompts covering every platform and scenario."

**VISUAL**: Automation examples in action
**VOICEOVER**: "240 automation prompts that handle the heavy lifting."

**VISUAL**: Marketing campaign successes
**VOICEOVER**: "200 marketing prompts for campaigns that actually convert."

**VISUAL**: Content creation examples
**VOICEOVER**: "100 content creation prompts for blogs, emails, and more."

**VISUAL**: Bonus tools demonstration
**VOICEOVER**: "Plus our exclusive SEO generator, progress tracker, and bonus templates."

**VISUAL**: Value comparison with testimonials
**VOICEOVER**: "This complete system has transformed thousands of businesses."

**VISUAL**: Price reveal with community emphasis
**VOICEOVER**: "And you can join this community for just $29.99."

**VISUAL**: Money-back guarantee with testimonials
**VOICEOVER**: "We're so confident, we offer a complete satisfaction guarantee."

**VISUAL**: Community welcome message
**VOICEOVER**: "Don't just take our word for it. Join 2000+ success stories."

**VISUAL**: Final CTA with community elements
**VOICEOVER**: "Get instant access and become our next success story!"

**TEXT OVERLAY**: "👇 Join 2000+ Success Stories - $29.99"
        `,
        cta: "Join 2000+ Success Stories Today",
        notes: "Ideal for building strong community connection and trust.",
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(scripts).map((length) => (
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

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{scripts[selectedLength as keyof typeof scripts].title}</h3>
            <Badge className="bg-blue-500 text-white">{selectedLength}</Badge>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-blue-600 mb-2">Hook Strategy:</h4>
            <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].hook}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Script:</h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-line">
              {scripts[selectedLength as keyof typeof scripts].script}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Call-to-Action:</h4>
              <p className="text-sm bg-blue-50 p-3 rounded-lg">{scripts[selectedLength as keyof typeof scripts].cta}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Notes:</h4>
              <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].notes}</p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Urgency-Driven Scripts
  const UrgencyScripts = () => {
    const scripts = {
      "15s": {
        title: "Urgency-Driven - 15 Second Version",
        hook: "Fast-paced scarcity with immediate action",
        script: `
**VISUAL**: Red alert animation with countdown
**VOICEOVER**: "ALERT: 50% off ends tonight!"

**VISUAL**: Clock ticking rapidly
**VOICEOVER**: "Midnight deadline approaching."

**VISUAL**: Price slash animation
**VOICEOVER**: "$60 becomes $30."

**VISUAL**: Product bundle with "LAST CHANCE" overlay
**VOICEOVER**: "1000+ ChatGPT prompts."

**VISUAL**: Countdown timer: 08:47:23
**VOICEOVER**: "8 hours left."

**VISUAL**: "Claim Deal Now" button pulsing
**VOICEOVER**: "Don't miss out!"

**TEXT OVERLAY**: "⏰ Ends at Midnight!"
        `,
        cta: "Claim Deal Now - Ends Tonight",
        notes: "High-energy urgency perfect for limited-time offers.",
      },
      "30s": {
        title: "Urgency-Driven - 30 Second Version",
        hook: "Scarcity with clear consequences of missing out",
        script: `
**VISUAL**: Urgent red background with timer
**VOICEOVER**: "This is your final warning."

**VISUAL**: Price comparison with countdown overlay
**VOICEOVER**: "Our 50% off ChatGPT prompts deal ends at midnight tonight."

**VISUAL**: What you're missing animation
**VOICEOVER**: "After tonight, you'll pay full price for what others got for half."

**VISUAL**: Product showcase with urgency elements
**VOICEOVER**: "1000+ proven prompts that transform your marketing."

**VISUAL**: Feature breakdown with "LAST CHANCE" badges
**VOICEOVER**: "500 social media, 240 automation, 200 marketing, 100 content prompts."

**VISUAL**: Bonus items with countdown
**VOICEOVER**: "Plus SEO tool, tracker, and bonus templates."

**VISUAL**: Price reveal with savings emphasis
**VOICEOVER**: "Normally $60, tonight only $30."

**VISUAL**: Countdown timer prominent
**VOICEOVER**: "But only for the next 8 hours."

**VISUAL**: Competitor comparison
**VOICEOVER**: "While others pay full price tomorrow..."

**VISUAL**: Success story with urgency
**VOICEOVER**: "Smart marketers are claiming theirs now."

**VISUAL**: Final countdown with CTA
**VOICEOVER**: "Don't be left behind. Get yours before midnight!"

**TEXT OVERLAY**: "⏰ 8 Hours Left - Save $30"
        `,
        cta: "Don't Miss Out - Save $30 Tonight",
        notes: "Creates FOMO while highlighting clear value and deadline.",
      },
      "60s": {
        title: "Urgency-Driven - 60 Second Version",
        hook: "Complete urgency story with detailed consequences",
        script: `
**VISUAL**: Clock striking midnight, deal ending
**VOICEOVER**: "In exactly 8 hours and 47 minutes, this deal disappears forever."

**VISUAL**: Split screen - those who act vs. those who wait
**VOICEOVER**: "And you'll be left with two choices."

**VISUAL**: Person paying full price, looking regretful
**VOICEOVER**: "Pay full price like everyone else..."

**VISUAL**: Person enjoying the deal, looking satisfied
**VOICEOVER**: "Or join the smart marketers who acted today."

**VISUAL**: Flashback to deal announcement
**VOICEOVER**: "When we launched this 50% off deal, we knew it wouldn't last long."

**VISUAL**: Overwhelming response montage
**VOICEOVER**: "The response has been overwhelming."

**VISUAL**: Customer testimonials with timestamps
**VOICEOVER**: "Hundreds have already transformed their marketing."

**VISUAL**: Product showcase with urgency overlay
**VOICEOVER**: "They got our complete ChatGPT prompts collection..."

**VISUAL**: Detailed breakdown with countdown
**VOICEOVER**: "500 social media prompts for every platform..."

**VISUAL**: Automation examples with timer
**VOICEOVER**: "240 automation prompts to streamline workflows..."

**VISUAL**: Marketing success stories with urgency
**VOICEOVER**: "200 marketing prompts for converting campaigns..."

**VISUAL**: Content creation with countdown
**VOICEOVER**: "100 content creation prompts for blogs and emails..."

**VISUAL**: Bonus items with "TONIGHT ONLY" badges
**VOICEOVER**: "Plus our exclusive SEO generator, progress tracker, and bonus templates."

**VISUAL**: Value calculation with urgency
**VOICEOVER**: "This complete system normally costs $59.99."

**VISUAL**: Price slash with countdown
**VOICEOVER**: "But for the next 8 hours, you pay just $29.99."

**VISUAL**: Comparison with tomorrow's price
**VOICEOVER**: "Tomorrow, it goes back to full price."

**VISUAL**: FOMO visualization - others getting ahead
**VOICEOVER**: "While you're deciding, your competitors are already using these prompts."

**VISUAL**: Success metrics with urgency
**VOICEOVER**: "They're creating content 5x faster, getting better results."

**VISUAL**: Clock ticking, opportunity slipping away
**VOICEOVER**: "Every minute you wait, you fall further behind."

**VISUAL**: Final countdown with consequences
**VOICEOVER**: "In 8 hours, this opportunity vanishes."

**VISUAL**: Choice visualization
**VOICEOVER**: "You can join the winners who acted today..."

**VISUAL**: Regret visualization
**VOICEOVER**: "Or regret missing out when you pay double tomorrow."

**VISUAL**: Strong final CTA with countdown
**VOICEOVER**: "The choice is yours. But choose now, before it's too late."

**TEXT OVERLAY**: "⏰ FINAL HOURS - Save $30 Before Midnight"
        `,
        cta: "Final Hours - Don't Pay Double Tomorrow",
        notes: "Maximum urgency with clear consequences of inaction.",
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(scripts).map((length) => (
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

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{scripts[selectedLength as keyof typeof scripts].title}</h3>
            <Badge className="bg-orange-500 text-white">{selectedLength}</Badge>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-orange-600 mb-2">Hook Strategy:</h4>
            <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].hook}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Script:</h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-line">
              {scripts[selectedLength as keyof typeof scripts].script}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Call-to-Action:</h4>
              <p className="text-sm bg-orange-50 p-3 rounded-lg">
                {scripts[selectedLength as keyof typeof scripts].cta}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Notes:</h4>
              <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].notes}</p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Feature-Heavy Scripts
  const FeatureHeavyScripts = () => {
    const scripts = {
      "15s": {
        title: "Feature-Heavy - 15 Second Version",
        hook: "Quick comprehensive overview",
        script: `
**VISUAL**: Product explosion animation
**VOICEOVER**: "Everything you need in one bundle."

**VISUAL**: Rapid feature showcase
**VOICEOVER**: "500 social media prompts."

**VISUAL**: Automation tools animation
**VOICEOVER**: "240 automation prompts."

**VISUAL**: Marketing graphics
**VOICEOVER**: "200 marketing prompts."

**VISUAL**: Content examples
**VOICEOVER**: "100 content prompts."

**VISUAL**: Bonus items reveal
**VOICEOVER**: "Plus tools and bonuses."

**VISUAL**: Price with "Complete Package" badge
**VOICEOVER**: "Complete package, $29.99."

**VISUAL**: "Get Everything" button
**VOICEOVER**: "Get everything now!"

**TEXT OVERLAY**: "Complete AI Marketing Toolkit"
        `,
        cta: "Get Complete Package - $29.99",
        notes: "Fast-paced feature overview for decision-ready audiences.",
      },
      "30s": {
        title: "Feature-Heavy - 30 Second Version",
        hook: "Comprehensive feature breakdown with clear value",
        script: `
**VISUAL**: Professional workspace setup
**VOICEOVER**: "What if you had every AI marketing tool you'd ever need?"

**VISUAL**: Complete package reveal
**VOICEOVER**: "Introducing the complete ChatGPT marketing toolkit."

**VISUAL**: Social media section with examples
**VOICEOVER**: "500 social media prompts for every platform and situation."

**VISUAL**: Automation workflow demonstration
**VOICEOVER**: "240 automation prompts to streamline your entire workflow."

**VISUAL**: Marketing campaign examples
**VOICEOVER**: "200 marketing prompts for campaigns that actually convert."

**VISUAL**: Content creation showcase
**VOICEOVER**: "100 content creation prompts for blogs, emails, and more."

**VISUAL**: Bonus tools demonstration
**VOICEOVER**: "Plus our exclusive SEO generator tool."

**VISUAL**: Progress tracker in action
**VOICEOVER**: "7-day progress tracker to measure your success."

**VISUAL**: Communication templates showcase
**VOICEOVER**: "And 10 bonus communication templates."

**VISUAL**: Value comparison
**VOICEOVER**: "This complete system would cost hundreds separately."

**VISUAL**: Price reveal with package emphasis
**VOICEOVER**: "Get everything for just $29.99."

**VISUAL**: "Complete Access" button
**VOICEOVER**: "Get complete access now!"

**TEXT OVERLAY**: "Everything You Need - One Price"
        `,
        cta: "Get Complete Access - Everything Included",
        notes: "Perfect for showcasing comprehensive value proposition.",
      },
      "60s": {
        title: "Feature-Heavy - 60 Second Version",
        hook: "Detailed walkthrough of every component and benefit",
        script: `
**VISUAL**: Professional marketer's desk with multiple tools
**VOICEOVER**: "Most marketers use dozens of different tools and resources."

**VISUAL**: Cluttered workspace, multiple subscriptions
**VOICEOVER**: "Paying hundreds per month for scattered solutions."

**VISUAL**: Transition to clean, organized solution
**VOICEOVER**: "What if everything you needed was in one place?"

**VISUAL**: AI Beginner Mode complete package reveal
**VOICEOVER**: "Introducing the most comprehensive ChatGPT marketing toolkit ever created."

**VISUAL**: Social media section deep dive
**VOICEOVER**: "Let's start with social media. You get 500 power prompts."

**VISUAL**: Platform-specific examples
**VOICEOVER**: "Instagram posts, Facebook ads, LinkedIn articles, Twitter threads."

**VISUAL**: Engagement and growth examples
**VOICEOVER**: "Prompts for engagement, growth, community building, and conversions."

**VISUAL**: Automation section showcase
**VOICEOVER**: "Next, 240 automation and tool prompts."

**VISUAL**: Workflow demonstrations
**VOICEOVER**: "Email sequences, chatbot responses, customer service, lead generation."

**VISUAL**: Time-saving visualizations
**VOICEOVER**: "Automate what used to take hours of manual work."

**VISUAL**: Marketing strategy section
**VOICEOVER**: "Then, 200 marketing and strategy prompts."

**VISUAL**: Campaign examples
**VOICEOVER**: "Product launches, seasonal campaigns, audience research, competitor analysis."

**VISUAL**: Results and ROI examples
**VOICEOVER**: "Strategies that actually drive results and ROI."

**VISUAL**: Content creation section
**VOICEOVER**: "Plus 100 content creation prompts."

**VISUAL**: Various content types
**VOICEOVER**: "Blog posts, email newsletters, video scripts, podcast outlines."

**VISUAL**: Quality and consistency examples
**VOICEOVER**: "Consistent, high-quality content that engages your audience."

**VISUAL**: Bonus tools section
**VOICEOVER**: "But we didn't stop there. You also get exclusive bonus tools."

**VISUAL**: SEO generator demonstration
**VOICEOVER**: "Our online SEO prompt generator creates custom prompts for any keyword."

**VISUAL**: Progress tracker walkthrough
**VOICEOVER**: "The 7-day progress tracker helps you measure and improve your results."

**VISUAL**: Communication templates showcase
**VOICEOVER**: "10 professional communication templates for client work and team collaboration."

**VISUAL**: Everything together visualization
**VOICEOVER**: "That's over 1000 prompts plus exclusive tools and bonuses."

**VISUAL**: Value calculation
**VOICEOVER**: "If you bought these separately, you'd pay hundreds."

**VISUAL**: Competitive comparison
**VOICEOVER**: "Other prompt collections charge $50-100 for just one category."

**VISUAL**: Complete package value
**VOICEOVER**: "You get everything - all categories, all tools, all bonuses."

**VISUAL**: Price reveal with value emphasis
**VOICEOVER**: "For just $29.99. Less than most people spend on lunch."

**VISUAL**: Instant access demonstration
**VOICEOVER**: "Instant download, lifetime access, beginner-friendly format."

**VISUAL**: Success guarantee
**VOICEOVER**: "Complete satisfaction guaranteed."

**VISUAL**: Final CTA with everything included
**VOICEOVER**: "Get complete access to everything now!"

**TEXT OVERLAY**: "👇 Complete Toolkit - Everything Included - $29.99"
        `,
        cta: "Get Complete Toolkit - Everything Included",
        notes: "Comprehensive overview perfect for detailed product demonstrations.",
      },
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(scripts).map((length) => (
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

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{scripts[selectedLength as keyof typeof scripts].title}</h3>
            <Badge className="bg-purple-500 text-white">{selectedLength}</Badge>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-purple-600 mb-2">Hook Strategy:</h4>
            <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].hook}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Script:</h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-line">
              {scripts[selectedLength as keyof typeof scripts].script}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Call-to-Action:</h4>
              <p className="text-sm bg-purple-50 p-3 rounded-lg">
                {scripts[selectedLength as keyof typeof scripts].cta}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Notes:</h4>
              <p className="text-sm text-gray-600">{scripts[selectedLength as keyof typeof scripts].notes}</p>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const scriptTypes = [
    { id: "value-focused", name: "Value-Focused", icon: TrendingUp, component: <ValueFocusedScripts /> },
    { id: "problem-solution", name: "Problem-Solution", icon: Zap, component: <ProblemSolutionScripts /> },
    { id: "social-proof", name: "Social Proof", icon: Users, component: <SocialProofScripts /> },
    { id: "urgency", name: "Urgency-Driven", icon: Clock, component: <UrgencyScripts /> },
    { id: "feature-heavy", name: "Feature-Heavy", icon: Download, component: <FeatureHeavyScripts /> },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Ad Scripts Collection</h2>
        <p className="text-lg text-gray-600 mb-6">
          Professional video scripts based on your static creative concepts - ready for production
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

      {/* Production Guidelines */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Video Production Guidelines</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Visual Style</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Clean, modern aesthetic matching brand</li>
              <li>• Use brand colors (Black, Red, Yellow)</li>
              <li>• High contrast for mobile viewing</li>
              <li>• Consistent typography and spacing</li>
              <li>• Professional but approachable feel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-green-600">Audio Guidelines</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Clear, confident voiceover</li>
              <li>• Friendly but professional tone</li>
              <li>• Match brand personality (encouraging)</li>
              <li>• Background music: upbeat, non-distracting</li>
              <li>• Captions for accessibility</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-purple-600">Technical Specs</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1080x1080 (Square) for feed</li>
              <li>• 1080x1920 (Vertical) for Stories</li>
              <li>• 1920x1080 (Horizontal) for YouTube</li>
              <li>• MP4 format, H.264 codec</li>
              <li>• Maximum 4GB file size</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-orange-600">Platform Optimization</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Facebook/Instagram: Square or vertical</li>
              <li>• Stories/Reels: Vertical format</li>
              <li>• YouTube: Horizontal format</li>
              <li>• TikTok: Vertical, fast-paced</li>
              <li>• LinkedIn: Professional tone</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-red-600">Engagement Elements</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Hook within first 3 seconds</li>
              <li>• Visual text overlays for key points</li>
              <li>• Progress indicators for longer videos</li>
              <li>• Clear, prominent CTAs</li>
              <li>• Brand logo/watermark placement</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-600">Testing Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• A/B test different hooks</li>
              <li>• Test various video lengths</li>
              <li>• Compare voiceover vs. text-only</li>
              <li>• Test different CTA placements</li>
              <li>• Monitor completion rates</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Script Usage Matrix */}
      <Card className="p-6 bg-gray-50">
        <h3 className="text-xl font-bold mb-4">Script Usage Recommendations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Script Type</th>
                <th className="text-left p-2">Best For</th>
                <th className="text-left p-2">Platform</th>
                <th className="text-left p-2">Audience Stage</th>
                <th className="text-left p-2">Recommended Length</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b">
                <td className="p-2 font-medium">Value-Focused</td>
                <td className="p-2">Price-conscious buyers</td>
                <td className="p-2">Facebook Feed, YouTube</td>
                <td className="p-2">Consideration</td>
                <td className="p-2">30-60s</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Problem-Solution</td>
                <td className="p-2">Pain point awareness</td>
                <td className="p-2">All platforms</td>
                <td className="p-2">Awareness to Interest</td>
                <td className="p-2">30-60s</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Social Proof</td>
                <td className="p-2">Trust building</td>
                <td className="p-2">Facebook, LinkedIn</td>
                <td className="p-2">Consideration</td>
                <td className="p-2">30-60s</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Urgency-Driven</td>
                <td className="p-2">Limited-time offers</td>
                <td className="p-2">Stories, Reels</td>
                <td className="p-2">Decision</td>
                <td className="p-2">15-30s</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Feature-Heavy</td>
                <td className="p-2">Detail-oriented buyers</td>
                <td className="p-2">YouTube, Facebook</td>
                <td className="p-2">Evaluation</td>
                <td className="p-2">60s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
