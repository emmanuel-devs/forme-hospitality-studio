import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Trade Partnerships | FORME Hospitality Studio",
  description: "Collaborative hospitality interior design and furnishing support for interior designers, architects, and project teams."
};

const cards = [
  { title: "Interior designers", eyebrow: "DESIGN COLLABORATION", description: "A considered furnishing and styling partner to help carry a strong creative direction through the details that make a space feel complete.", href: "/partners", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" },
  { title: "Architects & developers", eyebrow: "PROJECT ALIGNMENT", description: "Work alongside a team that understands the importance of design intent, coordination, material choices, and the wider property experience.", href: "/partners", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" },
  { title: "Hospitality operators", eyebrow: "PROPERTY EXPERIENCE", description: "Explore furnishing and interior directions that connect the brand promise with how guests, residents, and teams actually use a space.", href: "/#inquiry", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85" }
];

export default function TradePage() {
  return <EditorialPage eyebrow="Trade / Collaboration for professionals" title="Better spaces," italicTitle="built together." intro="A collaborative design partner for professionals shaping considered hospitality, residential, and experience-led environments." image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85" imageAlt="Premium interior with warm natural materials and tailored furnishings" imageLabel="TRADE & COLLABORATION" sectionTitle="A good partner strengthens the whole vision." sectionCopy="We work with designers, architects, developers, and property teams to support the furnishing, styling, and distinctive details that bring an environment together. Roles, deliverables, procurement, and project responsibilities are agreed clearly before work begins." cards={cards} processTitle="Respect for the vision. Attention to the details." processCopy="Share your project stage, scope, and team structure. We can discuss where FORME may add value and how collaboration could work." ctaTitle="Let’s talk about working together." ctaCopy="Introduce your team and tell us where you need a thoughtful design partner." />;
}
