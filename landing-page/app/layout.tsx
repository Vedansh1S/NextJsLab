import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
        <Providers>
          {/* --- BACKGROUND LAYER --- */}
          <div className="fixed inset-0 -z-10 h-full w-full">
            {/* 1. Base Background Color (handled in body, but reinforced here if needed) */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-950" />

            {/* 2. The Grid Pattern */}
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            {/* 3. The Vignette Mask (Fades the grid out at edges/bottom) */}
            <div className="absolute inset-0 bg-linear-to-tr from-white via-white/90 to-transparent dark:from-zinc-950 dark:via-zinc-950/90 dark:to-transparent"></div>
          </div>

          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}