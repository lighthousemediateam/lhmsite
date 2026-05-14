import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dallas Video Production Portfolio',
  description:
    'Watch cinematic brand videos by Light House Media — REIGN, Virgin Hotels, Recess Fitness, Cuisinart, Arnold Sports & more. Dallas TX video production company.',
  keywords: [
    'Dallas video production portfolio',
    'brand video Dallas TX',
    'commercial videographer Dallas',
    'cinematic video production Texas',
    'Dallas marketing video',
    'fitness brand video Dallas',
    'event video production DFW',
  ],
  alternates: { canonical: 'https://www.lhmcollective.com/work' },
  openGraph: {
    title: 'Video Portfolio | Light House Media Dallas',
    description:
      'Cinematic brand videos for REIGN, Virgin Hotels, Cuisinart, Arnold Sports & more — produced in Dallas, TX.',
    url: 'https://www.lhmcollective.com/work',
    type: 'website',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
