'use client';

import React from 'react';
import Head from 'next/head';
import PhotoGridPreview from '@/components/PhotoGridPreview';

export default function PhotoPage() {
  return (
    <>
      <Head>
        <title>Dallas Photographer | Light House Media</title>
        <meta
          name="description"
          content="Professional Photography based in Dallas, Texas for brands, events, and real estate."
        />
      </Head>

      <main className="min-h-screen bg-[#1a191b] text-[#cfb580]">
        <div className="flex justify-center mt-36 mb-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase border-b-4 border-[#cfb580] pb-1 text-center">
            Photography
          </h1>
        </div>

        <PhotoGridPreview />
      </main>
    </>
  );
}
