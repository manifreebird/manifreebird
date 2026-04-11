



import { Outlet } from "react-router-dom";
import GlowBackground from "@/components/core/GlowBackground";
import useLenis from "@/hooks/useLenis";
import Navbar from './components/layout/Navbar'
import "./styles/globals.css"

export default function App() {
  useLenis(); 

  return (
    <div className="relative bg-black text-white min-h-screen">
      
      {/* <GlowBackground /> */}

      {/* Content ABOVE background */}
      <main className="relative z-10">
              <Navbar />

        <Outlet />
      </main>

    </div>
  );
}