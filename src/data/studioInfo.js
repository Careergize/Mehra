export const studioInfo = {
  name: "Mehra Beauty Parlour & Makeup Studio",
  shortName: "Mehra",
  tagline: "Enhancing Your Natural Grace & Radiance",
  motto: "Wake Up & Make Up",
  subheading: "Thrissur's Trusted Haven for Bridal Artistry, Hair Chemistry & Luxury Aesthetics",
  since: 2014,
  experienceYears: "10+",
  phone: "+91 79072 80180",
  phoneRaw: "+917907280180",
  secondaryPhone: "+91 80759 07191",
  secondaryPhoneRaw: "+918075907191",
  whatsappNumber: "917907280180",
  address: {
    floor: "Ground Floor",
    building: "Chirayinmel Building (near SN School)",
    locality: "Kanimangalam",
    city: "Thrissur",
    state: "Kerala",
    pincode: "680027",
    full: "Ground Floor, Chirayinmel Building (near SN School), Kanimangalam, Thrissur, Kerala – 680027"
  },
  hours: {
    monSat: "9:30 AM – 7:30 PM",
    sun: "9:30 AM – 7:00 PM",
    holidays: "Open all festival days & Sundays for bridal appointments"
  },
  social: {
    instagram: "https://instagram.com/mehrabeautystudio",
    facebook: "https://facebook.com/mehrabeautystudiokerala",
    googleMaps: "https://maps.google.com/?q=Kanimangalam,+Thrissur,+Kerala+680027"
  },
  getWhatsAppLink: (customMessage) => {
    const text = customMessage || "Hi Mehra Beauty Parlour, I would like to inquire about your services and book an appointment.";
    return `https://wa.me/917907280180?text=${encodeURIComponent(text)}`;
  }
};
