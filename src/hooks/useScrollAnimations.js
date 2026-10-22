import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Each important visual group gets a one-time entrance as it reaches the viewport.
// Elements remain visible in normal CSS; the animation never starts at opacity: 0.
const REVEAL_SELECTOR = [
  '.fade-up',
  '.language-section-bottom',
  '.ticker-area',
  '.stories-section .testimonial-stage',
  '.stories-section .testimonial-caption',
  '.stories-section .story-controls',
  '.faq-section .faq-list .faq-item',
  '.site-footer .footer-script',
  '.site-footer .footer-tagline',
  '.site-footer .footer-links',
  '.site-footer .footer-signin',
  '.site-footer .footer-bottom',
].join(',');

const STAGGER_CARD_SELECTOR = '.mission-card, .how-card, .audience-card, .faq-item';

export function useScrollAnimations(scopeRef) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const revealTweens = [];
    const imageLoadHandlers = [];
    let refreshFrame = 0;

    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const context = gsap.context(() => {
      gsap.utils.toArray(REVEAL_SELECTOR, scope).forEach((element) => {
        const siblings = element.parentElement
          ? Array.from(element.parentElement.children).filter((child) =>
              child.matches(STAGGER_CARD_SELECTOR)
            )
          : [];
        const siblingIndex = siblings.length > 1 ? Math.max(0, siblings.indexOf(element)) : 0;
        const delay = Math.min(siblingIndex * 0.065, 0.2);

        ScrollTrigger.create({
          trigger: element,
          start: 'top 91%',
          once: true,
          onEnter: () => {
            // Small position/scale settle only. Never fade from transparent, which
            // keeps sections from blinking or appearing to load late while scrolling.
            const tween = gsap.fromTo(
              element,
              { y: 13, scale: 0.993 },
              {
                y: 0,
                scale: 1,
                duration: 0.68,
                delay,
                ease: 'power2.out',
                overwrite: 'auto',
                clearProps: 'transform',
              }
            );
            revealTweens.push(tween);
          },
        });
      });

      // Minimal ambient depth while scrolling away from the hero.
      const glow = scope.querySelector('.hero-glow');
      if (glow) {
        gsap.to(glow, {
          yPercent: 1.25,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // The footer's oversized lettering already follows the string with its own
      // per-letter CSS transforms, so it is intentionally not transform-animated.
    }, scope);

    if (document.readyState === 'complete') {
      refresh();
    } else {
      window.addEventListener('load', refresh, { once: true });
    }

    // Recalculate trigger positions as lazy images settle into their fixed frames.
    scope.querySelectorAll('img').forEach((image) => {
      if (image.complete) return;
      const handler = () => refresh();
      image.addEventListener('load', handler, { once: true });
      imageLoadHandlers.push([image, handler]);
    });

    return () => {
      window.removeEventListener('load', refresh);
      cancelAnimationFrame(refreshFrame);
      imageLoadHandlers.forEach(([image, handler]) => image.removeEventListener('load', handler));
      revealTweens.forEach((tween) => tween.kill());
      context.revert();
    };
  }, [scopeRef]);
}
