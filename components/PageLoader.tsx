"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasLoaded = sessionStorage.getItem('admasons-loaded');
    if (hasLoaded) {
      setShouldShow(false);
      return;
    }

    const loader = loaderRef.current;
    const logo = logoRef.current;
    if (!loader || !logo) return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('admasons-loaded', 'true');
        setShouldShow(false);
      }
    });

    tl.fromTo(logo, 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
    .to({}, { duration: 0.4 })
    .to(loader, {
      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
      duration: 0.8,
      ease: 'power4.inOut'
    });

    return () => {
      tl.kill();
    };
  }, []);

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
