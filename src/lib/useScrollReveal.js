"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (
  animationProps = {},
  triggerStart = "top 80%"
) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        ...animationProps,

        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [animationProps, triggerStart]);

  return ref;
};
