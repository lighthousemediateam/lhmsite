'use client';

import React from 'react';
import clsx from 'clsx';

type GridItem = {
  id: number;
  span?: 'tall' | 'wide' | 'large';
};

// Generate 118 items with alternating spans
const gridItems: GridItem[] = Array.from({ length: 118 }, (_, i) => {
  const id = i + 1;
  let span: GridItem['span'];

  if (id % 12 === 0) span = 'large';
  else if (id % 5 === 0) span = 'wide';
  else if (id % 4 === 0) span = 'tall';

  return { id, span };
});

export default function PhotoGridPreview() {
  return (
    <div className="w-screen max-w-none px-4 py-20">
      <p className="text-center text-sm text-[#cfb580] mb-6">
        Showing {gridItems.length} items
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] auto-rows-[300px] grid-flow-dense gap-6">
        {gridItems.map(({ id, span }) => (
          <div
            key={id}
            className={clsx(
              'relative rounded-xl shadow-lg flex items-center justify-center text-white text-4xl font-bold bg-neutral-800 transition-all duration-300',
              {
                'lg:col-span-2': span === 'wide' || span === 'large',
                'lg:row-span-2': span === 'tall' || span === 'large',
              }
            )}
          >
            {id}
          </div>
        ))}
      </div>
    </div>
  );
}
