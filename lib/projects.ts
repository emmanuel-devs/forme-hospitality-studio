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
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1800&q=85",
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
      { image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&q=85", alt: "Layered lighting and tactile interior materials", caption: "02 / Light, shadow, and texture" },
      { image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9b?auto=format&fit=crop&w=1600&q=85", alt: "Curated interior styling and material details", caption: "03 / The finishing language" }
    ]
  },
  {
    slug: "the-residential-collection",
    title: "The Residential Collection",
    category: "Luxury Residential",
    type: "Living Space",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    alt: "Quiet luxury residential living space with layered natural textures",
    location: "Illustrative private-residence concept",
    scope: "Living room direction · Furnishing palette · Spatial styling",
    year: "2026",
    intro: "A residential concept built around quiet confidence, tactile materials, and furniture with a strong sense of proportion. The aim is a home that feels personal and composed rather than staged.",
    challenge: "Luxury residential spaces need a recognisable point of view while leaving room for the people who live there. Every material and furniture choice should support comfort as well as character.",
    direction: "Soft stone tones, natural timber, sculptural seating, and considered negative space create an understated composition with warmth and depth.",
    details: [
      { title: "Comfort with presence", description: "Generous seating and tactile upholstery make the room inviting without losing its architectural clarity." },
      { title: "A natural material story", description: "Timber, stone, and woven textures create depth through their finish and contrast." },
      { title: "Personal, not over-styled", description: "A restrained selection of objects lets the architecture and key furniture pieces remain the focus." }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85", alt: "Residential living room with warm natural materials", caption: "01 / The living space" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", alt: "Sculptural furniture and considered proportions", caption: "02 / Shape and proportion" },
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85", alt: "Calm neutral palette and tactile surfaces", caption: "03 / A restrained material palette" }
    ]
  },
  {
    slug: "the-boutique-lobby",
    title: "The Boutique Lobby",
    category: "Hotels & Boutique Properties",
    type: "Lobby & Arrival",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85",
    alt: "Boutique hospitality interior with a calm, contemporary arrival atmosphere",
    location: "Illustrative boutique-hotel arrival concept",
    scope: "Arrival experience · Guest circulation · Furniture direction",
    year: "2026",
    intro: "An arrival-space concept designed to establish the character of a boutique property from the first few steps. A confident focal point, welcoming seating, and layered finishes bring clarity to the guest journey.",
    challenge: "A lobby must welcome, orient, and accommodate guests without feeling like a corridor or a waiting room. The atmosphere should feel distinctive while supporting practical movement.",
    direction: "The concept combines a legible circulation route with a tactile reception backdrop, comfortable seating, and warm accent lighting that gives the space an identity throughout the day.",
    details: [
      { title: "A clear arrival sequence", description: "Sightlines and furniture placement help guests understand where to go without unnecessary signage." },
      { title: "A considered first impression", description: "A focused material palette gives the arrival area a memorable identity without visual clutter." },
      { title: "Comfort in transition", description: "Seating and lighting support short waits, informal meetings, and a more relaxed check-in experience." }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85", alt: "Boutique lobby concept with layered architectural finishes", caption: "01 / The arrival view" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", alt: "Architectural details and contemporary furniture", caption: "02 / Architectural character" },
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85", alt: "Warm furniture and finish palette", caption: "03 / Furniture and finish language" }
    ]
  },
  {
    slug: "the-entertainment-suite",
    title: "The Entertainment Suite",
    category: "Immersive Experiences",
    type: "Entertainment Room",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
    alt: "Contemporary entertainment suite concept with dramatic lighting and comfortable seating",
    location: "Illustrative bespoke entertainment-room concept",
    scope: "Entertainment room concept · Lighting layers · Furnishing direction",
    year: "2026",
    intro: "A private entertainment-room concept that balances a strong mood with everyday comfort. The design gives the room a distinct identity while keeping seating, circulation, and lighting practical.",
    challenge: "Entertainment spaces can become crowded with competing screens, furniture, and decorative effects. A coherent hierarchy is needed so the room feels immersive rather than busy.",
    direction: "A controlled palette, comfortable low-profile seating, and layered lighting establish atmosphere. The focal wall and furniture arrangement are treated as one composition.",
    details: [
      { title: "A focused focal wall", description: "The main viewing area is treated as the visual anchor, with surrounding finishes kept quieter." },
      { title: "Lighting that shifts the mood", description: "Ambient and accent lighting create atmosphere while allowing the room to remain usable." },
      { title: "Comfort first", description: "Seating positions and circulation are considered together so the experience feels relaxed, not over-designed." }
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85", alt: "Entertainment suite concept with composed furniture arrangement", caption: "01 / The room composition" },
      { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85", alt: "Material contrast and atmospheric interior detail", caption: "02 / Texture and contrast" },
      { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85", alt: "Furniture and warm lighting detail", caption: "03 / The finishing details" }
    ]
  }
];
