"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface RevealHeadingProps {
  text: string;
  className?: string;
}

export default function RevealHeading({ text, className }: RevealHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { autoAlpha: 0, yPercent: 100 },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
        stagger: {
            each: 0.02,
            from: "random",
        },
      }
    );
  }, []);

  return (
    <h2 ref={containerRef} className={`overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block opacity-0"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
