export default function Label({ children }) {
  return (
    <label className="text-sm text-white/70 mb-1 block">
      {children}
    </label>
  );
}