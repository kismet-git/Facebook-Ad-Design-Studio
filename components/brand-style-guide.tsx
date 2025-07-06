"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, X, Download, Palette, Type, Layout, MessageSquare, Zap, Star } from "lucide-react"

export function BrandStyleGuide() {
  const [selectedSection, setSelectedSection] = useState("logos")

  // Color Palette Component
  const ColorPalette = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Primary Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-lg mx-auto mb-2 shadow-lg"></div>
            <p className="font-semibold">Primary Black</p>
            <p className="text-sm text-gray-600">#000000</p>
            <p className="text-xs text-gray-500">RGB: 0, 0, 0</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-2 shadow-lg"></div>
            <p className="font-semibold">Primary White</p>
            <p className="text-sm text-gray-600">#FFFFFF</p>
            <p className="text-xs text-gray-500">RGB: 255, 255, 255</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500 rounded-lg mx-auto mb-2 shadow-lg"></div>
            <p className="font-semibold">Accent Red</p>
            <p className="text-sm text-gray-600">#EF4444</p>
            <p className="text-xs text-gray-500">RGB: 239, 68, 68</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-2 shadow-lg"></div>
            <p className="font-semibold">Highlight Yellow</p>
            <p className="text-sm text-gray-600">#FACC15</p>
            <p className="text-xs text-gray-500">RGB: 250, 204, 21</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Secondary Colors</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gray 900</p>
            <p className="text-xs text-gray-600">#111827</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gray 700</p>
            <p className="text-xs text-gray-600">#374151</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-500 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gray 500</p>
            <p className="text-xs text-gray-600">#6B7280</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gray 300</p>
            <p className="text-xs text-gray-600">#D1D5DB</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gray 100</p>
            <p className="text-xs text-gray-600">#F3F4F6</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gray 50</p>
            <p className="text-xs text-gray-600">#F9FAFB</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Accent Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Success Green</p>
            <p className="text-xs text-gray-600">#10B981</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Info Blue</p>
            <p className="text-xs text-gray-600">#3B82F6</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Warning Orange</p>
            <p className="text-xs text-gray-600">#F97316</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Premium Purple</p>
            <p className="text-xs text-gray-600">#8B5CF6</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Logo Guidelines Component
  const LogoGuidelines = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Logo Variations</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
              <img src="/images/icon-dark.png" alt="Icon Only" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold mb-2">Icon Only</h4>
            <p className="text-sm text-gray-600 mb-3">Use for profile pictures, favicons, and small spaces</p>
            <Badge variant="outline" className="text-xs">
              Primary
            </Badge>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4">
              <img src="/images/ai-beginner-mode-text.png" alt="Text Only" className="h-8 mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">Text Only</h4>
            <p className="text-sm text-gray-600 mb-3">Use for headers, footers, and text-heavy layouts</p>
            <Badge variant="outline" className="text-xs">
              Secondary
            </Badge>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4">
              <img src="/images/ai-beginner-mode-full-logo.png" alt="Full Logo" className="h-8 mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">Full Logo</h4>
            <p className="text-sm text-gray-600 mb-3">Use for banners, business cards, and main branding</p>
            <Badge variant="outline" className="text-xs">
              Complete
            </Badge>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Logo Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h4 className="font-semibold text-green-700">Do's</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Maintain clear space around logo (minimum 1x icon height)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Use on high contrast backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Scale proportionally</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Use approved color variations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Ensure minimum size of 24px for icon</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-red-500" />
              <h4 className="font-semibold text-red-700">Don'ts</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Don't stretch or distort the logo</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Don't use on busy backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Don't change colors outside brand palette</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Don't add effects, shadows, or outlines</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Don't use below minimum size</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Clear Space & Sizing</h3>
        <Card className="p-6">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="relative inline-block">
              <img src="/images/ai-beginner-mode-full-logo.png" alt="Logo with clear space" className="h-12" />
              <div className="absolute -inset-6 border-2 border-dashed border-gray-400 rounded"></div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Minimum clear space = 1x the height of the icon element</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-semibold">Minimum Size</p>
              <p className="text-gray-600">24px (icon)</p>
              <p className="text-gray-600">120px (full logo)</p>
            </div>
            <div>
              <p className="font-semibold">Optimal Size</p>
              <p className="text-gray-600">48px (icon)</p>
              <p className="text-gray-600">240px (full logo)</p>
            </div>
            <div>
              <p className="font-semibold">Maximum Size</p>
              <p className="text-gray-600">No limit</p>
              <p className="text-gray-600">(maintain quality)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  // Typography Guidelines
  const TypographyGuidelines = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Brand Typography</h3>
        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="text-lg font-bold mb-3">Primary Typeface: System Font Stack</h4>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <code className="text-sm">
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
              </code>
            </div>
            <div className="space-y-3">
              <div>
                <h1 className="text-4xl font-black text-gray-900">Heading 1 - Black Weight</h1>
                <p className="text-sm text-gray-600">Use for main headlines and hero sections</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Heading 2 - Bold Weight</h2>
                <p className="text-sm text-gray-600">Use for section headers and important titles</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Heading 3 - Semibold Weight</h3>
                <p className="text-sm text-gray-600">Use for subsections and card titles</p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-900">Body Text - Medium Weight</p>
                <p className="text-sm text-gray-600">Use for important body text and CTAs</p>
              </div>
              <div>
                <p className="text-base text-gray-700">Body Text - Regular Weight</p>
                <p className="text-sm text-gray-600">Use for standard body text and descriptions</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Small Text - Regular Weight</p>
                <p className="text-xs text-gray-600">Use for captions, disclaimers, and metadata</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-lg font-bold mb-3">Brand Voice Typography</h4>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <img src="/images/ai-beginner-mode-text.png" alt="Brand Typography" className="h-12 mx-auto mb-3" />
              <p className="text-sm text-gray-600">
                The handwritten style logo represents our approachable, beginner-friendly personality
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                <strong>Usage:</strong> Logo only - do not recreate this style for other text elements
              </p>
              <p>
                <strong>Personality:</strong> Friendly, approachable, human, non-intimidating
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Typography Hierarchy</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-semibold">Element</span>
              <span className="font-semibold">Size</span>
              <span className="font-semibold">Weight</span>
              <span className="font-semibold">Usage</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Hero Headlines</span>
              <span>48px+</span>
              <span>Black (900)</span>
              <span>Main page headlines</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Section Headers</span>
              <span>32-40px</span>
              <span>Bold (700)</span>
              <span>Section titles</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Card Titles</span>
              <span>20-24px</span>
              <span>Semibold (600)</span>
              <span>Component headers</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Body Text</span>
              <span>16px</span>
              <span>Regular (400)</span>
              <span>Main content</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Small Text</span>
              <span>14px</span>
              <span>Regular (400)</span>
              <span>Supporting text</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Captions</span>
              <span>12px</span>
              <span>Regular (400)</span>
              <span>Metadata, disclaimers</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  // Voice & Tone Guidelines
  const VoiceAndTone = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Brand Voice</h3>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-700">We Are:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Approachable:</strong> Easy to understand, friendly
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Encouraging:</strong> "You can do this!"
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Practical:</strong> Focus on real results
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Confident:</strong> We know this works
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Empathetic:</strong> We understand the struggle
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-700">We Are Not:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Technical:</strong> No jargon or complex terms
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Intimidating:</strong> Never make users feel dumb
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Pushy:</strong> No aggressive sales tactics
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Corporate:</strong> Avoid formal, stuffy language
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Overpromising:</strong> Keep expectations realistic
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Key Messaging</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-3">Primary Messages</h4>
            <ul className="space-y-3 text-sm">
              <li className="p-3 bg-yellow-50 rounded-lg">
                <strong>"Don't Learn AI. Use AI."</strong>
                <p className="text-gray-600 mt-1">Skip the learning curve, get results immediately</p>
              </li>
              <li className="p-3 bg-red-50 rounded-lg">
                <strong>"Start Using AI Today"</strong>
                <p className="text-gray-600 mt-1">Immediate action, no delays</p>
              </li>
              <li className="p-3 bg-green-50 rounded-lg">
                <strong>"It's Easier Than You Think"</strong>
                <p className="text-gray-600 mt-1">Removes intimidation factor</p>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">Supporting Messages</h4>
            <ul className="space-y-2 text-sm">
              <li>• "No technical skills required"</li>
              <li>• "Beginner-friendly templates"</li>
              <li>• "Copy, paste, and use"</li>
              <li>• "Start getting results in 5 minutes"</li>
              <li>• "Skip months of trial and error"</li>
              <li>• "Finally, AI that actually works"</li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Tone Examples</h3>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-green-700">✅ Good Examples</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 rounded">
                    <p className="font-medium">"Struggling with AI? We solved this problem."</p>
                    <p className="text-gray-600 text-xs mt-1">Empathetic + solution-focused</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="font-medium">"You don't need to become an AI expert. You just need these prompts."</p>
                    <p className="text-gray-600 text-xs mt-1">Reassuring + practical</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-700">❌ Bad Examples</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-red-50 rounded">
                    <p className="font-medium">"Master advanced AI algorithms with our comprehensive training."</p>
                    <p className="text-gray-600 text-xs mt-1">Too technical + intimidating</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded">
                    <p className="font-medium">"Limited time offer! Buy now or miss out forever!"</p>
                    <p className="text-gray-600 text-xs mt-1">Too pushy + aggressive</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  // Visual Elements Guidelines
  const VisualElements = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Brand Icons & Symbols</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold mb-2">Arrow/Chevron</h4>
            <p className="text-sm text-gray-600">Represents progress, moving forward, action</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="text-white flex gap-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-2 h-2 fill-current" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">Sparkles/Stars</h4>
            <p className="text-sm text-gray-600">Represents magic, AI power, transformation</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-8 h-1 bg-white rounded"></div>
            </div>
            <h4 className="font-semibold mb-2">Dash/Line</h4>
            <p className="text-sm text-gray-600">Represents simplicity, minimalism, clarity</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Visual Style Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-3">Design Principles</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  <strong>Clean & Minimal:</strong> Avoid clutter, embrace white space
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  <strong>High Contrast:</strong> Ensure readability and accessibility
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  <strong>Rounded Corners:</strong> Use 8px radius for friendly feel
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  <strong>Subtle Shadows:</strong> Add depth without distraction
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  <strong>Mobile-First:</strong> Design for thumb-friendly interaction
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">Visual Hierarchy</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 bg-black rounded-full mt-0.5 flex-shrink-0"></span>
                <span>
                  <strong>Primary:</strong> Main headlines, CTAs (Black/Red)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 bg-gray-700 rounded-full mt-0.5 flex-shrink-0"></span>
                <span>
                  <strong>Secondary:</strong> Subheadings, important text (Gray 700)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 bg-gray-500 rounded-full mt-0.5 flex-shrink-0"></span>
                <span>
                  <strong>Tertiary:</strong> Body text, descriptions (Gray 500)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 bg-gray-300 rounded-full mt-0.5 flex-shrink-0"></span>
                <span>
                  <strong>Supporting:</strong> Captions, metadata (Gray 300)
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Button & CTA Styles</h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3">Primary CTA</h4>
              <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <p className="text-sm text-gray-600 mt-2">Red background, white text, rounded-full, bold font</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Secondary CTA</h4>
              <Button
                variant="outline"
                className="bg-white text-gray-900 border-gray-300 font-semibold py-3 px-6 rounded-full"
              >
                Learn More
              </Button>
              <p className="text-sm text-gray-600 mt-2">White background, gray border, dark text</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Accent CTA</h4>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full">
                <Zap className="w-5 h-5 mr-2" />
                Start Using AI Today
              </Button>
              <p className="text-sm text-gray-600 mt-2">Yellow background, dark text, for high-energy actions</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  // Application Examples
  const ApplicationExamples = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Social Media Applications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-3">Facebook/Instagram Posts</h4>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/images/icon-dark.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <img src="/images/ai-beginner-mode-text.png" alt="Brand Name" className="h-3" />
              </div>
              <p className="text-sm font-medium">Don't Learn AI. Use AI. ✨</p>
              <p className="text-xs text-gray-600 mt-1">1000+ ready-to-use ChatGPT prompts for marketers</p>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Use icon as profile picture</li>
              <li>• Include brand messaging in captions</li>
              <li>• Maintain consistent visual style</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">LinkedIn Posts</h4>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/images/icon-dark.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">AI Beginner Mode</span>
              </div>
              <p className="text-sm">
                Struggling with AI in your marketing? Here's the solution most marketers are missing...
              </p>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Professional tone, still approachable</li>
              <li>• Focus on business benefits</li>
              <li>• Use full logo in cover images</li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Email & Newsletter</h3>
        <Card className="p-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center mb-4">
              <img src="/images/ai-beginner-mode-full-logo.png" alt="Email Header" className="h-8 mx-auto" />
            </div>
            <h4 className="text-lg font-bold mb-2">Don't Learn AI. Use AI.</h4>
            <p className="text-sm text-gray-600 mb-4">
              Hey [Name], tired of feeling behind on the AI revolution? You don't need to become an expert...
            </p>
            <Button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full text-sm">
              Get Your Prompts Now
            </Button>
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <img src="/images/ai-beginner-mode-text.png" alt="Footer" className="h-3 mx-auto opacity-60" />
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Website Applications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-3">Header/Navigation</h4>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="flex items-center justify-between">
                <img src="/images/ai-beginner-mode-full-logo.png" alt="Logo" className="h-6" />
                <div className="flex gap-4 text-sm">
                  <span>Products</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Use full logo in header, maintain clear navigation</p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3">Footer</h4>
            <div className="bg-gray-900 rounded-lg p-4 mb-3 text-white">
              <div className="text-center">
                <img
                  src="/images/ai-beginner-mode-text.png"
                  alt="Footer Logo"
                  className="h-4 mx-auto mb-2 brightness-200"
                />
                <p className="text-xs opacity-60">© 2024 AI Beginner Mode. All rights reserved.</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Use text logo in footer, adjust brightness for dark backgrounds</p>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="/images/icon-dark.png" alt="AI Beginner Mode" className="w-full h-full object-cover" />
          </div>
          <img src="/images/ai-beginner-mode-text.png" alt="AI Beginner Mode" className="h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Brand Style Guide</h1>
        <p className="text-lg text-gray-600 mb-6">
          Complete guidelines for consistent AI Beginner Mode brand usage across all campaigns and touchpoints
        </p>

        <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full">
          <Download className="w-4 h-4 mr-2" />
          Download Style Guide
        </Button>
      </div>

      <Tabs value={selectedSection} onValueChange={setSelectedSection} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="logos" className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-current opacity-60"></div>
            Logos
          </TabsTrigger>
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2">
            <Type className="w-4 h-4" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Voice & Tone
          </TabsTrigger>
          <TabsTrigger value="visual" className="flex items-center gap-2">
            <Layout className="w-4 h-4" />
            Visual Elements
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="logos">
            <LogoGuidelines />
          </TabsContent>

          <TabsContent value="colors">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography">
            <TypographyGuidelines />
          </TabsContent>

          <TabsContent value="voice">
            <VoiceAndTone />
          </TabsContent>

          <TabsContent value="visual">
            <VisualElements />
          </TabsContent>
        </div>
      </Tabs>

      <div className="mt-12">
        <ApplicationExamples />
      </div>

      {/* Quick Reference Card */}
      <Card className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-white">
        <h3 className="text-xl font-bold mb-4">Quick Reference</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Primary Colors</h4>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-black rounded"></div>
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <div className="w-6 h-6 bg-yellow-400 rounded"></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Message</h4>
            <p className="text-gray-600">"Don't Learn AI. Use AI."</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Personality</h4>
            <p className="text-gray-600">Approachable, Encouraging, Practical</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Logo Minimum</h4>
            <p className="text-gray-600">24px (icon), 120px (full)</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
