'use client';

import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function WhyChooseUs() {
  const features = [
    'ISO 9001:2015 Certified',
    'Service Across Kerala',
    'Trained & Experienced Professionals',
    'Residential, Commercial & Industrial Expertise',
    'Customized Treatment Plans',
    'Safe & Approved Treatment Methods',
    'Reliable After-Service Support',
    'Scheduled Follow-Up & Monitoring Support',
    'Customer-Focused Approach',
    'Professional Reporting & Documentation',
  ];

  return (
    <div className="bg-gradient-to-br from-[#0A2E52] via-[#081F37] to-[#041222] rounded-3xl p-8 lg:p-10 text-white h-full shadow-[0_20px_50px_rgba(10,46,82,0.5)] relative overflow-hidden flex flex-col border border-white/5">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      {/* Floating Trust Badge */}
      <div className="absolute top-6 right-6 hidden sm:flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 shadow-lg">
        <ShieldCheck className="w-4 h-4 text-accent" />
        <span className="text-[10px] font-bold tracking-wider text-white uppercase">100% Guaranteed</span>
      </div>

      <div className="relative z-10 flex-grow">
        <div className="inline-flex items-center space-x-2 mb-4">
          <span className="w-6 h-[1px] bg-accent"></span>
          <h3 className="text-[10px] font-bold tracking-widest uppercase text-accent">WHY CHOOSE</h3>
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-white leading-tight">
          <span className="text-accent">JAS</span> PEST CONTROL SERVICE?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start group">
              <div className="mt-0.5 mr-3 bg-accent/20 p-1 rounded-full group-hover:bg-accent/40 transition-colors shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
              </div>
              <span className="text-[13px] text-slate-200 font-medium leading-tight group-hover:text-white transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-4 border-t border-white/10">
        <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-[#4ADE80] hover:bg-[#22C55E] text-[#0A2E52] font-semibold hover:text-[#0A2E52] shadow-md border-0 w-fit rounded-lg px-4 py-2 transition-all">
          <span>More About Us</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
