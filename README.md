# nuros.org

The official website of **NurOS**, an independent Linux distribution.

Built with [Astro](https://astro.build), styled as a Material 3 Expressive design system, and content-managed with [Keystatic](https://keystatic.com).

## Getting started

```bash
npm install
npm run dev
```

The dev server runs with the Keystatic admin UI available at `/keystatic`.

## Scripts

| Command             | Description                                      |
| -------------------- | ------------------------------------------------- |
| `npm run dev`         | Start the local dev server with Keystatic (SSR)   |
| `npm run build`       | Production build (static output, `astro.config.prod.mjs`) |
| `npm run build:local` | Build using the dev config (hybrid output)        |
| `npm run preview`     | Preview the production build                      |
| `npm run astro`       | Run the Astro CLI directly                         |

## Content

Blog posts live in `src/content/posts-{en,ru,kz}` as Markdoc files and can be edited directly or through the Keystatic admin UI (`/keystatic`), configured in `keystatic.config.ts`.

## License

GNU Affero General Public License v3.0 — see [LICENSE](LICENSE).
