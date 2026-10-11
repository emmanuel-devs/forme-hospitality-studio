import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card ${index === 0 ? "project-card-featured" : ""}`}>
      <div className="project-image-wrap">
        <Image src={project.image} alt={project.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 62vw" : "(max-width: 760px) 100vw, 38vw"} className="project-image" />
        <span className="status-label"><span className="status-dot" />{project.status}</span>
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-meta">
        <div>
          <p className="eyebrow project-category">{project.category} <span>·</span> {project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
      </div>
    </article>
  );
}
