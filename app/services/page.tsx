import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Professional Pest Control Services
          </h1>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive, safe, and effective pest management solutions for residential and commercial properties across Kerala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-sm">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow text-justify">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
