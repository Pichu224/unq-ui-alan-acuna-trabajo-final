import { useState } from "react";

import Score from "./score.tsx";
import Timer from "./timer.tsx";
import WordInput from "./wordInput.tsx";
import WordChain from "./wordChain.tsx";
import GameOver from "./gameOver.tsx";

export default function Game() {

    const [score] = useState(0);
    const [timeLeft] = useState(15);
    const [words] = useState<string[]>([]);
    const [error] = useState<String | null>(null);
    const [gameOver] = useState(false);

    return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
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
        <WordInput
          onSubmit={() => {}}
          disabled={gameOver}
        />

        {/* ERROR */}
        {error && (
          <div className="text-red-500 text-sm font-medium">
            {error}
          </div>
        )}

        {/* CHAIN */}
        <WordChain words={words} />
            
        {/* GAME OVER */}
        {gameOver && (
          <GameOver
            score={score}
            wordsCount={words.length}
            onRestart={() => {}}
          />
        )}

      </div>
    </div>
  );
}