



import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-orange-500/10">
      
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-semibold text-lg tracking-tight hover:text-orange-400 transition"
          >
            Manifreebird
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <Link
              to="/about"
              className="hover:text-orange-400 transition"
            >
              About
            </Link>
            <Link
              to="/events"
              className="hover:text-orange-400 transition"
            >
              Events
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-orange-400 transition"
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium bg-[#ff6a00] text-white hover:bg-[#ff8c1a] transition shadow-md hover:scale-[1.05]"
          >
            Book a Workshop
          </Link>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-orange-500/20 hover:border-orange-400/40 hover:bg-orange-500/10 transition group">
            <Menu
              size={24}
              className="stroke-orange-500 group-hover:scale-110 transition-transform"
            />
          </button>

        </div>
      </Container>

    </nav>
  );
}