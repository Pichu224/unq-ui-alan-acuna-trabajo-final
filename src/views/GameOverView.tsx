
import { Link } from "react-router-dom";
import type { GameOverViewProps } from "../types/gameOverViewProps";
import GameOver from "../components/gameOver";
import WordChain from "../components/wordChain";

export default function GameOverView({
  score,
  words,
  onRestart,
}: GameOverViewProps) {
  return (
    <div className="w-full space-y-6">

      <GameOver
        score={score}
        wordsCount={words.length}
      />

      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 bg-red-600 text-white py-3 rounded-lg"
        >
          Jugar de nuevo
        </button>

        <Link
          to="/"
          className="flex-1 bg-slate-200 text-center py-3 rounded-lg"
        >
          Home
        </Link>
      </div>

      <div className="border-t border-slate-200" />

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-500 uppercase">
          Palabras jugadas
        </h2>

        <WordChain words={words} />
      </div>

    </div>
  );
}