// context/PredictionContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type PredictionResult = {
  team1: string;
  team2: string;
  winner: string;
  confidence: number;
} | null;

type PredictionContextType = {
  team1: string;
  team2: string;
  setTeam1: (value: string) => void;
  setTeam2: (value: string) => void;
  isLoading: boolean;
  result: PredictionResult;
  predict: () => void;
};

const PredictionContext = createContext<PredictionContextType | undefined>(
  undefined,
);

export function PredictionProvider({ children }: { children: ReactNode }) {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult>(null);

  const predict = () => {
    if (!team1 || !team2) return;

    setIsLoading(true);
    setResult(null);

    // Simulated delay — replace with real API call later
    setTimeout(() => {
      setResult({
        team1,
        team2,
        winner: team1, // placeholder logic until backend is wired
        confidence: 82,
      });
      setIsLoading(false);
    }, 1800);
  };

  return (
    <PredictionContext.Provider
      value={{ team1, team2, setTeam1, setTeam2, isLoading, result, predict }}
    >
      {children}
    </PredictionContext.Provider>
  );
}

export function usePrediction() {
  const ctx = useContext(PredictionContext);
  if (!ctx) {
    throw new Error("usePrediction must be used within a PredictionProvider");
  }
  return ctx;
}
