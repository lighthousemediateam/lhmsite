'use client';

import React from 'react';
import clsx from 'clsx';
import { photoUrls } from '@/app/photo/photoData'; // must be exactly 118

type GridItem = {
  id: number;
  span?: 'tall' | 'wide' | 'large';
};

// Generate span layout for 118 items
const gridItems: GridItem[] = Array.from({ length: photoUrls.length }, (_, i) => {
  const id = i + 1;
  let span: GridItem['span'];

  if (id % 12 === 0) span = 'large';
  else if (id % 5 === 0) span = 'wide';
  else if (id % 4 === 0) span = 'tall';

  return { id, span };
});

export default function PhotoGridPreview() {
  return (
    <div className="w-screen max-w-none px-4 py-40">
      

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] auto-rows-[300px] grid-flow-dense gap-6">
        {gridItems.map(({ id, span }) => {
          const photo = photoUrls[id - 1]; // Get the actual image URL
          if (!photo) return null;

          return (
            <div
              key={id}
              className={clsx(
                'relative rounded-xl shadow-lg overflow-hidden transition-all duration-300',
                {
                  'lg:col-span-2': span === 'wide' || span === 'large',
                  'lg:row-span-2': span === 'tall' || span === 'large',
                }
              )}
            >
              <img
                src={photo.url}
                alt={`Photo ${id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
