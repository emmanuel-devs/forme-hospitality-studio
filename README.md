# FORME Hospitality Studio — Portfolio Concept

A self-initiated hospitality interiors website concept built with Next.js App Router, React, Tailwind CSS v4, TypeScript, Framer Motion, and Lucide React.

> This is a fictional studio and an independent portfolio concept. It is not commissioned work for the Upwork client. The sample projects are visual concepts and are explicitly labelled as such.

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

## Notes before production

- The inquiry form is a front-end demonstration only. It validates required fields locally but does not transmit or store submissions. Connect a server action/API route and an email or CRM provider before using it for real leads.
- Project content currently lives in lib/projects.ts. It is structured for later migration to a headless CMS.
- Remote sample images are sourced from Unsplash URLs. Replace them with licensed, project-appropriate imagery before commercial use, and verify image rights and final alt text.
- The mobile navigation, reduced-motion behavior, focus states, and responsive layouts are included.
- The current first release implements the homepage. The complete 13–15-page brief, CMS editing, gallery filtering, blog, CRM connection, and multilingual content are future phases, not yet implemented.
