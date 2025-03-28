"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const tracks = [
  { title: "We Need A Resolution", duration: "4:03" },
  { title: "Loose Rap", duration: "3:50" },
  { title: "Rock The Boat", duration: "4:35" },
  { title: "More Than A Woman", duration: "3:50" },
  { title: "Never No More", duration: "3:59" },
  { title: "I Care 4 U", duration: "4:34" },
  { title: "Extra Smooth", duration: "3:55" },
  { title: "Read Between The Lines", duration: "4:21" },
  { title: "U got Nerve", duration: "3:43" },
  { title: "I Refuse", duration: "5:58" },
  { title: "It's Whatever", duration: "4:09" },
  { title: "I Can Be", duration: "3:00" },
  { title: "Those Were The Days", duration: "3:25" },
  { title: "What If", duration: "4:20" },
  { title: "Try Again", duration: "4:45" }
];

export default function TracklistComponent() {
    return (
      <div className="h-screen bg-black text-white relative overflow-hidden">
        <div className="fixed inset-0 z-0">
          <Image
            src="/more-than-a-woman-visualizer.jpg"
            alt="Background"
            fill
            className="object-cover"
            style={{ filter: 'blur(10px) brightness(0.3)' }}
          />
        </div>
  
        <div className="relative z-10 p-8 flex items-center justify-center h-screen pt-32">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/aaliyah.jpg"
                  alt="Aaliyah Album Cover"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <div className="flex items-center justify-between mt-4">
                  <motion.h1 
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Aaliyah
                  </motion.h1>
                  <motion.p 
                    className="text-gray-400 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    2001 • 15 songs • 63 minutes
                  </motion.p>
                </div>
              </motion.div>
  
              <div className="flex-1">
                <div className="backdrop-blur-sm bg-black/30 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      {tracks.slice(0, 8).map((track, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center p-3 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <span className="w-8 text-gray-400 text-lg">{index + 1}</span>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{track.title}</h3>
                          </div>
                          <span className="text-gray-400 text-sm">{track.duration}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      {tracks.slice(8).map((track, index) => (
                        <motion.div
                          key={index + 7}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index + 7) * 0.05 }}
                          className="flex items-center p-3 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <span className="w-8 text-gray-400 text-lg">{index + 9}</span>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{track.title}</h3>
                          </div>
                          <span className="text-gray-400 text-sm">{track.duration}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }