import React from 'react';
import PhotoGridPreview from '@/components/PhotoGridPreview';

export default function PhotoPage() {
  return (
    <main className="min-h-screen bg-[#1a191b] text-[#cfb580]">
      <h1 className="text-4xl font-bold text-center mt-12 mb-6">Photo Layout Preview</h1>
      <PhotoGridPreview />
    </main>
  );
}
