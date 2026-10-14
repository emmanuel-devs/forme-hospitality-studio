import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectGallery } from "@/components/ProjectGallery";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";


const images = {
  hero: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=90",
  interiors: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  experiences: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  hotel: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
  rental: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  multifamily: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  trade: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
};

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-image"><Image src={images.hero} alt="Refined hospitality interior with natural materials, sculptural furnishings, and warm daylight" fill priority sizes="100vw" className="cover-image" /></div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <Reveal><p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Hospitality interiors & bespoke experiences</p></Reveal>
          <Reveal delay={0.08}><h1 id="hero-heading">Spaces designed<br />to make people <em>feel</em><br />something.</h1></Reveal>
          <Reveal delay={0.16}><div className="hero-bottom"><p>Thoughtful interiors, considered furnishing, and distinctive environments for hospitality properties and the people who experience them.</p><div className="hero-actions"><Link href="#inquiry" className="button button-light">Discuss your project <ArrowUpRight size={16} /></Link><Link href="#work" className="hero-secondary-link">Explore our work <ArrowDown size={15} /></Link></div></div></Reveal>
        </div>
        <div className="hero-caption"><span>Considered by design.</span><span>Made for experience.</span></div>
      </section>

      <section className="intro section-pad" aria-labelledby="intro-heading">
        <div className="container intro-grid">
          <Reveal><p className="eyebrow section-kicker">A considered approach</p></Reveal>
          <Reveal delay={0.08}><div className="intro-copy"><h2 id="intro-heading">More than a beautiful room.<br /><em>A feeling that stays.</em></h2><p>We bring interiors, furnishings, and distinctive design details together to shape spaces with a clear point of view. From hospitality properties to immersive, one-of-a-kind rooms, every decision begins with how a space should work and how it should make people feel.</p><Link href="#approach" className="text-link">Get to know our approach <ArrowRight size={15} /></Link></div></Reveal>
        </div>
      </section>

      <section className="services-section section-pad" aria-label="Our services">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow section-kicker">What we do</p><h2>Two disciplines.<br /><em>One considered vision.</em></h2></div><p className="section-heading-note">From the essential details to the unforgettable moment, we create cohesive environments with purpose.</p></div>
          <div className="service-grid">
            <Reveal className="service-card"><Link href="#interiors" className="service-image-link" aria-label="Explore interiors"><Image src={images.interiors} alt="Serene interior with natural materials and considered contemporary furnishings" fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image service-image" /><span className="image-number">01 / INTERIORS</span><span className="round-arrow"><ArrowUpRight size={20} /></span></Link><div className="service-card-copy"><div><h3>Interiors & furnishing</h3><p>Thoughtful, hospitality-minded spaces that balance character, comfort, and the practical needs of a property.</p></div><Link href="#interiors" className="text-link" aria-label="Explore interiors">Explore interiors <ArrowRight size={15} /></Link></div></Reveal>
            <Reveal delay={0.1} className="service-card"><Link href="#experiences" className="service-image-link" aria-label="Explore bespoke experiences"><Image src={images.experiences} alt="Expressive contemporary interior with sculptural furniture and layered natural light" fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image service-image" /><span className="image-number">02 / EXPERIENCES</span><span className="round-arrow"><ArrowUpRight size={20} /></span></Link><div className="service-card-copy"><div><h3>Bespoke experiences</h3><p>Distinctive themed bedrooms, entertainment spaces, and custom details designed to be remembered.</p></div><Link href="#experiences" className="text-link">Explore experiences <ArrowRight size={15} /></Link></div></Reveal>
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-pad" aria-labelledby="work-heading">
        <div className="container"><div className="section-heading work-heading"><div><p className="eyebrow section-kicker">Selected concepts</p><h2 id="work-heading">A closer look<br /><em>at the possibilities.</em></h2></div><p className="section-heading-note">A selection of visual explorations across hospitality, residential, and immersive spaces. Each concept is clearly identified as a visualization.</p></div>
          <ProjectGallery />
          <div className="work-footnote"><span className="footnote-mark">i</span><p>These are self-initiated portfolio concepts, not commissioned client projects. All examples are labelled as concept visualizations.</p></div>
        </div>
      </section>

      <section id="interiors" className="audience-section section-pad" aria-labelledby="audience-heading">
        <div className="container"><div className="section-heading"><div><p className="eyebrow section-kicker">Designed around your property</p><h2 id="audience-heading">Different spaces.<br /><em>Different considerations.</em></h2></div><p className="section-heading-note">A thoughtful approach starts with understanding the people, purpose, and practical requirements behind every property.</p></div>
          <div className="audience-list">
            <Link href="#inquiry" className="audience-row"><div className="audience-image"><Image src={images.hotel} alt="Boutique hotel guestroom with layered bedding and warm architectural details" fill sizes="160px" className="cover-image" /></div><span className="audience-number">01</span><div className="audience-copy"><h3>Hotels & boutique properties</h3><p>Guestrooms, shared spaces, furnishings, and a consistent property-wide design language.</p></div><span className="audience-arrow"><ArrowUpRight size={20} /></span></Link>
            <Link href="#inquiry" className="audience-row"><div className="audience-image"><Image src={images.rental} alt="Inviting vacation rental living area with warm natural materials" fill sizes="160px" className="cover-image" /></div><span className="audience-number">02</span><div className="audience-copy"><h3>Vacation rentals</h3><p>Cohesive interiors and considered details tailored to a distinctive guest experience.</p></div><span className="audience-arrow"><ArrowUpRight size={20} /></span></Link>
            <Link href="#inquiry" className="audience-row"><div className="audience-image"><Image src={images.multifamily} alt="Contemporary residential interior with sculptural furniture and clean architectural lines" fill sizes="160px" className="cover-image" /></div><span className="audience-number">03</span><div className="audience-copy"><h3>Multifamily & residential</h3><p>Furnishing and design choices shaped around the needs of each space and its users.</p></div><span className="audience-arrow"><ArrowUpRight size={20} /></span></Link>
          </div>
        </div>
      </section>

      <section id="experiences" className="statement-section" aria-labelledby="statement-heading"><div className="statement-image"><Image src={images.experiences} alt="Architectural interior with tactile materials and distinctive furniture" fill sizes="100vw" className="cover-image" /></div><div className="statement-shade"/><div className="container statement-content"><Reveal><p className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> Beyond the expected</p><h2 id="statement-heading">Some spaces are<br />made to be <em>remembered.</em></h2><p>For the rooms that call for something more, we explore character, atmosphere, and bespoke details to create an experience with its own point of view.</p><Link href="#inquiry" className="button button-light">Explore a bespoke project <ArrowUpRight size={16} /></Link></Reveal></div></section>

      <section id="approach" className="process-section section-pad" aria-labelledby="process-heading"><div className="container process-grid"><div className="process-intro"><p className="eyebrow section-kicker">Our approach</p><h2 id="process-heading">Clear thinking.<br /><em>Considered delivery.</em></h2><p>Good design begins with the right questions. Our process is structured to bring clarity to the brief, align decisions, and keep the project moving with purpose.</p><Link href="#inquiry" className="text-link">Start a conversation <ArrowRight size={15}/></Link></div><div className="process-steps">{[{n:"01",title:"Discover",desc:"Understand the property, the objectives, the scope, and the constraints."},{n:"02",title:"Define",desc:"Establish the creative direction, priorities, and project proposal."},{n:"03",title:"Coordinate",desc:"Bring the design details, furnishings, and agreed requirements together."},{n:"04",title:"Deliver",desc:"Move through the agreed implementation and handover process."}].map((step)=><div className="process-step" key={step.n}><span className="process-number">{step.n}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div><MoveUpRight size={17} strokeWidth={1.3} className="process-icon"/></div>)}</div></div></section>

      <section className="trade-section" aria-labelledby="trade-heading"><div className="trade-image"><Image src={images.trade} alt="Natural materials and furnishings in a refined interior design setting" fill sizes="50vw" className="cover-image"/></div><div className="trade-copy"><p className="eyebrow section-kicker">For the people who build spaces</p><h2 id="trade-heading">Better spaces<br />are built <em>together.</em></h2><p>We welcome conversations with designers, architects, developers, realtors, and property managers looking for a thoughtful design and furnishing partner.</p><Link href="#inquiry" className="text-link">Explore a partnership <ArrowRight size={15}/></Link></div></section>

      <section id="inquiry" className="inquiry-section section-pad" aria-labelledby="inquiry-heading"><div className="container inquiry-grid"><div className="inquiry-intro"><p className="eyebrow section-kicker">A conversation starts here</p><h2 id="inquiry-heading">Tell us about the space you're <em>imagining.</em></h2><p>Share a few details about your property, your goals, and your timeline. The more we understand, the better we can begin the conversation.</p><div className="inquiry-aside"><span className="inquiry-aside-line"/><p>For hospitality properties, considered interiors, and bespoke experiences.</p></div></div><div className="form-panel"><InquiryForm /></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><Link href="#top" className="wordmark footer-wordmark"><span className="wordmark-main">FORME</span><span className="wordmark-sub">HOSPITALITY STUDIO</span></Link><p>Spaces designed to make people feel something.</p><Link href="#top" className="back-top">Back to top ↑</Link></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FORME Hospitality Studio</span><span>Independent portfolio concept · Not a real client studio</span><span>Interiors · Experiences · Partnerships</span></div></footer>
    </main>
  );
}
