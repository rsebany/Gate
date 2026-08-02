import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function WorksInPreparation() {
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
          WORKS IN PREPARATION
        </h2>
        <span className="font-sans text-xs uppercase tracking-widest text-ink/60">
          Manuscripts
        </span>
      </div>

      <ul className="space-y-6">
        {portfolio.works.map((work) => (
          <li key={work.id}>
            <h3 className="font-display text-base font-bold leading-snug text-ink md:text-lg">
              {work.authors} — “{work.title}”
            </h3>
            <p className="mt-1 font-sans text-xs uppercase tracking-widest text-ink/60">
              {work.venue}
            </p>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
