type GlowNodeProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-2 w-2",
  md: "h-3 w-3",
  lg: "h-4 w-4",
};

export default function GlowNode({
  className = "",
  size = "md",
}: GlowNodeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-[var(--foreground)] shadow-[0_0_20px_rgba(245,241,232,0.35)] ${sizeClasses[size]} ${className}`}
      aria-hidden
    />
  );
}
