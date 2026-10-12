import React, { useState } from 'react';
import { X, MessageCircle, Maximize2, ExternalLink } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 6 Curated Showcase Photos matching Reference UI 2x3 Grid
  const galleryItems = [
    {
      id: 'g-1',
      title: 'Traditional Kerala Muhurtham Bride',
      desc: 'Temple gold jewelry setting, Kasavu saree pleats, and waterproof HD makeup.',
      imageUrl: '/images/kerala-bride-muhurtham.jpg',
    },
    {
      id: 'g-2',
      title: 'Intricate Bridal Henna & Saree Details',
      desc: 'Finely detailed red henna motifs and traditional gold bangles.',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'g-3',
      title: 'Royal Bridal Jewelry & Saree Draping',
      desc: 'Precision box pleating on heavy silk saree with layered necklaces.',
      imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'g-4',
      title: 'Dewy Reception & Sangeet Makeover',
      desc: 'Smokey shimmer eyes, contoured cheekbones, and soft nude lip finish.',
      imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'g-5',
      title: 'Contemporary Engagement Glam',
      desc: 'Glass skin finish with custom floral bridal braid artistry.',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'g-6',
      title: 'Grand Wedding Muhurtham Portrait',
      desc: 'Sweat-resistant matte formula designed for warm Kerala climate.',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FFFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Reference Style */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-10 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1819] tracking-tight">
              Our Work Gallery
            </h2>
            <span className="w-10 sm:w-16 h-[2px] bg-[#F48FB1]" />
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-80 sm:h-96 bg-black">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
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
