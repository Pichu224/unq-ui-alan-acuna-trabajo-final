import { useState } from "react";
import type { GameStartViewProps } from "../types/gameStartViewProps";

export default function GameStartView({ onStart }: GameStartViewProps) {
  const [name, setName] = useState("");

  const handleStart = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    onStart(trimmed);
  };

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-slate-800">
        Ingresá tu nombre
      </h1>

      <input
        className="w-full border border-slate-300 rounded-lg p-3 text-center"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleStart()}
      />

      <button
        onClick={handleStart}
        className="w-full bg-blue-600 text-white py-3 rounded-lg"
      >
        Empezar
      </button>
    </div>
  );
}