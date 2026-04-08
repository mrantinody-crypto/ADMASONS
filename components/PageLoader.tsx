"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import Image from 'next/image';

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  // Start false — server renders nothing, avoiding hydration mismatch
  const [shouldShow, setShouldShow] = useState(false);

  // Effect 1: client-only check — never runs on server
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('admasons-loaded');
    if (!hasLoaded) setShouldShow(true);
  }, []);

  // Effect 2: run animation only after loader DOM is actually mounted
  useEffect(() => {
    if (!shouldShow) return;
    const loader = loaderRef.current;
    const logo = logoRef.current;
    if (!loader || !logo) return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('admasons-loaded', 'true');
        setShouldShow(false);
      },
    });

    tl.fromTo(logo,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.15, ease: 'power2.out' }
    )
    .to({}, { duration: 0.1 })
    .to(loader, {
      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
      duration: 0.45,
      ease: 'power4.inOut',
    });

    return () => { tl.kill(); };
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <div ref={loaderRef} className="page-loader">
      <div ref={logoRef}>
        <Image 
          src="/admasons-logo.png" 
          alt="The AdMasons" 
          width={180} 
          height={50}
          priority
        />
      </div>
    </div>
  );
}
