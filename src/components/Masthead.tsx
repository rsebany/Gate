import { useLanguage } from '../context/LanguageContext'
import { usePortfolio } from '../hooks/usePortfolio'
import { IconEmail, IconGitHub, IconLinkedIn, IconPhone } from './icons'

function formatToday(lang: string): string {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
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
  linkedin: IconLinkedIn,
} as const

function isExternalLink(href: string): boolean {
  return href.startsWith('http')
}

export function Masthead() {
  const { masthead, socials } = usePortfolio()
  const { lang, setLang } = useLanguage()

  return (
    <header className="border-b border-ink">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/20 px-1 py-2 font-sans text-[11px] uppercase tracking-widest text-ink/80 md:text-xs">
        <span>
          {masthead.volume} · {masthead.city}
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <time dateTime={new Date().toISOString()}>{formatToday(lang)}</time>
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="border border-ink bg-ink/10 px-3 py-1 font-sans text-[11px] uppercase tracking-widest text-ink transition hover:bg-ink/20"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
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

      <div className="px-2 py-8 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          {masthead.nameDisplay}
        </h1>
      </div>
    </header>
  )
}
