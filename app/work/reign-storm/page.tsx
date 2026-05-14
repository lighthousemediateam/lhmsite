const photos = [
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-1-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg', alt: 'REIGN Storm product & lifestyle 1' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-2-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg.jpg', alt: 'REIGN Storm product & lifestyle 2' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-3-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg.jpg', alt: 'REIGN Storm product & lifestyle 3' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-4-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg.jpg', alt: 'REIGN Storm product & lifestyle 4' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-5-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg.jpg', alt: 'REIGN Storm product & lifestyle 5' },
  { src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-6-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg.jpg', alt: 'REIGN Storm product & lifestyle 6' },
];

export default function REIGNSTORMPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">

      {/* ── Cinematic Hero ── */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay muted loop playsInline preload="auto"
          poster="https://lhmcollective.b-cdn.net/Work%20Photos/Reign-Storm/Reign-Storm-1-Dallas-Photography-Videography-local-filmmaker-Product-Staging-Modeling.jpg"
        >
          <source src="https://lhmcollective.b-cdn.net/REIGN%20STORM%20-%20CAMPAIGN%20-%20IBIZA%20-%20HORIZONTAL%20-%204K%20(1).mp4" type="video/mp4" />
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
            Reign<br />Storm
          </h1>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-[#cfb580]/15 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">Ibiza</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">International Shoot</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">2</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Countries</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">TikTok</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">& Instagram</p>
          </div>
        </div>
      </section>

      {/* ── Body Copy ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35 mb-6">About the Work</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Fitness meets fashion meets edge — shot in Ibiza.
          </h2>
        </div>
        <div className="text-[#cfb580]/70 text-base leading-relaxed space-y-5">
          <p>
            REIGN Storm, the lifestyle-centric counterpart to REIGN Body Fuel, targets a broader, more style-conscious audience looking for a bold yet refined energy experience.
          </p>
          <p>
            For REIGN Storm, we focus on visually compelling, socially native content that blends fitness with fashion, energy, and edge. Our team handles both content direction and production, ensuring every piece feels authentic to the brand while staying optimized for platforms like TikTok and Instagram.
          </p>
          <p>
            From short-form social videos to curated photo sets for digital and print, our work — including an international campaign shoot in Ibiza, Spain — helps REIGN Storm establish a distinctive identity while connecting with a new generation of energy drink consumers.
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
