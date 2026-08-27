import { usePortfolio } from '../hooks/usePortfolio'

type Project = ReturnType<typeof usePortfolio>['projects'][number]

export function CaseStudy({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) {
  const { labels } = usePortfolio()

  return (
    <div className="min-h-svh bg-paper">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-0 md:px-6">
        <header className="border-b-2 border-ink pb-8 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="border border-ink bg-ink/10 px-3 py-1 font-sans text-xs uppercase tracking-widest text-ink transition hover:bg-ink/20"
          >
            &larr; {labels.backToPortfolio}
          </button>

          <div className="mt-8 text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-ink/60">
              {project.category} · {project.status} · {project.year}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-ink/90 md:text-lg">
              {project.description}
            </p>
          </div>
        </header>

        {project.image && (
          <div className="mt-8 overflow-hidden border-2 border-ink">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="border-b border-ink pb-2 font-display text-xl font-bold text-ink">
              {labels.theProblem}
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/90">
              {project.caseStudy.problem}
            </p>
          </div>
          <div>
            <h2 className="border-b border-ink pb-2 font-display text-xl font-bold text-ink">
              {labels.theApproach}
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/90">
              {project.caseStudy.approach}
            </p>
          </div>
        </section>

        <section className="mt-10 border-2 border-ink bg-ink/10 p-6 text-ink">
          <h2 className="font-display text-lg font-bold uppercase tracking-[0.15em]">
            {labels.whyItHolds}
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink/90">
            {project.caseStudy.highlight}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="border-b border-ink pb-2 font-display text-xl font-bold text-ink">
            {labels.builtWith}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-ink px-3 py-1 font-sans text-xs uppercase tracking-wide text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 flex flex-col items-center gap-4 border-t border-dotted border-ink/50 pt-8">
          <button
            type="button"
            onClick={onBack}
            className="font-sans text-xs uppercase tracking-widest text-ink/70 underline underline-offset-4 transition hover:text-ink"
          >
            &larr; {labels.backToPortfolio}
          </button>
        </section>
      </div>
    </div>
  )
}
