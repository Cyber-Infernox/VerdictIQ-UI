// components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a1628]">
      {/* Court-style textured background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(132,204,22,0.12),transparent_40%)]" />
      <div
        className="absolute inset-0 -z-20 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 38px, white 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, white 39px)",
        }}
      />
      {/* Ball glow accent */}
      <div className="absolute right-[12%] top-28 -z-10 h-20 w-20 rounded-full bg-lime-400 blur-md md:right-[18%] md:top-40" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24">
        {/* Giant overlapping headline */}
        <h1 className="select-none font-black uppercase leading-[0.85] tracking-tighter text-white">
          <span className="block text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]">
            Predict&nbsp;The
          </span>
          <span
            className="block text-[3.2rem] text-transparent sm:text-[5rem] md:text-[7rem] lg:text-[9rem]"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
          >
            Outcome
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-10 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
          VerdictIQ analyzes recent form, historical matchups, rankings, and
          advanced AI insights to forecast the outcome of sporting events with
          confidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-none bg-lime-400 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-lime-300">
            Start Predicting
          </button>
          <button className="rounded-none border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white/50">
            Learn More
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-black text-white">50+</h2>
            <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
              Competitions Supported
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-white">100K+</h2>
            <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
              Historical Matches
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black text-lime-400">AI</h2>
            <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
              Intelligent Predictions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
