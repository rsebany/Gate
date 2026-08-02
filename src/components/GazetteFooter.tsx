import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

function formatTs(d: Date): string {
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  const s = String(d.getSeconds()).padStart(2, '0')
  return `${h} ${m} ${s}`
}

export function GazetteFooter() {
  const [now, setNow] = useState(() => new Date())
  const year = now.getFullYear()

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const { footer } = portfolio

  return (
    <footer className="mt-12 border-t-2 border-ink pt-6 font-sans text-[10px] uppercase tracking-widest text-ink/70 md:text-xs">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>{footer.printed}</p>
        <p className="text-center">
          © {year} {footer.copyrightName}. All rights reserved.
        </p>
        <p className="text-right tabular-nums" aria-live="polite">
          TS: {formatTs(now)}
        </p>
      </div>
    </footer>
  )
}
