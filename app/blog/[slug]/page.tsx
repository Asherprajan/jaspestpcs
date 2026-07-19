import { blogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-[800px]">
        <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
        </Link>
        
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center flex-wrap gap-4 text-slate-500 font-medium border-b border-slate-100 pb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" /> 
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> 
              {blog.author}
            </span>
          </div>
        </header>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Custom typography styles without relying on the plugin */}
        <div 
          className="blog-content text-lg text-slate-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <style dangerouslySetInnerHTML={{__html: `
          .blog-content h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-family: var(--font-heading);
          }
          .blog-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-family: var(--font-heading);
          }
          .blog-content p {
            margin-bottom: 1.5rem;
            text-align: justify;
          }
          .blog-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .blog-content li {
            margin-bottom: 0.5rem;
          }
          .blog-content strong {
            color: #0f172a;
            font-weight: 700;
          }
        `}} />

        <div className="mt-16 pt-8 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Experiencing Pest Problems?</h3>
            <p className="text-slate-600 mb-6">
              Our experts are ready to help you with safe and effective pest control solutions.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
