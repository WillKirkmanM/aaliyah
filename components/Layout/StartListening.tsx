"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function StartListening() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black/95 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 rounded-[3rem] blur-[128px] animate-[pulse_8s_ease-in-out_infinite]"
          style={{
            background: `radial-gradient(circle at center,
              rgba(181, 64, 84, 0.4) 0%,
              rgba(140, 7, 8, 0.3) 40%,
              rgba(17, 4, 4, 0.2) 100%
            )`,
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="h-auto lg:h-[600px] p-12 rounded-[2rem] flex flex-col backdrop-blur-xl bg-white/[0.02]"
          >
            <div className="flex flex-col flex-1 justify-center">
              <motion.h2
                className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Start Listening
              </motion.h2>
              <motion.p
                className="text-white/80 text-xl font-light leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Begin your journey with Aaliyah's self-titled masterpiece.
                Experience the evolution of R&B through her innovative sound,
                powerful vocals, and timeless artistry.
              </motion.p>
            </div>
            <motion.div
              className="flex items-center justify-start gap-8 mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                {
                  href: "https://open.spotify.com/album/5eHseOO2Hm8ryJCZTtbp01",
                  src: "/spotify.png",
                  alt: "Spotify",
                },
                {
                  href: "https://music.youtube.com/playlist?list=OLAK5uy_nMkuTRPRFSB-DGO76r064IHSFuCbeecy8",
                  src: "/youtube-music.jpg",
                  alt: "YouTube Music",
                  rounded: true,
                },
                {
                  href: "https://music.apple.com/us/album/aaliyah/1769670387",
                  src: "/apple-music.png",
                  alt: "Apple Music",
                },
              ].map((platform, index) => (
                <Link
                  key={platform.alt}
                  href={platform.href}
                  target="_blank"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    width={90}
                    height={90}
                    className={`opacity-90 group-hover:opacity-100 transition-all duration-300 ${
                      platform.rounded ? "rounded-full" : ""
                    }`}
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
            }
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="relative h-[600px] w-full"
          >
            <Image
              src="/about/aaliyah.jpg"
              alt="Aaliyah Album Cover"
              fill
              className="object-cover rounded-[2rem] shadow-2xl"
              priority
              style={{ objectPosition: "center" }}
            />
            <div
              className="absolute inset-0 rounded-[2rem]"
              style={{
                background: `linear-gradient(135deg,
                  rgba(181, 64, 84, 0.2),
                  transparent 50%
                )`,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
