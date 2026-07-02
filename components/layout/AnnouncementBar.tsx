import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-slate-200 text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-[1400px]">
        <div className="flex items-center space-x-6">
          <a href="tel:7012740820" className="flex items-center hover:text-white transition-colors font-medium">
            <Phone className="w-3.5 h-3.5 mr-2 text-slate-300" />
            7012740820
          </a>
          <a href="mailto:jaspest@jaspcs.com" className="flex items-center hover:text-white transition-colors font-medium">
            <Mail className="w-3.5 h-3.5 mr-2 text-slate-300" />
            jaspest@jaspcs.com
          </a>
          <a href="mailto:jaspestcontrolkl@gmail.com" className="flex items-center hover:text-white transition-colors font-medium">
            <Mail className="w-3.5 h-3.5 mr-2 text-slate-300" />
            jaspestcontrolkl@gmail.com
          </a>
          <div className="flex items-center font-medium">
            <MapPin className="w-3.5 h-3.5 mr-2 text-slate-300" />
            Iritty, Kannur, Kerala
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-medium hidden lg:inline-block">Follow Us:</span>
          <div className="flex items-center space-x-2">
            <Link href="#" className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity" title="Facebook">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="#" className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity" title="Instagram">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
            <Link href="#" className="w-6 h-6 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-opacity" title="LinkedIn">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link href="#" className="w-6 h-6 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity" title="YouTube">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
            <Link href="#" className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity" title="WhatsApp">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c5.506 0 9.982 4.476 9.982 9.985 0 2.748-1.122 5.334-3.11 7.23-1.928 1.838-4.47 2.853-7.142 2.766l-4.526 1.189 1.205-4.41c-1.68-1.748-2.613-4.062-2.613-6.49 0-5.508 4.476-9.983 9.983-9.983zm0 1.666c-4.587 0-8.318 3.73-8.318 8.317 0 1.956.684 3.824 1.955 5.305l-.76 2.784 2.848-.748c1.436 1.127 3.197 1.74 5.034 1.74 4.587 0 8.318-3.73 8.318-8.318 0-4.587-3.73-8.318-8.318-8.318zm4.498 11.238c-.246.683-1.218 1.258-1.905 1.4-.492.1-1.15.176-3.238-.686-2.673-1.106-4.385-3.864-4.516-4.04-.132-.176-1.077-1.432-1.077-2.732s.672-1.942.906-2.188c.234-.246.504-.308.672-.308.168 0 .336.01.48.016.155.006.36-.06.564.432.216.516.744 1.812.816 1.956.072.144.12.312.024.504-.096.192-.144.312-.288.48-.144.168-.3.36-.432.48-.144.132-.294.276-.132.552.162.276.72 1.188 1.548 1.932 1.068.96 1.956 1.26 2.232 1.404.276.144.444.12.612-.048.168-.168.72-.84.912-1.128.192-.288.384-.24.636-.144.252.096 1.608.756 1.884.888.276.132.456.192.528.3.072.108.072.636-.174 1.32z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
