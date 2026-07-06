import type { GameOverProps } from "../types/gameOverProps";

export default function GameOver({
    score,
    wordsCount,
    onRestart,
}: GameOverProps) {
    return (
        <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">
                Fin de la partida
            </h2>

            <p className="text-sm sm:text-base text-slate-700">
                Puntaje final: <strong>{score}</strong>
            </p>

            <p className="text-sm sm:text-base text-slate-700">
                Palabras: <strong>{wordsCount}</strong>
            </p>

            <button 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition-colors text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium" 
                onClick={onRestart}
            >
                Jugar otra vez
            </button>
        </div>
    );
}