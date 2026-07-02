'use client';

import { Search, ShieldAlert, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function OurProcess() {
  const steps = [
    {
      title: '1. Thorough Inspection',
      description: 'Our trained professionals conduct a detailed survey of your premises to identify the type of pest, level of infestation, and vulnerable areas.',
      icon: Search,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: '2. Targeted Treatment',
      description: 'We apply safe, approved, and highly effective treatments customized to your specific pest problem, ensuring maximum impact with minimal disruption.',
      icon: ShieldAlert,
      color: 'bg-accent/20 text-accent',
    },
    {
      title: '3. Follow-up & Monitoring',
      description: 'We do not just treat and leave. We provide scheduled follow-ups and continuous monitoring to ensure your space remains completely pest-free.',
      icon: CheckCircle,
      color: 'bg-secondary/20 text-secondary',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
            How We Work
          </h3>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Proven 3-Step Process
          </h2>
          <p className="text-muted-foreground text-lg">
            We follow a systematic approach to ensure complete eradication of pests and long-lasting protection for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-100 -z-10">
            <div className="absolute top-0 left-0 h-full bg-accent w-0 transition-all duration-1000" id="process-line"></div>
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="text-center group"
            >
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg bg-white border-[6px] border-slate-50 transition-transform duration-500 group-hover:scale-110`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
