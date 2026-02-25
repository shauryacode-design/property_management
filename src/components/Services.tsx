import { Wrench, Users, Home, Shield, Sparkles, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Property Maintenance & Repairs',
      description: 'Regular upkeep, emergency repairs, and preventive maintenance to keep your property in pristine condition.',
    },
    {
      icon: Users,
      title: 'Tenant Management',
      description: 'Complete tenant screening, lease management, and ongoing tenant relations to ensure smooth occupancy.',
    },
    {
      icon: Home,
      title: 'Rental Management',
      description: 'End-to-end rental services including marketing, pricing optimization, and rent collection.',
    },
    {
      icon: Shield,
      title: 'Security & Inspection',
      description: '24/7 security coordination and regular property inspections with detailed photographic reports.',
    },
    {
      icon: Sparkles,
      title: 'Housekeeping & Cleaning',
      description: 'Professional cleaning services, garden maintenance, and deep cleaning for occupied and vacant properties.',
    },
    {
      icon: FileText,
      title: 'Bill Payments & Documentation',
      description: 'Timely payment of utilities, property taxes, and maintenance of all legal documentation.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Property Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to protect and maintain your property investment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#0B5ED7] to-[#6EC1FF] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
