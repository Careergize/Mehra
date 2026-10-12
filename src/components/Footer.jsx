import React from 'react';
import { Flower2, MessageCircle, Heart, Phone, ArrowUp } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#C2185B] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          
          {/* Left: Official Emblem & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#1A1819] border border-amber-300/40 flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow-xs">
              <img src="/images/mehra-emblem.jpg" alt="Mehra Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
              <span className="font-serif font-bold text-sm tracking-wide">Mehra</span>
              <span className="hidden sm:inline text-white/60">|</span>
              <span className="text-white/90 text-[11px] sm:text-xs">
                © {new Date().getFullYear()} Mehra Beauty Parlour &amp; Makeup Studio. "Wake Up &amp; Make Up"
              </span>
            </div>
          </div>

          {/* Right: Quick Links matching Reference */}
          <div className="flex items-center gap-5 text-white/90">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#prices" className="hover:text-white transition-colors">Prices</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a 
              href={studioInfo.getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={scrollToTop}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
