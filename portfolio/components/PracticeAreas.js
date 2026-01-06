export default function PracticeAreas() {
  const areas = [
    {
      title: 'Corporate & Commercial Law',
      description: 'Strategic advice on business formation, mergers, acquisitions, and corporate governance matters.'
    },
    {
      title: 'Contract Drafting & Negotiation',
      description: 'Comprehensive review and negotiation of commercial contracts, agreements, and legal documents.'
    },
    {
      title: 'Dispute Resolution',
      description: 'Skilled representation in litigation, arbitration, and alternative dispute resolution proceedings.'
    },
    {
      title: 'Business Advisory',
      description: 'Ongoing legal counsel on business operations, compliance, and strategic planning.'
    },
    {
      title: 'Employment Law',
      description: 'Guidance on employment contracts, workplace compliance, and labor-related matters.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Expert assistance with regulatory requirements, licenses, and compliance obligations.'
    }
  ];

  return (
    <section id="practice" className="py-12 md:py-24">
      <div className="container-custom">
        <h2 className="text-center mb-4 text-3xl md:text-4xl font-serif text-emerald-400">
          Practice Areas
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Comprehensive legal services covering the full range of business and personal legal needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-serif text-emerald-400 mb-4 h-12 flex items-start">
                {area.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
