// app/about/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const targetUsers = [
  "Football Fans",
  "Sports Analysts",
  "Fantasy Sports Players",
  "Casual Viewers",
  "Betting Enthusiasts",
  "Data Science Enthusiasts",
  "AI Enthusiasts",
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["FastAPI"] },
  { category: "AI", items: ["Hugging Face", "SmolAgents", "LLM APIs"] },
  { category: "Deployment", items: ["Vercel", "Railway"] },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0a1628]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
          <div
            className="absolute inset-0 -z-10 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 38px, white 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, white 39px)",
            }}
          />
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              About VerdictIQ
            </span>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              AI Sports Intelligence,
              <br />
              Built to Explain Itself
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              VerdictIQ is an AI-powered sports intelligence platform that
              predicts the outcome of sporting events using statistical
              analysis, machine learning, and autonomous AI agents — and shows
              you exactly why.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              Vision
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
              Explainable, Not Just Predictive
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Most prediction sites stop at a name and a percentage. VerdictIQ
              goes further — analyzing recent form, head-to-head record,
              rankings, expected goals, and momentum to not only predict an
              outcome, but explain the reasoning behind it like a real sports
              analyst would.
            </p>

            <div className="mt-10 border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Instead of simply saying
              </p>
              <p className="mt-3 text-xl font-bold text-zinc-500 line-through">
                Argentina will win.
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-lime-400">
                VerdictIQ answers
              </p>
              <p className="mt-3 text-xl font-bold text-white">
                Argentina has a 72% probability of winning based on recent form,
                head-to-head record, FIFA ranking, expected goals, player
                availability, and current momentum.
              </p>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              Who It&apos;s For
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
              Built for Every Kind of Fan
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {targetUsers.map((user) => (
                <span
                  key={user}
                  className="border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300"
                >
                  {user}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              Under the Hood
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
              Tech Stack
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {techStack.map((stack) => (
                <div
                  key={stack.category}
                  className="border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    {stack.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
