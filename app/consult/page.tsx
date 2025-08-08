// app/consult/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Schedule a Consult | Light House Media",
  description:
    "Book a 60-minute strategy consult with Light House Media. Get a tailored plan you can execute immediately.",
  openGraph: {
    title: "Schedule a Consult | Light House Media",
    description:
      "Book a 60-minute strategy consult with Light House Media. Get a tailored plan you can execute immediately.",
    type: "website",
    url: "https://lhmcreative.com/consult",
  },
};

export default function ScheduleConsultPage() {
  return (
    <main className="min-h-screen bg-[#1a191b] text-neutral-100">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-10 md:pt-36">
        <p className="text-xs tracking-[0.3em] text-neutral-400">STRATEGY CONSULT</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[#cfb580] md:text-6xl">
          Schedule a Consult
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">
          60 minutes. $250 flat. We listen, we diagnose, and you leave with a clear, actionable plan to move your brand forward.
        </p>
      </section>

      {/* Pricing + Details */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-5">
        {/* Offer Card */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-neutral-800 bg-[#121113] p-6 shadow-xl">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#cfb580]">$250</h2>
                <p className="text-sm text-neutral-400">60-minute video call</p>
              </div>
              <span className="rounded-full border border-[#cfb580]/40 px-3 py-1 text-xs uppercase tracking-wide text-[#cfb580]">
                Limited Availability
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#cfb580]" /><div><p className="font-semibold tracking-wide text-[#cfb580]">We Listen.</p><p className="text-sm text-neutral-300/90">Quick pre-call intake. We align on your goals and where you’re stuck.</p></div></li>
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#cfb580]" /><div><p className="font-semibold tracking-wide text-[#cfb580]">We Create.</p><p className="text-sm text-neutral-300/90">On-call brand & content audit: positioning, messaging, and production priorities.</p></div></li>
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#cfb580]" /><div><p className="font-semibold tracking-wide text-[#cfb580]">We Amplify.</p><p className="text-sm text-neutral-300/90">Distribution playbook: where to post, how often, hooks, and repurposing.</p></div></li>
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#cfb580]" /><div><p className="font-semibold tracking-wide text-[#cfb580]">Action Plan</p><p className="text-sm text-neutral-300/90">You’ll receive a concise recap with 3–5 next steps, tools, and references within 24 hours.</p></div></li>
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#cfb580]" /><div><p className="font-semibold tracking-wide text-[#cfb580]">Credit</p><p className="text-sm text-neutral-300/90">Apply the $250 toward any project booked within 30 days.</p></div></li>
            </ul>

            <div className="mt-6 rounded-xl bg-[#1a191b] p-4">
              <p className="text-sm text-neutral-300">
                Have a bigger initiative?{" "}
                <Link href="/contact" className="underline decoration-[#cfb580]/50 underline-offset-4 hover:text-[#cfb580]">Contact us</Link>{" "}
                for multi-day strategy or production.
              </p>
            </div>

            <div className="mt-6 text-xs text-neutral-400">
              <p className="mb-1">Cancellation: 24h notice for full refund. Reschedules allowed once.</p>
              <p>No-shows are non-refundable.</p>
            </div>

            {/* CTA: route to the intake + payment page */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/Consultanswer"
                className="inline-flex items-center justify-center rounded-xl border border-[#cfb580] px-5 py-3 font-semibold tracking-wide text-[#cfb580] transition hover:bg-[#cfb580] hover:text-[#1a191b]"
              >
                Continue → Intake & Payment
              </Link>
              <Link href="/Consultanswer" className="text-xs text-neutral-400 underline decoration-[#cfb580]/40 underline-offset-4 hover:text-[#cfb580]">
                Need something sooner? Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-neutral-800 bg-[#121113] p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#cfb580]">How it works</h3>
            <ol className="space-y-3 text-sm text-neutral-300">
              <li>1) Go to intake & payment.</li>
              <li>2) Submit details, pay via QuickBooks, then pick a time.</li>
              <li>3) Meet for 60 minutes — leave with a tactical plan.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ & JSON-LD kept the same as before… */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <h3 className="text-2xl font-bold text-[#cfb580]">FAQs</h3>
        {/* …snip (same FAQ content you had)… */}
      </section>
    </main>
  );
}
