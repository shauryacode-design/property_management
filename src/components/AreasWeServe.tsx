import { MapPin } from 'lucide-react';

export default function AreasWeServe() {
  const areas = [
    {
      name: 'Dehradun',
      description: 'Capital city property management services',
    },
    {
      name: 'Mussoorie',
      description: 'Hill station villa and resort management',
    },
    {
      name: 'Rishikesh',
      description: 'Spiritual hub property care',
    },
    {
      name: 'Haldwani',
      description: 'Gateway to Kumaon region services',
    },
    {
      name: 'Nainital',
      description: 'Lake district property solutions',
    },
    {
      name: 'Haridwar',
      description: 'Heritage city property management',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas We Serve in Uttarakhand
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional property management services across major cities and hill stations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#F4F9FF] to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#0B5ED7]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#0B5ED7] to-[#6EC1FF] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your area? We're expanding across Uttarakhand.
          </p>
          <button className="bg-[#0B5ED7] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#094ba8] transition-all">
            Contact Us for Other Locations
          </button>
        </div>
      </div>
    </section>
  );
}
