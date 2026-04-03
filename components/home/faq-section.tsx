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
      answer: 'GLP-1 medications are FDA-approved for weight loss and have been used safely for diabetes management for years. All treatments are prescribed by licensed doctors who review your health history and monitor your progress. Side effects are typically mild and manageable.'
    },
    {
      question: 'How long does the assessment take?',
      answer: 'The initial health assessment takes about 5 minutes to complete. After submission, your information is reviewed by a healthcare provider, and they\'ll schedule a consultation within 1-2 business days.'
    },
    {
      question: 'Will I need to take medication forever?',
      answer: 'Treatment duration varies by individual and is determined with your doctor. Some people use GLP-1 for a specific period, while others benefit from longer-term treatment. Your provider will discuss the best approach for your goals.'
    },
    {
      question: 'Does insurance cover this?',
      answer: 'Coverage varies by insurance plan and your specific diagnosis. Our team can help you understand your coverage. Many insurance plans do cover GLP-1 medications. We\'ll also explore options if your plan doesn\'t cover it.'
    },
    {
      question: 'What if I\'m not eligible?',
      answer: 'If you\'re not a candidate for GLP-1 treatment, our providers can discuss alternative options that might work for you or recommend other resources to support your wellness goals.'
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
            Find answers to common questions about GLP-1 treatment and our service
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
