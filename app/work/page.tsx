import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Selected Work | FORME Hospitality Studio",
  description: "Explore hospitality interiors, furnishing concepts, and bespoke environments by FORME Hospitality Studio."
};

export default function WorkPage() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <section className="portfolio-intro">
        <div className="container portfolio-intro-inner">
          <Link href="/#top" className="portfolio-back"><ArrowLeft size={14} /> Back to studio</Link>
          <p className="eyebrow section-kicker">The portfolio / 2026</p>
          <h1>Spaces with<br /><em>a point of view.</em></h1>
          <div className="portfolio-intro-bottom">
            <p>A considered collection of hospitality interiors, furnishing directions, and immersive space concepts. Explore the thinking behind each environment.</p>
            <span>Interiors · Experiences · Hospitality</span>
          </div>
        </div>
      </section>
      <section className="portfolio-listing section-pad" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="portfolio-listing-heading">
            <div><p className="eyebrow section-kicker">Explore the collection</p><h2 id="portfolio-heading">Selected work<span> (03)</span></h2></div>
            <p>Use the collection filters to explore by space or project status.</p>
          </div>
          <ProjectGallery />
          <p className="portfolio-concept-note">Portfolio transparency: projects marked “Concept Visualization” are self-initiated explorations, not commissioned or completed installations.</p>
        </div>
      </section>
      <section className="portfolio-cta">
        <div className="container portfolio-cta-inner"><p className="eyebrow detail-eyebrow"><span className="eyebrow-line" /> Have a project in mind?</p><h2>Let’s give it<br /><em>a point of view.</em></h2><Link href="/#inquiry" className="button button-light">Discuss your project <ArrowUpRight size={16} /></Link></div>
      </section>
      <footer className="site-footer"><div className="container footer-top"><Link href="/#top" className="wordmark footer-wordmark"><span className="wordmark-main">FORME</span><span className="wordmark-sub">HOSPITALITY STUDIO</span></Link><p>Spaces designed to make people feel something.</p><Link href="/#top" className="back-top">Back to studio ↑</Link></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FORME Hospitality Studio</span><span>Independent portfolio concept · Not a real client studio</span><span>Interiors · Experiences · Partnerships</span></div></footer>
    </main>
  );
}
