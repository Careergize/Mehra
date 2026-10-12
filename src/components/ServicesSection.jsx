import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Check, Search, Calendar, ChevronRight, ChevronDown } from 'lucide-react';
import { servicesData, servicesCategories } from '../data/servicesData';
import { studioInfo } from '../data/studioInfo';

export default function ServicesSection({ onOpenBooking, onSelectServiceForBooking }) {
  // Top 4 Featured Cards representing Mehra's actual service pillars
  const primaryFeatured = [
    {
      number: "01",
      title: "Hair Styling & Chemistry",
      desc: "Permanent straightening, rebonding, nanoplastia smoothing & luxury hair spa.",
      price: "₹900 – ₹7,500",
      image: "/images/haircut-styling.jpg",
      category: "hair"
    },
    {
      number: "02",
      title: "Bridal Makeovers & Saree",
      desc: "Traditional Kerala Kasavu muhurtham, engagement glam & precision saree box draping.",
      price: "₹4,500 – ₹12,000",
      image: "/images/kerala-bridal-makeover.jpg",
      category: "bridal"
    },
    {
      number: "03",
      title: "Skin Radiance & Facials",
      desc: "24K gold bridal facial, O3+ derma brightening, de-tan & organic herbal clean-ups.",
      price: "₹450 – ₹3,500",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
      category: "skin"
    },
    {
      number: "04",
      title: "Essential Grooming",
      desc: "Painless eyebrow threading, Italian Rica waxing, deluxe rose & mint spa pedicure.",
      price: "₹60 – ₹2,200",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      category: "grooming"
    }
  ];

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 9; // Exactly 3 rows in a 3-column grid

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsExpanded(false);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setIsExpanded(false);
  };

  const filteredFullList = servicesData.filter((svc) => {
    const matchesTab = activeTab === 'all' || svc.category === activeTab;
    const matchesSearch = 
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const displayedList = isExpanded ? filteredFullList : filteredFullList.slice(0, INITIAL_COUNT);
  const remainingCount = filteredFullList.length - INITIAL_COUNT;

  return (
    <section id="services" className="py-20 bg-[#FFFDFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Reference Ornamental Dashes */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1819] tracking-tight text-center">
              Our Services &amp; Prices
            </h2>
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto">
            100% genuine products (L’Oréal, MAC, Kryolan, Casmara, O3+), strict hygiene protocols, and transparent pricing in Kanimangalam, Thrissur.
          </p>
        </div>

        {/* 4 Cards in Exact Reference Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {primaryFeatured.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => {
                handleTabChange(card.category);
              }}
            >
              {/* Card Image with Number Badge top-left */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Pink Circle Number Badge (01, 02, 03, 04) matching Reference Image */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#C2185B] text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {card.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-center bg-white">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1819] mb-2 group-hover:text-[#C2185B] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                {/* Pink Price Pill Matching Reference */}
                <div className="pt-2">
                  <div className="inline-block px-5 py-2 rounded-full bg-[#FCE4EC] text-[#C2185B] text-xs font-bold tracking-wide transition-transform group-hover:scale-105">
                    {card.price}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Comprehensive Treatment Menu */}
        <div className="bg-[#FAF7F8] p-6 sm:p-8 rounded-3xl border border-stone-200 mb-12">
          
          {/* Header of the full menu */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none flex-nowrap md:flex-wrap">
              <button
                onClick={() => handleTabChange('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#C2185B] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-[#C2185B]'
                }`}
              >
                All Services ({servicesData.length})
              </button>
              {servicesCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleTabChange(c.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === c.id
                      ? 'bg-[#C2185B] text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:border-[#C2185B]'
                  }`}
                >
                  {c.name} ({c.count})
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search straightening, facial, waxing..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white rounded-full border border-stone-200 text-xs focus:outline-hidden focus:border-[#C2185B]"
              />
            </div>
          </div>

          {/* Grid of Real Services (First 3 rows = 9 items initially) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedList.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-[#C2185B]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2185B] bg-[#FCE4EC] px-2 py-0.5 rounded-md">
                      {svc.category}
                    </span>
                    <span className="text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded-md">
                      {svc.priceRange}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#1A1819] mb-1">
                    {svc.title}
                  </h4>
                  
                  <p className="text-xs text-stone-500 leading-relaxed mb-3">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-1 mb-4 text-[11px] text-stone-600 border-t border-stone-100 pt-2">
                    {svc.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={studioInfo.getWhatsAppLink(`Hi Mehra Beauty Studio, I would like to book: "${svc.title}" (${svc.priceRange}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceForBooking ? onSelectServiceForBooking(svc) : onOpenBooking()}
                    className="py-2 px-3 rounded-xl border border-stone-200 hover:border-[#C2185B] text-stone-700 hover:text-[#C2185B] text-xs font-bold transition-colors cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button after 3 rows (9 items) */}
          {filteredFullList.length > INITIAL_COUNT && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C2185B] hover:bg-[#A8134D] shadow-md shadow-[#C2185B]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>
                  {isExpanded 
                    ? 'Show Less' 
                    : `View More Services (${remainingCount} Remaining)`}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
