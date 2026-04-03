import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://trimpath.health'),
  title: {
    default: 'TrimPath Health | GLP-1 Weight Loss Telehealth',
    template: '%s | TrimPath Health',
  },
  description:
    'Get doctor-reviewed GLP-1 prescription for weight loss through a simple online consultation. Licensed providers, personalized treatment plans, and ongoing support.',
  keywords: [
    'GLP-1 weight loss',
    'semaglutide online',
    'telehealth weight loss',
    'prescription weight loss',
    'weight loss injections',
    'ozempic alternative',
    'online doctor consultation',
    'weight loss medication',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trimpath.health',
    siteName: 'TrimPath Health',
    title: 'TrimPath Health | GLP-1 Weight Loss Telehealth',
    description:
      'Get doctor-reviewed GLP-1 prescription for weight loss through a simple online consultation.',
    images: [
      {
        url: 'https://trimpath.health/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrimPath Health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrimPath Health | GLP-1 Weight Loss Telehealth',
    description:
      'Get doctor-reviewed GLP-1 prescription for weight loss through a simple online consultation.',
    creator: '@trimpath',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'TrimPath Health',
    description:
      'Telehealth weight loss consultation and GLP-1 prescription service',
    url: 'https://trimpath.health',
    telephone: '(833) 587-2737',
    email: 'support@trimpath.health',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    medicalSpecialty: 'Bariatric Medicine',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TrimPath Health',
    url: 'https://trimpath.health',
    logo: 'https://trimpath.health/icon.svg',
    sameAs: [
      'https://www.facebook.com/trimpath',
      'https://www.instagram.com/trimpath',
      'https://www.linkedin.com/company/trimpath',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(833) 587-2737',
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17983741103"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17983741103');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
