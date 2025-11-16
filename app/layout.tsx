import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kintaraa.com'),
  title: 'Kintaraa - Empowering GBV Survivors Through Connected Care',
  description: 'Kintaraa connects GBV survivors with specialized service providers for comprehensive, coordinated support. Anonymous reporting, secure messaging, and mental health resources.',
  keywords: ['GBV support', 'gender-based violence', 'survivor support', 'coordinated care', 'mental health', 'anonymous reporting', 'service providers'],
  authors: [{ name: 'Kintaraa' }],
  openGraph: {
    title: 'Kintaraa - Empowering GBV Survivors',
    description: 'Connecting survivors with specialized service providers for comprehensive support',
    url: 'https://kintaraa.com',
    siteName: 'Kintaraa',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kintaraa - Empowering GBV Survivors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kintaraa - Empowering GBV Survivors',
    description: 'Connecting survivors with specialized service providers for comprehensive support',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  )
}
