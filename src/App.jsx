import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import AdditionalServicesSection from './components/AdditionalServicesSection';
import SignaturePricingSection from './components/SignaturePricingSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationContactSection from './components/LocationContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  const handleOpenBooking = () => {
    setSelectedServiceForModal(null);
    setBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service) => {
    setSelectedServiceForModal(service);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFD] text-[#1A1819] font-sans antialiased selection:bg-[#C2185B] selection:text-white">
      {/* 1. Top Notice Banner */}
      <TopBanner />

      {/* 2. Sticky Header with Floral Monogram & Nav Links */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections matching Reference Design */}
      <main className="flex-1">
        {/* 3. Hero Section with "Welcome to ♡", Headline, CTAs, and 4 Circular Feature Cards */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. "Our Services & Prices" with 01-04 numbered cards & pink price pills */}
        <ServicesSection 
          onOpenBooking={handleOpenBooking} 
          onSelectServiceForBooking={handleSelectServiceForBooking} 
        />

        {/* 5. "Special Offer For You!" (20% OFF with Code) */}
        <SpecialOfferBanner onOpenBooking={handleOpenBooking} />

        {/* 6. "Additional Services" with circular pink icons & price pills */}
        <AdditionalServicesSection onOpenBooking={handleOpenBooking} />

        {/* 7. Signature Packages & Pricing with dark/berry arrow CTA buttons */}
        <SignaturePricingSection onOpenBooking={handleOpenBooking} />

        {/* 8. "Our Work Gallery" with 2x3 rounded square grid & expand icon */}
        <GallerySection />

        {/* 9. About Our Studio (10+ Years Trust in Kanimangalam) */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 10. Client Testimonials & Trust Badges */}
        <TestimonialsSection />

        {/* 11. 3-Column Contact, Hours & "Book Your Appointment" card + Google Map */}
        <LocationContactSection onOpenBooking={handleOpenBooking} />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 13. Full-width vibrant berry pink footer bar */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForModal}
      />
    </div>
  );
}
