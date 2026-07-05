import type { WordChainProps } from "../types/wordChainProps";

export default function WordChain({ words }: WordChainProps) {
    return (
        <div className="bg-slate-50 rounded-lg p-4 min-h-[120px]">
            <p className="text-sm text-slate-500 mb-2">
                Cadena de palabras
            </p>

            {words.length === 0 ? (
                <p className="text-slate-400 text-sm">
                    Todavía no hay palabras...
                </p>
            ) : (
                <ul className="space-y-1">
                    {words.map((word, i) => (
                        <li key={i} className="text-slate-800 font-medium">
                            • {word}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}