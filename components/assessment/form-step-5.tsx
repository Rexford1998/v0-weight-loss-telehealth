'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AssessmentData } from './multi-step-form';

interface FormStep5Props {
  data: AssessmentData;
  onChange: (data: Partial<AssessmentData>) => void;
}

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export function FormStep5({ data, onChange }: FormStep5Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Almost There!</h2>
        <p className="text-muted-foreground">
          Just a few more details so we can contact you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-semibold">
              First Name *
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              value={data.firstName || ''}
              onChange={(e) => onChange({ firstName: e.target.value })}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="lastName" className="text-sm font-semibold">
              Last Name *
            </Label>
            <Input
              id="lastName"
              placeholder="Last name"
              value={data.lastName || ''}
              onChange={(e) => onChange({ lastName: e.target.value })}
              className="mt-2"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-semibold">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={data.email || ''}
            onChange={(e) => onChange({ email: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-semibold">
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={data.phone || ''}
            onChange={(e) => onChange({ phone: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="state" className="text-sm font-semibold">
            State *
          </Label>
          <Select
            value={data.state || ''}
            onValueChange={(value) => onChange({ state: value })}
          >
            <SelectTrigger id="state" className="mt-2">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 space-y-3 mt-8">
          <h4 className="font-semibold text-foreground text-sm">Before you submit:</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={data.consent || false}
                onCheckedChange={(checked) => onChange({ consent: checked === true })}
              />
              <Label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer font-normal">
                I understand my information will be reviewed by a licensed healthcare provider, and I may be contacted to schedule a consultation for medical evaluation.
              </Label>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              By submitting this assessment, you acknowledge that you have read and agree to our{' '}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
