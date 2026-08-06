# Skapari Astro Portfolio

A modern portfolio website built with Astro and Svelte, showcasing architectural and design projects.

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── js/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── projects.json
│   └── styles/
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌐 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Live Site
- **URL**: https://murraygreig.github.io/skapari/

### Deployment Process
1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. The site is available at the URL above within a few minutes

### Manual Deployment
If you need to deploy manually:
1. Go to your repository's **Actions** tab on GitHub
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the branch

## 🛠️ Technologies Used

- **Astro** - Static site generator
- **Svelte** - Component framework
- **Bootstrap** - CSS framework
- **Sass** - CSS preprocessor
- **TypeScript** - Type safety

## 📁 Project Organization

- `src/pages/` - Astro pages and routes
- `src/components/` - Reusable components
- `src/assets/images/` - Site chrome (logos, SVGs) — not project galleries
- `src/projects.json` - Project data (source of truth for all portfolio projects)
- `public/images/projects/` - Project covers and gallery images
- `sourcefiles/` - Raw client deliverables before optimization (not served)
- `docs/adding-a-project.md` - Step-by-step guide for adding a new project

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Svelte Documentation](https://svelte.dev/docs)
- [GitHub Pages Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
