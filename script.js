document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Navigation Scroll State
  const nav = document.querySelector('.nav');
  const updateNav = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // Init on load

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.nav__mobile-toggle');
  const navLinks = document.querySelector('.nav__links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Run once
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // Handle elements already in viewport on load
  setTimeout(() => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible');
      }
    });
  }, 100);
});