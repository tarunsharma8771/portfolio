# Tarun Kumar — Academic Portfolio

A minimalist, modular academic portfolio built with **Next.js (App Router), TypeScript, Tailwind CSS, and optional Sanity CMS**. Designed to be public on GitHub and hosted on Vercel.

## Pages

Home, About, Teaching, AI in Education, Industry-Connected Learning, Project-Based Learning, Student Learning & Assessment, Projects, Articles, Videos, and Contact.

## Local development

Requires Node.js 20.9+ (Node 22 recommended).

```bash
npm install
cp .env.example .env.local  # Windows: copy .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Content management

The site works without a CMS. Built-in content is in `src/data/site.ts`.

**Medium:** The Articles page reads `https://medium.com/feed/@tarun515` when available and falls back to verified article links. Feed fetching is server-side and page content is revalidated every 30 minutes. Medium may throttle or block feeds, so synchronization is best-effort.

**YouTube:** Set `YOUTUBE_CHANNEL_ID` in `.env.local` (format `UC...`) to show published videos from the public YouTube feed. This is not a YouTube API integration and depends on feed availability.

**Sanity CMS:** Optional read-only content integration is included. Create a Sanity project and a **separate Sanity Studio** with the document schemas in `sanity/schemas/index.ts`. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`. Add the website domain to Sanity's CORS allowlist if needed. Sanity Studio supplies authenticated administration; the portfolio itself does **not** contain an admin login or embedded Studio. Sanity content types currently supported: `article`, `video`, and `project`. Teaching and homepage copy remain code-managed in this first version.

For a fully CMS-editable site, add schemas and queries for all pages in a subsequent iteration. Do not claim that all pages are currently editable without code.

## Deployment

### GitHub Pages

The `Deploy to GitHub Pages` workflow builds a static export and publishes it whenever changes are pushed to `main`. In the repository settings, open **Settings → Pages** and set the source to **GitHub Actions**. The project site is published at `https://tarunsharma8771.github.io/portfolio/`.

The GitHub Pages build sets the repository base path and canonical site URL automatically. Optional public Sanity identifiers and the YouTube channel ID can be added under **Settings → Secrets and variables → Actions → Variables**. Since Pages is static hosting, feed and CMS content is captured at build time and refreshed on the next deployment.

After publishing an article or video, open **Actions → Deploy to GitHub Pages → Run workflow** to refresh the live site manually.

### Vercel

Import the repository in Vercel, add any Sanity or YouTube environment variables, and set `NEXT_PUBLIC_SITE_URL` to the deployed origin. Vercel can run the app with its server features, unlike GitHub Pages.

Do not commit `.env.local`, API tokens, private student data, or copyrighted student submissions.

## Architecture

- `src/app/`: independent page routes, shared layout, SEO metadata, sitemap and robots.
- `src/components/`: reusable navigation, cards, case studies, footer, and page sections.
- `src/data/`: local content and verified links.
- `src/lib/`: feed fetching, CMS access, content merging.
- `src/types/`: shared TypeScript contracts.
- `sanity/schemas/`: starter CMS document definitions for a separate Studio.
- `.github/workflows/`: continuous integration quality checks.

See `docs/ARCHITECTURE.md` and `docs/CONTENT.md`.

## Editorial integrity

Delivered teaching examples and future proposals are distinguished. Do not publish unverified student ratings, personal email addresses, invented GitHub links, or unapproved student work.

## License

MIT license covers code. Personal biography, images, and original articles remain with their respective owners; see `LICENSE`.
