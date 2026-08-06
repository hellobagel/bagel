/**
 * Bagel — Landing Page
 * Vanilla JS only. No dependencies.
 * GPU-accelerated animations via Intersection Observer.
 */

(function () {
  'use strict';

  /* ── NAV scroll state ──────────────────────────────────── */
  const nav = document.querySelector('.nav');

  function updateNav() {
    if (window.scrollY > 32) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Reveal on scroll ──────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve after reveal — no need to re-trigger
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ── Words section — stagger reveal ────────────────────── */
  // Words use .reveal already but we also
  // want a slight parallax-style opacity shift on scroll
  const wordEls = document.querySelectorAll('.words__word');

  if (wordEls.length) {
    const wordsSection = document.querySelector('.words');

    const wordObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger words
            wordEls.forEach((word, i) => {
              setTimeout(() => {
                word.classList.add('is-visible');
              }, i * 140);
            });
            wordObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (wordsSection) wordObserver.observe(wordsSection);
  }

  /* ── Smooth scroll for anchor links ────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Subtle ring glow on mouse move (hero only) ─────────── */
  const heroSection = document.querySelector('.hero');
  const ringSvg = document.querySelector('.ring-svg');

  if (heroSection && ringSvg) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect   = heroSection.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / rect.width;
      const dy     = (e.clientY - cy) / rect.height;
      const dist   = Math.sqrt(dx * dx + dy * dy);
      const scale  = 1 + dist * 0.03;
      const rotate = dx * 4;

      ringSvg.style.transform =
        `scale(${scale}) rotate(${rotate}deg)`;
      ringSvg.style.transition = 'transform 600ms cubic-bezier(0.16,1,0.3,1)';
    });

    heroSection.addEventListener('mouseleave', () => {
      ringSvg.style.transform = '';
    });
  }

  /* ── Trigger initial reveals for above-the-fold ────────── */
  // Elements visible on page load won't be caught by scroll
  window.addEventListener('load', () => {
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible');
      }
    });
  });

})();