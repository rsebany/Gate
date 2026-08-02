import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function ScannerSweep() {
  const reduced = usePrefersReducedMotion()
  if (reduced) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
      aria-hidden
    >
      <div className="animate-scanner-sweep absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-ink/[0.05] to-transparent" />
    </div>
  )
}
