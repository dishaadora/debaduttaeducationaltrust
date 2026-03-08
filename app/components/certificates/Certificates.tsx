"use client";
import { useState } from "react";
import { quicksand } from "../../ui/fonts";
export default function Certificates(){
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const pdfFiles = [
      "/certificates/pdf-01.pdf",
      "/certificates/pdf-02-csr.pdf",
      "/certificates/pdf-03-12A-certificate.pdf",
      "/certificates/pdf-04-e-anudaan.pdf",
    ];
    
      return (
        <div className="parent-div flex sm:flex-col lg:flex-row min-h-screen gap-8 items-center justify-center w-full overflow-hidden frostblue-bg">
      
      {/* LEFT: stacked certificates */}
      <div className="leftContainer h-screen w-full flex justify-center items-center rounded-2xl moonlight-bg lg:w-1/2 p-6 sm:p-10 lg:p-16 border-8 border-[#465c78]">
        
      <div className="relative w-full max-w-[520px] h-[300px] sm:h-[350px] md:h-[400px]">
        <div
          className="absolute top-0 z-20 hover:-translate-y-2 transition border-4 border-[#465c78] rounded-xl cursor-pointer shadow-2xl"
          onClick={() => setActiveIndex(0)}
        >
          <iframe
            src="/certificates/pdf-01.pdf#toolbar=0"
            className="w-[500px] h-[350px] sm:h-[250px] md:h-[300px] rounded-xl shadow-xl cert-one pointer-events-none"
            title="certificate-1"
          />
        </div>

        <div className="absolute top-12 z-30 hover:-translate-y-2 transition border-4 border-[#465c78] rounded-xl  shadow-2xl" onClick={()=>setActiveIndex(1)}>
          <iframe
            src="/certificates/pdf-02-csr.pdf#toolbar=0"
            className="w-[500px] h-[350px] sm:h-[250px] md:h-[300px] rounded-xl shadow-xl cert-two pointer-events-none"
            title="certificate-2"
          />
        </div>

        <div className="absolute top-24 z-40 hover:-translate-y-2 transition border-4 border-[#465c78] rounded-xl shadow-2xl" onClick={()=>setActiveIndex(2)}>
          <iframe
            src="/certificates/pdf-03-12A-certificate.pdf#toolbar=0"
            className="w-[500px] h-[350px] sm:h-[250px] md:h-[300px] rounded-xl shadow-xl bg-white pointer-events-none"
            title="certificate-3"
          />
        </div>

        <div className="absolute top-36 z-40 hover:-translate-y-2 transition border-4 border-[#465c78] rounded-xl shadow-2xl" onClick={()=>setActiveIndex(3)}>
          <iframe 
          src="/certificates/pdf-04-e-anudaan.pdf#toolbar=0" 
          className="w-[500px] h-[350px] sm:h-[250px] md:h-[300px] rounded-xl shadow-xl pointer-events-none"
          title="certificate-3"
          />
        </div>

      </div>
      </div>
      

      {/* RIGHT: selected certificate */}
      <div className="rightCont w-full lg:w-1/2 flex items-center justify-center min-h-screen frostblue-bg">
        <div className="relative w-full max-w-[900px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-xl px-4 border-4 border-neutral-200 overflow-hidden shadow-2xl shadow-neutral-800 bg-[#465c78]">
            {activeIndex !== null ? (
              <iframe
                src={`${pdfFiles[activeIndex]}#toolbar=0&view=FitH`}
                className="w-full h-full rounded-lg"
                title="Selected certificate"
              />
            ) : (
            <div className={`${quicksand.className} flex justify-center items-center h-full text-amber-100 text-xl font-semibold`}>
                <p>click on a document</p>
            </div>
            )}
        </div>
        </div>
      </div>
    );
}