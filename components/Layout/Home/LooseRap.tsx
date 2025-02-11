"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function LooseRap() {
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
                      #cfbeb5 0%,
                      #9aa187 20%,
                      #884536 35%,
                      #b5462d 45%,
                      #5a2622 60%,
                      #391a16 75%,
                      #91838c 85%,
                      #57434c 95%
                    )
                  `,
                  opacity: 0.7
                }}
              />
            </div>
            <Image
              src="/home/loose-rap.jpg"
              alt="Aaliyah Album Cover"
              width={500}
              height={500}
              className="object-cover object-[center_40%] rounded-lg shadow-2xl relative z-10 h-full w-full"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#cfbeb5] via-[#b5462d] to-[#391a16]"
            >
              Loose Rap
            </motion.h2>            
            <p className="text-gray-300 text-lg mb-8">
              "The song 'Loose Rap' tells three distinct stories: one about jealousy, another about a guy trying to impress me, and the third about my crew's creativity. It's all about people coming at you with weak talk, and how we respond to that."

              - Aaliyah
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}