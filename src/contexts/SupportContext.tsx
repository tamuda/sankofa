"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SupportPath = "support" | "partner" | null;

interface SupportContextType {
  selectedPath: SupportPath;
  setSelectedPath: (path: SupportPath) => void;
}

const SupportContext = createContext<SupportContextType | undefined>(undefined);

export function SupportProvider({ children }: { children: ReactNode }) {
  const [selectedPath, setSelectedPath] = useState<SupportPath>("support");

  return (
    <SupportContext.Provider value={{ selectedPath, setSelectedPath }}>
      {children}
    </SupportContext.Provider>
  );
}

export function useSupport() {
  const context = useContext(SupportContext);
  if (context === undefined) {
    throw new Error("useSupport must be used within a SupportProvider");
  }
  return context;
}

