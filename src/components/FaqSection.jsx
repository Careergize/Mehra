import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How far in advance should I book my bridal makeover in Thrissur?",
      a: "For Kerala wedding peak seasons (Chingam, Medam, December–January), we recommend reserving your Muhurtham and Reception slots at least 2 to 4 months in advance. Early booking guarantees our senior bridal artists and preferred morning slots."
    },
    {
      q: "Do you offer early morning services for 4:00 AM or 5:00 AM Temple Muhurthams?",
      a: "Yes, absolutely! While our general salon hours start at 9:30 AM, our bridal team routinely starts as early as 4:00 AM for early morning temple weddings (such as Guruvayur or local temples). Prior appointment is required for early hours."
    },
    {
      q: "Can your bridal team travel to my wedding hall or home?",
      a: "Yes. In addition to our dedicated private bridal suite on the Ground Floor at Chirayinmel Building, we provide on-location bridal vanity services across Thrissur, Ollur, Guruvayur, and adjacent districts."
    },
    {
      q: "What products and brands do you use for bridal makeup and hair treatments?",
      a: "We strictly use 100% genuine international and salon-grade professional products, including Kryolan, MAC, L'Oréal Professionnel, Casmara, and O3+. We never compromise on product authenticity or skin safety."
    },
    {
      q: "Is parking available at your Kanimangalam studio?",
      a: "Yes, Chirayinmel Building is situated on the main road near SN School, Kanimangalam with easy vehicle access and convenient ground-level parking for cars and two-wheelers."
    },
    {
      q: "How long does permanent hair straightening or nanoplastia take?",
      a: "Depending on your hair length and curl density, permanent straightening or nanoplastia smoothing typically takes 3.5 to 5 hours. We include a deep conditioning neutralizer and post-treatment hair spa so your hair remains silky and damage-free."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Reference Style */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-10 sm:w-16 h-[2px] bg-[#F48FB1]" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1819] tracking-tight">
              Frequently Asked Questions
            </h2>
            <span className="w-10 sm:w-16 h-[2px] bg-[#F48FB1]" />
          </div>
          <p className="text-stone-500 text-xs sm:text-sm">
            Everything you need to know about our salon services, bridal bookings, and timings.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFDFD] rounded-2xl border border-stone-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1A1819]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF7F8] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FCE4EC] text-[#C2185B]' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick query bar */}
        <div className="mt-8 p-5 rounded-2xl bg-[#FFF5F8] border border-[#F8BBD0] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#1A1819]">Have an urgent booking question?</h4>
            <p className="text-xs text-stone-500">Our senior beauty consultant responds directly on WhatsApp.</p>
          </div>
          <a
            href={studioInfo.getWhatsAppLink("Hi Mehra Beauty Studio, I have a quick question regarding booking an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
