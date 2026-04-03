'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Shield, Clock, User } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Free Initial Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your weight loss journey with a free assessment and doctor consultation. No credit card required.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-secondary rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Free Consultation</h3>
              <p className="text-secondary/90">Your path to better health starts here</p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Licensed Providers</h4>
                    <p className="text-sm text-muted-foreground">
                      Board-certified physicians review your case and provide personalized recommendations
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quick Process</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete your assessment in 5 minutes. Provider review within 1-2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">No Commitment</h4>
                    <p className="text-sm text-muted-foreground">
                      Get your consultation results. Only proceed if you&apos;re a good candidate for treatment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">What&apos;s included:</span> Health assessment, medical history review, eligibility evaluation, and personalized provider consultation to discuss GLP-1 treatment options for weight loss.
                </p>
              </div>

              <Link href="/assessment" className="block">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-base font-semibold">
                  Start Your Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-6">
                ✓ HIPAA Compliant  ✓ 100% Confidential  ✓ Licensed Medical Team
              </p>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Ready to take the first step? <Link href="/assessment" className="text-primary font-semibold hover:underline">Start your free consultation today</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
