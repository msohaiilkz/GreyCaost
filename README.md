<div align="center">

# 🏛️ Greycoast Capital — Corporate Website

**Bridging potential with opportunities in the markets of your choice.**

A modern, fully-responsive marketing website for **Greycoast Capital Pte Ltd** — a Singapore-based project finance & advisory firm. Built as a fast, SEO-friendly single-page application with smooth, premium animations.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

</div>

---

## ✨ Overview

Greycoast Capital provides comprehensive project finance and advisory solutions across Energy, Marine, Aviation, Infrastructure, Deep-Tech, Med-Tech, Semiconductors and Industrial sectors. This website presents the firm's full range of services through a clean, professional, and highly interactive experience.

The site is **content-driven** — every one of the 15+ service pages is rendered from a single reusable template powered by a structured data file, making the codebase easy to maintain and extend.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-based UI |
| **Vite** | Lightning-fast build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling (CSS-first `@theme` design tokens) |
| **Framer Motion** | Scroll reveals, page transitions & micro-interactions |
| **React Router v7** | Client-side routing (18 SEO-friendly routes) |
| **React Helmet Async** | Per-page SEO meta tags (title, description, canonical, Open Graph) |
| **Google Fonts** | Poppins (display) + Open Sans (body) |

---

## 🎯 Key Features

- 🎬 **Video hero** with animated, word-by-word headline reveal
- 📊 **Animated stat counters** ("Partner in Success") over a cinematic video background
- 🧭 **Sticky navbar** with a professional services **mega-menu** and active-page highlighting
- 🃏 **Data-driven service pages** — 15+ pages from one template & one data file
- ✨ **Premium animations** — scroll reveals, gradient shine text, hover glow, shine buttons, parallax
- 🧵 **Breadcrumb navigation** on every inner page
- 🖼️ **Smart asset system** — images auto-resolve by filename with graceful fallbacks
- 📈 **Scroll progress bar** & **back-to-top** button
- 📱 **Fully responsive** across mobile, tablet & desktop
- 🔍 **SEO-optimised** — semantic markup, meta tags, canonical URLs

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI (Navbar, Footer, Button, Breadcrumb, ...)
│   └── anim/          # Animation components (AnimatedText, ...)
├── sections/          # Home page sections (Hero, About, Stats, Clients, ...)
├── pages/             # Routed pages (Home, Services, ServiceDetail, Contact)
├── data/              # Content — site.js & services.js (single source of truth)
├── lib/               # Asset resolvers (assets.js, demoImages.js)
└── index.css          # Tailwind + design-system tokens

public/assets/
├── img/               # Logos, client logos, page images
└── videos/            # Hero, partner & service background videos
```

---

## 🧩 Architecture Highlights

**Content-driven service pages** — All service pages (Corporate Finance, Trade Finance,
Project Financing, Energy, Renewables, and more) share one `ServiceDetailPage` template.
Adding a new service is as simple as appending an object to `src/data/services.js`:

```js
{
  slug: "new-service",
  title: "New Service",
  group: "Advisory",
  image: "new-service.jpg",
  intro: ["Description paragraph..."],
  listTitle: "Our Expertise:",
  items: [{ label: "Feature", desc: "Detail..." }],
}
```

**Design system** — Brand colours (deep navy, royal blue, signature violet) and fonts are
defined once as Tailwind v4 `@theme` tokens in `src/index.css`, keeping the UI consistent.

---

## 🛠️ Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Create an optimised production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

The production build (`npm run build`) outputs static files to `dist/`, deployable to any
static host — **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

> For client-side routing, configure the host to rewrite all routes to `index.html`.

---

## 📬 Contact

**Greycoast Capital Pte Ltd**
📧 info@greycoast-capital.com
📍 1 Marina Boulevard, Level 20, Singapore 018989

---

<div align="center">

Built with React, Vite, Tailwind CSS &amp; Framer Motion.

</div>
