const photos = [
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Blackhawk/BlackHawk-1-Lighthousemedia-dallas-videogrpaher%20.png', alt: 'Blackhawk Aerospace photo 1' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Blackhawk/BlackHawk-3-Light-House-Media-Dallas-Videographer.png', alt: 'Blackhawk Aerospace photo 2' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Blackhawk/BlackHawk-2-Light-House-Media-Dallas-Videographer.png', alt: 'Blackhawk Aerospace photo 3' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Blackhawk/Blackhawk-2planes-light-house-media-dallas-videographer.png', alt: 'Blackhawk two planes photo' },
];

export default function BlackhawkPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">

      {/* ── Cinematic Hero ── */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay muted loop playsInline preload="auto"
        >
          <source src="https://lhmcollective.b-cdn.net/Blackhawk%20Remastered%20for%20Website.mp4" type="video/mp4" />
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
            Blackhawk<br />Aerospace
          </h1>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-[#cfb580]/15 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">3</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Years Partnership</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">FAA</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Certified Subject</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">1999</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Est. Waco, Texas</p>
          </div>
        </div>
      </section>

      {/* ── Body Copy ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35 mb-6">About the Work</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Precision aircraft. Precision storytelling.
          </h2>
        </div>
        <div className="text-[#cfb580]/70 text-base leading-relaxed space-y-5">
          <p>
            We collaborated with Blackhawk Aerospace, a Waco, Texas-based leader in performance upgrades for turboprop aircraft established in 1999, from 2018 to 2021.
          </p>
          <p>
            During that time, we produced dynamic videos featuring their specialized projects — like the King Air 350 upgrades — and streamlined content for internal operations and team presentations. Blackhawk is a recognized authority in enhancing aircraft capability through engine and avionics upgrades, FAA-certified MRO services, and global performance centers.
          </p>
          <p>
            Their hallmark upgrades deliver unmatched climb rates, cruise performance, payload, and operating cost efficiency. Our content helped illustrate their precision, innovation, and mission-focused vision through compelling visual storytelling.
          </p>
        </div>
      </section>

      {/* ── Photography ── */}
      <section className="px-6 pb-28">
        <div className="flex items-center gap-5 mb-10 max-w-[1400px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#cfb580]/40 shrink-0">Photography</p>
          <div className="flex-1 h-px bg-[#cfb580]/15" />
        </div>
        <div className="columns-2 md:columns-3 gap-3 max-w-[1400px] mx-auto">
          {photos.map((photo, i) => (
            <div key={i} className="relative mb-3 overflow-hidden rounded-2xl group break-inside-avoid bg-neutral-900">
              <img src={photo.src} alt={photo.alt} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cfb580]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
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
