'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const HERO_VIDEO_DESKTOP =
  'https://lhmcollective.b-cdn.net/UGC-Content/UGC%20BG_1-dallas-social-media-videographer-lighthousemedia-instagram-tiktok.mp4'; // 16:9
const HERO_VIDEO_MOBILE =
  'https://lhmcollective.b-cdn.net/UGC-Content/Vertical%20UGC%20BG.mp4'; // 9:16

type Reel = {
  src: string;
  name: string;
  handle: string;
  followers: string;
  views: string;
  link: string;
};

const reels: Reel[] = [
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/AthenaUGC-video.MP4', name: 'Athena Paris', handle: '@athenaparissss', followers: '865k', views: '2.6M', link: 'https://www.instagram.com/reel/DLhTc7uuXCi/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/ReignUGC-video.MP4', name: 'REIGN Body Fuel', handle: '@reignbodyfuel', followers: '335k', views: '8.2M', link: 'https://www.instagram.com/reignbodyfuel/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Recess%20My%20Gym%20is%20just%20Different.mp4', name: 'Recess Fitness', handle: '@Recessdallas', followers: '29.2k', views: '14.4M', link: 'https://www.instagram.com/RecessDallas/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/VIrginia-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Virginia SanHouse', handle: '@virginiasanhouse', followers: '2.4M', views: '996k', link: 'https://www.instagram.com/reel/C9u4p2ORrRk/?igsh=MXc3aWsydjhna3ZwbA==' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/the-hopeaholics-podcast-ugc-video-light-house-media-dallas-videographer.MP4', name: 'The Hopeaholics', handle: '@thehopeaholics', followers: '326k', views: '680k', link: 'https://www.instagram.com/reel/CzHj1M7ypQX/?igsh=ZXVzMTdsaTF3NWw3' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/NEM-event-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Natalie Eva Marie', handle: '@natalieevamarie', followers: '6M', views: '5.8M', link: 'https://www.instagram.com/reel/Cry7APhgbHZ/?igsh=ZGluc2Y1ZTRweTM3' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/jakepaul-miketyson-mvp-dallas-event-ugc-light-house-media-videographer.mp4', name: 'Raphami lagres', handle: '@raphamilagres', followers: '184k', views: '453k', link: 'https://www.instagram.com/reel/DCc81bWS3JZ/?igsh=MTNuYjI2M2xteWk3bA==' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Thor-reign-ugc-video-lighthousemedia.MP4', name: 'Thor Bjornson', handle: '@hafthorbjornsson', followers: '1.5M', views: '996k', link: 'https://www.tiktok.com/t/ZPHsyc12njn3D-uDYcR/' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Kai-Greene-reign-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Kai Greene', handle: '@Kaigreene', followers: '7.1M', views: '1.1M', link: 'https://www.instagram.com/reel/CzOdSZ3OGQM/?igsh=cnZzeWxwYTNqdGdh' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/REIGN%20UK-ugc-light-house-media-dallas-videographer-event.mp4', name: 'REIGN UK', handle: '@reignbodyfueleurope', followers: '25.5k', views: '805k', link: 'https://www.instagram.com/reel/CnKEcnJpYfn/?igsh=MXhzcHQ1MXRzYWp3bg==' },
  { src: 'https://lhmcollective.b-cdn.net/UGC-Content/Arnold-event-ugc-video-light-house-media-dallas-videographer.MP4', name: 'Arnold Sports', handle: '@arnoldsports', followers: '1.8M', views: '122k', link: 'https://www.instagram.com/reel/C4BI7ZLOiUJ/?igsh=MWl1dnF2OTk3MHEzcA==' },
];

export default function UGCPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [playingStates, setPlayingStates] = useState<boolean[]>(
    Array(reels.length).fill(false)
  );

  // Per‑video mute state (default TRUE = muted)
  const [mutedStates, setMutedStates] = useState<boolean[]>(
    Array(reels.length).fill(true)
  );

  // Optional (kept for Safari poster timing)
  const capturePoster = useCallback((v: HTMLVideoElement) => {
    try {
      if (!v.videoWidth || !v.videoHeight) return;
      const c = document.createElement('canvas');
      c.width = v.videoWidth;
      c.height = v.videoHeight;
      const ctx = c.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(v, 0, 0, c.width, c.height);
    } catch {
      /* ignore */
    }
  }, []);

  // Only one video plays at a time
  const handlePlay = (i: number) => {
    setPlayingStates((prev) => prev.map((_, idx) => idx === i));
    videoRefs.current.forEach((vid, idx) => {
      if (idx !== i && vid && !vid.paused) vid.pause();
    });
  };

  const handlePause = (i: number) => {
    setPlayingStates((prev) => {
      if (!prev[i]) return prev;
      const next = [...prev];
      next[i] = false;
      return next;
    });
  };

  const togglePlay = (i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    if (v.paused) v.play().catch(() => { });
    else v.pause();
  };

  // Toggle mute, sync to the actual element
  const toggleMute = (i: number) => {
    setMutedStates((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      const v = videoRefs.current[i];
      if (v) v.muted = next[i];
      return next;
    });
  };

  // On load, align element.muted and prime first frame
  const handleLoaded = (i: number, v: HTMLVideoElement) => {
    try {
      v.muted = mutedStates[i];
      v.currentTime = 0;
      v.play().then(() => v.pause()).catch(() => { });
    } catch { }
    capturePoster(v);
  };

  return (
    <main className="bg-[#1a191b] text-[#cfb580] font-league">
      {/* Hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-video flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
          crossOrigin="anonymous"
          aria-hidden="true"
        >
          <source
            src={HERO_VIDEO_DESKTOP}
            media="(min-aspect-ratio: 4/3)"
            type="video/mp4"
          />
          <source
            src={HERO_VIDEO_MOBILE}
            media="(max-aspect-ratio: 4/3)"
            type="video/mp4"
          />
          {/* Fallback so there’s always a source */}
          <source src={HERO_VIDEO_DESKTOP} type="video/mp4" />
        </video>

        {/* Dim overlay above video */}
        <div className="absolute inset-0 bg-black/60 z-[1]" aria-hidden="true" />

        {/* Foreground text above everything */}
        <div className="relative z-[2] text-center px-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 text-[#cfb580]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Performance UGC That Converts
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-[#cfb580]/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We understand your brand identity and how to make your content
            resonate with your viewers in a way that actually generates
            conversions.
          </motion.p>
        </div>
      </section>


      {/* Grid */}
      <section className="pt-16 md:pt-24 px-4 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {reels.map((reel, index) => (
            <div key={index} className="flex flex-col items-center w-full max-w-[400px]">
              {/* Top Info */}
              <div className="mb-3 text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">{reel.name}</p>
                <p className="text-lg sm:text-xl md:text-2xl text-[#cfb580]/80">
                  {reel.handle} • {reel.followers} followers
                </p>
              </div>

              {/* Video Card */}
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden border border-[#cfb580]/30 shadow-lg bg-[#0f0f10]">
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={reel.src}
                  playsInline
                  loop
                  muted={mutedStates[index]}
                  preload="auto"
                  className="w-full h-full object-cover cursor-pointer"
                  crossOrigin="anonymous"
                  onLoadedData={(e) => handleLoaded(index, e.currentTarget)}
                  onClick={() => togglePlay(index)}
                  onPlay={() => handlePlay(index)}
                  onPause={() => handlePause(index)}
                />

                {/* Play overlay (only when paused) */}
                {!playingStates[index] && (
                  <button
                    type="button"
                    aria-label={`Play ${reel.name} video`}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent z-20"
                    onClick={() => togglePlay(index)}
                  >
                    <div className="w-16 h-16 bg-[#cfb580] text-[#1a191b] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Mute Button — Option 1 (Circular Gold) */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleMute(index); }}
                  aria-label={mutedStates[index] ? 'Unmute video' : 'Mute video'}
                  className="absolute bottom-3 left-3 z-20 rounded-full bg-[#cfb580] p-2 shadow-lg hover:bg-white transition"
                >
                  {mutedStates[index] ? (
                    // speaker (no waves) = muted
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3z" />
                    </svg>
                  ) : (
                    // speaker with wave = unmuted
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 100-6 4.5 4.5 0 000 6z" />
                    </svg>
                  )}
                </button>

                {/* IG link */}
                <a
                  href={reel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 text-xs bg-black/60 text-white px-2 py-1 rounded-full hover:bg-[#cfb580] hover:text-black transition z-20"
                >
                  View on IG
                </a>
              </div>

              {/* Views */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#cfb580]/70 italic text-center mt-2 max-w-[90%]">
                {reel.views} views
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Consult Today</h3>
        <p className="text-[#cfb580]/80 max-w-md mx-auto mb-6">
          Ready To Take Your Brand To The Next Level?
        </p>
        <a
          href="/consult"
          className="inline-block px-8 py-3 border border-[#cfb580] rounded-full text-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b] transition"
        >
          Connect Now
        </a>
      </section>
    </main>
  );
}
