import React, { useState } from 'react';
import { 
  Check, 
  Calendar, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Heart, 
  ShieldCheck,
  Flower2
} from 'lucide-react';
import { bridalPackages, bridalTimelineSteps } from '../data/bridalPackages';
import { studioInfo } from '../data/studioInfo';

export default function BridalSpotlight({ onOpenBooking }) {
  const [selectedPackage, setSelectedPackage] = useState(bridalPackages[0]);

  return (
    <section id="bridal" className="py-20 bg-[#1E1B18] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative luxury background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D48B80]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D48B80]/20 border border-[#D48B80]/30 text-xs font-semibold text-[#E0A899] mb-4">
            <Flower2 className="w-3.5 h-3.5" />
            <span>Kerala Bridal Makeover Studio</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Unveil Your Most Breathtaking <span className="italic font-normal text-[#E0A899]">Bridal Radiance</span>
          </h2>
          <div className="w-24 h-0.5 bg-[#D48B80] mx-auto my-4" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Over 1,200 brides have trusted Mehra for their most cherished day. We blend timeless Kerala traditions with international HD makeup chemistry to keep you immaculate from morning Muhurtham to midnight reception.
          </p>
        </div>

        {/* 3 Signature Bridal Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {bridalPackages.map((pkg) => {
            const isFeatured = pkg.id === 'kerala-muhurtham';
            const whatsappMsg = `Hi Mehra Beauty Studio, I am interested in inquiring about "${pkg.title}" for my upcoming wedding.`;
            const whatsappUrl = studioInfo.getWhatsAppLink(whatsappMsg);

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#2E2824] via-[#241F1C] to-[#1E1B18] border-2 border-[#D48B80] shadow-2xl shadow-[#D48B80]/15 lg:-translate-y-2'
                    : 'bg-[#28231F]/90 border border-white/10 hover:border-[#D48B80]/40'
                }`}
              >
                {/* Popular pill */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B96B60] to-[#D48B80] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Flower2 className="w-3 h-3" />
                    <span>Bride's Top Choice</span>
                  </div>
                )}

                <div>
                  {/* Category badge */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#E0A899] mb-3">
                    <span>{pkg.badge}</span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <Clock className="w-3.5 h-3.5 text-[#D48B80]" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-medium italic mb-3">
                    Ideal for: {pkg.idealFor}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Venue flexibility pill */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 mb-6 flex items-center gap-2 text-xs text-stone-300">
                    <MapPin className="w-4 h-4 text-[#D48B80] shrink-0" />
                    <span>{pkg.venueOption}</span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#E0A899]">
                      Package Inclusions:
                    </p>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                        <Check className="w-4 h-4 text-[#D48B80] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#D48B80] to-[#B96B60] hover:from-[#E0A899] hover:to-[#C2766B] text-white shadow-lg shadow-[#D48B80]/20'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire Package on WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-400 hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Check Date Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 4-Step Bridal Journey Timeline */}
        <div className="bg-[#241F1C] rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A899]">
              The Mehra Bridal Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Your Seamless 4-Step Journey to Perfection
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              From our first consultation to your final photo in the mandapam, we eliminate stress and guarantee flawless results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridalTimelineSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white/5 rounded-2xl p-5 border border-white/10 relative group hover:border-[#D48B80]/40 transition-colors"
              >
                <div className="font-serif text-3xl font-bold text-[#D48B80]/40 group-hover:text-[#D48B80] transition-colors mb-2">
                  {step.step}
                </div>
                <h4 className="font-serif text-base font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm text-stone-300 mb-4">
              Free 30-minute bridal skin & jewellery consultation available at our Kanimangalam studio.
            </p>
            <a
              href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I would like to book a Free Bridal Consultation for my wedding.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#1E1B18] bg-gradient-to-r from-[#FAF7F2] to-[#E0A899] hover:from-white hover:to-white transition-all shadow-lg shadow-black/20"
            >
              <Calendar className="w-4 h-4 text-[#B96B60]" />
              <span>Book Complimentary Bridal Consultation</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
