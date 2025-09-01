'use client';

import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const team = [
  {
    name: 'Jon Ly',
    role: 'CEO/Founder',
    image: 'https://lhmcollective.b-cdn.net/Team%20Spotlight/Jon%20Site%20Edit.jpg',
    bio: `I’m Jon Ly, Founder and CEO of Lighthouse Media. I picked up a camera over a decade ago and knew this is what I wanted to do. Not just with capturing moments, but with building relationships and turning raw ideas into powerful visuals. For me, content isn’t just creative work, it’s self-expression. I want to help others bring their stories to life the same way I did.`,
  },
  {
    name: 'Adam Haisler',
    role: 'Business Operations Manager',
    image: 'https://lhmcollective.b-cdn.net/Team%20Spotlight/Adam%20Site%20Edit.jpg',
    bio: `I’m Adam Haisler, Chief Business Officer at Lighthouse Media. My passion lies in building the foundation that lets creativity thrive. From managing operations and finances to streamlining logistics, I ensure that business operations run seamlessly from start to finish. For me, success isn’t just about efficiency — it’s about giving our team the freedom to focus on what they do best: telling powerful stories.`,
  },
  {
    name: 'Johnathan Nguyen',
    role: 'Director of Photography',
    image: 'https://lhmcollective.b-cdn.net/Team%20Spotlight/Johnathan%20Site%20Edit.jpg',
    bio: `I’m Johnathan Nguyen, Director of Photography at Lighthouse Media. From the moment I picked up a camera, I’ve been driven by the challenge of transforming ideas into striking visuals. My role is to bridge creative vision with technical precision — shaping light, movement, and composition so every frame tells a story with impact. For me, cinematography isn’t just about capturing images, it’s about creating an emotional experience that resonates with people long after they’ve watched. I strive to make each project not only look beautiful but feel unforgettable.`,
  },
];

const mod = (n: number, m: number) => ((n % m) + m) % m;

const LAYERS = [
  { scale: 1, x: 0, z: 30, blur: 0, opacity: 1 },
  { scale: 0.9, x: 220, z: 20, blur: 0.4, opacity: 0.85 },
  { scale: 0.9, x: -220, z: 20, blur: 0.4, opacity: 0.85 },
];

export default function TeamSpotlightCarousel() {
  const [index, setIndex] = useState(0);
  const count = team.length;

  const next = useCallback(() => setIndex(i => mod(i + 1, count)), [count]);
  const prev = useCallback(() => setIndex(i => mod(i - 1, count)), [count]);
  const setTo = useCallback((i: number) => setIndex(mod(i, count)), [count]);

  const active = team[index];
  const containerMinH = useMemo(() => ({ minHeight: '560px' }), []);

  return (
    <section className="bg-[#1a191b] text-[#cfb580] font-league px-5 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Desktop header: centered name + role */}
        <header className="flex justify-center mb-8">
          <div className="hidden md:block text-center">
            <h2 className="text-white font-extrabold uppercase tracking-wider text-4xl lg:text-5xl">
              {active.name}
            </h2>
            <p className="mt-2 text-[#cfb580] uppercase tracking-[0.25em] text-sm lg:text-base">
              {active.role}
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start overflow-visible relative">
          {/* LEFT: Carousel (centered under header on desktop) */}
          <div
            className="md:col-span-8 md:col-start-3 relative z-[60] isolate w-full overflow-visible flex justify-center"
            style={containerMinH}
          >
            {/* Explicit width because children are absolute */}
            <div className="hidden md:block relative h-[600px] w-[680px]">
              {team.map((member, i) => {
                const dist = mod(i - index, count);
                const layer = LAYERS[dist] ?? { scale: 0.8, x: dist * 300, z: 0, blur: 2, opacity: 0 };
                return (
                  <motion.article
                    key={member.name}
                    className="absolute inset-0 will-change-transform"
                    style={{ zIndex: layer.z as number }}
                    initial={false}
                    animate={{
                      x: layer.x,
                      scale: layer.scale,
                      opacity: layer.opacity,
                      filter: `blur(${layer.blur}px)`,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  >
                    <button
                      onClick={() => setTo(i)}
                      className="group w-full h-full rounded-3xl overflow-hidden border border-[#cfb580]/20 bg-[#1f1e20]/80 shadow-2xl"
                      aria-pressed={i === index}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                          draggable={false}
                        />
                      </div>
                    </button>
                  </motion.article>
                );
              })}

              {/* Desktop arrows (positioned over the carousel) */}
              <div className="hidden md:flex absolute inset-0 items-center justify-between px-4 pointer-events-none">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="pointer-events-auto rounded-full bg-black/50 text-[#cfb580] px-3 py-2 hover:bg-black/70"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="pointer-events-auto rounded-full bg-black/50 text-[#cfb580] px-3 py-2 hover:bg-black/70"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Mobile swipe carousel */}
            <div className="md:hidden w-full">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.article
                  key={active.name}
                  className="rounded-3xl overflow-hidden border border-[#cfb580]/20 bg-[#1f1e20]"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    const threshold = 80;
                    if (info.offset.x < -threshold) next();
                    else if (info.offset.x > threshold) prev();
                  }}
                >
                  <div className="w-full aspect-[3/4] relative">
                    <img
                      src={active.image}
                      alt={active.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile info (centered) */}
          <aside className="md:hidden relative z-20">
            <div className="space-y-2 text-center">
              <h3 className="text-3xl font-bold uppercase text-white">
                {active.name}
              </h3>
              <p className="text-base text-white/90">{active.role}</p>
            </div>
          </aside>

        </div>

        {/* Dots (desktop) */}
        <div className="hidden md:flex justify-center mt-6">
          <Dots current={index} total={count} onDot={setTo} />
        </div>

        {/* Bio */}
        <div className="mt-10 md:mt-12 max-w-4xl">
          <div className="border-2 border-[#cfb580] rounded-3xl p-6 md:p-8 bg-transparent/0">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">{active.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dots({
  current,
  total,
  onDot,
}: {
  current: number;
  total: number;
  onDot: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label="Team carousel">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDot(i)}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to slide ${i + 1}`}
          className={
            'h-2.5 w-2.5 rounded-full transition ' +
            (i === current ? 'bg-[#cfb580] scale-110' : 'bg-[#cfb580]/30 hover:bg-[#cfb580]/60')
          }
        />
      ))}
    </div>
  );
}
