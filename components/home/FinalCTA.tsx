import { ShieldCheck, Star, Calendar, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800">
          
          {/* Decorative glowing blobs inside */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -right-32 -top-32 w-80 h-80 bg-accent/20 rounded-full blur-[90px] animate-pulse duration-[8000ms]" />
            <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-primary/30 rounded-full blur-[90px] animate-pulse duration-[6000ms]" />
            <div 
              className="absolute inset-0 opacity-[0.02]" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />
          </div>

          <div className="relative z-10 px-6 py-12 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Content */}
            <div className="max-w-lg text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/10 text-white shadow-inner">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase">100% Satisfaction Guaranteed</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Ready to make <br />
                your space{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-emerald-400 whitespace-nowrap">
                  Pest-Free?
                </span>
              </h2>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify lg:text-left max-w-md mx-auto lg:mx-0">
                Join thousands of satisfied customers in Kerala. Contact JAS Pest Control Service today for a free consultation and customized treatment plan tailored to your exact needs.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-300 font-medium justify-center lg:justify-start pt-4 border-t border-white/10">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-slate-200 font-bold shadow-md text-xs">JD</div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-slate-200 font-bold shadow-md text-xs">MK</div>
                  <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-900 flex items-center justify-center text-slate-200 font-bold shadow-md text-xs">SJ</div>
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-slate-900 flex items-center justify-center text-white font-extrabold text-sm shadow-md">+</div>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-0.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>Trusted by 5,000+ happy customers</span>
                </div>
              </div>
            </div>
            
            {/* Right Interactive Card */}
            <div className="shrink-0 w-full max-w-sm bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative group/card">
              {/* Ambient card glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent rounded-2xl -z-10 opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/90 backdrop-blur-sm text-white text-[9px] font-extrabold uppercase tracking-widest py-1 px-3.5 rounded-full shadow-lg border border-accent/20">
                Quick Action
              </div>
              
              <h3 className="text-white font-heading font-bold text-xl mb-6 text-center tracking-tight">Get Started Now</h3>
              
              <div className="flex flex-col gap-4">
                <Link 
                  href="/contact" 
                  className="relative overflow-hidden bg-gradient-to-r from-accent to-emerald-500 text-white rounded-xl text-sm px-6 h-12 transition-all duration-300 flex items-center justify-center gap-2 font-bold group shadow-[0_4px_15px_rgba(34,197,94,0.25)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                
                <div className="relative flex items-center py-1">
                  <div className="flex-grow border-t border-white/[0.08]"></div>
                  <span className="flex-shrink-0 mx-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">or</span>
                  <div className="flex-grow border-t border-white/[0.08]"></div>
                </div>
                
                <Link 
                  href="tel:+917012740820" 
                  className="bg-white/[0.05] border border-white/10 text-white hover:bg-white hover:text-slate-900 hover:border-white rounded-xl text-sm px-6 h-12 transition-all duration-300 flex items-center justify-center gap-2 font-bold group hover:-translate-y-0.5 shadow-sm"
                >
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Call: +91 7012740820</span>
                </Link>
              </div>
              
              <p className="text-center text-slate-400 text-[10px] mt-6 font-medium">
                Available 24/7 for emergency services.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
