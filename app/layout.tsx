import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AllTripp - One Solution For All Your Travel Needs",
    template: "%s | AllTripp"
  },
  description: "Discover India's hidden gems with AllTripp - your premium travel partner. From Kashmir to Kerala, Rajasthan to Northeast, explore authentic experiences, cultural tours, adventure trips, and customized packages across incredible India.",
  keywords: [
    "travel agency India",
    "India tour packages",
    "travel experiences India",
    "cultural tours India",
    "adventure travel India",
    "Kashmir tours",
    "Kerala backwaters",
    "Rajasthan travel",
    "Himachal Pradesh trips",
    "Northeast India tours",
    "Goa packages",
    "Delhi tours",
    "travel booking India",
    "holiday packages India",
    "travel company India"
  ],
  authors: [{ name: "AllTripp Travel" }],
  creator: "AllTripp",
  publisher: "AllTripp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alltripp.com'),  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alltripp.com",
    title: "AllTripp - Premium Travel Experiences Across India",
    description: "Discover India's hidden gems with AllTripp. Authentic travel experiences, cultural tours, and adventure trips across incredible India.",
    siteName: "AllTripp",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "AllTripp - Travel Agency India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllTripp - Premium Travel Experiences Across India",
    description: "Discover India's hidden gems with AllTripp. Authentic travel experiences, cultural tours, and adventure trips.",
    images: ["/favicon.ico"],
    creator: "@AllTripp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "AllTripp",
              "description": "Premium travel experiences across India",
              "url": "https://alltripp.com",
              "logo": "https://alltripp.com/favicon.ico",
              "sameAs": [
                "https://facebook.com/alltripp",
                "https://instagram.com/alltripp",
                "https://twitter.com/alltripp"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": [
                "Travel Planning",
                "Tour Packages",
                "Cultural Tours",
                "Adventure Travel",
                "Holiday Packages"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
