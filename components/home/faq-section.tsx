'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'Is GLP-1 treatment safe?',
      answer: 'Certain GLP-1 medications are FDA-approved for weight management. A licensed provider will review your health history to determine if one is appropriate for you and will monitor your progress if prescribed.'
    },
    {
      question: 'How long does the assessment take?',
      answer: 'The initial health assessment takes about 5 minutes to complete. After submission, your information is reviewed by a healthcare provider, and they\'ll schedule a consultation within 1-2 business days.'
    },
    {
      question: 'Will I need to take medication forever?',
      answer: 'Duration depends on your goals and medical profile. Your provider will recommend a plan and timeline that fits your needs, and may adjust over time.'
    },
    {
      question: 'Does insurance cover this?',
      answer: 'Coverage depends on your insurer, diagnosis, and plan. We can help you ask informed questions, but your provider and insurer determine eligibility and coverage.'
    },
    {
      question: 'What if I\'m not eligible?',
      answer: 'If GLP-1 is not appropriate, your provider will discuss other evidence-based options and supportive resources that fit your health profile.'
    },
    {
      question: 'How often will I see my doctor?',
      answer: 'With our Treatment Plan, you have monthly check-ins with your provider. Our Premium Support includes bi-weekly check-ins plus lifestyle coaching. You can always reach out to your provider if you have concerns.'
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our provider-led weight management service
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help. Reach out anytime.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
