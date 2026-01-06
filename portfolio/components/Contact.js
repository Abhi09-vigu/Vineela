'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-neutral-950 py-12 md:py-24">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-emerald-400 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Have a question or need legal advice? Contact me for a consultation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            {mounted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your legal matter..."
                  rows="5"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-900/30 border border-emerald-700 rounded-lg text-center">
                  <p className="text-emerald-400 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
            </form>
            ) : (
              <div className="space-y-4">
                <div className="h-10 w-full bg-neutral-900 rounded" />
                <div className="h-10 w-full bg-neutral-900 rounded" />
                <div className="h-10 w-full bg-neutral-900 rounded" />
                <div className="h-24 w-full bg-neutral-900 rounded" />
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-emerald-400 mb-6">
                Contact Information
              </h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-1">Advocate Name</h4>
                <p className="text-gray-400">Kokkula Vineela</p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                <a href="tel:9912389718" className="text-emerald-400 hover:underline">
                  9912389718
                </a>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                <a href="mailto:vineelakokkula@gmail.com" className="text-emerald-400 hover:underline">
                  vineelakokkula@gmail.com
                </a>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                <p className="text-gray-400">
                  Jaggaiahpet - 521175
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-neutral-900 rounded-lg">
              <p className="text-sm text-gray-300 leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                please call the phone number above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
