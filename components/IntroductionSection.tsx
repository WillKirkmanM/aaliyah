"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import YouTube from "react-youtube";

interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
}

export default function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const { scrollY } = useScroll();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    { id: "78YDlgZfPus", start: 50, end: 70 }, // We Need A Resolution
    { id: "xgYUj_pAD-w", start: 17, end: 37 }, // More Than a Woman
    { id: "3HSJU5fDg0A", start: 250, end: 270 }, // Rock The Boat
    { id: "qTA0RuZoIxM", start: 22, end: 42 }, // Try Again
  ];

  const handleVideoEnd = useCallback(() => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }, []);

  const handleReady = useCallback((event: { target: YouTubePlayer }) => {
    setPlayer(event.target);
    event.target.playVideo();
  }, []);

  useEffect(() => {
    if (player) {
      if (isInView) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [isInView, player]);

  const videoScale = useTransform(scrollY, [0, 1000], [1.5, 2]);
  const videoBlur = useTransform(scrollY, [0, 300], [2, 8]);

  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const smoothVideoScale = useSpring(videoScale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const firstVideo = document.querySelector("#introduction");
    if (firstVideo) {
      firstVideo.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale: smoothVideoScale }}
        key={videos[currentVideoIndex].id}
      >
        <YouTube
          videoId={videos[currentVideoIndex].id}
          opts={{
            playerVars: {
              autoplay: 1,
              controls: 0,
              start: videos[currentVideoIndex].start,
              end: videos[currentVideoIndex].end,
              mute: 1,
              loop: 0,
              playlist: videos[currentVideoIndex].id,
            },
            width: "100%",
            height: "100%",
          }}
          className="absolute inset-0 w-full h-full pointer-events-none object-cover"
          onReady={handleReady}
          onEnd={handleVideoEnd}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: useTransform(scrollY, [0, 300], [0.4, 0.7]) }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full gap-8"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.h1
            className="text-white text-7xl md:text-9xl font-bold text-center tracking-wider"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            AALIYAH
          </motion.h1>
          <motion.p
            className="text-white text-2xl md:text-3xl font-light text-center tracking-widest"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            THE RED ALBUM
          </motion.p>
        </div>

        <motion.div
          className="relative group"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#570000] via-[#800000] to-[#8B0000] 
                       opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200
                       blur-lg group-hover:blur-2xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <button
            onClick={handleClick}
            className="relative px-8 py-4 bg-black text-white rounded-lg 
                     text-xl font-semibold transition-all duration-200
                     hover:text-purple-300 flex items-center gap-2 group-hover:bg-black/80"
          >
            Begin The Journey
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </motion.svg>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
