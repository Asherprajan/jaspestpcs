import { ShieldCheck, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
                Our Story
              </h3>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Kerala's Most Trusted Pest Management Experts
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                JAS Pest Control Service is an ISO 9001:2015 certified company dedicated to providing safe, effective, and reliable pest management solutions across Kerala. With over two decades of experience, we have protected thousands of homes and businesses from destructive and disease-carrying pests.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team consists of highly trained and experienced professionals who use the latest technology and government-approved chemicals. We believe in a customer-centric approach, offering customized treatment plans, scheduled follow-ups, and guaranteed satisfaction.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-200">
                [About Us Team Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:border-accent transition-colors group">
              <Target className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver the highest quality, eco-friendly pest control services that protect the health and property of our clients while maintaining absolute transparency and professionalism.
              </p>
            </div>
            <div className="bg-[#0A2E52] p-10 rounded-2xl shadow-lg border border-[#0A2E52] hover:border-accent transition-colors group text-white">
              <Eye className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become the most recognized and trusted pest management brand in India, known for innovation, exceptional customer service, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
