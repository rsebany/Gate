import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { IconEmail, IconGitHub, IconPhone } from './icons'

function formatToday(): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date())
}

const iconMap = {
  email: IconEmail,
  github: IconGitHub,
  phone: IconPhone,
} as const

function isExternalLink(href: string): boolean {
  return href.startsWith('http')
}

export function Masthead() {
  const reduced = usePrefersReducedMotion()
  const { masthead, socials } = portfolio

  return (
    <header className="border-b border-ink">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/20 px-1 py-2 font-sans text-[11px] uppercase tracking-widest text-ink/80 md:text-xs">
        <span>
          {masthead.volume} · {masthead.city}
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <time dateTime={new Date().toISOString()}>{formatToday()}</time>
          <a
            href="#connect"
            className="border border-ink bg-ink/10 px-3 py-1 text-ink transition hover:bg-ink/20"
          >
            {masthead.availableCta}
          </a>
        </div>
      </div>

      <nav
        className="flex justify-center gap-6 border-b border-dotted border-ink/30 py-3"
        aria-label="Social links"
      >
        {socials.map((s) => {
          const Icon = iconMap[s.icon]
          return (
            <a
              key={s.label}
              href={s.href}
              {...(isExternalLink(s.href)
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              className="flex items-center gap-1.5 font-sans text-xs text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
            >
              <Icon className="h-4 w-4" />
              {s.label}
            </a>
          )
        })}
      </nav>

      <motion.div
        className="px-2 py-8 text-center"
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          {masthead.nameDisplay}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-ink md:w-24" aria-hidden />
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-ink md:text-base">
            {masthead.subtitle}
          </p>
          <span className="h-px w-12 bg-ink md:w-24" aria-hidden />
        </div>
      </motion.div>
    </header>
  )
}
