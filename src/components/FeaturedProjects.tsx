import { usePortfolio } from '../hooks/usePortfolio'

export function FeaturedProjects({
  onOpenCaseStudy,
}: {
  onOpenCaseStudy: (id: string) => void
}) {
  const { projects, labels } = usePortfolio()

  return (
    <section className="pt-8">
      <div className="overflow-hidden border-2 border-ink bg-ink/10 text-ink">
        <h2 className="px-4 py-2 font-display text-lg font-bold tracking-[0.15em] md:text-xl">
          {labels.featuredProjects}
        </h2>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col border border-ink bg-paper p-4 shadow-[4px_4px_0_0_rgba(10,10,10,0.08)]"
          >
            <div className="mb-3 aspect-video w-full overflow-hidden border border-ink/30 bg-gradient-to-br from-ink/10 to-ink/5">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center font-display text-xs uppercase tracking-widest text-ink/40"
                  aria-hidden
                >
                  {p.title.slice(0, 18)}…
                </div>
              )}
            </div>
            <div className="mb-2 flex flex-wrap items-center gap-2 font-sans text-[11px]">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                {p.status}
              </span>
              <span className="text-ink/60">{p.category}</span>
            </div>
            <h3 className="font-display text-lg font-bold leading-snug text-ink">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/90">
              {p.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="border border-ink px-2 py-0.5 font-sans text-[10px] uppercase tracking-wide text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onOpenCaseStudy(p.id)}
              className="mt-4 inline-block border-2 border-ink px-4 py-2 text-center font-sans text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-ink/10"
            >
              {labels.caseStudy}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
