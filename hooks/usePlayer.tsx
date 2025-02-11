"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface Song {
  id: string;
  title: string;
  album: string;
  cover: string;
  youtubeId: string;
}

interface PlayerContextType {
  playingSong: Song | null;
  setPlayingSong: (song: Song | null) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [playingSong, setPlayingSong] = useState<Song | null>(null);

  return (
    <PlayerContext.Provider value={{ playingSong, setPlayingSong }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}