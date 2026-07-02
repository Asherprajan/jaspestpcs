'use client';

import { motion } from 'framer-motion';

export function TrustStatistics() {
  const stats = [
    { value: '5000+', label: 'Happy Customers' },
    { value: '15000+', label: 'Projects Completed' },
    { value: '21+', label: 'Years Experience' },
    { value: '100%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="bg-primary py-4 lg:py-6">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10 text-center lg:text-left">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full sm:w-auto flex-1 flex flex-col items-center justify-center pt-4 lg:pt-0 px-4 ${index === 0 ? 'lg:pl-0' : ''} ${index === stats.length - 1 ? 'lg:pr-0' : ''}`}
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-medium tracking-wide mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
