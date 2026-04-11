export default function TagPill({ children }) {
  return (
    <div className="
      px-4 py-1.5
      rounded-full
      text-xs
      bg-white/[0.06]
      border border-white/[0.08]
      text-white/80
      backdrop-blur-md
    ">
      {children}
    </div>
  );
}