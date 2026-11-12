# Gabriel Aragão — Data Engineer

Phase 1: an original, dark-first portfolio built around expressive typography and technical line art. All professional details are limited to the supplied brief. Case studies are explicitly previews, with no invented results, dates, or production architecture.

## Run

Node 20.9+ is required (Node 22 recommended).

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. In the initial workspace, a checksum-verified Node 22 runtime is available in the ignored `.tools/node` directory. If Node isn't on your PATH:

```sh
export PATH="$PWD/.tools/node/bin:$PATH"
npm run dev
```

```sh
npm run build      # production compilation, type checking, static generation
npm run typecheck # standalone TypeScript check
npm start          # serve the production build
```

## Content

Edit `src/content/portfolio.ts` to change profile/contact details, project introductions, metadata, body sections, and expertise. Contact values start as `null`; setting a verified email or full LinkedIn/GitHub URL makes that contact a real link. Nothing sends messages or collects visitor data.

Projects share `src/app/work/[slug]/page.tsx`. The homepage and case routes are statically prerendered. Unknown project slugs return 404. Each project can receive:

- `period`: a verified date range;
- `sections`: context, decisions, implementation, and impact copy;
- `architecture`: custom stage names, subtitles, and descriptions (otherwise uses the clearly labeled conceptual example);
- `gallery`: image objects with `src`, `alt`, `caption`, `width`, and `height`.

Put approved images in `public/projects/` and reference `/projects/file.webp`. Galleries use Next Image. Local images need no remote image configuration. The decision-record, comparison, and screenshot empty states intentionally demonstrate the future content layout.

## Design and components

- `src/app/globals.css`: design tokens, editorial layouts, breakpoints, motion fallbacks.
- `src/components/navigation.tsx`: desktop navigation and mobile disclosure, Escape dismissal.
- `src/components/architecture.tsx`: keyboard-accessible stage selection, live description.
- `src/components/project-art.tsx`: original decorative SVG artwork, never presented as production diagrams.
- `src/components/motion.tsx`: short, once-per-viewport translation, readable without JavaScript.
- `src/components/footer.tsx`: configurable contact channels.
- `docs/design-direction.md`: creative direction and research notes.

DM Sans and IBM Plex Mono are served locally with their SIL OFL licenses in `public/fonts`. Editorial italics use a system serif. No third-party font requests, image services, analytics, canvas rendering, GSAP, or WebGL are required.

Reduced-motion preferences disable animation and smooth scrolling. Mobile has a stacked hero, single-column projects, two-column pipeline, and compact case index. Native links/buttons/details provide keyboard interaction; focus indicators and a skip link are included.

## Scope

This is a local frontend foundation, not a published portfolio. Final biography, contact values, professional dates, screenshots, actual architectures, achievements, and validated outcomes remain to be supplied. No external services or secrets are needed.

## Ford case content

`src/content/ford-study.ts` contains the repository-backed narrative and source links for the D&R Engineering Dashboard. `src/components/technical-study.tsx` renders this structured content. The diagram is a simplified layer map of preserved code, explicitly distinguishing optional snapshots and the separate DPA5 path from the synthetic local demonstration. No corporate queries were executed or production results assumed. Hero and pipeline animation controls were removed at the user’s request; reduced-motion CSS remains.

## GitHub Pages

In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source. The workflow publishes the static export from `main` and detects the repository's URL prefix. It can also be started from **Actions → Publish portfolio**.

To check the static export locally, run `PAGES_EXPORT=1 npm run build`. The generated files are in `out/`.
