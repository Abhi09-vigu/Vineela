export default function Experience() {
  const highlights = [
    {
      title: 'Deep Legal Expertise',
      description: 'Extensive knowledge of corporate law, commercial transactions, and dispute resolution with proven track record.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Personalized attention to each client\'s needs with regular communication and transparent counsel.'
    },
    {
      title: 'Ethical Practice',
      description: 'Unwavering commitment to legal ethics, confidentiality, and professional responsibility.'
    },
    {
      title: 'Strategic Solutions',
      description: 'Creative problem-solving that balances legal requirements with practical business outcomes.'
    },
    {
      title: 'Proven Results',
      description: 'Successful track record of resolving complex disputes and closing significant transactions.'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous advisory relationship with clients, not just transactional engagement.'
    }
  ];

  return (
    <section id="experience" className="bg-neutral-950 py-12 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-serif text-emerald-400 mb-4">
            Why Choose Me
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            15+ years of dedicated legal practice with a focus on delivering exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-700 text-white p-8 rounded-lg text-center">
            <p className="text-lg leading-relaxed mb-4">
              "I am committed to providing not just legal services, but strategic partnership that 
              empowers clients to make confident decisions and achieve their objectives."
            </p>
            <p className="text-sm font-semibold">— Kokkula Vineela</p>
          </div>
        </div>
      </div>
    </section>
  );
}
