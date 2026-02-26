"use client";

import { useEffect, useState } from "react";

export default function Parallax({
  children,
  speed = 0.3,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div
      style={{ transform: `translateY(${offset}px)` }}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}
