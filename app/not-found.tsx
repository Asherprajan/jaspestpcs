import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bug, ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-slate-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 border border-red-100">
            <Bug className="w-12 h-12" />
          </div>
          
          <h1 className="text-4xl font-heading font-bold text-primary mb-2">404</h1>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            Oops! It seems this page has been exterminated. The link you followed may be broken, or the page may have been removed.
          </p>
          
          <div className="flex flex-col space-y-3">
            <Link href="/" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center h-12 font-medium transition-colors">
              <Home className="w-5 h-5 mr-2" />
              Back to Homepage
            </Link>
            
            <Link href="/contact" className="w-full rounded-full flex items-center justify-center h-12 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-colors">
              <Search className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
