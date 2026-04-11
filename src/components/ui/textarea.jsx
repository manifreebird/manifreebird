import { cn } from "@/lib/utils";

export default function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl px-4 py-3 bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20",
        className
      )}
      rows={4}
      {...props}
    />
  );
}