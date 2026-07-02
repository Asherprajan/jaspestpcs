import Image from 'next/image';
import Link from 'next/link';
import { Building2, Home, Utensils, Hospital, Warehouse, Hotel, ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    title: 'Residential Properties',
    description: 'Protecting homes, apartments, and villas from household pests to ensure your family’s health and safety.',
    icon: Home,
    image: '/images/industries/ind_residential_1782991464936.png',
    features: ['Pet-safe chemicals', 'Discreet service', 'Long-term prevention']
  },
  {
    title: 'Restaurants & Food Service',
    description: 'Maintaining zero-tolerance pest environments to protect your reputation and ensure health code compliance.',
    icon: Utensils,
    image: '/images/industries/ind_restaurant_1782991476546.png',
    features: ['Audit-ready reporting', 'Odorless treatments', 'After-hours service']
  },
  {
    title: 'Commercial Offices',
    description: 'Ensuring a clean, distraction-free environment for employees and maintaining the professional image of your workspace.',
    icon: Building2,
    image: '/images/industries/ind_office_1782991488282.png',
    features: ['Non-disruptive methods', 'Preventative maintenance', 'Comprehensive coverage']
  },
  {
    title: 'Hospitality & Hotels',
    description: 'Safeguarding your guests’ experience by completely eradicating bed bugs, rodents, and other hospitality pests.',
    icon: Hotel,
    image: '/images/industries/ind_hotel_1782991498210.png',
    features: ['Rapid response teams', 'Bed bug specialists', 'Discreet protocols']
  },
  {
    title: 'Healthcare Facilities',
    description: 'Strict, highly-sanitized pest management for hospitals and clinics where hygiene is a matter of life and death.',
    icon: Hospital,
    image: '/images/industries/ind_hospital_1782991509734.png',
    features: ['Stringent safety standards', 'Low-toxicity products', 'Targeted eradication']
  },
  {
    title: 'Warehousing & Logistics',
    description: 'Protecting valuable inventory and supply chains from destructive rodents, termites, and crawling insects.',
    icon: Warehouse,
    image: '/images/industries/ind_warehouse_1782991521070.png',
    features: ['Large-scale exclusion', 'Rodent baiting stations', 'Fumigation services']
  }
];

export default function IndustriesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Customized Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From cozy family homes to sprawling industrial complexes, JAS Pest Control provides customized, industry-specific solutions that guarantee a pest-free environment.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col border border-slate-100">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <industry.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">{industry.title}</h2>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Decorative background logo/icon */}
                  <div className="absolute -top-12 -right-12 text-slate-50 opacity-50 transform -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <industry.icon className="w-64 h-64" />
                  </div>

                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed relative z-10 text-lg">
                    {industry.description}
                  </p>
                  
                  <div className="mb-8 relative z-10 bg-slate-50 p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-accent rounded-full" />
                      Key Solutions
                    </h4>
                    <ul className="space-y-3">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto relative z-10">
                    <Link 
                      href="/contact"
                      className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-colors group/btn"
                    >
                      Request Consultation
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
