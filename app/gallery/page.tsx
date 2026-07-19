import Image from 'next/image';

const photos = [
  {
    src: '/images/anti-termite-pre-construction.jpeg',
    title: 'Pre-construction Anti-Termite Treatment',
    category: 'Treatment'
  },
  {
    src: '/images/water-food.jpeg',
    title: 'Food Safety & Hygiene Inspection',
    category: 'Inspection'
  },
  {
    src: '/images/water-food-1.jpeg',
    title: 'Water Tank Sanitization Service',
    category: 'Treatment'
  },
  {
    src: '/images/water-food-2.jpeg',
    title: 'Commercial Kitchen Pest Control',
    category: 'Commercial'
  },
  {
    src: '/images/water-food-3.jpeg',
    title: 'Water & Food Quality Testing',
    category: 'Inspection'
  },
  {
    src: '/images/home1.jpeg',
    title: 'Living Room Sanitization',
    category: 'Residential'
  },
  {
    src: '/images/home2.jpeg',
    title: 'Bed Bug Thermal Heat Treatment',
    category: 'Treatment'
  },
  {
    src: '/images/home3.jpeg',
    title: 'Residential Cockroach Control',
    category: 'Residential'
  },
  {
    src: '/images/home4.jpeg',
    title: 'Home Termite Barrier Setup',
    category: 'Treatment'
  }
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-[1400px] mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Photo Gallery
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore our professional pest control team in action. From detailed residential inspections to large-scale commercial fumigation.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Simple responsive grid for photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full mb-2">
                  {photo.category}
                </span>
                <h3 className="text-white font-bold text-lg">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
