import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(11, 94, 215, 0.92) 0%, rgba(110, 193, 255, 0.85) 100%), url("https://images.pexels.com/photos/3572116/pexels-photo-3572116.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Professional Property Management Services in Uttarakhand
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
              Complete care for your villa, apartment, or investment property — so you don't have to worry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#0B5ED7] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0B5ED7] transition-all flex items-center justify-center gap-2">
                Our Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern villa in Uttarakhand"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
