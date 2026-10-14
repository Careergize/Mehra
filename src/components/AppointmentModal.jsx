import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MessageCircle, Check, Phone, User, Flower2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { studioInfo } from '../data/studioInfo';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Resolve active service selected from rows or provide general consultation
  const currentService = (typeof initialService === 'object' && initialService !== null)
    ? initialService
    : (typeof initialService === 'string' 
        ? servicesData.find(s => s.id === initialService) 
        : null) 
      || {
        id: 'general-consultation',
        title: 'General Salon & Bridal Consultation',
        category: 'Consultation',
        priceRange: 'In-Studio Assessment',
        duration: '30–45 Mins',
        shortDesc: 'Personalized treatment consultation with our senior beauty artists at Kanimangalam, Thrissur.'
      };

  const handleBooking = (e) => {
    e.preventDefault();
    const formattedMsg = `Hello Mehra Beauty Studio, I want to book an appointment:
• Service: ${currentService.title}${currentService.priceRange ? ` (${currentService.priceRange})` : ''}
• Name: ${name || 'Valued Client'}
• Phone: ${phone || 'Not provided'}
• Preferred Date: ${date || 'Flexible'}
• Time Slot: ${timeSlot}
• Special Notes: ${notes || 'None'}`;

    window.open(studioInfo.getWhatsAppLink(formattedMsg), '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#151115] rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#493640] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#2b2229] hover:bg-[#38212d] hover:text-[#f0a6bc] text-[#bdb5bb] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#21171d] border-b border-[#493640] flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1A1819] border border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            <img src="/images/mehra-emblem.jpg" alt="Mehra Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#38212d] text-[#f0a6bc] text-[11px] font-bold mb-1">
              <span>Instant Salon &amp; Bridal Booking</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Book Your Appointment
            </h3>
            <p className="text-xs text-[#bdb5bb] mt-0.5">
              Chirayinmel Building, Kanimangalam, Thrissur
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#38212d] text-[#f0a6bc] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white">WhatsApp Dispatched!</h4>
              <p className="text-xs sm:text-sm text-[#bdb5bb] max-w-xs mx-auto">
                Opening your WhatsApp chat with our front desk specialist at +91 79072 80180.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-5">
              
              {/* Selected Service Display (Dropdown Removed - Mentioned in Front) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-[#eee7ec] uppercase tracking-wider">
                    Selected Service / Treatment
                  </label>
                  {initialService && (
                    <a
                      href="#services"
                      onClick={onClose}
                      className="text-[11px] font-semibold text-[#f0a6bc] hover:underline"
                    >
                      Browse Other Rows
                    </a>
                  )}
                </div>

                <div className="rounded-2xl border border-[#493640] bg-gradient-to-br from-[#21171d] via-[#191319] to-[#21171d] p-4 sm:p-5 shadow-xs">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#f0a6bc] bg-[#38212d] px-2.5 py-0.5 rounded-full border border-[#493640]">
                          {currentService.category ? `${currentService.category} Service` : 'Bridal & Salon'}
                        </span>
                          {currentService.duration && (
                            <span className="text-[11px] text-[#bdb5bb] flex items-center gap-1 font-medium">
                              <Clock className="w-3.5 h-3.5 text-[#bdb5bb]" />
                              {currentService.duration}
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                          {currentService.title}
                        </h4>
                        {currentService.shortDesc && (
                          <p className="text-xs text-[#bdb5bb] mt-1 leading-relaxed">
                            {currentService.shortDesc}
                          </p>
                        )}
                      </div>

                    {/* Price Pill */}
                    <div className="shrink-0 text-right">
                      <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#C2185B] text-white text-xs sm:text-sm font-bold shadow-xs whitespace-nowrap">
                        {currentService.priceRange}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#eee7ec] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#bdb5bb] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandra Nair"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#493640] bg-[#100e10] text-white text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#eee7ec] uppercase tracking-wider mb-1.5">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#bdb5bb] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#493640] bg-[#100e10] text-white text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#eee7ec] uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#493640] bg-[#100e10] text-white text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#eee7ec] uppercase tracking-wider mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#493640] bg-[#100e10] text-white text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                    <option value="Early Morning Muhurtham (4:00 AM - 9:00 AM)">Early Morning Muhurtham (4:00 AM - 9:00 AM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#eee7ec] uppercase tracking-wider mb-1.5">
                  Notes / Bridal Details (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Mention hair length, saree draping, or wedding location..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#493640] bg-[#100e10] text-white text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#C2185B] hover:bg-[#A8134D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#C2185B]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Send Booking to WhatsApp (+91 79072 80180)</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

