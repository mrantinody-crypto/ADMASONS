"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  // mounted gate: prevents server/client DOM mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if ('ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!dot || !ring || !text) return;

    const xSetDot = gsap.quickSetter(dot, 'x', 'px');
    const ySetDot = gsap.quickSetter(dot, 'y', 'px');
    const xSetRing = gsap.quickTo(ring, 'x', { duration: 0.15, ease: 'power3' });
    const ySetRing = gsap.quickTo(ring, 'y', { duration: 0.15, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      xSetDot(e.clientX);
      ySetDot(e.clientY);
      xSetRing(e.clientX);
      ySetRing(e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.dataset.cursor || target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (cursorType === 'expand') {
        ring.classList.add('expanded');
        text.textContent = '';
      } else if (cursorType === 'cta') {
        ring.classList.add('expanded');
        ring.style.background = 'rgba(245, 197, 24, 0.2)';
        text.textContent = '';
      } else if (cursorType === 'view') {
        ring.classList.add('expanded');
        text.textContent = 'VIEW';
      }
    };

    const handleMouseLeave = () => {
      ring.classList.remove('expanded');
      ring.style.background = '';
      text.textContent = '';
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('[data-cursor]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('[data-cursor]');
      newElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter as EventListener);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  // Never render on server — eliminates hydration mismatch
  if (!mounted || isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <span ref={textRef} className="cursor-text"></span>
      </div>
    </>
  );
}
