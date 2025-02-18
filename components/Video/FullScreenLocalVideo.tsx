"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useContext, useState } from "react";
import { NavbarContext } from "../Layout/NavbarContext";
import { Play, Pause, Volume2 } from "lucide-react";
import YouTube from 'react-youtube';

export default function FullScreenLocalVideo({
  videoId = "Q6Jbq0_Kv3s",
  autoplay = true,
  controls = false,
  id,
  scrollToNext = false,
  muted = true,
  title,
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const isInView = useInView(ref, { margin: "-20%" });
  const { setNavbarOpacity } = useContext(NavbarContext);
  const [tvOn, setTvOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      controls: controls ? 1 : 0,
      mute: muted ? 1 : 0,
      loop: !scrollToNext ? 1 : 0,
      modestbranding: 1,
      playsinline: 1,
      start: 27,
      end: 80,
    },
  };

  useEffect(() => {
    if (player && isInView) {
      setTvOn(true);
      if (isPlaying) {
        player.playVideo();
      }
    } else if (player) {
      setTvOn(false);
      player.pauseVideo();
    }
  }, [isInView, isPlaying, player]);

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (player) {
      player.setVolume(newVolume);
    }
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
  };

  const onEnd = (event: any) => {
    if (!scrollToNext) {
      event.target.seekTo(27);
      event.target.playVideo();
    }
  };

  return (
    <motion.section
      ref={ref}
      id="tv-section"
      className="h-screen relative bg-[#1a1a1a] overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          className="absolute w-[120%] h-[120%] object-cover scale-110 blur-3xl opacity-30"
          autoPlay={autoplay}
          muted
          playsInline
          loop
          initial={{ opacity: 0 }}
          animate={{ opacity: tvOn ? 0.3 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <source src={`https://www.youtube.com/watch?v=${videoId}`} type="video/mp4" />
        </motion.video>
      </div>

      <motion.div 
        className="relative w-[80vh] aspect-[4/3] bg-[#2a2a2a] rounded-[40px] p-8 shadow-2xl cursor-pointer group"
        onClick={togglePlayPause}
        style={{
          boxShadow: `
            inset 0 0 50px rgba(0,0,0,0.5),
            0 0 30px rgba(255,255,255,0.1),
            0 0 100px rgba(255,255,255,0.2)
          `,
        }}
      >
        <motion.div 
          className="absolute -top-12 left-1/3 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: tvOn ? 1 : 0, y: tvOn ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-sm text-white/70 flex items-center gap-3 px-6 py-2 bg-black/50 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500/70 animate-pulse" />
            <span className="tracking-wider uppercase whitespace-nowrap">
              {title || 'AALIYAH ▪ THE RED ALBUM'} • {tvOn ? "REC" : "STANDBY"}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -inset-1 rounded-[44px] opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: tvOn ? 0.5 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        />

        <div className="relative w-full h-full bg-black rounded-[20px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"
            animate={{
              opacity: tvOn ? [0.1, 0.2, 0.1] : 0,
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 w-full h-full">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onEnd={onEnd}
              className="absolute inset-0 w-full h-full"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>

          <div 
            className="absolute inset-0 bg-repeat-y pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)",
              backgroundSize: "100% 4px",
            }}
          />

          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 70% 30%, white 0%, transparent 50%)",
            }}
          />
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-6 py-3 rounded-b-[20px] flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: tvOn ? 1 : 0, y: tvOn ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            className="text-white/70 hover:text-white transition-colors"
          >
            {isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </button>

          <div className="flex items-center gap-2">
            <Volume2 size={18} className="text-white/70" />
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              onChange={handleVolumeChange}
              onClick={(e) => e.stopPropagation()}
              className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer 
                        hover:bg-white/30 transition-colors"
            />
          </div>
        </motion.div>

        <div className="absolute bottom-16 right-6 flex gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-4 h-4 rounded-full bg-[#1a1a1a] border-2"
              animate={{
                borderColor: tvOn ? ['#3a3a3a', '#4a4a4a', '#3a3a3a'] : '#3a3a3a',
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}