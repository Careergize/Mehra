import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function LocationContactSection({ onOpenBooking }) {
  return (
    <section id="contact" className="py-16 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout Matching Exact Reference Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* Column 1: Contact Us with Pink Circular Icons */}
          <div className="bg-[#FFFDFD] rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1819] mb-6">
                Contact Us
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <a 
                        href={`tel:${studioInfo.phoneRaw}`} 
                        className="text-xs sm:text-sm font-bold text-[#1A1819] hover:text-[#C2185B] transition-colors"
                      >
                        {studioInfo.phone}
                      </a>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-bold">WhatsApp</span>
                    </div>
                    <a 
                      href={`tel:${studioInfo.secondaryPhoneRaw}`} 
                      className="text-xs text-stone-600 hover:text-[#C2185B] transition-colors block mt-0.5"
                    >
                      {studioInfo.secondaryPhone} (Alternate)
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <a 
                      href={studioInfo.getWhatsAppLink()} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-[#1A1819] hover:text-[#C2185B] transition-colors block"
                    >
                      +91 79072 80180
                    </a>
                    <span className="text-[11px] text-stone-500">Instant WhatsApp Booking</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#1A1819] leading-snug">
                      Chirayinmel Building, Ground Floor
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Near SN School, Kanimangalam, Thrissur, Kerala – 680027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <a
                href={studioInfo.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#C2185B] hover:text-[#880E4F] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div className="bg-[#FFFDFD] rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1819] mb-6">
                Opening Hours
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <p className="text-xs font-bold text-stone-800">Monday – Saturday</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#C2185B]">{studioInfo.hours.monSat}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-800">Sunday</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#C2185B]">{studioInfo.hours.sun}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFF5F8] p-3.5 rounded-2xl border border-[#F8BBD0]/50 text-xs text-stone-600">
                  <p className="font-bold text-[#C2185B] mb-0.5">Early Muhurtham Timings:</p>
                  <p className="text-[11px] leading-relaxed">
                    Bridal slots starting from 4:00 AM available upon prior appointment for temple weddings.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Open Today in Kanimangalam
              </span>
            </div>
          </div>

          {/* Column 3: "Book Your Appointment" Card in Dark Purple Matching Reference */}
          <div className="bg-gradient-to-br from-[#4A154B] via-[#3B103C] to-[#2B0A2C] text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-purple-950/20 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D81B60]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Book Your<br />Appointment
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Do your perfect beauty booking your appointment now. We can't wait to see you at Mehra Studio!
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold text-[#3B103C] bg-white hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 text-[#C2185B]" />
              </button>
            </div>
          </div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="rounded-3xl overflow-hidden border border-stone-200/90 shadow-md">
          <iframe
            title="Mehra Beauty Parlour & Makeup Studio Location Map Kanimangalam Thrissur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.041530939598!2d76.2166669!3d10.4900001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef01201217e5%3A0x6b499dfd7072a24!2sKanimangalam%2C%20Thrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="260"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}
