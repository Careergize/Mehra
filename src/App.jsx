import React, { useState, useEffect } from 'react';
import useSalonMotion from './hooks/useSalonMotion';
import ContactPage from './components/ContactPage';
import { ArrowUpRight, ArrowRight, Camera as Instagram, Menu, X, Plus, Minus, MapPin, Phone } from 'lucide-react';
import AppointmentModal from './components/AppointmentModal';
import TestimonialsSection from './components/TestimonialsSection';
import { studioInfo } from './data/studioInfo';
import { servicesData, servicesCategories } from './data/servicesData';

const offers = [
  { title: 'CUT', subtitle: 'Precision cuts that define you.', image: servicesData.find(s => s.id === 'h4').image, category: 'cut', label: 'Precision cuts & fresh layers' },
  { title: 'COLOUR', subtitle: 'Rich, radiant colour that turns heads.', image: servicesData.find(s => s.id === 'h5').image, category: 'colour', label: 'Colour, highlights & balayage' },
  { title: 'STYLE', subtitle: 'Blowouts, waves & effortless styling.', image: '/images/haircut-styling.jpg', category: 'style', label: 'Blowouts, smoothing & hair rituals' },
];
const hairTabs = [
  { id: 'cut', name: 'Cut', services: ['h4'] },
  { id: 'colour', name: 'Colour', services: ['h5', 'h6'] },
  { id: 'style', name: 'Style', services: ['h1', 'h2', 'h3', 'h4', 'h7'] },
];
const looks = [
  ['haircut-styling.jpg', 'Soft waves', 'HAIR MOMENT'],
  ['kerala-bridal-braid.jpg', 'The finishing touch', 'THE DETAILS'],
  ['kerala-bride-muhurtham.jpg', 'Modern tradition', 'BRIDAL ERA'],
  ['kerala-reception-glam.jpg', 'After-dark glow', 'SOFT GLAM'],
  ['kerala-bridal-makeover.jpg', 'Made for you', 'MEHRA MUSE'],
];
export default function App() {
  const [isContact, setIsContact] = useState(() => window.location.hash === '#/contact');
  useSalonMotion(isContact);
  useEffect(() => {
    const navigate = () => { setIsContact(window.location.hash === '#/contact'); setMenu(false); };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  useEffect(() => {
    document.title = isContact ? 'Contact & Appointments | Mehra Beauty Studio, Thrissur' : 'Mehra Beauty Parlour & Makeup Studio | Bridal & Salon in Kanimangalam, Thrissur';
    const frame = requestAnimationFrame(() => {
      if (isContact) window.scrollTo({ top: 0, behavior: 'instant' });
      else document.getElementById(window.location.hash.slice(1) || 'home')?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [isContact]);
  const [booking, setBooking] = useState(false);
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState('cut');
  const [prices, setPrices] = useState(false);
  const [faq, setFaq] = useState(null);
  const book = (service = null) => { setSelected(service); setBooking(true); setMenu(false); };
  const showServices = (value) => { setCategory(value); setPrices(true); setTimeout(() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); };
  return <div className="salon-site">
    <div className="hero-shell" id="home">
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label="Mehra home">MEHRA<span>Beauty Studio</span></a>
        <nav className={menu ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['Home', 'Services', 'About', 'Looks', 'Contact'].map((item) => <a key={item} href={item === 'Contact' ? '#/contact' : item === 'Home' ? '#home' : `#${item.toLowerCase()}`} aria-current={item === 'Contact' && isContact ? 'page' : undefined} onClick={() => setMenu(false)}>{item}</a>)}
        </nav>
        <div className="header-actions"><button className="pill pink" onClick={() => book()}>Book Appointment <ArrowUpRight size={15}/></button><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
      </header>
      {!isContact && <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow">YOUR BEAUTY, REIMAGINED <span>✦</span></p><h1>YOUR LOOK.<br/><span>YOUR ERA.</span></h1><p className="hero-caption">HAIR. BEAUTY. A LITTLE MAIN CHARACTER ENERGY.</p><p className="hero-description">A fresh cut. A bridal glow. A moment just for you.<br/>Meet your next chapter at Mehra, Thrissur.</p><button className="pill dark" onClick={() => book()}>Find your new look <ArrowRight size={18}/></button><div className="hero-footnote"><span className="tiny-star">✦</span> BEAUTY WITH A PERSONAL TOUCH, SINCE 2014</div></div>
        <div className="hero-photo"><img src="/images/haircut-styling.jpg" alt="Mehra salon hair styling" fetchPriority="high"/><div className="photo-shade"/><span className="photo-note">a little refresh. a whole new feeling.</span></div>
        <a href="#looks" className="round-seal"><span>YOUR NEXT CHAPTER</span><strong>NEW<br/>LOOKS</strong><span>STARTS RIGHT HERE ↗</span></a>
      </section>}
    </div>
    {!isContact && <div className="marquee" aria-label="Our specialties"><span>GOOD HAIR DAYS</span><b>✦</b><span>BRIDAL GLOW</span><b>✦</b><span>A LITTLE SELF LOVE</span><b>✦</b><span>ALL YOU, ONLY ELEVATED</span><b>✦</b></div>}
    {isContact ? <ContactPage onBook={() => book()} /> : <main>
      <section className="services-section wrap section-space" id="services"><div className="section-top"><div><p className="section-tag">OUR SERVICES <span>✦</span></p><h2>CUT. <span className="heading-pink">COLOUR.</span> STYLE.</h2></div><button className="text-link" onClick={() => { setPrices(!prices); }}> {prices ? 'Hide service menu' : 'Explore services & prices'} <ArrowUpRight size={17}/></button></div>
        <div className="service-grid">{offers.map((offer, i) => <button key={offer.title} className="service-card" onClick={() => showServices(offer.category)}><img src={offer.image} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/haircut-styling.jpg"; }} alt={offer.label} loading="lazy"/><div className="card-gradient"/><span className="card-index">0{i + 1} / {offer.label}</span><div className="service-card-bottom"><div><h3>{offer.title}</h3><p>{offer.subtitle}</p></div><span className="circle-arrow"><ArrowUpRight size={22}/></span></div></button>)}</div>
        {prices && <div className="price-menu" id="prices"><div className="category-tabs" role="group" aria-label="Service category">{[...hairTabs, ...servicesCategories].map(c => <button className={category === c.id ? 'active' : ''} key={c.id} onClick={() => setCategory(c.id)}>{c.name}</button>)}</div><div className="price-rows">{servicesData.filter(s => hairTabs.find(tab => tab.id === category)?.services.includes(s.id) ?? s.category === category).map(s => <button key={s.id} onClick={() => book(s)}><span><strong>{s.title}</strong><small>{s.duration}</small></span><span>{s.priceRange}<ArrowUpRight size={17}/></span></button>)}</div><p className="menu-note">Select a service to request your appointment. Final pricing is confirmed during consultation.</p></div>}
      </section>
      <section className="bridal-section wrap" id="about"><div className="bridal-photo"><img src="/images/kerala-bride-muhurtham.jpg" alt="Traditional Kerala bride with jasmine flowers and gold jewelry" loading="lazy"/><span className="image-label">ROOTED IN TRADITION. MADE FOR YOU.</span></div><div className="bridal-copy"><p className="section-tag">MORE THAN A MAKEOVER <span>✦</span></p><h2>STILL YOU.<br/><span>JUST RADIANT.</span></h2><p>From your everyday refresh to your once-in-a-lifetime day, we make space for your kind of beautiful.</p><p>For over 10 years, our Kanimangalam studio has brought a personal touch to hair, skin and Kerala bridal artistry. Thoughtful care. Beautiful details. Confidence that stays with you.</p><button className="pill dark" onClick={() => book(servicesData.find(s => s.id === 'b1'))}>Let's create your bridal look <ArrowUpRight size={17}/></button><div className="studio-facts"><div><strong>10+</strong><span>YEARS OF ARTISTRY</span></div><div><strong>100%</strong><span>PERSONALLY YOU</span></div><span className="fact-flower">✳</span></div></div></section>
      <section className="looks-section wrap section-space" id="looks"><div className="section-top"><div><p className="section-tag">THE INSPIRATION EDIT <span>✦</span></p><h2>FRESH FROM THE STUDIO.</h2></div><a className="text-link" href={studioInfo.social.instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> @mehrabeautystudio <ArrowUpRight size={16}/></a></div><div className="looks-grid">{looks.map(([image, title, tag]) => <a href={studioInfo.social.instagram} target="_blank" rel="noreferrer" className="look-card" key={title}><div><img src={`/images/${image}`} alt={title} loading="lazy"/><span>{tag}</span><i><ArrowUpRight size={18}/></i></div><p>{title}</p></a>)}</div></section>
      <section className="faq-section wrap"><p className="section-tag">GOOD TO KNOW <span>✦</span></p>{[['How do I book an appointment?', 'Choose your service and preferred date in our booking form. Send your request through WhatsApp and our team will confirm availability and pricing.'], ['Can I book a bridal consultation?', 'Absolutely. Book a bridal appointment so we can discuss your event, preferred look, hair styling and saree draping.'], ['Where can I find the studio?', studioInfo.address.full]].map(([q,a],i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>{q}{faq === i ? <Minus size={18}/> : <Plus size={18}/>}</button>{faq === i && <p>{a}</p>}</div>)}</section>
      <TestimonialsSection />
    </main>}
    <footer className="studio-footer" id="contact" aria-label="Studio contact and social links">
      <div className="wrap">
        <div className="studio-footer-top">
          <div className="studio-footer-socials"><a href={studioInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Follow Mehra on Instagram"><Instagram size={18}/></a><a href={studioInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Follow Mehra on Facebook"><span aria-hidden="true">f</span></a><a href={studioInfo.getWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="Contact Mehra on WhatsApp"><Phone size={16}/></a></div>
          <a className="wordmark" href="#home">MEHRA<span>Beauty Studio</span></a>
          <button className="footer-appointment" onClick={() => book()}>Book your look <ArrowUpRight size={16}/></button>
        </div>
        <div className="studio-footer-address"><a className="footer-contact-link" href="#/contact">Contact & appointments <ArrowUpRight size={15}/></a><p className="footer-tagline">YOUR KIND OF BEAUTIFUL.</p><a href={studioInfo.social.googleMaps} target="_blank" rel="noreferrer"><MapPin size={15}/><span>Ground Floor, Chirayinmel Building, near SN School<br/>Kanimangalam, Thrissur, Kerala 680027</span><ArrowUpRight size={15}/></a><div className="studio-footer-hours"><span>Mon – Sat: {studioInfo.hours.monSat}</span><span>Sun: {studioInfo.hours.sun}</span></div></div>
        <div className="studio-footer-bottom"><a href={`tel:${studioInfo.phoneRaw}`}>{studioInfo.phone}</a><p>© {new Date().getFullYear()} Mehra Beauty Studio. All rights reserved.</p><a href="#home">Back to top <ArrowUpRight size={13}/></a></div>
      </div>
    </footer>
    <AppointmentModal isOpen={booking} onClose={() => setBooking(false)} initialService={selected}/>
  </div>;
}






