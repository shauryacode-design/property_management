import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    'Local expertise across Uttarakhand',
    'Transparent reporting and communication',
    'On-ground supervision and quality checks',
    'Network of trusted vendors',
    'NRI-friendly services and support',
  ];

  return (
    <section className="py-20 bg-[#F4F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted Property Care Across Uttarakhand
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges of managing properties in the Himalayan region.
            With years of local experience, we provide comprehensive property management solutions
            that give you peace of mind, whether you're across the country or around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0B5ED7] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{feature}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional property management team"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#0B5ED7] text-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm">Properties Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
