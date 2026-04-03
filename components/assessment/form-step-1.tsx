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

interface FormStep1Props {
  data: AssessmentData;
  onChange: (data: Partial<AssessmentData>) => void;
}

export function FormStep1({ data, onChange }: FormStep1Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Let&apos;s Start with Basics</h2>
        <p className="text-muted-foreground">
          This helps us understand if GLP-1 treatment might be right for you.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="age" className="text-sm font-semibold">
            Age *
          </Label>
          <Input
            id="age"
            type="number"
            min="18"
            max="120"
            placeholder="Enter your age"
            value={data.age || ''}
            onChange={(e) => onChange({ age: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="sex" className="text-sm font-semibold">
            Sex *
          </Label>
          <Select value={data.sex || ''} onValueChange={(value) => onChange({ sex: value })}>
            <SelectTrigger id="sex" className="mt-2">
              <SelectValue placeholder="Select your sex" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Label className="text-sm font-semibold">
              Height *
            </Label>
            <div className="flex gap-2 mt-2">
              <div className="flex-1">
                <Input
                  type="number"
                  min="4"
                  max="8"
                  placeholder="Feet"
                  value={data.heightFeet || ''}
                  onChange={(e) => onChange({ heightFeet: e.target.value })}
                  aria-label="Height in feet"
                  className="text-center"
                />
              </div>
              <div className="flex items-center text-muted-foreground">ft</div>
              <div className="flex-1">
                <Input
                  type="number"
                  min="0"
                  max="11"
                  placeholder="Inches"
                  value={data.heightInches || ''}
                  onChange={(e) => onChange({ heightInches: e.target.value })}
                  aria-label="Height in inches"
                  className="text-center"
                />
              </div>
              <div className="flex items-center text-muted-foreground">in</div>
            </div>
          </div>

          <div>
            <Label htmlFor="weight" className="text-sm font-semibold">
              Current Weight (lbs) *
            </Label>
            <Input
              id="weight"
              type="number"
              min="50"
              max="500"
              placeholder="E.g., 200"
              value={data.weight || ''}
              onChange={(e) => onChange({ weight: e.target.value })}
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
