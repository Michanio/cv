# Michał Korulczyk — CV

My CV as a static, single-page site built with [Astro](https://astro.build).

## Requirements

- Node.js 22.12 or newer
- npm

## Setup

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

## Commands

| Command           | What it does                                                     |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Start the dev server with live reload                            |
| `npm run build`   | Build the site into `dist/`                                      |
| `npm run preview` | Serve the built site locally                                     |
| `npm run images`  | Regenerate the icons and social preview image in `public/`       |

## Editing the content

| What                                   | Where                                |
| -------------------------------------- | ------------------------------------ |
| Name, contact, summary, skills         | `src/data/profile.ts`                |
| Jobs                                   | `src/content/experience/en/*.md`     |
| Projects                               | `src/content/projects/en/*.md`       |
| Education                              | `src/content/education/en/*.md`      |
| Section headings and button labels     | `src/i18n/ui.ts`                     |
| Layout and markup                      | `src/components/Cv.astro`            |
| Styles                                 | `src/styles/cv.css`                  |

Each job, project and education entry is a Markdown file: the frontmatter holds
the structured fields (role, company, dates, tech stack) and the body holds the
description. The allowed fields are defined in `src/content.config.ts`, and the
build fails if a file doesn't match them.

To add a job, create a new file in `src/content/experience/en/`. Dates use
`YYYY-MM`; leave out `end` for the current job. Entries are sorted by start date
automatically.

## Icons and social preview

`public/og.png`, `public/apple-touch-icon.png` and `public/favicon.ico` are
generated from `public/favicon.svg` and the text in
`scripts/generate-images.mjs`. Run `npm run images` after changing either.

## Deploying

`npm run build` produces a plain static site in `dist/` that can be hosted
anywhere.

Before publishing, set `site` in `astro.config.mjs` to the address the CV will
live at. Link previews (`og:image`, `og:url`) need it to produce full URLs.
