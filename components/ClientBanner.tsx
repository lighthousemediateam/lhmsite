'use client';

import React from 'react';
import styles from './ClientBanner.module.css';

const bannerItems = [
  {
    href: '/reign-page',
    videoSrc: 'https://lhmcollective.b-cdn.net/REIGN%20FULL%2060s%20FINAL.mp4',
    logoSrc: 'https://www.lhmcollective.com/s/REIGN_Grayscale_Branding_2019_Positive_Horizontal.png',
    alt: 'REIGN Logo',
  },
  {
    href: '/reign-storm-page',
    videoSrc: 'https://lhmcollective.b-cdn.net/STORM%20FULL%20QUALITY.mp4',
    logoSrc: 'https://www.lhmcollective.com/s/reign_storm_logo_final_cleaned_v3.png',
    alt: 'STORM Logo',
  },
  {
    href: '/recess-page',
    videoSrc: 'https://lhmcollective.b-cdn.net/RECESS%20-%20main%20client%20video.mp4',
    logoSrc: 'https://www.lhmcollective.com/s/RecessLogo_RVersion_NoBox_White_300dpi_F-xftj.png',
    alt: 'Recess Logo',
  },
  {
    href: '/company-4',
    videoSrc: 'https://lhmcollective.b-cdn.net/Spyder%20Preview.mp4',
    logoSrc: 'https://www.lhmcollective.com/s/avondale-logo.png',
    alt: 'Avondale Logo',
  },
  {
    href: '/company-5',
    videoSrc: 'https://lhmcollective.b-cdn.net/ITDRC%20Preview.mp4',
    logoSrc: 'https://www.lhmcollective.com/s/itdrc_logo_white.png',
    alt: 'ITDRC Logo',
  },
  {
    href: '/company-6',
    videoSrc: 'https://lhmcollective.b-cdn.net/Virgin%20Preview%202.mp4',
    logoSrc: 'https://www.lhmcollective.com/s/virgin-hotel-logo.png',
    alt: 'Virgin Hotels Logo',
  },
];

export default function ClientBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.track}>
        {bannerItems.concat(bannerItems).map((item, idx) => (
          <a href={item.href} key={idx} className={styles.item}>
            <video
              src={item.videoSrc}
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              className={styles.video}
            />
            <img
              src={item.logoSrc}
              alt={item.alt}
              className={styles.logoOverlay}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
