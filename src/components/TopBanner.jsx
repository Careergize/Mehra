import React, { useState } from 'react';
import { Phone, Clock, X } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function TopBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#1A1819] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#F8BBD0]/20 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#C2185B]/30 text-[#F8BBD0] font-bold px-2.5 py-0.5 rounded-full text-xs">
            Kerala Bridal Season 2026
          </span>
          <p className="text-stone-300 hidden sm:inline">
            Ground Floor, Chirayinmel Building, Kanimangalam, Thrissur
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-stone-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F48FB1]" />
            <span className="hidden md:inline">Mon–Sat: 9:30 AM – 7:30 PM</span>
            <span className="md:hidden text-xs">Open Today</span>
          </div>

          <a 
            href={`tel:${studioInfo.phoneRaw}`} 
            className="flex items-center gap-1.5 text-[#F8BBD0] hover:text-white font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{studioInfo.phone}</span>
          </a>

          <button 
            onClick={() => setDismissed(true)} 
            className="text-stone-400 hover:text-white p-0.5 ml-1 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
