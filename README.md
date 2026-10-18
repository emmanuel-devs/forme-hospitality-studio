# FORME Hospitality Studio | Portfolio Concept

A self-initiated hospitality interiors website concept built with Next.js App Router, React, Tailwind CSS v4, TypeScript, Framer Motion, and Lucide React.

> This is a fictional studio and an independent portfolio concept, not commissioned work for the Upwork client. Sample projects are concept visualizations and are explicitly labelled as such.

## Implemented

- Editorial homepage with responsive navigation, curated project preview, service entry points, studio approach, and inquiry section
- Dedicated `/interiors` and `/experiences` service hubs with all seven requested service sub-pages
- Dedicated `/process`, `/trade`, `/partners`, and `/about` pages
- Dedicated `/quote` inquiry page using the validated multi-field inquiry form
- Dedicated `/work` portfolio page with category and project-status filters
- Individual project case-study routes for The Guest Suite, The Retreat, and The Experience Room
- Project overview, design challenge, creative direction, design considerations, gallery captions, and related-project navigation
- Project cards linked to their detail pages
- Interactive category and project-status filters, result counts, clear-filter controls, and empty-state messaging
- Custom client-side inquiry validation with inline errors and accessible focus handling
- Responsive layouts, reduced-motion support, and keyboard focus states
- Page-specific metadata for service hubs, service sub-pages, studio pages, quote page, and project detail pages

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

### Vercel
1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.

### Netlify
1. Push this project to a Git repository.
2. Import it in Netlify and select the Next.js framework preset.
3. Use the default Next.js adapter/build configuration offered by Netlify.

## Remaining scope and production notes

- The inquiry form is a front-end demonstration only. It validates required fields locally but does not transmit or store submissions. Connect a server action/API route and an email or CRM provider before using it for real leads.
- Project content currently lives in `lib/projects.ts`. It is structured for later migration to a headless CMS.
- Gallery filtering still needs a dedicated room-type filter and a final audit of property-type/status tags against the full brief.
- Blog publishing and authorized CMS editing remain outstanding. Project content is currently maintained in code.
- The inquiry form is still demo-only and needs secure email delivery plus a CRM-ready Zapier/Make integration.
- The Chinese-language version is not built at launch, but route and content architecture should be audited before claiming localization readiness.
- Remote sample images use Unsplash URLs. Replace them with licensed, project-appropriate imagery before commercial use, and verify image rights and final alt text.
- The case-study narratives describe design intent for fictional concepts. They do not claim that a project was commissioned, installed, or completed.
