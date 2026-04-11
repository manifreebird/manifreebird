





import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";
import { Linkedin, Github, Globe, Instagram, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Bring AI to your campus — the hands-on way
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Got a batch of students? Let’s build something real together.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">

            <form className="space-y-5">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              {/* College */}
              <input
                type="text"
                placeholder="College / Organisation"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              {/* Role */}
              <select
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <option value="">Your Role</option>
                <option>Student</option>
                <option>Faculty</option>
                <option>Tech Club Lead</option>
                <option>Other</option>
              </select>

              {/* Need */}
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              {/* CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition"
              >
                Let’s talk AI
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>

          {/* Secondary CTA (VERY IMPORTANT) */}
          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground mb-4">
              Not ready to book yet? Follow the journey.
            </p>

            <div className="flex justify-center gap-5 text-muted-foreground">
              <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1 text-sm">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1 text-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1 text-sm">
                <Globe className="w-4 h-4" /> AI Labs
              </a>
              <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1 text-sm">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}






