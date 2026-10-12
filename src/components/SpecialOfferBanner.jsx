import React from 'react';
import { CalendarHeart, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function SpecialOfferBanner({ onOpenBooking }) {
  const offerWhatsAppLink = studioInfo.getWhatsAppLink(
    "Hi Mehra Beauty Studio, I would like to check bridal date availability for Wedding Season 2026 (Muhurtham / Reception / Engagement)."
  );

  return (
    <section className="py-8 bg-[#FFFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Matching Reference Design */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#880E4F] p-8 sm:p-12 text-white shadow-xl shadow-[#C2185B]/20">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left Copy */}
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-white">
                <CalendarHeart className="w-3.5 h-3.5 text-amber-300" />
                <span>Kerala Bridal Calendar 2026</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Wedding Season 2026 Bookings Open
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-sans">
                Reserve your Muhurtham, Reception, or Engagement dates early. Customized packages available for bride &amp; bridal party.
              </p>
            </div>

            {/* Right Action: Dates Open & CTA Pill */}
            <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0">
              <div className="flex flex-col items-center sm:items-end">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
                  NOW OPEN
                </span>
                <span className="text-[11px] uppercase tracking-widest text-amber-200 font-bold mt-1">
                  Limited Muhurtham Slots
                </span>
              </div>

              <a
                href={offerWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#C2185B] bg-white hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Check Date Availability on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
