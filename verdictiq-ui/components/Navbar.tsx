// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a1628]">
      {/* Thin announcement strip */}
      <div className="hidden items-center justify-between border-b border-white/10 px-6 py-2 text-[11px] uppercase tracking-widest text-zinc-500 md:flex">
        <span>Powered by Real Match Data</span>
        <span>Built for Fans & Bettors Alike</span>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-white/10 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-black uppercase tracking-tighter text-white">
            Verdict<span className="text-lime-400">IQ</span>
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-zinc-500 md:block">
            / AI Sports Intel
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-10 md:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Predict", href: "/#predict" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#predict"
            className="hidden rounded-none border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-white/50 md:block"
          >
            View Predictions
          </Link>
          <Link
            href="#predict"
            className="rounded-none bg-lime-400 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-lime-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
