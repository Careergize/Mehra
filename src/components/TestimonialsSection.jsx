import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { testimonialsData, trustBadges } from '../data/testimonialsData';
import { studioInfo } from '../data/studioInfo';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#FAF7F8] border-t border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reference Style */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-10 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1819] tracking-tight">
              Customer Satisfaction
            </h2>
            <span className="w-10 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto">
            Trusted by over 1,200 brides and regular clients across Thrissur since 2014.
          </p>
        </div>

        {/* 4 Trust Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {trustBadges.map((badge, bIdx) => (
            <div 
              key={bIdx}
              className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs text-center"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1819] mb-0.5">
                {badge.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C2185B]">
                {badge.label}
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                {badge.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid (3 featured cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote icon & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#F8BBD0] transition-colors" />
                </div>

                {/* Service Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#FCE4EC] text-[11px] font-bold text-[#C2185B] mb-3">
                  {item.service}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Bio */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#F8BBD0]"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A1819] flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[11px] text-stone-500">{item.role}</p>
                  <p className="text-[10px] text-stone-400">{item.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Feedback Action Banner */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#F8BBD0] shadow-xs text-xs">
            <span className="text-stone-600">Rated 5.0 out of 5 stars by Thrissur clients.</span>
            <a
              href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I want to leave feedback!")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#C2185B] hover:text-[#880E4F] transition-colors"
            >
              Share Review on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
