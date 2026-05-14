import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dallas UGC Video Production | Performance Content That Converts',
  description:
    "Light House Media creates high-converting UGC and influencer content for brands in Dallas, TX. We've worked with 6M+ follower creators and generated billions of views across TikTok and Instagram.",
  keywords: [
    'UGC content Dallas TX',
    'Dallas UGC video production',
    'influencer content Dallas',
    'TikTok video production Dallas',
    'Instagram Reels production Dallas',
    'social media content creator Dallas',
    'performance UGC agency Texas',
    'brand UGC video DFW',
  ],
  alternates: { canonical: 'https://www.lhmcollective.com/ugc' },
  openGraph: {
    title: 'Dallas UGC Video Production | Light House Media',
    description:
      'Performance UGC content that converts — created in Dallas, TX for brands on TikTok and Instagram.',
    url: 'https://www.lhmcollective.com/ugc',
    type: 'website',
  },
};

export default function UGCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
