export default function About() {
  return (
    <section id="about" className="bg-neutral-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Section Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-400 mb-8">
              About Me
            </h2>
          </div>

          {/* Right - Bio Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              With over 15 years of comprehensive legal experience, I specialize in delivering 
              strategic legal counsel to individuals and businesses. My practice encompasses corporate law, 
              contract review and negotiation, dispute resolution, and general legal advisory services.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I am committed to understanding each client's unique circumstances and providing practical, 
              ethical solutions that align with their objectives. My approach combines deep legal knowledge 
              with business acumen to help clients make informed decisions and protect their interests.
            </p>

            <div className="space-y-4 mt-8">
              <div className="border-l-4 border-emerald-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Bachelor of Laws (LL.B.) - National Law University</li>
                  <li>• Master of Laws (LL.M.) - Specialization in Corporate Law</li>
                  <li>• Registered Advocate, Bar Council of India</li>
                  <li>• 15+ years of active legal practice</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Corporate & Commercial Law</li>
                  <li>• Contract Drafting & Negotiation</li>
                  <li>• Litigation & Dispute Resolution</li>
                  <li>• Business Advisory & Compliance</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base mt-8 italic">
              "Excellence in legal practice means understanding not just the law, but the client's vision and challenges."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
