'use client';

import { CheckCircle2, MessageSquare, Pill, TrendingUp } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: CheckCircle2,
      title: 'Assessment',
      description: 'Answer 5 minutes of health questions to check your eligibility for treatment.'
    },
    {
      icon: MessageSquare,
      title: 'Doctor Consultation',
      description: 'Have a confidential video consultation with a licensed healthcare provider.'
    },
    {
      icon: Pill,
      title: 'Prescription',
      description: 'If medically appropriate, receive your personalized prescription and guidance.'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Support',
      description: 'Regular check-ins with your provider to monitor progress and adjust as needed.'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From assessment to treatment in just a few steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                )}

                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 mx-auto">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-0 lg:relative lg:top-auto lg:right-auto w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
