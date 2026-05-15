# Rushikesh Kunisetty — Portfolio

A personal portfolio website built with React + Vite, featuring a cinematic dark neural aesthetic, Framer Motion animations, parallax scrolling, staggered scroll reveals, and a typewriter role display. The site documents my work across AI engineering, AWS cloud development, and blockchain systems.

**Live Site:** [https://rushikesh-kunisetty-personal-portfolio.vercel.app/](https://rushikesh-kunisetty-personal-portfolio.vercel.app/)

**GitHub Repository:** [https://github.com/Rushikesh-5706/Personal-Portfolio-Website](https://github.com/Rushikesh-5706/Personal-Portfolio-Website)

---

## Technology Stack

| Category       | Technology                  |
| -------------- | --------------------------- |
| Framework      | React 18                    |
| Build Tool     | Vite 5                      |
| Styling        | Tailwind CSS + Vanilla CSS  |
| Animations     | Framer Motion               |
| Parallax       | react-scroll-parallax       |
| Scroll Detect  | react-intersection-observer |
| Icons          | Lucide React                |
| Fonts          | Syne, Inter (Google Fonts)  |
| Deployment     | Vercel                      |

---

## Sections

- **Hero** — Name, animated typewriter role, tagline, CTA buttons, and resume download
- **About** — Bio paragraphs, profile photo, and stats
- **Experience** — Timeline-style professional experience with skills
- **Education** — Academic background
- **Skills** — Categorized technology badges (AI/ML, Cloud, Backend, Web3)
- **Projects** — 5 real projects with descriptions, tech stacks, and GitHub links
- **Certifications** — AWS, IBM, Blockchain, Oracle, IT Specialist certifications with verification links
- **Achievements** — Hackathon results and community recognition
- **Contact** — Email, LinkedIn, and GitHub contact cards with a CTA

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── avatar.jpg
│   ├── resume.pdf
│   ├── aws-developer-certificate.pdf
│   ├── ibm-genai-certificate.pdf
│   ├── blockchain-certificate.pdf
│   ├── oci-devops-certificate.pdf
│   ├── html-css-certificate.pdf
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── sections/
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Experience.jsx
    │   │   ├── Education.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Certifications.jsx
    │   │   ├── Achievements.jsx
    │   │   └── Contact.jsx
    │   └── ui/
    │       ├── MagneticButton.jsx
    │       ├── ProjectCard.jsx
    │       ├── CertificationCard.jsx
    │       ├── SkillBadge.jsx
    │       └── ScrollProgress.jsx
    ├── data/
    │   └── portfolioData.js
    ├── hooks/
    │   └── useActiveSection.js
    └── styles/
        └── globals.css
```

---

## Getting Started

### Prerequisites

Node.js v18 or above is required. Verify with:

```bash
node --version
```

### Installation

```bash
git clone https://github.com/Rushikesh-5706/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website/portfolio
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

The preview server runs at [http://localhost:4173](http://localhost:4173).

---

## Design Principles

The visual identity is built around a dark background (#050508) with purple (#7C3AED) and cyan (#06b6d4) accents.

- **Parallax** — Hero background blobs use `react-scroll-parallax` with `translateY` offsets, creating true depth at different scroll speeds
- **On-Scroll Animations** — All sections trigger staggered Framer Motion reveal animations via `react-intersection-observer`
- **Reduced Motion** — A `@media (prefers-reduced-motion: reduce)` block in `globals.css` disables all animations and transitions for accessibility
- **Responsive** — Fully tested at 375px (mobile), 768px (tablet), and 1280px (desktop). No horizontal scrollbars at any breakpoint.
- **SEO** — Canonical URL, Open Graph, Twitter Card, and JSON-LD structured data (Person schema) in `index.html`

---

## Lighthouse Performance Targets

| Category       | Target Score |
| -------------- | ------------ |
| Performance    | 85+          |
| Accessibility  | 92+          |
| Best Practices | 93+          |
| SEO            | 95+          |

---

## Author

**Kunisetty Rushikesh**

- GitHub: [https://github.com/Rushikesh-5706](https://github.com/Rushikesh-5706)
- LinkedIn: [https://www.linkedin.com/in/rushikeshkunisetty5706/](https://www.linkedin.com/in/rushikeshkunisetty5706/)
- Email: rushikeshkunisetty@gmail.com
