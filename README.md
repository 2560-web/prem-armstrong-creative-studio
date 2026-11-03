# Prem Armstrong D — Creative Front-end Portfolio

A real **Next.js App Router + React + TypeScript** source project with an interactive room estimator and **Sanity headless CMS integration**, plus preserved original standalone demos. Created as a self-directed portfolio concept, **not client work**.

## Run locally

1. Install Node.js 20+.
2. Run `npm install` in this folder.
3. Run `npm run dev` and open `http://localhost:3000`.
4. Test `/`, `/case-study`, and `/studio`.

## Connect an actual Sanity project (needed for live CMS editing)

1. Create a Sanity project at https://www.sanity.io/manage (a free tier may be available; check current terms).
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID` to the actual project ID and `NEXT_PUBLIC_SANITY_DATASET=production`.
3. In Sanity project API settings, grant the origin where this portfolio is hosted as a CORS origin if Studio editing needs it. Add `http://localhost:3000` for local Studio.
4. Run `npm run dev` and open `/studio`. Create and **publish** three `Hotel Room` documents. Enter name, category, description, rate in GBP, capacity, features, accent, availability note and sort order.
5. The site will fetch published room documents with GROQ when configured. Otherwise it visibly labels its seed data as **sample content / CMS not connected**. No private credentials are required to read public content; use a public dataset for this demonstration. Configure secure read access before using a private dataset.
6. Test by editing a published rate in Studio and refreshing the homepage. Only then describe CMS editing as verified live.

## Hosting

Deploy the **repository**, not the ZIP as a static drag-and-drop folder, to a Next.js-compatible host (e.g. Vercel or a configured Netlify Next.js build). Set the same environment variables in the hosting service. Do **not** drag the Next.js source into the old static site's Netlify Deploys tab. Keep the existing portfolio live until the new deployment passes all checks.

## Build verification

Run `npm run build` (requires installed dependencies). `npm run dev` should be tested on desktop and mobile. Verify `/studio`, CMS edits, room capacity/date logic, all links, keyboard navigation, contrast and performance. External Google Fonts are optional and require connectivity.

## Important disclosure

- All showcased projects are self-directed demonstrations.
- Hotel rooms and rates are fictional, not real inventory. Estimator does **not** check real availability, reserve rooms, or process payments.
- This project demonstrates a Next.js/React implementation and a Sanity schema/client **in source**. It does not establish years of commercial Next.js or headless CMS experience.
- No screenshots or videos are included as 'proof' until the app is built and filmed in a real browser.
- Contact link opens the visitor's email client; it does not silently send a form.
