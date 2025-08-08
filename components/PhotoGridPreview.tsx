'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { photoUrls } from '@/app/photo/photoData'; // must be exactly 118

type GridItem = {
  id: number;
  span?: 'tall' | 'wide' | 'large';
};

// Keep your span pattern
const gridItems: GridItem[] = Array.from({ length: photoUrls.length }, (_, i) => {
  const id = i + 1;
  let span: GridItem['span'];
  if (id % 12 === 0) span = 'large';
  else if (id % 5 === 0) span = 'wide';
  else if (id % 4 === 0) span = 'tall';
  return { id, span };
});

const INITIAL = 24;
const BATCH = 24;

export default function PhotoGridPreview() {
  const [visible, setVisible] = useState(INITIAL);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Load more in chunks
  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(v => Math.min(v + BATCH, photoUrls.length));
        }
      },
      { rootMargin: '1200px 0px 1200px 0px', threshold: 0.01 }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="w-screen max-w-none px-4 py-40">
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] auto-rows-[300px] grid-flow-dense gap-6"
        style={{ contentVisibility: 'auto' as any, containIntrinsicSize: '2000px' }}
      >
        {gridItems.slice(0, visible).map(({ id, span }, index) => {
          const photo = photoUrls[id - 1];
          if (!photo) return null;

          // Build a responsive srcset from your Bunny URL
          const src = photo.url;
          const srcSet = [
            `${src}?width=640 640w`,
            `${src}?width=1024 1024w`,
            `${src}?width=1440 1440w`,
            `${src}?width=1920 1920w`,
            `${src}?width=2560 2560w`,
          ].join(', ');

          // Let the browser pick the right width per column
          const sizes =
            '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

          return (
            <div
              key={id}
              className={clsx(
                'relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 bg-neutral-900',
                {
                  'lg:col-span-2': span === 'wide' || span === 'large',
                  'lg:row-span-2': span === 'tall' || span === 'large',
                }
              )}
            >
              <img
                src={`${src}?width=1440`}          // sensible default
                srcSet={srcSet}
                sizes={sizes}
                alt={photo.alt || `Photo ${id}`}
                className="w-full h-full object-cover"
                loading={index < 6 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </div>
          );
        })}
      </div>

      {/* Sentinel: load next batch */}
      {visible < photoUrls.length && <div ref={sentinelRef} className="h-10 w-full" />}
    </div>
  );
}
