"use client";
import Image from "next/image";
import { quintessential , quicksand } from '@/app/ui/fonts';
import {meddon} from'@/app/ui/fonts';
import Trustees from "./Trustees";
import Objectives from "./Objectives";
import ScrollImage from "./SliderImage";
import { useEffect, useRef, useState } from "react";
import ScrollText from "./SliderText";
import RevealSection from "./RevealSection";
import BackgroundLines from "./BackgroundLines";
import RevealHeading from "./RevParallax";
import Certificates from "./Certificates";
import Donation from "./Donation";
import Gallery from "./Gallery";
import Tforms from "./Tforms";
import KeyObjectives from "./KeyObjectives";
import "./globals.css";
import AboutTrust from "./AboutTrust";
export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
    {/* <div className="fixed min-h-screen inset-10 bg-black -z-10"/> */}
    <main className="charcoal-bg">

      <section id="about" className="panel relative w-full h-screen will-change-transform flex items-center justify-center px-16 mx-12 charcoal-bg">
        {/* HERO */}
        <div className="outer">
          <div className="inner">
            <div className=" section-heading flex flex-col gap-6">
              <ScrollImage/>
              <div className="flex flex-col items-center gap-6 text-center -mt-40  text-white">
                <div className="z-20">
                  <RevealHeading text="Debadutta Educational Trust" className={`${quintessential.className} text-7xl text-white`}/>
                </div>
                <p className={`${quicksand.className} max-w-md text-lg leading-8 text-white`}>
                  Service to Mankind is Service to God.<br/> <span className={`${meddon.className} text-white`}>~ Swami Vivekananda</span>
                </p>
              </div>          
            </div>
          </div>
        </div>
      </section>
      <section className={`${quicksand.className}h-fit`}>
        <AboutTrust/>
      </section>
      {/* TRUSTEES */}
        <section id="trustees" className="panel min-h-screen">
          <div className="outer">
            <div className="inner">
              <div className="section-heading py-8 relative overflow-hidden bg-white/30 backdrop-blur-2xl z-10">
                <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover -z-10 opacity-90"
                >
                      <source src="/videos/trans-video.mp4" type="video/mp4" />
                </video>
                <div>
                    <h1 className={`${quicksand.className} text-8xl font-semibold flex justify-center items-center text-amber-100 gap-4`}>
                      <ScrollText text="Meet Our" className=""/> <ScrollText text="Trustees" className="text-8xl"/>
                    </h1>
                    <ScrollText text="The pillars of our trust, guiding us with their wisdom and dedication." className={`${quicksand.className} text-2xl text-neutral-200 flex justify-center mt-4`}/>
                    <div className="py-8 my-12 mx-16 px-8 rounded-2xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <Trustees image="/members/mrbd.png" name="Bhagaban Dora" role="Founder & Chairman" description="Founded Debadutta Educational Trust"/>
                        <Trustees image="/members/profilenotavailable.jpg" name="Pilla Padman Dora" role="Secretary" description="D'Mount Valley School"/>
                        <Trustees image="/members/profilenotavailable.jpg" name="Chittaranjan Mohanty" role="Treasurer" description="description to be written"/>
                        <Trustees image="/members/profilenotavailable.jpg" name="Prasanta Kumar Dora" role="Trustee" description="description to be written"/>
                        <Trustees image="/members/profilenotavailable.jpg" name="Alekh Chandra Dora" role="Trustee" description="description to be written"/>
                        <Trustees image="/members/profilenotavailable.jpg" name="Smitu Rani Nayak" role="Trustee" description="Software Engineer at TCS"/>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* ACTIVITIES */}
        <section id="activities" className="h-fit">
          <div className="outer">
            <div className="inner">
              <div className="section-heading relative z-10 turquiose-bg border-3 border-amber-100">
                <h1 className={`${quicksand.className} font-semibold py-8 flex justify-center items-center gap-4 border-b-3 border-b-amber-100 text-amber-100 shadow-bottom`}>
                  <ScrollText text="ACTIVITIES" className="text-6xl"/>
                </h1>
                <div className="flex flex-row items-center justify-center">
                    <div className="">
                      <i className="fa-solid fa-quote-left fa-xl pl-20 pb-1 text-amber-100"></i>
                      <div className="px-16 h-fit">
                        {/* <ScrollText text="They are the step-stones that guide us towards brilliance." className={`${quicksand.className} text-3xl font-semibold text-blue-950`}/><br/>
                        <ScrollText text="Take a look at our moto which will help you understand what we do and why we do it" className=/> */}
                        <p className={`${quicksand.className} text-2xl text-center font-semibold text-white`}>
                          The main objective is to respond to the needs of a rapidly<br/> growing business and education
                          sector in India <br/> by producing the quality and quantity<br/> of educated people sufficiently
                          equipped<br/> with the requisite knowledge to solve the <br/> society’s problems in order to meet<br/> the
                          challenges of development and attain competitiveness at regional and global at large at
                          affordable costs.
                        </p>
                      </div>
                      <i className="fa-solid fa-quote-right fa-xl ml-190 text-amber-100"></i>
                    </div>
                  <Objectives/>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* OBJECTIVES */}
        <section id="objectives">
          <KeyObjectives/>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="min-h-screen">
          <Gallery />
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="frostblue-bg flex flex-col items-center justify-center">
          <div className={`flex items-start ${quicksand.className} text-8xl font-semibold text-amber-100 w-full mb-12 pl-12`}>
            <p>Browse through our documents....</p>
          </div>
          <Certificates/>
        </section>

        {/* contact us */}
        <section id="contact" className="mt-12">
          <Tforms/>
        </section>

        {/* DONATION */}
        <section id="donate">
          <Donation/>
        </section>
    </main>
    </>
  );
}
