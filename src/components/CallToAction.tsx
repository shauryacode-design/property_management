import { ArrowRight, Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B5ED7] to-[#6EC1FF] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Own a Property in Uttarakhand?
        </h2>
        <p className="text-2xl mb-4 text-blue-50">
          Let Us Manage It Professionally.
        </p>
        <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Get a comprehensive assessment of your property and discover how our professional
          management services can protect your investment and maximize its value.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#0B5ED7] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
            Get Free Property Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0B5ED7] transition-all flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-blue-100">Properties Managed</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">98%</p>
            <p className="text-blue-100">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-blue-100">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
