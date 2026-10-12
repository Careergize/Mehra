import React from 'react';
import { Flower2, HeartHandshake, Smile, Scissors } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function AdditionalServicesSection({ onOpenBooking, onSelectServiceForBooking }) {
  const additional = [
    {
      icon: Flower2,
      title: "Kasavu Saree Draping",
      desc: "Precision pleating, box folding, pin-less anchoring & pre-press.",
      price: "₹600 – ₹1,000",
      query: "Saree Draping"
    },
    {
      icon: HeartHandshake,
      title: "Gold & O3+ Facials",
      desc: "Collagen stimulation, tan reversal & long-lasting glass radiance.",
      price: "₹1,800 – ₹3,500",
      query: "Bridal Facials"
    },
    {
      icon: Smile,
      title: "Spa Pedicure & Manicure",
      desc: "Foot jacuzzi soak, crack heel treatment & hand hydration.",
      price: "₹500 – ₹1,000",
      query: "Spa Mani-Pedi"
    },
    {
      icon: Scissors,
      title: "Threading & Rica Wax",
      desc: "Sterilized cotton brow shaping & gentle Italian liposoluble waxing.",
      price: "₹60 – ₹2,200",
      query: "Threading & Waxing"
    }
  ];

  return (
    <section className="py-16 bg-[#FFFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading With Reference Style */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1819] tracking-tight text-center">
              Additional Services
            </h2>
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-xs sm:text-sm">
            Curated beauty, hair & aesthetic grooming rituals performed with sterile precision.
          </p>
        </div>

        {/* 4 Cards Matching Reference Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additional.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#F8BBD0] transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-pointer"
                onClick={() => {
                  if (onSelectServiceForBooking) {
                    onSelectServiceForBooking({
                      id: `additional-${idx}`,
                      title: item.title,
                      priceRange: item.price,
                      category: 'Grooming & Skin',
                      duration: '30–60 Mins',
                      shortDesc: item.desc
                    });
                  } else {
                    onOpenBooking();
                  }
                }}
              >
                <div className="flex flex-col items-center">
                  {/* Pink circular icon */}
                  <div className="w-13 h-13 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1A1819] mb-1.5 group-hover:text-[#C2185B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Pink Price Pill Matching Reference */}
                <div className="w-full pt-2 border-t border-stone-100 flex items-center justify-center">
                  <span className="px-4 py-1.5 rounded-full bg-[#FCE4EC] text-[#C2185B] text-xs font-bold tracking-wide">
                    {item.price}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
