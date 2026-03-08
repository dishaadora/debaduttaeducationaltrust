// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import "./globals.css";

// export default function ScrollImage() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="fixed inset-0 overflow-hidden mt-8 pointer-events-none -z-10 flex justify-center">
//       <div
//         ref={ref}
//         className={`
//           absolute -bottom-16 left-72
//           transition-all duration-700 ease-out radial-butter-charcoal-glow
//           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//         `}
//       >
//         <Image
//           src="/rome-prev.png"
//           alt="Rome"
//           width={900}
//           height={900}
//           className="max-w-[90vw] h-auto"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollImage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 flex items-end justify-center overflow-hidden">
      <div
        ref={ref}
        className={`
          relative
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <Image
          src="/rome-prev.png"
          alt="Rome"
          width={1200}
          height={1200}
          className="w-[80vw] max-w-[800px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}