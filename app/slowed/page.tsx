"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const oneInAMillionTracks = [
  {
    title: "Beats 4 Da Streets (Intro)",
    videoUrl: "https://www.youtube.com/embed/2x3QN3fmJnc",
  },
  {
    title: "Hot Like Fire",
    videoUrl: "https://www.youtube.com/embed/lwiIFDSII3U",
  },
  {
    title: "One In a Million",
    videoUrl: "https://www.youtube.com/embed/uCYJ5PG1RRM",
  },
  {
    title: "A Girl Like You",
    videoUrl: "https://www.youtube.com/embed/ARrp-qZcXNQ",
  },
  {
    title: "If Your Girl Only Knew",
    videoUrl: "https://www.youtube.com/embed/iYVma_NPdYM",
  },
  {
    title: "Choosey Lover (Old School / New School)",
    videoUrl: "https://www.youtube.com/embed/s_KMlq9B6bI",
  },
  {
    title: "Got to Give It Up",
    videoUrl: "https://www.youtube.com/watch?v=4SqybQznjDM",
  },
  {
    title: "4 Page Letter",
    videoUrl: "https://www.youtube.com/embed/GUaITsXVluM",
  },
  {
    title: "Everything's Gonna Be Alright / Giving You More",
    videoUrl: "https://www.youtube.com/embed/qQy9DVqvFR8",
  },
  {
    title: "I Gotcha' Back",
    videoUrl: "https://www.youtube.com/embed/aI4e5sd0yYw",
  },
  {
    title: "Never Givin' Up",
    videoUrl: "https://www.youtube.com/embed/J_BlJFSb9TQ",
  },
  {
    title: "Heartbroken",
    videoUrl: "https://www.youtube.com/embed/7KMP9ECaOGY",
  },
  {
    title: "Never Comin' Back",
    videoUrl: "https://www.youtube.com/embed/smSZBt6mg0Q",
  },
  {
    title: "Ladies In Da House",
    videoUrl: "https://www.youtube.com/embed/_YC3E_LtbnQ",
  },
  {
    title: "The One I Gave My Heart To",
    videoUrl: "https://www.youtube.com/embed/NMo34EacfFs",
  },
  {
    title: "Came To Give Love (Outro)",
    videoUrl: "https://www.youtube.com/embed/vfqOwRQOz0A",
  },
];

const aaliyahTracks = [
  {
    title: "We Need A Resolution",
    videoUrl: "https://www.youtube.com/embed/t2NqjymInuk",
  },
  {
    title: "Loose Rap",
    videoUrl: "https://www.youtube.com/embed/ooryAHqz5hk",
  },
  {
    title: "Rock The Boat",
    videoUrl: "https://www.youtube.com/embed/3QvXZ5HzAG8",
  },
  {
    title: "More Than A Woman",
    videoUrl: "https://www.youtube.com/embed/DcU7LWEW3Rg",
  },
  {
    title: "Never No More",
    videoUrl: "https://www.youtube.com/embed/3bfGWt253GQ",
  },
  {
    title: "I Care 4 U",
    videoUrl: "https://www.youtube.com/embed/_VRkayGXGmE",
  },
  {
    title: "Extra Smooth",
    videoUrl: "https://www.youtube.com/embed/9tYfMXr3Tv4",
  },
  {
    title: "Read Between The Lines",
    videoUrl: "https://www.youtube.com/embed/5lDSc8rOmaM",
  },
  {
    title: "U Got Nerve",
    videoUrl: "https://www.youtube.com/embed/vp5ukYzku6w",
  },
  {
    title: "I Refuse",
    videoUrl: "https://www.youtube.com/embed/cuyC3Frcsew",
  },
  {
    title: "It's Whatever",
    videoUrl: "https://www.youtube.com/embed/8P295nsgjaw",
  },
  {
    title: "I Can Be",
    videoUrl: "https://www.youtube.com/embed/ZKZLM18QKhc",
  },
  {
    title: "Those Were The Days",
    videoUrl: "https://www.youtube.com/embed/s10Tf_Ktcas",
  },
  {
    title: "What If",
    videoUrl: "https://www.youtube.com/embed/6ycqvBcwIBY",
  },
  {
    title: "Try Again",
    videoUrl: "https://www.youtube.com/embed/SpT9058KhTQ",
  },
];

export default function SlowedPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
        return (
      <div className="bg-black text-white relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Image
            src="/about/slowed.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            quality={100}
            priority
            style={{ filter: "blur(8px)" }}
          />
        </div>
    
        <div className="relative z-10">
          <motion.div
            ref={ref}
            className="min-h-[50vh] flex flex-col items-center justify-center py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-blue-gray-400 to-slate-300"              
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Slowed Down
            </motion.h1>
            <motion.p
              className="text-2xl mb-16 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A curated collection of slowed tracks
            </motion.p>
          </motion.div>
    
          <div className="max-w-7xl mx-auto px-6 space-y-40 pb-32">
            <section className="mt-32">
              <motion.div 
                className="flex flex-col md:flex-row gap-8 items-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-full max-w-[350px] aspect-square relative shadow-2xl">
                  <Image 
                    src="/aaliyah.jpg" 
                    alt="Aaliyah Album Cover" 
                    fill
                    className="object-cover rounded-lg"
                    style={{
                      boxShadow: "0 0 30px rgba(255,165,0,0.3)"
                    }}
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <motion.h2
                    className="text-5xl font-bold bg-gradient-to-r from-orange-200 via-amber-300 to-orange-300 bg-clip-text text-transparent mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Aaliyah
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-300 mb-6 font-light"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Neo-soul influenced tracks from her self-titled album, reimagined at a slower tempo
                  </motion.p>
                  <motion.div 
                    className="flex gap-4 justify-center md:justify-start"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="px-4 py-2 rounded-full bg-orange-900/30 text-orange-200 text-sm border border-orange-800">Neo-Soul</span>
                    <span className="px-4 py-2 rounded-full bg-black text-orange-200 text-sm border border-orange-800/40">Slowed</span>
                    <span className="px-4 py-2 rounded-full bg-orange-900/30 text-orange-200 text-sm border border-orange-800">2001</span>
                  </motion.div>
                </div>
              </motion.div>
            
              <div className="grid md:grid-cols-2 gap-10">
                {aaliyahTracks.map((track, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col backdrop-blur-sm bg-black/60 rounded-xl overflow-hidden border border-orange-800/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="aspect-video w-full">
                      <iframe
                        src={track.videoUrl}
                        title={track.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4 border-t border-orange-800/20 bg-gradient-to-r from-black to-orange-900/20">
                      <h3 className="text-xl font-medium text-orange-100">{track.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
                    <section>
                      <motion.div 
                        className="flex flex-col md:flex-row gap-8 items-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-full max-w-[350px] aspect-square relative shadow-2xl">
                          <Image 
                            src="/one-in-a-million.png" 
                            alt="One In A Million Album Cover" 
                            fill
                            className="object-cover rounded-lg"
                            style={{
                              boxShadow: "0 0 30px rgba(0,180,80,0.3)"
                            }}
                          />
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <motion.h2
                            className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-black to-rose-700 bg-clip-text text-transparent mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            One In A Million
                          </motion.h2>
                          <motion.p 
                            className="text-xl text-gray-300 mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            Slowed down renditions of Aaliyah's groundbreaking sophomore album
                          </motion.p>
                          <motion.div 
                            className="flex gap-4 justify-center md:justify-start"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span className="px-4 py-2 rounded-full bg-emerald-900/30 text-emerald-200 text-sm border border-emerald-800">Slowed</span>
                            <span className="px-4 py-2 rounded-full bg-gray-900/70 text-gray-200 text-sm border border-gray-800">R&B</span>
                            <span className="px-4 py-2 rounded-full bg-red-900/30 text-red-200 text-sm border border-red-800">1996</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    
                      <div className="grid md:grid-cols-2 gap-10">
                        {oneInAMillionTracks.map((track, index) => (
                          <motion.div
                            key={index}
                            className="flex flex-col backdrop-blur-sm bg-gray-900/40 rounded-xl overflow-hidden border border-emerald-900/30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="aspect-video w-full">
                              <iframe
                                src={track.videoUrl}
                                title={track.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                            <div className="p-4 border-t border-emerald-900/30 bg-gradient-to-r from-black via-black to-emerald-900/30">
                              <h3 className="text-xl font-semibold text-emerald-100">{track.title}</h3>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </section>
          </div>
        </div>
      </div>
    );;
}