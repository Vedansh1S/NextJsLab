import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-100">
        <Providers>
          {/* --- THE RAY OF LIGHT - Applied to whole page --- */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* The Beam: Rotated, heavily blurred, gradient from corner */}
            <div
              className="absolute -top-[20%] -left-[20%] w-[80%] h-[150%] 
              bg-linear-to-br from-amber-300/30 via-orange-100/5 to-transparent
              dark:from-indigo-500/30 dark:via-purple-500/5 dark:to-transparent
              blur-[100px] rotate-45 transform-gpu"
            />
          </div>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
