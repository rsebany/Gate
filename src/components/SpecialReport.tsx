import { useState } from 'react'
import avatarImg from '../assets/avatar.png'
import { usePortfolio } from '../hooks/usePortfolio'

export function SpecialReport() {
  const { specialReport } = usePortfolio()
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="border-b border-ink pb-8">
      <div className="grid gap-6 md:grid-cols-[minmax(0,200px)_1fr] md:gap-8">
        <figure className="mx-auto w-full max-w-[200px] md:mx-0">
          <div className="flex min-h-[200px] items-center justify-center overflow-hidden border-2 border-ink bg-ink/5">
            {imgOk ? (
              <img
                src={avatarImg}
                alt="Romualdo Sebany"
                width={200}
                height={240}
                className="h-auto w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <p className="p-4 text-center font-sans text-xs text-ink/50">
                Add <code className="font-mono">src/assets/avatar.png</code>
              </p>
            )}
          </div>
        </figure>

        <div>
          <h2 className="font-display text-xl font-bold leading-tight text-ink md:text-2xl">
            {specialReport.headline}
          </h2>
          {specialReport.byline && (
            <p className="mt-2 font-sans text-xs uppercase tracking-widest text-ink/60">
              {specialReport.byline}
            </p>
          )}
          <p className="drop-cap mt-4 text-justify font-body text-base leading-relaxed text-ink md:text-lg">
            {specialReport.body}
          </p>
        </div>
      </div>
    </section>
  )
}
