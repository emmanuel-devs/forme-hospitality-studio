export type ProjectStatus = "Concept Visualization" | "Completed Installation";
export type Project = {
  title: string;
  category: string;
  type: string;
  status: ProjectStatus;
  image: string;
  alt: string;
  featured?: boolean;
};

// Self-initiated concept work. These examples are deliberately labelled as visualizations,
// not represented as commissioned or completed client projects.
export const projects: Project[] = [
  {
    title: "The Guest Suite",
    category: "Hotels & Boutique Properties",
    type: "Guestroom",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85",
    alt: "Warm, refined guest suite with layered neutral bedding and contemporary furnishings",
    featured: true,
  },
  {
    title: "The Retreat",
    category: "Vacation Rentals",
    type: "Living Space",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Airy contemporary living room with natural materials and understated furniture",
  },
  {
    title: "The Experience Room",
    category: "Immersive Experiences",
    type: "Entertainment Room",
    status: "Concept Visualization",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    alt: "Dramatic contemporary interior with sculptural furniture and layered lighting",
  },
];
