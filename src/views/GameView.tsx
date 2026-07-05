import Score from "../components/score";
import Timer from "../components/timer";
import WordChain from "../components/wordChain";
import WordInput from "../components/wordInput";
import type { GameViewProps } from "../types/gameViewProps";

export default function GameScreen({
  score,
  words,
  error,
  timeLeft,
  onSubmit,
}: GameViewProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 space-y-6">

      {/* HEADER */}
      <header className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-slate-800">
          Palabras Encadenadas
        </h1>
        <p className="text-slate-500">
          Formá la cadena más larga posible
        </p>
      </header>

      {/* SCORE + TIMER */}
      <div className="flex justify-between items-center">
        <Score score={score} />
        <Timer timeLeft={timeLeft} />
      </div>

      {/* INPUT */}
      <WordInput onSubmit={onSubmit} />

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-sm font-medium">
          {error}
        </div>
      )}

      {/* CHAIN */}
      <WordChain words={words} />

    </div>
  );
}