import type { Metadata } from 'next';
import Link from 'next/link';
import CompassForm from '@/components/CompassForm';
import { IPhoneBadge, packages, PHONE } from '../beta/CompassLanding';
import ScrollReveal from './ScrollReveal';
import './styles.css';

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

const cities = ['Dallas', 'Fort Worth', 'Plano', 'Arlington', 'Mansfield', 'Grapevine', 'Southlake'];

export default function CompassDfwLanding() {
  return (
    <div className="cdfw bg-[#1a191b] text-[#cfb580] overflow-x-hidden min-h-screen">
      <ScrollReveal />
      <div className="cdfw-grain" aria-hidden="true" />

      {/* Logo only — no nav. Every other link on this page goes to the form. */}
      <div className="px-6 py-5 text-center md:text-left">
        <Link
          href="/"
          prefetch={false}
          className="text-[#cfb580] text-xl font-bold uppercase tracking-widest hover:opacity-80"
        >
          LIGHT HOUSE MEDIA
        </Link>
      </div>

      {/* ── 01 · Hero ── */}
      <section
        data-reveal
        className="flex flex-col items-center justify-center text-center px-6 pt-12 pb-20 md:pt-24 md:pb-28"
      >
        <p className="cdfw-tc cdfw-reveal">01 · DFW Metroplex</p>
        <div className="cdfw-reveal cdfw-d1 mt-5">
          <IPhoneBadge>Shot on iPhone · Edited by LHM</IPhoneBadge>
        </div>
        <div className="relative mt-8 max-w-4xl">
          <span className="cdfw-bracket cdfw-bracket--tl" aria-hidden="true" />
          <span className="cdfw-bracket cdfw-bracket--br" aria-hidden="true" />
          <h1 className="cdfw-reveal cdfw-d2 text-5xl sm:text-6xl md:text-8xl font-bold uppercase leading-[0.95] text-white">
            Posting isn&apos;t the same as <span className="cdfw-sweep">performing.</span>
          </h1>
        </div>
        <p className="cdfw-reveal cdfw-d3 mt-7 text-lg sm:text-xl max-w-2xl text-white/70 leading-relaxed">
          You can post every day and still get scrolled past. The difference is the content
          itself — the story, the edit, the hook. That&apos;s all we do. Built for DFW brands
          done blending in.
        </p>
        <a
          href="#intake"
          className="cdfw-reveal cdfw-d4 mt-10 inline-block bg-[#cfb580] text-[#1a191b] font-semibold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-white transition-all duration-300 text-lg"
        >
          Get Content That Performs
        </a>
        <p className="cdfw-reveal cdfw-d4 mt-4 text-sm text-[#cfb580]/50">
          Reels from $250 · Packages from $1,850/mo
        </p>
      </section>

      {/* ── 02 · Agitation ── */}
      <section data-reveal className="py-20 md:py-32 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-4xl mx-auto text-center">
          <p className="cdfw-tc cdfw-reveal">02 · The Problem</p>
          <h2 className="cdfw-reveal cdfw-d1 mt-5 text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-[0.98] text-white">
            Content that just sits there is money you&apos;re{' '}
            <span className="cdfw-sweep">burning.</span>
          </h2>
          <p className="cdfw-reveal cdfw-d2 mt-7 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Most small-business content fills the calendar and does nothing else. Ours is built
            to be watched and shared. Stop paying for content that doesn&apos;t earn its place.
          </p>
        </div>
      </section>

      {/* ── 03 · Made in the Metroplex ── */}
      <section data-reveal className="py-20 md:py-32 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-4xl mx-auto text-center">
          <p className="cdfw-tc cdfw-reveal">03 · Local</p>
          <h2 className="cdfw-reveal cdfw-d1 mt-5 text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-[0.98] text-white">
            Made in the <span className="cdfw-sweep">Metroplex.</span>
          </h2>
          <p className="cdfw-reveal cdfw-d2 mt-7 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            We come to your business and turn a single shoot into a month of scroll-stopping
            reels and photos. You&apos;re not getting a lighter version of LHM — you&apos;re
            getting LHM, on a different camera.
          </p>
          <ul className="cdfw-reveal cdfw-d3 mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-[#cfb580]/60">
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 04 · Packages ── */}
      <section data-reveal className="py-20 md:py-32 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="cdfw-tc cdfw-reveal">04 · The Packages</p>
            <h2 className="cdfw-reveal cdfw-d1 mt-5 text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-[0.98] text-white">
              Same team. Different <span className="cdfw-sweep">camera.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`cdfw-card cdfw-reveal cdfw-d2 relative rounded-3xl p-8 md:p-10 flex flex-col border ${
                  pkg.featured ? 'border-[#cfb580]' : 'border-[#cfb580]/30'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#cfb580] text-[#1a191b] text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full whitespace-nowrap">
                    Best value
                  </span>
                )}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <h3 className="text-3xl font-bold uppercase text-white">{pkg.name}</h3>
                  <IPhoneBadge>iPhone-Captured</IPhoneBadge>
                </div>
                <p className="mt-2 text-white/60">{pkg.tagline}</p>
                <p className="mt-6 text-5xl font-bold text-[#cfb580]">
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
          <p className="cdfw-reveal cdfw-d3 mt-10 text-center text-white/70 max-w-2xl mx-auto">
            Not ready for monthly? À la carte reels from{' '}
            <span className="text-[#cfb580]">$250 each</span> — $220 each at 10+ per month.
          </p>
        </div>
      </section>

      {/* ── 05 · Intake form ── */}
      <section
        id="intake"
        data-reveal
        className="py-20 md:py-32 px-6 border-t border-[#cfb580]/15 scroll-mt-8"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="cdfw-tc cdfw-reveal">05 · Get Started</p>
            <h2 className="cdfw-reveal cdfw-d1 mt-5 text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[0.98] text-white">
              Get content that <span className="cdfw-sweep">performs.</span>
            </h2>
            <p className="cdfw-reveal cdfw-d2 mt-6 text-white/70 text-lg">
              Tell us about your brand and we&apos;ll reply within one business day — no
              pressure, no obligation.
            </p>
          </div>
          <div className="cdfw-reveal cdfw-d3">
            <CompassForm />
          </div>
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
