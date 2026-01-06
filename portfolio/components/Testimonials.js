'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Advocate Sharma provided exceptional legal guidance on our corporate restructuring. Their attention to detail and strategic approach made all the difference in a complex transaction.",
      name: "Rajesh Patel",
      company: "Tech Solutions Ltd",
      title: "Founder & CEO"
    },
    {
      quote: "Outstanding representation in our dispute resolution matter. Professional, thorough, and result-oriented. Highly recommended for anyone seeking trustworthy legal counsel.",
      name: "Priya Desai",
      company: "Global Trade Inc",
      title: "Managing Director"
    },
    {
      quote: "Working with Advocate Sharma has been instrumental in navigating complex regulatory compliance. Their practical advice helps us stay ahead of legal risks.",
      name: "Arun Kumar",
      company: "Manufacturing Corp",
      title: "CFO"
    },
    {
      quote: "Exceptional contract negotiation skills. Advocate Sharma ensured our interests were protected while maintaining professional relationships. Outstanding partner.",
      name: "Meera Singh",
      company: "Export Business",
      title: "Business Owner"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 md:py-24">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-emerald-400 mb-4">
          Testimonials
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          What clients say about working with me
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial">
            <div className="mb-6">
              <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-400">
                {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Indicators and Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-neutral-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-emerald-500' : 'bg-neutral-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-neutral-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
