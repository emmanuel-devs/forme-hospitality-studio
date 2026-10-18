import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found | FORME" };
  return {
    title: `${project.title} | FORME Hospitality Studio`,
    description: project.intro,
    openGraph: { title: `${project.title} | FORME Hospitality Studio`, description: project.intro, images: [project.image] }
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="project-detail-page">
      <section className="detail-hero">
        <Image src={project.image} alt={project.alt} fill priority sizes="100vw" className="cover-image detail-hero-image" />
        <div className="detail-hero-shade" />
        <SiteHeader />
        <div className="container detail-hero-content">
          <Link href="/work" className="detail-back-link"><ArrowLeft size={15} /> Back to selected work</Link>
          <p className="eyebrow detail-eyebrow"><span className="eyebrow-line" /> {project.status}</p>
          <h1>{project.title.split(" ").slice(0, -1).join(" ")} <em>{project.title.split(" ").slice(-1)}</em></h1>
          <p className="detail-hero-intro">{project.intro}</p>
        </div>
        <div className="detail-hero-caption"><span>{project.category}</span><span>Portfolio concept · {project.year}</span></div>
      </section>

      <section className="detail-overview section-pad">
        <div className="container detail-overview-grid">
          <div><p className="eyebrow section-kicker">Project overview</p><h2>Designed around<br /><em>the experience.</em></h2></div>
          <div className="detail-overview-copy"><p>{project.intro}</p><div className="detail-facts"><div><span>Project type</span><strong>{project.type}</strong></div><div><span>Context</span><strong>{project.location}</strong></div><div><span>Scope explored</span><strong>{project.scope}</strong></div><div><span>Project status</span><strong>{project.status}</strong></div></div></div>
        </div>
      </section>

      <section className="detail-feature-image">
        <Image src={project.gallery[0].image} alt={project.gallery[0].alt} fill sizes="100vw" className="cover-image" />
        <span>{project.gallery[0].caption}</span>
      </section>

      <section className="detail-story section-pad">
        <div className="container detail-story-grid">
          <div><p className="eyebrow section-kicker">01 / The brief</p><h2>Start with<br /><em>the right question.</em></h2></div>
          <div><p className="detail-story-label">The design challenge</p><p className="detail-story-body">{project.challenge}</p><div className="detail-story-rule" /><p className="detail-story-label">The creative direction</p><p className="detail-story-body">{project.direction}</p></div>
        </div>
      </section>

      <section className="detail-principles section-pad">
        <div className="container"><div className="section-heading"><div><p className="eyebrow section-kicker">02 / Design considerations</p><h2>Intentional choices.<br /><em>Meaningful details.</em></h2></div><p className="section-heading-note">Each decision supports the character of the space and the way a guest might use it.</p></div>
          <div className="detail-principle-grid">{project.details.map((detail, index) => <article className="detail-principle" key={detail.title}><span>0{index + 1}</span><h3>{detail.title}</h3><p>{detail.description}</p></article>)}</div>
        </div>
      </section>

      <section className="detail-gallery-section section-pad">
        <div className="container"><div className="section-heading"><div><p className="eyebrow section-kicker">03 / Visual exploration</p><h2>A closer look<br /><em>at the details.</em></h2></div><p className="section-heading-note">Concept imagery used to communicate the intended atmosphere, material language, and spatial character.</p></div>
          <div className="detail-gallery">{project.gallery.slice(1).map((image, index) => <figure key={image.image}><div className="detail-gallery-image"><Image src={image.image} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" /></div><figcaption><span>{image.caption}</span><span>Concept visualization</span></figcaption></figure>)}</div>
          <p className="detail-disclaimer"><span><Check size={14} /></span> This is a self-initiated portfolio concept. Images are illustrative references and do not document a commissioned or completed installation.</p>
        </div>
      </section>

      <section className="detail-next">
        <div className="container detail-next-inner"><div><p className="eyebrow section-kicker">Continue exploring</p><h2>Next up: <em>{nextProject.title}</em></h2></div><Link href={`/work/${nextProject.slug}`} className="button button-dark">View next concept <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="detail-cta"><div className="container detail-cta-inner"><p className="eyebrow detail-eyebrow"><span className="eyebrow-line" /> Have a space in mind?</p><h2>Let’s shape something<br /><em>considered.</em></h2><p>Tell us about your property, your goals, and the experience you want people to remember.</p><Link href="/quote" className="button button-light">Discuss your project <ArrowRight size={16} /></Link></div></section>

      <footer className="site-footer"><div className="container footer-top"><Link href="/" className="wordmark footer-wordmark"><span className="wordmark-main">FORME</span><span className="wordmark-sub">HOSPITALITY STUDIO</span></Link><p>Spaces designed to make people feel something.</p><Link href="/#top" className="back-top">Back to top ↑</Link></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} FORME Hospitality Studio</span><span>Independent portfolio concept · Not a real client studio</span><span>Interiors · Experiences · Partnerships</span></div></footer>
    </main>
  );
}
