import React from 'react';
import { MessageCircle, ArrowRight, Gem, ShieldCheck, Heart, Award } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function Hero({ onOpenBooking }) {
  const features = [
    {
      icon: Gem,
      title: "Professional",
      desc: "Experienced staff with skill"
    },
    {
      icon: Award,
      title: "Quality Products",
      desc: "We use high-quality hair & beauty"
    },
    {
      icon: ShieldCheck,
      title: "Clean & Safe",
      desc: "Hygienic environment for customers"
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      desc: "Your beauty is our happiness"
    }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 bg-[#FFFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          
          {/* Left Column: Typography & CTAs (Matches Reference Image) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* "Welcome to ♡" */}
            <div className="inline-flex items-center gap-1.5 text-stone-700 font-serif italic text-xl sm:text-2xl">
              <span>Welcome to</span>
              <span className="text-[#C2185B] not-italic text-lg">♡</span>
            </div>

            {/* Bold Headline matching Reference UI */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1819] leading-[1.08]">
              Mehra Beauty<br />
              <span className="text-[#C2185B]">Salon</span>
            </h1>

            {/* Subhead matching Reference UI */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-lg font-sans">
              Kerala bridal makeovers, permanent hair straightening, luxury facials, and hygienic personal grooming for modern women. Over 10+ years of trusted artistry at Chirayinmel Building, Kanimangalam, Thrissur.
            </p>

            {/* Dual CTAs matching Reference: Pink "Book Now" + Outline "Our Services" */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] shadow-lg shadow-[#C2185B]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Book Now
              </button>

              <a
                href="#services"
                className="px-8 py-3.5 rounded-full text-sm font-bold text-[#1A1819] border border-stone-300 hover:border-[#C2185B] hover:text-[#C2185B] bg-white transition-all shadow-xs"
              >
                Our Services
              </a>
            </div>

            {/* Sub-badge footnote */}
            <p className="text-xs text-stone-500 pt-1">
              10+ Years in Kanimangalam • Chirayinmel Building • Mon–Sun
            </p>

          </div>

          {/* Right Column: Hero Visual with Makeup Artist Brush Touching Bride */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer soft pink glow */}
              <div className="absolute -inset-4 rounded-3xl bg-[#FCE4EC]/60 blur-xl -z-10" />

              {/* Main Photo Card with Luxury Gold Makeup Artistry */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                <img
                  src="/images/mehra-gold-glam.jpg"
                  alt="Mehra Beauty Parlour & Makeup Studio luxury gold glam artistry"
                  className="w-full h-[320px] sm:h-[460px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Bottom Inset Tag Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-3 sm:right-6 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-lg border border-[#F8BBD0] flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C2185B] animate-pulse" />
                <span className="text-xs font-bold text-[#1A1819]">Kerala Bridal Artistry</span>
                <span className="text-xs text-stone-400">|</span>
                <span className="text-xs font-semibold text-[#C2185B]">★ 5.0 Rated</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Circular Feature Cards Below Hero (Exact Reference Replica) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-stone-100">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-[#FFFDFD] hover:bg-[#FDF7F9] transition-colors"
              >
                {/* Soft pink circular icon container */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FCE4EC] flex items-center justify-center text-[#C2185B] mb-3 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#1A1819] mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-500 max-w-[170px] leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
