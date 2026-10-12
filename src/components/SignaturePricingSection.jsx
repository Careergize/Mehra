import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function SignaturePricingSection({ onOpenBooking }) {
  const pricingCards = [
    {
      id: "bridal-muhurtham",
      title: "Royal Kerala Muhurtham Package",
      subtitle: "Traditional Kasavu Bride",
      desc: "High-definition waterproof makeup, temple jewelry fixing, Kasavu/Kanchipuram saree pleating, and fresh jasmine (Mullappoo) hair garland setting.",
      priceButton: "₹6,000 – ₹12,000",
      image: "/images/kerala-bride-muhurtham.jpg",
      buttonColor: "bg-[#C2185B] hover:bg-[#A8134D]",
      highlights: ["Waterproof HD Base", "Kasavu Saree Pleating", "Temple Jewelry Fixing", "Fresh Jasmine Flowers"]
    },
    {
      id: "hair-smoothing",
      title: "Straightening & Nanoplastia Chemistry",
      subtitle: "Silk & Glass Hair Transformation",
      desc: "Permanent straightening, rebonding, or formaldehyde-free nanoplastia smoothing using authentic L’Oréal Professionnel formulations.",
      priceButton: "₹3,500 – ₹7,500",
      image: "/images/haircut-styling.jpg",
      buttonColor: "bg-[#C2185B] hover:bg-[#A8134D]",
      highlights: ["L'Oréal & Matrix Products", "Zero Frizz in Kerala Weather", "Lasts 4–6 Months", "Hair Spa Included"]
    },
    {
      id: "prebridal-radiance",
      title: "4-Week Pre-Bridal Radiance Ritual",
      subtitle: "Head-to-Toe Countdown Prep",
      desc: "Comprehensive 4-session skin and hair preparation: 24K gold glow facial, body polishing, luxury hair spa, Rica waxing, and deluxe spa mani-pedi.",
      priceButton: "₹5,500 – ₹9,500",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      buttonColor: "bg-[#C2185B] hover:bg-[#A8134D]",
      highlights: ["24K Gold Facial", "Full Body Exfoliation", "Deluxe Mani-Pedi", "Trial Session Included"]
    }
  ];

  return (
    <section id="prices" className="py-20 bg-[#FAF7F8] border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Reference UI */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1819] tracking-tight text-center">
              Signature Packages &amp; Pricing
            </h2>
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto">
            Transparent pricing for our most requested bridal makeovers, hair chemistry, and pre-wedding rejuvenation rituals.
          </p>
        </div>

        {/* 3 Pricing Cards matching Reference Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="h-64 sm:h-72 overflow-hidden bg-stone-100 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#C2185B] shadow-xs">
                  {card.subtitle}
                </div>
              </div>

              {/* Card Content & CTA */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1819] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-stone-600 border-t border-stone-100 pt-3">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solid Button with Arrow matching Reference: e.g. "₹6,000 – ₹12,000 ->" */}
                <div>
                  <a
                    href={studioInfo.getWhatsAppLink(`Hi Mehra Beauty Studio, I would like to book: "${card.title}" (${card.priceButton}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-2xl ${card.buttonColor} text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-md transition-all group-hover:scale-[1.02]`}
                  >
                    <span>{card.priceButton}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
