"use client";

// app/consultanswer/page.tsx
import React from "react";
import Script from "next/script";

// Calendly event URL (your real link)
const CALENDLY_URL =
  "https://calendly.com/lighthousemediamgmt/30min?hide_gdpr_banner=1&background_color=1a191b&primary_color=cfb580";

// QuickBooks payment link (yours)
const QB_URL =
  "https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-8813a85c1b8a403dbafc7a584d09f514a3ebe7daf108485987c0603d1857092c1596d1fd254c4717949d7aaaf8f32a4c?locale=EN_US";

// EmailJS config — NEW ACCOUNT
const EMAILJS_SERVICE_ID = "service_4zvmtkm";
const EMAILJS_TEMPLATE_ID = "template_zubtnp2";
const EMAILJS_PUBLIC_KEY = "B81a9jS8XplNaMdaj";

// Build Calendly URL with prefill + custom answers
function buildCalendlyUrl({
  name,
  email,
  company,
  instagram,
  address,
  phone,
  message,
}: {
  name: string;
  email: string;
  company: string;
  instagram: string;
  address: string;
  phone: string;
  message: string;
}) {
  const params = new URLSearchParams();
  if (name) params.set("name", name);
  if (email) params.set("email", email);
  // Ensure your Calendly event has custom questions in this order:
  // 1) Company  2) Instagram  3) Address  4) Phone  5) Short message
  if (company) params.set("a1", company);
  if (instagram) params.set("a2", instagram);
  if (address) params.set("a3", address);
  if (phone) params.set("a4", phone);
  if (message) params.set("a5", message);

  const url = new URL(CALENDLY_URL);
  params.forEach((v, k) => url.searchParams.set(k, v));
  return url.toString();
}

export default function ConsultAnswerPage() {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [done, setDone] = React.useState(false);

  // 👇 Fallback if browser blocks the QuickBooks tab
  const [showPayFallback, setShowPayFallback] = React.useState(false);

  // Listen for Calendly booking completion, then open QuickBooks
  React.useEffect(() => {
    function onMessage(e: MessageEvent) {
      // Calendly posts messages on window with e.data.event
      if (e?.data?.event === "calendly.event_scheduled") {
        const tab = window.open(QB_URL, "_blank", "noopener,noreferrer");
        if (!tab || tab.closed) setShowPayFallback(true);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const submitAndProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1) Send the intake via EmailJS (client-side)
      const payload = {
        from_name: name,
        company,
        instagram,
        address,
        reply_to: email,
        phone,
        message,
      };

      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);

      setDone(true);

      // 2) Open Calendly popup with prefilled info (NO QuickBooks here)
      const url = buildCalendlyUrl({
        name,
        email,
        company,
        instagram,
        address,
        phone,
        message,
      });

      // @ts-expect-error Calendly injected by script
      if (window.Calendly) {
        // @ts-expect-error
        window.Calendly.initPopupWidget({ url });
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong sending your details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1a191b] text-neutral-100">
      {/* Calendly popup script */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />

      <section className="mx-auto max-w-3xl px-6 pt-28 pb-10 md:pt-36">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#cfb580]">Intake & Payment</h1>
        <p className="mt-3 text-neutral-300">
          Share a few details, then we’ll open the scheduler. After you book, we’ll open payment in a new tab.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-2xl border border-neutral-800 bg-[#121113] p-6">
          <form onSubmit={submitAndProceed} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Name*</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Company / Business Name</label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Instagram</label>
                <input
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                  placeholder="@yourhandle"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                  placeholder="City, State (or full address)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Email*</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Phone Number</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs uppercase tracking-wide text-neutral-400">Short message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-neutral-800 bg-[#1a191b] px-3 py-2 text-neutral-100 outline-none focus:border-[#cfb580]"
                placeholder="What would you like to achieve in this consult?"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
            {done && <p className="text-sm text-[#cfb580]">Thanks! We saved your details—book your time, then complete payment in the new tab.</p>}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl border border-[#cfb580] px-5 py-3 font-semibold tracking-wide text-[#cfb580] transition hover:bg-[#cfb580] hover:text-[#1a191b] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit & Schedule →"}
              </button>
              {/* Optional: still offer manual payment link */}
              <a
                href={QB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 text-sm text-neutral-300 hover:border-[#cfb580] hover:text-[#cfb580]"
              >
                Pay without scheduling (not recommended)
              </a>
            </div>

            {showPayFallback && (
              <div className="mt-3">
                <a
                  href={QB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#cfb580] px-5 py-3 font-semibold tracking-wide text-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b]"
                >
                  Complete Payment (opens in new tab)
                </a>
                <p className="mt-2 text-xs text-neutral-500">
                  If the payment tab didn’t open automatically after booking, click the button above.
                </p>
              </div>
            )}

            <p className="mt-2 text-xs text-neutral-500">
              We’ll pop open the scheduler now. After you confirm your time, we’ll open the payment tab.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
