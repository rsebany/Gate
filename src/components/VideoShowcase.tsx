import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function VideoShowcase() {
  const reduced = usePrefersReducedMotion()
  const { video } = portfolio

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
          VIDEO EXHIBIT
        </h2>
        <span className="font-sans text-xs uppercase tracking-widest text-ink/60">
          Zirah · CS50x Project
        </span>
      </div>

      <div className="overflow-hidden border-2 border-ink">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={video.embedUrl}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <p className="mt-4 font-body text-sm leading-relaxed text-ink/85">
        {video.description}
      </p>
    </motion.section>
  )
}
