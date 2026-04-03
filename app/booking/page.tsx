import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BookingCard } from '@/components/booking/booking-card';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <BookingCard />
      </div>
      <Footer />
    </div>
  );
}
