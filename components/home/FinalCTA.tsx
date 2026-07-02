import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#0A2E52]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-accent blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-white blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
          Ready to make your space <span className="text-accent">Pest-Free?</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Don't let pests take over your property. Contact JAS Pest Control Service today for a free inspection and customized treatment plan.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-lg shadow-accent/30 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Inspection
          </Button>
          
          <span className="text-slate-400 font-medium hidden sm:block">or</span>
          
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white hover:text-primary text-white rounded-full text-lg px-8 py-6 h-auto w-full sm:w-auto backdrop-blur-sm transition-all duration-300 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Call: 7012740820
          </Button>
        </div>
      </div>
    </section>
  );
}
