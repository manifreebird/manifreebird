export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`py-20 relative ${className}`}>
      {children}
    </section>
  );
}