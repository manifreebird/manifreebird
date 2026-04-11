export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/[0.04]
        border border-white/[0.08]
        backdrop-blur-md
        rounded-2xl
        p-6
        transition-all duration-300
        hover:bg-white/[0.06]
        hover:border-white/[0.12]
        hover:scale-[1.02]
        ${className}
      `}
    >
      {children}
    </div>
  );
}