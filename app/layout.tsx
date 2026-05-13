import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Toaster } from 'sonner';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://kodedristi.com'), // Adjust URL to the actual domain if necessary, assuming kodedristi.com
  title: {
    default: 'Kodedristi | Architecting the Future of Code',
    template: '%s | Kodedristi',
  },
  description: 'Enterprise-grade software architecture and digital engineering solutions. Cloud infrastructure, AI integration, cybersecurity, and custom software development.',
  keywords: ['Software Architecture', 'Digital Engineering', 'Cloud Infrastructure', 'AI Integration', 'Cybersecurity', 'Custom Software Development', 'App Development', 'Web Development', 'SaaS', 'Nepal'],
  authors: [{ name: 'Kodedristi' }],
  creator: 'Kodedristi',
  publisher: 'Kodedristi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kodedristi | Architecting the Future of Code',
    description: 'Enterprise-grade software architecture and digital engineering solutions. Cloud infrastructure, AI integration, cybersecurity, and custom software development.',
    url: 'https://kodedristi.com',
    siteName: 'Kodedristi',
    images: [
      {
        url: '/Logo.png', // Fallback to Logo since OG image might not exist
        width: 1200,
        height: 630,
        alt: 'Kodedristi - Architecting the Future of Code',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodedristi | Architecting the Future of Code',
    description: 'Enterprise-grade software architecture and digital engineering solutions.',
    images: ['/Logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased font-sans`}>

        <div className="bg-background text-foreground overflow-x-clip">
          <Navigation />
          <Sidebar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Footer />
        </div>
        <Toaster position="bottom-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

