import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const services = [
    'Property Maintenance',
    'Tenant Management',
    'Rental Management',
    'Security Services',
    'Housekeeping',
    'Documentation',
  ];

  const areas = [
    'Dehradun',
    'Mussoorie',
    'Rishikesh',
    'Haldwani',
    'Nainital',
    'Haridwar',
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Areas We Serve',
    'Contact Us',
    'Get Quote',
    'FAQ',
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#0B5ED7] to-[#6EC1FF] w-10 h-10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PrimeNest Property Management</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Professional property management services across Uttarakhand. Trusted by NRI and local property owners.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-[#F4F9FF] w-10 h-10 rounded-lg flex items-center justify-center text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#F4F9FF] w-10 h-10 rounded-lg flex items-center justify-center text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#F4F9FF] w-10 h-10 rounded-lg flex items-center justify-center text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#F4F9FF] w-10 h-10 rounded-lg flex items-center justify-center text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-[#0B5ED7] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-[#0B5ED7] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Areas We Serve</h3>
            <ul className="space-y-3 mb-6">
              {areas.map((area, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-[#0B5ED7] transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0B5ED7] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-600">Dehradun, Uttarakhand, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#0B5ED7] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#0B5ED7] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">info@primenestproperty.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              &copy; 2024 PrimeNest Property Management. All rights reserved.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
            >
              <MessageCircle className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

