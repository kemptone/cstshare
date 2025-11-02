# CSTShare Website

Documentation and community website for the Logic Pro Settings Library.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see the site.

## 📁 Project Structure

```text
website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (add as needed)
│   ├── content/
│   │   ├── blog/       # Blog posts (markdown)
│   │   └── config.ts   # Content collections config
│   ├── layouts/
│   │   └── Layout.astro # Base layout template
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── settings.astro    # Settings browser
│   │   ├── contribute.astro  # Contribution guide
│   │   └── blog/
│   │       ├── index.astro   # Blog index
│   │       └── [slug].astro  # Blog post template
│   ├── styles/
│   │   └── global.css  # Tailwind imports
│   └── utils/
│       └── settings.ts # Logic Pro file scanning
├── astro.config.mjs    # Astro configuration
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description"
author: "Your Name"
date: 2024-11-02
tags: ["tutorial", "mixing"]
---

Your content here...
```

3. The post will automatically appear in the blog index

## 🎨 Styling

The site uses Tailwind CSS v4. Add custom styles in `src/styles/global.css` or use Tailwind utility classes directly in components.

## 📂 How Settings are Displayed

The settings browser (`src/pages/settings.astro`) dynamically scans the parent directories for Logic Pro files:

- `Channel Strip Settings/`
- `Plug-In Settings/`
- `Patches/`
- `Project Templates/`
- etc.

The `src/utils/settings.ts` file handles the file system scanning and categorization.

## 🔧 Development Tips

- Hot reload works for all `.astro`, `.ts`, and `.css` files
- Blog posts support full Markdown with frontmatter
- The settings catalog rebuilds automatically when files change
- Tailwind classes are purged in production for optimal bundle size

## 🚀 Deployment

Build the site:

```bash
npm run build
```

The static files will be in `dist/`. Deploy to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
