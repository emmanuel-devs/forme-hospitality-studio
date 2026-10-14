export type ProjectStatus = "Concept Visualization" | "Completed Installation";
export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: ProjectStatus;
  image: string;
  alt: string;
  location: string;
  scope: string;
  year: string;
  intro: string;
  challenge: string;
  direction: string;
  details: { title: string; description: string }[];
  gallery: { image: string; alt: string; caption: string }[];
  featured?: boolean;
};

// Self-initiated portfolio concepts, clearly labelled as visualizations rather than commissioned work.
export const projects: Project[] = [
  {
    slug: "the-guest-suite",
    title: "The Guest Suite",
    category: "Hotels & Boutique Properties",
    type: "Guestroom",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85",
    alt: "Warm, refined guest suite with layered neutral bedding and contemporary furnishings",
    location: "Illustrative boutique-hotel concept",
    scope: "Guestroom concept · Material palette · Furnishing direction",
    year: "2026",
    intro: "A quiet, tactile guestroom concept built around the feeling of arriving somewhere considered. Natural finishes, softened geometry, and restrained contrast create a room that feels elevated without losing its sense of ease.",
    challenge: "A guestroom needs to do more than photograph well. It should feel intuitive on arrival, support rest, and use a coherent set of finishes that can inform a wider property identity.",
    direction: "The design direction pairs warm timber tones with linen-like textiles, sculptural bedside lighting, and a calm neutral palette. Visual weight is kept low, while layered textures bring depth without visual noise.",
    details: [
      { title: "A softer arrival", description: "A clear view through the room, generous visual breathing space, and a layered bed create an immediate sense of calm." },
      { title: "Tactile restraint", description: "Warm wood, woven textures, matte surfaces, and quiet stone tones provide contrast through material rather than excess colour." },
      { title: "Guest-first details", description: "Bedside lighting, accessible surfaces, and a considered place for everyday belongings keep the concept grounded in hospitality use." }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85", alt: "Neutral boutique guestroom with layered bedding", caption: "01 / The room at a glance" },
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85", alt: "Warm contemporary interior with curated furniture", caption: "02 / Material and furniture language" },
      { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85", alt: "Natural finishes and contemporary interior details", caption: "03 / Texture and tonal contrast" }
    ],
    featured: true
  },
  {
    slug: "the-retreat",
    title: "The Retreat",
    category: "Vacation Rentals",
    type: "Living Space",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    alt: "Airy contemporary living room with natural materials and understated furniture",
    location: "Illustrative short-stay property concept",
    scope: "Living area concept · Guest flow · Furnishing direction",
    year: "2026",
    intro: "A relaxed living space for a short-stay property, shaped to feel personal rather than generic. The concept balances a welcoming first impression with flexible seating, durable-looking materials, and a visual identity that feels consistent throughout the stay.",
    challenge: "Short-stay interiors must serve different guests and different moments, from a quiet morning to a shared evening, while remaining easy to understand and comfortable to use.",
    direction: "A grounded palette, generous circulation, mixed seating, and layered lighting establish a versatile social heart. Natural textures do the work of adding character, while larger furniture forms keep the room composed.",
    details: [
      { title: "Flexible gathering", description: "A clear seating arrangement supports conversation while leaving room to move through the space naturally." },
      { title: "Warmth without clutter", description: "A restrained mix of wood, woven surfaces, soft upholstery, and considered objects makes the room feel lived-in but not overfilled." },
      { title: "A memorable first impression", description: "A coherent palette carries through the main view, giving the space a recognisable character in photographs and in person." }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85", alt: "Living room concept with warm natural materials", caption: "01 / The shared living space" },
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85", alt: "Contemporary interior with calm tonal palette", caption: "02 / A calm, cohesive palette" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", alt: "Modern living area with sculptural furnishings", caption: "03 / Shape and proportion" }
    ]
  },
  {
    slug: "the-experience-room",
    title: "The Experience Room",
    category: "Immersive Experiences",
    type: "Entertainment Room",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    alt: "Dramatic contemporary interior with sculptural furniture and layered lighting",
    location: "Illustrative bespoke-room concept",
    scope: "Atmosphere concept · Lighting direction · Spatial mood",
    year: "2026",
    intro: "A more expressive interior concept designed around atmosphere. Sculptural forms, deeper tones, and layered light create a space with a stronger point of view while keeping comfort and movement at the centre.",
    challenge: "A themed or entertainment-led room can easily become visually busy. The goal here is to build a distinctive mood without sacrificing comfort, usability, or a coherent overall composition.",
    direction: "The concept uses a limited material palette and a strong lighting hierarchy. Statement pieces are given room to breathe, with quieter surrounding finishes allowing the central experience to take focus.",
    details: [
      { title: "Atmosphere by layers", description: "Ambient, task, and accent lighting are considered as separate layers to create flexibility across different moments." },
      { title: "A clear focal point", description: "Sculptural furniture and deliberate sightlines give the room a visual centre without competing focal points." },
      { title: "Immersion with intention", description: "Contrast and texture create drama, while clear circulation and comfortable seating keep the room practical." }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85", alt: "Contemporary room with strong architectural lines", caption: "01 / The overall atmosphere" },
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85", alt: "Layered lighting and tactile interior materials", caption: "02 / Light, shadow, and texture" },
      { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85", alt: "Curated interior styling and material details", caption: "03 / The finishing language" }
    ]
  }
];
