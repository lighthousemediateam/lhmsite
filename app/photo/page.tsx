export const metadata = {
  title: "Dallas Photographer | Light House Media",
  description: "Professional Photography based in Dallas, Texas for brands, events, and real estate.",
};

'use client';

import React from 'react';
import PhotoGridPreview from '@/components/PhotoGridPreview';

export default function PhotoPage() {
  return (
    <main className="min-h-screen bg-[#1a191b] text-[#cfb580]">
      <div className="flex justify-center mt-36 mb-6">
        <h1 className="text-8xl font-bold uppercase border-b-4 border-[#cfb580] pb-1">
          Photography
        </h1>
      </div>

      <PhotoGridPreview />
    </main>
  );
}
