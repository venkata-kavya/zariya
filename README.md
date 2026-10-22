# Zariya — Heritage Languages

A responsive React + Vite landing-page recreation inspired by the supplied reference screenshots. This is a front-end demo; sign-in and registration forms are not connected to a real authentication service.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── App.jsx                         # Route definitions
├── main.jsx                        # React entry point
├── styles.css                      # Site styling and responsive rules
├── data/
│   └── siteData.js                 # Language, FAQ, testimonial data
├── hooks/
│   └── useScrollAnimations.js      # Gentle ScrollTrigger reveals
├── components/
│   ├── BrandMark.jsx
│   ├── Eyebrow.jsx
│   ├── Footer.jsx
│   ├── LanguageCard.jsx
│   ├── LanguageTicker.jsx
│   ├── Navbar.jsx
│   ├── RotatingHeroLanguage.jsx
│   └── SectionTitle.jsx
├── pages/
│   ├── AuthPage.jsx
│   ├── InfoPage.jsx
│   └── LandingPage.jsx
└── sections/
    ├── BuiltForYou.jsx
    ├── FAQSection.jsx
    ├── FinalCTA.jsx
    ├── HowItWorks.jsx
    ├── LanguageSection.jsx
    ├── MissionSection.jsx
    └── StoriesSection.jsx

public/assets/                      # Generated/recreated artwork
```

## Motion and interaction notes

- ScrollTrigger reveals cover all major sections: headings, language ticker and CTA, mission and audience cards, learning steps, testimonial stage and controls, FAQ rows, final CTA, and footer links. Content remains visible from first paint; each group settles upward by 13px with a subtle 0.7% scale change once as it enters view. Opacity is never animated, preventing flash/blink behavior. Cards within a grid use a small stagger.
- The hero language pill is fixed. GSAP moves only the clipped inner language track; the pill background and position are not animated.
- Background drift and card hover scaling are restrained. Reduced-motion preferences disable scroll motion and the hero float. Image-load events refresh ScrollTrigger positions to keep animations aligned after lazy images load.
- The testimonial images are standardized to **900 × 1000 px** and use a shared 9:10 crop, with the same card frame sizing for each slide.

## Main libraries

- React 18
- React Router 6
- Vite 5
- GSAP 3 + ScrollTrigger

## Notes

This project is a frontend recreation, not the original product source code. Before production deployment, connect real authentication, review legal copy, replace placeholder contact/social destinations with official brand URLs, and run `npm run build` locally.
