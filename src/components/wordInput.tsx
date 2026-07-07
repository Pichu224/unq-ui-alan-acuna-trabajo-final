import { useState } from "react";
import type { WordInputProps } from "../types/wordInputProps";

export default function WordInput({ onSubmit, disabled }: WordInputProps) {
    const [value, setValue] = useState("");

    const handleSubmit = async () => {
        const trimmedValue = value.trim();
        if (!trimmedValue) return;

        const accepted = await onSubmit(trimmedValue);
        if (accepted) {
            setValue("");
        }
    }

    return (
        <div className="flex gap-2 flex-col sm:flex-row">
            <input
                className="flex-1 border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
                placeholder="Escribí una palabra..."
                value={value}
                disabled={disabled}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter") handleSubmit();
                }}
            />
            <button
                className="bg-slate-800 hover:bg-slate-900 disabled:hover:bg-slate-800 transition-colors text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg disabled:opacity-50 text-sm sm:text-base font-medium w-full sm:w-auto"
                onClick={handleSubmit}
                disabled={disabled}
            >
                Enviar
            </button>
        </div>
    );
}