import { MessageCircle, Phone } from 'lucide-react';

export function FloatingButtons() {
  return (
    <>
      <a 
        href="https://wa.me/917012740820" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex flex-col items-center group"
      >
        <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.5)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c5.506 0 9.982 4.476 9.982 9.985 0 2.748-1.122 5.334-3.11 7.23-1.928 1.838-4.47 2.853-7.142 2.766l-4.526 1.189 1.205-4.41c-1.68-1.748-2.613-4.062-2.613-6.49 0-5.508 4.476-9.983 9.983-9.983zm0 1.666c-4.587 0-8.318 3.73-8.318 8.317 0 1.956.684 3.824 1.955 5.305l-.76 2.784 2.848-.748c1.436 1.127 3.197 1.74 5.034 1.74 4.587 0 8.318-3.73 8.318-8.318 0-4.587-3.73-8.318-8.318-8.318zm4.498 11.238c-.246.683-1.218 1.258-1.905 1.4-.492.1-1.15.176-3.238-.686-2.673-1.106-4.385-3.864-4.516-4.04-.132-.176-1.077-1.432-1.077-2.732s.672-1.942.906-2.188c.234-.246.504-.308.672-.308.168 0 .336.01.48.016.155.006.36-.06.564.432.216.516.744 1.812.816 1.956.072.144.12.312.024.504-.096.192-.144.312-.288.48-.144.168-.3.36-.432.48-.144.132-.294.276-.132.552.162.276.72 1.188 1.548 1.932 1.068.96 1.956 1.26 2.232 1.404.276.144.444.12.612-.048.168-.168.72-.84.912-1.128.192-.288.384-.24.636-.144.252.096 1.608.756 1.884.888.276.132.456.192.528.3.072.108.072.636-.174 1.32z"/></svg>
        </div>
        <span className="mt-1 text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">WhatsApp</span>
      </a>

      <a 
        href="tel:7012740820" 
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
      >
        <div className="w-14 h-14 bg-[#4ADE80] text-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.5)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
          <Phone className="w-7 h-7 fill-current" />
        </div>
        <span className="mt-1 text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">Call Now</span>
      </a>
    </>
  );
}
