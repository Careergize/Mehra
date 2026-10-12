import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar, ChevronRight, Flower2 } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Prices', href: '#prices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F8BBD0]/40 py-3' 
        : 'bg-white py-4 border-b border-stone-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Exact Storefront Emblem: Golden M + Woman Silhouette */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#1A1819] flex items-center justify-center p-1 border border-amber-400/40 shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img 
                src="/images/mehra-emblem.jpg" 
                alt="Mehra Official Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1819] leading-none group-hover:text-[#C2185B] transition-colors">
                Mehra
              </span>
              <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[#C2185B] mt-0.5">
                Beauty Parlour &amp; Makeup Studio
              </span>
              <span className="text-[9px] font-medium tracking-wider uppercase text-stone-500">
                "Wake Up &amp; Make Up"
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-[#C2185B] transition-colors py-1 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C2185B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Vibrant Berry Pink "Book Appointment" CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I would like to inquire about appointments and bridal packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#F8BBD0] text-stone-700 hover:bg-[#FCE4EC] hover:text-[#C2185B] transition-all"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] shadow-md shadow-[#C2185B]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] shadow-xs"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-800 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#F8BBD0]/40 bg-white shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-5 pt-3 pb-6 space-y-3">
            <div className="py-2 border-b border-stone-100 text-xs font-medium text-stone-500">
              Ground Floor, Chirayinmel Building, Kanimangalam, Thrissur
            </div>
            
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-stone-800 hover:bg-[#FCE4EC] hover:text-[#C2185B] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <a
                href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I would like to inquire about bridal packages & services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Direct (+91 79072 80180)
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
