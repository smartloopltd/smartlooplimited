export default function ProductTechHighlights() {
  const highlights = [
    {
      title: "Full-stack delivery",
      description: "Design, build, and launch digital products with responsive web, mobile-ready experiences, and modern backend systems.",
      badge: "Next.js + TypeScript",
    },
    {
      title: "Cloud-native infrastructure",
      description: "Secure, scalable architectures with automation, monitoring, and cost-aware operations for reliable performance.",
      badge: "AWS | GCP | Azure",
    },
    {
      title: "Performance & resilience",
      description: "Optimized apps, resilient deployments, and continuous delivery practices that keep systems fast and dependable.",
      badge: "CI/CD + Terraform",
    },
    {
      title: "Digital enablement",
      description: "Human-centered systems, analytics, training, and onboarding to help teams adopt technology faster and with confidence.",
      badge: "UX | Analytics | Training",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-3xl border border-slate-200/60 bg-slate-50/90 p-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.85)] backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Product & tech highlights</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A modern stack with intelligent delivery and dependable operations.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            We combine purposeful engineering with cloud strategy and team enablement to build technology that performs, scales, and stays easy to manage.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm">
                {item.badge}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
