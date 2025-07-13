import type { ReactNode } from "react";

export function Body({ children }: { children: ReactNode }) {
  return (
    <main className="w-full max-w-3xl mx-auto py-8 px-4 min-h-[calc(100vh-64px)] flex flex-col">
      {children}
    </main>
  );
}
