import Score from "../components/score";
import Timer from "../components/timer";
import WordChain from "../components/wordChain";
import WordInput from "../components/wordInput";
import type { GameViewProps } from "../types/gameViewProps";

export default function GameView({
  score,
  words,
  error,
  timeLeft,
  onSubmit,
  disabled,
}: GameViewProps) {
  return (
    <div className="space-y-6 w-full">

      <header className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-slate-800">
          Palabras Encadenadas
        </h1>
        <p className="text-slate-500">
          Formá la cadena más larga posible
        </p>
      </header>

      <div className="flex justify-between items-center">
        <Score score={score} />
        <Timer timeLeft={timeLeft} />
      </div>

      <WordInput onSubmit={onSubmit} disabled={disabled} />

      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
          {error}
        </div>
      )}

      <WordChain words={words} />
    </div>
  );
}