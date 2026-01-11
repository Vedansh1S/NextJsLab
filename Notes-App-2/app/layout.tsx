import "./globals.css";

export const metadata = {
  title: "Notes App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-900 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
