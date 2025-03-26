"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Play, Pause } from "lucide-react";
import { usePathname } from 'next/navigation';
import { usePlayer } from "@/hooks/usePlayer";
import { NavbarContext } from "./NavbarContext";

interface NavbarProps {
  isControlsEnabled?: boolean;
  onPlayPause?: (isPlaying: boolean) => void;
}

const Marquee = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setShouldAnimate(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [children]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={textRef}
        className={`whitespace-nowrap ${
          shouldAnimate ? "animate-marquee hover:pause" : ""
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Navbar({ isControlsEnabled, onPlayPause }: NavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();
  const { playingSong } = usePlayer();
  const { navbarOpacity } = useContext(NavbarContext);

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);

  const isActive = (path: string) => pathname === path;

  const handlePlayPause = () => {
    const newPlayState = !isPlaying;
    setIsPlaying(newPlayState);
    onPlayPause?.(newPlayState);
  };

  const renderPrompt = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.span
          key="instagram"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="text-sm ml-4 bg-gradient-to-tr from-yellow-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent font-medium"
        ></motion.span>
      </AnimatePresence>
    );
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 flex justify-center z-[60] p-2`}
      style={{ opacity: navbarOpacity }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{
          height: isExpanded
            ? typeof window !== "undefined" && window.innerWidth < 768
              ? 200
              : 48
            : 48,
          width: isExpanded ? "90%" : 280,
          borderRadius: isExpanded
            ? typeof window !== "undefined" && window.innerWidth < 768
              ? 24
              : 999
            : 999,
          backgroundColor: `rgba(0, 0, 0, 0.8)`,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="backdrop-blur-xl relative overflow-hidden"
      >
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 top-3 flex items-center gap-4"
            >
            <Link href="/">
              <Image
                src="/aaliyah.jpg"
                alt="Instagram"
                width={26}
                height={26}
                priority
                className="opacity-90 hover:opacity-100 transition-opacity rounded-full"
                />
            </Link>
              {renderPrompt()}
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && playingSong && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 flex items-center h-full"
          >
            <div className="flex items-center gap-2 w-[180px]">
              <div className="w-6 h-6 relative rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={playingSong.cover}
                  alt={playingSong.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Marquee className="text-white text-sm font-medium">
                {playingSong.title}
              </Marquee>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-8 h-full"
            >
              <nav className="flex flex-col md:flex-row items-center justify-between h-full text-white">
                <div className="flex items-center gap-4 py-3 md:py-0">
                <Link href="/">
                  <Image
                    src="/aaliyah.jpg"
                    alt="Instagram"
                    width={26}
                    height={26}
                    className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer rounded-full"
                    />
                </Link>
                <Link href="https://open.spotify.com/album/5eHseOO2Hm8ryJCZTtbp01">
                  <Image
                      src="/spotify.png"
                      alt="Spotify"
                      width={26}
                      height={26}
                      className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    />
                  </Link>
                <Link href={"https://music.youtube.com/playlist?list=OLAK5uy_nMkuTRPRFSB-DGO76r064IHSFuCbeecy8"}>
                    <Image
                        src="/youtube-music.jpg"
                        alt="YouTube Music"
                        width={26}
                        height={26}
                        className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer rounded-full"
                    />
                </Link>
                <Link href="https://music.apple.com/us/album/aaliyah/1769670387">
                    <Image
                        src="/apple-music.png"
                        alt="Apple Music"
                        width={26}
                        height={26}
                        className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer rounded-full"
                    />
                </Link>
                <Link href={"https://blackgroundrecords.net/artists/music/aaliyah"}>
                    <Image
                        src="/blackground-records.png"
                        alt="BlackGround Records"
                        width={26}
                        height={26}
                        className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer invert"
                        />
                </Link>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 md:pr-10">
                  {[
                    { href: '/lyrics', label: 'Lyrics' },
                    { href: '/tracklist', label: 'Tracklist' },
                    { href: '/about', label: 'About' },
                    { href: '/unreleased', label: 'Unreleased' },
                    { href: '/slowed', label: 'Slowed' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`relative text-xl font-medium transition-colors ${
                        isActive(href) 
                          ? 'text-red-500' 
                          : 'text-white hover:text-gray-300'
                      }`}
                    >
                      {label}
                      {isActive(href) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-end h-full pr-16"
            >
              <span className="text-white text-sm font-medium"></span>
            </motion.div>
          )}
        </AnimatePresence>

        {playingSong && (
          <motion.button
            onClick={handlePlayPause}
            className="absolute right-12 top-[calc(50%-12px)] w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-white fill-white" />
            ) : (
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            )}
          </motion.button>
        )}

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-3 top-[calc(50%-9px)] text-white z-50"
          initial={false}
          animate={{
            rotate: isExpanded ? 90 : 0,
          }}
        >
          {isExpanded ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
