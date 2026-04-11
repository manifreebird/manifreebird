

import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";

export default function Stats() {
  const stats = [
    {
      value: "1000+",
      label: "Students Trained",
      desc: "Across workshops, bootcamps & college sessions",
    },
    {
      value: "20+",
      label: "Live Sessions Delivered",
      desc: "In-person and hybrid — real rooms, real students",
    },
    {
      value: "5 hrs",
      label: "Average Session Depth",
      desc: "Full-day immersions, not short webinars",
    },
    {
      value: "3",
      label: "Core AI Tracks",
      desc: "LLMs · RAG · Agents — built, not just taught",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Emotional Framing */}
          <div className="text-center mb-12">
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
              The numbers aren’t the point — the students who now know how to build are.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-orange-500/10 hover:border-orange-400/40 transition text-center overflow-hidden"
              >

                {/* 🔥 Subtle Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-500/10 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">
                    {item.value}
                  </p>

                  <p className="font-medium text-sm text-white">
                    {item.label}
                  </p>

                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}

