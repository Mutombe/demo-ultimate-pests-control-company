export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Bebas Neue", body: "Inter", display: "Bebas Neue" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Ultimate pests control company",
    legalName: "Ultimate pests control company",
    tagline: "Professional Cleaning & Pest Control Solutions",
    description: "Ultimate pests control company was founded on a simple principle: every space deserves to be clean, safe, and healthy. We bring professional-grade cleaning and pest control to homes and businesses across Harare.",
    phone: "+263 77 615 8245",
    phoneRaw: "+263776158245",
    whatsappNumber: "263776158245",
    email: "info@ultimatepestscontrol.co.zw",
    address: "Paisley Rd, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 2,
    established: "2018",
    yearsExperience: "6+",
    projectsCompleted: "2000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "ultimate-pests-control-company-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Ultimate", logoLine2: "pests control" },

  hero: {
    badge: "Professional Cleaning & Pest Control in Harare",
    titleParts: [
      { text: "THE ULTIMATE " },
      { text: "DEFENCE", highlight: true },
      { text: " AGAINST PESTS." },
    ],
    subtitle: "Our team of trained technicians uses eco-friendly products and proven methods to deliver results that exceed expectations. From deep house cleans to full-scale fumigation, we handle it all.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Our Services",
    trustBadge: "2000+ Spaces Cleaned",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1920&q=80", alt: "Professional workspace and equipment" },
      { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85", alt: "Team delivering quality service" },
      { url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1920&q=80", alt: "Modern facilities and operations" },
    ],
  },

  stats: [
    { number: "2000+", label: "Spaces Cleaned" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "15+", label: "Trained Staff" },
    { number: "24hr", label: "Emergency Response" },
  ],

  servicesPreview: [
    { title: "Deep House Cleaning", desc: "A thorough top-to-bottom clean that reaches every corner, crevice, and surface. We leave your home not just clean, but deeply refreshed.", icon: "Heart" },
    { title: "Pest Control", desc: "Eliminate cockroaches, termites, rodents, and all unwanted guests with our targeted, safe, and effective pest management solutions.", icon: "Star" },
    { title: "Fumigation Services", desc: "Professional-grade fumigation for homes, warehouses, and commercial spaces. We use approved chemicals with minimal disruption to your routine.", icon: "Briefcase" },
    { title: "Office & Commercial Cleaning", desc: "Keep your workspace pristine with our scheduled commercial cleaning services. Healthy employees, professional impressions, every day.", icon: "Buildings" },
    { title: "Carpet & Upholstery Care", desc: "Professional steam cleaning that revives your carpets and upholstery, eliminating stains, allergens, and trapped odours.", icon: "Leaf" },
    { title: "Sanitisation & Disinfection", desc: "Hospital-grade disinfection for homes, schools, offices, and public spaces. Peace of mind in every square metre.", icon: "Lightbulb" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs. Quality and reliability in everything we do.",
    items: [
      { title: "Deep House Cleaning", slug: "deep-cleaning", desc: "A thorough top-to-bottom clean that reaches every corner, crevice, and surface. We leave your home not just clean, but deeply refreshed.", features: ["All-Room Deep Clean", "Kitchen Degreasing", "Bathroom Sanitisation", "Window Cleaning", "Skirting & Fixtures", "Eco-Friendly Products"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80" },
      { title: "Pest Control", slug: "pest-control", desc: "Eliminate cockroaches, termites, rodents, and all unwanted guests with our targeted, safe, and effective pest management solutions.", features: ["Cockroach Treatment", "Termite Barriers", "Rodent Control", "Bed Bug Elimination", "Ant Treatment", "Follow-Up Inspections"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
      { title: "Fumigation Services", slug: "fumigation", desc: "Professional-grade fumigation for homes, warehouses, and commercial spaces. We use approved chemicals with minimal disruption to your routine.", features: ["Full-Structure Fumigation", "Warehouse Treatment", "Food Storage Compliance", "Pre-Occupation Fumigation", "Quarterly Programs", "Safety Certification"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80" },
      { title: "Office & Commercial Cleaning", slug: "office-cleaning", desc: "Keep your workspace pristine with our scheduled commercial cleaning services. Healthy employees, professional impressions, every day.", features: ["Daily Maintenance", "After-Hours Service", "Washroom Hygiene", "Floor Polishing", "Waste Management", "Reception Areas"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80" },
      { title: "Carpet & Upholstery Care", slug: "carpet-care", desc: "Professional steam cleaning that revives your carpets and upholstery, eliminating stains, allergens, and trapped odours.", features: ["Steam Cleaning", "Stain Removal", "Deodorising", "Allergen Treatment", "Fabric Protection", "Quick Dry Technology"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
      { title: "Sanitisation & Disinfection", slug: "sanitisation", desc: "Hospital-grade disinfection for homes, schools, offices, and public spaces. Peace of mind in every square metre.", features: ["Electrostatic Spraying", "Surface Disinfection", "Air Purification", "Touch-Point Focus", "Certificate Issued", "Scheduled Programs"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to excellence.",
    items: [
      { title: "Corporate Office Deep Clean", slug: "corporate-deep-clean", category: "Commercial", location: "Harare, Zimbabwe", desc: "Complete deep cleaning of a 3-floor corporate headquarters over one weekend.", client: "Client Project", services: ["Deep House Cleaning", "Pest Control"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"] },
      { title: "Residential Pest Elimination", slug: "residential-pest", category: "Residential", location: "Harare, Zimbabwe", desc: "Full termite and cockroach treatment for a 6-bedroom Borrowdale home.", client: "Client Project", services: ["Deep House Cleaning", "Pest Control"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"] },
      { title: "Warehouse Fumigation", slug: "warehouse-fumigation", category: "Industrial", location: "Harare, Zimbabwe", desc: "Large-scale fumigation of a 2000sqm food storage warehouse.", client: "Client Project", services: ["Deep House Cleaning", "Pest Control"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"] },
      { title: "School Sanitisation Program", slug: "school-sanitisation", category: "Institutional", location: "Harare, Zimbabwe", desc: "Quarterly sanitisation program for a 600-student private school.", client: "Client Project", services: ["Deep House Cleaning", "Pest Control"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"] },
      { title: "Restaurant Kitchen Hygiene", slug: "restaurant-kitchen", category: "Hospitality", location: "Harare, Zimbabwe", desc: "Monthly deep clean and pest prevention for a chain of five restaurants.", client: "Client Project", services: ["Deep House Cleaning", "Pest Control"], image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Ultimate pests control company transformed our office. The deep clean was so thorough our staff thought we had renovated. Absolutely outstanding work.", name: "Patricia Makoni", role: "Office Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "We had a serious cockroach problem. Ultimate pests control company came in, treated the entire property, and we have not seen a single pest since. Highly recommend.", name: "David Chikwanha", role: "Homeowner, Borrowdale", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Professional, punctual, and incredibly thorough. Ultimate pests control company handles all our commercial cleaning and the standard is always impeccable.", name: "Nyasha Mhembere", role: "Property Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The fumigation service was safe, efficient, and effective. They explained everything clearly and the follow-up inspection was a nice touch.", name: "Rudo Sibanda", role: "Warehouse Supervisor", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on trust, driven by excellence.",
    story: [
      "Ultimate pests control company was founded on a simple principle: every space deserves to be clean, safe, and healthy. We bring professional-grade cleaning and pest control to homes and businesses across Harare.",
      "Our team of trained technicians uses eco-friendly products and proven methods to deliver results that exceed expectations. From deep house cleans to full-scale fumigation, we handle it all.",
      "With hundreds of satisfied clients and a 100% satisfaction guarantee, we have built a reputation as one of Harare's most reliable cleaning and pest control providers.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or the materials we use." },
      { title: "Reliability", desc: "When we make a promise, we keep it. On time, every time." },
      { title: "Customer Focus", desc: "Your satisfaction is our measure of success." },
      { title: "Integrity", desc: "Honest pricing, transparent communication, and ethical business practices." },
    ],
    team: [
      { name: "Tendai Masuku", role: "Managing Director", bio: "Certified pest control technician with over 10 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Farai Chinyanga", role: "Operations Manager", bio: "Oversees all cleaning operations and ensures the highest quality standards.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Grace Moyo", role: "Client Relations", bio: "Dedicated to ensuring every client receives responsive, personalised service.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our clients say about working with us.",
    items: [
      { text: "Ultimate pests control company transformed our office. The deep clean was so thorough our staff thought we had renovated. Absolutely outstanding work.", name: "Patricia Makoni", role: "Office Manager", rating: 5 },
      { text: "We had a serious cockroach problem. Ultimate pests control company came in, treated the entire property, and we have not seen a single pest since. Highly recommend.", name: "David Chikwanha", role: "Homeowner, Borrowdale", rating: 5 },
      { text: "Professional, punctual, and incredibly thorough. Ultimate pests control company handles all our commercial cleaning and the standard is always impeccable.", name: "Nyasha Mhembere", role: "Property Manager", rating: 5 },
      { text: "The fumigation service was safe, efficient, and effective. They explained everything clearly and the follow-up inspection was a nice touch.", name: "Rudo Sibanda", role: "Warehouse Supervisor", rating: 5 },
      { text: "Outstanding service from start to finish. Ultimate pests control company exceeded all our expectations.", name: "Memory Dube", role: "Satisfied Customer", rating: 5 },
      { text: "Professional, reliable, and great value for money. I recommend Ultimate pests control company to everyone.", name: "Tafadzwa Chikumba", role: "Regular Client", rating: 5 },
      { text: "The team at Ultimate pests control company is knowledgeable and always willing to go the extra mile.", name: "Chenai Manyika", role: "Business Owner", rating: 5 },
      { text: "Consistently excellent service. Ultimate pests control company has been our trusted partner for years.", name: "Patrick Nhamo", role: "Property Manager", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented, dedicated people.",
    positions: [
      { title: "Operations Assistant", department: "Operations", location: "Harare", type: "Full-time", desc: "Support daily operations and ensure smooth service delivery." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to get started? Contact us for a free quote.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in your details and we will respond within 24 hours.",
  },

  homeCta: {
    title: "CLEAN SPACES HEALTHY LIVES",
    subtitle: "Ready to experience the difference? Get in touch today for a free, no-obligation quote. We look forward to serving you.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "WhatsApp Us",
    whatsappText: "Hi Ultimate pests control company! I would like to request a quote.",
    backgroundImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1920&q=80",
  },

  footer: {
    description: "Ultimate pests control company was founded on a simple principle: every space deserves to be clean, safe, and healthy. We bring professional-grade cleaning and pest control to homes and businesses acr",
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export default siteData;
