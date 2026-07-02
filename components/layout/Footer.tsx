import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="container mx-auto px-4 py-16 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <Image 
                src="/logo.svg" 
                alt="JAS Pest Control Service Logo" 
                width={200} 
                height={60} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Kerala's trusted pest control experts providing comprehensive and professional pest management solutions for homes, businesses, and industries across all districts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 px-3 py-2 rounded-full hover:bg-accent hover:text-white transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="bg-white/10 px-3 py-2 rounded-full hover:bg-accent hover:text-white transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="bg-white/10 px-3 py-2 rounded-full hover:bg-accent hover:text-white transition-colors text-xs font-bold">
                IN
              </a>
              <a href="#" className="bg-white/10 px-3 py-2 rounded-full hover:bg-accent hover:text-white transition-colors text-xs font-bold">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-xl mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Industries We Serve', href: '/industries' },

                { name: 'Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-accent transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-xl mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-accent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Cockroach Control', href: '/services/cockroach-control' },
                { name: 'Termite Control', href: '/services/termite-control' },
                { name: 'Rodent Control', href: '/services/rodent-control' },
                { name: 'Ant Control', href: '/services/ant-control' },
                { name: 'Bed Bug Treatment', href: '/services/bed-bug-treatment' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-accent transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-xl mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-accent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Iritty, Kannur, Kerala<br />Serving all districts of Kerala</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:7012740820" className="hover:text-white transition-colors">7012740820</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:jaspest@jaspcs.com" className="hover:text-white transition-colors">jaspest@jaspcs.com</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:jaspestcontrolkl@gmail.com" className="hover:text-white transition-colors">jaspestcontrolkl@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 max-w-[1400px] flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} JAS Pest Control Service. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
