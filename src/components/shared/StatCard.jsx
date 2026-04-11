import GlassCard from "../core/GlassCard";

export default function StatCard({ number, label, description }) {
  return (
    <GlassCard className="text-center">
      <div className="text-2xl md:text-3xl font-semibold text-white">
        {number}
      </div>

      <div className="mt-2 text-sm text-white/70">
        {label}
      </div>

      {description && (
        <p className="mt-2 text-xs text-white/50">
          {description}
        </p>
      )}
    </GlassCard>
  );
}