import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
              <p className="text-lg text-slate-700 leading-relaxed">
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
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-4">Need {service.title}?</h3>
              <p className="text-slate-600 mb-6">
                Don't let pests take over your property. Contact our experts today for a free inspection and quote.
              </p>
              <Link 
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-all"
              >
                Book an Inspection <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Or call us directly</p>
                <a href="tel:+919876543210" className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
