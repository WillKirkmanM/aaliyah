"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  useRef,
  useEffect,
  useState,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
} from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import { usePlayer } from "@/hooks/usePlayer";
import fs from "fs/promises";
import path from "path";

interface ParsedLyric {
  time: number;
  text: string;
}

const parseLyrics = (lyrics: string) => {
  return lyrics.split("\n").map((line) => {
    const time = line.substring(line.indexOf("[") + 1, line.indexOf("]"));
    const text = line.substring(line.indexOf("]") + 1).trim();
    let minutes = 0,
      seconds = 0,
      hundredths = 0;

    if (time.includes(":")) {
      const timeParts = time.split(":");
      minutes = parseFloat(timeParts[0] ?? "0");
      if (timeParts[1]?.includes(".")) {
        const secondParts = timeParts[1].split(".");
        seconds = parseFloat(secondParts[0] ?? "0");
        hundredths = parseFloat(secondParts[1] ?? "0");
      } else {
        seconds = parseFloat(timeParts[1] ?? "0");
      }
    }

    const timeInSeconds = minutes * 60 + seconds + hundredths / 100;
    return { time: timeInSeconds, text };
  });
};

const songs = [
  {
    id: "32983",
    title: "We Need A Resolution",
    cover: "/we-need-a-resolution-short.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "SY_h1VHnOcE",
  },
  {
    id: "621661",
    title: "Loose Rap",
    cover: "/home/loose-rap.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "7Wojk_CF2Q8",
  },
  {
    id: "52261",
    title: "Rock The Boat",
    cover: "/home/rock-the-boat.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "-x9ogqa0pAc",
  },
  {
    id: "75886",
    title: "More Than A Woman",
    cover: "/home/more-than-a-woman.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "qR3AFKIdsU8",
  },
  {
    id: "67453",
    title: "Never No More",
    cover: "/home/never-no-more.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "tqppQp42Yc4",
  },
  {
    id: "34521",
    title: "I Care 4 U",
    cover: "/home/i-care-4-u.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "AgjcUh0RCo4",
  },
  {
    id: "98765",
    title: "Extra Smooth",
    cover: "/home/extra-smooth.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "S1YaJU_cycE",
  },
  {
    id: "45678",
    title: "Read Between The Lines",
    cover: "/home/read-between-the-lines.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "VXXX8k5_iDE",
  },
  {
    id: "23456",
    title: "U Got Nerve",
    cover: "/home/u-got-nerve.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "eHOV0Exv3nk",
  },
  {
    id: "78901",
    title: "I Refuse",
    cover: "/home/i-refuse.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "9kfz7DasWuE",
  },
  {
    id: "12345",
    title: "It's Whatever",
    cover: "/home/its-whatever.png",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "Tn4neKwfaXY",
  },
  {
    id: "56789",
    title: "I Can Be",
    cover: "/home/i-can-be.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "NNd-IOxe150",
  },
  {
    id: "90123",
    title: "Those Were The Days",
    cover: "/home/those-were-the-days.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "lKwaRL8vKlw",
  },
  {
    id: "34567",
    title: "What If",
    cover: "/home/what-if.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "6MPyMks-Pp8",
  },
  {
    id: "89012",
    title: "Try Again",
    cover: "/home/try-again.jpg",
    year: "2001",
    album: "Aaliyah",
    youtubeId: "y4x8fbc4fio",
  },
];

const styles = {
  modalContent: `
    relative h-[90vh] flex flex-row p-8 gap-12
  `,
  leftPanel: `
    w-[55%] relative aspect-square rounded-2xl overflow-hidden shadow-2xl
  `,
  videoWrapper: `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-full h-full z-10
  `,
  youtubeContainer: `
    relative w-full h-full flex items-center justify-center
  `,
  rightPanel: `
    w-[45%] flex flex-col gap-8
  `,
  songTitle: `
    text-4xl font-medium text-white/90 leading-tight
  `,
  songMeta: `
    text-lg text-white/60
  `,
  lyricsContainer: `
    text-2xl leading-relaxed space-y-4 text-white/80 font-light
    overflow-y-auto scrollbar-hide pr-4
  `,
  lyricLine: `
    py-2 px-3 transition-all duration-300 
    hover:bg-white/5 cursor-pointer rounded-lg
    [&.active-lyric]:bg-white/10 [&.active-lyric]:text-white
    [&.active-lyric]:scale-[1.02] [&.active-lyric]:font-normal
  `,
};

const PlayButton = () => (
  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
);

const MiniPlayer = ({ song, onClose }: any) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    className="fixed bottom-6 right-6 bg-neutral-900/90 backdrop-blur-md rounded-lg shadow-2xl z-50 w-[400px]"
  >
    <div className="flex items-center p-4">
      <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={song.cover}
          alt={song.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <h3 className="text-sm font-medium truncate">{song.title}</h3>
        <p className="text-xs text-gray-400 truncate">{song.album}</p>
      </div>
      <div className="relative w-[50px] h-[40px] mx-3 overflow-hidden rounded">
        <YouTube
          videoId={song.youtubeId}
          opts={{
            height: "40",
            width: "50",
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              fs: 0,
              modestbranding: 1,
              playsinline: 1,
              rel: 0,
              showinfo: 0,
            },
          }}
          className="absolute inset-0"
          onError={(e) => console.error("YouTube Player Error:", e)}
        />
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
      >
        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    </div>
  </motion.div>
);

const LyricsDisplay = ({ lyrics, onTimeClick, currentTime }: any) => {
  const lyricsRef = useRef<HTMLDivElement>(null);
  const activeLyricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeLyricRef.current && lyricsRef.current) {
      activeLyricRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime]);

  if (!lyrics?.length) {
    return (
      <div className="text-white/60 text-center py-8">No lyrics available</div>
    );
  }

  const isActive = (time: number, nextTime?: number) => {
    if (currentTime < 0.1 && time === lyrics[0].time) {
      return true;
    }

    if (nextTime) {
      return currentTime >= time && currentTime < nextTime;
    } else {
      return (
        currentTime >= time &&
        lyrics.every(
          (lyric: { time: number }) =>
            lyric.time <= time || currentTime < lyric.time
        )
      );
    }
  };

  return (
    <div className={styles.lyricsContainer} ref={lyricsRef}>
      {lyrics.map(
        (
          lyric: {
            time: number;
            text:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
          },
          index: number
        ) => {
          const isActiveLine = isActive(lyric.time, lyrics[index + 1]?.time);
          return (
            <div
              key={index}
              ref={isActiveLine ? activeLyricRef : null}
              className={`rounded-full ${styles.lyricLine} ${
                isActiveLine ? "active-lyric" : ""
              }`}
              onClick={() => onTimeClick(lyric.time)}
            >
              {lyric.text}
            </div>
          );
        }
      )}
    </div>
  );
};

export default function LyricsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedSong, setSelectedSong] = useState<(typeof songs)[0] | null>(
    null
  );
  const { playingSong, setPlayingSong } = usePlayer();
  const [currentLyrics, setCurrentLyrics] = useState<ParsedLyric[]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (selectedSong) {
      const filename = selectedSong.title.toLowerCase().replace(/ /g, "-");

      fetch(`/lyrics/${filename}.txt`)
        .then((response) => response.text())
        .then((text) => {
          const parsedLyrics = parseLyrics(text);
          setCurrentLyrics(parsedLyrics);
        })
        .catch((error) => {
          console.error("Error loading lyrics:", error);
          setCurrentLyrics([]);
        });
    }
  }, [selectedSong]);
  const openLyrics = (
    song: SetStateAction<{
      id: string;
      title: string;
      cover: string;
      year: string;
      album: string;
      youtubeId: string;
    } | null>
  ) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedSong(song);
      });
    } else {
      setSelectedSong(song);
    }
  };

  const closeLyrics = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedSong(null);
      });
    } else {
      setSelectedSong(null);
    }
  };

  const handlePlayClick = (song: (typeof songs)[0]) => {
    setPlayingSong(song);
  };

  useEffect(() => {
    if (currentLyrics.length > 0) {
      const activeLyricIndex = currentLyrics.findIndex((lyric, index) => {
        return (
          currentTime >= lyric.time &&
          (index === currentLyrics.length - 1 ||
            currentTime < currentLyrics[index + 1].time)
        );
      });

      currentLyrics.forEach((_, index) => {
        const element = document.getElementById(`lyric-${index}`);
        if (element) {
          element.classList.toggle("active-lyric", index === activeLyricIndex);
        }
      });
    }
  }, [currentTime, currentLyrics]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-black text-white py-24">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center">
          Lyrics
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              onClick={() => openLyrics(song)}
              style={{ viewTransitionName: `song-${song.id}` }}
            >
              <Image
                src={song.cover}
                alt={song.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <h2 className="text-2xl font-bold truncate">
                      {song.title}
                    </h2>
                    <p className="text-sm text-gray-300 mt-1 truncate">
                      {song.album} • {song.year}
                    </p>
                  </div>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handlePlayClick(song);
                    }}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <PlayButton />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedSong && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeLyrics();
              }
            }}
          >
            <motion.div
              className="relative w-full max-w-7xl mx-4 bg-[#1c1c1e]/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className={styles.modalContent}>
                <div className={styles.leftPanel}>
                  <Image
                    src={selectedSong.cover}
                    alt={selectedSong.title}
                    fill
                    className="object-cover blur-sm scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  <div className={styles.videoWrapper}>
                    <div className={styles.youtubeContainer}>
                      <YouTube
                        videoId={selectedSong.youtubeId}
                        opts={{
                          width: "100%",
                          height: "100%",
                          playerVars: {
                            autoplay: 1,
                            controls: 1,
                            modestbranding: 1,
                            playsinline: 1,
                            rel: 0,
                          },
                        }}
                        onStateChange={(event) => {
                          if (event.data === 1) {
                            const interval = setInterval(() => {
                              setCurrentTime(event.target.getCurrentTime());
                            }, 100);
                            event.target.intervalId = interval;
                          } else {
                            clearInterval(event.target.intervalId);
                          }
                        }}
                        className="w-full aspect-video"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.rightPanel}>
                  <button
                    onClick={closeLyrics}
                    className="absolute top-6 right-6 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="space-y-2">
                    <h2 className={styles.songTitle}>{selectedSong.title}</h2>
                    <p className={styles.songMeta}>
                      {selectedSong.album} • {selectedSong.year}
                    </p>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <LyricsDisplay
                      lyrics={currentLyrics}
                      onTimeClick={(time: SetStateAction<number>) => {
                        if (playingSong?.youtubeId === selectedSong.youtubeId) {
                          setCurrentTime(time);
                        }
                      }}
                      currentTime={currentTime}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}{" "}
        {playingSong && (
          <MiniPlayer song={playingSong} onClose={() => setPlayingSong(null)} />
        )}
      </motion.div>
    </div>
  );
}
