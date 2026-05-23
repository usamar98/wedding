export type ImageAsset = {
  src: string;
  alt: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  icon: "planning" | "destination" | "styling" | "hospitality";
  title: string;
  description: string;
};

export type PortfolioProject = {
  title: string;
  location: string;
  type: string;
  guests: string;
  tags: string[];
  image: ImageAsset;
};

export type CaseStudyMoment = {
  title: string;
  copy: string;
};

export type PackageOption = {
  name: string;
  price: string;
  description: string;
  inclusions: string[];
  featured?: boolean;
};

export type ProcessStep = {
  title: string;
  copy: string;
};

export type Testimonial = {
  quote: string;
  couple: string;
  location: string;
  eventType: string;
};

// Change the business name, phone number, WhatsApp message, currency, and city list here.
export const company = {
  name: "Aurelia Wedding Atelier",
  tagline: "Luxury Wedding Planning & Event Design",
  email: "hello@aureliaatelier.com",
  phone: "+447000000000",
  whatsappMessage: "Hi, I’m interested in planning a luxury wedding/event.",
  currency: "USD",
  socials: {
    instagram: "https://instagram.com/",
    pinterest: "https://pinterest.com/"
  },
  citiesServed: [
    "London",
    "Dubai",
    "Doha",
    "Malta",
    "Cyprus",
    "New York",
    "Singapore"
  ]
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Investment", href: "#packages" },
  { label: "Inquiry", href: "#inquiry" }
];

// Swap these image URLs for your own venue, couple, or decor photography.
export const images = {
  hero:
    "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&w=1800&q=80",
  heroDetail:
    "https://images.unsplash.com/photo-1770371447745-a51fa38bea3e?auto=format&fit=crop&w=1200&q=80",
  about:
    "https://images.unsplash.com/photo-1722805740177-04256b6517f2?auto=format&fit=crop&w=1400&q=80",
  caseStudy:
    "https://images.unsplash.com/photo-1770371447745-a51fa38bea3e?auto=format&fit=crop&w=1800&q=80",
  portfolioOne:
    "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&w=1400&q=80",
  portfolioTwo:
    "https://images.unsplash.com/photo-1770371447745-a51fa38bea3e?auto=format&fit=crop&w=1400&q=80",
  portfolioThree:
    "https://images.unsplash.com/photo-1722805740177-04256b6517f2?auto=format&fit=crop&w=1400&q=80",
  portfolioFour:
    "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&w=1400&q=80",
  portfolioFive:
    "https://images.unsplash.com/photo-1770371447745-a51fa38bea3e?auto=format&fit=crop&w=1400&q=80",
  portfolioSix:
    "https://images.unsplash.com/photo-1722805740177-04256b6517f2?auto=format&fit=crop&w=1400&q=80"
};

export const hero = {
  headline: "Designing Once-in-a-Lifetime Celebrations",
  subheadline:
    "A premium digital experience for luxury wedding planners, destination events, and unforgettable celebrations.",
  primaryCta: { label: "View Signature Events", href: "#portfolio" },
  secondaryCta: { label: "Start an Inquiry", href: "#inquiry" },
  images: [
    {
      src: images.hero,
      alt: "Luxury outdoor wedding venue with chandeliers, palms, and floral installations"
    },
    {
      src: images.heroDetail,
      alt: "Candlelit wedding table with layered florals and glassware"
    }
  ] satisfies ImageAsset[]
};

export const trustPoints = [
  "Destination Weddings",
  "Full-Service Planning",
  "Event Design",
  "Luxury Guest Experience",
  "Global Celebrations"
];

export const about = {
  kicker: "Atelier Approach",
  title:
    "A planning house for celebrations that feel composed, personal, and impossible to repeat.",
  copy: [
    "Aurelia blends art direction, planning discipline, decor strategy, and guest hospitality into one calm, exacting service.",
    "Every celebration is built as a complete world: arrival mood, ceremony rhythm, dining atmosphere, floral language, lighting, logistics, and the quiet details guests remember after they leave."
  ],
  image: {
    src: images.about,
    alt: "Bride and groom walking through a garden after their ceremony"
  },
  stats: [
    { value: "120+", label: "Events Designed" },
    { value: "18", label: "Destinations" },
    { value: "9", label: "Years Experience" },
    { value: "4.9", label: "Client Rating" }
  ] satisfies Stat[]
};

export const services: Service[] = [
  {
    icon: "planning",
    title: "Full-Service Wedding Planning",
    description:
      "Complete planning stewardship from first concept to final guest departure, shaped for couples who want a composed experience."
  },
  {
    icon: "destination",
    title: "Destination Wedding Management",
    description:
      "Venue scouting, local partner alignment, guest flow, travel touchpoints, and multi-day scheduling across global locations."
  },
  {
    icon: "styling",
    title: "Event Styling & Decor Direction",
    description:
      "A visual language for florals, tablescapes, lighting, paper goods, ceremony settings, and reception atmosphere."
  },
  {
    icon: "hospitality",
    title: "Vendor & Guest Experience Coordination",
    description:
      "A refined operations layer for vendors, family priorities, arrivals, concierge details, and the moments between events."
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Santorini Cliffside Wedding",
    location: "Santorini, Greece",
    type: "Destination Ceremony",
    guests: "82 guests",
    tags: ["Sea air", "Ivory florals", "Golden hour"],
    image: {
      src: images.portfolioOne,
      alt: "Destination wedding ceremony beside the ocean"
    }
  },
  {
    title: "Dubai Palace Celebration",
    location: "Dubai, UAE",
    type: "Palace Reception",
    guests: "240 guests",
    tags: ["Crystal", "Palm garden", "Black tie"],
    image: {
      src: images.portfolioTwo,
      alt: "Grand ballroom with chandeliers and a marble floor"
    }
  },
  {
    title: "London Garden Wedding",
    location: "London, UK",
    type: "Garden Wedding",
    guests: "96 guests",
    tags: ["Heritage", "Garden vows", "English roses"],
    image: {
      src: images.portfolioThree,
      alt: "Bride and groom in a private garden"
    }
  },
  {
    title: "Doha Luxury Ballroom Event",
    location: "Doha, Qatar",
    type: "Ballroom Production",
    guests: "310 guests",
    tags: ["Chandeliers", "Floral theatre", "Late supper"],
    image: {
      src: images.portfolioFour,
      alt: "Luxury event venue with chandeliers and flower installations"
    }
  },
  {
    title: "Lake Como Destination Wedding",
    location: "Lake Como, Italy",
    type: "Three-Day Weekend",
    guests: "118 guests",
    tags: ["Villa arrival", "Candlelight", "Lake ceremony"],
    image: {
      src: images.portfolioFive,
      alt: "Elegant wedding table with flowers, candles, and glassware"
    }
  },
  {
    title: "Marrakech Private Estate Wedding",
    location: "Marrakech, Morocco",
    type: "Private Estate",
    guests: "164 guests",
    tags: ["Courtyard", "Lantern glow", "Textile story"],
    image: {
      src: images.portfolioSix,
      alt: "Candlelit table with floral arrangements near a window"
    }
  }
];

export const caseStudy = {
  kicker: "Featured Case Study",
  title: "A Three-Day Destination Wedding Experience",
  location: "Lake Como, Italy",
  summary:
    "A refined weekend shaped around arrival theatre, ceremony intimacy, and a reception that moved from candlelit dinner to late-night celebration.",
  image: {
    src: images.caseStudy,
    alt: "Candlelit reception table with white floral arrangements"
  },
  moments: [
    {
      title: "Welcome dinner",
      copy:
        "A lakeside table plan, handwritten notes, regional menu pacing, and a first evening designed to soften travel fatigue."
    },
    {
      title: "Wedding ceremony",
      copy:
        "A quiet aisle, minimal floral framing, live strings, and a guest arrival sequence timed around the changing light."
    },
    {
      title: "Reception design",
      copy:
        "Layered candlelight, sculptural florals, champagne linen, and a dinner layout that kept every toast visible."
    },
    {
      title: "Guest hospitality",
      copy:
        "Welcome amenities, transfers, room drops, late-night comforts, and discreet support for family needs throughout the weekend."
    }
  ] satisfies CaseStudyMoment[]
};

// Change package names, prices, and inclusions here. These are planner packages, not web design prices.
export const packages: PackageOption[] = [
  {
    name: "Signature Planning",
    price: "from $1,500",
    description:
      "Focused planning guidance for couples who want a refined roadmap and expert oversight.",
    inclusions: [
      "Discovery strategy call",
      "Creative planning outline",
      "Vendor priority list",
      "Month-of support"
    ]
  },
  {
    name: "Destination Experience",
    price: "from $3,500",
    description:
      "A multi-location planning experience for destination weddings, guest travel, and celebration weekends.",
    inclusions: [
      "Destination logistics",
      "Guest communication plan",
      "Multi-day itinerary",
      "Venue and vendor coordination"
    ],
    featured: true
  },
  {
    name: "Full Luxury Production",
    price: "from $7,500+",
    description:
      "End-to-end creative direction, planning, production, and hospitality for high-touch weddings.",
    inclusions: [
      "Full event art direction",
      "Budget and production planning",
      "Guest hospitality design",
      "On-site execution team"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery Call",
    copy: "Understand the couple, family priorities, location, guest rhythm, and emotional brief."
  },
  {
    title: "Creative Direction",
    copy: "Define the visual world, ceremony atmosphere, tablescape language, and hospitality tone."
  },
  {
    title: "Planning Roadmap",
    copy: "Build the production calendar, budget structure, vendor map, and decision sequence."
  },
  {
    title: "Vendor Coordination",
    copy: "Align creative partners, timelines, technical needs, and guest-facing details."
  },
  {
    title: "Event Execution",
    copy: "Lead the celebration on site with calm direction, precise timing, and discreet problem solving."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aurelia gave our wedding a sense of theatre without ever making it feel performed. Every guest felt personally cared for.",
    couple: "Leila & Rhys",
    location: "Lake Como",
    eventType: "Destination wedding weekend"
  },
  {
    quote:
      "The team understood restraint. The flowers, lighting, table service, and timing all felt quietly extraordinary.",
    couple: "Maya & Oliver",
    location: "London",
    eventType: "Private garden celebration"
  },
  {
    quote:
      "We had families flying in from four countries. Aurelia made the entire weekend feel effortless and deeply personal.",
    couple: "Noura & Kamal",
    location: "Dubai",
    eventType: "Palace reception"
  }
];

export const budgetRanges = [
  "$25k - $50k",
  "$50k - $100k",
  "$100k - $250k",
  "$250k+",
  "To be discussed"
];
