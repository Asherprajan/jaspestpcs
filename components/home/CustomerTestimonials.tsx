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
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A2E52 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#16A34A 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
              Testimonials
            </h3>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 w-fit shadow-sm">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">4.9/5</span>
              <span className="text-sm text-muted-foreground">Google Reviews</span>
            </div>
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none shadow-lg bg-white relative">
                  <div className="absolute top-6 right-6 text-slate-100">
                    <Quote className="w-12 h-12 fill-current" />
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-8 relative">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center border-t border-slate-100 pt-6">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-primary">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-10 gap-2">
            <CarouselPrevious className="static translate-y-0 bg-white hover:bg-secondary hover:text-white border-none shadow-md" />
            <CarouselNext className="static translate-y-0 bg-white hover:bg-secondary hover:text-white border-none shadow-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
