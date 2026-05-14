const photos = [
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-1-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 1',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-2-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 2',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-3-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 3',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-4-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 4',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-5-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 5',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-6-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 6',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-7-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 7',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-8-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 8',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-9-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg',
    alt: 'REIGN athlete event 9',
  },
];

export default function REIGNPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">

      {/* ── Cinematic Hero ── */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay muted loop playsInline preload="auto"
          poster="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-1-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
        >
          <source src="https://lhmcollective.b-cdn.net/REIGN%20FULL%2060s%20FINAL.mp4" type="video/mp4" />
        </video>

        {/* Gradient: dark at bottom for legibility, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a191b] via-[#1a191b]/30 to-transparent z-[1]" />

        {/* Back link */}
        <a
          href="/work"
          className="absolute top-8 left-8 z-10 text-[10px] uppercase tracking-[0.25em] text-[#cfb580]/60 hover:text-[#cfb580] transition flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All Work
        </a>

        {/* Title */}
        <div className="relative z-[2] px-8 md:px-16 pb-16 md:pb-24">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#cfb580]/45 mb-4">Client</p>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold uppercase leading-none tracking-tight">
            REIGN<br />Body Fuel
          </h1>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-[#cfb580]/15 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">25M+</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Organic Views</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">10+</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Major Events</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">2</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#cfb580]/40">Countries</p>
          </div>
        </div>
      </section>

      {/* ── Body Copy ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35 mb-6">About the Work</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Full-scale production across fitness&rsquo;s biggest stages.
          </h2>
        </div>
        <div className="text-[#cfb580]/70 text-base leading-relaxed space-y-5">
          <p>
            REIGN Body Fuel is a fitness-forward energy drink brand based in Los Angeles that we&rsquo;ve partnered with across multiple high-impact campaigns. Our work includes full-scale video production, photography, and creative strategy for major fitness events like The Arnold, CrossFit Games, Wodapalooza, Tough Mudder, and Olympia.
          </p>
          <p>
            We&rsquo;ve also supported their UK branch with an international shoot in Ibiza, Spain. From athlete casting to content planning, we create performance-driven media tailored to each platform — including viral content that has reached over 10 million organic views.
          </p>
          <p>
            Our long-standing collaboration with REIGN is built on trust, alignment, and a shared vision to elevate their brand within the competitive fitness space.
          </p>
        </div>
      </section>

      {/* ── Photography ── */}
      <section className="px-6 pb-28">
        {/* Section label with divider */}
        <div className="flex items-center gap-5 mb-10 max-w-[1400px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#cfb580]/40 shrink-0">Photography</p>
          <div className="flex-1 h-px bg-[#cfb580]/15" />
        </div>

        {/* Masonry columns */}
        <div className="columns-2 md:columns-3 gap-3 max-w-[1400px] mx-auto">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative mb-3 overflow-hidden rounded-2xl group break-inside-avoid bg-neutral-900"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cfb580]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-20 border-t border-[#cfb580]/15 px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35 mb-6">Ready to create?</p>
        <a
          href="/contact"
          className="inline-block text-[#cfb580] text-sm font-semibold uppercase px-10 py-4 border-2 border-[#cfb580] rounded-full bg-transparent transition-all duration-300 hover:bg-[#cfb580] hover:text-[#1a191b] hover:shadow-[0_0_12px_rgba(207,181,128,0.5)]"
        >
          Let&rsquo;s Connect
        </a>
      </section>

    </div>
  );
}
