import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Beginner Mode - Start Using AI Today",
  description:
    "Don't learn AI, use AI. Get instant access to 1000+ proven ChatGPT prompts and start using AI without any technical knowledge or training.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/aibeginnermode-site-icon.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AI Beginner Mode",
    startupImage: [
      {
        url: "/aibeginnermode-site-icon.jpg",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },
  openGraph: {
    title: "AI Beginner Mode - Start Using AI Today",
    description: "Don't learn AI, use AI. Get instant access to 1000+ proven ChatGPT prompts.",
    images: ["/aibeginnermode-site-icon.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Beginner Mode - Start Using AI Today",
    description: "Don't learn AI, use AI. Get instant access to 1000+ proven ChatGPT prompts.",
    images: ["/aibeginnermode-site-icon.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aibeginnermode-site-icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Beginner Mode" />
      </head>
      <body>{children}</body>
    </html>
  )
}
