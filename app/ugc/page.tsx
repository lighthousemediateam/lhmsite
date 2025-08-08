'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HERO_VIDEO =
  'https://lhmcollective.b-cdn.net/UGC-Content/ugc-hero-montage.mp4'; // replace with your Bunny link

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
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/Recess%20My%20Gym%20is%20just%20Different.mp4',
    name: 'Recess Fitness Club',
    handle: '@Recessdallas',
    followers: '29.2k',
    caption: '“These results speak for themselves.”',
    views: '14.4M',
    link: 'https://www.instagram.com/RecessDallas/',
  },
  // New UGC entries...
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/VIrginia-ugc-video-light-house-media-dallas-videographer.MP4',
    name: 'Virginia SanHouse',
    handle: '@virginiasanhouse',
    followers: '2.4M',
    caption: 'Great Results',
    views: '996k',
    link: 'https://www.instagram.com/reel/C9u4p2ORrRk/?igsh=MXc3aWsydjhna3ZwbA==',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/the-hopeaholics-podcast-ugc-video-light-house-media-dallas-videographer.MP4',
    name: 'The Hopeaholics',
    handle: '@thehopeaholics',
    followers: '326k',
    caption: 'Great Results',
    views: '680k',
    link: 'https://www.instagram.com/reel/CzHj1M7ypQX/?igsh=ZXVzMTdsaTF3NWw3',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/NEM-event-ugc-video-light-house-media-dallas-videographer.MP4',
    name: 'Natalie Eva Marie',
    handle: '@natalieevamarie',
    followers: '6M',
    caption: 'Great Results',
    views: '5.8M',
    link: 'https://www.instagram.com/reel/Cry7APhgbHZ/?igsh=ZGluc2Y1ZTRweTM3',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/jakepaul-miketyson-mvp-dallas-event-ugc-light-house-media-videographer.mp4',
    name: 'Raphamilagres',
    handle: '@raphamilagres',
    followers: '184k',
    caption: 'Great Results',
    views: '453k',
    link: 'https://www.instagram.com/reel/DCc81bWS3JZ/?igsh=MTNuYjI2M2xteWk3bA==',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/Thor-reign-ugc-video-lighthousemedia.MP4',
    name: 'Thor Bjornson',
    handle: '@hafthorbjornsson',
    followers: '1.5M',
    caption: 'Great Results',
    views: '996k',
    link: 'https://www.tiktok.com/t/ZPHsyc12njn3D-uDYcR/',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/Kai-Greene-reign-ugc-video-light-house-media-dallas-videographer.MP4',
    name: 'Kai Greene',
    handle: '@Kaigreene',
    followers: '7.1M',
    caption: 'Great Results',
    views: '1.1M',
    link: 'https://www.instagram.com/reel/CzOdSZ3OGQM/?igsh=cnZzeWxwYTNqdGdh',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/REIGN%20UK-ugc-light-house-media-dallas-videographer-event.mp4',
    name: 'REIGN UK',
    handle: '@reignbodyfueleurope',
    followers: '25.5k',
    caption: 'Great Results',
    views: '805k',
    link: 'https://www.instagram.com/reel/CnKEcnJpYfn/?igsh=MXhzcHQ1MXRzYWp3bg==',
  },
  {
    src: 'https://lhmcollective.b-cdn.net/UGC-Content/Arnold-event-ugc-video-light-house-media-dallas-videographer.MP4',
    name: 'Arnold Sports',
    handle: '@arnoldsports',
    followers: '1.8M',
    caption: 'Great Results',
    views: '122k',
    link: 'https://www.instagram.com/reel/C4BI7ZLOiUJ/?igsh=MWl1dnF2OTk3MHEzcA==',
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
      {/* Hero with background video */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background video */}
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
          aria-hidden="true"
        />
        {/* 60% dim overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        {/* Foreground text */}
        <div className="relative z-10">
          <motion.h1
            className="text-7xl md:text-8xl font-bold mb-4 text-[#cfb580]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Performance UGC That Converts
          </motion.h1>
          <motion.p
            className="text-3xl max-w-4xl mx-auto text-[#cfb580]/80"
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
          href="/consult"
          className="inline-block px-8 py-3 border border-[#cfb580] rounded-full text-[#cfb580] hover:bg-[#cfb580] hover:text-[#1a191b] transition"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
