import type { Metadata } from 'next';
import CompassForm from '@/components/CompassForm';

// TODO: replace with the Google Voice number when Adam supplies it.
// Must match the Google Business Profile NAP exactly. Used in the JSON-LD
// schema and rendered on both pages once it's a real number.
export const PHONE = '[PHONE]';
const phoneIsSet = !PHONE.startsWith('[');

export const compassMetadata: Metadata = {
  title: { absolute: 'Affordable DFW Social Content | The Compass Package | Light House Media' },
  description:
    'DFW-based content team. Monthly iPhone reels + camera photos with Light House Media storytelling — serving Dallas, Fort Worth, Plano, Arlington, Mansfield, Grapevine & Southlake. Reels from $250.',
  keywords: [
    'affordable video production Dallas',
    'social media reels Dallas',
    'iPhone content production Dallas',
    'monthly content package Dallas',
    'Instagram Reels agency Dallas',
    'small business video Dallas TX',
    'brand content subscription Dallas',
  ],
  alternates: { canonical: 'https://www.lhmcollective.com/beta' },
  openGraph: {
    title: 'Affordable DFW Social Content | The Compass Package',
    description:
      'DFW-based content team. Monthly iPhone reels + camera photos with Light House Media storytelling — serving Dallas, Fort Worth, Plano, Arlington, Mansfield, Grapevine & Southlake. Reels from $250.',
    url: 'https://www.lhmcollective.com/beta',
    type: 'website',
  },
};

// Service-area business schema for the Compass page. NAP (name, phone,
// Mansfield locality) must stay identical to the Google Business Profile.
const compassSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Light House Media',
  url: 'https://lhmcollective.com/beta',
  ...(phoneIsSet ? { telephone: PHONE } : {}),
  email: 'adam@lhmcollective.com',
  image: 'https://www.lhmcollective.com/og-preview.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mansfield',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Fort Worth' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Arlington' },
    { '@type': 'City', name: 'Mansfield' },
    { '@type': 'City', name: 'Grapevine' },
    { '@type': 'City', name: 'Southlake' },
  ],
};

// The one entry-tier signal: a restrained "Shot on iPhone" motif used in the hero
// and on package cards. Everything else matches the premium brand treatment.
export function IPhoneBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-[#cfb580]/40 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#cfb580]/80">
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <circle cx="12" cy="18" r="0.6" fill="currentColor" />
      </svg>
      {children}
    </span>
  );
}

export const packages = [
  {
    name: 'Signature',
    price: '$1,850',
    tagline: 'A steady monthly presence, done for you.',
    features: [
      '5 iPhone reels per month',
      '20 edited camera photos (monthly library)',
      'Planning + shoot session every other month — included',
    ],
  },
  {
    name: 'Accelerator',
    price: '$3,240',
    tagline: 'For brands ready to post like the big accounts.',
    features: [
      '12 iPhone reels per month (volume reel rate)',
      '20 edited camera photos (monthly library)',
      'Planning + shoot session every month — included',
    ],
    featured: true,
  },
];

const galleryPlaceholders = Array.from({ length: 6 }, (_, i) => i);

export default function CompassLanding() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compassSchema) }}
      />
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 md:pt-48 md:pb-28 min-h-[70vh] md:min-h-0">
        <IPhoneBadge>Shot on iPhone · Edited by LHM</IPhoneBadge>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-8xl font-bold uppercase leading-[0.95] max-w-5xl">
          DFW Content, Shot on iPhone
          <br />
          <span className="text-white">LHM Storytelling for Local Brands</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl text-[#cfb580]/80">
          The Compass Package is Light House Media&apos;s creative team, editing, and style —
          captured on iPhone instead of cinema cameras, at a rate built for growing DFW brands.
        </p>
        <a
          href="#intake"
          className="mt-10 inline-block bg-[#cfb580] text-[#1a191b] font-semibold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-white transition-all duration-300 text-lg"
        >
          Start With Compass
        </a>
        <p className="mt-4 text-sm text-[#cfb580]/50">Reels from $250 · Packages from $1,850/mo</p>
      </section>

      {/* ── Made in the Metroplex ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">Made in the Metroplex</h2>
          <div className="space-y-5 text-lg text-white/80 leading-relaxed">
            <p>
              Light House Media is a DFW-based content team. We come to your business — anywhere
              from Dallas to Fort Worth — and turn a single shoot into a month of scroll-stopping
              reels and photos. Same storytelling, same editing, same creative team behind our
              cinema work.
            </p>
            <p>
              Your reels are captured on iPhone and your photos on real cameras, always.{' '}
              <span className="text-[#cfb580]">
                You&apos;re not getting a lighter version of LHM — you&apos;re getting LHM, on a
                different camera, at a price built for growing local brands.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-center mb-12">
            Monthly Packages
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl p-8 md:p-10 flex flex-col border transition ${
                  pkg.featured
                    ? 'border-[#cfb580] bg-[#cfb580]/[0.06]'
                    : 'border-[#cfb580]/30'
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

          {/* Upgrade path */}
          <p className="mt-10 text-center text-white/60 max-w-2xl mx-auto">
            Need a premium camera-shot reel? Available from{' '}
            <span className="text-[#cfb580]">$350 à la carte</span>, or step up to a full Light
            House Media package anytime.
          </p>
        </div>
      </section>

      {/* ── À la carte ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">Or Start À La Carte</h2>
          <p className="text-white/70 mb-12">No monthly commitment — just pick what you need.</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border border-[#cfb580]/30 rounded-3xl p-8">
              <p className="text-5xl font-bold">
                $250<span className="text-xl font-normal text-[#cfb580]/60">/reel</span>
              </p>
              <p className="mt-3 text-white/80">iPhone reels, LHM storytelling and edit</p>
              <p className="mt-2 text-sm text-[#cfb580]/60">Drops to $220 each at 10+ per month</p>
            </div>
            <div className="border border-[#cfb580]/30 rounded-3xl p-8">
              <p className="text-5xl font-bold">
                $40<span className="text-xl font-normal text-[#cfb580]/60">/photo</span>
              </p>
              <p className="mt-3 text-white/80">Edited camera photos</p>
              <p className="mt-2 text-sm text-[#cfb580]/60">Always shot on real cameras</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work gallery (placeholders until Bunny CDN clips are supplied) ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-center mb-12">
            Compass Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryPlaceholders.map((i) => (
              <div
                key={i}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-[#cfb580]/20 bg-gradient-to-b from-[#26242a] to-[#141316] flex flex-col items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-full border border-[#cfb580]/40 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-[#cfb580]/60 ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#cfb580]/40 px-4 text-center">
                  Sample reel coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / intake form ── */}
      <section id="intake" className="py-16 md:py-24 px-6 border-t border-[#cfb580]/15 scroll-mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
              Let&apos;s Point Your Brand Somewhere
            </h2>
            <p className="text-white/70 text-lg">
              Tell us about your brand and we&apos;ll reply within one business day with next steps —
              no pressure, no obligation.
            </p>
          </div>
          <CompassForm />
        </div>
      </section>

      {/* ── Serving the DFW Metroplex ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[#cfb580]/15">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
            Serving the DFW Metroplex
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            On-location content across{' '}
            <span className="text-[#cfb580]">
              Dallas, Fort Worth, Plano, Arlington, Mansfield, Grapevine, and Southlake
            </span>
            . If you&apos;re in the metroplex, we come to you.
          </p>
          {phoneIsSet && (
            <p className="mt-6 text-lg">
              <a href={`tel:${PHONE}`} className="text-[#cfb580] hover:text-white transition">
                {PHONE}
              </a>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
