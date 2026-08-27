import { usePortfolio } from '../hooks/usePortfolio'

export function CommunityChronicle() {
  const { community, labels } = usePortfolio()

  return (
    <section className="border-b border-ink py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b-2 border-ink pb-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          {labels.communityChronicle}
        </h2>
        <span className="font-sans text-xs uppercase tracking-widest text-ink/60">
          {labels.extracurricular}
        </span>
      </div>

      <ul className="space-y-0">
        {community.map((entry, index) => (
          <li key={entry.id}>
            {index > 0 && (
              <div
                className="my-6 border-t border-dotted border-ink/50"
                aria-hidden
              />
            )}
            <div className="grid gap-4 md:grid-cols-[minmax(0,180px)_1fr]">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink/80">
                {entry.dateRange}
              </p>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {entry.title}
                </h3>
                <p className="font-body text-sm text-ink/85">{entry.org}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-ink">
                  {entry.bullets.map((b, bi) => (
                    <li key={`${entry.id}-${bi}`}>{b}</li>
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
