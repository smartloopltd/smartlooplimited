"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import photoNicolas from "./image/photo_2026-02-27_16-58-40.jpg";
import photoTai from "./image/photo_2026-04-22_10-46-39 (2).jpg";
import photoJosh from "./image/photo_2026-04-22_10-46-39.jpg";
import photoAma from "./image/photo_2026-04-22_10-46-40.jpg";
import photoSamuel from "./image/photo_2026-04-22_12-06-39.jpg";
import photoJessica from "./image/jesijess.jpg";

const testimonials = [
  {
    name: "Miracle Innocent",
    title: "Founder & CEO at Grey Gallery Limited",
    quote:
      "I had an excellent experience working with Smartloop Limited for the Grey Gallery website. The communication was outstanding, and the team kept me informed every step of the way.",
    image: photoNicolas,
  },
  {
    name: "Jude Amadi",
    title: "Founder, OKi.inc",
    quote:
      "Working with Smartloop Limited has been a seamless experience. They revamped my blog with care and even trained my team so we could manage things confidently on our own.",
    image: photoTai,
  },
  {
    name: "Robert Efiong",
    title: "CEO, Smooth Media",
    quote:
      "Smartloop Limited was communicative and delivered the web work quickly. If you’re looking for a reliable, talented development partner, this team is your best choice.",
    image: photoJosh,
  },
  {
    name: "Ruth Okahro",
    title: "Community Lead",
    quote:
      "The team brought clarity and speed to our project. Their approach felt modern, thoughtful, and deeply collaborative.",
    image: photoAma,
  },
  {
    name: "Benson Deribe",
    title: "Digital Strategy Manager",
    quote:
      "Smartloop Limited made complex technical guidance feel simple and accessible. The result was a polished digital experience that exceeded expectations.",
    image: photoSamuel,
  },
  {
    name: "Jessica Alamah",
    title: "CEO, Jesyjess Glams",
    quote:
      "Smartloop Limited helped our brand shine online with speed and style. Their team delivered a beautiful site that matched our vision and launched exactly when we needed it.",
    image: photoJessica,
  },
];

export default function Home() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame = 0;
    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      
      // Increase scroll speed and ensure minimum delta to prevent stalling on mobile
      const scrollSpeed = Math.max(delta, 16) * 0.06;
      slider.scrollLeft += scrollSpeed;

      const halfScroll = slider.scrollWidth / 2;
      if (slider.scrollLeft >= halfScroll) {
        slider.scrollLeft -= halfScroll;
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(186,230,253,0.16),_transparent_30%)]" />
        <div className="pointer-events-none absolute -right-16 -bottom-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute -right-8 -bottom-4 h-52 w-[140%] bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),transparent_92%)] blur-2xl opacity-70" />

        {/* mirrored top-left glow */}
        <div className="pointer-events-none absolute -left-16 -top-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute -left-8 -top-4 h-52 w-[140%] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_92%)] blur-2xl opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-sky-400/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
              Technology • Strategy • Growth
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Build smarter digital solutions with modern tech and practical expertise.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100/80">
              We help businesses and teams create reliable web and software products, strengthen cloud and DevOps operations, and turn technology into real business value.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 font-medium text-sky-950 transition-all duration-300 hover:bg-sky-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/50">
                Explore services
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-white/40">
                Book a discovery call
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-950 via-sky-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-sky-400/10" />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-12 sm:px-6 lg:px-8 lg:pt-12 lg:pb-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Our vision and goals</p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-950 sm:text-4xl">
              To build a future where technology is simpler to adopt, stronger to rely on, and more meaningful to the people who use it.
            </h2>
            <p className="mt-5 text-lg leading-8 text-sky-900/85">
              Our vision is to help businesses and communities thrive through thoughtful digital solutions that are practical, resilient, and built for long-term growth. We are committed to raising the standard of delivery across development, cloud, training, and smart infrastructure by combining innovation with discipline, clarity, and measurable impact.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Why teams choose us</p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-950 sm:text-4xl">
              A trusted partner for development, cloud, training, and business growth.
            </h2>
            <p className="mt-4 text-base leading-7 text-sky-900/80">
              Whether you need custom software, dependable cloud infrastructure, practical training, or smart infrastructure for estates and businesses, we bring the experience to deliver with clarity and confidence. We help teams move from idea to launch without unnecessary risk, combining modern engineering, reliable operations, and business-focused technology strategy. Every engagement is tailored to your goals, your timeline, and your growth path. Smartloop Limited makes digital transformation feel ambitious, practical, and achievable.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Our services</p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-950 sm:text-4xl">
              Practical solutions for digital products, traffic, and team growth.
            </h2>
            <p className="mt-5 text-lg leading-8 text-sky-900/85">
              Our services span software development, full-stack engineering, cloud and DevOps support, smart infrastructure, and practical enablement for teams and estates. We build solutions that help businesses move faster, reduce risk, and scale with confidence. Every engagement is designed to be practical, measurable, and directly tied to real growth outcomes.
            </p>

          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Client stories</p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-950 sm:text-4xl">
              Trusted by teams building better digital experiences.
            </h2>
            <p className="mt-4 text-base leading-7 text-sky-900/80">
              Hear from clients who experienced clear communication, fast delivery, and technology that supported their growth.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div ref={sliderRef} className="mx-auto flex w-full max-w-[940px] gap-4 overflow-x-auto pb-4 hide-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-3xl bg-slate-100 p-4 transition duration-300 hover:bg-slate-200 hover:-translate-y-0.5 border border-sky-200">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-300">
                    <Image src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sky-950">{testimonial.name}</p>
                    <p className="text-xs text-sky-700">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-sky-900/85">
                  “{testimonial.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
