// components/Footer.tsx
"use client";

import Link from "next/link";

const sports = [
  { icon: "⚽", label: "Football", status: "Live" },
  { icon: "🏏", label: "Cricket", status: "Coming Soon" },
  { icon: "🏸", label: "Badminton", status: "Coming Soon" },
  { icon: "🏀", label: "Basketball", status: "Coming Soon" },
  { icon: "🎾", label: "Tennis", status: "Coming Soon" },
  { icon: "🏐", label: "Volleyball", status: "Coming Soon" },
  { icon: "🏎", label: "Formula 1", status: "Coming Soon" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a1628]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top: logo + nav + CTA */}
        <div className="flex flex-col gap-12 border-b border-white/10 pb-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                Verdict<span className="text-lime-400">IQ</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-500">
              AI-powered sports intelligence — statistical analysis, machine
              learning, and explainable predictions for every match.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3">
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
        </div>

        {/* Supported Sports */}
        <div className="border-b border-white/10 py-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
            Supported Sports
          </span>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-7">
            {sports.map((sport) => (
              <div
                key={sport.label}
                className="flex flex-col items-center gap-2 border border-white/10 bg-white/[0.03] py-6"
              >
                <span className="text-2xl">{sport.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white">
                  {sport.label}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-widest ${
                    sport.status === "Live" ? "text-lime-400" : "text-zinc-500"
                  }`}
                >
                  {sport.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} VerdictIQ. All rights reserved.</p>
          <p className="uppercase tracking-widest text-zinc-600">
            Built with Next.js · FastAPI · AI Agents
          </p>
        </div>
      </div>
    </footer>
  );
}
