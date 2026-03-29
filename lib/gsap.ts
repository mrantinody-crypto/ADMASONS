"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin - must happen before any ScrollTrigger usage
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
