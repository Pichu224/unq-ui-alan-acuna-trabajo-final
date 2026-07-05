import { useState } from "react";
import type { WordInputProps } from "../types/wordInputProps";

export default function WordInput({ onSubmit, disabled }: WordInputProps) {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if (!value.trim()) return;

        onSubmit(value);
        setValue("");
    }

    return (
        <div className="flex gap-2">
            <input
                className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Escribí una palabra..."
                value={value}
                disabled={disabled}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter") handleSubmit();
                }}
            />
            <button
                className="bg-slate-800 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                onClick={handleSubmit}
                disabled={disabled}
            >
                Enviar
            </button>
        </div>
    );
}