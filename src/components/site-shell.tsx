"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingClose, setPendingClose] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== previousPathname.current) {
      setMenuOpen(false);
      setPendingClose(false);
    }
    previousPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setPendingClose(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-sky-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-400/20 bg-sky-950/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="relative inline-flex items-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_rgba(15,23,42,0.95)_70%)] px-5 py-2 text-lg font-semibold tracking-tight text-white shadow-[0_24px_80px_-18px_rgba(56,189,248,0.35)] transition duration-300 hover:bg-sky-950/95 hover:shadow-[0_26px_110px_-22px_rgba(56,189,248,0.45)]">
            <span className="absolute inset-0 rounded-full bg-white/10 blur-sm opacity-55" />
            <span className="absolute left-3 top-1 h-8 w-16 rounded-full bg-white/15 blur-sm opacity-75" />
            <span className="relative text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]">Smartloop Limited</span>
          </Link>

          <div ref={menuRef} className="relative">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/20 bg-sky-950/90 text-sky-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-sky-950"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className="flex h-6 w-6 flex-col items-center justify-center gap-1">
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
              </span>
            </button>

            {menuOpen ? (
              <div className="fixed right-0 top-20 z-50 w-44 sm:w-48 md:w-56 max-w-[280px] h-fit rounded-l-3xl rounded-r-none rounded-bl-3xl border-l border-sky-400/15 bg-sky-900/95 px-4 py-4 shadow-2xl shadow-sky-950/30">
                <nav className="flex flex-col gap-3 text-right text-sm text-sky-100/80">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-right transition hover:bg-sky-800 hover:text-white"
                      onClick={() => {
                        if (link.href === pathname) {
                          setMenuOpen(false);
                          setPendingClose(false);
                          return;
                        }
                        setPendingClose(true);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ) : null}
          </div>

          <nav className="hidden items-center gap-5 text-sm text-sky-100/80">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-sky-400/20 bg-sky-950/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 text-sm text-sky-100/70 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="relative inline-flex items-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_rgba(15,23,42,0.95)_70%)] px-5 py-2 text-lg font-semibold tracking-tight text-white shadow-[0_24px_80px_-18px_rgba(56,189,248,0.35)]">
                <span className="absolute inset-0 rounded-full bg-white/10 blur-sm opacity-55" />
                <span className="absolute left-3 top-1 h-8 w-16 rounded-full bg-white/15 blur-sm opacity-75" />
                <span className="relative">Smartloop Limited</span>
              </p>
              <p className="mt-2 leading-7 text-sky-100/70">
                Strategy, development, and growth support for modern businesses building smarter digital solutions.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Quick links</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
                <Link href="/projects" className="transition hover:text-white">
                  Projects
                </Link>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Contact</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/contact" className="transition hover:text-white">
                  Start a project
                </Link>
                <a href="mailto:hello@smartloop.co" className="transition hover:text-white">
                  hello@smartloop.co
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-sky-400/20 pt-4 text-xs uppercase tracking-[0.25em] text-sky-200/80 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Smartloop Limited. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
