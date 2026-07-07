import { useCallback, useRef, useState } from "react";
import storageService from "../services/storageBoardService";
import wordService from "../services/wordService";
import useTimer from "./useTimer";
import normalizeWord from "../utils/normalizedWord";

export default function useGame(playerName: string) {
  const [score, setScore] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const gameOverRef = useRef(false);

  const isRunning = !gameOver && words.length > 0;

  const handleGameOver = useCallback(() => {
    gameOverRef.current = true;
    setGameOver(true);

    storageService.addResult({
      name: playerName,
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

    if (!word.startsWith(lastWord.at(-1)!)) {
      throw new Error("La palabra no respeta la cadena.");
    }
  };

  const handleWordSubmit = async (word: string) => {
    if (gameOverRef.current) return false;

    try {
      const normalizedWord = normalizeWord(word);

      await validateWordExists(normalizedWord);
      validateRepeatedWord(normalizedWord);
      validateWordChain(normalizedWord);

      if (gameOverRef.current) return false;

      setWords((previous) => [...previous, normalizedWord]);
      setScore((previous) => previous + normalizedWord.length);

      resetTimer();
      setError(null);
      return true;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado."
      );
      return false;
    }
  };

  const resetGame = () => {
    gameOverRef.current = false;

    setScore(0);
    setWords([]);
    setError(null);
    setGameOver(false);

    resetTimer();
  };

  return {
    score,
    words,
    error,
    gameOver,
    timeLeft,
    handleWordSubmit,
    resetGame,
  };
}