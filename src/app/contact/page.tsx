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

  const mapLocation = 'Mafars Sunshine Estate, Kurudu Barracks, Phase 2, FCT-Abuja, Nigeria';
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&z=15&t=${mapMode === 'satellite' ? 'k' : 'm'}&output=embed`;

  return (
    <main className="bg-sky-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(186,230,253,0.12),_transparent_30%)]" />
        <div className="pointer-events-none absolute -right-16 -bottom-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="pointer-events-none absolute -left-16 -top-12 h-72 w-[120%] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_rgba(56,189,248,0.04),transparent_88%)] blur-3xl opacity-90" />
        <div className="relative mx-auto flex min-h-[36svh] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
          <div className="relative z-10 max-w-3xl">
            <p className="block text-sm font-semibold uppercase tracking-[0.3em] text-sky-200 opacity-100">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let’s create something remarkable.
            </h1>
            <p className="mt-6 text-lg leading-8 text-sky-100/80">
              Whether you are launching a new experience or refining an existing one, we would love to hear about your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16 lg:pb-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Get in touch</p>
              <div className="mt-6 space-y-4 text-sm text-sky-900/85">
                <p><span className="font-semibold text-sky-950">Phone:</span> +234 806 563 5610</p>
                <p><span className="font-semibold text-sky-950">Phone:</span> +234 905 531 6760</p>
                <p><span className="font-semibold text-sky-950">Email:</span> smartloopnigerialimited@gmail.com</p>
                <p><span className="font-semibold text-sky-950">Address:</span> Mafars Sunshine Estate, Kurudu Barracks, Phase 2, FCT-Abuja, Nigeria</p>
              </div>
            </div>

            <form className="space-y-5 rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(135deg,_#f8fbff_0%,_#f4f8fc_100%)] p-5 shadow-[0_18px_45px_-24px_rgba(2,6,23,0.35)] sm:p-6">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-slate-800 outline-none ring-0 transition-all duration-300 placeholder:text-slate-400 focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.16)]" placeholder="Your name" />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-slate-800 outline-none ring-0 transition-all duration-300 placeholder:text-slate-400 focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.16)]" placeholder="you@example.com" />
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">
                Project details
                <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-slate-800 outline-none ring-0 transition-all duration-300 placeholder:text-slate-400 focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.16)]" placeholder="Tell us about the experience you want to build." />
              </label>
              <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-[0_12px_30px_-12px_rgba(2,132,199,0.55)]">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full bg-white border-t border-sky-200/20">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-200/20 pb-4 text-sm text-sky-900/85 sm:px-0">
            <p className="font-medium text-sky-950">Abuja location map</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMapMode('roadmap')}
                className={`rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-110 hover:shadow-lg ${mapMode === 'roadmap' ? 'bg-sky-400 text-white hover:shadow-sky-400/50' : 'bg-sky-100 text-sky-950 hover:shadow-sky-200/50'}`}
              >
                Roadmap
              </button>
              <button
                type="button"
                onClick={() => setMapMode('satellite')}
                className={`rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-110 hover:shadow-lg ${mapMode === 'satellite' ? 'bg-sky-400 text-white hover:shadow-sky-400/50' : 'bg-sky-100 text-sky-950 hover:shadow-sky-200/50'}`}
              >
                Satellite
              </button>
            </div>
          </div>

          <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px] overflow-hidden rounded-[1.75rem] border border-sky-200/20 bg-sky-50 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-sky-200/20 mt-4">
          {!isUnlocked && (
            <button
              type="button"
              onClick={handleDoubleTapUnlock}
              onTouchEnd={handleDoubleTapUnlock}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-sky-50/90 px-6 text-center text-sm font-medium text-sky-900"
            >
              <span className="text-base font-semibold text-sky-950">Double-tap to explore the map</span>
              <span className="mt-2 text-sky-700">The map stays locked until you tap twice.</span>
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
        </div>
      </section>
    </main>
  );
}
