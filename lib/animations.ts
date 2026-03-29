import { gsap, ScrollTrigger } from '@/lib/gsap';

export const animateHeadingReveal = (
  element: HTMLElement,
  spans: HTMLSpanElement[],
  trigger?: HTMLElement
) => {
  return gsap.fromTo(
    spans,
    { y: '100%' },
    {
      y: '0%',
      duration: 0.8,
      stagger: 0.06,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
      },
    }
  );
};

export const animateFadeUp = (
  elements: HTMLElement | HTMLElement[],
  trigger?: HTMLElement
) => {
  return gsap.fromTo(
    elements,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: trigger || (Array.isArray(elements) ? elements[0] : elements),
        start: 'top 90%',
      },
    }
  );
};

export const animateCardStagger = (
  cards: HTMLElement[],
  trigger?: HTMLElement
) => {
  return gsap.fromTo(
    cards,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || cards[0],
        start: 'top 85%',
      },
    }
  );
};

export const animateGoldLine = (
  element: HTMLElement,
  trigger?: HTMLElement
) => {
  return gsap.fromTo(
    element,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 0.8,
      ease: 'power2.inOut',
      transformOrigin: 'left',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
      },
    }
  );
};

export const animateCountUp = (
  element: HTMLElement,
  targetNumber: number,
  trigger?: HTMLElement
) => {
  return gsap.to(element, {
    textContent: targetNumber,
    snap: { textContent: 1 },
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 90%',
    },
  });
};
