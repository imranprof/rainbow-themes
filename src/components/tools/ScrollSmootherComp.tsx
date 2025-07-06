"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherComponent = () => {
  const pathname = usePathname();

  useGSAP(() => {
    const deviceWidth = window.innerWidth;
    const smootherExists = ScrollSmoother.get();

    if (!smootherExists && deviceWidth >= 1025) {
      try {
        ScrollSmoother.create({
          smooth: 1,
          effects: true,
          normalizeScroll: true,
          ignoreMobileResize: true,
          smoothTouch: false,
        });
      } catch (e) {
        console.warn("ScrollSmoother init failed:", e);
      }
    }
  }, []);

  return <div></div>;
};

export default ScrollSmootherComponent;
