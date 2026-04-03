'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ResultsSummary() {
  const [assessmentData, setAssessmentData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('assessmentData');
    if (data) {
      setAssessmentData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="space-y-8">
      {/* Success Banner */}
      <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 p-8 rounded-xl">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Assessment Complete!</h2>
            <p className="text-muted-foreground">
              {assessmentData?.firstName ? (
                <>
                  Thank you, <strong>{assessmentData.firstName}</strong>! Your eligibility assessment has been received.
                </>
              ) : (
                'Your eligibility assessment has been received.'
              )}
            </p>
          </div>
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-8 rounded-xl border border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">What Happens Next?</h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">Review & Eligibility Check</p>
              <p className="text-sm text-muted-foreground">
                A healthcare provider will review your assessment within 1-2 business days.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">Schedule Consultation</p>
              <p className="text-sm text-muted-foreground">
                We&apos;ll contact you to schedule your video consultation with a doctor.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">Medical Evaluation</p>
              <p className="text-sm text-muted-foreground">
                Speak with a licensed provider about your goals and medical history.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              4
            </div>
            <div>
              <p className="font-semibold text-foreground">Prescription & Support</p>
              <p className="text-sm text-muted-foreground">
                If medically appropriate, receive your prescription and begin ongoing support.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* What to Prepare */}
      <Card className="p-8 rounded-xl border border-border bg-secondary/5">
        <h3 className="text-xl font-bold text-foreground mb-4">Prepare for Your Consultation</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3 items-start">
            <span className="text-secondary font-bold">✓</span>
            <span>Have your current medications list ready</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-secondary font-bold">✓</span>
            <span>Know your health history and any past surgeries</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-secondary font-bold">✓</span>
            <span>Have your insurance card available (optional but helpful)</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-secondary font-bold">✓</span>
            <span>Prepare questions for your healthcare provider</span>
          </li>
        </ul>
      </Card>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 rounded-xl border border-border text-center">
          <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-2">Wait Time</p>
          <p className="font-semibold text-foreground">1-2 Business Days</p>
        </Card>
        <Card className="p-6 rounded-xl border border-border text-center">
          <Users className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-2">Next Step</p>
          <p className="font-semibold text-foreground">Doctor Contact</p>
        </Card>
        <Card className="p-6 rounded-xl border border-border text-center">
          <div className="w-8 h-8 text-primary mx-auto mb-3 text-lg font-bold">?</div>
          <p className="text-sm text-muted-foreground mb-2">Questions?</p>
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact Us
          </Link>
        </Card>
      </div>

      {/* CTA */}
      <Card className="p-8 rounded-xl bg-primary/5 border border-primary/20">
        <h3 className="text-xl font-bold text-foreground mb-4">Want to Learn More?</h3>
        <p className="text-muted-foreground mb-6">
          While you wait for your consultation, check out our resources about GLP-1 treatment and weight loss.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/#faq" className="flex-1">
            <Button variant="outline" className="w-full">
              Read FAQ
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Back to Home
            </Button>
          </Link>
        </div>
      </Card>

      {/* Disclaimer */}
      <div className="p-6 bg-muted rounded-lg">
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Clinical Disclaimer:</strong> All treatments are subject to clinical review and provider approval. This assessment does not guarantee prescription or enrollment. A licensed healthcare provider will determine eligibility based on medical evaluation. Results vary by individual.
        </p>
      </div>
    </div>
  );
}
