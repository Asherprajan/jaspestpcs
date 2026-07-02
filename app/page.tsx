import { HeroSection } from '@/components/home/HeroSection';
import { TrustStatistics } from '@/components/home/TrustStatistics';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { IndustriesServed } from '@/components/home/IndustriesServed';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { OurProcess } from '@/components/home/OurProcess';
import { CustomerTestimonials } from '@/components/home/CustomerTestimonials';
import { FAQ } from '@/components/home/FAQ';
import { LatestBlogs } from '@/components/home/LatestBlogs';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Sections below hero: Why Choose Us & Industries */}
      <section className="bg-slate-50 py-16 lg:py-24 relative z-0">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            {/* Industries takes 8 columns on extra large screens */}
            <div className="xl:col-span-8 h-full">
              <IndustriesServed />
            </div>
            
            {/* Why Choose Us takes 4 columns on extra large screens */}
            <div className="xl:col-span-4 h-full">
              <WhyChooseUs />
            </div>
          </div>
        </div>
      </section>

      <TrustStatistics />
      
      <FeaturedServices />
      
      <OurProcess />
      
      <CustomerTestimonials />
      
      <FAQ />
      
      <LatestBlogs />
      
      <FinalCTA />
    </>
  );
}
