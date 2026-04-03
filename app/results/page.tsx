import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ResultsSummary } from '@/components/results/results-summary';

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <ResultsSummary />
      </div>
      <Footer />
    </div>
  );
}
