export default function ArnoldPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">

      {/* ── Cinematic Hero ── */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay muted loop playsInline preload="auto"
        >
          <source src="https://lhmcollective.b-cdn.net/UGC-Content/Arnold-event-ugc-video-light-house-media-dallas-videographer.MP4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a191b] via-[#1a191b]/30 to-transparent z-[1]" />

        <a
          href="/work"
          className="absolute top-8 left-8 z-10 text-[10px] uppercase tracking-[0.25em] text-[#cfb580]/60 hover:text-[#cfb580] transition flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All Work
        </a>

        <div className="relative z-[2] px-8 md:px-16 pb-16 md:pb-24">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#cfb580]/45 mb-4">Client</p>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold uppercase leading-none tracking-tight">
            Arnold<br />Sports
          </h1>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-[#cfb580]/15 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">Global</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Event Coverage</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">Multi</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Platform Content</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">Dallas</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Texas</p>
          </div>
        </div>
      </section>

      {/* ── Body Copy ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35 mb-6">About the Work</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Capturing the energy of fitness&rsquo;s biggest stage.
          </h2>
        </div>
        <div className="text-[#cfb580]/70 text-base leading-relaxed space-y-5">
          <p>
            Arnold Sports Festival is one of the world&rsquo;s largest multi-sport events, drawing hundreds of thousands of athletes and fans from across the globe.
          </p>
          <p>
            We were on the ground capturing the energy, competition, and brand activations that make Arnold Sports one of the most exciting events in fitness — producing content built for social platforms that could match the scale and intensity of the event itself.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-20 border-t border-[#cfb580]/15 px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35 mb-6">Ready to create?</p>
        <a href="/contact" className="inline-block text-[#cfb580] text-sm font-semibold uppercase px-10 py-4 border-2 border-[#cfb580] rounded-full bg-transparent transition-all duration-300 hover:bg-[#cfb580] hover:text-[#1a191b] hover:shadow-[0_0_12px_rgba(207,181,128,0.5)]">
          Let&rsquo;s Connect
        </a>
      </section>

    </div>
  );
}
