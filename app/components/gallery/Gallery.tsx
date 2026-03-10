import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger} from "gsap/all";
import ScrollText from "../../ui/SliderText";
import Image from "next/image";
import {quicksand} from '@/app/ui/fonts';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery(){
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        
            const cards = gsap.utils.toArray<HTMLElement>(".card");
            const spacer = 40;
            const minScale = 0.8;

            const distributor = gsap.utils.distribute({
                base: minScale,
                amount: 0.2
            });

            cards.forEach((card,index) => {
                const scaleVal = distributor(index, card, cards);
                // this is for scaling the cards as they scroll
                gsap.to(card, {
                    scale: scaleVal,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                // pinning each card
                ScrollTrigger.create({
                    trigger: card,
                    start: `top-=${index * spacer} top`,
                    endTrigger: containerRef.current!,
                    end: `bottom top+=${200 + cards.length * spacer}`,
                    pin: true,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                });
            });
    },
    { scope: containerRef }
);
    return(
        <>
        <div className="mt-44 p-10 flex flex-col items-center justify-center bg-linear-to-b from-[#233d4d] via-[#f0ecdd] via-30% to-[#8ba3c5]">
            <ScrollText text="Look around the things we've done so far ..." className={`${quicksand.className} mb-20 sm:text-3xl md:text-5xl lg:text-6xl text-[#eaebbd] font-semibold flex justify-center`}/>
            <div ref={containerRef} className="container mx-auto flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="cards relative max-w-[900px] mx-auto">
                    <div className="card card-style">1
                        <Image src="/gallerypics/screenshot-01.png" fill alt="Gallery Image 1" className="rounded-3xl" />
                    </div>
                    <div className="card card-style">2
                        <Image src="/gallerypics/screenshot-02.png" fill alt="Gallery Image 2" className="rounded-3xl" />
                    </div>
                    <div className="card card-style">3
                        <Image src="/gallerypics/screenshot-03.png" fill alt="Gallery Image 3" className="rounded-3xl" />

                    </div>
                    <div className="card card-style">4
                        <Image src="/gallerypics/screenshot-01.png" fill alt="Gallery Image 4" className="rounded-3xl" />
                    </div>
                    <div className="card card-style">5
                        <Image src="/gallerypics/screenshot-02.png" fill alt="Gallery Image 1" className="rounded-3xl" />

                    </div>
                </div>
            </div>
            <div className="container2 pt-40 w-full h-[50vh]"></div>
        </div>
        </>
    );
}