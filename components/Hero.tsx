"use client"

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const handleBeginJourney = () => {
    const tvSection = document.getElementById('tv-section');
    if (tvSection) {
      tvSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.section className="h-screen relative overflow-hidden">
      <motion.div 
        style={{ 
          scale,
          y: yBg,
        }}
        className="absolute inset-0"
      >
        <motion.img
          src="/aaliyah.jpg"
          alt="Aaliyah"
          className="w-full h-[130%] object-cover object-top"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        style={{ opacity }}
      />

      <motion.div 
        className="relative z-20 h-full flex flex-col justify-center items-center text-white gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-center tracking-wider"
            style={{ y: titleY }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            AALIYAH
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl font-light text-center tracking-widest text-white/80"
            style={{ y: subtitleY }}
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
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}