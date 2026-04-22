





// import SectionWrapper from "@/components/core/SectionWrapper";
// import Container from "@/components/layout/Container";
// import { CheckCircle } from "lucide-react";
// import aboutImg from "@/assets/maniabout/manifreebirdabout.jpg";

// export default function About() {
//   return (
//     <SectionWrapper>
//       <Container>
//         <div className="max-w-6xl mx-auto">

//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
//               About Me
//             </h2>
//             <p className="text-white/60 mt-3 max-w-2xl mx-auto">
//               Not here to impress you with jargon — here to help students actually build.
//             </p>
//           </div>

//           {/* Content */}
//           <div className="grid md:grid-cols-2 gap-16 items-center">

//             {/* LEFT → IMAGE */}
//             <div className="flex justify-center md:justify-start">
//               <div className="relative group">

//                 {/* 🔥 ORANGE GLOW */}
//                 <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl opacity-40 group-hover:opacity-70 transition" />

//                 {/* Image */}
//                 <div className="relative w-[260px] md:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden border border-orange-500/10 bg-white/5 shadow-2xl">
//                   <img
//                     src={aboutImg}
//                     alt="Mani"
//                     className="w-full h-[340px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//               </div>
//             </div>

//             {/* RIGHT → CONTENT */}
//             <div className="space-y-6 text-center md:text-left">

//               <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
//                 I teach engineers how to actually build AI systems — not just understand them
//               </h3>

//               <p className="text-white/60 leading-relaxed">
//                 I’m Mani — AI Trainer, Explorer & Builder behind Manifreebird.
//                 I work with engineering students across India, helping them go from
//                 “I’ve heard of AI” to “I’ve built something real.”
//               </p>

//               <p className="text-white/60 leading-relaxed">
//                 My sessions are hands-on, fast-paced, and focused on outcomes.
//                 Students don’t just sit through slides — they build working AI
//                 systems using LLMs, RAG pipelines, and agent-based tools.
//               </p>

//               <p className="text-white/60 leading-relaxed">
//                 The goal is simple: when someone leaves a session, they should
//                 have something they can show, deploy, or talk about confidently.
//               </p>

//               {/* Highlights */}
//               <div className="space-y-3 pt-4">
//                 <div className="flex items-center gap-3 justify-center md:justify-start">
//                   <CheckCircle className="w-5 h-5 text-orange-400" />
//                   <span>Hands-on AI workshops (LLMs, RAG, Agents)</span>
//                 </div>

//                 <div className="flex items-center gap-3 justify-center md:justify-start">
//                   <CheckCircle className="w-5 h-5 text-orange-400" />
//                   <span>Students build real, deployable projects</span>
//                 </div>

//                 <div className="flex items-center gap-3 justify-center md:justify-start">
//                   <CheckCircle className="w-5 h-5 text-orange-400" />
//                   <span>Focused on outcomes, not just concepts</span>
//                 </div>
//               </div>

//               {/* Quote */}
//               <div className="pt-6">
//                 <p className="text-sm text-white/50 italic">
//                   “AI is not something you learn by watching — it’s something you understand by building.”
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }







import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/maniabout/manifreebirdabout.jpg";

export default function About() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>
            <p className="text-orange-400 mt-3 font-medium">
              AI Trainer who has trained 1000+ students across India
            </p>
            <p className="text-white/60 mt-2 max-w-2xl mx-auto">
              Not here to impress you with jargon — here to help students actually build.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT → IMAGE */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">

                {/* ORANGE GLOW */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-2xl opacity-40 group-hover:opacity-70 transition" />

                {/* Image */}
                <div className="relative w-[260px] md:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden border border-orange-500/10 bg-white/5 shadow-2xl">
                  <img
                    src={aboutImg}
                    alt="Manikanta Shakamuri"
                    className="w-full h-[340px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT → CONTENT */}
            <div className="space-y-6 text-center md:text-left">

              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                I help engineers go from zero to building real AI systems
              </h3>

              <p className="text-white/60 leading-relaxed">
                I’m Manikanta Shakamuri — AI Trainer, Builder & Explorer behind Manifreebird.
                I’ve trained 1000+ engineering students across India, helping them move from
                “I’ve heard of AI” to actually building real-world applications.
              </p>

              <p className="text-white/60 leading-relaxed">
                My workshops are hands-on, fast-paced, and focused on execution.
                No passive learning — every student builds working AI systems using
                LLMs, RAG pipelines, and agent-based architectures.
              </p>

              <p className="text-white/60 leading-relaxed">
                The goal is simple: by the end of a session, students should have
                something real — a project they can deploy, showcase, or confidently
                talk about in interviews.
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>1000+ students trained across India</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Hands-on AI workshops (LLMs, RAG, Agents)</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Real, deployable AI projects built during sessions</span>
                </div>

                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Focused on outcomes, not just theory</span>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-6">
                <p className="text-sm text-white/50 italic">
                  “AI is not something you learn by watching — it’s something you understand by building.”
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}