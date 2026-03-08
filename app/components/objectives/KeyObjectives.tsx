"use client";
import { quicksand } from "../../ui/fonts";

export default function KeyObjectives() {
  const objectives = [
    "Promote quality education from pre-primary to senior secondary levels in arts, science, commerce, sports, and health.",
    "Encourage literacy and social awareness through seminars, competitions, exhibitions, and cultural programs.",
    "Establish and maintain libraries, reading rooms, community halls, and welfare infrastructure.",
    "Collaborate with institutions sharing similar goals for educational and holistic development.",
    "Establish institutions for religious knowledge and community welfare.",
    "Accept donations and responsibly manage funds to sustain Trust activities.",
    "Employ qualified professionals and staff to effectively run Trust operations.",
    "Form committees for structured governance and activity management.",
    "Acquire land and develop infrastructure aligned with the Trust’s mission.",
    "Promote indoor and outdoor sports for student development.",
    "Operate purely with a service motive and not for profit."
  ];

  return (
    <section className={`w-full charcoal-bg py-20 px-6 ${quicksand.className}`}>
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0ecdd]">
            Key Objectives
          </h2>
          <p className="text-[#f0ecdd] font-semibold mt-4 max-w-3xl mx-auto">
            The Trust is committed to social welfare, education, and holistic
            development through structured initiatives and community service.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-[#f4f9fe] p-6 rounded-2xl font-semibold shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#1f2a38] text-white font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
