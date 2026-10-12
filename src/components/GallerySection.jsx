import React, { useState } from 'react';
import { X, MessageCircle, Maximize2, ExternalLink } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 6 Curated Showcase Photos matching Mehra Studio's authentic Kerala Bridal & Salon Work
  const galleryItems = [
    {
      id: 'g-1',
      title: 'Traditional Kerala Muhurtham Bride',
      desc: 'Authentic Kasavu saree box pleating, temple gold jewelry setting, and sweat-proof HD makeup.',
      imageUrl: '/images/kerala-bride-muhurtham.jpg',
    },
    {
      id: 'g-2',
      title: 'Kerala Kasavu Bridal Makeover',
      desc: 'Radiant bride in golden border Kasavu saree, layered temple haram, and fresh Mullappoo garland.',
      imageUrl: '/images/kerala-bridal-makeover.jpg',
    },
    {
      id: 'g-3',
      title: 'Royal Indian Bridal Artistry',
      desc: 'High-definition waterproof base, intricate gold nath, kundan jewelry, and royal bridal couture.',
      imageUrl: '/images/mehra-hero-bride.png',
    },
    {
      id: 'g-4',
      title: 'Dewy Reception & Engagement Glam',
      desc: 'Soft Hollywood textured waves, radiant glass-skin finish, and rich silk saree elegance.',
      imageUrl: '/images/kerala-reception-glam.jpg',
    },
    {
      id: 'g-5',
      title: 'Bridal Braid & Jasmine Garland Weave',
      desc: 'Handcrafted fresh jasmine (Mullappoo) setting with antique temple gold Jada Alankaram ornaments.',
      imageUrl: '/images/kerala-bridal-braid.jpg',
    },
    {
      id: 'g-6',
      title: 'Professional Hair Styling & Blowout',
      desc: 'Permanent straightening, nanoplastia smoothing, and mirror-gloss blowout at our salon.',
      imageUrl: '/images/haircut-styling.jpg',
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FFFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Reference Style */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1819] tracking-tight text-center">
              Our Work Gallery
            </h2>
            <span className="w-6 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto">
            Real brides and clients transformed with love and craftsmanship at our Kanimangalam studio.
          </p>
        </div>

        {/* 6-Item Grid (2 rows x 3 columns) Exactly as in Reference Image */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden aspect-square bg-stone-100 border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay with Expand Arrows matching the reference icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-[#1A1819] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5 text-[#C2185B]" />
                </div>
              </div>

              {/* Bottom Subtle Title on Hover */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <p className="font-serif text-xs sm:text-sm font-bold truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catalog Action */}
        <div className="mt-10 text-center">
          <a
            href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, please share your latest bridal video portfolio and wedding gallery.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C2185B] hover:text-[#880E4F] transition-colors"
          >
            <span>Request Full Portfolio Catalog on WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-stone-950 flex items-center justify-center p-3 sm:p-5 overflow-hidden min-h-[300px] max-h-[62vh] sm:max-h-[68vh]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
              <div className="text-left">
                <h3 className="font-serif text-xl font-bold text-[#1A1819]">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 max-w-md">
                  {selectedImage.desc}
                </p>
              </div>

              <a
                href={studioInfo.getWhatsAppLink(`Hi Mehra Beauty Studio, I loved this look: "${selectedImage.title}". Can I get pricing and date availability?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2 shrink-0 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Recreate on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
