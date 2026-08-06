# Bagel — Official Website

Developer Preview landing page for [Bagel](https://hellobagel.github.io/bagel/).

## Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (Intersection Observer, no libraries)
- Google Fonts: DM Serif Display + DM Sans
- Hosted on GitHub Pages

## Structure

```
bagel/
├── index.html          Main page
├── style.css           All styles
├── script.js           Scroll reveals, nav, interactions
├── assets/
│   ├── logo.svg        Bagel ring mark
│   ├── favicon.png     Browser favicon (add yours)
│   └── og.png          Open Graph image (add yours)
└── README.md
```

## Deploy to GitHub Pages

1. Push this folder to your `hellobagel/bagel` repository
2. Go to Settings → Pages → Source: Deploy from branch → main / root
3. Your site will be live at `https://hellobagel.github.io/bagel/`

## To Do Before Launch

- [ ] Add real `favicon.png` (32×32 and 180×180)
- [ ] Add real `og.png` (1200×630) for social sharing
- [ ] Update `mailto:` in waitlist button with real address
- [ ] Update Instagram / GitHub links in footer
- [ ] Add actual app screenshot as `assets/screenshots/home.webp`
  and reference in the preview section

## Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- No JavaScript frameworks
- No CSS frameworks
- Fonts preconnected
- Animations GPU-accelerated (opacity + transform only)
- Reduced motion respected via `prefers-reduced-motion`