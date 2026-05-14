import type { Metadata } from 'next';
import PhotoGridPreview from '@/components/PhotoGridPreview';

export const metadata: Metadata = {
  title: 'Dallas Brand Photographer | Photo Gallery',
  description:
    'Browse the photo gallery of Light House Media — Dallas brand photographer specializing in events, fitness, corporate, and lifestyle photography across Dallas–Fort Worth, TX.',
  keywords: [
    'Dallas photographer',
    'Dallas brand photography',
    'event photographer Dallas TX',
    'fitness photographer Dallas',
    'corporate photographer Dallas',
    'Dallas lifestyle photography',
    'DFW photographer',
  ],
  alternates: { canonical: 'https://www.lhmcollective.com/photo' },
  openGraph: {
    title: 'Dallas Brand Photographer | Photo Gallery — Light House Media',
    description:
      'Brand, event, and lifestyle photography in Dallas, TX by Light House Media.',
    url: 'https://www.lhmcollective.com/photo',
    type: 'website',
  },
};

export default function PhotoPage() {
  return (
    <main className="min-h-screen bg-[#1a191b] text-[#cfb580]">
      <div className="flex justify-center mt-36 mb-6 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase border-b-4 border-[#cfb580] pb-1 text-center">
          Photo Gallery
        </h1>
      </div>

      <PhotoGridPreview />
    </main>
  );
}
