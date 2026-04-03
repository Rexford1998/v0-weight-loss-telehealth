'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function TestimonialCards() {
  const testimonials = [
    {
      name: 'Michael K.',
      age: 42,
      text: 'The whole process was so easy. I was skeptical about online consultations, but my doctor was thorough and really listened. Already seeing great results.',
      weight: '35 lbs down'
    },
    {
      name: 'Sarah M.',
      age: 37,
      text: 'Finally found something that works. The ongoing support from TrimPath makes all the difference. No judgment, just professional care.',
      weight: '28 lbs down'
    },
    {
      name: 'Daniel T.',
      age: 45,
      text: 'Tried everything else. This is the first time I\'ve had consistent results with medical guidance. Worth every penny.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results from Real People
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people who are seeing results with doctor-supervised GLP-1 treatment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="p-6 bg-white border border-border rounded-xl hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">Age {testimonial.age}</p>
                {testimonial.weight && (
                  <p className="text-sm font-semibold text-secondary mt-2">{testimonial.weight}</p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-xl">
          <p className="text-xs text-muted-foreground text-center">
            Results and timelines vary by individual. Testimonials are from real patients. Always consult with a healthcare provider about your specific situation.
          </p>
        </div>
      </div>
    </section>
  );
}
