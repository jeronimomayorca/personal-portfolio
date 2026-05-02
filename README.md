# `jeronimo@localhost:~/portfolio$` _

Personal portfolio built with Astro, Tailwind CSS and GSAP. Static-first, bilingual (EN/ES), zero JavaScript shipped by default.

**[→ mayorcadev.vercel.app](https://mayorcadev.vercel.app)**

---

## Stack

| Layer | Tech | Why |
|---|---|---|
| Framework | **Astro 6** | Static output, zero-JS baseline, island architecture for interactivity only where needed |
| Styling | **Tailwind CSS 4** | Utility-first with native CSS layers and no PostCSS dependency |
| Animations | **GSAP 3 + ScrollTrigger** | Fine-grained timeline control that CSS transitions can't match |
| UI Islands | **React** | Interactive components hydrated on demand via Astro islands |
| Icons | **Lucide React** | Tree-shakeable, consistent icon set |
| Typography | **Inter + JetBrains Mono** | Clean sans-serif paired with monospace for terminal aesthetic |
| Image Pipeline | **Sharp** | Build-time compression, automatic WebP conversion |
| Deployment | **Vercel** | Edge delivery with zero config for Astro static |
| SEO | **@astrojs/sitemap + JSON-LD** | Structured data, hreflang, canonical URLs |

---

## Run Locally

```sh
git clone https://github.com/jeronimomayorca/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
# → localhost:4321
```

Requires **Node >= 22.12.0**

---

## Project Structure

```
src/
├── actions/
│   └── index.ts             # Astro Actions (Telegram contact form)
├── components/
│   ├── Navbar.astro          # Navigation with blinking cursor
│   ├── Footer.astro          # Engineering footer with system status
│   ├── ProjectsBento.astro   # 12-col asymmetric bento grid
│   ├── NeuralNetwork.astro   # Canvas animation (GSAP driven)
│   ├── TerminalContactForm.astro  # Terminal-styled form → Telegram
│   └── LanguagePicker.astro  # EN/ES language switcher
├── i18n/
│   ├── ui.ts                 # EN/ES translation dictionary
│   └── utils.ts              # getLang, useTranslations helpers
├── layouts/
│   └── Layout.astro          # Base shell: SEO, fonts, meta, JSON-LD
├── pages/
│   ├── index.astro           # Landing page
│   ├── experience.astro      # Timeline with ScrollTrigger animations
│   ├── projects.astro        # Projects with bento grid
│   ├── 404.astro             # Custom not found page
│   └── es/                   # Spanish route variants
└── styles/
    └── global.css            # Design tokens and base styles
```

---

## Lighthouse

Tested on [PageSpeed Insights](https://pagespeed.web.dev/) — May 2026.

**Desktop**

| Performance | Accessibility | Best Practices | SEO |
|:-:|:-:|:-:|:-:|
| 100 | 93 | 100 | 100 |

FCP 0.7s · LCP 0.7s · TBT 0ms · CLS 0

**Mobile**

| Performance | Accessibility | Best Practices | SEO |
|:-:|:-:|:-:|:-:|
| 94 | 93 | 100 | 100 |

FCP 2.4s · LCP 2.4s · TBT 0ms · CLS 0

---

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Dev server — `localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview the production build |

---

## License

MIT
