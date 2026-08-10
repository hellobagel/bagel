# Bagel — Official Website v2

Premium landing page for [Bagel](https://hellobagel.github.io/bagel/).
Developer Preview · Android · 2026

---

## Stack

- HTML5 (semantic, accessible)
- CSS3 (custom properties, grid, no framework)
- Vanilla JavaScript (Intersection Observer, no libraries)
- Fonts: Instrument Serif + Inter via Google Fonts
- Hosted on GitHub Pages

## File Structure

```
bagel/
├── index.html          Main page
├── style.css           All styles (design tokens + components)
├── script.js           Scroll reveals, mobile menu, interactions
├── assets/
│   ├── favicon.png     Browser favicon (32×32)
│   ├── apple-touch-icon.png  (180×180)
│   └── og.png          Open Graph image (1200×630)
└── README.md
```

## Configurable Content

Only these values need updating between releases.
No structural changes required until Public Beta 1.

### Announcement bar
`index.html` → `<div class="announcement">`
```html
Developer Preview is now available.
```

### Hero badge
`index.html` → `<div class="hero__badge">`
```html
Developer Preview
```

### Download platform status
`index.html` → `<p class="platform__status">`
```html
Developer Preview · v0.1.0
```

### Changelog
Prepend a new `<article class="release">` block at the top of `.releases`.

### Footer version
`index.html` → `<span class="footer__version">`
```html
Developer Preview · v0.1.0
```

## Deploy to GitHub Pages

1. Push this folder contents to `hellobagel/bagel` repository root
2. Settings → Pages → Source: Deploy from branch → main / (root)
3. Live at `https://hellobagel.github.io/bagel/`

## Assets Needed

- [ ] `assets/favicon.png` — 32×32 app icon
- [ ] `assets/apple-touch-icon.png` — 180×180 app icon
- [ ] `assets/og.png` — 1200×630 social share image

Use the poster artwork (the bagel on concrete plinth) as the OG image.
It is already the right tone and will look excellent in link previews.

## Contact

hellobagelchat@gmail.com
https://www.instagram.com/bagelchat