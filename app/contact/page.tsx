import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Book a Dallas Videographer or Photographer',
  description:
    'Get in touch with Light House Media to book video production, brand photography, or UGC content in Dallas, TX. Serving DFW and surrounding areas.',
  keywords: [
    'book Dallas videographer',
    'hire Dallas photographer',
    'contact Light House Media',
    'Dallas video production quote',
    'DFW video production inquiry',
  ],
  alternates: { canonical: 'https://www.lhmcollective.com/contact' },
  openGraph: {
    title: 'Contact Light House Media | Dallas Video & Photo',
    description: 'Book video production, photography, or UGC content in Dallas, TX.',
    url: 'https://www.lhmcollective.com/contact',
    type: 'website',
  },
};

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
