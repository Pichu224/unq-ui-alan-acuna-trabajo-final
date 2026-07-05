import { useEffect, useRef, useState } from "react";
import Score from "./score.tsx";
import Timer from "./timer.tsx";
import WordInput from "./wordInput.tsx";
import WordChain from "./wordChain.tsx";
import GameOver from "./gameOver.tsx";
import wordService from "../services/wordService.ts";
import normalizeWord from "../utils/normalizedWord.ts";
import useTimer from "../hooks/useTimer.tsx"

export default function Game() {

    const [score, setScore] = useState(0);
    const [words, setWords] = useState<string[]>([]);
    const [error, setError] = useState<String | null>(null);
    const [gameOver, setGameOver] = useState(false);

    const gameOverRef = useRef(false);
    const isRunning = !gameOver && words.length > 0;

    useEffect(() => {
      gameOverRef.current = gameOver;
    }, [gameOver]);

    const handleWordSubmit = async (word: string) => {
      if (gameOverRef.current) return;
      try {
        const normalizedWord = normalizeWord(word);

        await validateWordExists(normalizedWord);
        validateRepeatedWord(normalizedWord);
        validateWordChain(normalizedWord);

        if (gameOverRef.current) return;
        setWords(previous => [...previous, normalizedWord]);
        setScore(previous => previous + normalizedWord.length);
        resetTimer();
        setError(null);

      } catch (error) {
        setError(
            error instanceof Error
                ? error.message
                : "Ocurrió un error inesperado."
        );
      }
    }

    const validateWordExists = async (word: string) => {
      const validation = await wordService.validate(word);

      if (!validation.exists) {
          throw new Error("La palabra no existe.");
      }
    };

    const validateRepeatedWord = (word: string) => {
      if (words.includes(word)) {
          throw new Error("La palabra ya fue utilizada.");
      }
    };

    const validateWordChain = (word: string) => {
      const lastWord = words.at(-1);

      if (!lastWord) return;

      const lastLetter = lastWord.at(-1)!;

      if (!word.startsWith(lastLetter)) {
        throw new Error("La palabra no respeta la cadena.");
      }
    };

    const handleGameOver = () => {
      setGameOver(true);
    };

    const { timeLeft, resetTimer } = useTimer({
      initialTime: 15,
      isRunning,
      onFinish: handleGameOver,
    });

    const resetGame = () => {
      setWords([]);
      setScore(0);
      setError(null);
      setGameOver(false);
      resetTimer();
    };
    
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
          onSubmit={handleWordSubmit}
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
            onRestart={resetGame}
          />
        )}

      </div>
    </div>
  );
}