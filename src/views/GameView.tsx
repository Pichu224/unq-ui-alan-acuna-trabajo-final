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
  disabled,
}: GameViewProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">

      {/* HEADER */}
      <header className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
          Palabras Encadenadas
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-500">
          Formá la cadena más larga posible
        </p>
      </header>

      {/* SCORE + TIMER */}
      <div className="flex justify-between items-center gap-2 sm:gap-4">
        <Score score={score} />
        <Timer timeLeft={timeLeft} />
      </div>

      {/* INPUT */}
      <WordInput onSubmit={onSubmit} disabled={disabled} />

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-xs sm:text-sm font-medium px-3 py-2 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      {/* CHAIN */}
      <WordChain words={words} />

    </div>
  );
}