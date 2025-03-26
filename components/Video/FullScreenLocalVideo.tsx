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
        setNavbarOpacity(0.2)
      }
    } else if (player) {
      setTvOn(false);
      player.pauseVideo();
      setNavbarOpacity(0.8)
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
      id="player-section"
      className="h-screen relative bg-[#050A18] overflow-hidden flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010B27] to-[#190028]" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffaa' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>
  
      <motion.div 
        className="relative z-30 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: tvOn ? 1 : 0, y: tvOn ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="font-mono text-xl flex flex-col items-center gap-2 px-10 py-4 rounded-lg backdrop-blur-sm"
          style={{
            background: 'rgba(5,10,25,0.75)',
            boxShadow: '0 0 30px rgba(0,200,255,0.4), inset 0 0 10px rgba(0,200,255,0.2)',
            border: '1px solid rgba(0,255,255,0.2)',
          }}
          animate={{
            boxShadow: tvOn ? [
              '0 0 30px rgba(0,200,255,0.4), inset 0 0 10px rgba(0,200,255,0.2)',
              '0 0 40px rgba(0,200,255,0.6), inset 0 0 15px rgba(0,200,255,0.3)',
              '0 0 30px rgba(0,200,255,0.4), inset 0 0 10px rgba(0,200,255,0.2)',
            ] : '0 0 0px rgba(0,200,255,0)'
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FFEE] to-transparent opacity-80" />
          
          <motion.h2 
            className="text-[#00FFEE] tracking-[0.15em] uppercase font-bold text-center"
            style={{
              textShadow: '0 0 5px #00FFEE, 0 0 10px #00FFEE, 0 0 15px #00FFEE'
            }}
            animate={{
              textShadow: tvOn ? [
                '0 0 5px #00FFEE, 0 0 10px #00FFEE, 0 0 15px #00FFEE',
                '0 0 7px #00FFEE, 0 0 14px #00FFEE, 0 0 21px #00FFEE',
                '0 0 5px #00FFEE, 0 0 10px #00FFEE, 0 0 15px #00FFEE'
              ] : '0 0 0px #00FFEE'
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {title || 'AALIYAH'}
          </motion.h2>
          
          <motion.div 
            className="text-[#FF00AA] text-sm tracking-wider uppercase"
            style={{
              textShadow: '0 0 5px #FF00AA, 0 0 10px #FF00AA'
            }}
            animate={{
              textShadow: [
                '0 0 5px #FF00AA, 0 0 10px #FF00AA',
                '0 0 8px #FF00AA, 0 0 16px #FF00AA',
                '0 0 5px #FF00AA, 0 0 10px #FF00AA'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            {tvOn ? "NOW PLAYING" : "STANDBY"}
          </motion.div>
          
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF00AA] to-transparent opacity-80" />
        </motion.div>
      </motion.div>
  
      <motion.div 
        className="relative w-[95vh] aspect-[16/9] bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-[20px] p-[2px] shadow-2xl cursor-pointer group overflow-hidden"
        onClick={togglePlayPause}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          boxShadow: `
            0 0 0 2px rgba(0,200,255,0.3),
            0 0 30px rgba(0,180,255,0.6),
            0 0 100px rgba(0,150,255,0.3)
          `,
        }}
      >
        <div className="absolute inset-0 rounded-[20px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#CDD7E0] to-[#8B93A2] opacity-80" />
          <div className="absolute inset-[3px] rounded-[18px] overflow-hidden bg-[#060810]" />
        </div>
  
        <div className="relative w-full h-full rounded-[16px] overflow-hidden z-10 p-[16px]">
          <div className="relative w-full h-full bg-black rounded-[10px] overflow-hidden border-t border-l border-[#4A5569] border-opacity-40">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#00FFFF10] to-[#FF10FF10] z-20 pointer-events-none mix-blend-overlay"
              animate={{
                opacity: tvOn ? [0.1, 0.3, 0.1] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
  
            <div className="absolute inset-0 w-full h-full z-10 overflow-hidden">
              <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                onEnd={onEnd}
                className="absolute inset-0 w-full h-full"
                style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  width: '140%',
                  height: '140%',
                  transform: 'translate(-50%, -50%)', 
                  objectFit: 'cover' 
                }}
              />
            </div>
  
            <div className="absolute inset-0 bg-repeat-y pointer-events-none z-20 opacity-20"
              style={{
                backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%)",
                backgroundSize: "100% 2px",
              }}
            />
  
            <div className="absolute inset-0 opacity-30 z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.2) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </motion.div>
  
      <motion.div 
        className="relative z-30 w-[80%] max-w-[900px] flex items-center justify-between gap-6 p-3 rounded-full mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: tvOn ? 1 : 0, y: tvOn ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(to right, rgba(20,30,60,0.85), rgba(40,20,80,0.85))',
          boxShadow: '0 0 20px rgba(0,200,255,0.3), inset 0 0 10px rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100,200,255,0.2)'
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlayPause();
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #2B3760 0%, #0B1023 100%)',
            boxShadow: isPlaying ? 
              '0 0 15px rgba(0,255,255,0.8), inset 0 0 5px rgba(0,255,255,0.5)' : 
              '0 0 10px rgba(0,150,255,0.4), inset 0 0 3px rgba(0,150,255,0.3)'
          }}
        >
          {isPlaying ? (
            <Pause size={20} className="text-[#00DDFF]" style={{filter: 'drop-shadow(0 0 2px #00DDFF)'}} />
          ) : (
            <Play size={20} className="text-[#00DDFF]" style={{filter: 'drop-shadow(0 0 2px #00DDFF)'}} />
          )}
        </button>
  
        <div className="flex items-center gap-4 flex-1 px-4">
          <Volume2 size={16} className="text-[#00DDFF]" style={{filter: 'drop-shadow(0 0 2px #00DDFF)'}} />
          <div className="w-full h-2 bg-[#071428] rounded-full overflow-hidden p-[1px]">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              onChange={handleVolumeChange}
              onClick={(e) => e.stopPropagation()}
              className="w-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00FFEE] [&::-webkit-slider-thumb]:shadow-[0_0_10px_#00FFEE]"
              style={{
                background: `linear-gradient(to right, #00FFEE ${volume}%, #071428 ${volume}%)`,
                height: '4px'
              }}
            />
          </div>
        </div>
  
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: i === 0 ? '#00FFAA' : i === 1 ? '#FF00AA' : '#00AAFF',
              }}
              animate={{
                boxShadow: tvOn ? 
                  [`0 0 5px ${i === 0 ? '#00FFAA' : i === 1 ? '#FF00AA' : '#00AAFF'}`,
                   `0 0 10px ${i === 0 ? '#00FFAA' : i === 1 ? '#FF00AA' : '#00AAFF'}`,
                   `0 0 5px ${i === 0 ? '#00FFAA' : i === 1 ? '#FF00AA' : '#00AAFF'}`] : 
                  `0 0 0px ${i === 0 ? '#00FFAA88' : i === 1 ? '#FF00AA88' : '#00AAFF88'}`,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}