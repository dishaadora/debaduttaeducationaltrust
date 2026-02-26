"use client";
import {quicksand} from "@/app/ui/fonts";
import ScrollText from "./SliderText";
import "./globals.css";

export default function AboutTrust() {
  return (
    <section className={`w-full bg-[#b7c1ca] mt-16 py-20 px-6 ${quicksand.className} border-2 border-b-amber-100`}>
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-7xl font-bold text-[#1f2a38]">
            Our Mission
          </h2>
          <p className="text-lg font-semibold text-gray-600 max-w-3xl mx-auto">
            <ScrollText text="We intend to work for the underprivileged communities in and around
            the radius of Semiliguda, Dist. Koraput serving multiple districts with dedication
            and purpose." className=""/>
          </p>
        </div>

        {/* District Coverage */}
        <div className="moonlight-bg rounded-3xl shadow-xl p-10">
          <h3 className="text-2xl font-semibold text-[#1f2a38] mb-6 text-center">
            Neighbouring Districts We Serve
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Malkangiri", "Umarkot", "Nabarangpur", "Rayagada"].map(
              (district, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff] py-6 rounded-2xl font-semibold text-[#1f2a38] shadow-md"
                >
                  {district}
                </div>
              )
            )}
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h3 className="text-2xl font-semibold text-[#1f2a38] mb-6 text-center">
            Our Focus Areas
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="moonlight-bg p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-black/70">Quality Education</h4>
              <p className="text-gray-600">
                Ensuring accessible and impactful education for underprivileged students.
              </p>
            </div>

            <div className="moonlight-bg p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-black/70">Sports Development</h4>
              <p className="text-gray-600">
                Encouraging physical growth and excellence through structured sports activities.
              </p>
            </div>

            <div className="moonlight-bg p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-black/70">Healthcare (Future Vision)</h4>
              <p className="text-gray-600">
                Expanding into quality healthcare services for underserved communities.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Initiatives */}
        <div className="bg-[#1f2a38] text-[#f0ecdd] rounded-3xl p-12 shadow-2xl space-y-6">
          <h3 className="text-3xl font-bold text-center">
            Academic Excellence Initiative
          </h3>

          <p className="text-center max-w-4xl mx-auto text-gray-300">
            The trust provides free coaching to meritorious and needy students
            preparing for national-level examinations such as <strong>JEE</strong> and <strong>NEET</strong>
            at the 10+2 level. To ensure quality education, expert faculties are recruited
            from across India.
          </p>
        </div>

        {/* Impact Numbers */}
        <div>
          <h3 className="text-2xl font-semibold text-[#1f2a38] mb-10 text-center">
            Our Impact in Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="moonlight-bg p-8 rounded-3xl shadow-xl">
              <p className="text-5xl font-bold text-[#1f2a38]">1,000+</p>
              <p className="text-gray-600 mt-3 font-semibold">Students Enrolled</p>
            </div>

            <div className="moonlight-bg p-8 rounded-3xl shadow-xl">
              <p className="text-5xl font-bold text-[#1f2a38]">25%</p>
              <p className="text-gray-600 mt-3 font-semibold">
                Students Receiving Free Education (RTE)
              </p>
            </div>

            <div className="moonlight-bg p-8 rounded-3xl shadow-xl">
              <p className="text-5xl font-bold text-[#1f2a38]">100+</p>
              <p className="text-gray-600 mt-3 font-semibold">
                Teaching & Non-Teaching Staff
              </p>
            </div>

            <div className="moonlight-bg p-8 rounded-3xl shadow-xl">
              <p className="text-5xl font-bold text-[#1f2a38]">2016</p>
              <p className="text-gray-600 mt-3 font-semibold">Year Established</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}