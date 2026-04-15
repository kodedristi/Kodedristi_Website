import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Toaster } from 'sonner';
import { PageLoader } from '@/components/PageLoader';

export const metadata: Metadata = {
  title: 'Kodedristi | Architecting the Future of Code',
  description: 'Enterprise-grade software architecture and digital engineering solutions. Cloud infrastructure, AI integration, cybersecurity, and custom software development.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicon.ico', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon.ico', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <PageLoader>
          <div className="bg-background text-foreground overflow-x-clip">
            <Navigation />
            <Sidebar />
            <SmoothScroll>
              {children}
            </SmoothScroll>
            <Footer />
          </div>
        </PageLoader>
        <Toaster position="bottom-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

