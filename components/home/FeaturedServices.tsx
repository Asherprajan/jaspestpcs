'use client';

import { ArrowRight, Bug, Shield, Activity, BedDouble, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Cockroach Control',
    description: 'Effective elimination of all cockroach species with advanced gel baiting and targeted spray treatments. Ensuring long-lasting protection.',
    image: 'https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=800&auto=format&fit=crop',
    icon: Bug,
    href: '/services/cockroach-control',
  },
  {
    title: 'Termite Control',
    description: 'Comprehensive anti-termite treatment for pre and post-construction. Protect your valuable property from silent destroyers.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
    icon: Shield,
    href: '/services/termite-control',
  },
  {
    title: 'Rodent Control',
    description: 'Strategic placement of baits and traps to eradicate rats and mice, preventing disease spread and property damage.',
    image: 'https://images.unsplash.com/photo-1590483736622-398541ce0519?q=80&w=800&auto=format&fit=crop',
    icon: Activity,
    href: '/services/rodent-control',
  },
  {
    title: 'Bed Bug Treatment',
    description: 'Thorough inspection and specialized chemical treatments to eliminate bed bugs at all life stages for a peaceful sleep.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    icon: BedDouble,
    href: '/services/bed-bug-treatment',
  },
  {
    title: 'Ant Control',
    description: 'Targeted solutions to get rid of black ants, red ants, and other invasive ant species from your premises permanently.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    icon: Target,
    href: '/services/ant-control',
  },
];

export function FeaturedServices() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-slate-50 z-0"></div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
              Our Expertise
            </h3>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Featured Pest Control Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive pest management solutions tailored to address specific pest challenges in Kerala's climate.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-3 text-sm font-medium transition-all">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
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
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="h-full border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden bg-white flex flex-col">
                  <div className="relative h-[220px] bg-slate-100 overflow-hidden shrink-0">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E52]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 relative flex-grow flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="px-6 pb-6 pt-0 mt-auto">
                    <Link href={service.href} className="inline-flex items-center justify-center gap-2 w-full rounded-full border border-slate-200 text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 py-2.5 text-sm font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 hover:bg-secondary hover:text-white border-primary/20" />
            <CarouselNext className="static translate-y-0 hover:bg-secondary hover:text-white border-primary/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
