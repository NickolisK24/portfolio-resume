export function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pulse inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] ${className}`}
    />
  );
}
