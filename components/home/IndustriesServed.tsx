'use client';

import { 
  Home, 
  Building, 
  Building2, 
  Briefcase, 
  Landmark, 
  Store, 
  Stethoscope, 
  Cross,
  Hotel,
  Palmtree,
  UtensilsCrossed,
  Pizza,
  Warehouse,
  Factory,
  Wrench,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function IndustriesServed() {
  const [activeTab, setActiveTab] = useState('Residential');

  const categories = ['Residential', 'Commercial', 'Industrial', 'Institutional'];

  const industryData: Record<string, { name: string; icon: any; desc: string }[]> = {
    Residential: [
      { name: 'Homes', icon: Home, desc: 'Complete pest protection for your family.' },
      { name: 'Villas', icon: Building, desc: 'Specialized care for large properties.' },
      { name: 'Apartments', icon: Building2, desc: 'Effective solutions for multi-housing.' }
    ],
    Commercial: [
      { name: 'Offices', icon: Briefcase, desc: 'Maintain a clean, pest-free workspace.' },
      { name: 'Hotels', icon: Hotel, desc: 'Ensure guest satisfaction and hygiene.' },
      { name: 'Restaurants', icon: UtensilsCrossed, desc: 'Strict compliance with food safety.' },
      { name: 'Banks', icon: Landmark, desc: 'Secure and discreet pest management.' },
      { name: 'Showrooms', icon: Store, desc: 'Protect your merchandise and brand.' },
      { name: 'Resorts', icon: Palmtree, desc: 'Eco-friendly treatments for large areas.' }
    ],
    Industrial: [
      { name: 'Food Industry', icon: Pizza, desc: 'Zero tolerance for pests in food processing.' },
      { name: 'Warehouses', icon: Warehouse, desc: 'Protect stored goods from infestations.' },
      { name: 'Factories', icon: Factory, desc: 'Large scale industrial pest control.' },
      { name: 'Manufacturing', icon: Wrench, desc: 'Custom solutions for complex facilities.' }
    ],
    Institutional: [
      { name: 'Hospitals', icon: Stethoscope, desc: 'Sanitary, chemical-safe environments.' },
      { name: 'Clinics', icon: Cross, desc: 'Protecting patient health.' },
      { name: 'Educational', icon: GraduationCap, desc: 'Safe spaces for students to learn.' }
    ]
  };

  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="w-8 h-[1px] bg-accent"></span>
          <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-accent uppercase">
            INDUSTRIES WE PROTECT
          </h3>
          <span className="w-8 h-[1px] bg-accent"></span>
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
          Comprehensive Pest Management Solutions for Every Industry
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm w-fit mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
              activeTab === category ? 'text-white' : 'text-slate-600 hover:text-primary'
            }`}
          >
            {activeTab === category && (
              <motion.div
                layoutId="activeIndustryTab"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          >
            {industryData[activeTab].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 p-6 hover:border-accent hover:shadow-[0_8px_30px_rgba(34,197,94,0.12)] transition-all group text-center"
              >
                <div className="w-14 h-14 bg-slate-50 group-hover:bg-accent/10 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight mb-2">
                  {industry.name}
                </span>
                <p className="text-[11px] text-slate-500 font-medium px-2 leading-snug">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-center mt-auto">
        <Link href="/industries" className="inline-flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-full px-8 py-3 text-sm font-bold mt-4 transition-all">
          <span>View All Industries</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
