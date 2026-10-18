import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Our Process | FORME Hospitality Studio",
  description: "A considered process for hospitality interiors and bespoke experiences, from first conversation and creative direction through project coordination."
};

const cards = [
  { title: "01. Understand the opportunity", eyebrow: "DISCOVERY", description: "We begin with the property, the audience, the operational realities, and the ambition behind the project. Clear questions help define what success should feel and function like.", href: "/#inquiry", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" },
  { title: "02. Shape the direction", eyebrow: "CREATIVE", description: "A coherent design direction brings mood, materials, furnishings, and defining details into one considered vision before individual choices begin to compete.", href: "/work", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85" },
  { title: "03. Coordinate the details", eyebrow: "DELIVERY", description: "Scope, selections, practical requirements, and next steps are clarified with the right project stakeholders. Fabrication, procurement, and installation responsibilities are agreed project by project.", href: "/#inquiry", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" }
];

export default function ProcessPage() {
  return <EditorialPage eyebrow="Our process / From brief to experience" title="Good spaces begin" italicTitle="with good questions." intro="A thoughtful process creates room for ambitious ideas while keeping the property, the people using it, and the realities of delivery in view." image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85" imageAlt="Carefully composed contemporary hospitality interior with natural light" imageLabel="OUR APPROACH" sectionTitle="Creative ambition, grounded in the real world." sectionCopy="Every project has its own constraints and opportunities. We bring the creative direction and practical questions into the same conversation early, so the final environment feels cohesive rather than assembled from disconnected decisions." cards={cards} processTitle="A clear brief makes better design possible." processCopy="Tell us about the property, the people it serves, and what you want the space to achieve. We can then discuss fit, scope, and the appropriate next steps." ctaTitle="Start with the opportunity." ctaCopy="Share a little about your property and the experience you want to create." />;
}
