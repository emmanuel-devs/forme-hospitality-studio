import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal } from "@/components/Reveal";

type EditorialLink = { title: string; description: string; href: string; image: string; eyebrow?: string };
type EditorialPageProps = {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageLabel?: string;
  sectionTitle: string;
  sectionCopy: string;
  cards?: EditorialLink[];
  processTitle?: string;
  processCopy?: string;
  ctaTitle?: string;
  ctaCopy?: string;
};

export function EditorialPage({ eyebrow, title, italicTitle, intro, image, imageAlt, imageLabel, sectionTitle, sectionCopy, cards = [], processTitle = "Designed with intention. Delivered with care.", processCopy = "A considered process brings the right questions, creative direction, and practical decisions together from the first conversation.", ctaTitle = "Have a space in mind?", ctaCopy = "Tell us about the property, the opportunity, and what you want people to experience." }: EditorialPageProps) {
  return <main className="editorial-page">
    <SiteHeader />
    <section className="editorial-hero">
      <div className="editorial-hero-image"><Image src={image} alt={imageAlt} fill priority sizes="100vw" className="cover-image" /></div>
      <div className="editorial-hero-shade" />
      <div className="container editorial-hero-content">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> {eyebrow}</p>
        <h1>{title}{italicTitle && <><br /><em>{italicTitle}</em></>}</h1>
        <p className="editorial-hero-intro">{intro}</p>
        <Link href="/quote" className="button button-light">Discuss your project <ArrowUpRight size={16} /></Link>
      </div>
      <span className="editorial-hero-label">{imageLabel ?? "FORME / Studio perspective"}</span>
    </section>
    <section className="editorial-statement section-pad">
      <div className="container editorial-statement-grid">
        <p className="eyebrow section-kicker">The point of view</p>
        <div><h2>{sectionTitle}</h2><p>{sectionCopy}</p></div>
      </div>
    </section>
    {cards.length > 0 && <section className="editorial-cards section-pad">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow section-kicker">Explore the work</p><h2>Considered for<br /><em>different possibilities.</em></h2></div><p className="section-heading-note">Each property and brief calls for its own balance of character, comfort, function, and distinction.</p></div>
        <div className="editorial-card-grid">{cards.map((card, index) => <Reveal key={card.title} delay={index * 0.06} className="editorial-card">
          <Link href={card.href} className="editorial-card-image"><Image src={card.image} alt={card.title + " interior design direction"} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" /><span className="editorial-card-index">0{index + 1} / {card.eyebrow ?? "DESIGN"}</span><span className="round-arrow"><ArrowUpRight size={20} /></span></Link>
          <div className="editorial-card-copy"><h3>{card.title}</h3><p>{card.description}</p><Link href={card.href} className="text-link">Explore this service <ArrowRight size={15} /></Link></div>
        </Reveal>)}</div>
      </div>
    </section>}
    <section className="editorial-process">
      <div className="container editorial-process-grid"><p className="eyebrow detail-eyebrow"><span className="eyebrow-line" /> How we work</p><div><h2>{processTitle}</h2><p>{processCopy}</p><Link href="/process" className="text-link">Discover our process <ArrowRight size={15} /></Link></div></div>
    </section>
    <section className="editorial-cta"><div className="container editorial-cta-inner"><p className="eyebrow detail-eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>{ctaTitle}</h2><p>{ctaCopy}</p><Link href="/quote" className="button button-light">Tell us about your project <ArrowUpRight size={16} /></Link></div></section>
    <footer className="site-footer"><div className="container footer-top"><Link href="/" className="wordmark footer-wordmark"><span className="wordmark-main">FORME</span><span className="wordmark-sub">HOSPITALITY STUDIO</span></Link><p>Spaces designed to make people feel something.</p><Link href="/#top" className="back-top">Back to studio ↑</Link></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FORME Hospitality Studio</span><span>Independent portfolio concept · Not a real client studio</span><span>Interiors · Experiences · Partnerships</span></div></footer>
  </main>;
}
