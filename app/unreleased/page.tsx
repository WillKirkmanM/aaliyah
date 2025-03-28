import { Metadata } from 'next';
import UnreleasedComponent from "@/components/Page/Unreleased/UnreleasedComponent";

export const metadata: Metadata = {
  title: 'The Lost Tracks | Aaliyah',
  description: 'A collection of rare and unreleased tracks showcasing the depth and versatility of Aaliyah\'s artistry',
  openGraph: {
    title: 'THE LOST TRACKS',
    description: 'UNRELEASED SONGS',
    images: [
      {
        url: '/api/og?title=THE%20LOST%20TRACKS&subtitle=UNRELEASED%20SONGS&type=unreleased',
        width: 1200,
        height: 630,
        alt: 'The Lost Tracks - Unreleased Aaliyah Songs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE LOST TRACKS | Aaliyah',
    description: 'A collection of rare and unreleased tracks from Aaliyah',
    images: ['/api/og?title=THE%20LOST%20TRACKS&subtitle=UNRELEASED%20SONGS&type=unreleased'],
  },
};

export default function UnreleasedPage() {
  return <UnreleasedComponent />
}