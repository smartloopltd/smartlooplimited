const values = [
  {
    title: "Strategic clarity",
    description: "We turn complex technology goals into practical systems that are easy to understand, easier to adopt, and built for long-term value.",
  },
  {
    title: "Reliable execution",
    description: "We bring together design, engineering, infrastructure, and operations to deliver solutions that are dependable, scalable, and ready for real-world use.",
  },
  {
    title: "Measurable growth",
    description: "Every engagement is shaped around performance, resilience, and business impact—whether that means better digital experiences, smarter infrastructure, or stronger operations.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="relative overflow-visible mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(186,230,253,0.12),_transparent_30%)]" />
        <div className="pointer-events-none absolute -right-6 -bottom-6 h-40 sm:h-56 sm:w-[110%] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.22),_rgba(56,189,248,0.03),transparent_88%)] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -right-3 -bottom-2 h-28 sm:h-40 sm:w-[130%] bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),transparent_92%)] blur-2xl opacity-60" />
        <div className="pointer-events-none absolute -left-6 -top-6 h-40 sm:h-56 sm:w-[110%] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_rgba(56,189,248,0.03),transparent_88%)] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -left-3 -top-2 h-28 sm:h-40 sm:w-[130%] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),transparent_92%)] blur-2xl opacity-60" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">About us</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We build technology that is practical, resilient, and built to move businesses forward.
            </h1>
            <p className="mt-6 text-lg leading-8 text-sky-100/80">
              Smartloop Limited is a strategic technology partner helping ambitious businesses and estates create smarter digital experiences, stronger infrastructure, and more dependable operations.
            </p>
            <p className="mt-4 text-lg leading-8 text-sky-100/80">
              Our approach brings together product thinking, engineering discipline, intelligent infrastructure, and hands-on enablement so teams can grow with confidence and clarity.
            </p>
          </div>
        </div>

      </section>

      <section className="w-full bg-white">
        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="border-t border-sky-300/20 pt-8 lg:pt-10">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.title}>
                  <h2 className="text-xl font-semibold text-sky-950">{value.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-sky-900/85">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
