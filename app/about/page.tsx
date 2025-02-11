"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-black text-white py-24 flex flex-col items-center">
      <motion.div 
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl text-center md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c94735] via-[#cd8d6e] to-[#d2b8a3]">
          About Aaliyah (The Red Album)
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/aaliyah.jpg"
              alt="Aaliyah Portrait"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>

          <motion.div 
            className="space-y-6 text-lg text-gray-300"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl font-light leading-relaxed">
            &quot;Well, I decided to self-title this album Aaliyah, and I wanted to do that because my name is Arabic, and it has a beautiful meaning. It means the highest, most exalted one, the best. And I want a name to really carry the project.&quot;
            </p>
            
            <p className="text-xl">
            &quot;It&apos;s different from the last LPs because I&apos;m older, you know, more mature, and I think that&apos;s very evident on the album.&quot;
            </p>

            <p className="text-xl">
            &quot;So it really showcases Aaliyah and who she is.&quot;
            </p>
            <p className="italic text-gray-400 mt-8">
              &quot;I stay true to myself and my style, and I am always pushing myself 
              to be aware of that and be original.&quot;
              <br />- Aaliyah
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        ref={ref}
        className="max-w-6xl mx-auto px-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c94735] via-[#cd8d6e] to-[#d2b8a3]">
          More About Aaliyah (The Red Album)
        </h2>
         <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-gray-300">
          <p className="text-2xl font-light leading-relaxed">
            Aaliyah, often referred to as &quot;The Red Album&quot; due to its distinctive packaging, is the third and final studio album by the iconic American singer Aaliyah. Released on July 7, 2001, this album showcases Aaliyah&apos;s artistic growth and maturity.
          </p>
          <p className="text-xl">
            Aaliyah began working on this album in 1998, with recording sessions taking place in various locations, including Sing Sing Studios in Australia, where she balanced her music with her role in the film &quot;Queen of the Damned.&quot;
          </p>
          <p className="text-xl">
            The album is a blend of R&B, neo soul, and dance-pop, incorporating elements from funk, hip hop, alternative rock, electronica, and Latin music. Its themes explore the complexities of romantic love and relationships.
          </p>
          <p className="text-xl">
            &quot;Aaliyah&quot; received critical acclaim and achieved commercial success, reaching the top of the Billboard 200 chart. It has since been recognized as one of the most influential R&B albums of its era, impacting numerous artists and solidifying Aaliyah&apos;s legacy.
          </p>
        </div>
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/about/red-back.jpg"
              alt="Aaliyah Portrait"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
          </div>
      </motion.div>
    </div>
  );
}