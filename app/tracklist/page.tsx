import TracklistComponent from "@/components/Page/Tracklist/TracklistComponent";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Album Tracklist | Aaliyah',
  description: 'Explore the complete tracklist of Aaliyah\'s iconic self-titled album "Aaliyah"',
  openGraph: {
    title: 'ALBUM TRACKLIST',
    description: 'THE RED ALBUM',
    images: [
      {
        url: '/api/og?title=ALBUM%20TRACKLIST&subtitle=THE%20RED%20ALBUM&type=tracklist',
        width: 1200,
        height: 630,
        alt: 'Aaliyah - Album Tracklist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Album Tracklist | Aaliyah',
    description: 'Complete tracklist of Aaliyah\'s self-titled album',
    images: ['/api/og?title=ALBUM%20TRACKLIST&subtitle=THE%20RED%20ALBUM&type=tracklist'],
  },
};

export default function TrackListPage() {
  return <TracklistComponent />
}