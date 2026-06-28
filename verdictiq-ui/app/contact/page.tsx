// app/contact/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    // Stub for now — wire to a real backend/email service later
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#0a1628]">
        {/* Header */}
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
              Get In Touch
            </span>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Questions, feedback, partnership ideas, or just curious how
              VerdictIQ works under the hood — drop us a message.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.3fr_1fr]">
            {/* Form */}
            <div className="border border-white/10 bg-white/[0.03] p-10">
              {submitted ? (
                <div className="flex flex-col items-start gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                    Message Sent
                  </span>
                  <p className="text-xl font-bold text-white">
                    Thanks, {name.split(" ")[0]} — we&apos;ll get back to you
                    soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-4 rounded-none border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-white/50"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Lionel Messi"
                        className="w-full rounded-none border border-white/15 bg-[#0a1628] px-5 py-4 text-white outline-none transition focus:border-lime-400"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-none border border-white/15 bg-[#0a1628] px-5 py-4 text-white outline-none transition focus:border-lime-400"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      className="w-full resize-none rounded-none border border-white/15 bg-[#0a1628] px-5 py-4 text-white outline-none transition focus:border-lime-400"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="mt-8 w-full rounded-none bg-lime-400 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
                  >
                    Send Message
                  </button>
                </>
              )}
            </div>

            {/* Side info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                  Email
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  hello@verdictiq.app
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                  Response Time
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Within 24–48 hours
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                  Follow Along
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  VerdictIQ is an active project — updates on new sports,
                  features, and the AI agent pipeline are shared as they ship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
