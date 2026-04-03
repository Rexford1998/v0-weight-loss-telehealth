'use client';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AssessmentData } from './multi-step-form';

interface FormStep4Props {
  data: AssessmentData;
  onChange: (data: Partial<AssessmentData>) => void;
}

export function FormStep4({ data, onChange }: FormStep4Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Lifestyle</h2>
        <p className="text-muted-foreground">
          Understanding your current lifestyle helps us support your success.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="exercise" className="text-sm font-semibold">
            How often do you exercise? *
          </Label>
          <Select
            value={data.exercise || ''}
            onValueChange={(value) => onChange({ exercise: value })}
          >
            <SelectTrigger id="exercise" className="mt-2">
              <SelectValue placeholder="Select your exercise frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Not at all</SelectItem>
              <SelectItem value="light">1-2 times per week</SelectItem>
              <SelectItem value="moderate">3-4 times per week</SelectItem>
              <SelectItem value="regular">5+ times per week</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="diet" className="text-sm font-semibold">
            How would you describe your eating habits? *
          </Label>
          <Select
            value={data.diet || ''}
            onValueChange={(value) => onChange({ diet: value })}
          >
            <SelectTrigger id="diet" className="mt-2">
              <SelectValue placeholder="Select your diet type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-fast-food">Mostly fast food</SelectItem>
              <SelectItem value="mixed">Mix of healthy and unhealthy</SelectItem>
              <SelectItem value="mostly-healthy">Mostly healthy</SelectItem>
              <SelectItem value="very-healthy">Very healthy diet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sleep" className="text-sm font-semibold">
            Average hours of sleep per night? *
          </Label>
          <Select
            value={data.sleep || ''}
            onValueChange={(value) => onChange({ sleep: value })}
          >
            <SelectTrigger id="sleep" className="mt-2">
              <SelectValue placeholder="Select your sleep duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="less-5">Less than 5 hours</SelectItem>
              <SelectItem value="5-6">5-6 hours</SelectItem>
              <SelectItem value="6-7">6-7 hours</SelectItem>
              <SelectItem value="7-8">7-8 hours</SelectItem>
              <SelectItem value="more-8">More than 8 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="stress" className="text-sm font-semibold">
            How do you rate your current stress level? *
          </Label>
          <Select
            value={data.stress || ''}
            onValueChange={(value) => onChange({ stress: value })}
          >
            <SelectTrigger id="stress" className="mt-2">
              <SelectValue placeholder="Select your stress level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="very-high">Very high</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
