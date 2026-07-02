'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Industries We Serve', href: '/industries' },
    { name: 'Gallery', href: '/gallery', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image 
              src="/logo.svg" 
              alt="JAS Pest Control Service Logo" 
              width={250} 
              height={70} 
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-primary font-semibold text-[13px] hover:text-accent transition-colors flex items-center group relative py-2"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:text-accent transition-transform group-hover:rotate-180" />
                )}
                {/* Hover Underline Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden lg:flex bg-[#4ADE80] hover:bg-[#22C55E] text-primary hover:text-white font-bold rounded-lg px-5 py-2 shadow-sm transition-all items-center">
              <CalendarDays className="w-4 h-4 mr-2" />
              Get a Free Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden p-2 text-primary hover:bg-slate-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 flex flex-col">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-accent font-medium flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
          <div className="px-6 pt-4 pb-2 border-t border-slate-100 mt-2">
            <Link href="/contact" className="flex w-full justify-center items-center py-2.5 rounded-lg bg-secondary hover:bg-accent text-white font-medium transition-colors">
              <CalendarDays className="w-4 h-4 mr-2" />
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
