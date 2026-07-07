import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TawkWidget } from "@/components/tawk-widget"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jenga Labs",
  description: "Building the onchain future",
  generator: "v0.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jenga-labs-icon-paj2cJyBDczl3acH1nK0oWAdhp6hcJ.png",
  },
  openGraph: {
    title: "Jenga Labs",
    description: "Building the onchain future",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jenga-labs-preview-rB7Kq6LrfP5rDNZEEVg08FdOqqtLVQ.png",
        alt: "Jenga Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenga Labs",
    description: "Building the onchain future",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jenga-labs-preview-rB7Kq6LrfP5rDNZEEVg08FdOqqtLVQ.png",
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <TawkWidget />
      </body>
    </html>
  )
}
