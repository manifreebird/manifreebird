

import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";
import { ArrowRight, Linkedin, Github, Globe, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <SectionWrapper className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">

          {/* Brand */}
          <p className="text-xs text-muted-foreground mb-4 tracking-wide">
            MANI • MANIFREEBIRD
          </p>

          {/* HEADLINE */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            I teach engineers to build with AI 
            <br />
            <span className="text-white">not just talk about it.</span>
          </h1>

          {/* SUB-HEADLINE (YOUR ORIGINAL BUT CLEANED) */}
          <p className="text-muted-foreground mt-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            I'm Mani — AI Trainer, Explorer & Builder behind Manifreebird. 
            I run hands-on AI workshops for engineering students across India, 
            covering LLMs, RAG, and agent-based systems — with every session 
            ending in real, deployable projects.
          </p>

          {/* IDENTITY PILLS */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-orange-500/20">
              🧠 AI Trainer
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-orange-500/20">
              🔭 AI Explorer
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-orange-500/20">
              🔧 AI Builder
            </span>
          </div>

          {/* SOCIAL LABEL (IMPORTANT TRUST SIGNAL) */}
          <p className="text-xs text-muted-foreground mt-8">
            Find me across the web →
          </p>

          {/* SOCIALS WITH LABELS (BIG UPGRADE) */}
          <div className="flex flex-wrap justify-center gap-5 mt-3 text-sm text-muted-foreground">
            <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1">
              <Globe className="w-4 h-4" /> AI Labs
            </a>
            <a href="#" target="_blank" className="hover:text-white transition flex items-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff6a00] text-white font-medium hover:bg-[#ff8c1a] transition shadow-lg hover:scale-105">
              Book a Workshop
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}

