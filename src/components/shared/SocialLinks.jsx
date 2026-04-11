import { Github, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 text-white/60">
      <a href="#" className="hover:text-white transition">
        <Linkedin size={18} />
      </a>
      <a href="#" className="hover:text-white transition">
        <Github size={18} />
      </a>
      <a href="#" className="hover:text-white transition">
        <Instagram size={18} />
      </a>
    </div>
  );
}