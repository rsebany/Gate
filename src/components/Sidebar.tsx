import { usePortfolio } from '../hooks/usePortfolio'

export function Sidebar() {
  const {
    skillsIndex,
    education,
    skillsGroups,
    certifications,
    interests,
    references,
    connect,
    labels,
  } = usePortfolio()

  return (
    <aside className="space-y-8 border-t border-ink pt-8 lg:border-t-0 lg:pt-0">
      <section>
        <h2 className="border-b border-ink pb-2 font-display text-lg font-bold text-ink">
          {labels.skillsIndexTitle}
        </h2>
        <ul className="mt-4 space-y-2 font-sans text-sm">
          {skillsIndex.map((s) => (
            <li key={s.name} className="flex items-baseline gap-1">
              <span className="shrink-0 uppercase tracking-wide text-ink">{s.name}</span>
              <span
                className="min-w-0 flex-1 border-b border-dotted border-ink/40"
                aria-hidden
              />
              <span className="shrink-0 text-ink/70" aria-hidden>
                {s.mark}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="border-b border-ink pb-2 font-display text-lg font-bold text-ink">
          {labels.academicNotices}
        </h2>
        <ul className="mt-4 space-y-6">
          {education.map((e) => (
            <li key={`${e.institution}-${e.date}`}>
              <p className="font-display text-base font-bold text-ink">
                {e.institution}
              </p>
              <p className="font-sans text-xs text-ink/60">{e.date}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/90">
                {e.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="border-b border-ink pb-2 font-display text-lg font-bold text-ink">
          {labels.credentials}
        </h2>
        <ul className="mt-4 space-y-4">
          {certifications.map((c) => (
            <li key={c.name}>
              <p className="font-display text-sm font-bold text-ink">{c.name}</p>
              <p className="font-sans text-xs text-ink/60">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-ink">{labels.stackLanguages}</h2>
        <div className="mt-3 space-y-4">
          {skillsGroups.map((g) => (
            <div key={g.title}>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink/60">
                {g.title}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="border border-ink/60 bg-ink/[0.03] px-2 py-1 font-sans text-[11px] text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-ink">{labels.interestsTitle}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((item) => (
            <span
              key={item}
              className="border border-ink/60 bg-ink/[0.03] px-2 py-1 font-sans text-[11px] text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="border-b border-ink pb-2 font-display text-lg font-bold text-ink">
          {labels.referencesTitle}
        </h2>
        <ul className="mt-4 space-y-5">
          {references.map((r) => (
            <li key={r.name}>
              <p className="font-display text-sm font-bold text-ink">{r.name}</p>
              <p className="font-sans text-xs text-ink/60">
                {r.role} · {r.org}
              </p>
              <a
                href={`mailto:${r.email}`}
                className="mt-1 inline-block break-all font-sans text-xs text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
              >
                {r.email}
              </a>
              <p className="mt-1 font-sans text-[11px] text-ink/60">{r.relation}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="connect"
        className="border-2 border-ink p-4"
      >
        <h2 className="font-display text-xl font-bold text-ink">{labels.connectNow}</h2>
        <p className="mt-2 font-body text-sm italic text-ink/80">{connect.tagline}</p>
        <div className="mt-4 flex flex-col gap-2 font-sans text-xs uppercase tracking-widest">
          <a
            href={connect.emailHref}
            className="border border-ink px-3 py-2 text-center transition hover:bg-ink/10"
          >
            {connect.emailLabel}
          </a>
          <a
            href={connect.phoneHref}
            className="border border-ink px-3 py-2 text-center transition hover:bg-ink/10"
          >
            {connect.phoneLabel}
          </a>
          <a
            href={connect.githubHref}
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-3 py-2 text-center transition hover:bg-ink/10"
          >
            {connect.githubLabel}
          </a>
        </div>
      </section>
    </aside>
  )
}
