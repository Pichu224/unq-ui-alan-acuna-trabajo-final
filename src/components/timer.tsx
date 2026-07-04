import type { TimerProps } from "../types/timerProps";

export default function Timer({ timeLeft }: TimerProps) {
    return (
        <div className="bg-slate-100 px-4 py-2 rounded-lg text-right">
            <p className="text-sm text-slate-500">Tiempo</p>
            <p className="text-xl front-bold text-slate-800">
                {timeLeft}s
            </p>
        </div>
    );
}