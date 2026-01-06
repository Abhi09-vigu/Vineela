"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-12 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="mb-6 leading-tight">
              Legal Protection for Your Peace of Mind
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Securing and enforcing your legal rights with expertise, integrity, and dedication. 
              Whether you need consultation on contracts, dispute resolution, or legal strategy, 
              I provide practical and innovative solutions tailored to your needs.
            </p>
            {mounted ? (
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Request Consultation
              </button>
            ) : (
              <a href="#contact" className="btn-primary inline-block">Request Consultation</a>
            )}
          </div>

          {/* Right Image */}
            <div className="relative hero-image h-96 md:h-[520px] bg-neutral-800">
              <Image
                src="/images/vineela.jpeg"
                alt="Professional advocate portrait"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
        </div>
      </div>
    </section>
  );
}
