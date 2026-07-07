import type { PageLayoutProps } from "../types/PageLayoutProps";

export default function PageLayout({
  children,
  className = "",
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-slate-100 flex items-center justify-center p-6 ${className}`}>
      {children}
    </div>
  );
}