'use client';

import Link from 'next/link';
import { CheckCircle2, Clock, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Doctor-Led Online Weight Management Program
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl text-pretty">
              Get a provider-reviewed plan for weight management through a simple online consultation.
              Medication options, including GLP-1, are considered only after clinical evaluation.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Licensed Providers</p>
                  <p className="text-xs text-muted-foreground">Board-certified physicians</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">5-Minute Quiz</p>
                  <p className="text-xs text-muted-foreground">Quick eligibility check</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Ongoing Support</p>
                  <p className="text-xs text-muted-foreground">Continuous monitoring</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Start Free Assessment
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground mt-6">
              All treatments are subject to clinical review and provider approval.
            </p>
          </div>

          {/* Right Column - Card with Info */}
          <div>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    <Clock className="w-4 h-4" />
                    5 minutes
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Your Journey Starts Today</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete our assessment, speak with a doctor, and get started—all online.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    'Quick health assessment',
                    'Doctor consultation scheduled',
                    'Personalized treatment plan',
                    'Prescription if appropriate',
                    'Ongoing provider support'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-secondary">{i + 1}</span>
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Your data is encrypted and HIPAA-compliant. Your privacy is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
