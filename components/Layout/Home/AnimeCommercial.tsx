"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import YouTube from "react-youtube";

export default function AnimeCommercial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const videoId = "J8Cj4HoGG6Y";

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-[2000px] mx-auto aspect-video relative">
        <YouTube
          videoId={videoId}
          opts={{
            playerVars: {
              autoplay: 0,
              controls: 1,
              modestbranding: 1,
              rel: 0,
            },
            width: "100%",
            height: "100%",
          }}
          className="absolute top-0 left-0 w-full h-full"
          iframeClassName="w-full h-full"
        />
      </div>
    </motion.section>
  );
}
