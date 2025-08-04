'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const reels = [
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/AthenaUGC-video.MP4',
    name: 'Athena Paris',
    handle: '@athenaparissss',
    followers: '865k',
    caption: '“Increased my sales by 350% for that month alone!”',
    views: '2.6M',
    link: 'https://www.instagram.com/reel/DLhTc7uuXCi/',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/ReignUGC-video.MP4',
    name: 'REIGN Body Fuel',
    handle: '@reignbodyfuel',
    followers: '335k',
    caption: '“Never Seen This Many Views Ever On Our Page.”',
    views: '8.2M',
    link: 'https://www.instagram.com/reignbodyfuel/',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/ugc/video-3.mp4',
    name: 'Blackhawk Roofing',
    handle: '@blackhawkroofing',
    followers: '35k',
    caption: '“These results speak for themselves.”',
    views: '640k',
    link: 'https://www.instagram.com/blackhawkroofing/',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/ugc/video-4.mp4',
    name: 'Dr. Vo',
    handle: '@drvo.skin',
    followers: '250k',
    caption: '“We doubled signups in under 48 hours.”',
    views: '3.1M',
    link: 'https://www.instagram.com/drvo.skin/',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/ugc/video-5.mp4',
    name: 'Elena, Brand Manager',
    handle: '@glowhaus',
    followers: '410k',
    caption: '“It outperformed our paid ads.”',
    views: '5M',
    link: 'https://www.instagram.com/glowhaus/',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/ugc/video-6.mp4',
    name: 'Mark from BoldFit',
    handle: '@boldfit.mark',
    followers: '990k',
    caption: '“Insane engagement on this one.”',
    views: '7.2M',
    link: 'https://www.instagram.com/boldfit.mark/',
  },
];

export default function UGCPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    Array(reels.length).fill(false)
  );

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    const updated = [...playingStates];
    updated[index] = !video.paused;
    setPlayingStates(updated);
  };

  return (
    <main className="bg-[#1a191b] text-[#cfb580] font-league">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Performance UGC That Converts
        </motion.h1>
        <motion.p
          className="text-3xl max-w-4xl text-[#cfb580]/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We understand your brand identity and how to make your content resonate
          with your viewers in a way that actually generates conversions.
        </motion.p>
      </section>

      {/* Grid */}
      <section className="py-0 px-4 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {reels.map((reel, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-[400px]"
            >
              {/* Top Info */}
              <div className="mb-3 text-center">
                <p className="text-5xl font-semibold">{reel.name}</p>
                <p className="text-2xl text-[#cfb580]/80">
                  {reel.handle} • {reel.followers} followers
                </p>
                <p className="text-2xl text-[#cfb580]/70 mt-1">{reel.views} views</p>
              </div>

              {/* Video Container */}
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden border border-[#cfb580]/30 shadow-lg group">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={reel.src}
                  playsInline
                  loop
                  controls
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => togglePlay(index)}
                />
                {!playingStates[index] && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent cursor-pointer"
                    onClick={() => togglePlay(index)}
                  >
                    <div className="w-16 h-16 bg-[#cfb580] text-[#1a191b] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <a
                  href={reel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-3 text-xs bg-black/60 text-white px-2 py-1 rounded-full hover:bg-[#cfb580] hover:text-black transition"
                >
                  View on IG
                </a>
              </div>

              {/* Caption */}
              <p className="text-2xl text-[#cfb580]/70 italic text-center mt-2 max-w-[90%]">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Consult Today!
        </h3>
        <p className="text-[#cfb580]/80 max-w-md mx-auto mb-6">
          Ready To Take Your Brand To The Next Level? Click Below Now
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-[#cfb580] rounded-full text-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b] transition"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
