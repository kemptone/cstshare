# CSTShare - Logic Pro Settings Library

A community-driven library for sharing Logic Pro Channel Strip Settings, patches, plugin presets, and production knowledge.

## 🎚️ What's Inside

This repository contains:

- **Channel Strip Settings** (.cst) - Complete channel configurations with EQ, compression, and effects
- **Plug-In Settings** - Individual plugin presets for Logic Pro and third-party plugins
- **Patches** - Instrument patches for synthesizers and samplers
- **Project Templates** - Ready-to-use project templates
- **Key Commands** - Custom keyboard shortcuts
- **Website** - Documentation and blog at `/website`

## 🚀 Quick Start

### For Users

1. **Clone this repository:**
   ```bash
   git clone [repository-url]
   cd audio-music-apps
   ```

2. **Copy settings to your Logic Pro folder:**
   ```bash
   cp -r "Channel Strip Settings" ~/Music/Audio\ Music\ Apps/
   cp -r "Plug-In Settings" ~/Music/Audio\ Music\ Apps/
   cp -r "Patches" ~/Music/Audio\ Music\ Apps/
   ```

3. **Open Logic Pro** and find the settings in your library under their respective categories

### For Contributors

1. **Fork this repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/yourusername/audio-music-apps.git
   ```

3. **Add your settings** to the appropriate folders

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add warm vocal channel strip"
   git push origin main
   ```

5. **Create a pull request** on GitHub

## 📁 Project Structure

```
Audio Music Apps/
├── Channel Strip Settings/
│   ├── Bus/
│   ├── Instrument/
│   └── Track/
│       ├── Justin Base.cst
│       ├── Justin Guitar 1.cst
│       └── Justin Guitar 2.cst
├── Plug-In Settings/
│   └── [55+ plugin presets]
├── Patches/
├── Project Templates/
├── Key Commands/
├── Sampler Instruments/
└── website/                  # Documentation & Blog
    ├── src/
    │   ├── pages/
    │   ├── layouts/
    │   └── content/blog/
    └── public/
```

## 🌐 Website Development

The website is built with Astro and Tailwind CSS.

### Running Locally

```bash
cd website
npm install
npm run dev
```

Visit `http://localhost:4321` to see the site.

### Building for Production

```bash
cd website
npm run build
npm run preview
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding Settings

1. Place files in the appropriate category folder
2. Use descriptive names (e.g., "Warm Lead Vocal.cst")
3. Test thoroughly before submitting
4. Create a pull request with a clear description

### File Naming Conventions

Good examples:
- `Warm Lead Vocal.cst`
- `Punchy Kick Drum.cst`
- `80s Synth Lead.patch`
- `Vintage Compressor.pst`

Avoid:
- Generic names like "Untitled.cst"
- Personal abbreviations
- Version numbers (use Git instead)

### Writing Blog Posts

1. Create a markdown file in `website/src/content/blog/`
2. Include frontmatter with title, description, author, date, and tags
3. Write helpful, actionable content
4. Submit via pull request

Example frontmatter:
```markdown
---
title: "Your Post Title"
description: "A brief description"
author: "Your Name"
date: 2024-11-02
tags: ["tutorial", "mixing"]
---
```

## 📋 Contribution Guidelines

- Only share settings you have the right to distribute
- Use clear, descriptive names for files
- Test your settings in Logic Pro before sharing
- Include subcategories when appropriate
- Be respectful and helpful in discussions
- Credit original creators when applicable
- Document any third-party plugin requirements

## 🔄 Syncing Your Local Settings

You can work directly in your Logic Pro settings folder and use Git to sync:

### Initial Setup

```bash
cd ~/Music/Audio\ Music\ Apps
git init
git remote add origin [your-repo-url]
git add .
git commit -m "Initial commit of my Logic Pro settings"
git push -u origin main
```

### Pull Updates from the Community

```bash
cd ~/Music/Audio\ Music\ Apps
git pull origin main
```

### Push Your New Settings

```bash
cd ~/Music/Audio\ Music\ Apps
git add .
git commit -m "Add new vocal processing chain"
git push origin main
```

**Note:** Be careful with the `.git` folder in your Audio Music Apps directory. You may want to keep it separate from Logic Pro's working files.

## 📝 License

This project is open source. Please respect the intellectual property of plugin developers and only share presets you have the right to distribute.

## 🙏 Acknowledgments

Thanks to all contributors who share their knowledge and settings with the community!

## 📧 Contact

- **Issues:** Use GitHub Issues for bugs and feature requests
- **Discussions:** Use GitHub Discussions for questions and ideas
- **Blog:** Share tips and tutorials on the website

## 🛠️ Built With

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type safety

---

Made with ❤️ by the Logic Pro community
