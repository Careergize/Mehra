import { useEffect } from 'react';

export default function useSalonMotion(page) {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    const targets = [...document.querySelectorAll('.section-top, .service-card, .bridal-photo, .bridal-copy, .look-card, .contact-inner > div, .faq-section > .section-tag, .faq-item, .reviews-heading, .reviews-carousel, .studio-footer-top, .studio-footer-address, .studio-footer-bottom, .contact-page-intro, .contact-info-card, .contact-visit')];
    const reset = () => {
      observer?.disconnect();
      targets.forEach(node => {
        node.classList.remove('motion-ready', 'motion-visible');
        node.style.removeProperty('--reveal-delay');
      });
    };
    const setup = () => {
      reset();
      if (preference.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      targets.forEach(node => {
        const siblings = [...node.parentElement.children].filter(child => child.matches('.service-card, .look-card, .faq-item'));
        const index = Math.max(0, siblings.indexOf(node));
        node.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 75}ms`);
        node.classList.add('motion-ready');
        observer.observe(node);
      });
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { reset(); preference.removeEventListener('change', setup); };
  }, [page]);
}
