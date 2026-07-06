import type { TimerProps } from "../types/timerProps";

export default function Timer({ timeLeft }: TimerProps) {
    return (
        <div className="bg-slate-100 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-right flex-1">
            <p className="text-xs sm:text-sm text-slate-500">Tiempo</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                {timeLeft}s
            </p>
        </div>
    );
}