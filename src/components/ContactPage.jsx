import React from 'react';
import { ArrowUpRight, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/studioInfo';

export default function ContactPage({ onBook }) {
  return <main className="contact-page wrap" id="contact-page">
    <a href="#home" className="text-link contact-back">← Back to the studio</a>
    <section className="contact-page-intro"><div><p className="section-tag">LET'S TALK BEAUTY <span>✦</span></p><h1>COME AS YOU ARE.<br/><span>LEAVE RADIANT.</span></h1><p>Your next good beauty day starts with a hello. Visit our Kanimangalam studio, ask us a question, or make time for a little you time.</p><button className="pill pink" onClick={onBook}>Book Appointment <ArrowUpRight size={18}/></button></div><div className="contact-page-photo"><img src="/images/haircut-styling.jpg" alt="Hair styling in a warm and welcoming salon"/><span>A LITTLE CARE. A LOT OF CONFIDENCE. ✦</span></div></section>
    <section className="contact-page-grid" aria-label="Contact information">
      <article className="contact-info-card"><MapPin size={23}/><p className="section-tag">FIND US</p><h2>YOUR BEAUTY SPOT.</h2><p>{studioInfo.address.floor}, {studioInfo.address.building}<br/>{studioInfo.address.locality}, {studioInfo.address.city}<br/>{studioInfo.address.state} {studioInfo.address.pincode}</p><a href={studioInfo.social.googleMaps} target="_blank" rel="noreferrer" className="text-link">Get directions <ArrowUpRight size={16}/></a></article>
      <article className="contact-info-card"><Phone size={23}/><p className="section-tag">SAY HELLO</p><h2>LET'S CONNECT.</h2><a href={`tel:${studioInfo.phoneRaw}`} className="contact-phone">{studioInfo.phone}</a><a href={`tel:${studioInfo.secondaryPhoneRaw}`} className="contact-phone secondary">{studioInfo.secondaryPhone}</a><p>Questions about bridal looks, hair care or your next appointment? We're here for you.</p><a className="text-link" href={studioInfo.getWhatsAppLink()} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Chat on WhatsApp <ArrowUpRight size={16}/></a></article>
      <article className="contact-info-card"><Clock size={23}/><p className="section-tag">MAKE TIME FOR YOU</p><h2>OUR STUDIO HOURS.</h2><dl><div><dt>Monday – Saturday</dt><dd>{studioInfo.hours.monSat}</dd></div><div><dt>Sunday</dt><dd>{studioInfo.hours.sun}</dd></div></dl><p>For early morning bridal appointments, contact us to arrange your preferred time.</p><button className="text-link" onClick={onBook}>Book Appointment <ArrowUpRight size={16}/></button></article>
    </section>
    <section className="contact-visit"><span aria-hidden="true">✦</span><div><p className="section-tag">RIGHT HERE IN KANIMANGALAM</p><h2>A SPACE FOR <span>YOUR KIND OF BEAUTIFUL.</span></h2><p>Find us near SN School at Chirayinmel Building. Tap below to plan your visit.</p></div><a className="pill dark" href={studioInfo.social.googleMaps} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={18}/></a></section>
  </main>;
}
