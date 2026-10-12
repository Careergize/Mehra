export const servicesCategories = [
  { id: 'bridal', name: 'Bridal & Makeovers', count: 6, icon: 'Flower2' },
  { id: 'hair', name: 'Hair Care & Chemistry', count: 7, icon: 'Scissors' },
  { id: 'skin', name: 'Skin & Aesthetics', count: 6, icon: 'HeartHandshake' },
  { id: 'grooming', name: 'Essential Grooming', count: 5, icon: 'Smile' },
];

export const servicesData = [
  // 1. Bridal & Makeovers
  {
    id: 'b1',
    category: 'bridal',
    title: 'Traditional Kerala Kasavu Bridal Makeover',
    shortDesc: 'Complete Muhurtham bridal transformation with sweat-proof waterproof HD base, temple jewelry positioning, Kasavu saree pleating, and fresh jasmine (Mullappoo) hair setting.',
    duration: '3.5 - 4 Hours',
    popular: true,
    priceRange: '₹6,000 – ₹12,000',
    highlights: ['Waterproof HD / Airbrush Finish', 'Temple Jewelry Positioning', 'Kasavu Saree Pleating & Draping', 'Fresh Jasmine (Mullappoo) Floral Anchoring'],
    image: '/images/kerala-bridal-makeover.jpg',
    tags: ['Best Seller', 'Kerala Muhurtham', 'HD Waterproof']
  },
  {
    id: 'b2',
    category: 'bridal',
    title: 'Engagement & Christian Bridal Glam',
    shortDesc: 'Soft dewy glow, romantic eye artistry, veil & tiara setting, and Hollywood textured waves or bridal updo.',
    duration: '3 Hours',
    popular: true,
    priceRange: '₹4,500 – ₹8,000',
    highlights: ['Dewy Glass-Skin Finish', 'Lash Extensions & Highlighting', 'Veil & Tiara Setting', 'Soft Hollywood Waves or Updo'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tags: ['Engagement', 'Christian Bride', 'Dewy Glow']
  },
  {
    id: 'b3',
    category: 'bridal',
    title: 'Reception & Sangeet Evening Glam',
    shortDesc: 'High-impact evening makeover featuring sculpted contouring, smokey or shimmer eye pigments, and lehenga/gown draping.',
    duration: '2.5 - 3 Hours',
    popular: false,
    priceRange: '₹4,500 – ₹7,500',
    highlights: ['Smokey / Duo-Chrome Eye Makeup', '12+ Hours Transfer-Proof Base', 'Lehenga / Gown Draping', 'Modern Textured Hair Artistry'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    tags: ['Evening Glam', 'Reception', 'Statement Look']
  },
  {
    id: 'b4',
    category: 'bridal',
    title: 'Kerala Kasavu & Silk Saree Draping',
    shortDesc: 'Flawless precision pleating, pin-less box folding, and pre-event iron press so your saree sits razor-sharp all day.',
    duration: '45 Mins',
    popular: false,
    priceRange: '₹600 – ₹1,000',
    highlights: ['Kasavu & Kanchipuram Pleating', 'Pin-less Aesthetic Technique', 'Pre-pleating Service Available', 'Single / Double Pallu Styles'],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    tags: ['Saree Draping', 'Kasavu', 'Kanchipuram']
  },
  {
    id: 'b5',
    category: 'bridal',
    title: 'Bridal Floral Hair Artistry & Jewelry Fixing',
    shortDesc: 'Intricate traditional bridal braids, modern textured buns, mathapatti fixing, and fresh Mullappoo (jasmine) garland anchoring.',
    duration: '60 - 90 Mins',
    popular: false,
    priceRange: '₹800 – ₹1,500',
    highlights: ['Fresh Jasmine (Mullappoo) Weaving', 'Jada Alankaram & Mathapatti Fixing', 'Hair Extension Integration', 'Zero-Slip Hold All Day'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tags: ['Mullappoo', 'Traditional Braids', 'Jewelry Fixing']
  },
  {
    id: 'b6',
    category: 'bridal',
    title: 'Bridal Party & Family Styling',
    shortDesc: 'Coordinated hair and makeup for mothers, bridesmaids, and sisters to look radiant alongside the bride.',
    duration: '45 - 60 Mins / Person',
    popular: false,
    priceRange: '₹1,500 – ₹3,000 / person',
    highlights: ['Light Party HD Makeup', 'Matching Saree Draping', 'Blowout & Hair Styling', 'Family Group Concessions'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tags: ['Bridesmaids', 'Family Package', 'Party Makeup']
  },

  // 2. Hair Care & Chemistry
  {
    id: 'h1',
    category: 'hair',
    title: 'Permanent Straightening & Rebonding',
    shortDesc: 'Transform frizzy, curly, or unruly hair into pin-straight, ultra-glossy, manageable tresses using authentic imported L’Oréal / Matrix formulations.',
    duration: '3.5 - 5 Hours',
    popular: true,
    priceRange: '₹4,000 – ₹7,500',
    highlights: ['L’Oréal Professionnel / Matrix Formulations', 'Neutralizing Moisture Seal', 'Post-Straightening Hair Spa Included', 'Permanent Pin-Straight Finish'],
    image: '/images/haircut-styling.jpg',
    tags: ['Most Requested', 'Straightening', 'Permanent Rebonding']
  },
  {
    id: 'h2',
    category: 'hair',
    title: 'Keratin & Nanoplastia Smoothing Therapy',
    shortDesc: 'Formaldehyde-free intense protein infusion that eliminates 90% of frizz while retaining natural movement and bouncy softness in Kerala humidity.',
    duration: '3 - 4 Hours',
    popular: true,
    priceRange: '₹3,500 – ₹6,500',
    highlights: ['Formaldehyde-Free Formula', 'Lasts 4 to 6 Months', 'Humidity-Resistant in Kerala Climate', 'Silky Mirror Sheen'],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    tags: ['Keratin', 'Nanoplastia', 'Frizz Eradication']
  },
  {
    id: 'h3',
    category: 'hair',
    title: 'Moroccan Argan & Luxury Hair Spa',
    shortDesc: 'Therapeutic treatment targeting dry, damaged, colored, and chemical-processed hair with steam penetration and acupressure massage.',
    duration: '60 Mins',
    popular: false,
    priceRange: '₹900 – ₹1,600',
    highlights: ['Scalp Massage & Acupressure', 'Nano-Steam Deep Infusion', 'Split-End Repair Serum', 'Deep Moisture Lock'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    tags: ['Hair Spa', 'Deep Conditioning', 'Relaxing']
  },
  {
    id: 'h4',
    category: 'hair',
    title: 'Precision Haircuts & Styling Blowout',
    shortDesc: 'Custom hair design tailored to your face shape—butterfly layers, feather cut, step cut, or precision split-end trimming.',
    duration: '45 Mins',
    popular: false,
    priceRange: '₹400 – ₹800',
    highlights: ['Layered / Feather / Butterfly Cut', 'Shampoo & Deep Conditioning Wash', 'Salon Volume Blowdry', 'Styling Tips for Everyday'],
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    tags: ['Haircut', 'Layer Cut', 'Wash & Blowdry']
  },
  {
    id: 'h5',
    category: 'hair',
    title: 'Global Hair Colour & Root Touch-Up',
    shortDesc: 'Ammonia-free gentle formulations for seamless root coverage or full global chocolate, mocha, or burgundy transformation.',
    duration: '90 - 120 Mins',
    popular: false,
    priceRange: '₹1,200 – ₹3,500',
    highlights: ['Ammonia-Safe Gentle Colors', '100% Grey Coverage', 'Custom Shade Formulation', 'Gloss Toner Seal'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    tags: ['Global Color', 'Root Touch-Up', 'Ammonia Free']
  },
  {
    id: 'h6',
    category: 'hair',
    title: 'Highlights, Streaks & Balayage',
    shortDesc: 'Dimensional caramel, honey, or blonde ribbons crafted with gentle developer to add rich depth to dark hair.',
    duration: '2 - 3 Hours',
    popular: false,
    priceRange: '₹2,000 – ₹4,500',
    highlights: ['Sun-Kissed Balayage', 'Foil Streak Highlights', 'Color-Protecting Treatment', 'Gloss Finish'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tags: ['Balayage', 'Highlights', 'Dimension']
  },
  {
    id: 'h7',
    category: 'hair',
    title: 'Anti-Dandruff & Scalp Detox Clinic',
    shortDesc: 'Targeted fungal relief, flake elimination, and revitalizing scalp treatment for flaky or sensitive scalps in humid weather.',
    duration: '60 Mins',
    popular: false,
    priceRange: '₹800 – ₹1,400',
    highlights: ['Tea Tree & Neem Purifying Pack', 'High-Frequency Scalp Wand', 'Micro-Exfoliation', 'Follicle Rejuvenation'],
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80',
    tags: ['Anti-Dandruff', 'Scalp Care', 'Clinical Detox']
  },

  // 3. Skin & Aesthetics
  {
    id: 's1',
    category: 'skin',
    title: '24K Gold & Diamond Bridal Glow Facial',
    shortDesc: 'Our crowning jewel facial for brides and festive celebrations that stimulates collagen and imparts an unforgettable luminescent glow.',
    duration: '90 Mins',
    popular: true,
    priceRange: '₹1,800 – ₹2,800',
    highlights: ['Real Gold / Diamond Serum', 'Rubber Modeling Peel-Off Mask', 'Shoulder & Neck Lymphatic Massage', 'Instant Complexion Radiance'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tags: ['Gold Facial', 'Bridal Glow', 'Luminescent']
  },
  {
    id: 's2',
    category: 'skin',
    title: 'O3+ / Casmara Luxury Derma Brightening',
    shortDesc: 'International salon grade derma-facial that targets dullness, sunspots, and hyperpigmentation with potent vitamin infusions.',
    duration: '75 Mins',
    popular: true,
    priceRange: '₹2,200 – ₹3,500',
    highlights: ['Cellular Oxygenation Therapy', 'Potent Vitamin C & E Boost', 'Rubber Modeling Mask', 'UV Sun-Shield Finish'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f023330f402?auto=format&fit=crop&w=800&q=80',
    tags: ['O3+ Genuine', 'Pigmentation', 'Glass Skin']
  },
  {
    id: 's3',
    category: 'skin',
    title: 'Active De-Tan & Melanin Reversal Pack',
    shortDesc: 'Natural milk protein and kojic acid treatment that gently removes stubborn tropical tanning from face, neck, and arms.',
    duration: '45 Mins',
    popular: false,
    priceRange: '₹600 – ₹1,200',
    highlights: ['Instant Shade Brightening', 'Zero Irritation Formula', 'Aloe Soothing Massage', 'Sun-Damaged Skin Relief'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tags: ['De-Tan', 'Quick Brightening', 'Sun Relief']
  },
  {
    id: 's4',
    category: 'skin',
    title: 'Pure Herbal & Papaya Organic Clean-Up',
    shortDesc: 'Gentle botanical deep cleansing for sensitive or combination skin with steam extraction and blackhead removal.',
    duration: '45 Mins',
    popular: false,
    priceRange: '₹450 – ₹750',
    highlights: ['Steam & Blackhead Extraction', 'Pure Papaya Fruit Enzymes', 'Herbal Toner Balance', 'Fresh Rose Mist'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tags: ['Clean-up', 'Organic Fruit', 'Sensitive Skin']
  },
  {
    id: 's5',
    category: 'skin',
    title: 'Anti-Acne & Clarifying Neem-Tea Tree Facial',
    shortDesc: 'Therapeutic clarifying treatment designed to balance excess sebum, calm active breakouts, and heal stubborn marks.',
    duration: '60 Mins',
    popular: false,
    priceRange: '₹900 – ₹1,500',
    highlights: ['Pore De-clogging Technology', 'Anti-Bacterial Neem Treatment', 'Calming Cooling Gel Pack', 'Sebum Regulation'],
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    tags: ['Anti-Acne', 'Clarifying', 'Oil Control']
  },
  {
    id: 's6',
    category: 'skin',
    title: 'Full Body Glow Polishing & Exfoliation',
    shortDesc: 'Head-to-toe gentle walnut & apricot scrub and aromatic moisturizing massage for silky-soft skin before weddings.',
    duration: '90 Mins',
    popular: false,
    priceRange: '₹2,500 – ₹4,500',
    highlights: ['Walnut & Apricot Body Polish', 'Warm Oil Nourishment', 'Steam Shower Finish', 'Velvet Soft Touch'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    tags: ['Body Polish', 'Pre-Bridal', 'Full Body Glow']
  },

  // 4. Essential Grooming
  {
    id: 'g1',
    category: 'grooming',
    title: 'Precision Eyebrow Threading & Face Shaping',
    shortDesc: 'Our 10-year signature grooming service. Perfect arch symmetry, crisp definition, and painless hygienic technique.',
    duration: '15 Mins',
    popular: true,
    priceRange: '₹60 – ₹200',
    highlights: ['Sterilized Cotton Threads', 'Natural Brow Shaping', 'Cooling Aloe Vera Gel', 'Upper Lip & Chin Add-ons available'],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    tags: ['Signature Grooming', 'Hygienic', 'Painless']
  },
  {
    id: 'g2',
    category: 'grooming',
    title: 'Rica Liposoluble Italian Waxing (Arms, Legs, Body)',
    shortDesc: 'Colophony-free Italian liposoluble wax gentle on sensitive skin, removes shortest hair without skin pulling.',
    duration: '30 - 60 Mins',
    popular: true,
    priceRange: '₹300 – ₹2,200',
    highlights: ['No Pain Stripping', 'Zero Skin Peeling or Rashes', 'Post-Wax Calming Lotion', 'Smooth For Weeks'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tags: ['Rica Wax', 'Gentle', 'Full Body / Arms / Legs']
  },
  {
    id: 'g3',
    category: 'grooming',
    title: 'Deluxe Rose & Mint Spa Pedicure',
    shortDesc: 'Relaxing foot soak with Himalayan salts, callus buffing, dead skin scrub, crack heel care, and precision nail polish.',
    duration: '60 Mins',
    popular: false,
    priceRange: '₹650 – ₹1,000',
    highlights: ['Aromatherapy Foot Jacuzzi', 'Crack-Heel Treatment', 'Calf & Ankle Massage', 'High-Shine Nail Polish'],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Pedicure', 'Foot Spa', 'Crack Heel Care']
  },
  {
    id: 'g4',
    category: 'grooming',
    title: 'Luxury Hydrating Spa Manicure',
    shortDesc: 'Cuticle revitalization, hand exfoliation, nourishing butter wrap, and salon nail lacquer.',
    duration: '45 Mins',
    popular: false,
    priceRange: '₹500 – ₹800',
    highlights: ['Nail Shaping & Buffing', 'Cuticle Vitamin Therapy', 'Brightening Hand Mask', 'Long-Lasting Polish'],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    tags: ['Manicure', 'Hand Spa', 'Nail Care']
  },
  {
    id: 'g5',
    category: 'grooming',
    title: 'Full Face & Neck Herbal Glow Bleach',
    shortDesc: 'Skin-friendly herbal bleach formulated without harsh chemicals to blend facial hair and enhance instant luminosity.',
    duration: '30 Mins',
    popular: false,
    priceRange: '₹450 – ₹750',
    highlights: ['Pre-Bleach Barrier Cream', 'Gentle Ammonia-Free Base', 'Even Golden Tone', 'Moisturizing Finish'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    tags: ['Herbal Bleach', 'Instant Brightness', 'Safe']
  }
];
