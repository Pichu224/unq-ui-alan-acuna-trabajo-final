import type { PageCardProps } from "../types/pageCardProps";

export default function PageCard({ children, className = "" }: PageCardProps) {
  return (
    <div
      className={`w-full max-w-2xl bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6 ${className}`}
    >
      {children}
    </div>
  );
}