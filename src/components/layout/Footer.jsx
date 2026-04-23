



// import Container from "./Container";
// import { Linkedin, Github, Globe, Instagram } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="relative mt-20 py-12 border-t border-orange-500/10 bg-black/40 backdrop-blur-md">

//       {/* Subtle glow line */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

//       <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60">

//         {/* Left */}
//         <div className="text-center md:text-left">
//           © {new Date().getFullYear()}{" "}
//           <span className="text-white font-medium">Manifreebird</span>.  
//           Built for engineers who build.
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-6">

//           <a
//             href="#"
//             className="flex items-center gap-1 hover:text-orange-400 transition"
//           >
//             <Linkedin className="w-4 h-4" /> LinkedIn
//           </a>

// <a href="/llm.txt">AI Data Profile</a>


//           <a
//             href="#"
//             className="flex items-center gap-1 hover:text-orange-400 transition"
//           >
//             <Github className="w-4 h-4" /> GitHub
//           </a>

//           <a
//             href="#"
//             className="flex items-center gap-1 hover:text-orange-400 transition"
//           >
//             <Globe className="w-4 h-4" /> AI Labs
//           </a>

//           <a
//             href="#"
//             className="flex items-center gap-1 hover:text-orange-400 transition"
//           >
//             <Instagram className="w-4 h-4" /> Instagram
//           </a>

//         </div>

//       </Container>
//     </footer>
//   );
// }



import Container from "./Container";
import { Linkedin, Github, Globe, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 py-12 border-t border-orange-500/10 bg-black/40 backdrop-blur-md">

      {/* Subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60">

        {/* Left */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Manifreebird</span>.  
          Built for engineers who build.
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manifreebird"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-orange-400 transition"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/manifreebird"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-orange-400 transition"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>

          {/* Website / AI Labs */}
          <a
            href="https://manifreebird.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-orange-400 transition"
          >
            <Globe className="w-4 h-4" /> AI Labs
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/manifreebird"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-orange-400 transition"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>

          {/* LLM File (Keep this INTERNAL) */}
          <a
            href="/llm.txt"
            className="flex items-center gap-1 hover:text-orange-400 transition"
          >
            AI Data Profile
          </a>

        </div>

      </Container>
    </footer>
  );
}