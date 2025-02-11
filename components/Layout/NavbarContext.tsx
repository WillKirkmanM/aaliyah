"use client";

import { createContext, useState, ReactNode } from 'react';

interface NavbarContextProps {
  navbarOpacity: number;
  setNavbarOpacity: (opacity: number) => void;
}

const NavbarContext = createContext<NavbarContextProps>({
  navbarOpacity: 1,
  setNavbarOpacity: () => {},
});

interface NavbarProviderProps {
  children: ReactNode;
}

const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [navbarOpacity, setNavbarOpacity] = useState(0.8);

  return (
    <NavbarContext.Provider value={{ navbarOpacity, setNavbarOpacity }}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarContext, NavbarProvider };