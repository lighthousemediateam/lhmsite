import type { Metadata } from 'next';
import Link from 'next/link';
import CompassForm from '@/components/CompassForm';
import { IPhoneBadge, packages, PHONE } from '../beta/CompassLanding';

// Paid-traffic landing page. Noindexed so it never competes with /beta for
// ranking; site chrome (Header/Footer/LoadingScreen) is suppressed for this
// route inside those components — the only exit is the logo link home.
export const metadata: Metadata = {
  title: { absolute: 'Scroll-Stopping Content for DFW Brands | Light House Media' },
  description:
    'Monthly iPhone reels + camera photos with Light House Media storytelling, anywhere in the DFW metroplex. Packages from $1,850/mo, reels from $250.',
  robots: { index: false, follow: false },
};

const phoneIsSet = !PHONE.startsWith('[');

export default function CompassDfwLanding() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] overflow-x-hidden min-h-screen">
      {/* Logo only — no nav. Every other link on this page goes to the form. */}
      <div className="px-6 py-5 text-center md:text-left">
        <Link
          href="/"
          className="text-[#cfb580] text-xl font-bold uppercase tracking-widest hover:opacity-80"
        >
          LIGHT HOUSE MEDIA
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-10 pb-16 md:pt-24 md:pb-24">
        <IPhoneBadge>Shot on iPhone · Edited by LHM</IPhoneBadge>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-[0.95] max-w-4xl">
          Scroll-Stopping Content for DFW Brands
          <br />
          <span className="text-white">Shot on iPhone, Edited by LHM</span>
        </h1>
        <a
          href="#intake"
          className="mt-10 inline-block bg-[#cfb580] text-[#1a191b] font-semibold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-white transition-all duration-300 text-lg"
        >
          Get Your Content Plan
        </a>
        <p className="mt-4 text-sm text-[#cfb580]/50">Reels from $250 · Packages from $1,850/mo</p>
      </section>

      {/* ── Condensed value ── */}
      <section className="py-12 md:py-16 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-2xl mx-auto text-center space-y-4 text-lg text-white/80 leading-relaxed">
          <p>
            Light House Media is a DFW-based content team. We come to your business — anywhere
            from Dallas to Fort Worth — and turn a single shoot into a month of scroll-stopping
            reels and photos.
          </p>
          <p className="text-[#cfb580]">
            Same storytelling, same editing, same creative team behind our cinema work — on a
            different camera, at a price built for growing local brands.
          </p>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-12 md:py-20 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-center mb-12">
            Monthly Packages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl p-8 md:p-10 flex flex-col border transition ${
                  pkg.featured ? 'border-[#cfb580] bg-[#cfb580]/[0.06]' : 'border-[#cfb580]/30'
                }`}
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <h3 className="text-3xl font-bold uppercase">{pkg.name}</h3>
                  <IPhoneBadge>iPhone-Captured</IPhoneBadge>
                </div>
                <p className="mt-2 text-white/60">{pkg.tagline}</p>
                <p className="mt-6 text-5xl font-bold">
                  {pkg.price}
                  <span className="text-xl font-normal text-[#cfb580]/60">/mo</span>
                </p>
                <ul className="mt-8 space-y-4 text-white/85 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-[#cfb580] mt-0.5" aria-hidden="true">
                        ✦
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#intake"
                  className={`mt-10 text-center font-semibold uppercase tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-[#cfb580] text-[#1a191b] hover:bg-white'
                      : 'border border-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b]'
                  }`}
                >
                  Inquire About {pkg.name}
                </a>
              </div>
            ))}
          </div>

          {/* À la carte anchor */}
          <p className="mt-10 text-center text-white/70 max-w-2xl mx-auto">
            Not ready for monthly? À la carte reels from{' '}
            <span className="text-[#cfb580]">$250 each</span> — $220 each at 10+ per month.
          </p>
        </div>
      </section>

      {/* ── Intake form ── */}
      <section id="intake" className="py-12 md:py-20 px-6 border-t border-[#cfb580]/15 scroll-mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
              Get Your Content Plan
            </h2>
            <p className="text-white/70 text-lg">
              Tell us about your brand and we&apos;ll reply within one business day — no pressure,
              no obligation.
            </p>
          </div>
          <CompassForm />
        </div>
      </section>

      {/* Minimal bottom bar — no nav links out */}
      <div className="px-6 py-10 text-center text-xs text-[#cfb580]/50 uppercase tracking-wide border-t border-[#cfb580]/15">
        <p>Light House Media · Serving the DFW Metroplex</p>
        {phoneIsSet && (
          <p className="mt-2">
            <a href={`tel:${PHONE}`} className="hover:text-[#cfb580]">
              {PHONE}
            </a>
          </p>
        )}
        <p className="mt-2">© 2026 Light House Media. All rights reserved.</p>
      </div>
    </div>
  );
}
