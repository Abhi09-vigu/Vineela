'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Practice Areas', id: 'practice' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 border-b border-neutral-800 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo / Name */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-emerald-400">⚖️ Kokkula Vineela</h1>
        </div>

        {/* Desktop Menu (render after mount to avoid hydration issues) */}
        {mounted && (
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`pressable text-base font-medium transition-colors ${
                  activeLink === item.id ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
                }`}
                style={{
                  borderBottom: activeLink === item.id ? '2px solid #10b981' : 'none',
                  paddingBottom: '4px',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {mounted && (
          <button
            className="pressable md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mounted && isMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-neutral-800">
          <div className="container-custom py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="pressable text-left text-gray-300 hover:text-emerald-400 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
