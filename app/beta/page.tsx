import type { Metadata } from 'next';

// Coming Soon placeholder. The finished landing page lives in CompassLanding.tsx.
// To launch, replace this file's contents with:
//   export { compassMetadata as metadata } from './CompassLanding';
//   export { default } from './CompassLanding';
export const metadata: Metadata = {
  title: 'The Compass Package — Coming Soon',
  description:
    "The Compass Package — Light House Media's storytelling and editing at a price built for growing brands. Launching soon.",
  robots: { index: false, follow: false },
};

export default function CompassComingSoon() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center py-24 md:pt-40">
        <span className="inline-flex items-center gap-2 border border-[#cfb580]/40 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#cfb580]/80">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
            <circle cx="12" cy="18" r="0.6" fill="currentColor" />
          </svg>
          The Compass Package
        </span>
        <h1 className="mt-6 text-6xl sm:text-7xl md:text-8xl font-bold uppercase leading-[0.95]">
          Coming Soon
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#cfb580]/70 max-w-md mx-auto">
          LHM storytelling at a price built for growing brands. Stay tuned.
        </p>
      </div>
    </div>
  );
}
