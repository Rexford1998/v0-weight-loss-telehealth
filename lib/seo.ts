import { Metadata } from 'next';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export function generateMetadata(seo: SEOMetadata): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(', '),
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: (seo.ogType as any) || 'website',
      url: seo.canonicalUrl,
      images: seo.ogImage ? [{ url: seo.ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
    robots: seo.noindex ? 'noindex' : 'index, follow',
    canonical: seo.canonicalUrl,
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(data: {
  headline: string;
  description: string;
  image?: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    author: {
      '@type': 'Organization',
      name: data.author || 'TrimPath Health',
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
  };
}

export function generateMedicalBusinessSchema() {
  return {
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
    sameAs: [
      'https://facebook.com/trimpath',
      'https://twitter.com/trimpath',
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
