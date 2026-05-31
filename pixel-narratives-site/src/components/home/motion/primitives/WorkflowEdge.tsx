type WorkflowEdgeProps = {
  className?: string;
  progress?: number;
};

export default function WorkflowEdge({
  className = "",
  progress = 1,
}: WorkflowEdgeProps) {
  return (
    <span
      className={`block h-px origin-left bg-gradient-to-r from-white/5 via-white/40 to-white/5 ${className}`}
      style={{ transform: `scaleX(${Math.max(0, Math.min(1, progress))})` }}
      aria-hidden
    />
  );
}
