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
    default: 'TrimPath Health | Doctor-Led Weight Management Consultations',
    template: '%s | TrimPath Health',
  },
  description:
    'Online consultations with licensed providers for weight management. Treatment options, including GLP-1, are discussed only if clinically appropriate after evaluation.',
  keywords: [
    'doctor-led weight management',
    'telehealth weight loss consultation',
    'provider reviewed treatment',
    'medically appropriate care',
    'online health assessment',
    'clinical weight management program',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trimpath.health',
    siteName: 'TrimPath Health',
    title: 'TrimPath Health | Doctor-Led Weight Management Consultations',
    description:
      'Online consultation with licensed providers for weight management; treatment options discussed only if clinically appropriate.',
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
    title: 'TrimPath Health | Doctor-Led Weight Management Consultations',
    description:
      'Online consultation with licensed providers; treatment options considered only when appropriate.',
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
            gtag('set', 'allow_ad_personalization_signals', false);
            gtag('config', 'AW-17983741103', { allow_ad_personalization_signals: false });
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
