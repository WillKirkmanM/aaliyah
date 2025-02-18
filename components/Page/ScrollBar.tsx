"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <style jsx global>{`
        /* Hide default scrollbar */
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {children}
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 h-[80px] z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-[3px] bg-white/20 backdrop-blur-sm rounded-full"
          style={{
            height: `${scrollProgress}%`,
          }}
          whileHover={{ 
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            width: "4px"
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
      </motion.div>
    </div>
  );
}
