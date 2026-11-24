# Updating content

## No-code options

- **Medium articles:** Publish to the configured Medium account. The website attempts to refresh the feed approximately every 30 minutes; availability is not guaranteed. Known articles are also listed as fallback entries.
- **YouTube videos:** Supply `YOUTUBE_CHANNEL_ID` in deployment environment variables; new public videos can appear from the public channel feed. Initial setup requires configuration, but subsequent videos do not require code edits.
- **CMS articles/videos/projects:** Configure a separate authenticated Sanity Studio, add entries, and publish. The public website reads those entries without a source-code change.

## Code-managed content in this version

- Home identity, navigation, teaching themes, case studies, and local projects: `src/data/site.ts`.
- Each page's narrative: `src/app/<route>/page.tsx`.
- Shared design: `src/app/globals.css`.

## Content verification checklist

- Distinguish *Delivered* from *Proposed*.
- Confirm all profile URLs before adding them.
- Confirm rights and permissions for student projects, images, and feedback.
- Do not claim research findings or enrollment before they exist.
