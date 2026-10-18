import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Get a Quote | FORME Hospitality Studio",
  description: "Tell FORME about your hospitality property, interior design goals, budget, and timeline to begin a considered project conversation."
};

export default function QuotePage() {
  return <main className="quote-page">
    <SiteHeader />
    <section className="quote-intro">
      <div className="container">
        <Link href="/#top" className="portfolio-back"><ArrowLeft size={14} /> Back to studio</Link>
        <p className="eyebrow section-kicker">Get a quote / Start a conversation</p>
        <h1>Tell us about<br /><em>the opportunity.</em></h1>
        <div className="quote-intro-bottom"><p>A few thoughtful details help us understand the property, what you want to achieve, and whether the project may be a good fit.</p><span>INTERIORS · EXPERIENCES · TRADE</span></div>
      </div>
    </section>
    <section className="quote-form-section section-pad">
      <div className="container quote-form-grid">
        <aside className="quote-aside">
          <p className="eyebrow section-kicker">A useful starting point</p>
          <h2>Clarity before<br /><em>the first decision.</em></h2>
          <p>Share the property type, location, budget range, and timing. If you are still exploring, that is useful context too.</p>
          <div className="quote-aside-note"><span className="inquiry-aside-line" /><p>For hospitality properties, considered interiors, bespoke environments, and professional collaborations.</p></div>
        </aside>
        <div className="form-panel"><InquiryForm /></div>
      </div>
    </section>
    <section className="quote-next"><div className="container quote-next-inner"><div><p className="eyebrow detail-eyebrow"><span className="eyebrow-line" /> Still exploring?</p><h2>See what’s possible.</h2></div><Link href="/work" className="button button-light">Explore selected work <ArrowUpRight size={16} /></Link></div></section>
    <footer className="site-footer"><div className="container footer-top"><Link href="/#top" className="wordmark footer-wordmark"><span className="wordmark-main">FORME</span><span className="wordmark-sub">HOSPITALITY STUDIO</span></Link><p>Spaces designed to make people feel something.</p><Link href="/#top" className="back-top">Back to studio ↑</Link></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FORME Hospitality Studio</span><span>Independent portfolio concept · Not a real client studio</span><span>Interiors · Experiences · Partnerships</span></div></footer>
  </main>;
}
