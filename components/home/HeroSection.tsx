'use client';

import { Phone, MessageSquare, ShieldCheck, Award, Users, Briefcase, Ban, Home, Building2, Factory, HeadphonesIcon, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
              <Link href="tel:+917012740820" className="bg-[#4ADE80] hover:bg-[#22C55E] text-primary rounded-xl px-6 h-14 flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.3)] group transition-all">
                <Phone className="w-5 h-5 mr-3 fill-current" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold tracking-wider">Call Now</div>
                  <div className="font-bold text-lg">+91 7012740820</div>
                </div>
              </Link>

              <Link href="https://wa.me/917012740820" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/50 hover:bg-white/10 hover:border-white text-white rounded-xl px-6 h-14 flex items-center justify-center group transition-all font-semibold">
                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 50 50"><path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/></svg>
                WhatsApp Us
              </Link>
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
