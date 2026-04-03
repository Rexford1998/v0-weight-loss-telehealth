'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function BookingCard() {
  return (
    <div className="space-y-8">
      {/* Consultation Type */}
      <Card className="p-8 rounded-xl border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">Book Your Consultation</h2>
        <p className="text-muted-foreground mb-6">
          Your initial consultation with a licensed healthcare provider
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-lg p-6 bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Video Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with a licensed doctor about your weight loss goals and medical history.
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Duration:</span> 20-30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* What's Included */}
      <Card className="p-8 rounded-xl border border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">What&apos;s Included</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-secondary font-bold">✓</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Medical Evaluation</p>
              <p className="text-sm text-muted-foreground">Review of your health history and goals</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-secondary font-bold">✓</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Eligibility Assessment</p>
              <p className="text-sm text-muted-foreground">Determine if GLP-1 is right for you</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-secondary font-bold">✓</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Personalized Plan</p>
              <p className="text-sm text-muted-foreground">Customized treatment approach if appropriate</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-secondary font-bold">✓</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Follow-Up Support</p>
              <p className="text-sm text-muted-foreground">Ongoing care and provider guidance</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Availability */}
      <Card className="p-8 rounded-xl border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Available Times
        </h3>
        <p className="text-muted-foreground mb-6">
          Select a time that works best for you. Consultations are available 7 days a week.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map(
            (time) => (
              <button
                key={time}
                className="px-4 py-3 border border-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors text-sm font-medium"
              >
                {time}
              </button>
            )
          )}
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <Clock className="w-4 h-4 inline mr-2" />
            All times are in your local timezone
          </p>
        </div>
      </Card>

      {/* Provider Info */}
      <Card className="p-8 rounded-xl border border-primary/20 bg-primary/5">
        <h3 className="text-xl font-bold text-foreground mb-4">Your Provider</h3>
        <p className="text-muted-foreground mb-6">
          You&apos;ll be matched with a qualified healthcare provider who specializes in weight management and GLP-1 treatment.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
          <li>• Licensed Medical Doctor (MD or DO)</li>
          <li>• Experience with GLP-1 treatments</li>
          <li>• Compassionate, judgment-free care</li>
          <li>• Dedicated to your long-term success</li>
        </ul>
      </Card>

      {/* CTA */}
      <div className="flex flex-col gap-4">
        <Button className="w-full h-12 text-base bg-secondary hover:bg-secondary/90 rounded-lg">
          Book Consultation Now
        </Button>
        <Link href="/contact">
          <Button variant="outline" className="w-full h-12 text-base rounded-lg">
            Have Questions? Contact Us
          </Button>
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="p-6 bg-muted rounded-lg">
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          Consultation time is subject to availability. You&apos;ll receive a confirmation email with your appointment details. If you need to reschedule, please contact us at least 24 hours in advance.
        </p>
      </div>
    </div>
  );
}
