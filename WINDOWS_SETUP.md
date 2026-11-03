# Windows setup — complete sequence

## 1. Install tools
- Install **Node.js LTS (22.12 or newer)** from https://nodejs.org/
- Install **Git for Windows** from https://git-scm.com/downloads/win
- Optional: install Visual Studio Code from https://code.visualstudio.com/
- Close and reopen PowerShell after installing.
- Run `node -v`, `npm -v`, `git --version` and confirm they work.

## 2. Run the app
- Extract this ZIP to a normal folder, e.g. `C:\Users\YOURNAME\Documents\Prem_Armstrong_Studio_Next`.
- Open that folder in VS Code, then Terminal > New Terminal. Your terminal must be in the folder containing `package.json`.
- Run `npm install` (requires internet).
- Copy `.env.example` to `.env.local`: in **PowerShell** use `Copy-Item .env.example .env.local`.
- Run `npm run dev` and open http://localhost:3000.
- Visit `/case-study` and `/studio` too (Studio needs the Sanity ID to function).

## 3. Create Sanity content project
- At https://www.sanity.io/manage create a project and a public dataset named `production`.
- Copy the Sanity project ID (not the project name) into `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID`.
- Verify `NEXT_PUBLIC_SANITY_DATASET=production`.
- Sanity Manage > project > API > CORS origins: add `http://localhost:3000` with credentials allowed for Studio editing.
- Stop dev server (Ctrl+C), restart `npm run dev`, sign in at http://localhost:3000/studio.
- Create three `Hotel Room` documents, publish each. Use the fields in the included `sanity/schemaTypes/room.ts`. Suggested demo names and rates:
  1. The Obsidian Suite — 285 GBP/night, capacity 2, sortOrder 1
  2. The Atelier Room — 195 GBP/night, capacity 2, sortOrder 2
  3. The Penthouse — 460 GBP/night, capacity 3, sortOrder 3
  Add descriptions, features, category, accent, and set availability notes explicitly as *fictional demonstration only*.
- Reload homepage and inspect whether it displays the CMS-source label. Change a published rate in Studio; publish; reload homepage and confirm the updated figure.
- Never publish passwords, API write tokens, personal information or real guest details to a public dataset.

## 4. Build and test
- Stop dev server and run `npm run build`. Fix any reported errors before proceeding.
- Run `npm run start`; test http://localhost:3000, /case-study, and /studio.
- Desktop: Chrome and Edge, narrow mobile view in DevTools (390px), tablet (768px), laptop (1366px).
- Test navigation, demo links, room selection, check-in/out ordering, 0-night dates, guest capacity, exact price calculations, form/contact mailto link, keyboard Tab, browser back, contrast and reduced motion.
- No payment or actual booking is implemented. Availability is editorial/demo text, not inventory.

## 5. Deploy without breaking the existing site
- Create a **new** GitHub repository, commit project files excluding `.env.local`/`node_modules`.
- Sign into https://vercel.com/ and import that GitHub repository as a Next.js project.
- Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` as Vercel environment variables. Deploy.
- Add your full deployed `https://...vercel.app` origin to Sanity CORS with credentials enabled for embedded Studio, then verify the production `/studio` route.
- Test live editing and publishing again; ensure the home page reflects the changes.
- Do not replace the old Netlify static site until the new public link passes real-browser QA.

## 6. Capture proof
- Take screenshots using real browser at 1366px desktop and ~390px mobile (DevTools device mode), showing the homepage, case-study, room selector and CMS editor (avoid secret credentials).
- Record a 60–90 second demo with Windows Snipping Tool video recorder or OBS: project intro, live React interaction, Sanity change + publish, refresh and content change, technical case study.
- Link GitHub source, working deployment, and demo in your freelance application. Keep 'self-directed concept' labels.

## Important limits
This is a source project; neither npm dependencies, a Sanity account, a live database, nor Vercel deployment are included. Do not describe the CMS as 'live' until you create and publish actual Sanity documents and validate editing.
