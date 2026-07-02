'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CustomerTestimonials() {
  const testimonials = [
    {
      name: 'Mohammed Ali',
      location: 'Kannur',
      rating: 5,
      text: 'Very professional service. The team from JAS Pest Control arrived on time, explained the process clearly, and eradicated the termite issue in my home. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      location: 'Kozhikode',
      rating: 5,
      text: 'We had a severe cockroach problem in our restaurant kitchen. JAS team did an excellent job with their gel treatment. It has been 3 months and we haven\'t seen a single roach since.',
    },
    {
      name: 'Thomas Kurian',
      location: 'Wayanad',
      rating: 5,
      text: 'Their pre-construction termite treatment is top-notch. I appreciated their thorough documentation and the warranty they provided. Real experts in the field.',
    },
    {
      name: 'Anita Nair',
      location: 'Thalassery',
      rating: 5,
      text: 'Prompt response and effective treatment for bed bugs. The follow-up calls to check if the issue was resolved showed their commitment to customer satisfaction.',
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22C55E 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">
            Testimonials
          </h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
            <div className="flex text-accent">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-base font-bold text-white">4.9/5</span>
            <span className="text-sm text-slate-300">Google Reviews</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none shadow-2xl bg-white rounded-3xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute -top-6 -right-6 text-slate-50 group-hover:text-primary/5 transition-colors duration-500">
                    <Quote className="w-40 h-40 fill-current rotate-12" />
                  </div>
                  <CardContent className="p-10 relative z-10 flex flex-col h-full">
                    <div className="flex text-accent mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-10 text-lg leading-relaxed flex-grow relative">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center border-t border-slate-100 pt-6 mt-auto">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-5 shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-primary font-medium">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="static translate-y-0 bg-white/10 hover:bg-secondary text-white hover:text-white border border-white/20 hover:border-secondary shadow-lg w-12 h-12 rounded-full transition-all duration-300" />
            <CarouselNext className="static translate-y-0 bg-white/10 hover:bg-secondary text-white hover:text-white border border-white/20 hover:border-secondary shadow-lg w-12 h-12 rounded-full transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
