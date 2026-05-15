'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_VIDEO_DESKTOP =
  'https://lhmcollective.b-cdn.net/UGC-Content/UGC%20BG_1-dallas-social-media-videographer-lighthousemedia-instagram-tiktok.mp4';
const HERO_VIDEO_MOBILE =
  'https://lhmcollective.b-cdn.net/UGC-Content/Vertical%20UGC%20BG.mp4';

type Reel = { src: string; name: string; handle: string; followers: string; views: string; link: string };

const reels: Reel[] = [
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/AthenaUGC-video.MP4', name: 'Athena Paris', handle: '@athenaparissss', followers: '865k', views: '2.6M', link: 'https://www.instagram.com/reel/DLhTc7uuXCi/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/ReignUGC-video.MP4', name: 'REIGN Body Fuel', handle: '@reignbodyfuel', followers: '335k', views: '8.2M', link: 'https://www.instagram.com/reignbodyfuel/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Recess%20My%20Gym%20is%20just%20Different.mp4', name: 'Recess Fitness', handle: '@Recessdallas', followers: '29.2k', views: '14.4M', link: 'https://www.instagram.com/RecessDallas/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/VIrginia-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Virginia SanHouse', handle: '@virginiasanhouse', followers: '2.4M', views: '996k', link: 'https://www.instagram.com/reel/C9u4p2ORrRk/?igsh=MXc3aWsydjhna3ZwbA==' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/the-hopeaholics-podcast-ugc-video-light-house-media-dallas-videographer.MP4', name: 'The Hopeaholics', handle: '@thehopeaholics', followers: '326k', views: '680k', link: 'https://www.instagram.com/reel/CzHj1M7ypQX/?igsh=ZXVzMTdsaTF3NWw3' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/NEM-event-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Natalie Eva Marie', handle: '@natalieevamarie', followers: '6M', views: '5.8M', link: 'https://www.instagram.com/reel/Cry7APhgbHZ/?igsh=ZGluc2Y1ZTRweTM3' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/jakepaul-miketyson-mvp-dallas-event-ugc-light-house-media-videographer.mp4', name: 'Raphaela Milagres', handle: '@raphamilagres', followers: '184k', views: '453k', link: 'https://www.instagram.com/reel/DCc81bWS3JZ/?igsh=MTNuYjI2M2xteWk3bA==' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Thor-reign-ugc-video-lighthousemedia.MP4', name: 'Thor Bjornsson', handle: '@hafthorbjornsson', followers: '1.5M', views: '996k', link: 'https://www.tiktok.com/t/ZPHsyc12njn3D-uDYcR/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Kai-Greene-reign-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Kai Greene', handle: '@Kaigreene', followers: '7.1M', views: '1.1M', link: 'https://www.instagram.com/reel/CzOdSZ3OGQM/?igsh=cnZzeWxwYTNqdGdh' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/REIGN%20UK-ugc-light-house-media-dallas-videographer-event.mp4', name: 'REIGN UK', handle: '@reignbodyfueleurope', followers: '25.5k', views: '805k', link: 'https://www.instagram.com/reel/CnKEcnJpYfn/?igsh=MXhzcHQ1MXRzYWp3bg==' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Arnold-event-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Arnold Sports', handle: '@arnoldsports', followers: '1.8M', views: '122k', link: 'https://www.instagram.com/reel/C4BI7ZLOiUJ/?igsh=MWl1dnF2OTk3MHEzcA==' },
];

const STATS = [
  { number: '500M+', label: 'Combined Views' },
  { number: '20M+',  label: 'Followers Reached' },
];

// Card dimensions (9:16)
const CARD_W = 220;
const CARD_H = Math.round(CARD_W * (16 / 9));
const RADIUS  = 420;
const ANGLE_STEP = 360 / reels.length;

function visualAngle(i: number, active: number): number {
  let a = ((i - active) * ANGLE_STEP % 360 + 360) % 360;
  if (a > 180) a -= 360;
  return a;
}

function cardOpacity(angle: number): number {
  const a = Math.abs(angle);
  if (a > 155) return 0;
  if (a > 115) return 0.08;
  if (a > 75)  return 0.3;
  if (a > 38)  return 0.6;
  return 1;
}

export default function UGCPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing,  setPlaying]  = useState<boolean[]>(Array(reels.length).fill(false));
  const [muted,    setMuted]    = useState<boolean[]>(Array(reels.length).fill(true));

  // Swipe hint (mobile only — shows once when carousel scrolls into view)
  const [showHint, setShowHint] = useState(false);
  const hintShown   = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Touch tracking for swipe
  const touchStartX = useRef(0);

  // Pause current video when navigating away
  const pauseActive = useCallback(() => {
    const v = videoRefs.current[activeIndex];
    if (v && !v.paused) v.pause();
  }, [activeIndex]);

  const goNext = () => { pauseActive(); setActiveIndex(i => (i + 1) % reels.length); };
  const goPrev = () => { pauseActive(); setActiveIndex(i => (i - 1 + reels.length) % reels.length); };

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Show swipe hint once on mobile when carousel enters view
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hintShown.current) {
          hintShown.current = true;
          setShowHint(true);
          setTimeout(() => setShowHint(false), 2800);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handlePlay  = (i: number) => {
    setPlaying(prev => prev.map((_, idx) => idx === i));
    videoRefs.current.forEach((v, idx) => { if (idx !== i && v && !v.paused) v.pause(); });
  };
  const handlePause = (i: number) => setPlaying(prev => { const n=[...prev]; n[i]=false; return n; });

  const togglePlay = (i: number) => {
    const v = videoRefs.current[i]; if (!v) return;
    v.paused ? v.play().catch(() => {}) : v.pause();
  };

  const toggleMute = (i: number) => {
    setMuted(prev => {
      const n = [...prev]; n[i] = !n[i];
      const v = videoRefs.current[i]; if (v) v.muted = n[i];
      return n;
    });
  };

  const handleLoaded = (i: number, v: HTMLVideoElement) => {
    try {
      v.muted = muted[i];
      // Seek slightly past 0 so the browser decodes and displays a real frame
      v.currentTime = 0.1;
    } catch {}
  };

  const active = reels[activeIndex];
  const carouselRotation = -activeIndex * ANGLE_STEP;

  return (
    <main className="bg-[#1a191b] text-[#cfb580] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full aspect-[9/16] md:aspect-video flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          playsInline muted loop autoPlay preload="metadata" crossOrigin="anonymous" aria-hidden="true"
        >
          <source src={HERO_VIDEO_DESKTOP} media="(min-aspect-ratio: 4/3)" type="video/mp4" />
          <source src={HERO_VIDEO_MOBILE}  media="(max-aspect-ratio: 4/3)" type="video/mp4" />
          <source src={HERO_VIDEO_DESKTOP} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-[1]" aria-hidden="true" />
        <div className="relative z-[2] text-center px-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            Performance UGC That Converts
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-[#cfb580]/80"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            We understand your brand identity and how to make your content resonate with your viewers in a way that actually generates conversions.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Wall ── */}
      <section className="py-20 px-6 border-b border-[#cfb580]/15">
        <div className="grid grid-cols-2 gap-10 max-w-2xl mx-auto">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">{s.number}</p>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#cfb580]/45">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3D Carousel ── */}
      <section className="py-20 md:py-28 overflow-hidden">

        {/* Desktop: carousel left + stats right  |  Mobile: stacked */}
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* ── Carousel column ── */}
          <div ref={carouselRef} className="flex-1 flex flex-col items-center">

            {/* 3D scene — 100px top pad keeps cards from clipping */}
            <div
              className="relative"
              style={{ perspective: '1000px', width: `${CARD_W}px`, height: `${CARD_H + 160}px` }}
              onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={e => {
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
              }}
            >
              {/* Rotating drum — zero-size, offset down to give 80px top clearance */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%', top: `${CARD_H / 2 + 80}px`,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${carouselRotation}deg)`,
                  transition: 'transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {reels.map((reel, i) => {
                  const angle   = i * ANGLE_STEP;
                  const vAngle  = visualAngle(i, activeIndex);
                  const opacity = cardOpacity(vAngle);
                  const isActive = i === activeIndex;

                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        width:  `${CARD_W}px`,
                        height: `${CARD_H}px`,
                        left:   `${-CARD_W / 2}px`,
                        top:    `${-CARD_H / 2}px`,
                        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                        opacity,
                        transition: 'opacity 0.45s ease',
                        cursor: isActive ? 'default' : 'pointer',
                      }}
                      onClick={() => { if (!isActive) { pauseActive(); setActiveIndex(i); } }}
                    >
                      <div
                        className={`w-full h-full rounded-2xl overflow-hidden bg-[#0f0f10] shadow-2xl transition-all duration-300 ${
                          isActive ? 'border border-[#cfb580]/50 ring-1 ring-[#cfb580]/20' : 'border border-[#cfb580]/15'
                        }`}
                      >
                        <video
                          ref={el => { videoRefs.current[i] = el; }}
                          src={reel.src}
                          playsInline loop muted={muted[i]}
                          preload="auto"
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                          onLoadedData={e => handleLoaded(i, e.currentTarget)}
                          onClick={() => isActive && togglePlay(i)}
                          onPlay={() => handlePlay(i)}
                          onPause={() => handlePause(i)}
                        />

                        {/* Play overlay — active only */}
                        {isActive && !playing[i] && (
                          <button
                            type="button"
                            aria-label={`Play ${reel.name}`}
                            className="absolute inset-0 flex items-center justify-center bg-black/20 z-20"
                            onClick={() => togglePlay(i)}
                          >
                            <div className="w-14 h-14 bg-[#cfb580] text-[#1a191b] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </button>
                        )}

                        {/* Mute — active only */}
                        {isActive && (
                          <button
                            type="button"
                            onClick={e => { e.stopPropagation(); toggleMute(i); }}
                            aria-label={muted[i] ? 'Unmute' : 'Mute'}
                            className="absolute bottom-3 left-3 z-20 rounded-full bg-[#cfb580] p-2 shadow hover:bg-white transition"
                          >
                            {muted[i]
                              ? <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>
                              : <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 100-6 4.5 4.5 0 000 6z"/></svg>
                            }
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Swipe hint — mobile only, fades in then out */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  className="lg:hidden mt-8"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#cfb580]/10 border border-[#cfb580]/20 text-[#cfb580]/60 text-[10px] uppercase tracking-[0.22em]">
                    <span>←</span>
                    <span>Swipe to explore</span>
                    <span>→</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-5 mt-10 lg:mt-16">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[#cfb580]/35 flex items-center justify-center hover:bg-[#cfb580] hover:text-[#1a191b] transition text-lg"
              >
                ←
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2 items-center">
                {reels.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { pauseActive(); setActiveIndex(i); }}
                    aria-label={`Go to ${reels[i].name}`}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width:  i === activeIndex ? '20px' : '7px',
                      height: '7px',
                      background: i === activeIndex ? '#cfb580' : 'rgba(207,181,128,0.25)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-[#cfb580]/35 flex items-center justify-center hover:bg-[#cfb580] hover:text-[#1a191b] transition text-lg"
              >
                →
              </button>
            </div>

            {/* Counter */}
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#cfb580]/30">
              {String(activeIndex + 1).padStart(2, '0')} / {String(reels.length).padStart(2, '0')}
            </p>
          </div>

          {/* ── Stats panel column ── */}
          <div className="w-full lg:w-[420px] lg:pl-16 xl:pl-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 48, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0,  filter: 'blur(0px)' }}
                exit={{    opacity: 0, x: -24, filter: 'blur(4px)' }}
                transition={{ duration: 0.42, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* Label */}
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#cfb580]/35">Now Featuring</p>

                {/* Creator name */}
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{active.name}</h2>
                  <p className="text-base sm:text-lg text-[#cfb580]/50 mt-2">{active.handle}</p>
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-[#cfb580]/25" />

                {/* Stats */}
                <div className="flex gap-12">
                  <div>
                    <p className="text-4xl sm:text-5xl font-bold">{active.followers}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#cfb580]/40 mt-1.5">Followers</p>
                  </div>
                  <div>
                    <p className="text-4xl sm:text-5xl font-bold">{active.views}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#cfb580]/40 mt-1.5">Views</p>
                  </div>
                </div>

                {/* CTA link */}
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] border border-[#cfb580]/35 px-6 py-3 rounded-full hover:bg-[#cfb580] hover:text-[#1a191b] transition"
                >
                  View on Instagram
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center px-6 border-t border-[#cfb580]/15">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Consult Today</h3>
        <p className="text-[#cfb580]/70 max-w-md mx-auto mb-6">Ready to take your brand to the next level?</p>
        <a
          href="/consult"
          className="inline-block px-8 py-3 border border-[#cfb580] rounded-full hover:bg-[#cfb580] hover:text-[#1a191b] transition"
        >
          Connect Now
        </a>
      </section>

    </main>
  );
}
