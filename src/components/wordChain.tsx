import type { WordChainProps } from "../types/wordChainProps";

export default function WordChain({ words }: WordChainProps) {
    return (
        <div className="bg-slate-50 rounded-lg p-3 sm:p-4 md:p-5 min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
            <p className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">
                Cadena de palabras
            </p>

            {words.length === 0 ? (
                <p className="text-slate-400 text-xs sm:text-sm">
                    Todavía no hay palabras...
                </p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3">
                    {words.map((word, index) => (
                        <div
                        key={index}
                        className="bg-gray-100 hover:bg-gray-200 transition-colors rounded px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs sm:text-sm md:text-base font-medium text-slate-700 break-words"
                        >
                        {word}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}