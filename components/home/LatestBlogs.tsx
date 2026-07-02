import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LatestBlogs() {
  const blogs = [
    {
      title: '5 Signs of Termite Infestation in Your Home',
      excerpt: 'Termites can cause silent destruction. Learn how to identify the early warning signs of a termite infestation before it causes structural damage.',
      date: 'May 15, 2026',
      author: 'Pest Expert',
      image: '/images/blog/termite-signs.jpg',
      slug: 'signs-of-termite-infestation',
    },
    {
      title: 'How to Keep Mosquitoes Away During Monsoon',
      excerpt: 'Kerala monsoons bring a surge in mosquito populations. Discover effective preventive measures to protect your family from vector-borne diseases.',
      date: 'June 02, 2026',
      author: 'Health Advisor',
      image: '/images/blog/mosquito-prevention.jpg',
      slug: 'keep-mosquitoes-away-monsoon',
    },
    {
      title: 'Why DIY Pest Control Often Fails',
      excerpt: 'Store-bought sprays might offer temporary relief, but they rarely solve the root cause. Here is why professional pest control is a better investment.',
      date: 'June 18, 2026',
      author: 'JAS Team',
      image: '/images/blog/diy-vs-pro.jpg',
      slug: 'why-diy-pest-control-fails',
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">
              Pest Control Insights
            </h3>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-muted-foreground text-lg">
              Read our latest articles, tips, and guides on keeping your surroundings safe, healthy, and pest-free.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/blog">
              <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary hover:text-white rounded-full">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white flex flex-col h-full">
              <div className="relative h-56 bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 font-medium">
                  [Image: {blog.title}]
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1.5" />
                    {blog.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {blog.excerpt}
                </p>
                
                <Link href={`/blog/${blog.slug}`} className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors text-sm mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
