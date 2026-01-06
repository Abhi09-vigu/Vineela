export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Name/Branding */}
          <div>
            <h3 className="text-xl font-bold mb-2">Kokkula Vineela</h3>
            <p className="text-emerald-300 text-sm">
              Legal Advocate & Adviser
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-emerald-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-emerald-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#practice" className="text-emerald-300 hover:text-white transition-colors">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-emerald-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li>
                <a href="tel:9701976318" className="hover:text-white transition-colors">
                  9701976318
                </a>
              </li>
              <li>
                <a href="mailto:vineelakokkula@gmail.com" className="hover:text-white transition-colors">
                  vineelakokkula@gmail.com
                </a>
              </li>
              <li>Jaggaiahpet - 521175</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-300">
            <p>
              &copy; {currentYear} Kokkula Vineela. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
