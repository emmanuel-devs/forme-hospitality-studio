import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "About the Studio | FORME Hospitality Studio",
  description: "Discover FORME's considered approach to hospitality interiors, furnishing, and distinctive immersive environments."
};

const cards = [
  { title: "Interiors & furnishing", eyebrow: "01 / INTERIORS", description: "Material, furnishing, soft goods, and styling considered together to create a coherent and purposeful environment.", href: "/interiors", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" },
  { title: "Bespoke experiences", eyebrow: "02 / EXPERIENCES", description: "Themed rooms, entertainment spaces, and sculptural details that give a property a more distinctive point of view.", href: "/experiences", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" }
];

export default function AboutPage() {
  return <EditorialPage eyebrow="About / A considered point of view" title="Design with purpose." italicTitle="Feeling with intention." intro="FORME is a hospitality design studio concept built around a simple idea: the spaces people remember are the ones where every detail belongs." image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85" imageAlt="Calm, elevated interior with natural textures and warm daylight" imageLabel="THE STUDIO POINT OF VIEW" sectionTitle="Not decoration for decoration’s sake." sectionCopy="We approach a space as a complete experience. How it looks matters. So do comfort, movement, durability, atmosphere, and the purpose the property needs to serve. The work brings those considerations into one clear design direction, whether the brief calls for thoughtful furnishing or an immersive feature that becomes part of the story." cards={cards} processTitle="A point of view should serve the property." processCopy="The creative direction begins with understanding the people, purpose, and practical needs behind a space. From there, choices can feel expressive without becoming disconnected from the brief." ctaTitle="Tell us what you’re imagining." ctaCopy="Share the property, the ambition, and the experience you want to create." />;
}
