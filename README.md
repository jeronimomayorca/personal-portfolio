# `jeronimo@localhost:~/portfolio$` _

AI-first architecture built with Astro, Tailwind and GSAP. Focused on extreme performance and conversion metrics.

**[→ jeronimomayorca.vercel.app](https://jeronimomayorca.vercel.app)**

---

## Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **Astro 6** | Static Site Generation, zero-JS by default |
| Styling | **Tailwind CSS 4** | Custom design system with proprietary tokens |
| Animations | **GSAP 3 + ScrollTrigger** | Kinetic experience on `/experience` |
| UI Components | **React** | Islands architecture for interactive components |
| Icons | **Lucide React** | Consistent, tree-shakeable iconography |
| Typography | **Inter + JetBrains Mono** | Sans for readability, Mono for terminal identity |
| Deployment | **Vercel** | Static output with automated CI/CD |
| SEO | **@astrojs/sitemap + JSON-LD** | Structured data, hreflang, canonical URLs |

---

## Key Features

What you don't see at first glance.

**Bento Grid System** — Dynamic 12-column grid with asymmetric distribution (7/5 cols) for visual project hierarchy. Hover states with per-project accent glow.

**I18n Architecture** — Scalable bilingual EN/ES system with zero code duplication. Routing via `prefixDefaultLocale: false` and translations centralized in a single module.

**Neural Network Canvas** — Animated canvas background: 40 drifting nodes, edge connections with data-pulse and GSAP-controlled fade. Zero extra dependencies.

**Terminal Contact Form** — Linux terminal-styled form (`user@kernel:~/contact$`). Server-side via Astro Actions to Telegram.

**Optimized Assets** — Automatic compression with `sharp`, native lazy loading, WebP images. Static output — no server runtime.

---

## Setup

```sh
# Clone the core
git clone https://github.com/jeronimomayorca/personal-portfolio.git

# Install dependencies
npm install

# Start the dev environment
npm run dev
# → localhost:4321
```

Requires Node >= 22.12.0

---

## Project Structure

```
src/
├── components/          # UI atoms and molecules
│   ├── Navbar.astro         # Navigation with blinking cursor
│   ├── Footer.astro         # Engineering footer with system status
│   ├── ProjectsBento.astro  # 12-col bento grid
│   ├── NeuralNetwork.astro  # Animated canvas (GSAP driven)
│   └── TerminalContactForm  # Terminal form → Telegram
├── i18n/                # Translations and i18n utilities
│   ├── ui.ts                # EN/ES dictionary
│   └── utils.ts             # getLang, useTranslations
├── layouts/
│   └── Layout.astro         # Base shell, SEO, fonts, meta
├── pages/               # Routes and GSAP logic
│   ├── index.astro          # Main landing
│   ├── experience.astro     # Timeline with ScrollTrigger
│   ├── projects.astro       # Projects with bento grid
│   ├── 404.astro            # Under construction page
│   └── es/                  # Spanish variants
└── styles/
    └── global.css           # Design tokens (colors, fonts)
```

---

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Dev server — `localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview the build |

---

## License

MIT
