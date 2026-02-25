import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'NRI - Dubai',
      property: 'Villa in Mussoorie',
      rating: 5,
      text: 'Living abroad, I was always worried about my villa in Mussoorie. This team has been a blessing! Regular updates, transparent billing, and my property is always well-maintained.',
    },
    {
      name: 'Priya Malhotra',
      location: 'Bangalore',
      property: 'Apartment in Dehradun',
      rating: 5,
      text: 'Excellent tenant management service. They found quality tenants within a week, handle all the paperwork, and I receive my rent on time every month. Highly professional!',
    },
    {
      name: 'Amit Verma',
      location: 'NRI - USA',
      property: 'Investment Property in Rishikesh',
      rating: 5,
      text: 'The monthly photo reports give me complete peace of mind. I can see exactly how my property is being maintained. Their local expertise in Uttarakhand is invaluable.',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by property owners across India and abroad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-[#0B5ED7] opacity-50 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-[#0B5ED7] font-medium mt-1">
                  {testimonial.property}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
