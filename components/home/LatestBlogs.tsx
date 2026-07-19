import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { blogs as allBlogs } from '@/lib/blogs';
import Image from 'next/image';

export function LatestBlogs() {
  const blogs = allBlogs.slice(0, 3);


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
            <Link href="/blog" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors text-primary border border-primary/20 hover:bg-primary hover:text-white rounded-full">
              View All Posts
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white flex flex-col h-full">
              <div className="relative h-56 bg-slate-200 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 text-justify">
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
