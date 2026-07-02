import { Button } from '@/components/ui/button';
import { Phone, Calendar, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary shadow-2xl border border-primary/20">
          
          {/* Decorative CSS Background inside the card */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-primary to-primary opacity-80" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />
          </div>

          <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 mx-auto lg:mx-0 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold tracking-wider uppercase">100% Satisfaction Guaranteed</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Ready to make your space <br className="hidden md:block"/>
                <span className="text-accent relative">
                  Pest-Free?
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Join thousands of satisfied customers in Kerala. Contact JAS Pest Control Service today for a free inspection and customized treatment plan tailored to your exact needs.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-300 font-medium justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-primary flex items-center justify-center text-primary font-bold">JD</div>
                  <div className="w-12 h-12 rounded-full bg-slate-300 border-2 border-primary flex items-center justify-center text-primary font-bold">MK</div>
                  <div className="w-12 h-12 rounded-full bg-slate-400 border-2 border-primary flex items-center justify-center text-primary font-bold">SJ</div>
                  <div className="w-12 h-12 rounded-full bg-accent border-2 border-primary flex items-center justify-center text-white font-bold text-lg">+</div>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex text-yellow-400 mb-1">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <span>Trusted by 5,000+ customers</span>
                </div>
              </div>
            </div>
            
            {/* Right Interactive Card */}
            <div className="shrink-0 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                Quick Action
              </div>
              
              <h3 className="text-white font-bold text-2xl mb-8 text-center">Get Started Now</h3>
              
              <div className="flex flex-col gap-5">
                <Link href="/contact" className="bg-accent hover:bg-accent/90 text-white rounded-xl text-lg px-8 py-7 h-auto w-full shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-3 font-bold group border border-accent/50">
                  <Calendar className="w-6 h-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
                  Book Free Inspection
                </Link>
                
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium uppercase tracking-wider">or</span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>
                
                <Link href="tel:7012740820" className="bg-white/5 border-2 border-white/20 hover:bg-white hover:text-primary text-white hover:border-white rounded-xl text-lg px-8 py-7 h-auto w-full transition-all duration-300 flex items-center justify-center gap-3 font-bold group">
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Call: 7012740820
                </Link>
              </div>
              
              <p className="text-center text-slate-400 text-xs mt-6">
                Available 24/7 for emergency services.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
