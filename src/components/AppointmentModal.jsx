import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MessageCircle, Check, Phone, User, Flower2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { studioInfo } from '../data/studioInfo';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    } else {
      setSelectedServiceId(servicesData[0]?.id || '');
    }
  }, [initialService, isOpen]);

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

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const handleBooking = (e) => {
    e.preventDefault();
    const formattedMsg = `Hello Mehra Beauty Studio, I want to book an appointment:
• Service: ${currentService?.title || 'General Consultation'} (${currentService?.priceRange || ''})
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
        className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#F8BBD0] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-[#FCE4EC] hover:text-[#C2185B] text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#FFF5F8] border-b border-[#F8BBD0]/40 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1A1819] border border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            <img src="/images/mehra-emblem.jpg" alt="Mehra Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCE4EC] text-[#C2185B] text-[11px] font-bold mb-1">
              <span>Instant Salon &amp; Bridal Booking</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1819]">
              Book Your Appointment
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Chirayinmel Building, Kanimangalam, Thrissur
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#FCE4EC] text-[#C2185B] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1819]">WhatsApp Dispatched!</h4>
              <p className="text-xs sm:text-sm text-stone-500 max-w-xs mx-auto">
                Opening your WhatsApp chat with our front desk specialist at +91 79072 80180.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Select Service / Treatment *
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-[#FFFDFD] text-xs sm:text-sm font-medium focus:outline-hidden focus:border-[#C2185B] focus:ring-1 focus:ring-[#C2185B]"
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title} — {svc.priceRange}
                    </option>
                  ))}
                </select>
                {currentService && (
                  <p className="text-[11px] text-[#C2185B] mt-1 font-semibold">
                    Duration: {currentService.duration} • Category: {currentService.category.toUpperCase()}
                  </p>
                )}
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandra Nair"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
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
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Notes / Bridal Details (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Mention hair length, saree draping, or wedding location..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#C2185B]"
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
