import type { GameOverProps } from "../types/gameOverProps";

export default function GameOver({
    score,
    wordsCount,
    onRestart,
}: GameOverProps) {
    return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center space-y-3">
            <h2 className="text-2xl font-bold text-red-600">
                Fin de la partida
            </h2>

            <p className="text-slate-700">
                Puntaje final: <strong>{score}</strong>
            </p>

            <p className="text-slate-700">
                Palabras: <strong>{wordsCount}</strong>
            </p>

            <button 
                className="bg-red-600 text-white px-4 py-2 rounded-lg" 
                onClick={onRestart}
            >
                Jugar otra vez
            </button>
        </div>
    );
}