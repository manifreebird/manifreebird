import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black px-5 py-2.5 hover:scale-[1.05]",
    ghost:
      "text-white/70 hover:text-white px-4 py-2",
    outline:
      "border border-white/[0.1] text-white px-4 py-2 hover:bg-white/[0.05]",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}