import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/lib/blogs';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Pest Control Knowledge Base
          </h1>
          <p className="text-lg text-muted-foreground">
            Tips, guides, and expert advice on keeping your property pest-free from the professionals at Jas Pest Control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <Link href={`/blog/${blog.slug}`} className="relative h-64 w-full block overflow-hidden group">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <Link href={`/blog/${blog.slug}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <User className="w-4 h-4 text-primary" /> {blog.author}
                  </span>
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
