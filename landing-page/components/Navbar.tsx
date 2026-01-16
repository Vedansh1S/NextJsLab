"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

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
          <div className="flex items-center gap-4 lg:gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/signin"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              Sign Up
            </Link>

            <Link
              href="/dashboard"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              Dashboard
            </Link>
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
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors py-2 text-sm font-medium"
            >
              Home
            </Link>

            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors py-2 text-sm font-medium"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors py-2 text-sm font-medium"
            >
              Sign Up
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors py-2 text-sm font-medium"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}