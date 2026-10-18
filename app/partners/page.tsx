import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Partners | FORME Hospitality Studio",
  description: "Explore collaboration with FORME for realtors, property managers, designers, architects, and property developers."
};

const cards = [
  { title: "Realtors", eyebrow: "PROPERTY PRESENTATION", description: "Bring a more considered design perspective to property conversations, staging direction, and opportunities where first impressions matter.", href: "/#inquiry", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" },
  { title: "Property managers", eyebrow: "GUEST & RESIDENT EXPERIENCE", description: "Explore furnishing and styling directions that balance a memorable environment with the practical needs of ongoing property operations.", href: "/interiors/vacation-rentals", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" },
  { title: "Designers & developers", eyebrow: "SHARED EXPERTISE", description: "Coordinate complementary skills around a coherent visual direction, with scope and responsibilities agreed at the outset.", href: "/trade", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" }
];

export default function PartnersPage() {
  return <EditorialPage eyebrow="Partners / Shared perspective" title="Good work grows" italicTitle="through collaboration." intro="We connect with property professionals who believe that the experience of a space matters as much as the space itself." image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85" imageAlt="Welcoming contemporary interior with considered furnishings" imageLabel="PARTNERSHIPS" sectionTitle="Different expertise. A more complete result." sectionCopy="The strongest property experiences often emerge when the right people are involved early. We welcome thoughtful conversations with realtors, property managers, designers, architects, and developers whose work aligns with a considered approach to interiors." cards={cards} processTitle="Start with a conversation, not a commitment." processCopy="Tell us about the properties and clients you work with, the opportunities you see, and the kind of collaboration that would be useful." ctaTitle="Explore a partnership." ctaCopy="Let’s discuss where our work and your expertise could complement each other." />;
}
