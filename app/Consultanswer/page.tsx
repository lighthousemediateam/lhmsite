"use client";

// app/consultanswer/page.tsx
import React from "react";
import Script from "next/script";

// Calendly event URL — replace with your actual
const CALENDLY_URL =
  "https://calendly.com/YOUR_HANDLE/60min?hide_gdpr_banner=1&background_color=1a191b&primary_color=cfb580";

// QuickBooks payment link (yours)
const QB_URL =
  "https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-8813a85c1b8a403dbafc7a584d09f514a3ebe7daf108485987c0603d1857092c1596d1fd254c4717949d7aaaf8f32a4c?locale=EN_US";

// EmailJS config
const EMAILJS_SERVICE_ID = "service_21ld30f";
// TIP: if you created a dedicated consult template, set it here instead of template_bss730h
const EMAILJS_TEMPLATE_ID = "template_bss730h";
const EMAILJS_PUBLIC_KEY = "xtBfTgfimdpJMj4hv";

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
  // Custom question answers a1..a5 (ensure your Calendly event questions match this order)
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

  const submitAndProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1) Send the intake via EmailJS (client-side)
      const payload = {
        from_name: name,
        company,
        instagram,       // <- changed
        address,
        reply_to: email,
        phone,
        message,
      };

      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);

      setDone(true);

      // 2) Open QuickBooks in a new tab for payment
      window.open(QB_URL, "_blank", "noopener,noreferrer");

      // 3) Open Calendly popup with prefilled info
      const url = buildCalendlyUrl({
        name,
        email,
        company,
        instagram, // <- changed
        address,
        phone,
        message,
      });

      // @ts-expect-error calendly global
      if (window.Calendly) {
        // @ts-expect-error
        window.Calendly.initPopupWidget({ url });
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    } catch (err: any) {
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
          Share a few details, then we’ll open payment in a new tab and the scheduler so you can pick a time.
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
            {done && <p className="text-sm text-[#cfb580]">Thanks! We saved your details—finish payment and pick a time.</p>}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl border border-[#cfb580] px-5 py-3 font-semibold tracking-wide text-[#cfb580] transition hover:bg-[#cfb580] hover:text-[#1a191b] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit & Pay →"}
              </button>
              <a
                href={QB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 text-sm text-neutral-300 hover:border-[#cfb580] hover:text-[#cfb580]"
              >
                Pay without submitting (not recommended)
              </a>
            </div>

            <p className="text-xs text-neutral-500">We’ll open payment in a new tab and the scheduling popup here.</p>
          </form>
        </div>

        <div className="mt-6 text-xs text-neutral-500">
          If you haven’t completed payment yet, please do so in the new tab to confirm your slot.
        </div>
      </section>
    </main>
  );
}
