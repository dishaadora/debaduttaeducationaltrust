"use client";
 import { useEffect, useRef } from "react";
 import gsap from "gsap";


 export default function ScrollSections(){
  const current = useRef<number>(0);
  const next = useRef<number>(0);
  const listening = useRef(true);
  const direction = useRef<"up" | "down">("down");


  const touch = useRef({
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    startTime: 0,
    dt: 0,
  });

  const tlDefaults = { duration: 1.25, ease:"power3.inOut"};

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    const outers = gsap.utils.toArray<HTMLElement>(".outer");
    const inners = gsap.utils.toArray<HTMLElement>(".inner");

    sections.forEach((section, i) => {
      if (i !== 0) {
        gsap.set(section, { autoAlpha: 0 });
        gsap.set(outers[i], { yPercent: 100 });
        gsap.set(inners[i], { yPercent: -100 });
      }
  });

//   useEffect(() => {
//     const sections = gsap.utils.toArray<HTMLElement>(".panel");
//     const outerWrappings = gsap.utils.toArray<HTMLElement>(".outer");
//     const innerWrappings = gsap.utils.toArray<HTMLElement>(".inner");

//     sections.forEach((section, i) => {
//       if (i !== 0) {
//         gsap.set(section, { autoAlpha: 0 });
//         gsap.set(outerWrappings[i], { yPercent: 100 });
//         gsap.set(innerWrappings[i], { yPercent: -100 });
//       }

//     function slideIn(){
//       if( current.current !== undefined){
//         gsap.set(sections[current.current], {zIndex:0});
//       }

//       gsap.set(sections[next.current] , {autoAlpha: 1, zIndex: 1});
//       const tl = gsap.timeline({
//         defaults: tlDefaults,
//         onComplete: () => {
//           listening.current = true;
//           current.current = next.current;
//         },
//       });

//       tl.to([outerWrappings[next.current], innerWrappings[next.current]], {
//         yPercent: 0,
//       })
//       if(current.current !== undefined){
//         tl.set(outerWrappings[current.current], { yPercent : -15 }, 0)
//         .set(innerWrappings[current.current], { yPercent: 100 })
//         .set(sections[current.current], {autoAlpha: 0});
//       }
//     }

//     function slideOut(){
//       gsap.set(sections[current.current!], {zIndex: 1});
//       gsap.set(sections[next.current], { autoAlpha: 1, zIndex:0 });

//       gsap.timeline({
//         defaults: tlDefaults,
//         onComplete: () => {
//           listening.current = true;
//           current.current = next.current;
//         },
//       })
//       .to(outerWrappings[current.current!], { yPercent: 100})
//       .to(innerWrappings[current.current!], { yPercent: -100 }, 0)
//     }

//     function handleDirection(){
//       listening.current = false;

//       if(direction.current === "down") {
//         next.current = (current.current ?? -1) + 1 >= sections.length 
//         ? 0
//         : (current.current ?? -1) + 1;
//         slideIn();
//       }
//       if(direction.current === "up"){
//         next.current = 
//         (current.current ?? sections.length) - 1 < 0
//         ? sections.length - 1
//         : (current.current ?? sections.length) -1;
//         slideOut();
//       }
//     }
//     function onWheel(e: WheelEvent){
//       if(!listening.current) return;
//       direction.current = e.deltaY > 0 ? "down" : "up";
//       handleDirection();
//     }
//     window.addEventListener("wheel", onWheel, { passive: false });

//     slideIn();

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//     };
//   }, []);
//   return null;
//  }
function slideIn() {
      if (current.current !== undefined) {
        gsap.set(sections[current.current], { zIndex: 0 });
      }

      gsap.set(sections[next.current], { autoAlpha: 1, zIndex: 1 });

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
            listening.current = true;
            current.current = next.current;
          }
        })
        .to([outers[next.current], inners[next.current]], {
          yPercent: 0,
        }, 0)
        .set(sections[current.current], { autoAlpha: 0 });
    }

    function slideOut() {
      gsap.set(sections[next.current], { autoAlpha: 1, zIndex: 0 });
      gsap.set(sections[current.current], { zIndex: 1 });

      gsap
        .timeline({
          defaults: tlDefaults,
          onComplete: () => {
            listening.current = true;
            current.current = next.current;
          },
        })
        .to(outers[current.current], { yPercent: 100 })
        .to(inners[current.current], { yPercent: -100 }, 0);
    }

    function handleDirection() {
      listening.current = false;

      if (direction.current === "down") {
        next.current = (current.current + 1) % sections.length;
        slideIn();
      } else {
        next.current =
          current.current - 1 < 0
            ? sections.length - 1
            : current.current - 1;
        slideOut();
      }
    }

    function onWheel(e: WheelEvent) {
      if (!listening.current) return;
      e.preventDefault();
      direction.current = e.deltaY > 0 ? "down" : "up";
      handleDirection();
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return null;
}