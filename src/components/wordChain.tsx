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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {words.map((word, index) => (
                        <div
                        key={index}
                        className="bg-gray-100 rounded px-3 py-2 text-center"
                        >
                        {word}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}