import { motion } from 'framer-motion'
import { useState } from 'react'
import avatarImg from '../assets/avatar.png'
import { portfolio } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { TypewriterHeadline } from './TypewriterHeadline'

const figureVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function SpecialReport() {
  const reduced = usePrefersReducedMotion()
  const { specialReport } = portfolio
  const [imgOk, setImgOk] = useState(true)

  return (
    <motion.section
      className="border-b border-ink pb-8"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: reduced ? 0 : 0.55 }}
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,200px)_1fr] md:gap-8">
        <motion.figure
          className="mx-auto w-full max-w-[200px] md:mx-0"
          variants={figureVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex min-h-[200px] items-center justify-center overflow-hidden border-2 border-ink bg-ink/5">
            {imgOk ? (
              <img
                src={avatarImg}
                alt="Romualdo Sebany"
                width={200}
                height={240}
                className="h-auto w-full object-cover grayscale transition duration-300 hover:grayscale-0"
                onError={() => setImgOk(false)}
              />
            ) : (
              <p className="p-4 text-center font-sans text-xs text-ink/50">
                Add <code className="font-mono">src/assets/avatar.png</code>
              </p>
            )}
          </div>
          <figcaption className="mt-2 font-sans text-[10px] uppercase tracking-widest text-ink/70">
            {specialReport.figureCaption}
          </figcaption>
        </motion.figure>

        <div>
          <h2 className="font-display text-xl font-bold leading-tight text-ink md:text-2xl">
            <TypewriterHeadline
              text={specialReport.headline}
              reducedMotion={reduced}
            />
          </h2>
          <p className="mt-2 font-sans text-xs uppercase tracking-widest text-ink/60">
            {specialReport.byline}
          </p>
          <p className="drop-cap mt-4 text-justify font-body text-base leading-relaxed text-ink md:text-lg">
            {specialReport.body}
          </p>
        </div>
      </div>
    </motion.section>
  )
}
