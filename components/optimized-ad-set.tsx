"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  DollarSign,
  Calendar,
  Users,
  Settings,
  Eye,
  MousePointer,
  ShoppingCart,
  BarChart3,
  MapPin,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"

export function OptimizedAdSet() {
  const [selectedObjective, setSelectedObjective] = useState("conversions")

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimized Facebook Ad Set</h2>
        <p className="text-lg text-gray-600 mb-6">
          Complete campaign setup based on "Stop Wondering, Start Asking" reference ad
        </p>
      </div>

      <Tabs defaultValue="campaign" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="campaign">Campaign</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="placements">Placements</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
        </TabsList>

        {/* Campaign Setup */}
        <TabsContent value="campaign" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Campaign Objective & Structure
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Campaign Objective</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="conversions"
                      name="objective"
                      checked={selectedObjective === "conversions"}
                      onChange={() => setSelectedObjective("conversions")}
                    />
                    <label htmlFor="conversions" className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Conversions (Recommended)
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="traffic"
                      name="objective"
                      checked={selectedObjective === "traffic"}
                      onChange={() => setSelectedObjective("traffic")}
                    />
                    <label htmlFor="traffic" className="flex items-center gap-2">
                      <MousePointer className="w-4 h-4" />
                      Traffic
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="engagement"
                      name="objective"
                      checked={selectedObjective === "engagement"}
                      onChange={() => setSelectedObjective("engagement")}
                    />
                    <label htmlFor="engagement" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Engagement
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Campaign Structure</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-blue-900">Campaign Name:</p>
                    <p className="text-blue-700">ChatGPT Prompts - Action Oriented - Conversions</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-green-900">Ad Set Name:</p>
                    <p className="text-green-700">Marketers 25-55 - Interests - Desktop/Mobile</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-purple-900">Ad Name:</p>
                    <p className="text-purple-700">Stop Wondering Start Asking - Feed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Conversion Event Setup</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Primary Event: Purchase</p>
                  <p className="text-gray-600">Track completed purchases of the prompt bundle</p>
                </div>
                <div>
                  <p className="font-medium">Attribution Window: 7-day click, 1-day view</p>
                  <p className="text-gray-600">Standard attribution for digital products</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Audience Targeting */}
        <TabsContent value="audience" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Audience Targeting Strategy
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Demographics</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Age Range:</span>
                    <span className="font-medium">25-55 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gender:</span>
                    <span className="font-medium">All genders</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="font-medium">English (All)</span>
                  </div>
                </div>

                <h4 className="font-semibold mb-3 mt-6">Location Targeting</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>United States, Canada, United Kingdom, Australia</span>
                  </div>
                  <p className="text-gray-600 ml-6">English-speaking countries with high digital product adoption</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Interest Targeting</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-blue-900 mb-2">Primary Interests:</p>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• Digital marketing</p>
                      <p>• Content marketing</p>
                      <p>• Social media marketing</p>
                      <p>• ChatGPT</p>
                      <p>• Artificial intelligence</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-green-900 mb-2">Secondary Interests:</p>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• Small business</p>
                      <p>• Entrepreneurship</p>
                      <p>• Online business</p>
                      <p>• Marketing automation</p>
                      <p>• Copywriting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">Behavioral Targeting</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-800">
                <div>
                  <p className="font-medium">Digital Activities:</p>
                  <p>• Engaged with business content</p>
                  <p>• Downloaded business apps</p>
                  <p>• Purchased digital products</p>
                </div>
                <div>
                  <p className="font-medium">Purchase Behavior:</p>
                  <p>• Online shoppers</p>
                  <p>• Premium brand affinity</p>
                  <p>• Technology early adopters</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Estimated Audience Size</h4>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">2.8M</p>
                  <p className="text-sm text-purple-700">Potential Reach</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">Specific</p>
                  <p className="text-sm text-green-700">Audience Quality</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Placements */}
        <TabsContent value="placements" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Ad Placements & Devices
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Recommended Placements</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <input type="checkbox" id="facebook-feed" defaultChecked />
                    <label htmlFor="facebook-feed" className="flex-1">
                      <p className="font-medium">Facebook Feed</p>
                      <p className="text-sm text-gray-600">Primary placement for detailed ads</p>
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <input type="checkbox" id="instagram-feed" defaultChecked />
                    <label htmlFor="instagram-feed" className="flex-1">
                      <p className="font-medium">Instagram Feed</p>
                      <p className="text-sm text-gray-600">Visual-focused audience</p>
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" id="facebook-stories" />
                    <label htmlFor="facebook-stories" className="flex-1">
                      <p className="font-medium">Facebook Stories</p>
                      <p className="text-sm text-gray-600">Full-screen immersive experience</p>
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" id="instagram-stories" />
                    <label htmlFor="instagram-stories" className="flex-1">
                      <p className="font-medium">Instagram Stories</p>
                      <p className="text-sm text-gray-600">Younger demographic focus</p>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Device Targeting</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Smartphone className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium">Mobile (Recommended)</p>
                      <p className="text-sm text-gray-600">80% of Facebook users are mobile</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Monitor className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium">Desktop</p>
                      <p className="text-sm text-gray-600">Better for detailed content consumption</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Tablet className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <p className="font-medium">Tablet</p>
                      <p className="text-sm text-gray-600">Optional - smaller audience</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Platform Performance</h4>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div className="flex justify-between">
                      <span>Facebook Feed:</span>
                      <span className="font-medium">Highest conversion rate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Instagram Feed:</span>
                      <span className="font-medium">Best engagement rate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stories:</span>
                      <span className="font-medium">Lowest cost per click</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Budget & Bidding */}
        <TabsContent value="budget" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Budget & Bidding Strategy
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Budget Settings</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <input type="radio" id="daily-budget" name="budget-type" defaultChecked />
                      <label htmlFor="daily-budget" className="font-medium">
                        Daily Budget (Recommended)
                      </label>
                    </div>
                    <div className="ml-6">
                      <p className="text-2xl font-bold text-blue-600">$50/day</p>
                      <p className="text-sm text-blue-700">Starting budget for testing</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <input type="radio" id="lifetime-budget" name="budget-type" />
                      <label htmlFor="lifetime-budget" className="font-medium">
                        Lifetime Budget
                      </label>
                    </div>
                    <div className="ml-6">
                      <p className="text-lg font-bold text-gray-600">$350 (7 days)</p>
                      <p className="text-sm text-gray-600">Alternative option</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Budget Scaling Plan</h4>
                  <div className="space-y-2 text-sm text-yellow-800">
                    <p>
                      <strong>Week 1:</strong> $50/day (Testing phase)
                    </p>
                    <p>
                      <strong>Week 2:</strong> $75/day (If CPA &lt; $15)
                    </p>
                    <p>
                      <strong>Week 3+:</strong> $100-150/day (Scale winners)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Bidding Strategy</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <input type="radio" id="lowest-cost" name="bidding" defaultChecked />
                      <label htmlFor="lowest-cost" className="font-medium">
                        Lowest Cost (Recommended)
                      </label>
                    </div>
                    <p className="text-sm text-green-700 ml-6">Let Facebook optimize for best results</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <input type="radio" id="cost-cap" name="bidding" />
                      <label htmlFor="cost-cap" className="font-medium">
                        Cost Cap
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">Set maximum cost per acquisition: $20</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <input type="radio" id="bid-cap" name="bidding" />
                      <label htmlFor="bid-cap" className="font-medium">
                        Bid Cap
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">Advanced option for experienced advertisers</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Expected Performance</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Expected CPC:</span>
                      <span className="font-medium">$0.50 - $1.20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected CTR:</span>
                      <span className="font-medium">1.5% - 2.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected CPA:</span>
                      <span className="font-medium">$10 - $18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected ROAS:</span>
                      <span className="font-medium">2.0x - 3.5x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Creative Strategy */}
        <TabsContent value="creative" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Creative Strategy & Testing
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Primary Creative Elements</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                    <h5 className="font-medium text-pink-900">Headline Hook</h5>
                    <p className="text-sm text-pink-800">"STOP WONDERING, Start ASKING"</p>
                    <p className="text-xs text-pink-700 mt-1">Action-oriented, problem-solving focus</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-medium text-blue-900">Value Proposition</h5>
                    <p className="text-sm text-blue-800">"1000+ Customizable ChatGPT Prompts for Marketers"</p>
                    <p className="text-xs text-blue-700 mt-1">Clear, specific, benefit-focused</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h5 className="font-medium text-green-900">Key Benefits</h5>
                    <div className="text-sm text-green-800 space-y-1">
                      <p>✓ Results in 5 minutes</p>
                      <p>✓ Works with Free ChatGPT</p>
                      <p>✓ Free SEO Generator</p>
                      <p>✓ 3-in-1 bundle + bonuses</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">A/B Testing Plan</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-medium text-orange-900 mb-2">Test 1: Headlines</h5>
                    <div className="text-sm text-orange-800 space-y-1">
                      <p>A: "STOP WONDERING, Start ASKING"</p>
                      <p>B: "Get Results in 5 Minutes"</p>
                      <p>C: "1000+ Ready-to-Use Prompts"</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-900 mb-2">Test 2: Visual Focus</h5>
                    <div className="text-sm text-purple-800 space-y-1">
                      <p>A: Product mockup (current)</p>
                      <p>B: Results/benefits visual</p>
                      <p>C: Before/after comparison</p>
                    </div>
                  </div>

                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h5 className="font-medium text-teal-900 mb-2">Test 3: CTA Buttons</h5>
                    <div className="text-sm text-teal-800 space-y-1">
                      <p>A: "Get Instant Access"</p>
                      <p>B: "Start Getting Results"</p>
                      <p>C: "Download Now"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Creative Performance Tracking</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.1%</div>
                  <p className="text-gray-600">Target CTR</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3.5%</div>
                  <p className="text-gray-600">Target CVR</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$12</div>
                  <p className="text-gray-600">Target CPA</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Launch Timeline */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Launch Timeline & Optimization
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Days 1-3: Launch & Monitor</h4>
                  <p className="text-sm text-gray-600">
                    Launch campaign, monitor for delivery issues, check initial metrics
                  </p>
                </div>
                <Badge className="bg-blue-500 text-white">Active</Badge>
              </div>

              <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Days 4-7: Initial Optimization</h4>
                  <p className="text-sm text-gray-600">
                    Analyze performance, pause underperforming ads, increase budget on winners
                  </p>
                </div>
                <Badge className="bg-yellow-500 text-white">Optimize</Badge>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Week 2+: Scale & Expand</h4>
                  <p className="text-sm text-gray-600">
                    Scale successful ads, test new audiences, create lookalike audiences
                  </p>
                </div>
                <Badge className="bg-green-500 text-white">Scale</Badge>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
