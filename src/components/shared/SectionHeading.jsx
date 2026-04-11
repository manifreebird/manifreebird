export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="max-w-2xl mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/60 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}