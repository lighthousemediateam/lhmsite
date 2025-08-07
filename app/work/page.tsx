'use client';
import Head from 'next/head';
import { useEffect } from 'react';

const workItems = [
  {
    href: '/work/reign',
    title: 'REIGN Body Fuel Campaign Video by Light House Media',
    description: 'High-performance fitness content for REIGN Body Fuel, produced by Light House Media in Dallas.',
    cover: 'https://lhmcollective.b-cdn.net/REIGN-cover-photo-for-lighthousemedia.png',
    video: 'https://lhmcollective.b-cdn.net/REIGN%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/REIGN_White_Text_Transparent.png',
  },
  {
    href: '/work/reign-storm',
    title: 'REIGN Storm Ibiza Campaign Video by Light House Media',
    description: 'Fashion-forward lifestyle video for REIGN Storm captured by Light House Media in Ibiza.',
    cover: 'https://lhmcollective.b-cdn.net/REIGN-STORM-cover-photo-for-lighthousemedia.png',
    video: 'https://lhmcollective.b-cdn.net/RS%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/reign_storm_logo_final_cleaned_v3.png',
  },
  {
    href: '/work/recess',
    title: 'Recess Fitness Club Video by Light House Media',
    description: 'Social-driven gym video production by Light House Media for Recess Fitness Club in Dallas.',
    cover: 'https://lhmcollective.b-cdn.net/Recess-cover-photo-for-lighthousemedia.png',
    video: 'https://lhmcollective.b-cdn.net/Class%20at%20Recess%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/RecessLogo_RVersion_NoBox_White_300dpi_F.png',
  },
  {
    href: '/work/avondale',
    title: 'Spyder Avondale Dealership Video by Light House Media',
    description: 'Cinematic luxury car video production for Avondale by Light House Media.',
    cover: 'https://lhmcollective.b-cdn.net/avondale%20cover%20photo(small).jpg',
    video: 'https://lhmcollective.b-cdn.net/Spyder%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/avondale%20logo.png',
  },
  {
    href: "/work/itdrc",
    title: 'ITDRC Nonprofit Video by Light House Media',
    description: 'Documentary-style storytelling for ITDRC by Light House Media.',
    cover: 'https://lhmcollective.b-cdn.net/ITDRC%20cover%20photo.png',
    video: 'https://lhmcollective.b-cdn.net/ITDRC%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/itdrc_logo_white.png',
  },
  {
    href: '/work/virgin',
    title: 'Virgin Hotels Dallas Video by Light House Media',
    description: 'Event-focused video content for Virgin Hotels produced by Light House Media.',
    cover: 'https://lhmcollective.b-cdn.net/Virgin%20cover%20photo.png',
    video: 'https://lhmcollective.b-cdn.net/Virgin%20Preview%202.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/virgin%20hotel%20logo.png',
  },
  {
    href: '/work/cuisinart',
    title: 'Cuisinart Brand Campaign Video by Light House Media',
    description: 'Commercial video production for Cuisinart kitchenware by Light House Media.',
    cover: 'https://lhmcollective.b-cdn.net/cuisinart%20cover%20photo.jpg',
    video: 'https://lhmcollective.b-cdn.net/Cuisinart%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Logos/cuisnart%20logo.png',
  },
  {
    href: '/work/blackhawk',
    title: 'Blackhawk Tactical Brand Video by Light House Media',
    description: 'High-impact tactical brand content for Blackhawk by Light House Media.',
    cover: 'https://lhmcollective.b-cdn.net/blackhawk%20cover%20photo.jpg',
    video: 'https://lhmcollective.b-cdn.net/Black%20Hawk%20Preview.mp4',
    logo: 'https://lhmcollective.b-cdn.net/Blackhawk%20logo%20v2.png',
  },
];

export default function WorkPage() {
  useEffect(() => {
    const videos = document.querySelectorAll('video.lazy-video');
    const loadVideo = (video: HTMLVideoElement) => {
      const source = video.querySelector('source');
      if (source && source.dataset.src) {
        source.src = source.dataset.src;
        video.load();
      }
    };
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadVideo(entry.target as HTMLVideoElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    videos.forEach((video) => observer.observe(video));
  }, []);

  const videoSchemas = workItems.map((item) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: item.title,
    description: item.description,
    thumbnailUrl: item.cover,
    contentUrl: item.video,
    uploadDate: '2025-08-01',
    publisher: {
      '@type': 'Organization',
      name: 'Light House Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lhmcollective.b-cdn.net/lhm-logo.png',
      },
    },
  }));

  return (
    <>
      <Head>
        <title>Dallas Videographer | Light House Media</title>
        <meta
          name="description"
          content="Professional videography and photography in Dallas for brands, events, gyms, lawyers, corporate parties, drone work, and real estate."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dallas Videographer | Light House Media" />
        <meta property="og:description" content="Professional video and photo production in Dallas, TX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lhmcollective.com/work" />
        <meta property="og:image" content="https://www.lhmcollective.com/og-preview.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }}
        />
      </Head>

      <div className="bg-[#1a191b] text-[#cfb580] min-h-screen px-0 pt-28 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {workItems.map((item, idx) => (
            <a href={item.href} key={idx} className="block group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 group-hover:opacity-0 hidden md:block filter brightness-[0.6]"
                />
                <video
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300 opacity-50 group-hover:opacity-100 lazy-video"
                  muted
                  playsInline
                  autoPlay
                  loop
                  preload="none"
                  poster={item.cover}
                >
                  <source data-src={item.video} type="video/mp4" />
                </video>
                <img
                  src={item.logo}
                  alt={`${item.title} Logo`}
                  className="absolute top-1/2 left-1/2 w-[49%] max-w-[312px] transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-90 pointer-events-none transition-opacity duration-[2000ms] group-hover:opacity-0"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
