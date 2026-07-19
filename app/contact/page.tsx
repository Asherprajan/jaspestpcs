import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | JAS Pest Control Service',
  description: 'Get in touch with JAS Pest Control Service for a free consultation or to book our services. Serving all districts of Kerala.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#0A2E52] py-20 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <div className="flex items-center justify-center text-sm text-slate-300 space-x-2">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Contact Us</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
                  Get In Touch
                </h3>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                  We're Here to Help You
                </h2>
                <p className="text-muted-foreground text-lg">
                  Have a pest problem? Reach out to our experts for a quick response and professional solutions. We serve all districts of Kerala.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-1">Our Location</h4>
                    <p className="text-muted-foreground text-justify">
                      Door No.: 9/2333, 1st Floor<br />
                      Bus Stand One Way Road<br />
                      Iritty – 670703<br />
                      Service coverage across all districts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+917012740820" className="hover:text-secondary transition-colors">+91 7012740820</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-1">Email Address</h4>
                    <p className="text-muted-foreground flex flex-col space-y-1">
                      <a href="mailto:jaspest@jaspcs.com" className="hover:text-secondary transition-colors">jaspest@jaspcs.com</a>
                      <a href="mailto:jaspestcontrolkl@gmail.com" className="hover:text-secondary transition-colors">jaspestcontrolkl@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="h-[450px] w-full relative border-t border-slate-100 bg-slate-50">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5042.668054231153!2d75.74145067606733!3d11.90500528832084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5cd6c1df1fba9%3A0xd7e11dec34385f3c!2sJAS%20PEST%20CONTROL%20SERVICE!5e1!3m2!1sen!2sin!4v1784497998662!5m2!1sen!2sin" 
          className="w-full h-full"
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </>
  );
}
