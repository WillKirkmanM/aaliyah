"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import YouTube from "react-youtube";

interface SongSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradientColors: string[];
  reversed?: boolean;
  videoId?: string;
  singleColumn?: boolean;
}

export default function TrackSection({
  title,
  description,
  imageSrc,
  imageAlt,
  gradientColors,
  reversed = false,
  videoId,
  singleColumn = false,
}: SongSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const Content = () => (
    <motion.div className="flex flex-col">
      <motion.div
        initial={{ x: reversed ? -100 : 100, opacity: 0 }}
        animate={
          isInView
            ? { x: 0, opacity: 1 }
            : { x: reversed ? -100 : 100, opacity: 0 }
        }
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, ${gradientColors.join(
              ", "
            )})`,
          }}
        >
          {title}
        </motion.h2>
        <p className="text-gray-300 text-lg mb-8">{description}</p>
      </motion.div>
      {videoId && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-[280px] w-full mt-4"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={280}
            className="object-cover rounded-lg shadow-2xl relative z-10"
            priority
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </motion.div>
      )}
    </motion.div>
  );

  const VideoWrapper = () => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative w-full aspect-video"
    >
      <div className="absolute inset-0 z-10">
        <div
          className="absolute inset-0 rounded-lg blur-3xl animate-[pulse_3s_ease-in-out_infinite]"
          style={{
            background: `radial-gradient(circle at center, ${gradientColors
              .map(
                (color, index) =>
                  `${color} ${(index * 100) / gradientColors.length}%`
              )
              .join(", ")})`,
            opacity: 0.7,
          }}
        />
      </div>
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
        }}
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl relative z-10"
        iframeClassName="w-full h-full rounded-lg"
      />
    </motion.div>
  );

  const ImageWrapper = () => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative h-[500px] w-full"
    >
      <div className="absolute inset-0 z-10">
        <div
          className="absolute inset-0 rounded-lg blur-3xl animate-[pulse_3s_ease-in-out_infinite]"
          style={{
            background: `radial-gradient(circle at center, ${gradientColors
              .map(
                (color, index) =>
                  `${color} ${(index * 100) / gradientColors.length}%`
              )
              .join(", ")})`,
            opacity: 0.7,
          }}
        />
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        className="object-cover object-[center_40%] rounded-lg shadow-2xl relative z-10 h-full w-full"
        priority
        sizes="(max-width: 768px) 100vw, 500px"
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
      />
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black relative py-24 md:py-32"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {singleColumn ? (
          <div className="flex flex-col items-center gap-12 md:gap-16 max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${gradientColors.join(
                  ", "
                )})`,
              }}
              initial={{ y: -50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {title}
            </motion.h2>
            <div className="w-full">
              {videoId ? <VideoWrapper /> : <ImageWrapper />}
            </div>
            <motion.p
              className="text-gray-300 text-lg text-center max-w-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {description}
            </motion.p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {reversed ? (
              <>
                <div className="space-y-8">
                  <Content />
                </div>
                <div className="w-full">
                  {videoId ? <VideoWrapper /> : <ImageWrapper />}
                </div>
              </>
            ) : (
              <>
                <div className="w-full">
                  {videoId ? <VideoWrapper /> : <ImageWrapper />}
                </div>
                <div className="space-y-8">
                  <Content />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
}
