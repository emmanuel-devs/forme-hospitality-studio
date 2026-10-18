import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";

export const metadata: Metadata = { title: "Hospitality Interiors & Furnishing | FORME", description: "Considered hospitality interiors, furnishings, and room styling for vacation rentals, hotels, multifamily properties, and luxury residences." };

const img = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85";
const cards = [
 {title:"Vacation Rentals",description:"Distinctive, guest-minded spaces designed to make a strong first impression and a lasting stay.",href:"/interiors/vacation-rentals",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",eyebrow:"STAYS"},
 {title:"Hotels & Boutique Properties",description:"A cohesive design language that brings character, comfort, and operational needs into balance.",href:"/interiors/hotels-boutique",image:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",eyebrow:"HOSPITALITY"},
 {title:"Multifamily & Student Housing",description:"Welcoming shared spaces and considered interiors shaped around everyday use and community.",href:"/interiors/multifamily-student-housing",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",eyebrow:"RESIDENTIAL"},
 {title:"Luxury Residential",description:"Personal, elevated interiors with a hospitality sensibility and a clear point of view.",href:"/interiors/luxury-residential",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",eyebrow:"PRIVATE"},
];
export default function InteriorsPage(){return <EditorialPage eyebrow="Interiors / Furnishing" title="Interiors that feel" italicTitle="considered." intro="Hospitality-minded interiors and furnishing that bring a property’s purpose, personality, and guest experience into alignment." image={img} imageAlt="Layered contemporary interior with natural textures and warm neutral furnishings" sectionTitle="A room has to do more than look right." sectionCopy="The most effective interiors balance visual character with how people move, rest, gather, and return. We consider furnishing, soft goods, materiality, lighting, and styling as parts of one coherent experience." cards={cards} ctaTitle="Let’s shape the right first impression." />;}
