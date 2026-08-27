import { usePortfolio } from '../hooks/usePortfolio'

export function CareerRetrospective() {
  const { experience, labels } = usePortfolio()

  return (
    <section className="border-b border-ink py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b-2 border-ink pb-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          {labels.careerRetrospective}
        </h2>
        <span className="font-sans text-xs uppercase tracking-widest text-ink/60">
          {labels.timeline}
        </span>
      </div>

      <ul className="space-y-0">
        {experience.map((job, index) => (
          <li key={job.id}>
            {index > 0 && (
              <div
                className="my-6 border-t border-dotted border-ink/50"
                aria-hidden
              />
            )}
            <div className="grid gap-4 md:grid-cols-[minmax(0,180px)_1fr]">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink/80">
                {job.dateRange}
              </p>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {job.title}
                </h3>
                <p className="font-body text-sm text-ink/85">{job.org}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-ink">
                  {job.bullets.map((b, bi) => (
                    <li key={`${job.id}-${bi}`}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
