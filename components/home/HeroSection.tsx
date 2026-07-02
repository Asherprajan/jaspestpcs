'use client';

import { Phone, MessageSquare, ShieldCheck, Award, Users, Briefcase, Ban, Home, Building2, Factory, HeadphonesIcon, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  const stats = [
    { value: '21+', label: 'Years\nExperience', icon: Award },
    { value: '5000+', label: 'Happy\nCustomers', icon: Users },
    { value: '15000+', label: 'Projects\nCompleted', icon: Briefcase },
    { value: '100%', label: 'Safe & Effective\nTreatments', icon: ShieldCheck },
  ];

  const pests = [
    { name: 'Termites', icon: '🐜' },
    { name: 'Cockroaches', icon: '🪳' },
    { name: 'Rats & Mice', icon: '🐁' },
    { name: 'Bed Bugs', icon: '🪲' },
    { name: 'Ants', icon: '🐜' },
    { name: 'Flies', icon: '🦟' },
  ];

  const floatingFeatures = [
    { icon: Home, title: 'Residential', sub: 'Services' },
    { icon: Building2, title: 'Commercial', sub: 'Services' },
    { icon: Factory, title: 'Industrial', sub: 'Services' },
    { icon: ShieldCheck, title: 'Safe & Approved', sub: 'Chemicals' },
    { icon: Users, title: 'Trained & Certified', sub: 'Professionals' },
    { icon: HeadphonesIcon, title: 'After Service', sub: 'Support' },
    { icon: CalendarDays, title: 'Scheduled', sub: 'Follow-up' },
  ];

  return (
    <section className="relative bg-[#0A2E52] pt-4 pb-12 lg:pb-16 overflow-visible flex items-center min-h-[75vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/banner.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E52] via-[#0A2E52]/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center py-2">
          
          {/* Left Content */}
          <div className="space-y-4 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="border border-accent text-accent rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider w-fit mb-4 shadow-[0_0_10px_rgba(34,197,94,0.2)] bg-[#0A2E52]/50 backdrop-blur-sm">
                Kerala's Trusted Pest Control Experts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 text-white">
                Professional Pest Management Solutions <span className="text-accent block mt-1">You Can Trust</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-4 text-white mb-4"
            >
              <div className="w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center text-primary shadow-lg border-2 border-slate-200 shrink-0">
                <span className="text-[10px] font-black leading-none">ISO</span>
                <span className="text-[14px] font-black leading-none tracking-tighter">9001</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-lg block">ISO 9001:2015 Certified</span>
                <span className="text-sm font-medium text-slate-200">Quality Pest Management</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-lg max-w-lg font-medium leading-snug"
            >
              Serving Homes, Businesses & Industries <br/>Across Kerala
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button size="lg" className="bg-[#4ADE80] hover:bg-[#22C55E] text-primary rounded-xl px-6 h-14 flex items-center shadow-[0_0_15px_rgba(74,222,128,0.3)] group transition-all">
                <Phone className="w-5 h-5 mr-3 fill-current" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold tracking-wider">Call Now</div>
                  <div className="font-bold text-lg">7012740820</div>
                </div>
              </Button>

              <Button size="lg" variant="outline" className="bg-transparent border border-white/50 hover:bg-white/10 hover:border-white text-white rounded-xl px-6 h-14 flex items-center group transition-all font-semibold">
                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24"><path d="M12.012 2c5.506 0 9.982 4.476 9.982 9.985 0 2.748-1.122 5.334-3.11 7.23-1.928 1.838-4.47 2.853-7.142 2.766l-4.526 1.189 1.205-4.41c-1.68-1.748-2.613-4.062-2.613-6.49 0-5.508 4.476-9.983 9.983-9.983zm0 1.666c-4.587 0-8.318 3.73-8.318 8.317 0 1.956.684 3.824 1.955 5.305l-.76 2.784 2.848-.748c1.436 1.127 3.197 1.74 5.034 1.74 4.587 0 8.318-3.73 8.318-8.318 0-4.587-3.73-8.318-8.318-8.318zm4.498 11.238c-.246.683-1.218 1.258-1.905 1.4-.492.1-1.15.176-3.238-.686-2.673-1.106-4.385-3.864-4.516-4.04-.132-.176-1.077-1.432-1.077-2.732s.672-1.942.906-2.188c.234-.246.504-.308.672-.308.168 0 .336.01.48.016.155.006.36-.06.564.432.216.516.744 1.812.816 1.956.072.144.12.312.024.504-.096.192-.144.312-.288.48-.144.168-.3.36-.432.48-.144.132-.294.276-.132.552.162.276.72 1.188 1.548 1.932 1.068.96 1.956 1.26 2.232 1.404.276.144.444.12.612-.048.168-.168.72-.84.912-1.128.192-.288.384-.24.636-.144.252.096 1.608.756 1.884.888.276.132.456.192.528.3.072.108.072.636-.174 1.32z"/></svg>
                WhatsApp Us
              </Button>
            </motion.div>

            {/* Sub Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm w-fit"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center space-x-3 pr-6 border-r border-white/10 last:border-0 last:pr-0">
                  <div className="text-white/80">
                    <stat.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="leading-tight">
                    <div className="text-accent font-bold text-lg">{stat.value}</div>
                    <div className="text-white text-[10px] uppercase tracking-wider whitespace-pre-line">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Content - Pests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-end justify-center h-full gap-2 mt-4 lg:mt-0"
          >
            {pests.map((pest, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 w-52 hover:bg-white hover:scale-105 transition-all cursor-pointer">
                <div className="relative w-8 h-8 rounded-full border border-red-500 bg-white flex items-center justify-center text-red-500">
                  <span className="absolute text-sm z-0 opacity-50">{pest.icon}</span>
                  <Ban className="w-6 h-6 z-10" strokeWidth={2} />
                </div>
                <span className="font-bold text-primary text-sm">{pest.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Features Bar */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[1400px] px-4 z-20">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-100 py-4 px-4 flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {floatingFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3 px-3 w-full lg:w-auto pt-3 lg:pt-0">
              <div className="text-primary flex-shrink-0 bg-slate-50 p-2 rounded-lg">
                <feature.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-primary leading-tight uppercase">
                  {feature.title}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 leading-tight">
                  {feature.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
