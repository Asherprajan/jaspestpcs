'use client';

import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedServices() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary mb-4 border border-primary/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-bold tracking-wider uppercase">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Featured Pest Control <span className="text-primary">Services</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We offer comprehensive, science-backed pest management solutions tailored specifically for Kerala's unique climate and challenges.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              href="/services" 
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-primary text-primary hover:text-white border-2 border-primary rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(10,46,82,0.15)]"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={`/services/${service.slug}`} className="block h-full outline-none">
                  <Card className="h-full border-0 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,46,82,0.08)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden bg-white flex flex-col relative">
                    
                    {/* Image Section */}
                    <div className="relative h-[260px] w-full overflow-hidden shrink-0 rounded-t-[2rem]">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 border border-white/20">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <CardContent className="p-8 relative flex-grow flex flex-col bg-white">
                      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 text-justify">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        Discover More 
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="static translate-y-0 w-14 h-14 rounded-full border-2 border-slate-200 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" />
            <CarouselNext className="static translate-y-0 w-14 h-14 rounded-full border-2 border-slate-200 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
