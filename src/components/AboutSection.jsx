import React from 'react';
import { ShieldCheck, Flower2, HeartHandshake, CheckCircle2, Award, Clock, MapPin, Users } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function AboutSection({ onOpenBooking }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Medical-Grade Hygiene",
      desc: "All instruments undergo autoclave & UV sterilization between every client. We strictly use single-use disposables, fresh towels, and sanitized capes."
    },
    {
      icon: Award,
      title: "100% Authentic Luxury Brands",
      desc: "Never compromised. We formulate exclusively with genuine products from L’Oréal Professionnel, MAC, Kryolan, Casmara, and O3+."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Consultations",
      desc: "No cookie-cutter routines. We conduct scalp, hair porosity, and skin undertone assessments before tailoring any haircut, facial, or chemical treatment."
    },
    {
      icon: Flower2,
      title: "Customized Bridal Artistry",
      desc: "Whether you desire a traditional Kerala Kasavu muhurtham with fresh jasmine, or an ultra-modern dewy reception glam, we co-create your dream look."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reference Style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1819] tracking-tight text-center">
              About Our Studio
            </h2>
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            Established in 2014 at Chirayinmel Building, Mehra Beauty Parlour & Makeup Studio has flourished as Kanimangalam's trusted boutique salon for modern women.
          </p>
        </div>

        {/* Two-Column Story & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Atmospheric Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Mehra Beauty Parlour salon interior Kanimangalam Thrissur"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Inset Second Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80"
                  alt="Makeup artist working on bride"
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute top-6 left-6 bg-white/95 text-[#1A1819] backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#F8BBD0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A1819] p-1 border border-amber-400/40 shrink-0 overflow-hidden shadow-xs">
                  <img src="/images/mehra-emblem.jpg" alt="Mehra Official Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-[#C2185B] leading-tight">Since 2014</p>
                  <p className="text-[10px] text-stone-500 font-semibold">10+ Years in Kanimangalam</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Detailed Story Points & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Under the guiding philosophy of <strong className="text-[#1A1819]">"Enhancing Your Natural Grace & Radiance"</strong>, Mehra was founded to bring world-class salon expertise and bespoke bridal artistry to Kanimangalam, Thrissur.
              </p>
              <p>
                Over the past decade, we have had the honor of styling more than 1,200 brides across Thrissur, Guruvayur, and Ollur. Every client who visits our ground floor studio at Chirayinmel Building receives private, dedicated attention.
              </p>
              <p>
                We believe true beauty thrives when backed by safety, uncompromising cleanliness, and warm, respectful hospitality.
              </p>
            </div>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Specialized Kerala Kasavu Saree Draping',
                'Zero-Damage Hair Straightening Protocols',
                'Private Bridal Suite for Undisturbed Comfort',
                'Convenient Ground Floor Location with Parking',
                'Friendly, Experienced Female Stylists',
                'Flexible On-Site Destination Bridal Services'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C2185B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] transition-colors shadow-sm cursor-pointer"
              >
                Schedule a Visit
              </button>
              <a
                href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I would like to consult with your beauty specialist.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1A1819] border border-stone-300 hover:border-[#C2185B] hover:text-[#C2185B] bg-white transition-colors"
              >
                Chat with Our Stylist
              </a>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-[#FFFDFD] rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-[#F8BBD0] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FCE4EC] flex items-center justify-center text-[#C2185B] transition-transform group-hover:scale-105 mb-4">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#1A1819] mb-2 group-hover:text-[#C2185B] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
