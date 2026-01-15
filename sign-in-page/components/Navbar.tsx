import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between text-zinc-950 tracking-tight">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-extrabold">
          MyApp
        </Link>

        {/* Nav links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="text-zinc-700 hover:text-zinc-950">
            Home
          </Link>

          <Link href="/signin" className="text-zinc-700 hover:text-zinc-950">
            Sign In
          </Link>

          <Link href="/signup" className="text-zinc-700 hover:text-zinc-950">
            Sign Up
          </Link>

          <Link href="/dashboard" className="text-zinc-700 hover:text-zinc-950">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
