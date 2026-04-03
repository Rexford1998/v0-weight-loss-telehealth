import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { BenefitsSection } from '@/components/home/benefits-section';
import { HowItWorksSection } from '@/components/home/how-it-works';
import { TestimonialCards } from '@/components/home/testimonial-cards';
import { PricingSection } from '@/components/home/pricing-section';
import { FAQSection } from '@/components/home/faq-section';

export const metadata: Metadata = {
  title: 'Telehealth Weight Loss with GLP-1 | TrimPath Health',
  description:
    'Get a doctor-reviewed GLP-1 prescription for weight loss in minutes. Simple online consultation with licensed physicians. Free assessment, no commitment required.',
  keywords: [
    'GLP-1 weight loss',
    'semaglutide online',
    'telehealth weight loss',
    'online weight loss doctor',
    'GLP-1 prescription online',
    'weight loss consultation',
  ],
  openGraph: {
    title: 'Telehealth Weight Loss with GLP-1 | TrimPath Health',
    description:
      'Get a doctor-reviewed GLP-1 prescription for weight loss. Free assessment with no commitment.',
    type: 'website',
  },
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is GLP-1 right for me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GLP-1 medications help with weight loss by reducing hunger and appetite. Our free assessment determines if you are a good candidate based on your health history, weight, and goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the assessment take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The eligibility assessment takes about 5 minutes to complete. A licensed provider will review your responses and contact you within 1-2 business days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data HIPAA compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All patient information is encrypted and handled with full HIPAA compliance. Your privacy is our top priority.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The consultation is completely free. If prescribed, medication costs are determined at the pharmacy and may be covered by insurance.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialCards />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
