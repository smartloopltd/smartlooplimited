import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Web & software development",
    description:
      "We design and build modern websites, web applications, and software products that are fast, intuitive, and built to grow with your business. From concept to launch, we turn digital ideas into polished experiences that earn trust and drive action.",
    features: [
      "Custom websites, portals, and business applications",
      "Modern UI/UX design with clear user journeys",
      "Scalable architecture for long-term growth",
      "Reliable performance and ongoing digital support",
    ],
  },
  {
    id: "engineering",
    title: "Front-end & back-end engineering",
    description:
      "We build complete digital products with strong front-end experiences and robust back-end systems. Whether you need a seamless user interface or a scalable platform behind it, we connect both ends with precision and performance.",
    features: [
      "Responsive front-end interfaces with premium UX",
      "Robust APIs, databases, and business logic",
      "Full-stack delivery from idea to deployment",
      "Reliable systems designed for scale and maintenance",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps, training & business enablement",
    description:
      "We help teams modernize operations with practical cloud strategy, reliable deployment pipelines, and hands-on training that makes technology work for the business. Our approach blends engineering discipline with real-world enablement so teams can move faster with confidence.",
    features: [
      "Cloud platform setup, migration, and optimization",
      "DevOps workflows for faster, safer releases",
      "Practical training for non-technical and technical teams",
      "Technology roadmaps aligned to business growth",
    ],
  },
  {
    id: "estate-connectivity",
    title: "Smart WISP & Estate Connectivity",
    category: "Infrastructure-as-a-Service (IaaS)",
    description:
      "We deploy, own, and manage high-speed estate networks using Starlink backhauls under an IaaS model. We act as the estate's Smart WISP—handling automated resident billing, dynamic bandwidth management, and 24/7 support with zero upfront infrastructure costs for developers.",
    features: [
      "Zero upfront CapEx for developers (IaaS model)",
      "Centralized Starlink deployment (eliminates rooftop dish clutter)",
      "SaaS-integrated automated resident billing portals",
      "Intelligent bandwidth-slicing & dynamic queue management",
    ],
    techStack: [
      "Starlink Enterprise",
      "Mikrotik API",
      "Next.js / Node.js Billing",
      "Fiber & P2P Wireless",
    ],
  },
  {
    id: "surveillance-access",
    title: "Smart Surveillance & Access Control",
    category: "Security & Surveillance-as-a-Service (SaaS)",
    description:
      "We design, deploy, and manage advanced enterprise-grade CCTV surveillance ecosystems and smart access control solutions. From high-definition IP cameras with AI analytics to centralized monitoring hubs, we ensure continuous security with zero upfront capital expenditure.",
    features: [
      "Zero upfront CapEx for estate developers and businesses",
      "Centralized smart monitoring with AI-powered intrusion detection",
      "Smart access control and visitor management systems",
      "24/7 dedicated technical support and hardware maintenance",
    ],
  },
  {
    id: "energy-solar",
    title: "Smart Energy & Solar Infrastructure",
    category: "Energy-as-a-Service (EaaS) / Infrastructure",
    description:
      "We deliver clean, uninterruptible power solutions through premium solar installations, hybrid inverters, and high-efficiency battery storage systems. We manage the entire lifecycle from design and installation to proactive maintenance, ensuring reliable energy for homes and commercial estates.",
    features: [
      "Hybrid solar and inverter setups tailored to power requirements",
      "High-grade lithium battery storage integration",
      "Proactive power management and smart load balancing",
      "Professional maintenance and performance monitoring services",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-sky-950 text-slate-100 overflow-x-hidden">
      <section className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(186,230,253,0.12),_transparent_30%)]" />
        <div className="pointer-events-none absolute -bottom-32 -right-40 -z-10 h-56 w-72 rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.22),_rgba(56,189,248,0.03),transparent_88%)] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -bottom-32 -right-40 -z-10 h-40 w-96 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),transparent_92%)] blur-2xl opacity-60" />
        <div className="pointer-events-none absolute -top-32 -left-40 h-56 w-72 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_rgba(56,189,248,0.03),transparent_88%)] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -top-32 -left-40 h-40 w-96 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),transparent_92%)] blur-2xl opacity-60" />

        <div className="max-w-3xl relative overflow-visible z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200 relative z-10">Services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl relative z-10">
            We help businesses build modern technology solutions that work in the real world.
          </h1>
          <p className="mt-6 text-lg leading-8 text-sky-100/80 relative z-10">
            We help businesses build modern, resilient digital systems through strategic software development, full-stack engineering, cloud operations, smart infrastructure, and practical enablement that turns technology into measurable growth.
          </p>

          <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none z-0" />
        </div>

        
        <div className="mt-12 border-t border-sky-300/20 pt-8 lg:pt-10">
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="p-1">
              {service.category && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/70 mb-2">{service.category}</p>
              )}
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-sky-100/80">{service.description}</p>
              
              {service.features && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/70 mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-sky-100/70">
                        <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-sky-400/60" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </article>
          ))}
        </div>
          <div className="mt-20 md:mt-24 lg:mt-28 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Ready to scale?</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Let’s build the right technology solution for your business.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-medium text-sky-950 transition-all duration-300 hover:bg-sky-50 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/50">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
