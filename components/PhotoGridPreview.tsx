'use client';

import React, { useEffect, useRef, useState } from 'react';
import { photoUrls } from '@/app/photo/photoData';

const INITIAL = 24;
const BATCH = 24;

export default function PhotoGridPreview() {
  const [visible, setVisible] = useState(INITIAL);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setVisible(v => Math.min(v + BATCH, photoUrls.length));
      },
      { rootMargin: '1200px 0px 1200px 0px', threshold: 0.01 }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="w-screen max-w-none px-3 py-40">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {photoUrls.slice(0, visible).map((photo, index) => {
          const src = photo.url;
          const srcSet = [
            `${src}?width=640 640w`,
            `${src}?width=1024 1024w`,
            `${src}?width=1440 1440w`,
            `${src}?width=1920 1920w`,
          ].join(', ');

          return (
            <div
              key={index}
              className="relative mb-3 overflow-hidden rounded-2xl bg-neutral-900 group cursor-pointer break-inside-avoid"
            >
              <img
                src={`${src}?width=1440`}
                srcSet={srcSet}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                alt={photo.alt || `Photo ${index + 1}`}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading={index < 8 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cfb580]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {visible < photoUrls.length && (
        <div ref={sentinelRef} className="h-10 w-full" />
      )}
    </div>
  );
}
