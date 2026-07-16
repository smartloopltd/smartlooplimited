'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [mapMode, setMapMode] = useState<'satellite' | 'roadmap'>('satellite');
  const tapCountRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDoubleTapUnlock = () => {
    tapCountRef.current += 1;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      tapCountRef.current = 0;
    }, 450);

    if (tapCountRef.current >= 2) {
      setIsUnlocked(true);
      tapCountRef.current = 0;
    }
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent('London, United Kingdom')}&z=14&t=${mapMode === 'satellite' ? 'k' : 'm'}&output=embed`;

  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(186,230,253,0.12),_transparent_30%)]" />
        <div className="pointer-events-none absolute -right-16 -bottom-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute -left-16 -top-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="relative mx-auto flex min-h-[36svh] w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let’s create something remarkable.
            </h1>
            <p className="mt-6 text-lg leading-8 text-sky-100/80">
              Whether you are launching a new experience or refining an existing one, we would love to hear about your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16 lg:pb-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Get in touch</p>
            <div className="mt-6 space-y-4 text-sm text-sky-100/80">
              <p>hello@smartloop.co</p>
              <p>+1 (555) 010-2040</p>
              <p>Based in remote-first teams worldwide.</p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-sky-50">
                Name
                <input className="mt-2 w-full rounded-2xl border border-sky-300/20 bg-sky-900/70 px-4 py-3 text-slate-100 outline-none ring-0 transition-all duration-300 focus:scale-105 focus:border-sky-400/50 focus:shadow-lg focus:shadow-sky-400/30" placeholder="Your name" />
              </label>
              <label className="text-sm font-medium text-sky-50">
                Email
                <input className="mt-2 w-full rounded-2xl border border-sky-300/20 bg-sky-900/70 px-4 py-3 text-slate-100 outline-none ring-0 transition-all duration-300 focus:scale-105 focus:border-sky-400/50 focus:shadow-lg focus:shadow-sky-400/30" placeholder="you@example.com" />
              </label>
            </div>
            <label className="block text-sm font-medium text-sky-50">
              Project details
              <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-sky-300/20 bg-sky-900/70 px-4 py-3 text-slate-100 outline-none ring-0 transition-all duration-300 focus:scale-105 focus:border-sky-400/50 focus:shadow-lg focus:shadow-sky-400/30" placeholder="Tell us about the experience you want to build." />
            </label>
            <button className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 font-medium text-sky-950 transition-all duration-300 hover:bg-sky-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/50">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <section className="w-full border-t border-sky-400/10 bg-sky-950/70">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-400/10 px-4 py-3 text-sm text-sky-100/80 sm:px-6 sm:px-8 lg:px-10">
          <p className="font-medium">Interactive location map</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMapMode('roadmap')}
              className={`rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-110 hover:shadow-lg ${mapMode === 'roadmap' ? 'bg-sky-400 text-sky-950 hover:shadow-sky-400/50' : 'bg-sky-900/70 text-sky-100 hover:shadow-sky-100/20'}`}
            >
              Roadmap
            </button>
            <button
              type="button"
              onClick={() => setMapMode('satellite')}
              className={`rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-110 hover:shadow-lg ${mapMode === 'satellite' ? 'bg-sky-400 text-sky-950 hover:shadow-sky-400/50' : 'bg-sky-900/70 text-sky-100 hover:shadow-sky-100/20'}`}
            >
              Satellite
            </button>
          </div>
        </div>

        <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px] overflow-hidden rounded-[1.75rem] border border-sky-400/10 bg-sky-950/70 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-sky-400/20">
          {!isUnlocked && (
            <button
              type="button"
              onClick={handleDoubleTapUnlock}
              onTouchEnd={handleDoubleTapUnlock}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-sky-950/90 px-6 text-center text-sm font-medium text-sky-100"
            >
              <span className="text-base font-semibold">Double-tap to explore the map</span>
              <span className="mt-2 text-sky-200/80">The map stays locked until you tap twice.</span>
            </button>
          )}

          <iframe
            title="Smartloop Limited location"
            src={mapSrc}
            className={`h-full w-full border-0 ${!isUnlocked ? 'pointer-events-none' : ''}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
