# Software Engineer Portfolio

A production-ready portfolio website built with Vite, React, Tailwind CSS, Framer Motion, and React Icons. The project includes a responsive one-page layout, dark/light mode persistence, animated hero typing effect, GitHub repository integration, resume preview modal, reusable section components, and a clean scalable folder structure.

## Tech Stack

- Vite + React
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint

## Features

- Fully responsive layout for mobile, tablet, and desktop
- Sticky navbar with active-section highlighting and mobile menu
- Light and dark themes with `localStorage` persistence
- Animated hero section with CTA buttons and social links
- Skills cards with animated progress indicators
- Projects gallery with hover interactions and GitHub API repository cards
- Experience timeline and certifications grid
- Contact form with a mail client integration placeholder
- Scroll-to-top button and smooth scrolling
- SEO-friendly metadata and reusable portfolio data module
- Lazy-loaded resume modal

## Project Structure

```bash
src/
├── assets/
├── components/
├── data/
├── hooks/
├── pages/
├── sections/
├── utils/
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open the development server URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and customize the values:

```bash
VITE_PORTFOLIO_NAME="Pratibha Jape"
VITE_PRIMARY_ROLE="Software Engineer"
VITE_SECONDARY_ROLE="DevOps Engineer"
VITE_CONTACT_EMAIL="pratibha@example.com"
VITE_GITHUB_USERNAME="octocat"
VITE_GITHUB_URL="https://github.com/octocat"
VITE_LINKEDIN_URL="https://linkedin.com/in/octocat"
VITE_RESUME_URL="https://example.com/resume.pdf"
VITE_LOCATION="Pune, India"
```

## Customization Notes

- Update personal copy, experience, certifications, and featured projects in `src/data/portfolio.js`.
- Replace the sample project artwork in `src/assets/` with your own screenshots.
- Set `VITE_RESUME_URL` to a hosted PDF if you want the preview modal to render a real resume.
- Configure `VITE_GITHUB_USERNAME` to fetch live repositories from the GitHub API.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates the production bundle.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the codebase with ESLint.
