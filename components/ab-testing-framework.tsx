"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  Target,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Eye,
  MousePointer,
  Users,
  Clock,
  Settings,
  PlayCircle,
  PauseCircle,
  RotateCcw,
} from "lucide-react"

export function ABTestingFramework() {
  const [activeTab, setActiveTab] = useState("setup")
  const [testStatus, setTestStatus] = useState("planning") // planning, running, completed
  const [selectedMetrics, setSelectedMetrics] = useState(["ctr", "cpc", "cvr", "cpa", "roas"])

  const toggleMetric = (metric: string) => {
    setSelectedMetrics((prev) => (prev.includes(metric) ? prev.filter((m) => m !== metric) : [...prev, metric]))
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">A/B Testing Framework</h2>
        <p className="text-lg text-gray-600 mb-6">Systematic testing setup for Original vs. Optimized ad versions</p>

        {/* Test Status */}
        <div className="flex justify-center mb-6">
          <Badge
            className={`px-4 py-2 text-sm font-bold ${
              testStatus === "planning"
                ? "bg-yellow-500 text-white"
                : testStatus === "running"
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
            }`}
          >
            {testStatus === "planning" && "📋 Test Planning Phase"}
            {testStatus === "running" && "🚀 Test Currently Running"}
            {testStatus === "completed" && "✅ Test Completed"}
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="hypothesis">Hypothesis</TabsTrigger>
          <TabsTrigger value="configuration">Config</TabsTrigger>
          <TabsTrigger value="monitoring">Monitor</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        {/* Test Setup */}
        <TabsContent value="setup" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Test Setup & Variables
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Test Variants</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-blue-900">Variant A: Original</h5>
                      <Badge className="bg-blue-500 text-white">Control</Badge>
                    </div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• "Stop Wondering, Start Asking" headline</li>
                      <li>• Basic product features focus</li>
                      <li>• Simple pricing display</li>
                      <li>• "Get Instant Access" CTA</li>
                      <li>• Minimal social proof</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-green-900">Variant B: Optimized</h5>
                      <Badge className="bg-green-500 text-white">Treatment</Badge>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• "Stop Wondering, Start Earning" headline</li>
                      <li>• Outcome-focused benefits</li>
                      <li>• Urgency + value comparison</li>
                      <li>• "YES! Get My 1000+ Prompts Now" CTA</li>
                      <li>• Strong social proof + guarantees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Test Parameters</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium mb-2">Traffic Split</h5>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Variant A</span>
                          <span>50%</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Variant B</span>
                          <span>50%</span>
                        </div>
                        <Progress value={50} className="h-2 bg-green-200" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium mb-2">Test Duration</h5>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Minimum Duration:</p>
                        <p className="font-bold">7 days</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Maximum Duration:</p>
                        <p className="font-bold">14 days</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Sample Size Goal:</p>
                        <p className="font-bold">1,000+ conversions</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Confidence Level:</p>
                        <p className="font-bold">95%</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h5 className="font-medium text-yellow-900 mb-2">Success Criteria</h5>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Statistical significance reached (p &lt; 0.05)</li>
                      <li>• Minimum 20% improvement in primary metric</li>
                      <li>• No significant decrease in secondary metrics</li>
                      <li>• Consistent results across audience segments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Hypothesis */}
        <TabsContent value="hypothesis" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Test Hypothesis & Predictions
            </h3>

            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-3">Primary Hypothesis</h4>
                <p className="text-blue-800 mb-4">
                  <strong>We believe</strong> that the conversion-optimized ad version with outcome-focused messaging,
                  social proof, urgency elements, and risk reversal{" "}
                  <strong>will increase conversion rates by at least 50%</strong> compared to the original version{" "}
                  <strong>because</strong> it addresses key psychological triggers that drive purchase decisions for
                  strangers encountering the product for the first time.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-medium mb-2">Expected Improvements:</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Conversion Rate:</p>
                      <p className="font-bold text-green-600">+50% to +100%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Click-Through Rate:</p>
                      <p className="font-bold text-green-600">+30% to +60%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Cost Per Acquisition:</p>
                      <p className="font-bold text-green-600">-25% to -40%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Return on Ad Spend:</p>
                      <p className="font-bold text-green-600">+75% to +150%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">Supporting Hypotheses</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>
                      <strong>H1:</strong> "Start Earning" will outperform "Start Asking" because it shows clear
                      financial benefit
                    </li>
                    <li>
                      <strong>H2:</strong> Social proof (2,847+ customers) will increase trust and conversions
                    </li>
                    <li>
                      <strong>H3:</strong> Urgency elements will create FOMO and drive immediate action
                    </li>
                    <li>
                      <strong>H4:</strong> Money-back guarantee will reduce purchase anxiety
                    </li>
                    <li>
                      <strong>H5:</strong> Specific results (300% engagement) will be more compelling than generic
                      features
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-3">Potential Risks</h4>
                  <ul className="space-y-2 text-sm text-orange-800">
                    <li>
                      <strong>Risk 1:</strong> Urgency elements might appear too "salesy" and reduce trust
                    </li>
                    <li>
                      <strong>Risk 2:</strong> Higher expectations from outcome-focused messaging might increase refund
                      rates
                    </li>
                    <li>
                      <strong>Risk 3:</strong> More complex design might not perform well on mobile
                    </li>
                    <li>
                      <strong>Risk 4:</strong> Audience fatigue from more aggressive messaging
                    </li>
                  </ul>
                  <div className="mt-3 p-3 bg-white rounded">
                    <p className="text-xs text-gray-600">
                      <strong>Mitigation:</strong> Monitor secondary metrics closely and have rollback plan ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Configuration */}
        <TabsContent value="configuration" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Facebook Ads Manager Configuration
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Campaign Structure</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-900 mb-2">Campaign Level</h5>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Name:</strong> ChatGPT Prompts - A/B Test - Original vs Optimized
                      </p>
                      <p>
                        <strong>Objective:</strong> Conversions
                      </p>
                      <p>
                        <strong>Budget:</strong> $100/day total
                      </p>
                      <p>
                        <strong>Campaign Budget Optimization:</strong> Enabled
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-green-900 mb-2">Ad Set Configuration</h5>
                    <div className="text-sm space-y-2">
                      <div>
                        <p>
                          <strong>Ad Set A (Original):</strong>
                        </p>
                        <p className="ml-4">• Same audience targeting</p>
                        <p className="ml-4">• Same placements</p>
                        <p className="ml-4">• 50% budget allocation</p>
                      </div>
                      <div>
                        <p>
                          <strong>Ad Set B (Optimized):</strong>
                        </p>
                        <p className="ml-4">• Identical targeting to A</p>
                        <p className="ml-4">• Same placements as A</p>
                        <p className="ml-4">• 50% budget allocation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tracking Setup</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-900 mb-2">Facebook Pixel Events</h5>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>✓ PageView (landing page visits)</li>
                      <li>✓ ViewContent (product page views)</li>
                      <li>✓ InitiateCheckout (checkout starts)</li>
                      <li>✓ Purchase (completed sales)</li>
                      <li>✓ Custom: DownloadStart (button clicks)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-medium text-yellow-900 mb-2">UTM Parameters</h5>
                    <div className="text-sm text-yellow-800 space-y-1">
                      <p>
                        <strong>Variant A:</strong>
                      </p>
                      <p className="font-mono text-xs bg-white p-2 rounded">
                        utm_campaign=chatgpt_prompts_ab_test
                        <br />
                        utm_source=facebook
                        <br />
                        utm_medium=paid_social
                        <br />
                        utm_content=original_ad
                      </p>
                      <p>
                        <strong>Variant B:</strong>
                      </p>
                      <p className="font-mono text-xs bg-white p-2 rounded">
                        utm_campaign=chatgpt_prompts_ab_test
                        <br />
                        utm_source=facebook
                        <br />
                        utm_medium=paid_social
                        <br />
                        utm_content=optimized_ad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Key Metrics to Track</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "ctr", name: "Click-Through Rate", icon: MousePointer },
                  { id: "cpc", name: "Cost Per Click", icon: DollarSign },
                  { id: "cvr", name: "Conversion Rate", icon: TrendingUp },
                  { id: "cpa", name: "Cost Per Acquisition", icon: Target },
                  { id: "roas", name: "Return on Ad Spend", icon: BarChart3 },
                  { id: "frequency", name: "Ad Frequency", icon: Eye },
                  { id: "relevance", name: "Relevance Score", icon: CheckCircle },
                  { id: "engagement", name: "Engagement Rate", icon: Users },
                ].map((metric) => (
                  <div
                    key={metric.id}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedMetrics.includes(metric.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() => toggleMetric(metric.id)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <metric.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{metric.name}</span>
                    </div>
                    {selectedMetrics.includes(metric.id) && <CheckCircle className="w-4 h-4 text-blue-500" />}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Monitoring */}
        <TabsContent value="monitoring" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Real-Time Monitoring Dashboard
            </h3>

            {/* Test Controls */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <Button
                onClick={() => setTestStatus("running")}
                className="bg-green-500 hover:bg-green-600"
                disabled={testStatus === "running"}
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Start Test
              </Button>
              <Button onClick={() => setTestStatus("planning")} variant="outline" disabled={testStatus !== "running"}>
                <PauseCircle className="w-4 h-4 mr-2" />
                Pause Test
              </Button>
              <Button variant="outline" disabled={testStatus !== "running"}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Test
              </Button>
              <div className="ml-auto flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{testStatus === "running" ? "Day 3 of 14" : "Test Not Started"}</span>
              </div>
            </div>

            {/* Live Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Variant A: Original</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{testStatus === "running" ? "1.8%" : "0%"}</p>
                      <p className="text-sm text-gray-600">CTR</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{testStatus === "running" ? "$0.85" : "$0"}</p>
                      <p className="text-sm text-gray-600">CPC</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{testStatus === "running" ? "2.1%" : "0%"}</p>
                      <p className="text-sm text-gray-600">CVR</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{testStatus === "running" ? "$18.50" : "$0"}</p>
                      <p className="text-sm text-gray-600">CPA</p>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Sample Size Progress</span>
                      <span className="text-sm">{testStatus === "running" ? "127/500" : "0/500"}</span>
                    </div>
                    <Progress value={testStatus === "running" ? 25 : 0} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Variant B: Optimized</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{testStatus === "running" ? "2.4%" : "0%"}</p>
                      <p className="text-sm text-gray-600">CTR</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{testStatus === "running" ? "$0.72" : "$0"}</p>
                      <p className="text-sm text-gray-600">CPC</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{testStatus === "running" ? "3.8%" : "0%"}</p>
                      <p className="text-sm text-gray-600">CVR</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{testStatus === "running" ? "$12.20" : "$0"}</p>
                      <p className="text-sm text-gray-600">CPA</p>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Sample Size Progress</span>
                      <span className="text-sm">{testStatus === "running" ? "189/500" : "0/500"}</span>
                    </div>
                    <Progress value={testStatus === "running" ? 38 : 0} className="h-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Early Indicators */}
            {testStatus === "running" && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Early Performance Indicators
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-yellow-900">CTR Improvement:</p>
                    <p className="text-green-600 font-bold">+33% (Optimized leading)</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">CPA Improvement:</p>
                    <p className="text-green-600 font-bold">-34% (Optimized better)</p>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">Statistical Significance:</p>
                    <p className="text-orange-600 font-bold">Not yet reached</p>
                  </div>
                </div>
                <p className="text-xs text-yellow-800 mt-2">
                  ⚠️ Results are preliminary. Wait for statistical significance before making decisions.
                </p>
              </div>
            )}
          </Card>
        </TabsContent>

        {/* Results */}
        <TabsContent value="results" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Test Results & Statistical Analysis
            </h3>

            {testStatus !== "completed" ? (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-600 mb-2">Test In Progress</h4>
                <p className="text-gray-500">
                  Results will be available once the test reaches statistical significance
                </p>
                <Button onClick={() => setTestStatus("completed")} className="mt-4" variant="outline">
                  Simulate Completed Test
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Winner Declaration */}
                <div className="p-6 bg-green-50 rounded-lg border-2 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <h4 className="text-xl font-bold text-green-900">Test Winner: Optimized Version</h4>
                      <p className="text-green-700">Statistical significance reached with 95% confidence level</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">+67%</p>
                      <p className="text-sm text-green-700">Conversion Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">+41%</p>
                      <p className="text-sm text-green-700">Click-Through Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">-38%</p>
                      <p className="text-sm text-green-700">Cost Per Acquisition</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">+124%</p>
                      <p className="text-sm text-green-700">Return on Ad Spend</p>
                    </div>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Final Performance Metrics</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Metric</th>
                            <th className="text-center py-2">Original</th>
                            <th className="text-center py-2">Optimized</th>
                            <th className="text-center py-2">Improvement</th>
                          </tr>
                        </thead>
                        <tbody className="space-y-2">
                          <tr className="border-b">
                            <td className="py-2">Impressions</td>
                            <td className="text-center">45,230</td>
                            <td className="text-center">44,890</td>
                            <td className="text-center text-gray-500">-0.8%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Clicks</td>
                            <td className="text-center">814</td>
                            <td className="text-center">1,147</td>
                            <td className="text-center text-green-600">+40.9%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">CTR</td>
                            <td className="text-center">1.8%</td>
                            <td className="text-center">2.56%</td>
                            <td className="text-center text-green-600">+42.2%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">CPC</td>
                            <td className="text-center">$0.85</td>
                            <td className="text-center">$0.72</td>
                            <td className="text-center text-green-600">-15.3%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Conversions</td>
                            <td className="text-center">17</td>
                            <td className="text-center">44</td>
                            <td className="text-center text-green-600">+158.8%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">CVR</td>
                            <td className="text-center">2.09%</td>
                            <td className="text-center">3.84%</td>
                            <td className="text-center text-green-600">+83.7%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">CPA</td>
                            <td className="text-center">$18.50</td>
                            <td className="text-center">$11.45</td>
                            <td className="text-center text-green-600">-38.1%</td>
                          </tr>
                          <tr>
                            <td className="py-2">ROAS</td>
                            <td className="text-center">1.62x</td>
                            <td className="text-center">2.62x</td>
                            <td className="text-center text-green-600">+61.7%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Statistical Significance</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h5 className="font-medium text-green-900 mb-2">Primary Metric: Conversion Rate</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>P-value:</span>
                            <span className="font-bold">0.003</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Confidence Level:</span>
                            <span className="font-bold">99.7%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Statistical Power:</span>
                            <span className="font-bold">94.2%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sample Size:</span>
                            <span className="font-bold">1,961 total</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-900 mb-2">Secondary Metrics</h5>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>CTR Significance:</span>
                            <span className="font-bold text-green-600">✓ Significant</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CPC Significance:</span>
                            <span className="font-bold text-green-600">✓ Significant</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Engagement Rate:</span>
                            <span className="font-bold text-green-600">✓ Significant</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h5 className="font-medium text-yellow-900 mb-2">Recommendation</h5>
                        <p className="text-sm text-yellow-800">
                          <strong>Implement the optimized version immediately.</strong> The results show statistically
                          significant improvements across all key metrics with high confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </TabsContent>

        {/* Insights */}
        <TabsContent value="insights" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Key Insights & Next Steps
            </h3>

            <div className="space-y-6">
              {/* Key Learnings */}
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">🎯 Key Learnings</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">What Worked:</h5>
                    <ul className="text-sm space-y-1">
                      <li>✅ Outcome-focused headlines (+67% CVR impact)</li>
                      <li>✅ Social proof elements (+2,847 customers)</li>
                      <li>✅ Urgency/scarcity messaging</li>
                      <li>✅ Risk reversal (money-back guarantee)</li>
                      <li>✅ Specific benefit claims (300% engagement)</li>
                      <li>✅ Value comparison ($670 vs $29.99)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Surprising Findings:</h5>
                    <ul className="text-sm space-y-1">
                      <li>🔍 Mobile performance was 23% better than expected</li>
                      <li>🔍 Older demographics (45-55) responded best</li>
                      <li>🔍 Weekend performance was 31% higher</li>
                      <li>🔍 Instagram placement outperformed Facebook</li>
                      <li>🔍 CPC decreased despite higher CTR</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Audience Insights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">👥 Audience Insights</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Best Performing Segments:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Small business owners (45-55)</li>
                        <li>• Marketing managers (35-45)</li>
                        <li>• Content creators (25-35)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Geographic Performance:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• US: +89% CVR improvement</li>
                        <li>• Canada: +72% CVR improvement</li>
                        <li>• UK: +45% CVR improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-3">📱 Platform Insights</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Device Performance:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Mobile: +78% CVR improvement</li>
                        <li>• Desktop: +52% CVR improvement</li>
                        <li>• Tablet: +34% CVR improvement</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Placement Performance:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Instagram Feed: +91% CVR</li>
                        <li>• Facebook Feed: +67% CVR</li>
                        <li>• Stories: +23% CVR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Plan */}
              <div className="p-6 bg-yellow-50 rounded-lg border-2 border-yellow-400">
                <h4 className="font-semibold text-yellow-900 mb-4">🚀 Immediate Action Plan</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Phase 1: Implementation (Week 1)</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ Pause original ad version</li>
                      <li>✓ Scale optimized version to full budget</li>
                      <li>✓ Update all existing campaigns with new creative</li>
                      <li>✓ Create mobile-optimized versions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Phase 2: Optimization (Week 2-3)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Test additional urgency variations</li>
                      <li>• Create audience-specific versions</li>
                      <li>• Expand to high-performing placements</li>
                      <li>• Develop retargeting sequences</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Future Testing */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">🔬 Future Testing Opportunities</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Creative Tests:</h5>
                    <ul className="space-y-1">
                      <li>• Video vs static versions</li>
                      <li>• Different urgency timeframes</li>
                      <li>• Alternative social proof numbers</li>
                      <li>• Seasonal messaging variations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Audience Tests:</h5>
                    <ul className="space-y-1">
                      <li>• Lookalike audience expansion</li>
                      <li>• Interest stacking combinations</li>
                      <li>• Behavioral targeting refinement</li>
                      <li>• Custom audience segments</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Landing Page Tests:</h5>
                    <ul className="space-y-1">
                      <li>• Message match optimization</li>
                      <li>• Checkout flow improvements</li>
                      <li>• Trust signal placement</li>
                      <li>• Mobile experience enhancement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
