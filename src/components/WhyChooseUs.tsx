import { MapPin, Headphones, DollarSign, FileCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: MapPin,
      title: 'Local Team',
      description: 'Experienced professionals who understand Uttarakhand',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always available when you need us most',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs, clear and fair pricing',
    },
    {
      icon: FileCheck,
      title: 'Monthly Reports',
      description: 'Detailed updates on your property status',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B5ED7] to-[#6EC1FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Property Owners Trust Us
          </h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Dedicated service that sets us apart in Uttarakhand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-blue-50 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
