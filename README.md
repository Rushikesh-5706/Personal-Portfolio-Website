# Rushikesh Kunisetty — Portfolio

A personal portfolio website built with React and Vite, featuring a dark neural aesthetic, Framer Motion animations, parallax scrolling, and a typewriter role display. The site documents my work across AI engineering, AWS cloud development, and blockchain systems.

**Live Site:** [https://rushikesh-kunisetty-personal-portfolio.vercel.app/]

---

## Technology Stack

| Category       | Technology              |
| -------------- | ----------------------- |
| Framework      | React 18                |
| Build Tool     | Vite                    |
| Styling        | Tailwind CSS            |
| Animations     | Framer Motion           |
| Parallax       | react-scroll-parallax   |
| Scroll Detect  | react-intersection-observer |
| Icons          | Lucide React            |
| Fonts          | Syne, Inter (Google Fonts) |
| Deployment     | Vercel                  |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── AnimatedSection.jsx
│       ├── ProjectCard.jsx
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
cd Personal-Portfolio-Website
npm install
```

### Development

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

## Design

The visual identity is built around a dark background with purple and cyan accents. The hero section uses animated gradient blobs and a parallax effect implemented via react-scroll-parallax. All section entries are triggered by scroll position using react-intersection-observer and animated with Framer Motion. The skills section renders badges with category-specific color coding. Project cards use a glassmorphism treatment with per-project accent colors. The site respects the prefers-reduced-motion user preference via a global CSS media query that disables all animations and transitions for users who have enabled that accessibility setting.

---

## Performance Targets

| Category       | Target Score |
| -------------- | ------------ |
| Performance    | 90+          |
| Accessibility  | 95+          |
| Best Practices | 95+          |
| SEO            | 95+          |

---

## Author

Kunisetty Rushikesh

- GitHub: [https://github.com/Rushikesh-5706](https://github.com/Rushikesh-5706)
- LinkedIn: [https://www.linkedin.com/in/rushikeshkunisetty5706/](https://www.linkedin.com/in/rushikeshkunisetty5706/)
- Email: rushikeshkunisetty@gmail.com
