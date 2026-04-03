import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the TrimPath Health website and telehealth services, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Medical Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TrimPath Health connects you with licensed healthcare providers for telehealth consultations. Our service
              is not a substitute for professional medical advice, diagnosis, or treatment. All treatments are subject
              to clinical review and provider approval.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• GLP-1 medications are prescription-only and require doctor approval</li>
              <li>• Results vary by individual and are not guaranteed</li>
              <li>• Always follow your provider&apos;s instructions</li>
              <li>• Inform your provider of all health conditions and medications</li>
            </ul>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Provide accurate and complete health information</li>
              <li>• Disclose all current medications and health conditions</li>
              <li>• Notify your provider of any adverse effects or concerns</li>
              <li>• Follow all medical advice and instructions from your provider</li>
              <li>• Keep your appointment information confidential</li>
            </ul>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TrimPath Health provides its services &quot;as is&quot; without warranties of any kind. We do not guarantee specific
              results or outcomes. Your use of our Service is at your own risk. In no event shall TrimPath Health be
              liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Telehealth Consent</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using our telehealth services, you consent to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Video consultations with licensed healthcare providers</li>
              <li>• Secure transmission of health information</li>
              <li>• Storage of your consultation records</li>
              <li>• Communication via secure email or patient portal</li>
            </ul>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment for services must be made at the time of booking. All prices are subject to change. We accept
              major credit cards and insurance (where applicable). Refunds are issued within 14 days for cancellations
              made more than 24 hours in advance. Medication costs are billed separately through the pharmacy.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cancellation and Rescheduling</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may cancel or reschedule your appointment up to 24 hours in advance without penalty. Cancellations
              made less than 24 hours before your appointment may incur a cancellation fee. No-shows will be charged the
              full consultation fee.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content, design, and code of the TrimPath Health website are protected by copyright and other
              intellectual property laws. You may not reproduce, distribute, or transmit any content without our
              written permission.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              TrimPath Health reserves the right to modify or discontinue our services at any time with or without
              notice. We are not liable to you or any third party for any modification, suspension, or discontinuation
              of our services.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of California, and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact for Legal Inquiries</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any legal questions regarding these Terms of Service, please contact us at:{' '}
              <a href="mailto:legal@trimpath.health" className="text-primary hover:underline">
                legal@trimpath.health
              </a>
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
