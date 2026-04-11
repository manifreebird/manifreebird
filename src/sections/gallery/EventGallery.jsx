


import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";

const images = Object.values(
  import.meta.glob("@/assets/manifreebirdpics/*.{jpg,png,jpeg}", {
    eager: true,
    import: "default",
  })
);

const eventContent = [
  {
    title: "From Zero to First AI App",
    subtitle: "Students built their first LLM-powered tool",
    desc: "Most walked in with zero AI experience — left with working apps.",
  },
  {
    title: "RAG System in 3 Hours",
    subtitle: "Understanding retrieval + real implementation",
    desc: "Students deployed their own knowledge-based AI systems.",
  },
  {
    title: "Agent-Based Workflows",
    subtitle: "Multi-step AI systems in action",
    desc: "They built agents that think, decide, and execute tasks.",
  },
  {
    title: "Prompting to Production",
    subtitle: "Beyond ChatGPT basics",
    desc: "Focused on turning prompts into usable AI features.",
  },
  {
    title: "Real Debugging Sessions",
    subtitle: "Fixing real AI issues live",
    desc: "Students learned what actually breaks — and how to fix it.",
  },
  {
    title: "Deployment Mindset",
    subtitle: "Not just building — shipping",
    desc: "Every project ended with something students could showcase.",
  },
  {
    title: "Live Collaboration",
    subtitle: "Students building together",
    desc: "Teams worked on real problems, not isolated tutorials.",
  },
  {
    title: "Fast-Paced Learning",
    subtitle: "No slow lectures",
    desc: "High-energy sessions focused on execution over theory.",
  },
  {
    title: "Confidence Shift",
    subtitle: "From confusion to clarity",
    desc: "Students stopped fearing AI and started using it.",
  },
];

export default function EventGallery() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Real Workshops. Real Students.
            </h2>
            <p className="text-white/60 mt-3 max-w-2xl mx-auto">
              Not slides — actual sessions where students build and ship AI systems.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => {
              const content = eventContent[index % eventContent.length];

              return (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt={`event-${index}`}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-4 space-y-1">
                    <p className="text-sm font-medium">
                      {content.title}
                    </p>
                    <p className="text-xs text-white/50">
                      {content.subtitle}
                    </p>
                    <p className="text-xs text-white/60">
                      {content.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}