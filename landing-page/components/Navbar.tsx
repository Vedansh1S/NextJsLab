"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-sm font-medium transition-colors py-2"
    >
      <span
        className={`transition-colors ${
          isActive
            ? "text-zinc-950 dark:text-zinc-100"
            : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100"
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950 dark:bg-zinc-100 transition-all duration-300 ease-in-out ${
          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100 hover:opacity-80 transition-opacity"
        >
          100xApp
        </Link>

        {/* Desktop Nav links and Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-4 lg:gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/signin">Sign In</NavLink>
            <NavLink href="/signup">Sign Up</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </div>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 pb-4 border-t border-zinc-200/50 dark:border-zinc-700/50 animate-in slide-in-from-top">
          <div className="flex flex-col gap-3 pt-4 px-4">
            <NavLink href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/signin" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </NavLink>
            <NavLink href="/signup" onClick={() => setMobileMenuOpen(false)}>
              Sign Up
            </NavLink>
            <NavLink href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}