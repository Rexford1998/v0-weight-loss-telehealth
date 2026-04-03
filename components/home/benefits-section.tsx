'use client';

import { Zap, TrendingDown, Heart, Stethoscope } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'Some patients notice early changes within the first month; timelines vary by individual and clinical plan.'
    },
    {
      icon: Heart,
      title: 'Medically Supervised',
      description: 'Licensed doctors monitor your progress with regular check-ins and adjustments.'
    },
    {
      icon: TrendingDown,
      title: 'Sustainable Weight Loss',
      description: 'Designed for long-term success with lifestyle guidance and provider support.'
    },
    {
      icon: Stethoscope,
      title: 'Personalized Care',
      description: 'Treatment plans tailored to your health history, goals, and lifestyle.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose TrimPath Health?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Science-backed care with provider oversight at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={i}
                className="p-6 bg-white border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-xl">
          <p className="text-sm text-muted-foreground text-center">
            Results vary by individual. Any medication option is prescription-only and considered only after a provider evaluates your medical history.
          </p>
        </div>
      </div>
    </section>
  );
}
