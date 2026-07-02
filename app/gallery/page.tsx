import Image from 'next/image';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=800&auto=format&fit=crop',
    title: 'Commercial Fumigation',
    category: 'Commercial'
  },
  {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    title: 'Lab Testing',
    category: 'Equipment'
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c4263b?q=80&w=800&auto=format&fit=crop',
    title: 'Warehouse Inspection',
    category: 'Commercial'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    title: 'Residential Treatment',
    category: 'Residential'
  },
  {
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
    title: 'Termite Damage Assessment',
    category: 'Inspection'
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    title: 'Kitchen Sanitization',
    category: 'Residential'
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
    title: 'Restaurant Audit',
    category: 'Commercial'
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    title: 'Hotel Bed Bug Check',
    category: 'Commercial'
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    title: 'Hospital Sterilization',
    category: 'Healthcare'
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
