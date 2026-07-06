import { useCallback, useEffect, useRef, useState } from "react";
import wordService from "../services/wordService.ts";
import normalizeWord from "../utils/normalizedWord.ts";
import useTimer from "../hooks/useTimer.tsx"
import GameOverView from "../views/GameOverView.tsx";
import GameView from "../views/GameView.tsx";

export default function Game() {

    const [score, setScore] = useState(0);
    const [words, setWords] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
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

    const handleGameOver = useCallback(() => {
      setGameOver(true);
    }, []);

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
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-3 sm:p-4 md:p-6 py-4 sm:py-6 md:py-8">
        {gameOver ? (
          <GameOverView
            score={score}
            words={words}
            onRestart={resetGame}
          />
        ) : (
          <GameView
            score={score}
            words={words}
            error={error}
            timeLeft={timeLeft}
            onSubmit={handleWordSubmit}
            disabled={false}
          />
        )}
    </div>
  );
}