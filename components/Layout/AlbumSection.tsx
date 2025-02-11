"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function AlbumSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c94735] via-[#cd8d6e] to-[#d2b8a3]"
            >
              The Red Album
            </motion.h2>
            <p className="text-gray-300 text-lg mb-8">
              Released in July 2001, Aaliyah's third and final studio album 
              showcased her evolution as an woman.
            </p>
          </motion.div>
          
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
                    background: `
                    radial-gradient(circle at center,
                        #c1372d 0%,
                        #1f0906 10%,
                        #db957b 20%,
                        #c37255 30%,
                        #7b3226 40%,
                        #cb8374 50%,
                        #5c3425 60%,
                        #c25c54 70%,
                        #dc5c4c 80%,
                        #c41c24 90%
                    )
                    `,
                    opacity: 0.6
                }}
                />
            </div>
            <Image
              src="/aaliyah.jpg"
              alt="Aaliyah Album Cover"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}