'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AssessmentData } from './multi-step-form';

interface FormStep2Props {
  data: AssessmentData;
  onChange: (data: Partial<AssessmentData>) => void;
}

export function FormStep2({ data, onChange }: FormStep2Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Weight Loss Goals</h2>
        <p className="text-muted-foreground">
          Understanding your goals helps us create a personalized treatment plan.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="goalWeight" className="text-sm font-semibold">
            Goal Weight (lbs) *
          </Label>
          <Input
            id="goalWeight"
            type="number"
            min="50"
            max="500"
            placeholder="What&apos;s your target weight?"
            value={data.goalWeight || ''}
            onChange={(e) => onChange({ goalWeight: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="timeline" className="text-sm font-semibold">
            Timeline for Weight Loss *
          </Label>
          <Select
            value={data.timeline || ''}
            onValueChange={(value) => onChange({ timeline: value })}
          >
            <SelectTrigger id="timeline" className="mt-2">
              <SelectValue placeholder="Select your timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-months">3 months</SelectItem>
              <SelectItem value="6-months">6 months</SelectItem>
              <SelectItem value="12-months">12 months</SelectItem>
              <SelectItem value="18-months">18 months</SelectItem>
              <SelectItem value="ongoing">Ongoing (no specific timeline)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="motivation" className="text-sm font-semibold">
            What&apos;s your main motivation? *
          </Label>
          <Select
            value={data.motivation || ''}
            onValueChange={(value) => onChange({ motivation: value })}
          >
            <SelectTrigger id="motivation" className="mt-2">
              <SelectValue placeholder="Select your main motivation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="health">Overall health improvement</SelectItem>
              <SelectItem value="energy">More energy and mobility</SelectItem>
              <SelectItem value="confidence">Increased confidence</SelectItem>
              <SelectItem value="medical">Medical recommendation</SelectItem>
              <SelectItem value="multiple">Multiple reasons</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
