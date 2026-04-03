'use client';

import Link from 'next/link';
import { Shield, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card mt-24 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TP</span>
              </div>
              <span className="font-bold text-lg">TrimPath Health</span>
            </div>
            <p className="text-card/70 text-sm leading-relaxed">
              Doctor-led, provider-reviewed weight management consultations with clinically appropriate options.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/assessment"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  Start Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-card/70 hover:text-card transition-colors"
                >
                  HIPAA Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-card/20 pt-8">
          <div className="bg-card/10 rounded-lg p-4 mb-6">
            <div className="flex gap-3 text-xs text-card/80">
              <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Clinical Disclaimer</p>
                <p>
                  All treatments are subject to clinical review and provider approval. TrimPath
                  Health does not provide medical advice. Medications are prescribed only when
                  medically appropriate. Consultations are conducted with licensed healthcare
                  providers. Results vary by individual.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-card/60">
            <p>© {currentYear} TrimPath Health. All rights reserved.</p>
            <div className="flex items-center gap-1 mt-4 sm:mt-0">
              <Heart className="w-4 h-4" />
              <span>Built for your health journey</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
