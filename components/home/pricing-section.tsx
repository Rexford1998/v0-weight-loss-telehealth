'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function PricingSection() {
  const plans = [
    {
      name: 'Consultation',
      price: '$149',
      description: 'One-time doctor consultation',
      features: [
        'Initial health assessment',
        'Licensed provider consultation',
        'Eligibility determination',
        'No prescription guarantee',
        'Valid for 30 days'
      ],
      cta: 'Get Consultation',
      popular: false
    },
    {
      name: 'Treatment Plan',
      price: '$299',
      frequency: '/month',
      description: 'Ongoing supervised treatment',
      features: [
        'Everything in Consultation',
        'First month prescription',
        'Medication shipped to you',
        'Monthly check-ins',
        '24/7 provider support',
        'Dosage adjustments'
      ],
      cta: 'Start Treatment',
      popular: true
    },
    {
      name: 'Premium Support',
      price: '$399',
      frequency: '/month',
      description: 'Enhanced monitoring program',
      features: [
        'Everything in Treatment Plan',
        'Bi-weekly provider check-ins',
        'Lifestyle coaching calls',
        'Nutrition guidance',
        'Priority support',
        'Medication flexibility'
      ],
      cta: 'Get Premium',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-primary shadow-lg scale-105 md:scale-100'
                  : 'border border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-xs font-bold py-2 px-4 text-center">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.frequency && (
                    <span className="text-muted-foreground ml-2">{plan.frequency}</span>
                  )}
                </div>

                <Link href="/assessment" className="block mb-8">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Terms */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <p className="text-sm text-muted-foreground text-center">
            Pricing subject to change. Medications billed separately with insurance or out-of-pocket at pharmacy. No cancelation fees. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
