export default function App() {
  return (
    <div className="min-h-svh bg-white font-sans text-body">
      {/* top bar */}
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-[-0.03em] text-ink">DRONA</span>
          <span className="text-xs font-medium text-muted">by ApniPathshala</span>
        </div>
        <a
          href="#early-access"
          className="hidden h-10 items-center rounded-lg bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
        >
          Get early access
        </a>
      </header>

      {/* hero */}
      <main className="relative overflow-hidden">
        {/* warm brand glow behind the hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-cream via-cream to-white"
        />

        <section
          id="early-access"
          className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 sm:pt-24 lg:grid-cols-[7fr_5fr] lg:gap-8"
        >
          {/* copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-brand-tint bg-cream-2 px-3 py-1 text-xs font-medium text-brand-dark">
              New · Self-improving LMS
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Courses that learn from every assessment
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body lg:mx-0">
              DRONA is the LMS powering ApniPathshala. It generates and manages
              courses, reads submitted assessments to improve them, and turns each
              submission into a weekly report on PMS / ApniPrerna.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#early-access"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
              >
                Get early access
              </a>
              <a
                href="#learn-more"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-hairline bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-cream sm:w-auto"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* product-mockup card: the demo video */}
          <div className="rounded-2xl border border-hairline bg-white p-2 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <video
              className="aspect-video w-full rounded-xl bg-cream object-cover"
              src="/drona-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="DRONA product demo"
            />
          </div>
        </section>

        {/* feature strip */}
        <section id="learn-more" className="mx-auto max-w-6xl px-6 pb-28">
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-hairline bg-cream/60 p-6"
              >
                <h3 className="text-base font-semibold tracking-[-0.01em] text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const features = [
  {
    title: "Self-improving courses",
    body: "Generate and manage courses, then let DRONA analyse submitted assessments and suggest improvements to the live course.",
  },
  {
    title: "Auto-evolving curriculum",
    body: "The curriculum re-shapes itself as learners progress — assessment revaluation feeds directly back into what gets taught next.",
  },
  {
    title: "Assessments → weekly reports",
    body: "Every submitted assessment can roll up as a weekly report on PMS / ApniPrerna, with no manual compiling.",
  },
]
