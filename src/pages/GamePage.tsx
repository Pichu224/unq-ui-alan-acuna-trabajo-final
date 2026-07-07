import { useCallback, useRef, useState } from "react";
import PageCard from "../components/pageCard";
import wordService from "../services/wordService";
import normalizeWord from "../utils/normalizedWord";
import useTimer from "../hooks/useTimer";
import GameStartView from "../views/GameStartView";
import GameView from "../views/GameView";
import GameOverView from "../views/GameOverView";
import storageService from "../services/storageBoardService";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [playerName, setPlayerName] = useState<string | null>(
    sessionStorage.getItem("playerName")
  );

  const gameOverRef = useRef(false);

  const isRunning = !gameOver && words.length > 0;

  const handleGameOver = useCallback(() => {
    setGameOver(true);

    storageService.addResult({
        name: playerName || "jugador",
        score,
        wordsCount: words.length,
    });
  }, [playerName, score, words.length]);

  const { timeLeft, resetTimer } = useTimer({
    initialTime: 15,
    isRunning,
    onFinish: handleGameOver,
  });

  const validateWordExists = async (word: string) => {
    const res = await wordService.validate(word);
    if (!res.exists) throw new Error("La palabra no existe");
  };

  const validateRepeatedWord = (word: string) => {
    if (words.includes(word)) throw new Error("Repetida");
  };

  const validateWordChain = (word: string) => {
    const last = words.at(-1);
    if (!last) return;

    if (!word.startsWith(last.at(-1)!)) {
      throw new Error("No encadena");
    }
  };

  const handleWordSubmit = async (word: string) => {
    if (gameOverRef.current) return;

    try {
      const normalized = normalizeWord(word);

      await validateWordExists(normalized);
      validateRepeatedWord(normalized);
      validateWordChain(normalized);

      if (gameOverRef.current) return;

      setWords((prev) => [...prev, normalized]);
      setScore((prev) => prev + normalized.length);

      resetTimer();
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
    }
  };

  const handleStart = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    sessionStorage.setItem("playerName", trimmed);
    setPlayerName(trimmed);
    setHasStarted(true);
  };

  const resetGame = () => {
    setWords([]);
    setScore(0);
    setError(null);
    setGameOver(false);
    setHasStarted(false);
    resetTimer();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <PageCard className="max-w-xl">
        {!hasStarted ? (
          <GameStartView
            onStart={handleStart}
          />
        ) : gameOver ? (
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
      </PageCard>
    </div>
  );
}