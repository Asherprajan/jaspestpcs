import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full pt-20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="container mx-auto px-4 max-w-[1200px] h-full relative z-10 flex flex-col justify-end pb-16">
          <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-6">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed text-justify">
                {service.detailedContent}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 text-justify">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-[#0A2E52] to-[#124270] text-white rounded-3xl p-8 shadow-xl border border-white/10 overflow-hidden relative group">
              {/* Decorative background glass element */}
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Need {service.title}?</h3>
              <p className="text-slate-200 mb-6 text-justify leading-relaxed relative z-10">
                Don't let pests take over your property. Contact our experts today for a free consultation and quote.
              </p>
              
              <Link 
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white py-4 rounded-2xl font-bold shadow-[0_0_20px_rgba(74,222,128,0.25)] hover:shadow-[0_0_25px_rgba(74,222,128,0.45)] transition-all duration-300 relative z-10"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Or call us directly</p>
                <a href="tel:+917012740820" className="text-2xl font-black text-accent hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +91 7012740820
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
