import React, { useState } from 'react';
import { MessageCircle, X, Calendar } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function FloatingWhatsApp({ onOpenBooking }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-white text-[#1A1819] px-4 py-2.5 rounded-2xl shadow-xl border border-[#F8BBD0] max-w-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex-1">
            <p className="text-xs font-bold text-[#C2185B]">
              Need quick appointment help?
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              Chat directly with our Thrissur team on WhatsApp!
            </p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2.5">
        
        {/* Quick Booking Button */}
        <button
          onClick={onOpenBooking}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] shadow-lg border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Open Appointment Booking"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Slot</span>
        </button>

        {/* WhatsApp Floating Action Button */}
        <a
          href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I'm visiting your website and would like to inquire about booking.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#20ba5a] to-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat with Mehra Beauty Parlour on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 relative z-10 fill-white text-emerald-600" />

          {/* Online badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </span>
        </a>

      </div>

    </div>
  );
}
