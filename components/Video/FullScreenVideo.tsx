"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback, useContext } from "react";
import YouTube from "react-youtube";
import { NavbarContext } from "../Layout/NavbarContext";

interface FullScreenVideoProps {
  videoId: string;
  autoplay?: boolean;
  controls?: boolean;
  start?: number;
  end?: number;
  id?: string;
  scrollToNext?: boolean;
}

export default function FullScreenVideo({
  videoId,
  autoplay = true,
  controls = false,
  start,
  end,
  id,
  scrollToNext = false,
}: FullScreenVideoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });
  const [player, setPlayer] = useState<any | null>(null);
  const { setNavbarOpacity } = useContext(NavbarContext);

  const handleTimeUpdate = useCallback(() => {
    if (player && end) {
      const currentTime = player.getCurrentTime();
      if (currentTime >= end) {
        player.pauseVideo();
        handleVideoEnd();
      }
    }
  }, [player, end]);

  const handleVideoEnd = useCallback(() => {
    if (scrollToNext) {
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      window.scrollTo({
        top: currentScroll + viewportHeight,
        behavior: "smooth",
      });
    }
  }, [scrollToNext]);

  const onReady = (event: {
    target: {
      addEventListener: (arg0: string, arg1: (e: any) => void) => void;
      interval: string | number | NodeJS.Timeout | undefined;
    };
  }) => {
    setPlayer(event.target);
    event.target.addEventListener("onStateChange", (e) => {
      if (e.data === YouTube.PlayerState.PLAYING) {
        const interval = setInterval(() => {
          handleTimeUpdate();
        }, 100);
        event.target.interval = interval;
      } else {
        clearInterval(event.target.interval);
      }
    });
  };

  useEffect(() => {
    return () => {
      if (player && player.interval) {
        clearInterval(player.interval);
      }
    };
  }, [player]);

  useEffect(() => {
    if (player) {
      if (isInView) {
        player.playVideo();
        setNavbarOpacity(0.2);
      } else {
        player.pauseVideo();
        setNavbarOpacity(1);
        if (start) {
          player.seekTo(start, true);
        }
      }
    }
  }, [isInView, player, start, setNavbarOpacity]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="h-screen flex items-center justify-center bg-black relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-[2000px] mx-auto aspect-video relative">
        <YouTube
          videoId={videoId}
          opts={{
            playerVars: {
              autoplay: autoplay ? 1 : 0,
              controls: controls ? 1 : 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              fs: 0,
              start: start,
              end: end,
              playlist: videoId,
            },
            width: "100%",
            height: "100%",
          }}
          className="absolute top-0 left-0 w-full h-full"
          iframeClassName="w-full h-full"
          onReady={onReady}
          onEnd={handleVideoEnd}
        />
      </div>
    </motion.section>
  );
}
