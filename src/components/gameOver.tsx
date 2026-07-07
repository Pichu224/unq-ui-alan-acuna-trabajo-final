import type { GameOverProps } from "../types/gameOverProps";

export default function GameOver({
  score,
  wordsCount,
}: GameOverProps) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-red-600">
        Fin de la partida
      </h2>

      <p>Puntaje final: <strong>{score}</strong></p>
      <p>Palabras: <strong>{wordsCount}</strong></p>
    </div>
  );
}