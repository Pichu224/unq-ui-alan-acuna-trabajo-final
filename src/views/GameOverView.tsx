import GameOver from "../components/gameOver";
import WordChain from "../components/wordChain";
import type { GameOverViewProps } from "../types/gameOverViewProps";

export default function GameOverView({
  score,
  words,
  onRestart,
}: GameOverViewProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">

      <GameOver
        score={score}
        wordsCount={words.length}
        onRestart={onRestart}
      />

      <div className="border-t border-slate-200" />
      
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
          Palabras jugadas
        </h2>

        <WordChain words={words} />
      </div>
    </div>
  );
}