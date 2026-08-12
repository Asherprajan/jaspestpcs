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
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'JAS Pest Control Service | Professional Pest Management Solutions in Kerala',
  description: 'Top-rated pest control services in Kerala. Specializing in termite, cockroach, rodent, and mosquito control for residential and commercial properties. ISO 9001:2015 certified.',
  alternates: {
    canonical: 'https://jaspestpcs.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JAS Pest Control Service',
  image: 'https://jaspestpcs.com/images/og-image.jpg',
  '@id': 'https://jaspestpcs.com',
  url: 'https://jaspestpcs.com',
  telephone: '+917012740820',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kerala',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.8505, // Approximate center of Kerala
    longitude: 76.2711,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/jaspestpcs/',
    'https://www.instagram.com/jaspestpcs/',
    'https://twitter.com/jaspestpcs',
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
