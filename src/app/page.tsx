import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import AreasWeServe from '../components/AreasWeServe';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <AreasWeServe />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
