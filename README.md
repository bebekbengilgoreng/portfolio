# Michiel Aelis Wijaya — Portfolio

An editorial portfolio for a medical student working across software engineering, research, digital systems, and international organizations.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Lucide icons
- ReactBits-inspired Spotlight Card interaction

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment so canonical Open Graph and sitemap URLs resolve correctly.

## Content

All displayed portfolio content is maintained in `data/portfolio.ts`. The downloadable CV is `public/michiel-aelis-wijaya-cv.pdf`.

## Production checks

```bash
npm run lint
npm run build
```
