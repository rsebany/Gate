import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function HonorsAndAwards() {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.section
      className="border-b border-ink py-8"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reduced ? 0 : 0.5 }}
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b-2 border-ink pb-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          HONORS & DISTINCTIONS
        </h2>
        <span className="font-sans text-xs uppercase tracking-widest text-ink/60">
          Awards
        </span>
      </div>

      <ul className="space-y-0">
        {portfolio.honors.map((honor, index) => (
          <li key={honor.id}>
            {index > 0 && (
              <div
                className="my-6 border-t border-dotted border-ink/50"
                aria-hidden
              />
            )}
            <div className="grid gap-4 md:grid-cols-[minmax(0,180px)_1fr]">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink/80">
                {honor.date}
              </p>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {honor.title}
                </h3>
                <p className="font-body text-sm text-ink/85">{honor.org}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                  {honor.detail}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
