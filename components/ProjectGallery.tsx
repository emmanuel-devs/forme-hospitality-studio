"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects, type ProjectStatus } from "@/lib/projects";

const categories = ["All work", ...Array.from(new Set(projects.map((project) => project.category)))];
const statuses = ["All statuses", "Concept Visualization", "Completed Installation"] as const;
const roomTypes = ["All room types", ...Array.from(new Set(projects.map((project) => project.type)))];

export function ProjectGallery() {
  const [category, setCategory] = useState("All work");
  const [status, setStatus] = useState<(typeof statuses)[number]>("All statuses");
  const [roomType, setRoomType] = useState("All room types");

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === "All work" || project.category === category;
    const matchesStatus = status === "All statuses" || project.status === (status as ProjectStatus);
    const matchesRoomType = roomType === "All room types" || project.type === roomType;
    return matchesCategory && matchesStatus && matchesRoomType;
  }), [category, status, roomType]);

  const clearFilters = () => {
    setCategory("All work");
    setStatus("All statuses");
    setRoomType("All room types");
  };

  return (
    <div className="project-gallery">
      <div className="gallery-filter-panel" aria-label="Filter portfolio projects">
        <div className="gallery-filter-group">
          <span className="gallery-filter-label">Explore by property or project type</span>
          <div className="gallery-filter-options" role="group" aria-label="Filter by property type">
            {categories.map((item) => <button key={item} type="button" className={`gallery-filter-chip ${category === item ? "is-active" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
        </div>
        <div className="gallery-secondary-filters">
          <div className="gallery-status-row">
            <label className="gallery-filter-label" htmlFor="gallery-room-type">Room type</label>
            <select id="gallery-room-type" value={roomType} onChange={(event) => setRoomType(event.target.value)}>
              {roomTypes.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div className="gallery-status-row">
            <label className="gallery-filter-label" htmlFor="gallery-status"><SlidersHorizontal size={13} /> Project status</label>
            <select id="gallery-status" value={status} onChange={(event) => setStatus(event.target.value as (typeof statuses)[number])}>
              {statuses.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="gallery-results-line" aria-live="polite">
        <span>{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</span>
        <span>{category === "All work" ? "All categories" : category}{roomType !== "All room types" ? ` · ${roomType}` : ""}{status !== "All statuses" ? ` · ${status}` : ""}</span>
        {(category !== "All work" || roomType !== "All room types" || status !== "All statuses") && <button type="button" onClick={clearFilters}>Clear filters ×</button>}
      </div>
      {filteredProjects.length > 0 ? <div className="project-grid">{filteredProjects.map((project, index) => <Reveal key={project.slug} delay={index * 0.06}><ProjectCard project={project} index={index} /></Reveal>)}</div> : <div className="gallery-empty"><p>No projects match these filters yet.</p><button type="button" onClick={clearFilters}>Show all projects</button></div>}
    </div>
  );
}
