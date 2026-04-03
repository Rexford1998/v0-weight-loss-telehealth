'use client';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AssessmentData } from './multi-step-form';

interface FormStep3Props {
  data: AssessmentData;
  onChange: (data: Partial<AssessmentData>) => void;
}

export function FormStep3({ data, onChange }: FormStep3Props) {
  const conditionOptions = [
    'Diabetes (Type 2)',
    'Hypertension',
    'Heart disease',
    'High cholesterol',
    'Thyroid disorder',
    'PCOS',
    'Sleep apnea',
    'Arthritis'
  ];

  const handleConditionToggle = (condition: string) => {
    const current = data.conditions || [];
    const updated = current.includes(condition)
      ? current.filter((c) => c !== condition)
      : [...current, condition];
    onChange({ conditions: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Health History</h2>
        <p className="text-muted-foreground">
          This helps us ensure GLP-1 treatment is safe for you.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold mb-4 block">
            Do you have any of these conditions? (Select all that apply)
          </Label>
          <div className="space-y-3">
            {conditionOptions.map((condition) => (
              <div key={condition} className="flex items-center space-x-3">
                <Checkbox
                  id={condition}
                  checked={data.conditions?.includes(condition) || false}
                  onCheckedChange={() => handleConditionToggle(condition)}
                />
                <Label htmlFor={condition} className="font-normal cursor-pointer">
                  {condition}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="medications" className="text-sm font-semibold">
            Current Medications
          </Label>
          <Input
            id="medications"
            placeholder="List any medications you&apos;re taking"
            value={data.medications || ''}
            onChange={(e) => onChange({ medications: e.target.value })}
            className="mt-2"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Include dosage if you remember it
          </p>
        </div>

        <div>
          <Label htmlFor="pancreatitis" className="text-sm font-semibold">
            Have you ever had pancreatitis? *
          </Label>
          <Select
            value={data.pancreatitis || ''}
            onValueChange={(value) => onChange({ pancreatitis: value })}
          >
            <SelectTrigger id="pancreatitis" className="mt-2">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="family">Family history</SelectItem>
              <SelectItem value="unsure">Not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="pregnancy" className="text-sm font-semibold">
            Are you pregnant or breastfeeding? *
          </Label>
          <Select
            value={data.pregnancy || ''}
            onValueChange={(value) => onChange({ pregnancy: value })}
          >
            <SelectTrigger id="pregnancy" className="mt-2">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">No, not applicable</SelectItem>
              <SelectItem value="pregnant">Yes, currently pregnant</SelectItem>
              <SelectItem value="breastfeeding">Yes, breastfeeding</SelectItem>
              <SelectItem value="planning">Planning to become pregnant</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
