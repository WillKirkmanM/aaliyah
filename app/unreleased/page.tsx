"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const unreleasedTracks = [
  {
    title: "Where Can He Be?",
    description:
      "A haunting collaboration with Missy Elliott and Tweet, this track follows a heartbroken narrator searching the world for her lost love. The song masterfully blends Aaliyah's emotive vocals with soulful harmonies, creating a powerful narrative of love and loss.",

    videoId: "P3jHlC7Jar0",
    start: 0,
    end: 240,
  },
  {
    title: "Steady Ground",
    description:
      "This track explores the security and comfort found in true love. Aaliyah's verses, comparing love to a rose that grows and can't be priced with gold, intertwine beautifully with Static's reassuring chorus about finding steady ground in someone's presence.",

    videoId: "-GqIO4IUJFM",
    start: 0,
    end: 240,
  },
  {
    title: "Time",
    description:
      "A poignant meditation on time's constraints, where Aaliyah reflects on how there's never enough time to accomplish everything we desire. The track's hypnotic repetition emphasizes the universal struggle with life's temporal limitations.",

    videoId: "yWFroPzCOq8",
    start: 0,
    end: 240,
  },
  {
    title: "Ain't Never",
    description:
      "A dramatic narrative about infidelity and deception, where Aaliyah masterfully plays the role of a woman confronted by two boyfriends. The track showcases her ability to blend vulnerability and defiance, culminating in an unexpected twist ending.",
    videoId: "4s3bF22cW8Y",
    start: 0,
    end: 240,
  },
  {
    title: "They Say (Quit Hatin')",
    description:
      "A bold defense of love against outside criticism, where Aaliyah confronts those who question her relationship choices. The track showcases her assertive vocals as she addresses the gossip about her partner's reputation, blending confident declarations with R&B finesse.",

    videoId: "g3vdUjgtKi8",
    start: 0,
    end: 240,
  },
  {
    title: "La La La",
    description:
      "A bright, romantic track where Aaliyah expresses pure joy in love through playful 'la la la' refrains. The song celebrates finding your perfect place with someone special, blending sweet vocals with an uplifting melody that showcases her lighter, more carefree side.",
    videoId: "HS7L0R29t8I",
    start: 0,
    end: 240,
  },
  {
    title: "Giving Up",
    description:
      "A heart-wrenching ballad about the struggle to let go of love, where Aaliyah's vocals convey the raw emotions of someone fighting between holding on and giving up. Her masterful delivery captures both vulnerability and determination as she explores the pain of potentially losing someone who means everything to her.",
    videoId: "OWv8KyNj2jM",
    start: 0,
    end: 240,
  },
];

export default function UnreleasedPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-black text-white relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="/about/back.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          quality={100}
          priority
          style={{ filter: "blur(8px)" }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          ref={ref}
          className="min-h-screen flex items-center justify-center py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#570000] via-[#800000] to-[#8B0000]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              The Lost Tracks
            </motion.h1>
            <motion.p
              className="text-2xl text-white mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A collection of rare and unreleased tracks showcasing the depth
              and versatility of Aaliyah's artistry
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
          {unreleasedTracks.map((track, index) => (
            <motion.div
              key={track.videoId}
              className="flex flex-col gap-8 items-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {track.title}
              </motion.h2>

              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${track.videoId}?start=${track.start}&end=${track.end}&controls=1`}
                  title={track.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <motion.p
                className="text-xl text-white leading-relaxed text-center max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {track.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
