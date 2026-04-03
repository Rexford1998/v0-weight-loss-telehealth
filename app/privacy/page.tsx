import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              TrimPath Health (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website and telehealth
              service. This page informs you of our policies regarding the collection, use, and disclosure of personal
              data when you use our Service and the choices you have associated with that data.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Personal Data:</strong> Name, email, phone number, health information
              </li>
              <li>
                <strong>Device Data:</strong> Browser type, IP address, pages visited
              </li>
              <li>
                <strong>Health Information:</strong> Medical history, assessment responses (HIPAA-protected)
              </li>
            </ul>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet is 100% secure. We use industry-standard encryption (TLS/SSL) to protect personal data and
              comply with HIPAA requirements for health information. However, we cannot guarantee absolute security.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TrimPath Health uses the collected data for various purposes:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• To provide and maintain our Service</li>
              <li>• To notify you about changes to our Service</li>
              <li>• To provide customer support</li>
              <li>• To gather analysis or valuable information for improving our Service</li>
              <li>• To monitor the usage of our Service</li>
            </ul>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. HIPAA Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to complying with the Health Insurance Portability and Accountability Act (HIPAA).
              Your protected health information is stored securely and shared only with authorized healthcare providers
              involved in your treatment. We will never sell your health information to third parties for marketing
              purposes.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
              except as required by law or with your explicit consent. This does not include trusted third parties who
              assist us in operating our website or conducting our business, so long as those parties agree to keep
              this information confidential.
            </p>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of your data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Request a copy of your health records</li>
            </ul>
          </Card>

          <Card className="p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:privacy@trimpath.health" className="text-primary hover:underline">
                privacy@trimpath.health
              </a>
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
