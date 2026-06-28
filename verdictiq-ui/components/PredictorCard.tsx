// components/PredictorCard.tsx
"use client";

import { usePrediction } from "@/context/PredictionContext";

export default function PredictorCard() {
  const { team1, team2, setTeam1, setTeam2, isLoading, result, predict } =
    usePrediction();

  const canPredict = team1.trim().length > 0 && team2.trim().length > 0;

  return (
    <section id="predict" className="bg-[#0a1628] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
            Try It Now
          </span>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Predict Your
            <br />
            Next Match
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Enter two teams and let VerdictIQ analyze the outcome.
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-10 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Team 1
              </label>
              <input
                value={team1}
                onChange={(e) => setTeam1(e.target.value)}
                placeholder="Argentina"
                className="w-full rounded-none border border-white/15 bg-[#0a1628] px-5 py-4 text-white outline-none transition focus:border-lime-400"
              />
            </div>

            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Team 2
              </label>
              <input
                value={team2}
                onChange={(e) => setTeam2(e.target.value)}
                placeholder="Brazil"
                className="w-full rounded-none border border-white/15 bg-[#0a1628] px-5 py-4 text-white outline-none transition focus:border-lime-400"
              />
            </div>
          </div>

          <button
            onClick={predict}
            disabled={!canPredict || isLoading}
            className="mt-8 w-full rounded-none bg-lime-400 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
          >
            {isLoading ? "Analyzing Match..." : "Predict Winner"}
          </button>

          {isLoading && (
            <div className="mt-10 border border-white/10 bg-[#0a1628] p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Prediction
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                  Running AI analysis…
                </span>
              </div>
              <div className="mt-8">
                <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-zinc-500">
                  <span>Confidence</span>
                  <span>—</span>
                </div>
                <div className="h-2 w-full overflow-hidden bg-white/10">
                  <div className="h-full w-1/3 animate-pulse bg-zinc-600" />
                </div>
              </div>
            </div>
          )}

          {!isLoading && result && (
            <div className="mt-10 border border-white/10 bg-[#0a1628] p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Prediction
                </span>
                <span className="text-2xl font-black uppercase text-lime-400">
                  {result.winner}
                </span>
              </div>

              <div className="mt-8">
                <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-zinc-500">
                  <span>Confidence</span>
                  <span>{result.confidence}%</span>
                </div>
                <div className="h-2 overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-lime-400 transition-all duration-700"
                    style={{ width: `${result.confidence}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
