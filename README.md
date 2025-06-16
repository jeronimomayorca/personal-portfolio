# Personal Portfolio — Astro SPA

Minimal, modern, and animated portfolio built with [Astro](https://astro.build/), React, TailwindCSS, and Framer Motion.
Features SPA-like navigation, smooth animations, interactive project grid, universe-inspired background, and fully responsive design.

---

## ✨ Demo

> _Add your live deployment link here (Vercel, Netlify, etc.)_

---

## 🚀 Main Technologies

- **Astro** — Main framework, ultra-fast and component-based.
- **React** — For the interactive, animated projects section.
- **TailwindCSS** — Utility-first CSS for fast, responsive styling.
- **Framer Motion** — Advanced scroll, layout, and modal animations.
- **AOS** — (Optional) Scroll animations for other sections.
- **MDX** — (Optional) For rich content if needed.

---

## 📦 Installation & Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at [http://localhost:4321](http://localhost:4321)

4. **Build for production:**
   ```sh
   npm run build
   ```

---

## 🗂️ Main Structure

```
/
├── public/                # Static images and assets
├── src/
│   ├── components/        # Astro and React components
│   │   ├── Navbar.astro
│   │   ├── MobileMenu.astro
│   │   ├── HeroSection.astro
│   │   ├── ProjectsGrid.jsx
│   │   ├── ExperienceSection.astro
│   │   └── EducationSection.astro
│   ├── layouts/
│   │   └── Layout.astro   # Base site layout
│   └── pages/
│       └── index.astro    # Main SPA page
├── package.json
└── tailwind.config.mjs
```

---

## 🧩 Key Components

- **Navbar.astro** — Top navigation, animated and responsive.
- **MobileMenu.astro** — Mobile menu with click-outside and icon close.
- **HeroSection.astro** — Main introduction.
- **ProjectsGrid.jsx** — "Vento"-style grid with animations and modal details (React + Framer Motion).
- **ExperienceSection.astro** — Professional experience.
- **EducationSection.astro** — Academic background.
- **Layout.astro** — Base structure and universe-inspired background.

---

## 🖼️ Customization

- Edit files in `src/components/` to update your info, projects, experience, etc.
- Change images in the `public/` folder.
- Adjust colors and fonts in `tailwind.config.mjs`.

---

## 📝 Useful Scripts

| Command           | Action                                 |
|-------------------|----------------------------------------|
| `npm run dev`     | Development server                     |
| `npm run build`   | Production build in `/dist`            |
| `npm run preview` | Preview the build locally              |

---

## 📄 License

> _Add your license here if you wish (MIT, CC, etc.)_
