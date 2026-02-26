"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type ScrollTextProps = {
  text: string;
  className?: string;
};

export default function ScrollList({ text, className = "" }: ScrollTextProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(textRef.current, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%"
      }
    });
  }, []);

  return (
    <span ref={textRef} className={`will-change-transform ${className}`}> 
      {text}
    </span>
  );
}
