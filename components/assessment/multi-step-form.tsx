'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressBar } from './progress-bar';
import { FormStep1 } from './form-step-1';
import { FormStep2 } from './form-step-2';
import { FormStep3 } from './form-step-3';
import { FormStep4 } from './form-step-4';
import { FormStep5 } from './form-step-5';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export interface AssessmentData {
  // Step 1
  age?: string;
  sex?: string;
  heightFeet?: string;
  heightInches?: string;
  height?: string;
  weight?: string;
  // Step 2
  goalWeight?: string;
  timeline?: string;
  motivation?: string;
  goal?: string;
  timeframe?: string;
  // Step 3
  conditions?: string[];
  medications?: string;
  pancreatitis?: string;
  pregnancy?: string;
  hasType2Diabetes?: boolean;
  familyHistoryObesity?: boolean;
  // Step 4
  exercise?: string;
  diet?: string;
  sleep?: string;
  stress?: string;
  exerciseFrequency?: string;
  dietType?: string;
  // Step 5
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  state?: string;
  consent?: boolean;
}

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AssessmentData>({});
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const updateData = (newData: Partial<AssessmentData>) => {
    setData({ ...data, ...newData });
  };

  const goToNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Validate required fields
      if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.consent) {
        toast.error('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit assessment');
      }

      // Store data in session storage for results page
      sessionStorage.setItem('assessmentData', JSON.stringify(data));
      toast.success('Assessment submitted successfully!');
      setShowResults(true);
    } catch (error) {
      console.error('Assessment submission error:', error);
      toast.error('Failed to submit assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showResults) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Assessment Complete!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for providing your information. A healthcare provider will review your responses and contact you within 1-2 business days to schedule your consultation.
          </p>
          <Link href="/results">
            <Button className="w-full bg-primary hover:bg-primary/90 mb-3">
              View Results
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Return Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-card to-white px-4 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Eligibility Assessment
          </h1>
          <p className="text-muted-foreground">
            Help us understand if GLP-1 treatment is right for you
          </p>
        </div>

        <Card className="p-8 sm:p-10 rounded-xl">
          <ProgressBar currentStep={step} totalSteps={totalSteps} />

          <div className="mt-10 min-h-96">
            {step === 1 && <FormStep1 data={data} onChange={updateData} />}
            {step === 2 && <FormStep2 data={data} onChange={updateData} />}
            {step === 3 && <FormStep3 data={data} onChange={updateData} />}
            {step === 4 && <FormStep4 data={data} onChange={updateData} />}
            {step === 5 && <FormStep5 data={data} onChange={updateData} />}
          </div>

          <div className="mt-12 flex gap-4 justify-between">
            <Button
              onClick={goToPreviousStep}
              variant="outline"
              disabled={step === 1 || isSubmitting}
              className="flex-1"
            >
              Back
            </Button>
            {step < totalSteps ? (
              <Button
                onClick={goToNextStep}
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-secondary hover:bg-secondary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Assessment'
                )}
              </Button>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Your information is encrypted and handled with HIPAA compliance.
          </p>
        </Card>
      </div>
    </div>
  );
}
