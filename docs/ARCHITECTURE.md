# Architecture

```text
Visitor browser
    │ HTTPS
    ▼
Vercel / Next.js App Router
    ├── static routes: Home, About, Teaching, Research, etc.
    ├── reusable components + local typed content
    └── server-side content loaders (Articles / Videos / Projects)
           ├── optional Sanity read-only API
           ├── Medium RSS feed (best-effort)
           └── YouTube public feed (optional channel ID)
```

Next.js performs server-side fetches; API credentials are not sent to the browser. Public content can be revalidated every 30 minutes on the dynamic-content pages. External feeds may be unavailable; Medium uses known fallback links, YouTube shows a helpful empty state.

## Modularity

Each page is a standalone `src/app/<route>/page.tsx` module. Shared styling is in `src/app/globals.css`, reusable components are in `src/components`, and the content and external integrations are isolated in `src/data` and `src/lib`.

## Security

Sanity is configured for public read-only access only. Content editing occurs in a separate authenticated Sanity Studio. Keep write tokens private. External links use `rel="noopener noreferrer"`. URLs from feeds and CMS are checked for HTTPS before rendering. No private student data is included.

## Future upgrades

- Add an actual Sanity Studio application and configure its authenticated deployment.
- Add page-level schemas and editing for all content if needed.
- Add image optimization once real, licensed images are supplied.
- Add visual regression and end-to-end tests.
- Add verified GitHub, LinkedIn, YouTube, and contact details.
