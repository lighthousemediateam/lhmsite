'use client';

import { useState } from 'react';

const PACKAGE_OPTIONS = ['Signature', 'Accelerator', 'À la carte', 'Not sure yet'];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function CompassForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/compass-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();

      // Conversion tracking — optional chaining so nothing breaks while the
      // tags aren't installed yet.
      const w = window as unknown as {
        fbq?: (...args: unknown[]) => void;
        gtag?: (...args: unknown[]) => void;
      };
      // Meta Pixel: NOTE the Pixel base code is NOT installed on the site yet;
      // this fires automatically once it is.
      w.fbq?.('track', 'Lead');
      // Google Ads conversion — fill in the ID/label from the Google Ads
      // account, then uncomment:
      // w.gtag?.('event', 'conversion', { send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center border border-[#cfb580]/40 rounded-3xl px-6 py-14">
        <p className="text-3xl font-bold uppercase tracking-wide mb-3">Got it.</p>
        <p className="text-white/80">
          Your message is on its way — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-transparent border border-[#cfb580]/60 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:border-[#cfb580] focus:outline-none transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label htmlFor="compass-name" className="block mb-2 text-sm uppercase tracking-wide text-[#cfb580]">
            Name <span className="text-red-500">*</span>
          </label>
          <input id="compass-name" name="name" type="text" required maxLength={200} className={inputClass} placeholder="Your name" />
        </div>
        <div className="flex-1">
          <label htmlFor="compass-business" className="block mb-2 text-sm uppercase tracking-wide text-[#cfb580]">
            Business <span className="text-red-500">*</span>
          </label>
          <input id="compass-business" name="business" type="text" required maxLength={200} className={inputClass} placeholder="Your business" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label htmlFor="compass-email" className="block mb-2 text-sm uppercase tracking-wide text-[#cfb580]">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="compass-email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div className="flex-1">
          <label htmlFor="compass-phone" className="block mb-2 text-sm uppercase tracking-wide text-[#cfb580]">
            Phone <span className="text-[#cfb580]/50 normal-case">(optional)</span>
          </label>
          <input id="compass-phone" name="phone" type="tel" maxLength={50} className={inputClass} placeholder="(555) 555-5555" />
        </div>
      </div>

      <div>
        <label htmlFor="compass-package" className="block mb-2 text-sm uppercase tracking-wide text-[#cfb580]">
          Which package are you interested in?
        </label>
        <select
          id="compass-package"
          name="package"
          defaultValue="Not sure yet"
          className="w-full appearance-none bg-[#1a191b] border border-[#cfb580]/60 rounded-full px-5 py-3 text-white focus:border-[#cfb580] focus:outline-none transition"
        >
          {PACKAGE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="compass-message" className="block mb-2 text-sm uppercase tracking-wide text-[#cfb580]">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="compass-message"
          name="message"
          required
          maxLength={5000}
          className="w-full bg-transparent border border-[#cfb580]/60 rounded-3xl px-5 py-3 text-white placeholder-gray-500 focus:border-[#cfb580] focus:outline-none transition min-h-[120px]"
          placeholder="Tell us about your brand and what you're looking for..."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-red-400 text-sm">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full md:w-auto bg-[#cfb580] text-[#1a191b] font-semibold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send My Inquiry'}
      </button>
    </form>
  );
}
