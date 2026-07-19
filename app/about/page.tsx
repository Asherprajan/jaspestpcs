import { ShieldCheck, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata = {
  title: 'About Us | JAS Pest Control Service',
  description: 'Learn about JAS Pest Control Service, our mission, vision, and why we are Kerala\'s most trusted pest management company.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#0A2E52] py-20 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Us</h1>
          <div className="flex items-center justify-center text-sm text-slate-300 space-x-2">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">About Us</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2 inline-block">
              Our Story
            </h3>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              Kerala's Most Trusted Pest Management Experts
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              JAS Pest Control Service is an ISO 9001:2015 certified company dedicated to providing safe, effective, and reliable pest management solutions across Kerala. With over two decades of experience, we have protected thousands of homes and businesses from destructive and disease-carrying pests.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              Our team consists of highly trained and experienced professionals who use the latest technology and government-approved chemicals. We believe in a customer-centric approach, offering customized treatment plans, scheduled follow-ups, and guaranteed satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-[1200px] space-y-16">
          
          {/* Our Mission Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 lg:p-12 rounded-3xl shadow-md border border-slate-100 hover:border-accent/30 transition-all group">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
              <Image 
                src="/images/about/mission.png" 
                alt="JAS Pest Control Service Mission - Safe and Eco-Friendly Treatment" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg text-justify">
                To deliver the highest quality, eco-friendly pest control services that protect the health and property of our clients while maintaining absolute transparency and professionalism.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Eco-Friendly Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Trained Professionals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Absolute Transparency
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Customer-Centric Care
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Vision Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0A2E52] p-8 lg:p-12 rounded-3xl shadow-xl border border-[#0A2E52] hover:border-accent/40 transition-all group text-white">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                To become the most recognized and trusted pest management brand in India, known for innovation, exceptional customer service, and sustainable practices.
              </p>
              <div className="border-t border-white/10 pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-2"></span> Innovative Technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-2"></span> Pan-India Quality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-2"></span> Sustainable Practices
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-2"></span> Award-Winning Service
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/about/vision.png" 
                alt="JAS Pest Control Service Vision - Innovation and Sustainability" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Partnerships Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-[1200px] space-y-20">
          
          {/* Associated Companies */}
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-bold tracking-wider uppercase">Partnerships</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Associated Companies</h3>
              <p className="text-muted-foreground text-lg text-justify md:text-center">
                We work closely with leading global chemical and biotech brands to ensure we deploy only the safest, most effective, and clinically-tested treatments available in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Envu', logo: '/images/about/envu.png', description: 'Environmental Science' },
                { name: 'Syngenta', logo: '/images/about/syngenta.png', description: 'Crop Protection & Control' },
                { name: 'UPL OpenAg', logo: '/images/about/upl.png', description: 'Agricultural Solutions' },
                { name: 'Sumitomo Chemical', logo: '/images/about/sumitomo.png', description: 'Pest Control Products' }
              ].map((company) => (
                <div key={company.name} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center text-center group">
                  <div className="relative w-full h-16 mb-6 flex items-center justify-center">
                    <Image 
                      src={company.logo} 
                      alt={`${company.name} Logo`} 
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg group-hover:text-primary transition-colors">{company.name}</h4>
                  <div className="w-8 h-0.5 bg-accent/30 my-3 group-hover:w-16 transition-all duration-300"></div>
                  <p className="text-xs text-slate-500">{company.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliations */}
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-bold tracking-wider uppercase">Credentials</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Affiliations</h3>
              <p className="text-muted-foreground text-lg text-justify md:text-center">
                Our active participation and validation in prestigious chambers of commerce and business networks demonstrate our commitment to professional growth and reliable quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'JCI India', logo: '/images/about/jci.png', description: 'Junior Chamber International India', detail: 'An active leadership and business networking organization helping local businesses scale through training, community involvement, and global connections.' },
                { name: 'JCOM (#LETUSCONNECT4BUSINESS)', logo: '/images/about/jcom.png', description: 'Premium Business Networking Platform', detail: 'A premium corporate commerce and business group focusing on fostering strong partnerships, reliable B2B referrals, and promoting local economic growth.' }
              ].map((affiliation) => (
                <div key={affiliation.name} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col group">
                  <div className="relative w-36 h-20 mb-6 bg-slate-50 rounded-2xl p-2 border border-slate-100/50 flex items-center justify-center mx-auto sm:mx-0">
                    <Image 
                      src={affiliation.logo} 
                      alt={`${affiliation.name} Logo`} 
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-slate-800 text-xl group-hover:text-primary transition-colors text-center sm:text-left">{affiliation.name}</h4>
                  <p className="text-sm font-semibold text-accent mt-1 mb-3 text-center sm:text-left">{affiliation.description}</p>
                  <p className="text-sm text-slate-600 text-justify leading-relaxed mt-2">{affiliation.detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <FinalCTA />
    </>
  );
}
