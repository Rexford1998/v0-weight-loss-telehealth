import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MultiStepForm } from '@/components/assessment/multi-step-form';

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MultiStepForm />
      <Footer />
    </div>
  );
}
