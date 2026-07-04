import type { ScoreProps } from "../types/scoreProps";

export default function Score({ score }: ScoreProps) {
    return (
        <div className="bg-slate-100 px-4 py-2 rounded-lg">
            <p className="text-sm text-slate-500">Puntaje</p>
            <p className="text-xl front-bold text-slate-800">{score}</p>
        </div>
    );
}