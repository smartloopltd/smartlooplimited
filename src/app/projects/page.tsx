"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import photo003 from "../image/gp_images/photo 003.jpg";
import photo004 from "../image/gp_images/photo 004.jpg";
import photo001 from "../image/gp_images/photo001.jpg";
import photo002 from "../image/gp_images/photo002.jpg";
import photo005 from "../image/gp_images/photo005.jpg";

const slideImages = [photo001, photo002, photo003, photo004, photo005];

export default function ProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((value) => (value + 1) % slideImages.length);
  const prevSlide = () => setCurrentSlide((value) => (value - 1 + slideImages.length) % slideImages.length);

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 10000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(186,230,253,0.12),_transparent_30%)]" />
        <div className="pointer-events-none absolute -right-16 -bottom-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute -left-16 -top-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="relative mx-auto flex min-h-[48svh] w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Our projects</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building humanity, transforming lives, and empowering businesses
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-100/80">
              At Smartloop Limited, our technology and infrastructure initiatives are driven by a singular mission: to serve humanity. We design and build solutions that elevate local communities, empower individuals with future-ready skills, and help businesses scale sustainably.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16 lg:pb-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Featured project</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-sky-950 sm:text-4xl">
              The Gathering Place: a web development training initiative for young single adults.
            </h2>
            <p className="mt-6 text-lg leading-8 text-sky-900/85">
              The Gathering Place is a department for YSA's in The Church of Jesus Christ of Latter-day Saints. It is a place where young single adults in the church organization and non-members come together to learn a variety of life skills.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Project focus</p>
              <h3 className="mt-3 text-2xl font-semibold text-sky-950">Smartloop Limited led the web development department</h3>
              <p className="mt-4 text-base leading-8 text-sky-900/85">
                In this Gathering Place initiative, Smartloop Limited was in charge of the web development department. We served as the instructors for the web development training and guided the project for young single adults who wanted to learn the foundations of web development.
              </p>
              <p className="mt-4 text-base leading-8 text-sky-900/85">
                The training focused on helping participants build practical skills, develop confidence, and understand how modern web development works in a real-world setting. It was a meaningful opportunity to support young adults with valuable digital knowledge and hands-on experience.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">What made it meaningful</p>
              <ul className="mt-4 space-y-4 text-base leading-7 text-sky-900/85">
                <li>• A practical learning space where YSAs and non-members could grow in digital skills.</li>
                <li>• A structured web development training programme led by Smartloop Limited.</li>
                <li>• An environment focused on confidence, learning, and long-term personal growth.</li>
                <li>• A project that connected technical training with real-world purpose and community impact.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-sky-200/20 pt-6 sm:pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Photo gallery</p>
                <h3 className="mt-2 text-2xl font-semibold text-sky-950">Moments from the training experience</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-sky-900/80">
                A dedicated space for workshop images, team sessions, and the energy behind the project as it unfolded.
              </p>
            </div>

            <div className="mt-8 relative left-1/2 right-1/2 w-[calc(100vw-2rem)] -translate-x-1/2 sm:w-[calc(100vw-3rem)] lg:w-[calc(100vw-4rem)]">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[1.75rem] bg-sky-100 sm:h-[380px] lg:h-[460px]">
                <Image
                  src={slideImages[currentSlide]}
                  alt={`YSA training photo ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 pointer-events-none bg-sky-950/20" />
                <div className="absolute left-1/2 top-4 -translate-x-1/2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-700">
                  <span>{currentSlide + 1} / {slideImages.length}</span>
                </div>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 p-3 text-2xl text-sky-950 shadow-lg shadow-sky-200/30 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 p-3 text-2xl text-sky-950 shadow-lg shadow-sky-200/30 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
